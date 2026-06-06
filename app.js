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
    dashboard: "Dashboard",
    workers: "Workers",
    attendance: "Attendance",
    reports: "Reports",
    backup: "Backup",
    appSubtitle: "Automatic attendance and daily wage system",
    buildingMaintenance: "Building Maintenance",
    mainNavigation: "Main navigation",
    search: "Search",
    searchPlaceholder: "Name, role, phone, Emirates ID",
    markVisiblePresent: "Mark visible days present",
    markVisibleOff: "Mark visible days off",
    clearVisibleMonth: "Clear visible month",
    reportType: "Report type",
    daily: "Daily",
    weekly: "Weekly",
    monthly: "Monthly",
    date: "Date",
    month: "Month",
    print: "Print",
    exportCsv: "Export CSV",
    dataBackup: "Data Backup",
    backupHelp: "Export all workers, attendance, and wage records as a JSON backup file. Import the file later to restore the system on this browser.",
    exportBackup: "Export backup",
    importBackup: "Import backup",
    storage: "Storage",
    attendanceRecords: "Attendance records",
    lastSaved: "Last saved",
    never: "Never",
    addWorkerTitle: "Add worker",
    editWorkerTitle: "Edit worker",
    close: "Close",
    fullName: "Full name",
    workerNamePlaceholder: "Worker name",
    roleTrade: "Role / trade",
    rolePlaceholder: "Electrician, plumber, helper",
    phone: "Phone",
    emiratesId: "Emirates ID",
    optional: "Optional",
    dailyWageAed: "Daily wage (AED)",
    joiningDate: "Joining date",
    status: "Status",
    active: "Active",
    inactive: "Inactive",
    notes: "Notes",
    optionalNotes: "Optional notes",
    removeWorker: "Remove worker",
    cancel: "Cancel",
    saveWorker: "Save worker",
    managerLogin: "Manager Login",
    email: "Email",
    password: "Password",
    authHelp: "Use the manager email created in Supabase.",
    companyWideReport: "Company-wide report",
    wageAttendanceReport: "wage and attendance report.",
    dailyReport: "Daily report",
    weeklyReport: "Weekly report",
    monthlyReport: "Monthly report",
    to: "to",
    statusColumn: "Status",
    totalHours: "Total hours",
    totalWages: "Total wages",
    noRecordsReport: "No records for this report.",
    noWorkerSearch: "No workers match this search.",
    workerNameRequired: "Worker name is required",
    workerAdded: "Worker added",
    workerUpdated: "Worker updated",
    saved: "Saved",
    savedOnline: "Saved online",
    savedLocalLogin: "Saved locally. Login to save online.",
    savedLocal: "Saved locally",
    backupImported: "Backup imported",
    backupImportFailed: "Could not import this backup file",
    loginMissingConfig: "Add Supabase URL and anon key first.",
    emailNoManager: "This email is not added as manager yet.",
    loggedIn: "Logged in",
    loggedOut: "Logged out",
    cloudSaveFailed: "Cloud save failed",
    startupCloudFailed: "Could not start cloud mode. Local mode is still available.",
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
    dashboard: "ډشبورډ",
    workers: "کارکوونکي",
    attendance: "حاضري",
    reports: "راپورونه",
    backup: "بیک اپ",
    appSubtitle: "اتومات حاضري او ورځنۍ مزدوري سیستم",
    buildingMaintenance: "بلډنګ مینټیننس",
    mainNavigation: "اصلي مینو",
    search: "لټون",
    searchPlaceholder: "نوم، کار، تلیفون، امارات ID",
    markVisiblePresent: "ښکاره ورځې حاضر کړئ",
    markVisibleOff: "ښکاره ورځې رخصت کړئ",
    clearVisibleMonth: "ښکاره میاشت پاکه کړئ",
    reportType: "د راپور ډول",
    daily: "ورځنی",
    weekly: "اونیز",
    monthly: "میاشتنی",
    date: "نېټه",
    month: "میاشت",
    print: "چاپ",
    exportCsv: "CSV وباسئ",
    dataBackup: "د معلوماتو بیک اپ",
    backupHelp: "ټول کارکوونکي، حاضري او مزدوري ریکارډونه د JSON بیک اپ فایل په توګه وباسئ. وروسته یې د سیستم د بحالولو لپاره داخل کړئ.",
    exportBackup: "بیک اپ وباسئ",
    importBackup: "بیک اپ داخل کړئ",
    storage: "ذخیره",
    attendanceRecords: "د حاضري ریکارډونه",
    lastSaved: "وروستی ذخیره",
    never: "هیڅکله",
    addWorkerTitle: "کارکوونکی اضافه کړئ",
    editWorkerTitle: "کارکوونکی سم کړئ",
    close: "بندول",
    fullName: "مکمل نوم",
    workerNamePlaceholder: "د کارکوونکي نوم",
    roleTrade: "کار / مسلک",
    rolePlaceholder: "برقي، پلمبر، مرسته کوونکی",
    phone: "تلیفون",
    emiratesId: "امارات ID",
    optional: "اختیاري",
    dailyWageAed: "ورځنۍ مزدوري (AED)",
    joiningDate: "د شاملېدو نېټه",
    status: "حالت",
    active: "فعال",
    inactive: "غیر فعال",
    notes: "یادښتونه",
    optionalNotes: "اختیاري یادښتونه",
    removeWorker: "کارکوونکی لرې کړئ",
    cancel: "لغوه",
    saveWorker: "کارکوونکی ذخیره کړئ",
    managerLogin: "د مدیر ننوتل",
    email: "ایمیل",
    password: "پاسورډ",
    authHelp: "هغه مدیر ایمیل وکاروئ چې په Supabase کې جوړ شوی.",
    companyWideReport: "د ټول شرکت راپور",
    wageAttendanceReport: "د مزدورۍ او حاضري راپور.",
    dailyReport: "ورځنی راپور",
    weeklyReport: "اونیز راپور",
    monthlyReport: "میاشتنی راپور",
    to: "تر",
    statusColumn: "حالت",
    totalHours: "ټول ساعتونه",
    totalWages: "ټوله مزدوري",
    noRecordsReport: "د دې راپور لپاره ریکارډ نشته.",
    noWorkerSearch: "د دې لټون لپاره کارکوونکی ونه موندل شو.",
    workerNameRequired: "د کارکوونکي نوم اړین دی",
    workerAdded: "کارکوونکی اضافه شو",
    workerUpdated: "کارکوونکی تازه شو",
    saved: "ذخیره شو",
    savedOnline: "آنلاین ذخیره شو",
    savedLocalLogin: "محلي ذخیره شو. د آنلاین ذخیرې لپاره ننوتل وکړئ.",
    savedLocal: "محلي ذخیره شو",
    backupImported: "بیک اپ داخل شو",
    backupImportFailed: "دا بیک اپ فایل داخل نه شو",
    loginMissingConfig: "لومړی د Supabase URL او anon key اضافه کړئ.",
    emailNoManager: "دا ایمیل لا د مدیر په توګه نه دی اضافه شوی.",
    loggedIn: "ننوتل وشول",
    loggedOut: "وتل وشول",
    cloudSaveFailed: "کلاوډ ذخیره ناکامه شوه",
    startupCloudFailed: "کلاوډ حالت پیل نه شو. محلي حالت لا هم کار کوي.",
  },
};

Object.assign(translations.en, {
  totalActiveLabour: "Total active labour",
  activeLabour: "Active labour",
  inactiveLabour: "Inactive labour",
  allLabour: "All labour",
  city: "City",
  cityPlaceholder: "Dubai, Sharjah...",
  performance: "Performance",
  excellent: "Excellent",
  good: "Good",
  average: "Average",
  needsImprovement: "Needs improvement",
  duplicateWorker: "Another worker already has the same name, Emirates ID, or phone number.",
  halfday: "Half day",
  halfDays: "Half days",
  printAllWages: "Print all wages",
  printSelectedWage: "Print selected wage",
  baseWage: "Base wage",
  overtimeWage: "Overtime wage",
  payments: "Payments",
  paid: "Paid",
  pending: "Pending",
  unpaid: "Unpaid",
  unpaidWages: "Unpaid wages",
  nationality: "Nationality",
  nationalityPlaceholder: "Afghan, Pakistani...",
  foodDeduction: "Food deduction (AED)",
  foodDeductionTotal: "Food deduction",
  payableWage: "Payable wage",
  paidAmount: "Paid amount",
  paidToday: "Paid today",
  manualOvertime: "Manual overtime (hours)",
  paymentDate: "Payment date",
  paymentMethod: "Payment method",
  paymentNote: "Payment note",
  savePayment: "Save payment",
  cash: "Cash",
  bank: "Bank transfer",
  exchange: "Exchange",
  other: "Other",
  paymentSaved: "Payment saved",
  currentDailyWage: "Current daily wage",
  wageEffectiveDate: "Wage effective from",
  wageHistory: "Wage history",
  effectiveFrom: "from",
});

Object.assign(translations.ps, {
  totalActiveLabour: "ټول فعال مزدوران",
  activeLabour: "فعال مزدوران",
  inactiveLabour: "غیر فعال مزدوران",
  allLabour: "ټول مزدوران",
  city: "ښار",
  cityPlaceholder: "دوبۍ، شارجه...",
  performance: "کارکردګي",
  excellent: "ډېر ښه",
  good: "ښه",
  average: "منځنی",
  needsImprovement: "ښه والي ته اړتیا",
  duplicateWorker: "بل کارکوونکی همدا نوم، امارات ID یا تلیفون لري.",
  halfday: "نیمه ورځ",
  halfDays: "نیمې ورځې",
  printAllWages: "د ټولو مزدوري چاپ",
  printSelectedWage: "د یو مزدور مزدوري چاپ",
  baseWage: "اصلي مزدوري",
  overtimeWage: "د اضافي وخت مزدوري",
  payments: "تادیات",
  paid: "ورکړل شوي",
  pending: "پاتې",
  unpaid: "نه ورکړل شوي",
  unpaidWages: "نه ورکړل شوې مزدوري",
  nationality: "تابعیت",
  nationalityPlaceholder: "افغان، پاکستانی...",
  foodDeduction: "د خوراک کسر (AED)",
  foodDeductionTotal: "د خوراک کسر",
  payableWage: "د ورکړې مزدوري",
  paidAmount: "ورکړل شوې اندازه",
  paidToday: "نن ورکړل شوې",
  manualOvertime: "لاسي اضافي وخت (ساعتونه)",
  paymentDate: "د تادیې نېټه",
  paymentMethod: "د تادیې طریقه",
  paymentNote: "د تادیې یادښت",
  savePayment: "تادیه ذخیره کړئ",
  cash: "نغدې",
  bank: "بانکي حواله",
  exchange: "صرافۍ",
  other: "نور",
  paymentSaved: "تادیه ذخیره شوه",
});

Object.assign(translations.ps, {
  currentDailyWage: "اوسنۍ ورځنۍ مزدوري",
  wageEffectiveDate: "مزدوري له دې نېټې نه",
  wageHistory: "د مزدورۍ تاریخچه",
  effectiveFrom: "له",
});

const app = {
  workers: [],
  attendance: {},
  payments: {},
  lastSaved: null,
  storageMode: "local",
  user: null,
  profile: null,
  language: localStorage.getItem(LANG_KEY) || "en",
  workerFilter: "active",
};

let supabaseClient = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const todayISO = () => new Date().toISOString().slice(0, 10);
const monthISO = (date = new Date()) => date.toISOString().slice(0, 7);
const money = (value) => `AED ${Number(value || 0).toLocaleString("en-AE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const makeId = () => crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
const t = (key) => translations[app.language]?.[key] || translations.en[key] || key;

function normalizeWageHistory(worker) {
  const fallbackDate = worker.joinDate || (worker.createdAt ? worker.createdAt.slice(0, 10) : todayISO());
  const entries = Array.isArray(worker.wageHistory) ? worker.wageHistory : [];
  const map = new Map();
  entries.forEach((entry) => {
    if (!entry?.date) return;
    const dailyWage = Number(entry.dailyWage ?? entry.wage ?? 0);
    if (Number.isFinite(dailyWage)) map.set(entry.date, dailyWage);
  });
  if (!map.size && Number(worker.dailyWage || 0)) map.set(fallbackDate, Number(worker.dailyWage || 0));
  return Array.from(map, ([date, dailyWage]) => ({ date, dailyWage }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function wageForDate(worker, date = todayISO()) {
  const history = normalizeWageHistory(worker);
  let wage = Number(worker.dailyWage || 0);
  history.forEach((entry) => {
    if (entry.date <= date) wage = Number(entry.dailyWage || 0);
  });
  return wage;
}

function currentDailyWage(worker) {
  return wageForDate(worker, todayISO());
}

function wageHistoryText(worker) {
  const history = normalizeWageHistory(worker);
  if (!history.length) return "-";
  return history.map((entry) => `${money(entry.dailyWage)} ${t("effectiveFrom")} ${entry.date}`).join(" | ");
}

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
      app.payments ||= {};
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
      app.payments ||= {};
      app.storageMode = supabaseClient ? "login required" : "local";
      return;
    } catch {
      removeBrowserBackup();
    }
  }

  app.workers = [];
  app.payments = {};
  saveData(false);
}

async function saveData(show = true) {
  app.lastSaved = new Date().toISOString();
  setBrowserBackup();

  if (supabaseClient && app.user && app.profile?.active && ["admin", "manager"].includes(app.profile.role)) {
    const payload = {
      workers: app.workers,
      attendance: app.attendance,
      payments: app.payments,
      lastSaved: app.lastSaved,
    };
    const { error } = await supabaseClient
      .from("app_data")
      .upsert({ id: "main", data: payload, updated_by: app.user.id, updated_at: new Date().toISOString() });
    if (error) {
      toast(`${t("cloudSaveFailed")}: ${error.message}`);
    } else {
      app.storageMode = "cloud";
      if (show) toast(t("savedOnline"));
    }
  } else if (show) {
    toast(supabaseClient ? t("savedLocalLogin") : t("savedLocal"));
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
      payments: app.payments,
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
  $("#workerWageEffectiveDate").value = today;
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
  if (!record) return { status: "", inTime: "", outTime: "", overtimeHours: "", foodDeduction: 0, paidAmount: 0 };
  if (typeof record === "string") return { status: record, inTime: "", outTime: "", overtimeHours: "", foodDeduction: 0, paidAmount: 0 };
  const overtimeHours = record.overtimeHours === "" || record.overtimeHours === null || record.overtimeHours === undefined
    ? ""
    : Number(record.overtimeHours || 0);
  return {
    status: record.status || "",
    inTime: record.inTime || "",
    outTime: record.outTime || "",
    overtimeHours,
    foodDeduction: Number(record.foodDeduction || 0),
    paidAmount: Number(record.paidAmount || 0),
  };
}

function setAttendance(date, workerId, status, autoTime = true) {
  app.attendance[date] ||= {};
  const current = getAttendanceRecord(date, workerId);
  if (status) {
    const now = autoTime ? currentTime() : "";
    app.attendance[date][workerId] = {
      ...current,
      status,
      inTime: ["present", "halfday"].includes(status) ? (current.inTime || now) : "",
      outTime: ["present", "halfday"].includes(status) ? current.outTime : "",
      overtimeHours: ["present", "halfday"].includes(status) ? current.overtimeHours : "",
      foodDeduction: ["present", "halfday"].includes(status) ? current.foodDeduction : 0,
      paidAmount: ["present", "halfday"].includes(status) ? current.paidAmount : 0,
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

function setAttendanceMoney(date, workerId, field, value) {
  app.attendance[date] ||= {};
  const current = getAttendanceRecord(date, workerId);
  app.attendance[date][workerId] = {
    ...current,
    status: current.status || "present",
    [field]: Number(value || 0),
  };
  saveData();
}

function setAttendanceNumber(date, workerId, field, value) {
  app.attendance[date] ||= {};
  const current = getAttendanceRecord(date, workerId);
  app.attendance[date][workerId] = {
    ...current,
    status: current.status || "present",
    [field]: value === "" ? "" : Number(value || 0),
  };
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
  const manualOvertime = item.overtimeHours === "" ? null : Math.max(0, Number(item.overtimeHours || 0));
  if (!item.inTime || !item.outTime) return { total: 0, overtime: manualOvertime ?? 0, autoOvertime: 0 };
  const [inHour, inMinute] = item.inTime.split(":").map(Number);
  const [outHour, outMinute] = item.outTime.split(":").map(Number);
  let start = inHour * 60 + inMinute;
  let end = outHour * 60 + outMinute;
  if (end < start) end += 24 * 60;
  const total = Math.max(0, (end - start) / 60);
  const autoOvertime = Math.max(0, total - STANDARD_HOURS);
  return {
    total,
    overtime: manualOvertime ?? autoOvertime,
    autoOvertime,
  };
}

function attendanceBaseWage(worker, status, date = todayISO()) {
  const daily = wageForDate(worker, date);
  if (status === "present") return daily;
  if (status === "halfday") return daily / 2;
  return 0;
}

function attendanceOvertimeWage(worker, overtimeHours, date = todayISO()) {
  const hourlyRate = wageForDate(worker, date) / STANDARD_HOURS;
  return overtimeHours * hourlyRate;
}

function foodDeduction(record, status) {
  if (!["present", "halfday"].includes(status)) return 0;
  return Number(normalizeAttendanceRecord(record).foodDeduction || 0);
}

function attendanceWage(worker, record, overtimeHours = 0, date = todayISO()) {
  const status = normalizeAttendanceRecord(record).status;
  return Math.max(0, attendanceBaseWage(worker, status, date) + attendanceOvertimeWage(worker, overtimeHours, date) - foodDeduction(record, status));
}

function paymentKey(workerId, start, end) {
  return `${workerId}__${start}__${end}`;
}

function paymentRecord(workerId, start, end) {
  return app.payments[paymentKey(workerId, start, end)] || { paidAmount: 0, paymentDate: "", method: "cash", note: "" };
}

function paymentTotals(rows, start, end) {
  return rows.reduce((acc, row) => {
    const paid = Number(row.paidAmount || 0) + Number(paymentRecord(row.worker.id, start, end).paidAmount || 0);
    acc.paid += paid;
    acc.pending += Math.max(0, Number(row.wage || 0) - paid);
    return acc;
  }, { paid: 0, pending: 0 });
}

function savePayment(workerId, start, end, paidAmount, paymentDate, method, note) {
  app.payments[paymentKey(workerId, start, end)] = {
    paidAmount: Number(paidAmount || 0),
    paymentDate,
    method,
    note,
    updatedAt: new Date().toISOString(),
  };
  saveData();
  toast(t("paymentSaved"));
}

function printReportOnly() {
  document.body.classList.add("print-report");
  window.print();
  window.setTimeout(() => document.body.classList.remove("print-report"), 500);
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
        dailyWage: wageForDate(worker, date),
        baseWage: attendanceBaseWage(worker, status, date),
        overtimeWage: attendanceOvertimeWage(worker, hours.overtime, date),
        foodDeduction: foodDeduction(record, status),
        paidAmount: Number(record.paidAmount || 0),
        wage: attendanceWage(worker, record, hours.overtime, date),
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
      const halfday = dates.filter((date) => getAttendance(date, worker.id) === "halfday").length;
      const absent = dates.filter((date) => getAttendance(date, worker.id) === "absent").length;
      const off = dates.filter((date) => getAttendance(date, worker.id) === "off").length;
      const hours = dates.reduce((sum, date) => sum + calculateHours(getAttendanceRecord(date, worker.id)).total, 0);
      const overtime = dates.reduce((sum, date) => sum + calculateHours(getAttendanceRecord(date, worker.id)).overtime, 0);
      const baseWage = dates.reduce((sum, date) => sum + attendanceBaseWage(worker, getAttendance(date, worker.id), date), 0);
      const overtimeWage = dates.reduce((sum, date) => sum + attendanceOvertimeWage(worker, calculateHours(getAttendanceRecord(date, worker.id)).overtime, date), 0);
      const food = dates.reduce((sum, date) => sum + foodDeduction(getAttendanceRecord(date, worker.id), getAttendance(date, worker.id)), 0);
      const paidAmount = dates.reduce((sum, date) => sum + Number(getAttendanceRecord(date, worker.id).paidAmount || 0), 0);
      return {
        worker,
        present,
        halfday,
        absent,
        off,
        hours,
        overtime,
        dailyWage: wageForDate(worker, dates[dates.length - 1] || todayISO()),
        baseWage,
        overtimeWage,
        foodDeduction: food,
        paidAmount,
        wage: Math.max(0, baseWage + overtimeWage - food),
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
  $$("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  $$("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
  const languageSelect = $("#languageSelect");
  if (languageSelect) languageSelect.value = app.language;
  const activeView = $(".view.active")?.id || "dashboard";
  const pageTitle = $("#pageTitle");
  if (pageTitle) pageTitle.textContent = t(activeView);
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
  const monthDates = daysInMonth(month);
  const dashboardPayTotals = paymentTotals(summary, monthDates[0], monthDates[monthDates.length - 1]);

  $("#statTotalWorkers").textContent = app.workers.filter((worker) => worker.status === "active").length;
  $("#statActiveWorkers").textContent = app.workers.filter((worker) => worker.status === "active").length;
  $("#statInactiveWorkers").textContent = app.workers.filter((worker) => worker.status === "inactive").length;
  $("#statPresentToday").textContent = Object.values(todayRecords).filter((record) => ["present", "halfday"].includes(normalizeAttendanceRecord(record).status)).length;
  $("#statMonthWages").textContent = money(monthWages);
  $("#statAttendanceDays").textContent = formatHours(monthOvertime);
  $("#statUnpaidWages").textContent = money(dashboardPayTotals.pending);
  $("#dashboardDateLabel").textContent = date;

  $("#dashboardSummary").innerHTML = summary
    .filter((row) => row.worker.status === "active" && (row.present || row.halfday || row.worker.status === "active"))
    .map((row) => `
      <tr>
        <td>${escapeHTML(row.worker.name)}</td>
        <td>${row.present + (row.halfday * 0.5)}</td>
        <td>${formatHours(row.hours)}</td>
        <td>${formatHours(row.overtime)}</td>
        <td>${money(row.dailyWage || currentDailyWage(row.worker))}</td>
        <td><strong>${money(row.wage)}</strong></td>
      </tr>
    `).join("") || `<tr><td colspan="6">No wage records for this month.</td></tr>`;

  $("#todayList").innerHTML = activeWorkers().map((worker) => {
    const record = normalizeAttendanceRecord(todayRecords[worker.id]);
    const status = record.status || "not marked";
    const hours = calculateHours(record);
    return `
      <div class="today-row">
        <div>
          <strong>${escapeHTML(worker.name)}</strong>
          <p>In: ${record.inTime || "-"} · Out: ${record.outTime || "-"} · Hours: ${formatHours(hours.total)} · OT: ${formatHours(hours.overtime)}</p>
          <p>${escapeHTML(worker.role || t("roleWorker"))} · ${money(wageForDate(worker, date))}</p>
        </div>
        <span class="pill">${statusLabel(status)}</span>
      </div>
    `;
  }).join("") || emptyState("No workers added yet.");
}

function renderWorkers() {
  const query = ($("#workerSearch").value || "").trim().toLowerCase();
  const workers = app.workers.filter((worker) => {
    const filter = app.workerFilter || "active";
    if (filter !== "all" && worker.status !== filter) return false;
    const haystack = [worker.name, worker.role, worker.city, worker.nationality, worker.performance, worker.phone, worker.emiratesId, worker.status].join(" ").toLowerCase();
    return haystack.includes(query);
  });

  $("#workersList").innerHTML = workers.map((worker) => `
    <article class="worker-card">
      <div class="worker-card-head">
        <div>
          <h3>${escapeHTML(worker.name)}</h3>
          <p>${escapeHTML(worker.role || t("roleWorker"))}</p>
        </div>
        <span class="status-pill ${worker.status}">${t(worker.status)}</span>
      </div>
      <div class="worker-meta">
        <div><span>${t("currentDailyWage")}</span><strong>${money(currentDailyWage(worker))}</strong></div>
        <div><span>${t("wageHistory")}</span><strong>${escapeHTML(wageHistoryText(worker))}</strong></div>
        <div><span>${t("joiningDate")}</span><strong>${worker.joinDate || "-"}</strong></div>
        <div><span>${t("city")}</span><strong>${escapeHTML(worker.city || "-")}</strong></div>
        <div><span>${t("nationality")}</span><strong>${escapeHTML(worker.nationality || "-")}</strong></div>
        <div><span>${t("performance")}</span><strong>${performanceLabel(worker.performance)}</strong></div>
        <div><span>${t("phone")}</span><strong>${escapeHTML(worker.phone || "-")}</strong></div>
        <div><span>${t("emiratesId")}</span><strong>${escapeHTML(worker.emiratesId || "-")}</strong></div>
      </div>
      <button data-edit-worker="${worker.id}">${t("editWorkerTitle")}</button>
    </article>
  `).join("") || emptyState(t("noWorkerSearch"));
}

function renderDayAttendance() {
  const date = $("#attendanceDate").value || todayISO();
  $("#dayAttendanceList").innerHTML = activeWorkers().map((worker) => attendanceRowWithTime(worker, date)).join("") || emptyState(t("noActiveWorkers"));
}

function attendanceRowWithTime(worker, date) {
  const record = getAttendanceRecord(date, worker.id);
  const hours = calculateHours(record);
  const payable = attendanceWage(worker, record, hours.overtime, date);
  const paid = Number(record.paidAmount || 0);
  const unpaid = Math.max(0, payable - paid);
  return `
    <div class="attendance-row">
      <div>
        <strong>${escapeHTML(worker.name)}</strong>
        <p>${escapeHTML(worker.role || t("roleWorker"))} · ${money(wageForDate(worker, date))}</p>
        <p class="time-summary">${t("in")}: ${record.inTime || "-"} · ${t("out")}: ${record.outTime || "-"} · ${t("hours")}: ${formatHours(hours.total)} · ${t("overtime")}: ${formatHours(hours.overtime)}</p>
        <p class="time-summary">${t("payableWage")}: ${money(payable)} · ${t("paid")}: ${money(paid)} · ${t("unpaid")}: ${money(unpaid)}</p>
      </div>
      <div class="attendance-control">
        <div class="attendance-actions" data-worker="${worker.id}" data-date="${date}">
          ${["present", "halfday", "absent", "off"].map((status) => `
            <button data-status="${status}" class="${record.status === status ? "active" : ""}">${statusLabel(status)}</button>
          `).join("")}
        </div>
        <div class="time-grid" data-worker="${worker.id}" data-date="${date}">
          <label>${t("in")}<input type="time" data-time-field="inTime" value="${record.inTime}"></label>
          <label>${t("out")}<input type="time" data-time-field="outTime" value="${record.outTime}"></label>
          <label>${t("manualOvertime")}<input type="number" min="0" step="0.25" data-number-field="overtimeHours" value="${record.overtimeHours}"></label>
          <label>${t("foodDeduction")}<input type="number" min="0" step="0.01" data-money-field="foodDeduction" value="${record.foodDeduction || 0}"></label>
          <label>${t("paidToday")}<input type="number" min="0" step="0.01" data-money-field="paidAmount" value="${record.paidAmount || 0}"></label>
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
        <p>${escapeHTML(worker.role || t("roleWorker"))} · ${money(wageForDate(worker, date))}</p>
      </div>
      <div class="attendance-actions" data-worker="${worker.id}" data-date="${date}">
        ${["present", "halfday", "absent", "off"].map((status) => `
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
        <span>${money(wageForDate(worker, `${month}-01`))}</span>
      </td>
      ${dates.map((date) => `
        <td class="month-day">
          <select class="mini-select" data-month-worker="${worker.id}" data-month-date="${date}" aria-label="${escapeHTML(worker.name)} ${date}">
            <option value="" ${getAttendance(date, worker.id) === "" ? "selected" : ""}>-</option>
            <option value="present" ${getAttendance(date, worker.id) === "present" ? "selected" : ""}>P</option>
            <option value="halfday" ${getAttendance(date, worker.id) === "halfday" ? "selected" : ""}>H</option>
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
          <th>${t("worker")}</th>
          ${dates.map((date) => `<th class="month-day">${Number(date.slice(-2))}</th>`).join("")}
        </tr>
      </thead>
      <tbody>${rows || `<tr><td colspan="${dates.length + 1}">${t("noActiveWorkers")}</td></tr>`}</tbody>
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
  let title = `${t("dailyReport")} · ${reportDate}`;

  if (type === "weekly") {
    const date = new Date(`${reportDate}T00:00:00`);
    const day = date.getDay();
    date.setDate(date.getDate() - day);
    start = date.toISOString().slice(0, 10);
    date.setDate(date.getDate() + 6);
    end = date.toISOString().slice(0, 10);
    title = `${t("weeklyReport")} · ${start} ${t("to")} ${end}`;
  }

  if (type === "monthly") {
    const dates = daysInMonth(month);
    start = dates[0];
    end = dates[dates.length - 1];
    title = `${t("monthlyReport")} · ${month}`;
  }

  const workerOptions = [`<option value="all">${t("companyWideReport")}</option>`]
    .concat(app.workers.map((worker) => `<option value="${worker.id}" ${worker.id === workerId ? "selected" : ""}>${escapeHTML(worker.name)}</option>`));
  $("#reportWorker").innerHTML = workerOptions.join("");

  const rows = type === "monthly" ? monthSummary(month, workerId) : summarizeRecords(recordsForRange(start, end, workerId));
  const totals = rows.reduce((acc, row) => {
    acc.present += row.present;
    acc.halfday += row.halfday || 0;
    acc.absent += row.absent;
    acc.off += row.off;
    acc.hours += row.hours || 0;
    acc.overtime += row.overtime || 0;
    acc.baseWage += row.baseWage || 0;
    acc.overtimeWage += row.overtimeWage || 0;
    acc.foodDeduction += row.foodDeduction || 0;
    acc.paidAmount += row.paidAmount || 0;
    acc.wage += row.wage;
    return acc;
  }, { present: 0, halfday: 0, absent: 0, off: 0, hours: 0, overtime: 0, baseWage: 0, overtimeWage: 0, foodDeduction: 0, paidAmount: 0, wage: 0 });
  const payTotals = paymentTotals(rows, start, end);

  $("#reportOutput").innerHTML = `
    <h3>${title}</h3>
    <p class="help-text">${workerId === "all" ? t("companyWideReport") : escapeHTML(app.workers.find((worker) => worker.id === workerId)?.name || t("roleWorker"))} ${t("wageAttendanceReport")}</p>
    <div class="summary-strip">
      <div><span>${t("present")} ${t("days")}</span><strong>${totals.present}</strong></div>
      <div><span>${t("halfDays")}</span><strong>${totals.halfday}</strong></div>
      <div><span>${t("absent")} ${t("days")}</span><strong>${totals.absent}</strong></div>
      <div><span>${t("off")} ${t("days")}</span><strong>${totals.off}</strong></div>
      <div><span>${t("totalHours")}</span><strong>${formatHours(totals.hours)}</strong></div>
      <div><span>${t("overtime")}</span><strong>${formatHours(totals.overtime)}</strong></div>
      <div><span>${t("baseWage")}</span><strong>${money(totals.baseWage)}</strong></div>
      <div><span>${t("overtimeWage")}</span><strong>${money(totals.overtimeWage)}</strong></div>
      <div><span>${t("foodDeductionTotal")}</span><strong>${money(totals.foodDeduction)}</strong></div>
      <div><span>${t("payableWage")}</span><strong>${money(totals.wage)}</strong></div>
      <div><span>${t("paid")}</span><strong>${money(payTotals.paid)}</strong></div>
      <div><span>${t("unpaid")}</span><strong>${money(payTotals.pending)}</strong></div>
    </div>
    <div class="payment-list">
      <h3>${t("payments")}</h3>
      ${rows.map((row) => {
        const payment = paymentRecord(row.worker.id, start, end);
        const attendancePaid = Number(row.paidAmount || 0);
        const paid = attendancePaid + Number(payment.paidAmount || 0);
        const pending = Math.max(0, Number(row.wage || 0) - paid);
        return `
          <div class="payment-row" data-payment-worker="${row.worker.id}" data-payment-start="${start}" data-payment-end="${end}">
            <div>
              <strong>${escapeHTML(row.worker.name)}</strong>
              <p>${t("payableWage")}: ${money(row.wage)} · ${t("paidToday")}: ${money(attendancePaid)} · ${t("paid")}: ${money(paid)} · ${t("unpaid")}: ${money(pending)}</p>
            </div>
            <label>${t("paidAmount")}<input type="number" min="0" step="0.01" data-payment-field="paidAmount" value="${payment.paidAmount || 0}"></label>
            <label>${t("paymentDate")}<input type="date" data-payment-field="paymentDate" value="${payment.paymentDate || ""}"></label>
            <label>${t("paymentMethod")}
              <select data-payment-field="method">
                <option value="cash" ${payment.method === "cash" ? "selected" : ""}>${t("cash")}</option>
                <option value="bank" ${payment.method === "bank" ? "selected" : ""}>${t("bank")}</option>
                <option value="exchange" ${payment.method === "exchange" ? "selected" : ""}>${t("exchange")}</option>
                <option value="other" ${payment.method === "other" ? "selected" : ""}>${t("other")}</option>
              </select>
            </label>
            <label>${t("paymentNote")}<input data-payment-field="note" value="${escapeHTML(payment.note || "")}"></label>
            <button data-save-payment>${t("savePayment")}</button>
          </div>
        `;
      }).join("") || emptyState(t("noRecordsReport"))}
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>${t("worker")}</th>
            <th>${t("statusColumn")}</th>
            <th>${t("present")}</th>
            <th>${t("halfday")}</th>
            <th>${t("absent")}</th>
            <th>${t("off")}</th>
            <th>${t("hours")}</th>
            <th>${t("overtime")}</th>
            <th>${t("city")}</th>
            <th>${t("nationality")}</th>
            <th>${t("performance")}</th>
            <th>${t("dailyWage")}</th>
            <th>${t("baseWage")}</th>
            <th>${t("overtimeWage")}</th>
            <th>${t("foodDeductionTotal")}</th>
            <th>${t("payableWage")}</th>
            <th>${t("paid")}</th>
            <th>${t("unpaid")}</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr>
              <td>${escapeHTML(row.worker.name)}</td>
              <td>${t(row.worker.status)}</td>
              <td>${row.present}</td>
              <td>${row.halfday || 0}</td>
              <td>${row.absent}</td>
              <td>${row.off}</td>
              <td>${formatHours(row.hours || 0)}</td>
              <td>${formatHours(row.overtime || 0)}</td>
              <td>${escapeHTML(row.worker.city || "-")}</td>
              <td>${escapeHTML(row.worker.nationality || "-")}</td>
              <td>${performanceLabel(row.worker.performance)}</td>
              <td>${money(row.dailyWage || currentDailyWage(row.worker))}</td>
              <td>${money(row.baseWage || 0)}</td>
              <td>${money(row.overtimeWage || 0)}</td>
              <td>${money(row.foodDeduction || 0)}</td>
              <td><strong>${money(row.wage)}</strong></td>
              <td>${money((row.paidAmount || 0) + Number(paymentRecord(row.worker.id, start, end).paidAmount || 0))}</td>
              <td><strong>${money(Math.max(0, Number(row.wage || 0) - ((row.paidAmount || 0) + Number(paymentRecord(row.worker.id, start, end).paidAmount || 0))))}</strong></td>
            </tr>
          `).join("") || `<tr><td colspan="18">${t("noRecordsReport")}</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

function summarizeRecords(records) {
  const grouped = new Map();
  records.forEach((record) => {
    const item = grouped.get(record.worker.id) || { worker: record.worker, present: 0, halfday: 0, absent: 0, off: 0, hours: 0, overtime: 0, baseWage: 0, overtimeWage: 0, foodDeduction: 0, paidAmount: 0, wage: 0 };
    item[record.status] += 1;
    item.dailyWage = record.dailyWage || item.dailyWage;
    item.hours += record.hours || 0;
    item.overtime += record.overtime || 0;
    item.baseWage += record.baseWage || 0;
    item.overtimeWage += record.overtimeWage || 0;
    item.foodDeduction += record.foodDeduction || 0;
    item.paidAmount += record.paidAmount || 0;
    item.wage += record.wage;
    grouped.set(record.worker.id, item);
  });
  return Array.from(grouped.values());
}

function renderStorage() {
  const attendanceCount = Object.values(app.attendance).reduce((sum, day) => sum + Object.keys(day).length, 0);
  $("#storageWorkers").textContent = app.workers.length;
  $("#storageAttendance").textContent = attendanceCount;
  $("#storageSaved").textContent = app.lastSaved ? new Date(app.lastSaved).toLocaleString() : t("never");
}

function openWorkerDialog(workerId = "") {
  const worker = app.workers.find((item) => item.id === workerId);
  $("#workerDialogTitle").textContent = worker ? t("editWorkerTitle") : t("addWorkerTitle");
  $("#workerId").value = worker?.id || "";
  $("#workerName").value = worker?.name || "";
  $("#workerRole").value = worker?.role || "";
  $("#workerCity").value = worker?.city || "";
  $("#workerNationality").value = worker?.nationality || "";
  $("#workerPerformance").value = worker?.performance || "good";
  $("#workerPhone").value = worker?.phone || "";
  $("#workerEmiratesId").value = worker?.emiratesId || "";
  $("#workerDailyWage").value = worker ? currentDailyWage(worker) : "";
  $("#workerWageEffectiveDate").value = todayISO();
  $("#workerJoinDate").value = worker?.joinDate || todayISO();
  $("#workerStatus").value = worker?.status || "active";
  $("#workerNotes").value = worker?.notes || "";
  $("#deleteWorkerBtn").style.display = worker ? "inline-block" : "none";
  $("#workerDialog").showModal();
}

function saveWorkerFromForm() {
  const id = $("#workerId").value || makeId();
  const existing = app.workers.find((worker) => worker.id === id);
  const dailyWage = Number($("#workerDailyWage").value || 0);
  const joinDate = $("#workerJoinDate").value || todayISO();
  const wageEffectiveDate = $("#workerWageEffectiveDate").value || joinDate;
  const wageHistory = normalizeWageHistory(existing || { dailyWage, joinDate });
  const historyMap = new Map(wageHistory.map((entry) => [entry.date, entry.dailyWage]));
  historyMap.set(wageEffectiveDate, dailyWage);
  const updatedWageHistory = Array.from(historyMap, ([date, dailyWage]) => ({ date, dailyWage }))
    .sort((a, b) => a.date.localeCompare(b.date));
  const worker = {
    id,
    name: $("#workerName").value.trim(),
    role: $("#workerRole").value.trim(),
    city: $("#workerCity").value.trim(),
    nationality: $("#workerNationality").value.trim(),
    performance: $("#workerPerformance").value,
    phone: $("#workerPhone").value.trim(),
    emiratesId: $("#workerEmiratesId").value.trim(),
    dailyWage,
    wageHistory: updatedWageHistory,
    joinDate,
    status: $("#workerStatus").value,
    notes: $("#workerNotes").value.trim(),
    createdAt: existing?.createdAt || new Date().toISOString(),
  };

  if (!worker.name) {
    toast(t("workerNameRequired"));
    return;
  }

  if (hasDuplicateWorker(worker)) {
    toast(t("duplicateWorker"));
    return;
  }

  if (existing) Object.assign(existing, worker);
  else app.workers.push(worker);

  $("#workerDialog").close();
  saveData();
  toast(existing ? t("workerUpdated") : t("workerAdded"));
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
      app.payments = parsed.payments || {};
      app.lastSaved = parsed.lastSaved || new Date().toISOString();
      saveData();
      toast(t("backupImported"));
    } catch {
      toast(t("backupImportFailed"));
    }
  };
  reader.readAsText(file);
}

function exportReportCSV() {
  const rows = [[t("worker"), t("statusColumn"), t("present"), t("halfday"), t("absent"), t("off"), t("hours"), t("overtime"), t("city"), t("nationality"), t("performance"), t("dailyWage"), t("baseWage"), t("overtimeWage"), t("foodDeductionTotal"), t("payableWage"), t("paid"), t("unpaid")]];
  $("#reportOutput tbody tr").forEach((tr) => {
    const cells = Array.from(tr.children).map((td) => td.textContent.trim());
    if (cells.length === 18) rows.push(cells);
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
    halfday: t("halfday"),
    absent: t("absent"),
    off: t("off"),
    "not marked": t("notMarked"),
  }[status] || status;
}

function performanceLabel(value) {
  return {
    excellent: t("excellent"),
    good: t("good"),
    average: t("average"),
    needs_improvement: t("needsImprovement"),
  }[value] || t("good");
}

function normalizeCompare(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function hasDuplicateWorker(worker) {
  const name = normalizeCompare(worker.name);
  const phone = normalizeCompare(worker.phone);
  const emiratesId = normalizeCompare(worker.emiratesId);
  return app.workers.some((item) => {
    if (item.id === worker.id) return false;
    if (name && normalizeCompare(item.name) === name) return true;
    if (phone && normalizeCompare(item.phone) === phone) return true;
    if (emiratesId && normalizeCompare(item.emiratesId) === emiratesId) return true;
    return false;
  });
}

function emptyState(message) {
  return `<div class="today-row"><p>${message}</p></div>`;
}

async function loginFromForm() {
  if (!supabaseClient) {
    toast(t("loginMissingConfig"));
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
    toast(t("emailNoManager"));
    return;
  }

  $("#authDialog").close();
  await loadData();
  renderAll();
  toast(t("loggedIn"));
}

async function logout() {
  if (supabaseClient) await supabaseClient.auth.signOut();
  app.user = null;
  app.profile = null;
  app.storageMode = supabaseClient ? "login required" : "local";
  renderAll();
  toast(t("loggedOut"));
}

function bindEvents() {
  $$(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".nav-item").forEach((item) => item.classList.remove("active"));
      $$(".view").forEach((view) => view.classList.remove("active"));
      button.classList.add("active");
      $(`#${button.dataset.view}`).classList.add("active");
      $("#pageTitle").textContent = t(button.dataset.view);
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
  $$(".worker-filter").forEach((button) => {
    button.addEventListener("click", () => {
      app.workerFilter = button.dataset.workerFilter;
      $$(".worker-filter").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderWorkers();
    });
  });
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

    const paymentButton = event.target.closest("[data-save-payment]");
    if (paymentButton) {
      const row = paymentButton.closest(".payment-row");
      const getField = (field) => row.querySelector(`[data-payment-field="${field}"]`)?.value || "";
      savePayment(
        row.dataset.paymentWorker,
        row.dataset.paymentStart,
        row.dataset.paymentEnd,
        getField("paidAmount"),
        getField("paymentDate"),
        getField("method"),
        getField("note"),
      );
    }
  });

  document.addEventListener("change", (event) => {
    const select = event.target.closest("[data-month-worker]");
    if (select) setAttendance(select.dataset.monthDate, select.dataset.monthWorker, select.value, false);

    const timeInput = event.target.closest("[data-time-field]");
    if (timeInput) {
      const parent = timeInput.closest(".time-grid");
      setAttendanceTime(parent.dataset.date, parent.dataset.worker, timeInput.dataset.timeField, timeInput.value);
    }

    const moneyInput = event.target.closest("[data-money-field]");
    if (moneyInput) {
      const parent = moneyInput.closest(".time-grid");
      setAttendanceMoney(parent.dataset.date, parent.dataset.worker, moneyInput.dataset.moneyField, moneyInput.value);
    }

    const numberInput = event.target.closest("[data-number-field]");
    if (numberInput) {
      const parent = numberInput.closest(".time-grid");
      setAttendanceNumber(parent.dataset.date, parent.dataset.worker, numberInput.dataset.numberField, numberInput.value);
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
  $("#printReport").addEventListener("click", printReportOnly);
  $("#printAllWages").addEventListener("click", () => {
    $("#reportWorker").value = "all";
    renderReport();
    printReportOnly();
  });
  $("#printSelectedWage").addEventListener("click", () => {
    if ($("#reportWorker").value === "all" && app.workers[0]) $("#reportWorker").value = app.workers[0].id;
    renderReport();
    printReportOnly();
  });
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
  const monthDates = daysInMonth(month);
  const dashboardPayTotals = paymentTotals(summary, monthDates[0], monthDates[monthDates.length - 1]);

  $("#statTotalWorkers").textContent = app.workers.filter((worker) => worker.status === "active").length;
  $("#statActiveWorkers").textContent = app.workers.filter((worker) => worker.status === "active").length;
  $("#statInactiveWorkers").textContent = app.workers.filter((worker) => worker.status === "inactive").length;
  $("#statPresentToday").textContent = Object.values(todayRecords).filter((record) => ["present", "halfday"].includes(normalizeAttendanceRecord(record).status)).length;
  $("#statMonthWages").textContent = money(monthWages);
  $("#statAttendanceDays").textContent = formatHours(monthOvertime);
  $("#statUnpaidWages").textContent = money(dashboardPayTotals.pending);
  $("#dashboardDateLabel").textContent = date;

  $("#dashboardSummary").innerHTML = summary
    .filter((row) => row.worker.status === "active" && (row.present || row.halfday || row.worker.status === "active"))
    .map((row) => `
      <tr>
        <td>${escapeHTML(row.worker.name)}</td>
        <td>${row.present + (row.halfday * 0.5)}</td>
        <td>${formatHours(row.hours)}</td>
        <td>${formatHours(row.overtime)}</td>
        <td>${money(row.dailyWage || currentDailyWage(row.worker))}</td>
        <td><strong>${money(row.wage)}</strong></td>
      </tr>
    `).join("") || `<tr><td colspan="6">${t("noWageRecords")}</td></tr>`;

  $("#todayList").innerHTML = activeWorkers().map((worker) => {
    const record = normalizeAttendanceRecord(todayRecords[worker.id]);
    const status = record.status || "not marked";
    const hours = calculateHours(record);
    return `
      <div class="today-row">
        <div>
          <strong>${escapeHTML(worker.name)}</strong>
          <p>${t("in")}: ${record.inTime || "-"} · ${t("out")}: ${record.outTime || "-"} · ${t("hours")}: ${formatHours(hours.total)} · ${t("overtime")}: ${formatHours(hours.overtime)}</p>
          <p>${escapeHTML(worker.role || t("roleWorker"))} · ${money(wageForDate(worker, date))}</p>
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
    toast(t("startupCloudFailed"));
    renderAll();
  });
