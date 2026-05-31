const STORAGE_KEY = "ahmad-times-attendance-v1";
const LANG_KEY = "ahmad-times-language";
const STANDARD_HOURS = 8;

const translations = {
  en: {
    language: "Language",
    today: "Today",
    addWorkerShort: "+ Worker",
    totalWorkers: "Total workers",
    activeWorkers: "Active workers",
    inactiveWorkers: "Inactive workers",
    presentToday: "Present today",
    monthWages: "This month wages",
    monthlyOvertime: "Monthly overtime",
    monthlyWageSummary: "Monthly Wage Summary",
    worker: "Worker",
    days: "Days",
    hours: "Hours",
    overtime: "Overtime",
    dailyWage: "Daily wage",
    total: "Total",
    dailyAttendance: "Daily Attendance",
    addWorker: "Add worker",
    oneDay: "One day",
    fullMonth: "Full month",
    markOneDay: "Mark One Day",
    markFullMonth: "Mark Full Month",
    present: "Present",
    absent: "Absent",
    off: "Off",
    notMarked: "Not marked",
    in: "In",
    out: "Out",
    startNow: "Start now",
    outNow: "Out now",
    roleWorker: "Worker",
    noWorkers: "No workers added yet.",
    noActiveWorkers: "No active workers. Add or reactivate a worker first.",
    noWageRecords: "No wage records for this month.",
    cloudReady: "Cloud ready",
    localMode: "Local mode",
    setupLogin: "Setup login",
    login: "Login",
    logout: "Logout",
    noAccess: "No access",
    online: "online",
  },
  ps: {
    language: "ژبه",
    today: "نن",
    addWorkerShort: "+ کارکوونکی",
    totalWorkers: "ټول کارکوونکي",
    activeWorkers: "فعال کارکوونکي",
    inactiveWorkers: "غیر فعال کارکوونکي",
    presentToday: "نن حاضر",
    monthWages: "د دې میاشتې مزدوري",
    monthlyOvertime: "د میاشتې اضافي وخت",
    monthlyWageSummary: "د میاشتې مزدورۍ لنډیز",
    worker: "کارکوونکی",
    days: "ورځې",
    hours: "ساعتونه",
    overtime: "اضافي وخت",
    dailyWage: "ورځنۍ مزدوري",
    total: "ټول",
    dailyAttendance: "ورځنی حاضري",
    addWorker: "کارکوونکی اضافه کړئ",
    oneDay: "یوه ورځ",
    fullMonth: "ټوله میاشت",
    markOneDay: "یوه ورځ ثبت کړئ",
    markFullMonth: "ټوله میاشت ثبت کړئ",
    present: "حاضر",
    absent: "غیر حاضر",
    off: "رخصت",
    notMarked: "نه دی ثبت",
    in: "داخل",
    out: "وتل",
    startNow: "اوس داخل",
    outNow: "اوس وتل",
    roleWorker: "کارکوونکی",
    noWorkers: "تر اوسه کارکوونکی نشته.",
    noActiveWorkers: "فعال کارکوونکی نشته. کارکوونکی اضافه يا فعال کړئ.",
    noWageRecords: "د دې میاشتې لپاره د مزدورۍ ریکارډ نشته.",
    cloudReady: "کلاوډ چمتو دی",
    localMode: "محلي حالت",
    setupLogin: "ننوتل تنظیم کړئ",
    login: "ننوتل",
    logout: "وتل",
    noAccess: "اجازه نشته",
    online: "آنلاین",
  },
};

const app = {
  workers: [],
  attendance: {},
  lastSaved: null,
  storageMode: "local",
  user: null,
  profile: null,
  language: localStorage.getItem(LANG_KEY) || "en",
};

let supabaseClient = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const todayISO = () => new Date().toISOString().slice(0, 10);
const monthISO = (date = new Date()) => date.toISOString().slice(0, 7);
const money = (value) => `AED ${Number(value || 0).toLocaleString("en-AE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const makeId = () => crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
const t = (key) => translations[app.language]?.[key] || translations.en[key] || key;

function cloudConfigured() {
  const config = window.AHMAD_TIMES_SUPABASE || {};
  return Boolean(config.url && config.anonKey && window.supabase);
}

async function initCloud() {
  if (!cloudConfigured()) {
    app.storageMode = "local";
    return;
  }

  const config = window.AHMAD_TIMES_SUPABASE;
  supabaseClient = window.supabase.createClient(config.url, config.anonKey);
  const { data } = await supabaseClient.auth.getSession();
  app.user = data.session?.user || null;
  if (app.user) await loadProfile();
  app.storageMode = app.user ? "cloud" : "login required";
}

async function loadProfile() {
  if (!supabaseClient || !app.user) return;
  const { data, error } = await supabaseClient
    .from("profiles")
    .select("email, role, active")
    .eq("id", app.user.id)
    .maybeSingle();
  if (error) console.warn(error.message);
  app.profile = data || null;
}

async function loadData() {
  if (supabaseClient && app.user && app.profile?.active) {
    const { data, error } = await supabaseClient
      .from("app_data")
      .select("data")
      .eq("id", "main")
      .maybeSingle();
    if (!error && data?.data) {
      Object.assign(app, data.data);
      app.storageMode = "cloud";
      app.user = (await supabaseClient.auth.getUser()).data.user;
      await loadProfile();
      return;
    }
    if (error) toast(error.message);
  }

  const saved = getBrowserBackup();
  if (saved) {
    try {
      Object.assign(app, JSON.parse(saved));
      app.storageMode = supabaseClient ? "login required" : "local";
      return;
    } catch {
      removeBrowserBackup();
    }
  }

  app.workers = [];
  saveData(false);
}

async function saveData(show = true) {
  app.lastSaved = new Date().toISOString();
  setBrowserBackup();

  if (supabaseClient && app.user && app.profile?.active && ["admin", "manager"].includes(app.profile.role)) {
    const payload = {
      workers: app.workers,
      attendance: app.attendance,
      lastSaved: app.lastSaved,
    };
    const { error } = await supabaseClient
      .from("app_data")
      .upsert({ id: "main", data: payload, updated_by: app.user.id, updated_at: new Date().toISOString() });
    if (error) {
      toast(`Cloud save failed: ${error.message}`);
    } else {
      app.storageMode = "cloud";
      if (show) toast("Saved online");
    }
  } else if (show) {
    toast(supabaseClient ? "Saved locally. Login to save online." : "Saved locally");
  }

  renderAll();
}

function getBrowserBackup() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function setBrowserBackup() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      workers: app.workers,
      attendance: app.attendance,
      lastSaved: app.lastSaved,
    }));
  } catch {
    // Browser storage can be disabled; cloud storage is primary after login.
  }
}

function removeBrowserBackup() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore unavailable storage.
  }
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => el.classList.remove("show"), 1800);
}

function setDefaults() {
  const today = todayISO();
  const month = monthISO();
  $("#languageSelect").value = app.language;
  $("#todayInput").value = today;
  $("#attendanceDate").value = today;
  $("#reportDate").value = today;
  $("#dashboardMonth").value = month;
  $("#attendanceMonth").value = month;
  $("#reportMonth").value = month;
  $("#workerJoinDate").value = today;
}

function activeWorkers() {
  return app.workers.filter((worker) => worker.status === "active");
}

function getAttendance(date, workerId) {
  return getAttendanceRecord(date, workerId).status;
}

function getAttendanceRecord(date, workerId) {
  return normalizeAttendanceRecord(app.attendance[date]?.[workerId]);
}

function normalizeAttendanceRecord(record) {
  if (!record) return { status: "", inTime: "", outTime: "" };
  if (typeof record === "string") return { status: record, inTime: "", outTime: "" };
  return {
    status: record.status || "",
    inTime: record.inTime || "",
    outTime: record.outTime || "",
  };
}

function setAttendance(date, workerId, status) {
  app.attendance[date] ||= {};
  const current = getAttendanceRecord(date, workerId);
  if (status) {
    const now = currentTime();
    app.attendance[date][workerId] = {
      ...current,
      status,
      inTime: status === "present" ? (current.inTime || now) : "",
      outTime: status === "present" ? current.outTime : "",
    };
  }
  else delete app.attendance[date][workerId];
  if (Object.keys(app.attendance[date]).length === 0) delete app.attendance[date];
  saveData();
}

function setAttendanceTime(date, workerId, field, value) {
  app.attendance[date] ||= {};
  const current = getAttendanceRecord(date, workerId);
  app.attendance[date][workerId] = {
    ...current,
    status: current.status || "present",
    [field]: value,
  };
  if (field === "inTime" && value && !current.outTime) app.attendance[date][workerId].outTime = "";
  saveData();
}

function setNowTime(date, workerId, field) {
  setAttendanceTime(date, workerId, field, currentTime());
}

function currentTime() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

function calculateHours(record) {
  const item = normalizeAttendanceRecord(record);
  if (!item.inTime || !item.outTime) return { total: 0, overtime: 0 };
  const [inHour, inMinute] = item.inTime.split(":").map(Number);
  const [outHour, outMinute] = item.outTime.split(":").map(Number);
  let start = inHour * 60 + inMinute;
  let end = outHour * 60 + outMinute;
  if (end < start) end += 24 * 60;
  const total = Math.max(0, (end - start) / 60);
  return {
    total,
    overtime: Math.max(0, total - STANDARD_HOURS),
  };
}

function formatHours(value) {
  if (!value) return "0h";
  const hours = Math.floor(value);
  const minutes = Math.round((value - hours) * 60);
  if (!hours) return `${minutes}m`;
  if (!minutes) return `${hours}h`;
  return `${hours}h ${minutes}m`;
}

function daysInMonth(month) {
  const [year, monthIndex] = month.split("-").map(Number);
  const total = new Date(year, monthIndex, 0).getDate();
  return Array.from({ length: total }, (_, index) => `${month}-${String(index + 1).padStart(2, "0")}`);
}

function recordsForRange(start, end, workerId = "all") {
  const rows = [];
  const current = new Date(`${start}T00:00:00`);
  const last = new Date(`${end}T00:00:00`);
  while (current <= last) {
    const date = current.toISOString().slice(0, 10);
    const day = app.attendance[date] || {};
    app.workers.forEach((worker) => {
      if (workerId !== "all" && worker.id !== workerId) return;
      const record = normalizeAttendanceRecord(day[worker.id]);
      const status = record.status;
      if (!status) return;
      const hours = calculateHours(record);
      rows.push({
        date,
        worker,
        status,
        inTime: record.inTime,
        outTime: record.outTime,
        hours: hours.total,
        overtime: hours.overtime,
        wage: status === "present" ? Number(worker.dailyWage || 0) : 0,
      });
    });
    current.setDate(current.getDate() + 1);
  }
  return rows;
}

function monthSummary(month, workerId = "all") {
  const dates = daysInMonth(month);
  return app.workers
    .filter((worker) => workerId === "all" || worker.id === workerId)
    .map((worker) => {
      const present = dates.filter((date) => getAttendance(date, worker.id) === "present").length;
      const absent = dates.filter((date) => getAttendance(date, worker.id) === "absent").length;
      const off = dates.filter((date) => getAttendance(date, worker.id) === "off").length;
      const hours = dates.reduce((sum, date) => sum + calculateHours(getAttendanceRecord(date, worker.id)).total, 0);
      const overtime = dates.reduce((sum, date) => sum + calculateHours(getAttendanceRecord(date, worker.id)).overtime, 0);
      return {
        worker,
        present,
        absent,
        off,
        hours,
        overtime,
        wage: present * Number(worker.dailyWage || 0),
      };
    });
}

function renderAll() {
  applyLanguage();
  renderAuthStatus();
  renderDashboard();
  renderWorkers();
  renderDayAttendance();
  renderMonthAttendance();
  renderReport();
  renderStorage();
}

function applyLanguage() {
  document.documentElement.lang = app.language;
  document.documentElement.dir = app.language === "ps" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  const languageSelect = $("#languageSelect");
  if (languageSelect) languageSelect.value = app.language;
}

function renderAuthStatus() {
  const status = $("#cloudStatus");
  const authButton = $("#authButton");
  if (!status || !authButton) return;

  status.classList.remove("online", "warning");
  if (!supabaseClient) {
    status.textContent = t("localMode");
    status.classList.add("warning");
    authButton.textContent = t("setupLogin");
    return;
  }

  if (!app.user) {
    status.textContent = t("cloudReady");
    status.classList.add("warning");
    authButton.textContent = t("login");
    return;
  }

  if (!app.profile?.active) {
    status.textContent = t("noAccess");
    status.classList.add("warning");
    authButton.textContent = t("logout");
    return;
  }

  status.textContent = `${app.profile.role} ${t("online")}`;
  status.classList.add("online");
  authButton.textContent = t("logout");
}

function renderDashboard() {
  const date = $("#todayInput").value || todayISO();
  const month = $("#dashboardMonth").value || monthISO();
  const summary = monthSummary(month);
  const todayRecords = app.attendance[date] || {};
  const monthWages = summary.reduce((sum, row) => sum + row.wage, 0);
  const monthOvertime = summary.reduce((sum, row) => sum + row.overtime, 0);

  $("#statTotalWorkers").textContent = app.workers.length;
  $("#statActiveWorkers").textContent = app.workers.filter((worker) => worker.status === "active").length;
  $("#statInactiveWorkers").textContent = app.workers.filter((worker) => worker.status === "inactive").length;
  $("#statPresentToday").textContent = Object.values(todayRecords).filter((record) => normalizeAttendanceRecord(record).status === "present").length;
  $("#statMonthWages").textContent = money(monthWages);
  $("#statAttendanceDays").textContent = formatHours(monthOvertime);
  $("#dashboardDateLabel").textContent = date;

  $("#dashboardSummary").innerHTML = summary
    .filter((row) => row.present || row.worker.status === "active")
    .map((row) => `
      <tr>
        <td>${escapeHTML(row.worker.name)}</td>
        <td>${row.present}</td>
        <td>${formatHours(row.hours)}</td>
        <td>${formatHours(row.overtime)}</td>
        <td>${money(row.worker.dailyWage)}</td>
        <td><strong>${money(row.wage)}</strong></td>
      </tr>
    `).join("") || `<tr><td colspan="6">No wage records for this month.</td></tr>`;

  $("#todayList").innerHTML = app.workers.map((worker) => {
    const record = normalizeAttendanceRecord(todayRecords[worker.id]);
    const status = record.status || "not marked";
    const hours = calculateHours(record);
    return `
      <div class="today-row">
        <div>
          <strong>${escapeHTML(worker.name)}</strong>
          <p>In: ${record.inTime || "-"} · Out: ${record.outTime || "-"} · Hours: ${formatHours(hours.total)} · OT: ${formatHours(hours.overtime)}</p>
          <p>${escapeHTML(worker.role || "Worker")} · ${money(worker.dailyWage)}</p>
        </div>
        <span class="pill">${statusLabel(status)}</span>
      </div>
    `;
  }).join("") || emptyState("No workers added yet.");
}

function renderWorkers() {
  const query = ($("#workerSearch").value || "").trim().toLowerCase();
  const workers = app.workers.filter((worker) => {
    const haystack = [worker.name, worker.role, worker.phone, worker.emiratesId, worker.status].join(" ").toLowerCase();
    return haystack.includes(query);
  });

  $("#workersList").innerHTML = workers.map((worker) => `
    <article class="worker-card">
      <div class="worker-card-head">
        <div>
          <h3>${escapeHTML(worker.name)}</h3>
          <p>${escapeHTML(worker.role || "Worker")}</p>
        </div>
        <span class="status-pill ${worker.status}">${worker.status}</span>
      </div>
      <div class="worker-meta">
        <div><span>Daily wage</span><strong>${money(worker.dailyWage)}</strong></div>
        <div><span>Joined</span><strong>${worker.joinDate || "-"}</strong></div>
        <div><span>Phone</span><strong>${escapeHTML(worker.phone || "-")}</strong></div>
        <div><span>Emirates ID</span><strong>${escapeHTML(worker.emiratesId || "-")}</strong></div>
      </div>
      <button data-edit-worker="${worker.id}">Edit details</button>
    </article>
  `).join("") || emptyState("No workers match this search.");
}

function renderDayAttendance() {
  const date = $("#attendanceDate").value || todayISO();
  $("#dayAttendanceList").innerHTML = activeWorkers().map((worker) => attendanceRowWithTime(worker, date)).join("") || emptyState(t("noActiveWorkers"));
}

function attendanceRowWithTime(worker, date) {
  const record = getAttendanceRecord(date, worker.id);
  const hours = calculateHours(record);
  return `
    <div class="attendance-row">
      <div>
        <strong>${escapeHTML(worker.name)}</strong>
        <p>${escapeHTML(worker.role || t("roleWorker"))} · ${money(worker.dailyWage)}</p>
        <p class="time-summary">${t("in")}: ${record.inTime || "-"} · ${t("out")}: ${record.outTime || "-"} · ${t("hours")}: ${formatHours(hours.total)} · ${t("overtime")}: ${formatHours(hours.overtime)}</p>
      </div>
      <div class="attendance-control">
        <div class="attendance-actions" data-worker="${worker.id}" data-date="${date}">
          ${["present", "absent", "off"].map((status) => `
            <button data-status="${status}" class="${record.status === status ? "active" : ""}">${statusLabel(status)}</button>
          `).join("")}
        </div>
        <div class="time-grid" data-worker="${worker.id}" data-date="${date}">
          <label>${t("in")}<input type="time" data-time-field="inTime" value="${record.inTime}"></label>
          <label>${t("out")}<input type="time" data-time-field="outTime" value="${record.outTime}"></label>
          <button data-now-field="inTime">${t("startNow")}</button>
          <button data-now-field="outTime">${t("outNow")}</button>
        </div>
      </div>
    </div>
  `;
}

function attendanceRow(worker, date) {
  const current = getAttendance(date, worker.id);
  return `
    <div class="attendance-row">
      <div>
        <strong>${escapeHTML(worker.name)}</strong>
        <p>${escapeHTML(worker.role || "Worker")} · ${money(worker.dailyWage)}</p>
      </div>
      <div class="attendance-actions" data-worker="${worker.id}" data-date="${date}">
        ${["present", "absent", "off"].map((status) => `
          <button data-status="${status}" class="${current === status ? "active" : ""}">${statusLabel(status)}</button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderMonthAttendance() {
  const month = $("#attendanceMonth").value || monthISO();
  const dates = daysInMonth(month);
  const rows = activeWorkers().map((worker) => `
    <tr>
      <td>
        <strong>${escapeHTML(worker.name)}</strong><br>
        <span>${money(worker.dailyWage)}</span>
      </td>
      ${dates.map((date) => `
        <td class="month-day">
          <select class="mini-select" data-month-worker="${worker.id}" data-month-date="${date}" aria-label="${escapeHTML(worker.name)} ${date}">
            <option value="" ${getAttendance(date, worker.id) === "" ? "selected" : ""}>-</option>
            <option value="present" ${getAttendance(date, worker.id) === "present" ? "selected" : ""}>P</option>
            <option value="absent" ${getAttendance(date, worker.id) === "absent" ? "selected" : ""}>A</option>
            <option value="off" ${getAttendance(date, worker.id) === "off" ? "selected" : ""}>O</option>
          </select>
        </td>
      `).join("")}
    </tr>
  `).join("");

  $("#monthAttendanceGrid").innerHTML = `
    <table class="month-table">
      <thead>
        <tr>
          <th>Worker</th>
          ${dates.map((date) => `<th class="month-day">${Number(date.slice(-2))}</th>`).join("")}
        </tr>
      </thead>
      <tbody>${rows || `<tr><td colspan="${dates.length + 1}">No active workers.</td></tr>`}</tbody>
    </table>
  `;
}

function renderReport() {
  const type = $("#reportType").value;
  const workerId = $("#reportWorker").value || "all";
  const month = $("#reportMonth").value || monthISO();
  const reportDate = $("#reportDate").value || todayISO();
  let start = reportDate;
  let end = reportDate;
  let title = `Daily report · ${reportDate}`;

  if (type === "weekly") {
    const date = new Date(`${reportDate}T00:00:00`);
    const day = date.getDay();
    date.setDate(date.getDate() - day);
    start = date.toISOString().slice(0, 10);
    date.setDate(date.getDate() + 6);
    end = date.toISOString().slice(0, 10);
    title = `Weekly report · ${start} to ${end}`;
  }

  if (type === "monthly") {
    const dates = daysInMonth(month);
    start = dates[0];
    end = dates[dates.length - 1];
    title = `Monthly report · ${month}`;
  }

  const workerOptions = [`<option value="all">Company-wide report</option>`]
    .concat(app.workers.map((worker) => `<option value="${worker.id}" ${worker.id === workerId ? "selected" : ""}>${escapeHTML(worker.name)}</option>`));
  $("#reportWorker").innerHTML = workerOptions.join("");

  const rows = type === "monthly" ? monthSummary(month, workerId) : summarizeRecords(recordsForRange(start, end, workerId));
  const totals = rows.reduce((acc, row) => {
    acc.present += row.present;
    acc.absent += row.absent;
    acc.off += row.off;
    acc.hours += row.hours || 0;
    acc.overtime += row.overtime || 0;
    acc.wage += row.wage;
    return acc;
  }, { present: 0, absent: 0, off: 0, hours: 0, overtime: 0, wage: 0 });

  $("#reportOutput").innerHTML = `
    <h3>${title}</h3>
    <p class="help-text">${workerId === "all" ? "Company-wide" : escapeHTML(app.workers.find((worker) => worker.id === workerId)?.name || "Worker")} wage and attendance report.</p>
    <div class="summary-strip">
      <div><span>Present days</span><strong>${totals.present}</strong></div>
      <div><span>Absent days</span><strong>${totals.absent}</strong></div>
      <div><span>Off days</span><strong>${totals.off}</strong></div>
      <div><span>Total hours</span><strong>${formatHours(totals.hours)}</strong></div>
      <div><span>Overtime</span><strong>${formatHours(totals.overtime)}</strong></div>
      <div><span>Total wages</span><strong>${money(totals.wage)}</strong></div>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Worker</th>
            <th>Status</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Off</th>
            <th>Hours</th>
            <th>Overtime</th>
            <th>Daily wage</th>
            <th>Total wage</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr>
              <td>${escapeHTML(row.worker.name)}</td>
              <td>${row.worker.status}</td>
              <td>${row.present}</td>
              <td>${row.absent}</td>
              <td>${row.off}</td>
              <td>${formatHours(row.hours || 0)}</td>
              <td>${formatHours(row.overtime || 0)}</td>
              <td>${money(row.worker.dailyWage)}</td>
              <td><strong>${money(row.wage)}</strong></td>
            </tr>
          `).join("") || `<tr><td colspan="9">No records for this report.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

function summarizeRecords(records) {
  const grouped = new Map();
  records.forEach((record) => {
    const item = grouped.get(record.worker.id) || { worker: record.worker, present: 0, absent: 0, off: 0, hours: 0, overtime: 0, wage: 0 };
    item[record.status] += 1;
    item.hours += record.hours || 0;
    item.overtime += record.overtime || 0;
    item.wage += record.wage;
    grouped.set(record.worker.id, item);
  });
  return Array.from(grouped.values());
}

function renderStorage() {
  const attendanceCount = Object.values(app.attendance).reduce((sum, day) => sum + Object.keys(day).length, 0);
  $("#storageWorkers").textContent = app.workers.length;
  $("#storageAttendance").textContent = attendanceCount;
  $("#storageSaved").textContent = app.lastSaved ? new Date(app.lastSaved).toLocaleString() : "Never";
}

function openWorkerDialog(workerId = "") {
  const worker = app.workers.find((item) => item.id === workerId);
  $("#workerDialogTitle").textContent = worker ? "Edit worker" : "Add worker";
  $("#workerId").value = worker?.id || "";
  $("#workerName").value = worker?.name || "";
  $("#workerRole").value = worker?.role || "";
  $("#workerPhone").value = worker?.phone || "";
  $("#workerEmiratesId").value = worker?.emiratesId || "";
  $("#workerDailyWage").value = worker?.dailyWage ?? "";
  $("#workerJoinDate").value = worker?.joinDate || todayISO();
  $("#workerStatus").value = worker?.status || "active";
  $("#workerNotes").value = worker?.notes || "";
  $("#deleteWorkerBtn").style.display = worker ? "inline-block" : "none";
  $("#workerDialog").showModal();
}

function saveWorkerFromForm() {
  const id = $("#workerId").value || makeId();
  const existing = app.workers.find((worker) => worker.id === id);
  const worker = {
    id,
    name: $("#workerName").value.trim(),
    role: $("#workerRole").value.trim(),
    phone: $("#workerPhone").value.trim(),
    emiratesId: $("#workerEmiratesId").value.trim(),
    dailyWage: Number($("#workerDailyWage").value || 0),
    joinDate: $("#workerJoinDate").value,
    status: $("#workerStatus").value,
    notes: $("#workerNotes").value.trim(),
    createdAt: existing?.createdAt || new Date().toISOString(),
  };

  if (!worker.name) {
    toast("Worker name is required");
    return;
  }

  if (existing) Object.assign(existing, worker);
  else app.workers.push(worker);

  $("#workerDialog").close();
  saveData();
  toast(existing ? "Worker updated" : "Worker added");
}

function removeWorker() {
  const id = $("#workerId").value;
  if (!id) return;
  const worker = app.workers.find((item) => item.id === id);
  const hasRecords = Object.values(app.attendance).some((day) => day[id]);
  const message = hasRecords
    ? `${worker.name} has attendance records. Mark inactive instead to keep records safe? Press OK to mark inactive.`
    : `Remove ${worker.name}?`;

  if (!confirm(message)) return;

  if (hasRecords) {
    worker.status = "inactive";
  } else {
    app.workers = app.workers.filter((item) => item.id !== id);
  }
  $("#workerDialog").close();
  saveData();
}

function exportBackup() {
  downloadFile(`ahmad-times-backup-${todayISO()}.json`, JSON.stringify(app, null, 2), "application/json");
}

function importBackup(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!Array.isArray(parsed.workers) || typeof parsed.attendance !== "object") throw new Error("Invalid file");
      app.workers = parsed.workers;
      app.attendance = parsed.attendance;
      app.lastSaved = parsed.lastSaved || new Date().toISOString();
      saveData();
      toast("Backup imported");
    } catch {
      toast("Could not import this backup file");
    }
  };
  reader.readAsText(file);
}

function exportReportCSV() {
  const rows = [["Worker", "Status", "Present", "Absent", "Off", "Hours", "Overtime", "Daily wage", "Total wage"]];
  $("#reportOutput tbody tr").forEach((tr) => {
    const cells = Array.from(tr.children).map((td) => td.textContent.trim());
    if (cells.length === 9) rows.push(cells);
  });
  downloadFile(`attendance-report-${todayISO()}.csv`, rows.map((row) => row.map(csvCell).join(",")).join("\n"), "text/csv");
}

function downloadFile(name, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

function statusLabel(status) {
  return {
    present: t("present"),
    absent: t("absent"),
    off: t("off"),
    "not marked": t("notMarked"),
  }[status] || status;
}

function emptyState(message) {
  return `<div class="today-row"><p>${message}</p></div>`;
}

async function loginFromForm() {
  if (!supabaseClient) {
    toast("Add Supabase URL and anon key first.");
    return;
  }

  const email = $("#authEmail").value.trim();
  const password = $("#authPassword").value;
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) {
    toast(error.message);
    return;
  }

  app.user = data.user;
  await loadProfile();
  if (!app.profile?.active) {
    toast("This email is not added as manager yet.");
    return;
  }

  $("#authDialog").close();
  await loadData();
  renderAll();
  toast("Logged in");
}

async function logout() {
  if (supabaseClient) await supabaseClient.auth.signOut();
  app.user = null;
  app.profile = null;
  app.storageMode = supabaseClient ? "login required" : "local";
  renderAll();
  toast("Logged out");
}

function bindEvents() {
  $$(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".nav-item").forEach((item) => item.classList.remove("active"));
      $$(".view").forEach((view) => view.classList.remove("active"));
      button.classList.add("active");
      $(`#${button.dataset.view}`).classList.add("active");
      $("#pageTitle").textContent = button.textContent;
      renderAll();
    });
  });

  $("#quickAddWorker").addEventListener("click", () => openWorkerDialog());
  $("#languageSelect").addEventListener("change", (event) => {
    app.language = event.target.value;
    localStorage.setItem(LANG_KEY, app.language);
    renderAll();
  });
  $("#authButton").addEventListener("click", async () => {
    if (supabaseClient && app.user) {
      await logout();
    } else {
      $("#authDialog").showModal();
    }
  });
  $("#closeAuthDialog").addEventListener("click", () => $("#authDialog").close());
  $("#cancelAuth").addEventListener("click", () => $("#authDialog").close());
  $("#authForm").addEventListener("submit", (event) => {
    event.preventDefault();
    loginFromForm();
  });
  $("#addWorkerBtn").addEventListener("click", () => openWorkerDialog());
  $("#workerSearch").addEventListener("input", renderWorkers);
  $("#closeWorkerDialog").addEventListener("click", () => $("#workerDialog").close());
  $("#cancelWorker").addEventListener("click", () => $("#workerDialog").close());
  $("#workerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    saveWorkerFromForm();
  });
  $("#deleteWorkerBtn").addEventListener("click", removeWorker);

  document.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-edit-worker]");
    if (editButton) openWorkerDialog(editButton.dataset.editWorker);

    const statusButton = event.target.closest(".attendance-actions button");
    if (statusButton) {
      const parent = statusButton.closest(".attendance-actions");
      const status = statusButton.classList.contains("active") ? "" : statusButton.dataset.status;
      setAttendance(parent.dataset.date, parent.dataset.worker, status);
    }

    const nowButton = event.target.closest("[data-now-field]");
    if (nowButton) {
      const parent = nowButton.closest(".time-grid");
      setNowTime(parent.dataset.date, parent.dataset.worker, nowButton.dataset.nowField);
    }
  });

  document.addEventListener("change", (event) => {
    const select = event.target.closest("[data-month-worker]");
    if (select) setAttendance(select.dataset.monthDate, select.dataset.monthWorker, select.value);

    const timeInput = event.target.closest("[data-time-field]");
    if (timeInput) {
      const parent = timeInput.closest(".time-grid");
      setAttendanceTime(parent.dataset.date, parent.dataset.worker, timeInput.dataset.timeField, timeInput.value);
    }
  });

  ["todayInput", "dashboardMonth", "attendanceDate", "attendanceMonth", "reportType", "reportDate", "reportMonth", "reportWorker"].forEach((id) => {
    $(`#${id}`).addEventListener("change", renderAll);
  });

  $$(".mode-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      $$(".mode-tab").forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      $("#dayAttendancePanel").classList.toggle("hidden", tab.dataset.mode !== "day");
      $("#monthAttendancePanel").classList.toggle("hidden", tab.dataset.mode !== "month");
    });
  });

  $("#markAllPresent").addEventListener("click", () => bulkSetMonth("present"));
  $("#markAllOff").addEventListener("click", () => bulkSetMonth("off"));
  $("#clearMonth").addEventListener("click", () => bulkSetMonth(""));
  $("#printReport").addEventListener("click", () => window.print());
  $("#exportReport").addEventListener("click", exportReportCSV);
  $("#exportBackup").addEventListener("click", exportBackup);
  $("#importBackup").addEventListener("change", (event) => {
    if (event.target.files[0]) importBackup(event.target.files[0]);
  });
}

function bulkSetMonth(status) {
  const month = $("#attendanceMonth").value || monthISO();
  daysInMonth(month).forEach((date) => {
    activeWorkers().forEach((worker) => {
      app.attendance[date] ||= {};
      if (status) app.attendance[date][worker.id] = status;
      else delete app.attendance[date][worker.id];
      if (Object.keys(app.attendance[date]).length === 0) delete app.attendance[date];
    });
  });
  saveData();
}

function renderDashboard() {
  const date = $("#todayInput").value || todayISO();
  const month = $("#dashboardMonth").value || monthISO();
  const summary = monthSummary(month);
  const todayRecords = app.attendance[date] || {};
  const monthWages = summary.reduce((sum, row) => sum + row.wage, 0);
  const monthOvertime = summary.reduce((sum, row) => sum + row.overtime, 0);

  $("#statTotalWorkers").textContent = app.workers.length;
  $("#statActiveWorkers").textContent = app.workers.filter((worker) => worker.status === "active").length;
  $("#statInactiveWorkers").textContent = app.workers.filter((worker) => worker.status === "inactive").length;
  $("#statPresentToday").textContent = Object.values(todayRecords).filter((record) => normalizeAttendanceRecord(record).status === "present").length;
  $("#statMonthWages").textContent = money(monthWages);
  $("#statAttendanceDays").textContent = formatHours(monthOvertime);
  $("#dashboardDateLabel").textContent = date;

  $("#dashboardSummary").innerHTML = summary
    .filter((row) => row.present || row.worker.status === "active")
    .map((row) => `
      <tr>
        <td>${escapeHTML(row.worker.name)}</td>
        <td>${row.present}</td>
        <td>${formatHours(row.hours)}</td>
        <td>${formatHours(row.overtime)}</td>
        <td>${money(row.worker.dailyWage)}</td>
        <td><strong>${money(row.wage)}</strong></td>
      </tr>
    `).join("") || `<tr><td colspan="6">${t("noWageRecords")}</td></tr>`;

  $("#todayList").innerHTML = app.workers.map((worker) => {
    const record = normalizeAttendanceRecord(todayRecords[worker.id]);
    const status = record.status || "not marked";
    const hours = calculateHours(record);
    return `
      <div class="today-row">
        <div>
          <strong>${escapeHTML(worker.name)}</strong>
          <p>${t("in")}: ${record.inTime || "-"} · ${t("out")}: ${record.outTime || "-"} · ${t("hours")}: ${formatHours(hours.total)} · ${t("overtime")}: ${formatHours(hours.overtime)}</p>
          <p>${escapeHTML(worker.role || t("roleWorker"))} · ${money(worker.dailyWage)}</p>
        </div>
        <span class="pill">${statusLabel(status)}</span>
      </div>
    `;
  }).join("") || emptyState(t("noWorkers"));
}

setDefaults();
bindEvents();
initCloud()
  .then(loadData)
  .then(renderAll)
  .catch((error) => {
    console.error(error);
    toast("Could not start cloud mode. Local mode is still available.");
    renderAll();
  });
