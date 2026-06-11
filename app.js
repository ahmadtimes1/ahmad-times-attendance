const STORAGE_KEY = "ahmad-times-attendance-v1";
const LANG_KEY = "ahmad-times-language";
const SIMPLE_LOGIN_KEY = "ahmad-times-simple-user";
const LAST_ACTIVITY_KEY = "ahmad-times-last-activity";
const WORKER_VIEW_KEY = "ahmad-times-worker-view";
const THEME_KEY = "ahmad-times-theme";
const STANDARD_HOURS = 9;
const SESSION_TIMEOUT_MS = 30 * 60 * 1000;

const SIMPLE_USERS = [
  { username: "admin", password: "Dubai@#123", role: "admin", name: "Admin" },
  { username: "Ahmadadmin", password: "Ahmad@dxb", role: "admin", name: "Ahmad Admin" },
  { username: "Najib", password: "Najib@dxb", role: "manager", name: "Najib" },
];

const translations = {
  en: {
    language: "Language",
    toggleTheme: "Switch theme",
    darkMode: "Dark",
    lightMode: "Light",
    today: "Today",
    addWorkerShort: "+ Worker",
    totalWorkers: "Total workers",
    activeWorkers: "Active workers",
    inactiveWorkers: "Inactive workers",
    presentToday: "Present today",
    monthWages: "This month wages",
    monthlyOvertime: "Monthly overtime",
    monthlyWageSummary: "Monthly Wage Summary",
    todayOperations: "Today operations",
    openAttendance: "Open attendance",
    openExpenses: "Open expenses",
    openReports: "Open reports",
    systemHealth: "System health",
    dataSafety: "Data safety",
    healthy: "Healthy",
    needsReview: "Needs review",
    cloudMode: "Cloud mode",
    recordsSaved: "Records saved",
    latestBackup: "Latest backup",
    noBackupYet: "No backup yet",
    never: "Never",
    fullDayBasis: "full day basis",
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
    undo: "Undo",
    redo: "Redo",
    undoDone: "Undo complete",
    redoDone: "Redo complete",
    nothingToUndo: "Nothing to undo",
    nothingToRedo: "Nothing to redo",
    back: "Back",
    workerSummary: "Worker summary",
    monthlySummary: "Monthly summary",
    recentAttendance: "Recent attendance",
    todaysAttendance: "Today attendance",
    dashboard: "Dashboard",
    workers: "Workers",
    attendance: "Attendance",
    reports: "Reports",
    safety: "Safety",
    logs: "Logs",
    backup: "Backup",
    appSubtitle: "Automatic attendance and daily wage system",
    buildingMaintenance: "Building Maintenance",
    payrollLock: "Payroll lock",
    payrollLockHelp: "Lock a finished month so attendance, wages, and payments cannot be changed by mistake.",
    lockMonth: "Lock month",
    unlockMonth: "Unlock month",
    dailyBackups: "Daily backups",
    dailyBackupsHelp: "The system keeps one automatic backup copy per day.",
    downloadLatestBackup: "Download latest backup",
    mistakeAlerts: "Mistake alerts",
    mistakeAlertsHelp: "Important attendance and payment problems that need checking.",
    paymentLedger: "Payment ledger",
    paymentLedgerHelp: "All worker payments in one clear place.",
    amount: "Amount",
    finalSettlement: "Final settlement",
    finalSettlementHelp: "Choose an inactive worker and print their final unpaid balance.",
    printSettlement: "Print settlement",
    mobileQuickAttendance: "Mobile quick attendance",
    mobileQuickAttendanceHelp: "Large buttons for fast site attendance.",
    auditReport: "Audit report",
    auditReportHelp: "Print who changed what and when.",
    printAuditReport: "Print audit report",
    noAlerts: "No important alerts.",
    monthLocked: "This month is locked. Unlock it before changing records.",
    locked: "Locked",
    adminOnly: "Only admin can do this.",
    oldChangeWarning: "You are changing an old record. Continue?",
    mainNavigation: "Main navigation",
    search: "Search",
    searchPlaceholder: "Name, role, phone, Emirates ID",
  markVisiblePresent: "Mark visible days present",
  markVisibleOff: "Mark visible days off",
  clearVisibleMonth: "Clear visible month",
  attendanceView: "Attendance view",
  attendanceViewHelp: "Choose all workers, one worker, or multiple workers.",
  workerFilter: "Worker filter",
  allWorkers: "All workers",
  selectedWorkers: "Selected workers",
  chooseWorkers: "Choose workers",
  shift: "Shift",
  shiftFilter: "Shift filter",
  allShifts: "All shifts",
  dayShift: "Day shift",
  nightShift: "Night shift",
  selectedWorkerReports: "Selected worker report",
  weeklyAttendance: "Weekly Attendance",
    reportType: "Report type",
    daily: "Daily",
    weekly: "Weekly",
    monthly: "Monthly",
    date: "Date",
    month: "Month",
    print: "Download report",
    pdfReport: "PDF / print file",
    reportLanguage: "Report language",
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
    username: "Username",
    email: "Email",
    password: "Password",
    authHelp: "Use one of the company usernames and passwords.",
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
    sessionExpired: "Session expired. Login again.",
    cloudSaveFailed: "Cloud save failed",
    startupCloudFailed: "Could not start cloud mode. Local mode is still available.",
    invalidLogin: "Wrong username or password.",
    reportDownloaded: "Report file downloaded. Open it to print or save as PDF.",
    activityLogs: "Activity Logs",
    activityLogsHelp: "See which admin changed workers, attendance, payments, and reports.",
    clearLogs: "Clear logs",
    dateTime: "Date / Time",
    user: "User",
    action: "Action",
    details: "Details",
    noLogs: "No logs yet.",
    logsCleared: "Logs cleared",
    workerNumber: "Worker No.",
    moveUp: "Move up",
    moveDown: "Move down",
    uploadPhoto: "Upload photo",
    takePhoto: "Take photo",
    capturePhoto: "Capture",
    removePhoto: "Remove photo",
    photo: "Photo",
    cameraFailed: "Camera could not start. Use upload photo instead.",
  },
  ps: {
    language: "ژبه",
    toggleTheme: "رنګ بدل کړئ",
    darkMode: "تیاره",
    lightMode: "روښانه",
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
    undo: "بېرته",
    redo: "بیا مخکې",
    undoDone: "بېرته شو",
    redoDone: "بیا مخکې شو",
    nothingToUndo: "د بېرته کولو څه نشته",
    nothingToRedo: "د بیا کولو څه نشته",
    back: "بېرته",
    workerSummary: "د کارکوونکي لنډیز",
    monthlySummary: "میاشتنی لنډیز",
    todayOperations: "د نن ورځې کارونه",
    openAttendance: "حاضري خلاصه کړئ",
    openExpenses: "مصارف خلاص کړئ",
    openReports: "راپورونه خلاص کړئ",
    systemHealth: "د سیستم حالت",
    dataSafety: "د معلوماتو خوندیتوب",
    healthy: "ښه",
    needsReview: "کتنې ته اړتیا",
    cloudMode: "کلاوډ حالت",
    recordsSaved: "ریکارډونه ذخیره شوي",
    latestBackup: "وروستی بیک اپ",
    noBackupYet: "بیک اپ نشته",
    never: "هېڅکله",
    fullDayBasis: "د بشپړې ورځې حساب",
    recentAttendance: "وروستۍ حاضري",
    todaysAttendance: "د نن حاضري",
    dashboard: "ډشبورډ",
    workers: "کارکوونکي",
    attendance: "حاضري",
    reports: "راپورونه",
    safety: "خوندیتوب",
    logs: "لاګونه",
    backup: "بیک اپ",
    appSubtitle: "اتومات حاضري او ورځنۍ مزدوري سیستم",
    buildingMaintenance: "بلډنګ مینټیننس",
    payrollLock: "د معاش بندول",
    payrollLockHelp: "ختمه میاشت بنده کړئ چې معلومات په غلطۍ بدل نه شي.",
    lockMonth: "میاشت بنده کړئ",
    unlockMonth: "میاشت خلاصه کړئ",
    dailyBackups: "ورځني بیک اپونه",
    dailyBackupsHelp: "سیسټم هره ورځ یو بیک اپ ساتي.",
    downloadLatestBackup: "وروستی بیک اپ ښکته کړئ",
    mistakeAlerts: "د غلطۍ خبرتیاوې",
    mistakeAlertsHelp: "مهمې ستونزې چې کتل غواړي.",
    paymentLedger: "د تادیاتو کتاب",
    paymentLedgerHelp: "ټولې تادیات په یو ځای کې.",
    amount: "اندازه",
    finalSettlement: "وروستی حساب",
    finalSettlementHelp: "غیر فعال کارکوونکی وټاکئ او وروستی حساب چاپ کړئ.",
    printSettlement: "حساب چاپ کړئ",
    mobileQuickAttendance: "چټکه موبایل حاضري",
    mobileQuickAttendanceHelp: "د سایټ لپاره لوی بټنونه.",
    auditReport: "د بدلونونو راپور",
    auditReportHelp: "چا څه بدل کړل چاپ کړئ.",
    printAuditReport: "راپور چاپ کړئ",
    noAlerts: "مهمه خبرتیا نشته.",
    monthLocked: "دا میاشت بنده ده.",
    locked: "بنده",
    adminOnly: "یوازې اډمین دا کولی شي.",
    oldChangeWarning: "تاسو پخوانی ریکارډ بدلوئ. دوام؟",
    mainNavigation: "اصلي مینو",
    search: "لټون",
    searchPlaceholder: "نوم، کار، تلیفون، امارات ID",
  markVisiblePresent: "ښکاره ورځې حاضر کړئ",
  markVisibleOff: "ښکاره ورځې رخصت کړئ",
  clearVisibleMonth: "ښکاره میاشت پاکه کړئ",
  attendanceView: "د حاضري لید",
  attendanceViewHelp: "ټول کارکوونکي، یو کارکوونکی، یا څو کارکوونکي وټاکئ.",
  workerFilter: "د کارکوونکي فلټر",
  allWorkers: "ټول کارکوونکي",
  selectedWorkers: "ټاکل شوي کارکوونکي",
  chooseWorkers: "کارکوونکي وټاکئ",
  shift: "شفټ",
  shiftFilter: "د شفټ فلټر",
  allShifts: "ټول شفټونه",
  dayShift: "د ورځې شفټ",
  nightShift: "د شپې شفټ",
  selectedWorkerReports: "د ټاکل شوو کارکوونکو راپور",
  weeklyAttendance: "اونیزه حاضري",
    reportType: "د راپور ډول",
    daily: "ورځنی",
    weekly: "اونیز",
    monthly: "میاشتنی",
    date: "نېټه",
    month: "میاشت",
    print: "راپور ښکته کړئ",
    pdfReport: "PDF / چاپ فایل",
    reportLanguage: "د راپور ژبه",
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
    username: "کارن نوم",
    email: "ایمیل",
    password: "پاسورډ",
    authHelp: "د شرکت کارن نوم او پاسورډ وکاروئ.",
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
    sessionExpired: "ناسته ختمه شوه. بیا ننوزئ.",
    cloudSaveFailed: "کلاوډ ذخیره ناکامه شوه",
    startupCloudFailed: "کلاوډ حالت پیل نه شو. محلي حالت لا هم کار کوي.",
    invalidLogin: "کارن نوم یا پاسورډ غلط دی.",
    reportDownloaded: "د راپور فایل ښکته شو. د چاپ یا PDF لپاره یې خلاص کړئ.",
    activityLogs: "د کارونو لاګونه",
    activityLogsHelp: "وګورئ کوم مدیر کارکوونکي، حاضري، تادیات او راپورونه بدل کړي.",
    clearLogs: "لاګونه پاک کړئ",
    dateTime: "نېټه / وخت",
    user: "کارن",
    action: "عمل",
    details: "تفصیل",
    noLogs: "لاګ نشته.",
    logsCleared: "لاګونه پاک شول",
    workerNumber: "د کارکوونکي نمبر",
    moveUp: "پورته",
    moveDown: "ښکته",
    uploadPhoto: "عکس پورته کړئ",
    takePhoto: "عکس واخلئ",
    capturePhoto: "ثبت کړئ",
    removePhoto: "عکس لرې کړئ",
    photo: "عکس",
    cameraFailed: "کمره پیل نه شوه. عکس پورته کړئ.",
  },
};

Object.assign(translations.en, {
  totalActiveLabour: "Total active labour",
  activeLabour: "Active labour",
  inactiveLabour: "Inactive labour",
    allLabour: "All labour",
    largeIcons: "Large icons",
    mediumIcons: "Medium icons",
    listView: "List",
  city: "City",
  cityPlaceholder: "Dubai, Sharjah...",
  performance: "Performance",
  excellent: "Excellent",
  good: "Good",
  average: "Average",
  needsImprovement: "Needs improvement",
  duplicateWorker: "Another worker already has the same name, Emirates ID, and phone number.",
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
  paidWages: "Paid wages",
  bulkAttendance: "Bulk attendance",
  bulkAttendanceHelp: "Select multiple workers and apply status, shift, in time, and out time in one click.",
  bulkShiftFilter: "Bulk shift filter",
  selectWorkersForBulk: "Select workers",
  selectAllActive: "Select all active",
  clearSelection: "Clear selection",
  applyBulkAttendance: "Apply attendance",
  defaultShift: "Default shift",
  nationality: "Nationality",
  nationalityPlaceholder: "Afghan, Pakistani...",
  foodDeduction: "Food deduction (AED)",
  foodDeductionTotal: "Food deduction",
  payableWage: "Payable wage",
  paidAmount: "Paid amount",
  paidToday: "Paid today",
  manualOvertime: "Manual overtime (hours)",
  whatsapp: "WhatsApp",
  sendWhatsapp: "Send WhatsApp",
  wageSlip: "Wage slip",
  serialNo: "Serial no.",
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
  expenses: "Expenses",
  companyExpenses: "Company expenses",
  companyExpensesHelp: "Store daily company expenses such as worker food, car oil, fuel, tools, or site costs.",
  expenseDate: "Expense date",
  expenseCategory: "Category",
  expenseCategoryPlaceholder: "Food, car oil, tools...",
  expenseDescription: "Description",
  expenseDescriptionPlaceholder: "Optional note",
  expenseAmount: "Amount (AED)",
  expensePaidAmount: "Paid / given (AED)",
  expenseBalance: "Balance",
  expenseOverpaidHelp: "Return / next purchase",
  allBuyers: "All buyers",
  expenseSummary: "Expense summary",
  totalExpenses: "Total expenses",
  moneyGiven: "Money given",
  expenseUnpaid: "Expense unpaid",
  buyerBalance: "Buyer balance",
  buyerName: "Buyer name",
  buyerNamePlaceholder: "Who bought it",
  marketName: "Market / pump",
  marketNamePlaceholder: "Shop or fuel pump name",
  expenseLocation: "Location",
  expenseLocationPlaceholder: "Area or site",
  takeBillPicture: "Take bill picture",
  noBillPicture: "No bill picture",
  bill: "Bill",
  viewBill: "View bill",
  billDetails: "Bill details",
  receiptSaved: "Bill picture saved",
  addExpense: "Add expense",
  noExpenses: "No company expenses yet.",
  expenseSaved: "Expense saved",
  expenseRemoved: "Expense removed",
  monthlyExpenses: "Company monthly expenses",
  grandTotal: "Grand total",
  pashtoName: "Pashto name",
  pashtoNamePlaceholder: "Worker name in Pashto",
  remove: "Remove",
});

Object.assign(translations.ps, {
  totalActiveLabour: "ټول فعال مزدوران",
  activeLabour: "فعال مزدوران",
  inactiveLabour: "غیر فعال مزدوران",
    allLabour: "ټول مزدوران",
    largeIcons: "لوی عکسونه",
    mediumIcons: "منځني عکسونه",
    listView: "لست",
  city: "ښار",
  cityPlaceholder: "دوبۍ، شارجه...",
  performance: "کارکردګي",
  excellent: "ډېر ښه",
  good: "ښه",
  average: "منځنی",
  needsImprovement: "ښه والي ته اړتیا",
  duplicateWorker: "بل کارکوونکی همدا نوم، امارات ID او تلیفون لري.",
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
  paidWages: "ورکړل شوې مزدوري",
  bulkAttendance: "ډله ییزه حاضري",
  bulkAttendanceHelp: "څو کارکوونکي وټاکئ او حالت، شفټ، د داخل وخت او د وتلو وخت په یوه کلیک ثبت کړئ.",
  bulkShiftFilter: "د ډلې شفټ فلټر",
  selectWorkersForBulk: "کارکوونکي وټاکئ",
  selectAllActive: "ټول فعال وټاکئ",
  clearSelection: "انتخاب پاک کړئ",
  applyBulkAttendance: "حاضري ثبت کړئ",
  defaultShift: "اصلي شفټ",
  nationality: "تابعیت",
  nationalityPlaceholder: "افغان، پاکستانی...",
  foodDeduction: "د خوراک کسر (AED)",
  foodDeductionTotal: "د خوراک کسر",
  payableWage: "د ورکړې مزدوري",
  paidAmount: "ورکړل شوې اندازه",
  paidToday: "نن ورکړل شوې",
  manualOvertime: "لاسي اضافي وخت (ساعتونه)",
  whatsapp: "واټساپ",
  sendWhatsapp: "واټساپ ته واستوئ",
  wageSlip: "د مزدورۍ رسید",
  serialNo: "سیریل نمبر",
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
  expenses: "مصارف",
  companyExpenses: "د شرکت مصارف",
  companyExpensesHelp: "د شرکت ورځني مصارف لکه د مزدور خوراک، د موټر تېل، سامان، یا د سایټ مصرفونه ذخیره کړئ.",
  expenseDate: "د مصرف نېټه",
  expenseCategory: "قسم",
  expenseCategoryPlaceholder: "خوراک، د موټر تېل، سامان...",
  expenseDescription: "تفصیل",
  expenseDescriptionPlaceholder: "اختیاري یادښت",
  expenseAmount: "اندازه (AED)",
  expensePaidAmount: "ورکړل شوي / ادا شوي (AED)",
  expenseBalance: "باقي حساب",
  expenseOverpaidHelp: "واپس / بل خرید لپاره",
  allBuyers: "ټول اخیستونکي",
  expenseSummary: "د مصارفو لنډیز",
  totalExpenses: "ټول مصارف",
  moneyGiven: "ورکړل شوې پیسې",
  expenseUnpaid: "ناادا مصرف",
  buyerBalance: "د اخیستونکي باقي",
  buyerName: "اخیستونکی",
  buyerNamePlaceholder: "چا اخیستي",
  marketName: "مارکېټ / پمپ",
  marketNamePlaceholder: "دکان یا پمپ نوم",
  expenseLocation: "ځای",
  expenseLocationPlaceholder: "سیمه یا سایټ",
  takeBillPicture: "د بل عکس واخلئ",
  noBillPicture: "د بل عکس نشته",
  bill: "بل",
  viewBill: "بل وګورئ",
  billDetails: "د بل معلومات",
  receiptSaved: "د بل عکس ذخیره شو",
  addExpense: "مصرف اضافه کړئ",
  noExpenses: "د شرکت مصرف نشته.",
  expenseSaved: "مصرف ذخیره شو",
  expenseRemoved: "مصرف لرې شو",
  monthlyExpenses: "د شرکت میاشتني مصارف",
  grandTotal: "ټول مجموعه",
  pashtoName: "پښتو نوم",
  pashtoNamePlaceholder: "د کارکوونکي پښتو نوم",
  remove: "لرې کړئ",
});
const app = {
  workers: [],
  attendance: {},
  payments: {},
  expenses: [],
  logs: [],
  payrollLocks: {},
  dailyBackups: {},
  lastSaved: null,
  storageMode: "local",
  user: null,
  profile: null,
  language: localStorage.getItem(LANG_KEY) || "en",
  theme: localStorage.getItem(THEME_KEY) || "light",
  workerFilter: "active",
  workerShiftFilter: "all",
  workerView: localStorage.getItem(WORKER_VIEW_KEY) || "large",
  selectedWorkerSummaryId: "",
  attendanceWorkerFilter: "all",
  attendanceShiftFilter: "all",
  bulkAttendanceShiftFilter: "all",
};

let supabaseClient = null;
let workerContextTargetId = "";
let draggedWorkerId = "";
let suppressWorkerOpen = false;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const todayISO = () => new Date().toISOString().slice(0, 10);
const monthISO = (date = new Date()) => date.toISOString().slice(0, 7);
const money = (value) => `AED ${Number(value || 0).toLocaleString("en-AE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const makeId = () => crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
const t = (key) => translations[app.language]?.[key] || translations.en[key] || key;
const reportLanguage = () => $("#reportLanguage")?.value || app.language || "en";
let undoStack = [];
let redoStack = [];
let historySnapshot = "";
let historyPaused = false;

function snapshotAppData() {
  return JSON.stringify({
    workers: app.workers || [],
    attendance: app.attendance || {},
    payments: app.payments || {},
    expenses: app.expenses || [],
    payrollLocks: app.payrollLocks || {},
    dailyBackups: app.dailyBackups || {},
  });
}

function normalizeAppCollections() {
  app.workers ||= [];
  app.attendance ||= {};
  app.payments ||= [];
  app.expenses ||= [];
  app.logs ||= [];
  app.payrollLocks ||= {};
  app.dailyBackups ||= {};
  normalizePaymentLedger();
}

function resetHistory() {
  normalizeAppCollections();
  undoStack = [];
  redoStack = [];
  historySnapshot = snapshotAppData();
  updateUndoRedoButtons();
}

function recordHistory() {
  normalizeAppCollections();
  const nextSnapshot = snapshotAppData();
  if (historyPaused) {
    historySnapshot = nextSnapshot;
    updateUndoRedoButtons();
    return;
  }
  if (historySnapshot && historySnapshot !== nextSnapshot) {
    undoStack.push(historySnapshot);
    if (undoStack.length > 40) undoStack.shift();
    redoStack = [];
  }
  historySnapshot = nextSnapshot;
  updateUndoRedoButtons();
}

function restoreSnapshot(snapshot) {
  const data = JSON.parse(snapshot);
  app.workers = data.workers || [];
  app.attendance = data.attendance || {};
  app.payments = data.payments || {};
  app.expenses = data.expenses || [];
  normalizeAppCollections();
}

function updateUndoRedoButtons() {
  const undoButton = $("#undoButton");
  const redoButton = $("#redoButton");
  if (!undoButton || !redoButton) return;
  undoButton.disabled = undoStack.length === 0;
  redoButton.disabled = redoStack.length === 0;
  undoButton.title = t("undo");
  redoButton.title = t("redo");
  undoButton.setAttribute("aria-label", t("undo"));
  redoButton.setAttribute("aria-label", t("redo"));
}

async function undoChange() {
  if (!undoStack.length) {
    toast(t("nothingToUndo"));
    return;
  }
  redoStack.push(snapshotAppData());
  const snapshot = undoStack.pop();
  restoreSnapshot(snapshot);
  historyPaused = true;
  await saveData(false);
  historyPaused = false;
  historySnapshot = snapshotAppData();
  updateUndoRedoButtons();
  renderAll();
  toast(t("undoDone"));
}

async function redoChange() {
  if (!redoStack.length) {
    toast(t("nothingToRedo"));
    return;
  }
  undoStack.push(snapshotAppData());
  const snapshot = redoStack.pop();
  restoreSnapshot(snapshot);
  historyPaused = true;
  await saveData(false);
  historyPaused = false;
  historySnapshot = snapshotAppData();
  updateUndoRedoButtons();
  renderAll();
  toast(t("redoDone"));
}

function workerInitials(worker) {
  return String(worker?.name || "?")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("") || "?";
}

function displayWorkerName(worker, language = app.language) {
  return language === "ps" && worker?.namePs ? worker.namePs : (worker?.name || "");
}

function currentUserLabel() {
  return app.user?.username || app.user?.email || app.profile?.email || "local";
}

function addLog(action, details = "") {
  app.logs ||= [];
  app.logs.unshift({
    id: makeId(),
    at: new Date().toISOString(),
    user: currentUserLabel(),
    action,
    details,
  });
  app.logs = app.logs.slice(0, 500);
}

function isAdmin() {
  return app.profile?.role === "admin";
}

function requireAdmin() {
  if (isAdmin()) return true;
  toast(t("adminOnly"));
  return false;
}

function monthFromDate(date) {
  return String(date || todayISO()).slice(0, 7);
}

function isMonthLocked(dateOrMonth) {
  return Boolean(app.payrollLocks?.[String(dateOrMonth || "").slice(0, 7)]);
}

function canChangePayrollDate(date, action = "change") {
  if (isMonthLocked(date)) {
    toast(t("monthLocked"));
    addLog("Blocked locked payroll change", `${action} · ${date}`);
    return false;
  }
  if (date < todayISO() && !confirm(t("oldChangeWarning"))) {
    addLog("Old record change cancelled", `${action} · ${date}`);
    return false;
  }
  return true;
}

function createDailyBackup() {
  normalizeAppCollections();
  const date = todayISO();
  if (app.dailyBackups[date]) return;
  app.dailyBackups[date] = {
    at: new Date().toISOString(),
    workers: app.workers,
    attendance: app.attendance,
    payments: app.payments,
    expenses: app.expenses,
    payrollLocks: app.payrollLocks,
  };
  const dates = Object.keys(app.dailyBackups).sort();
  while (dates.length > 45) delete app.dailyBackups[dates.shift()];
}

function withLanguage(language, callback) {
  const previous = app.language;
  app.language = language || previous;
  try {
    return callback();
  } finally {
    app.language = previous;
  }
}

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

function reportSerial(worker, start, end) {
  const base = `${worker.id || worker.name}-${start}-${end}`;
  let hash = 0;
  for (let index = 0; index < base.length; index += 1) {
    hash = ((hash << 5) - hash) + base.charCodeAt(index);
    hash |= 0;
  }
  return `ATBM-${start.replaceAll("-", "")}-${String(Math.abs(hash)).slice(0, 5).padStart(5, "0")}`;
}

function paymentLedgerEntries() {
  normalizePaymentLedger();
  return Array.isArray(app.payments) ? app.payments : [];
}

function normalizePaymentLedger() {
  const current = app.payments;
  const entries = [];
  const seen = new Set();

  const pushEntry = (entry) => {
    const workerId = entry?.workerId;
    const amount = Math.max(0, Number(entry?.amount ?? entry?.paidAmount ?? 0));
    if (!workerId || amount <= 0) return;
    const date = entry.date || entry.paymentDate || entry.end || entry.start || todayISO();
    const start = entry.start || date;
    const end = entry.end || date;
    const id = entry.id || `pay__${workerId}__${date}__${start}__${end}`;
    if (seen.has(id)) {
      const existing = entries.find((item) => item.id === id);
      if (existing) existing.amount += amount;
      return;
    }
    seen.add(id);
    entries.push({
      id,
      workerId,
      date,
      start,
      end,
      amount,
      method: entry.method || "cash",
      note: entry.note || "",
      source: entry.source || "payment",
      user: entry.user || currentUserLabel(),
      updatedAt: entry.updatedAt || new Date().toISOString(),
    });
  };

  if (Array.isArray(current)) {
    current.forEach(pushEntry);
  } else if (current && typeof current === "object") {
    Object.entries(current).forEach(([key, value]) => {
      const [workerId, start, end] = key.split("__");
      pushEntry({
        id: `legacy__${key}`,
        workerId,
        start,
        end,
        date: value?.paymentDate || end || start,
        amount: value?.paidAmount,
        method: value?.method,
        note: value?.note,
        source: "legacy-report",
        updatedAt: value?.updatedAt,
      });
    });
  }

  Object.entries(app.attendance || {}).forEach(([date, day]) => {
    Object.entries(day || {}).forEach(([workerId, record]) => {
      if (!record || typeof record !== "object") return;
      const amount = Number(record.paidAmount || 0);
      if (amount <= 0) return;
      pushEntry({
        id: `attendance__${workerId}__${date}`,
        workerId,
        date,
        start: date,
        end: date,
        amount,
        method: "cash",
        note: "Daily attendance payment",
        source: "attendance",
        updatedAt: record.updatedAt || new Date().toISOString(),
      });
      record.paidAmount = 0;
    });
  });

  app.payments = entries.sort((a, b) => String(a.date).localeCompare(String(b.date)));
}

function paymentLedgerTotal(workerId, start, end) {
  return paymentLedgerEntries()
    .filter((payment) => payment.workerId === workerId && payment.date >= start && payment.date <= end)
    .reduce((sum, payment) => sum + Number(payment.amount || 0), 0);
}

function rowPaidAmount(row, start, end) {
  return paymentLedgerTotal(row.worker.id, start, end);
}

function rowUnpaidAmount(row, start, end) {
  return Math.max(0, Number(row.wage || 0) - rowPaidAmount(row, start, end));
}

function whatsappNumber(worker) {
  const phone = String(worker.phone || "").replace(/\D/g, "");
  if (!phone) return "";
  if (phone.startsWith("00")) return phone.slice(2);
  if (phone.startsWith("0") && phone.length === 10) return `971${phone.slice(1)}`;
  return phone;
}

function reportPeriodLabel(start, end) {
  return start === end ? start : `${start} ${t("to")} ${end}`;
}

function buildWhatsAppMessage(row, start, end, title) {
  const paid = rowPaidAmount(row, start, end);
  const unpaid = rowUnpaidAmount(row, start, end);
  return [
    "Ahmad Times For Building Maintenance L.L.C",
    t("buildingMaintenance"),
    "",
    `${t("wageSlip")} | ${t("serialNo")}: ${reportSerial(row.worker, start, end)}`,
    `${title}`,
    `${t("date")}: ${reportPeriodLabel(start, end)}`,
    "",
    `${t("worker")}: ${displayWorkerName(row.worker)}`,
    `${t("phone")}: ${row.worker.phone || "-"}`,
    `${t("city")}: ${row.worker.city || "-"}`,
    "",
    `${t("present")}: ${row.present || 0}`,
    `${t("halfday")}: ${row.halfday || 0}`,
    `${t("absent")}: ${row.absent || 0}`,
    `${t("off")}: ${row.off || 0}`,
    `${t("hours")}: ${formatHours(row.hours || 0)}`,
    `${t("overtime")}: ${formatHours(row.overtime || 0)}`,
    "",
    `${t("dailyWage")}: ${money(row.dailyWage || currentDailyWage(row.worker))}`,
    `${t("baseWage")}: ${money(row.baseWage || 0)}`,
    `${t("overtimeWage")}: ${money(row.overtimeWage || 0)}`,
    `${t("foodDeductionTotal")}: ${money(row.foodDeduction || 0)}`,
    `${t("payableWage")}: ${money(row.wage || 0)}`,
    `${t("paid")}: ${money(paid)}`,
    `${t("unpaid")}: ${money(unpaid)}`,
    "",
    "Thank you.",
  ].join("\n");
}

function openWhatsAppReport(workerId, start, end, title) {
  return withLanguage(reportLanguage(), () => {
  const type = $("#reportType").value;
  const month = $("#reportMonth").value || monthISO();
  const rows = type === "monthly" ? monthSummary(month, workerId) : summarizeRecords(recordsForRange(start, end, workerId));
  const row = rows.find((item) => item.worker.id === workerId);
  if (!row) {
    toast(t("noRecordsReport"));
    return;
  }
  const message = buildWhatsAppMessage(row, start, end, title);
  const phone = whatsappNumber(row.worker);
  const url = phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
  });
}

function cloudConfigured() {
  const config = window.AHMAD_TIMES_SUPABASE || {};
  return Boolean(config.url && config.anonKey && window.supabase);
}

function simpleUserProfile(user) {
  return user ? { email: user.username, role: user.role, active: true } : null;
}

function readLastActivity() {
  try {
    return Number(localStorage.getItem(LAST_ACTIVITY_KEY) || 0);
  } catch {
    return 0;
  }
}

function markActivity() {
  if (!app.user) return;
  try {
    localStorage.setItem(LAST_ACTIVITY_KEY, String(Date.now()));
  } catch {
    // Ignore unavailable storage.
  }
  scheduleSessionTimeout();
}

function sessionExpired() {
  const last = readLastActivity();
  return !last || Date.now() - last > SESSION_TIMEOUT_MS;
}

let sessionTimer = null;

function scheduleSessionTimeout() {
  window.clearTimeout(sessionTimer);
  if (!app.user) return;
  const remaining = Math.max(0, SESSION_TIMEOUT_MS - (Date.now() - readLastActivity()));
  sessionTimer = window.setTimeout(() => {
    toast(t("sessionExpired"));
    logout();
  }, remaining || 1);
}

function renderLoginGate() {
  document.body.classList.toggle("login-locked", !app.user);
  const error = $("#loginScreenError");
  if (error && app.user) error.textContent = "";
}

function restoreSimpleLogin() {
  try {
    const username = localStorage.getItem(SIMPLE_LOGIN_KEY);
    if (sessionExpired()) {
      localStorage.removeItem(SIMPLE_LOGIN_KEY);
      localStorage.removeItem(LAST_ACTIVITY_KEY);
      return false;
    }
    const user = SIMPLE_USERS.find((item) => item.username.toLowerCase() === String(username || "").toLowerCase());
    if (!user) return false;
    app.user = { id: null, email: user.username, username: user.username };
    app.profile = simpleUserProfile(user);
    scheduleSessionTimeout();
    return true;
  } catch {
    return false;
  }
}

async function initCloud() {
  if (!cloudConfigured()) {
    app.storageMode = "local";
    return;
  }

  const config = window.AHMAD_TIMES_SUPABASE;
  supabaseClient = window.supabase.createClient(config.url, config.anonKey);
  if (!restoreSimpleLogin()) {
    const { data } = await supabaseClient.auth.getSession();
    app.user = data.session?.user || null;
    if (app.user) await loadProfile();
  }
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
      normalizeAppCollections();
      app.storageMode = "cloud";
      restoreSimpleLogin();
      resetHistory();
      return;
    }
    if (error) toast(error.message);
  }

  const saved = getBrowserBackup();
  if (saved) {
    try {
      Object.assign(app, JSON.parse(saved));
      normalizeAppCollections();
      app.storageMode = supabaseClient ? "login required" : "local";
      resetHistory();
      return;
    } catch {
      removeBrowserBackup();
    }
  }

  app.workers = [];
  app.payments = {};
  app.expenses = [];
  app.logs = [];
  resetHistory();
  saveData(false);
}

async function saveData(show = true) {
  createDailyBackup();
  recordHistory();
  app.lastSaved = new Date().toISOString();
  setBrowserBackup();

  if (supabaseClient && app.user && app.profile?.active && ["admin", "manager"].includes(app.profile.role)) {
    const payload = {
      workers: app.workers,
      attendance: app.attendance,
      payments: app.payments,
      expenses: app.expenses,
      payrollLocks: app.payrollLocks,
      dailyBackups: app.dailyBackups,
      logs: app.logs,
      lastSaved: app.lastSaved,
    };
    const { error } = await supabaseClient
      .from("app_data")
      .upsert({ id: "main", data: payload, updated_by: app.user.id || null, updated_at: new Date().toISOString() });
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
      expenses: app.expenses,
      payrollLocks: app.payrollLocks,
      dailyBackups: app.dailyBackups,
      logs: app.logs,
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
  $("#attendanceWeekDate").value = today;
  $("#quickAttendanceDate").value = today;
  $("#expenseDate").value = today;
  $("#reportDate").value = today;
  $("#dashboardMonth").value = month;
  $("#lockMonth").value = month;
  $("#attendanceMonth").value = month;
  $("#expenseMonth").value = month;
  $("#reportMonth").value = month;
  $("#workerJoinDate").value = today;
  $("#workerWageEffectiveDate").value = today;
}

function activeWorkers() {
  return app.workers.filter((worker) => worker.status === "active");
}

function selectedAttendanceWorkerIds() {
  const select = $("#attendanceWorkerSelect");
  if (!select) return [];
  return Array.from(select.selectedOptions).map((option) => option.value).filter(Boolean);
}

function selectedReportWorkerIds() {
  const select = $("#reportWorker");
  if (!select) return ["all"];
  const values = Array.from(select.selectedOptions).map((option) => option.value).filter(Boolean);
  if (!values.length || values.includes("all")) return ["all"];
  return values;
}

function workerMatchesSelection(worker, workerSelection = ["all"]) {
  if (workerSelection === "all") return true;
  const values = Array.isArray(workerSelection) ? workerSelection : [workerSelection];
  return values.includes("all") || values.includes(worker.id);
}

function selectedAttendanceShift() {
  return $("#attendanceShiftFilter")?.value || app.attendanceShiftFilter || "all";
}

function selectedReportShift() {
  return $("#reportShiftFilter")?.value || "all";
}

function attendanceShiftLabel(shift) {
  return shift === "night" ? t("nightShift") : t("dayShift");
}

function workerDefaultShift(worker) {
  if (worker?.defaultShift === "night" || worker?.shift === "night") return "night";
  if (worker?.defaultShift === "day" || worker?.shift === "day") return "day";
  const datedRecords = Object.entries(app.attendance || {})
    .map(([date, records]) => ({ date, record: normalizeAttendanceRecord(records?.[worker?.id]) }))
    .filter((item) => item.record.status)
    .sort((a, b) => b.date.localeCompare(a.date));
  return datedRecords[0]?.record.shift === "night" ? "night" : "day";
}

function workerAssignedShift(worker, date = todayISO()) {
  const record = getAttendanceRecord(date, worker.id);
  return record.status ? record.shift : workerDefaultShift(worker);
}

function effectiveAttendanceShift(record) {
  const selected = selectedAttendanceShift();
  if (!record.status && selected !== "all") return selected;
  return record.shift || "day";
}

function recordMatchesShift(record, shift = "all") {
  if (shift === "all") return true;
  return (record.shift || "day") === shift;
}

function attendanceWorkerMatchesShift(worker, dates = []) {
  const shift = selectedAttendanceShift();
  if (shift === "all") return true;
  const checkDates = dates.length ? dates : [$("#attendanceDate")?.value || todayISO()];
  return checkDates.some((date) => workerAssignedShift(worker, date) === shift);
}

function attendanceWorkers(dates = []) {
  const workers = activeWorkers();
  const base = (() => {
    if (($("#attendanceWorkerFilter")?.value || app.attendanceWorkerFilter) !== "selected") return workers;
  const selected = new Set(selectedAttendanceWorkerIds());
  if (!selected.size) return workers;
  return workers.filter((worker) => selected.has(worker.id));
  })();
  return base.filter((worker) => attendanceWorkerMatchesShift(worker, dates));
}

function renderAttendanceWorkerPicker() {
  const filter = $("#attendanceWorkerFilter");
  const select = $("#attendanceWorkerSelect");
  if (!filter || !select) return;
  filter.value = app.attendanceWorkerFilter || "all";
  const shiftFilter = $("#attendanceShiftFilter");
  if (shiftFilter) shiftFilter.value = app.attendanceShiftFilter || "all";
  const selected = new Set(selectedAttendanceWorkerIds());
  const date = $("#attendanceDate")?.value || todayISO();
  const workers = activeWorkers().filter((worker) => selectedAttendanceShift() === "all" || workerAssignedShift(worker, date) === selectedAttendanceShift());
  select.innerHTML = workers.map((worker) => `
    <option value="${worker.id}" ${selected.has(worker.id) ? "selected" : ""}>${escapeHTML(displayWorkerName(worker))}</option>
  `).join("");
  select.disabled = filter.value !== "selected";
}

function selectedBulkAttendanceWorkerIds() {
  const select = $("#bulkAttendanceWorkers");
  if (!select) return [];
  return Array.from(select.selectedOptions).map((option) => option.value).filter(Boolean);
}

function renderBulkAttendanceWorkerPicker() {
  const select = $("#bulkAttendanceWorkers");
  if (!select) return;
  const date = $("#attendanceDate")?.value || todayISO();
  const shiftFilterInput = $("#bulkAttendanceShiftFilter");
  if (shiftFilterInput) shiftFilterInput.value = app.bulkAttendanceShiftFilter || "all";
  const shiftFilter = shiftFilterInput?.value || app.bulkAttendanceShiftFilter || "all";
  const selected = new Set(selectedBulkAttendanceWorkerIds());
  if (!selected.size && ($("#attendanceWorkerFilter")?.value || app.attendanceWorkerFilter) === "selected") {
    selectedAttendanceWorkerIds().forEach((id) => selected.add(id));
  }
  const workers = activeWorkers().filter((worker) => shiftFilter === "all" || workerAssignedShift(worker, date) === shiftFilter);
  select.innerHTML = workers.map((worker) => `
    <option value="${worker.id}" ${selected.has(worker.id) ? "selected" : ""}>${escapeHTML(displayWorkerName(worker))}</option>
  `).join("");
}

function getAttendance(date, workerId) {
  return getAttendanceRecord(date, workerId).status;
}

function getAttendanceRecord(date, workerId) {
  return normalizeAttendanceRecord(app.attendance[date]?.[workerId]);
}

function normalizeAttendanceRecord(record) {
  if (!record) return { status: "", shift: "day", inTime: "", outTime: "", overtimeHours: "", foodDeduction: 0, paidAmount: 0 };
  if (typeof record === "string") return { status: record, shift: "day", inTime: "", outTime: "", overtimeHours: "", foodDeduction: 0, paidAmount: 0 };
  const overtimeHours = record.overtimeHours === "" || record.overtimeHours === null || record.overtimeHours === undefined
    ? ""
    : Number(record.overtimeHours || 0);
  return {
    status: record.status || "",
    shift: record.shift === "night" ? "night" : "day",
    inTime: record.inTime || "",
    outTime: record.outTime || "",
    overtimeHours,
    foodDeduction: Number(record.foodDeduction || 0),
    paidAmount: Number(record.paidAmount || 0),
  };
}

function setAttendance(date, workerId, status, autoTime = true) {
  if (!canChangePayrollDate(date, "Attendance status")) return;
  app.attendance[date] ||= {};
  const current = getAttendanceRecord(date, workerId);
  const worker = app.workers.find((item) => item.id === workerId);
  if (status) {
    const now = autoTime ? currentTime() : "";
    app.attendance[date][workerId] = {
      ...current,
      status,
      shift: selectedAttendanceShift() === "all" ? (current.shift || "day") : selectedAttendanceShift(),
      inTime: ["present", "halfday"].includes(status) ? (current.inTime || now) : "",
      outTime: ["present", "halfday"].includes(status) ? current.outTime : "",
      overtimeHours: ["present", "halfday"].includes(status) ? current.overtimeHours : "",
      foodDeduction: ["present", "halfday"].includes(status) ? current.foodDeduction : 0,
      paidAmount: ["present", "halfday"].includes(status) ? current.paidAmount : 0,
    };
  }
  else delete app.attendance[date][workerId];
  if (Object.keys(app.attendance[date]).length === 0) delete app.attendance[date];
  addLog("Attendance changed", `${worker?.name || workerId} · ${date} · ${status || "cleared"}`);
  saveData();
}

function applyBulkAttendance() {
  const date = $("#attendanceDate")?.value || todayISO();
  if (!canChangePayrollDate(date, "Bulk attendance")) return;
  const workerIds = selectedBulkAttendanceWorkerIds();
  if (!workerIds.length) {
    toast(t("chooseWorkers"));
    return;
  }
  const status = $("#bulkAttendanceStatus")?.value || "present";
  const shift = $("#bulkAttendanceShift")?.value === "night" ? "night" : "day";
  const inTime = $("#bulkAttendanceIn")?.value || "";
  const outTime = $("#bulkAttendanceOut")?.value || "";
  const isWorkingStatus = ["present", "halfday"].includes(status);

  app.attendance[date] ||= {};
  workerIds.forEach((workerId) => {
    const current = getAttendanceRecord(date, workerId);
    if (!status) {
      delete app.attendance[date][workerId];
      return;
    }
    app.attendance[date][workerId] = {
      ...current,
      status,
      shift,
      inTime: isWorkingStatus ? (inTime || current.inTime || "") : "",
      outTime: isWorkingStatus ? (outTime || current.outTime || "") : "",
      overtimeHours: isWorkingStatus ? current.overtimeHours : "",
      foodDeduction: isWorkingStatus ? current.foodDeduction : 0,
      paidAmount: isWorkingStatus ? current.paidAmount : 0,
    };
  });
  if (Object.keys(app.attendance[date]).length === 0) delete app.attendance[date];
  addLog("Bulk attendance changed", `${workerIds.length} workers · ${date} · ${statusLabel(status)} · ${inTime || "-"} / ${outTime || "-"}`);
  saveData();
  renderAll();
  toast(t("saved"));
}

function setAttendanceShift(date, workerId, value) {
  if (!canChangePayrollDate(date, "Attendance shift")) return;
  app.attendance[date] ||= {};
  const current = getAttendanceRecord(date, workerId);
  app.attendance[date][workerId] = {
    ...current,
    status: current.status || "",
    shift: value === "night" ? "night" : "day",
  };
  const worker = app.workers.find((item) => item.id === workerId);
  addLog("Attendance shift changed", `${worker?.name || workerId} · ${date} · ${attendanceShiftLabel(value)}`);
  saveData();
}

function setAttendanceTime(date, workerId, field, value) {
  if (!canChangePayrollDate(date, "Attendance time")) return;
  app.attendance[date] ||= {};
  const current = getAttendanceRecord(date, workerId);
  app.attendance[date][workerId] = {
    ...current,
    status: current.status || "",
    [field]: value,
  };
  if (field === "inTime" && value && !current.outTime) app.attendance[date][workerId].outTime = "";
  const worker = app.workers.find((item) => item.id === workerId);
  addLog("Attendance time changed", `${worker?.name || workerId} · ${date} · ${field}: ${value || "-"}`);
  saveData();
}

function setAttendanceMoney(date, workerId, field, value) {
  if (!canChangePayrollDate(date, "Attendance money")) return;
  if (field === "paidAmount") {
    saveDailyPayment(workerId, date, value);
    return;
  }
  app.attendance[date] ||= {};
  const current = getAttendanceRecord(date, workerId);
  app.attendance[date][workerId] = {
    ...current,
    status: current.status || "",
    [field]: Number(value || 0),
  };
  const worker = app.workers.find((item) => item.id === workerId);
  addLog("Attendance money changed", `${worker?.name || workerId} · ${date} · ${field}: ${value || 0}`);
  saveData();
}

function setAttendanceNumber(date, workerId, field, value) {
  if (!canChangePayrollDate(date, "Attendance overtime")) return;
  app.attendance[date] ||= {};
  const current = getAttendanceRecord(date, workerId);
  app.attendance[date][workerId] = {
    ...current,
    status: current.status || "",
    [field]: value === "" ? "" : Number(value || 0),
  };
  const worker = app.workers.find((item) => item.id === workerId);
  addLog("Attendance number changed", `${worker?.name || workerId} · ${date} · ${field}: ${value || "-"}`);
  saveData();
}

function setNowTime(date, workerId, field) {
  const current = getAttendanceRecord(date, workerId);
  if (!current.status) {
    app.attendance[date] ||= {};
    app.attendance[date][workerId] = { ...current, status: "present" };
  }
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

function attendanceOvertimeWage(worker, overtimeHours, date = todayISO(), status = "present") {
  if (status !== "present") return 0;
  const hourlyRate = wageForDate(worker, date) / STANDARD_HOURS;
  return overtimeHours * hourlyRate;
}

function foodDeduction(record, status) {
  if (!["present", "halfday"].includes(status)) return 0;
  return Number(normalizeAttendanceRecord(record).foodDeduction || 0);
}

function attendanceWage(worker, record, overtimeHours = 0, date = todayISO()) {
  const status = normalizeAttendanceRecord(record).status;
  return Math.max(0, attendanceBaseWage(worker, status, date) + attendanceOvertimeWage(worker, overtimeHours, date, status) - foodDeduction(record, status));
}

function paymentKey(workerId, start, end) {
  return `${workerId}__${start}__${end}`;
}

function paymentRecord(workerId, start, end) {
  const payment = paymentLedgerEntries()
    .filter((item) => item.workerId === workerId && item.start === start && item.end === end && item.source === "report")
    .sort((a, b) => String(b.updatedAt || "").localeCompare(String(a.updatedAt || "")))[0];
  return payment
    ? { paidAmount: payment.amount, paymentDate: payment.date, method: payment.method || "cash", note: payment.note || "" }
    : { paidAmount: 0, paymentDate: "", method: "cash", note: "" };
}

function paymentTotals(rows, start, end) {
  return rows.reduce((acc, row) => {
    const paid = rowPaidAmount(row, start, end);
    acc.paid += paid;
    acc.pending += Math.max(0, Number(row.wage || 0) - paid);
    return acc;
  }, { paid: 0, pending: 0 });
}

function savePayment(workerId, start, end, paidAmount, paymentDate, method, note) {
  if (!canChangePayrollDate(paymentDate || end, "Payment")) return;
  const worker = app.workers.find((item) => item.id === workerId);
  const date = paymentDate || end || todayISO();
  const id = `report__${workerId}__${start}__${end}`;
  normalizePaymentLedger();
  app.payments = paymentLedgerEntries().filter((payment) => payment.id !== id);
  const amount = Math.max(0, Number(paidAmount || 0));
  if (amount > 0) {
    app.payments.push({
      id,
      workerId,
      date,
      start,
      end,
      amount,
      method: method || "cash",
      note: note || "",
      source: "report",
      user: currentUserLabel(),
      updatedAt: new Date().toISOString(),
    });
  }
  addLog("Payment saved", `${worker?.name || workerId} · ${start} to ${end} · ${money(paidAmount)}`);
  saveData();
  toast(t("paymentSaved"));
}

function saveDailyPayment(workerId, date, paidAmount) {
  if (!canChangePayrollDate(date, "Daily payment")) return;
  const worker = app.workers.find((item) => item.id === workerId);
  const id = `attendance__${workerId}__${date}`;
  normalizePaymentLedger();
  app.payments = paymentLedgerEntries().filter((payment) => payment.id !== id);
  const amount = Math.max(0, Number(paidAmount || 0));
  if (amount > 0) {
    app.payments.push({
      id,
      workerId,
      date,
      start: date,
      end: date,
      amount,
      method: "cash",
      note: "Daily attendance payment",
      source: "attendance",
      user: currentUserLabel(),
      updatedAt: new Date().toISOString(),
    });
  }
  addLog("Daily payment saved", `${worker?.name || workerId} · ${date} · ${money(amount)}`);
  saveData();
}

function openPrintableReport() {
  renderReport();
  const language = reportLanguage();
  const dir = language === "ps" ? "rtl" : "ltr";
  const logoUrl = new URL("ahmad-times-logo.png", window.location.href).href;
  const stampUrl = new URL("ahmad-times-stamp.png", window.location.href).href;
  const report = $("#reportOutput").innerHTML
    .replace(/<div class="report-logo-fallback"[^>]*>.*?<\/div>/g, "")
    .replaceAll('src="ahmad-times-logo.png"', `src="${logoUrl}"`)
    .replaceAll("src='ahmad-times-logo.png'", `src='${logoUrl}'`)
    .replaceAll('src="ahmad-times-stamp.png"', `src="${stampUrl}"`);
  if (!report.trim()) {
    toast(t("emptyReport"));
    return;
  }
  const html = `<!doctype html>
    <html lang="${language}" dir="${dir}">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Ahmad Times Wage Report</title>
        <style>
          body { margin: 0; padding: 24px; color: #1d2433; font-family: Arial, sans-serif; background: #fff; }
          .report-page { position: relative; max-width: 1100px; margin: 0 auto; padding-bottom: 170px; }
          .report-stamp { width: 136px !important; max-width: 136px !important; height: auto !important; opacity: 0.9; pointer-events: none; mix-blend-mode: multiply; }
          .print-actions { display: flex; justify-content: flex-end; gap: 8px; margin: 0 auto 16px; max-width: 1100px; }
          .print-actions button { min-height: 40px; padding: 8px 14px; border: 1px solid #bce7f7; border-radius: 8px; color: #087fae; background: #f4fbfe; font-weight: 700; cursor: pointer; }
          .report-brand { display: flex; gap: 12px; align-items: center; padding: 12px; margin-bottom: 12px; border: 1px solid #bce7f7; border-radius: 8px; background: #f4fbfe; }
          .report-brand img { width: 72px; height: 72px; object-fit: contain; border-radius: 50%; background: #fff; }
          .report-logo-fallback { display: none !important; }
          .report-brand strong, .report-brand span { display: block; }
          .report-brand strong { font-size: 20px; }
          .report-brand span, .help-text { color: #667085; }
          .report-meta { display: flex; justify-content: space-between; gap: 12px; padding: 10px 0; color: #667085; font-size: 12px; border-bottom: 1px solid #e6edf5; }
          .worker-report-details { padding: 12px; margin: 12px 0; border: 1px solid #d9eaf1; border-radius: 8px; background: #fbfdff; }
          .worker-report-id { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
          .worker-report-id img, .worker-report-id .worker-avatar { width: 64px; height: 64px; flex-basis: 64px; border-radius: 50%; object-fit: cover; }
          .worker-report-id h4 { margin: 0 0 3px; font-size: 18px; }
          .worker-report-id p { margin: 0; color: #667085; }
          .worker-report-grid { display: grid; grid-template-columns: repeat(4, minmax(130px, 1fr)); gap: 8px; }
          .worker-report-grid div { padding: 9px 10px; border-radius: 8px; background: #f4f7fb; }
          .worker-report-grid .wide { grid-column: span 2; }
          .worker-report-grid span { display: block; color: #667085; font-size: 11px; font-weight: 700; text-transform: uppercase; }
          .worker-report-grid strong { display: block; margin-top: 2px; word-break: break-word; }
          .summary-strip { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin: 12px 0; }
          .summary-strip div { padding: 10px; border-radius: 8px; background: #f4f7fb; }
          .summary-strip span { display: block; color: #667085; font-size: 12px; font-weight: 700; }
          .summary-strip strong { display: block; margin-top: 3px; font-size: 16px; }
          .report-footer { display: flex; justify-content: flex-end; align-items: flex-end; gap: 24px; margin-top: 28px; padding-top: 18px; border-top: 1px solid #d9e0ea; break-inside: avoid; }
          .report-stamp-box { margin-left: auto; text-align: center; color: #667085; font-size: 12px; }
          [dir="rtl"] .report-stamp-box { margin-right: auto; margin-left: 0; }
          .panel, .report-panel { border: 0; box-shadow: none; background: #fff; }
          .payment-list, .report-controls { display: none; }
          .table-wrap { overflow: visible; }
          table { width: 100%; border-collapse: collapse; margin-top: 14px; font-size: 12px; }
          th, td { padding: 8px; border-bottom: 1px solid #d9e0ea; text-align: start; white-space: nowrap; }
          th { color: #667085; text-transform: uppercase; font-size: 11px; }
          @media (max-width: 700px) { body { padding: 12px; } .report-brand { align-items: flex-start; } .summary-strip, .worker-report-grid { grid-template-columns: 1fr 1fr; } .worker-report-grid .wide { grid-column: 1 / -1; } .table-wrap { overflow-x: auto; } .report-footer { align-items: flex-start; flex-direction: column; } }
          @media (max-width: 460px) { .report-brand { flex-wrap: wrap; } .summary-strip, .worker-report-grid { grid-template-columns: 1fr; } }
          @media print { body { padding: 0; } .print-actions { display: none; } .report-page { max-width: none; min-height: calc(100vh - 10px); padding-bottom: 178px; } .report-footer { position: fixed; right: 0; bottom: 12px; left: 0; background: #fff; } }
        </style>
      </head>
      <body>
        <div class="print-actions">
          <button onclick="window.print()">Print / Save PDF</button>
        </div>
        <main class="report-page">${report}</main>
      </body>
    </html>`;
  downloadFile(`ahmad-times-report-${todayISO()}.html`, html, "text/html");
  toast(t("reportDownloaded"));
}

function printReportOnly() {
  openPrintableReport();
}

function openPdfReport() {
  openPrintableReport();
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

function datesBetween(start, end) {
  const dates = [];
  const current = new Date(`${start}T00:00:00`);
  const last = new Date(`${end}T00:00:00`);
  while (current <= last) {
    dates.push(current.toISOString().slice(0, 10));
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

function recordsForRange(start, end, workerId = "all", shift = "all") {
  const rows = [];
  const workerSelection = Array.isArray(workerId) ? workerId : [workerId];
  const current = new Date(`${start}T00:00:00`);
  const last = new Date(`${end}T00:00:00`);
  while (current <= last) {
    const date = current.toISOString().slice(0, 10);
    const day = app.attendance[date] || {};
    app.workers.forEach((worker) => {
      if (!workerMatchesSelection(worker, workerSelection)) return;
      const record = normalizeAttendanceRecord(day[worker.id]);
      const status = record.status;
      if (!status) return;
      if (!recordMatchesShift(record, shift)) return;
      const hours = calculateHours(record);
      const overtime = status === "present" ? hours.overtime : 0;
      rows.push({
        date,
        worker,
        status,
        inTime: record.inTime,
        outTime: record.outTime,
        hours: hours.total,
        overtime,
        dailyWage: wageForDate(worker, date),
        baseWage: attendanceBaseWage(worker, status, date),
        overtimeWage: attendanceOvertimeWage(worker, overtime, date, status),
        foodDeduction: foodDeduction(record, status),
        paidAmount: paymentLedgerTotal(worker.id, date, date),
        wage: attendanceWage(worker, record, overtime, date),
      });
    });
    current.setDate(current.getDate() + 1);
  }
  return rows;
}

function monthSummary(month, workerId = "all", shift = "all") {
  const dates = daysInMonth(month);
  const workerSelection = Array.isArray(workerId) ? workerId : [workerId];
  return app.workers
    .filter((worker) => workerMatchesSelection(worker, workerSelection))
    .map((worker) => {
      const shiftedDates = dates.filter((date) => {
        const record = getAttendanceRecord(date, worker.id);
        return record.status && recordMatchesShift(record, shift);
      });
      const present = shiftedDates.filter((date) => getAttendance(date, worker.id) === "present").length;
      const halfday = shiftedDates.filter((date) => getAttendance(date, worker.id) === "halfday").length;
      const absent = shiftedDates.filter((date) => getAttendance(date, worker.id) === "absent").length;
      const off = shiftedDates.filter((date) => getAttendance(date, worker.id) === "off").length;
      const hours = shiftedDates.reduce((sum, date) => sum + calculateHours(getAttendanceRecord(date, worker.id)).total, 0);
      const overtime = dates.reduce((sum, date) => {
        const record = getAttendanceRecord(date, worker.id);
        if (!record.status || !recordMatchesShift(record, shift)) return sum;
        const status = record.status;
        return sum + (status === "present" ? calculateHours(getAttendanceRecord(date, worker.id)).overtime : 0);
      }, 0);
      const baseWage = shiftedDates.reduce((sum, date) => sum + attendanceBaseWage(worker, getAttendance(date, worker.id), date), 0);
      const overtimeWage = shiftedDates.reduce((sum, date) => {
        const status = getAttendance(date, worker.id);
        const overtimeHours = status === "present" ? calculateHours(getAttendanceRecord(date, worker.id)).overtime : 0;
        return sum + attendanceOvertimeWage(worker, overtimeHours, date, status);
      }, 0);
      const food = shiftedDates.reduce((sum, date) => sum + foodDeduction(getAttendanceRecord(date, worker.id), getAttendance(date, worker.id)), 0);
      const paidAmount = paymentLedgerTotal(worker.id, dates[0], dates[dates.length - 1]);
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
  applyTheme();
  applyLanguage();
  applyTheme();
  renderLoginGate();
  renderAuthStatus();
  renderDashboard();
  renderControlCenter();
  renderWorkers();
  renderAttendanceWorkerPicker();
  renderBulkAttendanceWorkerPicker();
  renderDayAttendance();
  renderWeekAttendance();
  renderMonthAttendance();
  renderExpenses();
  renderReport();
  renderStorage();
  renderLogs();
  renderSafety();
}

function renderControlCenter() {
  const date = $("#todayInput")?.value || todayISO();
  const todayRecords = app.attendance[date] || {};
  const activeCount = activeWorkers().length;
  const presentToday = Object.values(todayRecords)
    .filter((record) => ["present", "halfday"].includes(normalizeAttendanceRecord(record).status))
    .length;
  const alerts = payrollAlerts();
  const latestBackup = Object.entries(app.dailyBackups || {})
    .sort((a, b) => b[0].localeCompare(a[0]))[0];
  const storageLabel = app.storageMode === "cloud" ? t("cloudMode") : t("localMode");
  const lastSaved = app.lastSaved ? new Date(app.lastSaved).toLocaleString() : t("never");

  if ($("#controlTodayStatus")) $("#controlTodayStatus").textContent = `${presentToday}/${activeCount}`;
  if ($("#controlTodayDetail")) {
    $("#controlTodayDetail").textContent = `${t("presentToday")} · ${date} · ${STANDARD_HOURS}h ${t("fullDayBasis")}`;
  }
  if ($("#controlHealthStatus")) $("#controlHealthStatus").textContent = alerts.length ? t("needsReview") : t("healthy");
  if ($("#controlHealthDetail")) {
    $("#controlHealthDetail").textContent = alerts.length ? `${alerts.length} ${t("mistakeAlerts")}` : t("noAlerts");
  }
  if ($("#controlDataSafety")) $("#controlDataSafety").textContent = storageLabel;
  if ($("#controlDataSafetyDetail")) {
    $("#controlDataSafetyDetail").textContent = `${t("recordsSaved")}: ${lastSaved} · ${t("latestBackup")}: ${latestBackup?.[0] || t("noBackupYet")}`;
  }
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
  updateUndoRedoButtons();
}

function applyTheme() {
  const theme = app.theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
  const button = $("#themeToggle");
  const label = $("#themeToggleText");
  if (button) {
    button.classList.toggle("active", theme === "dark");
    button.setAttribute("aria-pressed", String(theme === "dark"));
  }
  if (label) label.textContent = theme === "dark" ? t("lightMode") : t("darkMode");
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

function renderDashboardLegacyUnused() {
  const date = $("#todayInput").value || todayISO();
  const month = $("#dashboardMonth").value || monthISO();
  const summary = monthSummary(month);
  const todayRecords = app.attendance[date] || {};
  const monthWages = summary.reduce((sum, row) => sum + row.wage, 0);
  const monthExpensesTotal = companyExpenseTotal(month);
  const monthOvertime = summary.reduce((sum, row) => sum + row.overtime, 0);
  const monthDates = daysInMonth(month);
  const dashboardPayTotals = paymentTotals(summary, monthDates[0], monthDates[monthDates.length - 1]);

  $("#statTotalWorkers").textContent = app.workers.filter((worker) => worker.status === "active").length;
  $("#statActiveWorkers").textContent = app.workers.filter((worker) => worker.status === "active").length;
  $("#statInactiveWorkers").textContent = app.workers.filter((worker) => worker.status === "inactive").length;
  $("#statPresentToday").textContent = Object.values(todayRecords).filter((record) => ["present", "halfday"].includes(normalizeAttendanceRecord(record).status)).length;
  $("#statMonthWages").textContent = money(monthWages);
  $("#statMonthExpenses").textContent = money(monthExpensesTotal);
  $("#statGrandTotal").textContent = money(monthWages + monthExpensesTotal);
  $("#statAttendanceDays").textContent = formatHours(monthOvertime);
  $("#statUnpaidWages").textContent = money(dashboardPayTotals.pending);
  if ($("#statPaidWages")) $("#statPaidWages").textContent = money(dashboardPayTotals.paid);
  if ($("#dashboardDateLabel")) $("#dashboardDateLabel").textContent = date;

  $("#dashboardSummary").innerHTML = summary
    .filter((row) => row.worker.status === "active" && (row.present || row.halfday || row.worker.status === "active"))
    .map((row) => {
      const paid = rowPaidAmount(row, monthDates[0], monthDates[monthDates.length - 1]);
      const unpaid = rowUnpaidAmount(row, monthDates[0], monthDates[monthDates.length - 1]);
      return `
        <tr>
          <td data-label="${t("worker")}">${escapeHTML(displayWorkerName(row.worker))}</td>
          <td data-label="${t("days")}">${row.present + (row.halfday * 0.5)}</td>
          <td data-label="${t("hours")}">${formatHours(row.hours)}</td>
          <td data-label="${t("overtime")}">${formatHours(row.overtime)}</td>
          <td data-label="${t("dailyWage")}">${money(row.dailyWage || currentDailyWage(row.worker))}</td>
          <td data-label="${t("paid")}">${money(paid)}</td>
          <td data-label="${t("unpaid")}"><strong>${money(unpaid)}</strong></td>
          <td data-label="${t("total")}"><strong>${money(row.wage)}</strong></td>
        </tr>
      `;
    }).join("") || `<tr><td colspan="8">No wage records for this month.</td></tr>`;

  if ($("#todayList")) $("#todayList").innerHTML = activeWorkers().map((worker) => {
    const record = normalizeAttendanceRecord(todayRecords[worker.id]);
    const status = record.status || "not marked";
    const hours = calculateHours(record);
    return `
      <div class="today-row">
        <div>
          <strong>${escapeHTML(displayWorkerName(worker))}</strong>
          <p>${t("in")}: ${record.inTime || "-"} · ${t("out")}: ${record.outTime || "-"} · ${t("hours")}: ${formatHours(hours.total)} · ${t("overtime")}: ${formatHours(hours.overtime)}</p>
          <p>${escapeHTML(worker.role || t("roleWorker"))} · ${money(wageForDate(worker, date))}</p>
        </div>
        <span class="pill">${statusLabel(status)}</span>
      </div>
    `;
  }).join("") || emptyState("No workers added yet.");
}

function openWorkerSummary(workerId) {
  app.selectedWorkerSummaryId = workerId;
  renderWorkers();
}

function closeWorkerSummary() {
  app.selectedWorkerSummaryId = "";
  renderWorkers();
}

function workerSummaryPanel(worker) {
  const month = $("#dashboardMonth")?.value || monthISO();
  const dates = daysInMonth(month);
  const start = dates[0];
  const end = dates[dates.length - 1];
  const row = monthSummary(month, worker.id)[0] || {
    worker,
    present: 0,
    halfday: 0,
    absent: 0,
    off: 0,
    hours: 0,
    overtime: 0,
    dailyWage: currentDailyWage(worker),
    baseWage: 0,
    overtimeWage: 0,
    foodDeduction: 0,
    paidAmount: 0,
    wage: 0,
  };
  const paid = rowPaidAmount(row, start, end);
  const unpaid = rowUnpaidAmount(row, start, end);
  const today = $("#todayInput")?.value || todayISO();
  const todayRecord = getAttendanceRecord(today, worker.id);
  const todayHours = calculateHours(todayRecord);
  const todayOvertime = todayRecord.status === "present" ? todayHours.overtime : 0;
  const todayPayable = attendanceWage(worker, todayRecord, todayOvertime, today);
  const recentRows = dates
    .filter((date) => date <= today && getAttendance(date, worker.id))
    .slice(-10)
    .reverse()
    .map((date) => {
      const record = getAttendanceRecord(date, worker.id);
      const hours = calculateHours(record);
      const overtime = record.status === "present" ? hours.overtime : 0;
      const payable = attendanceWage(worker, record, overtime, date);
      const paid = paymentLedgerTotal(worker.id, date, date);
      return `
        <tr>
          <td>${date}</td>
          <td>${statusLabel(record.status)}</td>
          <td>${record.inTime || "-"}</td>
          <td>${record.outTime || "-"}</td>
          <td>${formatHours(hours.total)}</td>
          <td>${formatHours(overtime)}</td>
          <td>${money(payable)}</td>
          <td>${money(paid)}</td>
        </tr>
      `;
    }).join("") || `<tr><td colspan="8">${t("noRecordsReport")}</td></tr>`;

  return `
    <section class="worker-summary-panel panel">
      <div class="worker-summary-head">
        <div class="worker-title">
          ${worker.photo ? `<img class="worker-avatar" src="${worker.photo}" alt="${escapeHTML(displayWorkerName(worker))}">` : `<div class="worker-avatar worker-avatar-fallback">${escapeHTML(workerInitials(worker))}</div>`}
          <div>
            <p class="eyebrow">${t("workerSummary")}</p>
            <h3>${escapeHTML(displayWorkerName(worker))}</h3>
            <p class="help-text">${escapeHTML(worker.role || t("roleWorker"))} · ${t(worker.status || "active")}</p>
          </div>
        </div>
        <button class="ghost" data-back-workers>${t("back")}</button>
      </div>

      <div class="summary-strip">
        <div><span>${t("monthlySummary")}</span><strong>${month}</strong></div>
        <div><span>${t("present")} ${t("days")}</span><strong>${row.present + (row.halfday * 0.5)}</strong></div>
        <div><span>${t("hours")}</span><strong>${formatHours(row.hours)}</strong></div>
        <div><span>${t("overtime")}</span><strong>${formatHours(row.overtime)}</strong></div>
        <div><span>${t("dailyWage")}</span><strong>${money(row.dailyWage || currentDailyWage(worker))}</strong></div>
        <div><span>${t("payableWage")}</span><strong>${money(row.wage)}</strong></div>
        <div><span>${t("paid")}</span><strong>${money(paid)}</strong></div>
        <div><span>${t("unpaid")}</span><strong>${money(unpaid)}</strong></div>
      </div>

      <section class="mini-attendance-card">
        <div>
          <h3>${t("todaysAttendance")}</h3>
          <p class="help-text">${today}</p>
        </div>
        <div class="mini-attendance-grid">
          <div><span>${t("statusColumn")}</span><strong>${statusLabel(todayRecord.status || "not marked")}</strong></div>
          <div><span>${t("in")}</span><strong>${todayRecord.inTime || "-"}</strong></div>
          <div><span>${t("out")}</span><strong>${todayRecord.outTime || "-"}</strong></div>
          <div><span>${t("hours")}</span><strong>${formatHours(todayHours.total)}</strong></div>
          <div><span>${t("overtime")}</span><strong>${formatHours(todayHours.overtime)}</strong></div>
          <div><span>${t("payableWage")}</span><strong>${money(todayPayable)}</strong></div>
        </div>
      </section>

      <section>
        <div class="panel-head">
          <h3>${t("recentAttendance")}</h3>
          <span class="pill">${month}</span>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>${t("date")}</th>
                <th>${t("statusColumn")}</th>
                <th>${t("in")}</th>
                <th>${t("out")}</th>
                <th>${t("hours")}</th>
                <th>${t("overtime")}</th>
                <th>${t("payableWage")}</th>
                <th>${t("paid")}</th>
              </tr>
            </thead>
            <tbody>${recentRows}</tbody>
          </table>
        </div>
      </section>
    </section>
  `;
}

function renderWorkers() {
  const query = ($("#workerSearch").value || "").trim().toLowerCase();
  const list = $("#workersList");
  const view = app.workerView || "large";
  const selectedWorker = app.selectedWorkerSummaryId ? app.workers.find((worker) => worker.id === app.selectedWorkerSummaryId) : null;
  if (selectedWorker && list) {
    list.className = "worker-summary-wrap";
    list.innerHTML = workerSummaryPanel(selectedWorker);
    return;
  }
  if (app.selectedWorkerSummaryId && !selectedWorker) app.selectedWorkerSummaryId = "";
  if (list) {
    list.className = `worker-cards worker-view-${view}`;
  }
  $$(".worker-view").forEach((button) => {
    button.classList.toggle("active", button.dataset.workerView === view);
  });
  const workerShiftFilter = $("#workerShiftFilter");
  if (workerShiftFilter) workerShiftFilter.value = app.workerShiftFilter || "all";
  const workers = app.workers.filter((worker) => {
    const filter = app.workerFilter || "active";
    if (filter !== "all" && worker.status !== filter) return false;
    const shiftFilter = app.workerShiftFilter || "all";
    if (shiftFilter !== "all" && workerDefaultShift(worker) !== shiftFilter) return false;
    const haystack = [worker.name, worker.namePs, worker.role, worker.city, worker.nationality, worker.performance, worker.phone, worker.emiratesId, worker.status, attendanceShiftLabel(workerDefaultShift(worker))].join(" ").toLowerCase();
    return haystack.includes(query);
  });

  list.innerHTML = workers.map((worker) => {
    const workerIndex = app.workers.findIndex((item) => item.id === worker.id);
    if (view !== "list") {
      return `
        <article class="worker-card worker-icon-card" data-worker-id="${worker.id}" data-open-worker-details="${worker.id}" draggable="true" tabindex="0" role="button" aria-label="${escapeHTML(displayWorkerName(worker))}">
          ${worker.photo ? `<img class="worker-avatar" src="${worker.photo}" alt="${escapeHTML(displayWorkerName(worker))}">` : `<div class="worker-avatar worker-avatar-fallback">${escapeHTML(workerInitials(worker))}</div>`}
          <h3><span class="worker-number">#${workerIndex + 1}</span> ${escapeHTML(displayWorkerName(worker))}</h3>
          <p>${escapeHTML(worker.role || t("roleWorker"))}</p>
          <span class="worker-shift-badge">${attendanceShiftLabel(workerDefaultShift(worker))}</span>
        </article>
      `;
    }
    return `
    <article class="worker-card" data-worker-id="${worker.id}" draggable="true">
      <div class="worker-card-head">
        <div class="worker-title">
          ${worker.photo ? `<img class="worker-avatar" src="${worker.photo}" alt="${escapeHTML(displayWorkerName(worker))}">` : `<div class="worker-avatar worker-avatar-fallback">${escapeHTML(workerInitials(worker))}</div>`}
          <div>
            <h3><span class="worker-number">#${workerIndex + 1}</span> ${escapeHTML(displayWorkerName(worker))}</h3>
            <p>${escapeHTML(worker.role || t("roleWorker"))}</p>
          </div>
        </div>
        <span class="status-pill ${worker.status}">${t(worker.status)}</span>
      </div>
      <div class="worker-meta">
        <div><span>${t("workerNumber")}</span><strong>#${workerIndex + 1}</strong></div>
        <div><span>${t("currentDailyWage")}</span><strong>${money(currentDailyWage(worker))}</strong></div>
        <div><span>${t("wageHistory")}</span><strong>${escapeHTML(wageHistoryText(worker))}</strong></div>
        <div><span>${t("joiningDate")}</span><strong>${worker.joinDate || "-"}</strong></div>
        <div><span>${t("city")}</span><strong>${escapeHTML(worker.city || "-")}</strong></div>
        <div><span>${t("nationality")}</span><strong>${escapeHTML(worker.nationality || "-")}</strong></div>
        <div><span>${t("performance")}</span><strong>${performanceLabel(worker.performance)}</strong></div>
        <div><span>${t("defaultShift")}</span><strong>${attendanceShiftLabel(workerDefaultShift(worker))}</strong></div>
        <div><span>${t("phone")}</span><strong>${escapeHTML(worker.phone || "-")}</strong></div>
        <div><span>${t("emiratesId")}</span><strong>${escapeHTML(worker.emiratesId || "-")}</strong></div>
      </div>
      <div class="worker-card-actions">
        <button data-move-worker="${worker.id}" data-move-direction="up" ${workerIndex <= 0 ? "disabled" : ""}>${t("moveUp")}</button>
        <button data-move-worker="${worker.id}" data-move-direction="down" ${workerIndex >= app.workers.length - 1 ? "disabled" : ""}>${t("moveDown")}</button>
        <button data-open-worker-details="${worker.id}">${t("workerSummary")}</button>
        <button data-edit-worker="${worker.id}">${t("editWorkerTitle")}</button>
      </div>
    </article>
  `;
  }).join("") || emptyState(t("noWorkerSearch"));
}

function renderDayAttendance() {
  const date = $("#attendanceDate").value || todayISO();
  const workers = attendanceWorkers([date]);
  const shift = selectedAttendanceShift();
  if (shift !== "all") {
    $("#dayAttendanceList").innerHTML = `
      <div class="attendance-group">
        <h4>${attendanceShiftLabel(shift)}</h4>
        ${workers.map((worker) => attendanceRowWithTime(worker, date)).join("") || emptyState(t("noActiveWorkers"))}
      </div>
    `;
    return;
  }
  const dayWorkers = workers.filter((worker) => workerAssignedShift(worker, date) !== "night");
  const nightWorkers = workers.filter((worker) => workerAssignedShift(worker, date) === "night");
  $("#dayAttendanceList").innerHTML = `
    <div class="attendance-group">
      <h4>${t("dayShift")}</h4>
      ${dayWorkers.map((worker) => attendanceRowWithTime(worker, date)).join("") || emptyState(t("noActiveWorkers"))}
    </div>
    <div class="attendance-group">
      <h4>${t("nightShift")}</h4>
      ${nightWorkers.map((worker) => attendanceRowWithTime(worker, date)).join("") || emptyState(t("noActiveWorkers"))}
    </div>
  `;
}

function weekRange(dateValue = todayISO()) {
  const start = new Date(`${dateValue}T00:00:00`);
  const day = start.getDay();
  start.setDate(start.getDate() - day);
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return date.toISOString().slice(0, 10);
  });
}

function renderWeekAttendance() {
  const dates = weekRange($("#attendanceWeekDate")?.value || todayISO());
  const rows = attendanceWorkers(dates).map((worker) => `
    <tr>
      <td>
        <div class="month-worker-cell">
          ${worker.photo ? `<img class="month-worker-photo" src="${worker.photo}" alt="${escapeHTML(displayWorkerName(worker))}">` : `<div class="month-worker-photo worker-avatar-fallback">${escapeHTML(workerInitials(worker))}</div>`}
          <div>
            <strong>${escapeHTML(displayWorkerName(worker))}</strong><br>
            <span>${money(wageForDate(worker, dates[0]))}</span>
            <small>${t("shift")}: ${attendanceShiftLabel(getAttendanceRecord(dates.find((date) => getAttendance(date, worker.id)) || dates[0], worker.id).shift)}</small>
          </div>
        </div>
      </td>
      ${dates.map((date) => {
        const record = getAttendanceRecord(date, worker.id);
        const hours = calculateHours(record);
        const overtime = record.status === "present" ? hours.overtime : 0;
        return `
          <td>
            <span class="status-chip status-${record.status || "empty"}">${record.status ? statusLabel(record.status) : "-"}</span>
            <small>${record.inTime || "-"} / ${record.outTime || "-"}</small>
            <small>${formatHours(hours.total)} · ${formatHours(overtime)}</small>
          </td>
        `;
      }).join("")}
    </tr>
  `).join("");

  $("#weekAttendanceGrid").innerHTML = `
    <table class="month-table weekly-attendance-table">
      <thead>
        <tr>
          <th>${t("worker")}</th>
          ${dates.map((date) => `<th>${date.slice(5)}</th>`).join("")}
        </tr>
      </thead>
      <tbody>${rows || `<tr><td colspan="8">${t("noActiveWorkers")}</td></tr>`}</tbody>
    </table>
  `;
}

function attendanceRowWithTime(worker, date) {
  const record = getAttendanceRecord(date, worker.id);
  const rowShift = effectiveAttendanceShift(record);
  const hours = calculateHours(record);
  const overtime = record.status === "present" ? hours.overtime : 0;
  const payable = attendanceWage(worker, record, overtime, date);
  const paid = paymentLedgerTotal(worker.id, date, date);
  const unpaid = Math.max(0, payable - paid);
  const isFullyPaid = payable > 0 && paid >= payable;
  return `
    <div class="attendance-row">
      <div class="attendance-person">
        ${worker.photo ? `<img class="attendance-avatar" src="${worker.photo}" alt="${escapeHTML(displayWorkerName(worker))}">` : `<div class="attendance-avatar worker-avatar-fallback">${escapeHTML(workerInitials(worker))}</div>`}
        <div>
          <strong>${escapeHTML(displayWorkerName(worker))}</strong>
          <p>${escapeHTML(worker.role || t("roleWorker"))} · ${money(wageForDate(worker, date))}</p>
          <p class="time-summary">${t("shift")}: ${attendanceShiftLabel(rowShift)}</p>
          <p class="time-summary">${t("in")}: ${record.inTime || "-"} · ${t("out")}: ${record.outTime || "-"} · ${t("hours")}: ${formatHours(hours.total)} · ${t("overtime")}: ${formatHours(overtime)}</p>
          <p class="time-summary">${t("payableWage")}: ${money(payable)} · ${t("paid")}: ${money(paid)} · ${t("unpaid")}: ${money(unpaid)}</p>
        </div>
      </div>
      <div class="attendance-control">
        <div class="attendance-actions" data-worker="${worker.id}" data-date="${date}">
          ${["present", "halfday", "absent", "off"].map((status) => `
            <button data-status="${status}" class="${record.status === status ? "active" : ""}">${statusLabel(status)}</button>
          `).join("")}
        </div>
        <div class="time-grid" data-worker="${worker.id}" data-date="${date}">
          <label>${t("shift")}<select data-shift-field="shift">
            <option value="day" ${rowShift === "day" ? "selected" : ""}>${t("dayShift")}</option>
            <option value="night" ${rowShift === "night" ? "selected" : ""}>${t("nightShift")}</option>
          </select></label>
          <label>${t("in")}<input type="time" data-time-field="inTime" value="${record.inTime}"></label>
          <label>${t("out")}<input type="time" data-time-field="outTime" value="${record.outTime}"></label>
          <label>${t("manualOvertime")}<input type="number" min="0" step="0.25" data-number-field="overtimeHours" value="${record.overtimeHours}"></label>
          <label>${t("foodDeduction")}<input type="number" min="0" step="0.01" data-money-field="foodDeduction" value="${record.foodDeduction || 0}"></label>
          <label>${t("paidToday")}<input type="number" min="0" step="0.01" data-money-field="paidAmount" value="${paid || 0}"></label>
          <button class="pay-today-button ${isFullyPaid ? "paid" : ""}" data-pay-today="${payable}" ${payable <= 0 ? "disabled" : ""}>${isFullyPaid ? t("paid") : t("paidToday")}</button>
        </div>
      </div>
    </div>
  `;
}

function attendanceRow(worker, date) {
  const current = getAttendance(date, worker.id);
  return `
    <div class="attendance-row">
      <div class="attendance-person">
        ${worker.photo ? `<img class="attendance-avatar" src="${worker.photo}" alt="${escapeHTML(displayWorkerName(worker))}">` : `<div class="attendance-avatar worker-avatar-fallback">${escapeHTML(workerInitials(worker))}</div>`}
        <div>
          <strong>${escapeHTML(displayWorkerName(worker))}</strong>
          <p>${escapeHTML(worker.role || t("roleWorker"))} · ${money(wageForDate(worker, date))}</p>
        </div>
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
  const rows = attendanceWorkers(dates).map((worker) => `
    <tr>
      <td>
        <div class="month-worker-cell">
          ${worker.photo ? `<img class="month-worker-photo" src="${worker.photo}" alt="${escapeHTML(displayWorkerName(worker))}">` : `<div class="month-worker-photo worker-avatar-fallback">${escapeHTML(workerInitials(worker))}</div>`}
          <div>
        <strong>${escapeHTML(displayWorkerName(worker))}</strong><br>
        <span>${money(wageForDate(worker, `${month}-01`))}</span>
        <small>${t("shift")}: ${attendanceShiftLabel(getAttendanceRecord(dates.find((date) => getAttendance(date, worker.id)) || dates[0], worker.id).shift)}</small>
          </div>
        </div>
      </td>
      ${dates.map((date) => {
        const status = getAttendance(date, worker.id);
        return `
        <td class="month-day">
          <select class="mini-select status-${status || "empty"}" data-month-worker="${worker.id}" data-month-date="${date}" aria-label="${escapeHTML(displayWorkerName(worker))} ${date}">
            <option value="" ${status === "" ? "selected" : ""}>-</option>
            <option value="present" ${status === "present" ? "selected" : ""}>P</option>
            <option value="halfday" ${status === "halfday" ? "selected" : ""}>H</option>
            <option value="absent" ${status === "absent" ? "selected" : ""}>A</option>
            <option value="off" ${status === "off" ? "selected" : ""}>O</option>
          </select>
        </td>
      `;
      }).join("")}
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

function workerReportDetails(worker, start, end) {
  if (!worker) return "";
  const workerIndex = app.workers.findIndex((item) => item.id === worker.id);
  const name = displayWorkerName(worker);
  return `
    <section class="worker-report-details">
      <div class="worker-report-id">
        ${worker.photo ? `<img src="${worker.photo}" alt="${escapeHTML(name)}">` : `<div class="worker-avatar worker-avatar-fallback">${escapeHTML(workerInitials(worker))}</div>`}
        <div>
          <h4>${escapeHTML(name)}</h4>
          <p>${escapeHTML(worker.role || t("roleWorker"))} · ${t("serialNo")}: ${reportSerial(worker, start, end)}</p>
        </div>
      </div>
      <div class="worker-report-grid">
        <div><span>${t("workerNumber")}</span><strong>#${workerIndex + 1}</strong></div>
        <div><span>${t("status")}</span><strong>${t(worker.status || "active")}</strong></div>
        <div><span>${t("phone")}</span><strong>${escapeHTML(worker.phone || "-")}</strong></div>
        <div><span>${t("emiratesId")}</span><strong>${escapeHTML(worker.emiratesId || "-")}</strong></div>
        <div><span>${t("city")}</span><strong>${escapeHTML(worker.city || "-")}</strong></div>
        <div><span>${t("nationality")}</span><strong>${escapeHTML(worker.nationality || "-")}</strong></div>
        <div><span>${t("performance")}</span><strong>${performanceLabel(worker.performance)}</strong></div>
        <div><span>${t("joiningDate")}</span><strong>${escapeHTML(worker.joinDate || "-")}</strong></div>
        <div><span>${t("currentDailyWage")}</span><strong>${money(currentDailyWage(worker))}</strong></div>
        <div class="wide"><span>${t("wageHistory")}</span><strong>${escapeHTML(wageHistoryText(worker))}</strong></div>
        ${worker.notes ? `<div class="wide"><span>${t("notes")}</span><strong>${escapeHTML(worker.notes)}</strong></div>` : ""}
      </div>
    </section>
  `;
}

function renderReport() {
  const language = reportLanguage();
  return withLanguage(language, () => {
  $("#reportOutput").setAttribute("lang", language);
  $("#reportOutput").setAttribute("dir", language === "ps" ? "rtl" : "ltr");
  const type = $("#reportType").value;
  const selectedReportIds = selectedReportWorkerIds();
  const reportShift = selectedReportShift();
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

  const reportWorkers = app.workers.filter((worker) => {
    if (worker.status !== "active") return false;
    if (reportShift === "all") return true;
    const reportDates = type === "monthly" ? daysInMonth(month) : datesBetween(start, end);
    return reportDates.some((date) => workerAssignedShift(worker, date) === reportShift);
  });
  const validSelectedIds = selectedReportIds.includes("all")
    ? ["all"]
    : selectedReportIds.filter((id) => reportWorkers.some((worker) => worker.id === id));
  const selectedWorkerIds = validSelectedIds.length ? validSelectedIds : ["all"];
  const workerOptions = [`<option value="all">${t("companyWideReport")}</option>`]
    .concat(reportWorkers.map((worker) => `<option value="${worker.id}" ${selectedWorkerIds.includes(worker.id) ? "selected" : ""}>${escapeHTML(displayWorkerName(worker))}</option>`));
  $("#reportWorker").innerHTML = workerOptions.join("");
  if (selectedWorkerIds.includes("all")) $("#reportWorker").querySelector('option[value="all"]').selected = true;

  const reportSelection = selectedWorkerIds.includes("all") ? ["all"] : selectedWorkerIds;
  const reportRows = type === "monthly" ? monthSummary(month, reportSelection, reportShift) : summarizeRecords(recordsForRange(start, end, reportSelection, reportShift));
  const rows = (selectedWorkerIds.includes("all") ? reportRows.filter((row) => row.worker.status === "active") : reportRows)
    .filter((row) => reportShift === "all" || row.present || row.halfday || row.absent || row.off);
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
  const selectedWorker = selectedWorkerIds.length === 1 && !selectedWorkerIds.includes("all") ? app.workers.find((worker) => worker.id === selectedWorkerIds[0]) : null;
  const reportSubject = selectedWorkerIds.includes("all")
    ? t("companyWideReport")
    : selectedWorker
      ? escapeHTML(displayWorkerName(selectedWorker))
      : `${t("selectedWorkerReports")} (${rows.length})`;

  $("#reportOutput").innerHTML = `
    <div class="report-brand">
      <img src="ahmad-times-logo.png" alt="Ahmad Times logo">
      <div>
        <strong>Ahmad Times For Building Maintenance L.L.C</strong>
        <span>${t("wageAttendanceReport")}</span>
      </div>
    </div>
    <div class="report-meta">
      <span>${title}</span>
      <span>${t("shift")}: ${reportShift === "all" ? t("allShifts") : attendanceShiftLabel(reportShift)}</span>
      <span>${t("serialNo")}: ATBM-${start.replaceAll("-", "")}-${end.replaceAll("-", "")}</span>
    </div>
    <h3>${title}</h3>
    <p class="help-text">${reportSubject} ${t("wageAttendanceReport")}</p>
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
        const paid = rowPaidAmount(row, start, end);
        const pending = Math.max(0, Number(row.wage || 0) - paid);
        const serial = reportSerial(row.worker, start, end);
        return `
          <div class="payment-row" data-payment-worker="${row.worker.id}" data-payment-start="${start}" data-payment-end="${end}">
            <div>
              <strong>${escapeHTML(displayWorkerName(row.worker))}</strong>
              <p>${t("serialNo")}: ${serial}</p>
              <p>${t("payableWage")}: ${money(row.wage)} · ${t("paid")}: ${money(paid)} · ${t("unpaid")}: ${money(pending)}</p>
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
            <button class="whatsapp-button" data-whatsapp-worker="${row.worker.id}" data-whatsapp-start="${start}" data-whatsapp-end="${end}" data-whatsapp-title="${escapeHTML(title)}">${t("sendWhatsapp")}</button>
          </div>
        `;
      }).join("") || emptyState(t("noRecordsReport"))}
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>${t("worker")}</th>
            <th>${t("shift")}</th>
            <th>${t("statusColumn")}</th>
            <th>${t("present")}</th>
            <th>${t("halfday")}</th>
            <th>${t("absent")}</th>
            <th>${t("off")}</th>
            <th>${t("hours")}</th>
            <th>${t("overtime")}</th>
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
              <td>${escapeHTML(displayWorkerName(row.worker))}</td>
              <td>${reportShift === "all" ? t("allShifts") : attendanceShiftLabel(reportShift)}</td>
              <td>${t(row.worker.status)}</td>
              <td>${row.present}</td>
              <td>${row.halfday || 0}</td>
              <td>${row.absent}</td>
              <td>${row.off}</td>
              <td>${formatHours(row.hours || 0)}</td>
              <td>${formatHours(row.overtime || 0)}</td>
              <td>${money(row.dailyWage || currentDailyWage(row.worker))}</td>
              <td>${money(row.baseWage || 0)}</td>
              <td>${money(row.overtimeWage || 0)}</td>
              <td>${money(row.foodDeduction || 0)}</td>
              <td><strong>${money(row.wage)}</strong></td>
              <td>${money(rowPaidAmount(row, start, end))}</td>
              <td><strong>${money(rowUnpaidAmount(row, start, end))}</strong></td>
            </tr>
          `).join("") || `<tr><td colspan="16">${t("noRecordsReport")}</td></tr>`}
        </tbody>
      </table>
    </div>
    <footer class="report-footer">
      <div class="report-stamp-box">
        <img class="report-stamp" src="ahmad-times-stamp.png" alt="Ahmad Times stamp" width="136" height="136" onerror="this.onerror=null;this.src='ahmad-times-logo.png';">
        <p class="help-text">Generated: ${new Date().toLocaleString()}</p>
      </div>
    </footer>
  `;
  });
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

function monthExpenses(month = monthISO()) {
  app.expenses ||= [];
  return app.expenses.filter((expense) => String(expense.date || "").startsWith(month));
}

function companyExpenseTotal(month = monthISO()) {
  return monthExpenses(month).reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
}

function expenseLedger(expense) {
  const amount = Number(expense.amount || 0);
  const paid = Number(
    expense.paidAmount ?? (expense.paymentStatus === "paid" ? amount : expense.paid ? amount : 0)
  );
  const unpaid = Math.max(amount - paid, 0);
  const balance = Math.max(paid - amount, 0);
  return {
    amount,
    paid,
    unpaid,
    balance,
    status: unpaid <= 0 ? "paid" : "unpaid",
  };
}

function expenseStatusLabel(status) {
  return status === "paid" ? t("paid") : t("unpaid");
}

function expenseBuyerName(expense) {
  return String(expense.buyer || "").trim() || "-";
}

function filteredMonthExpenses(month = monthISO()) {
  const buyer = ($("#expenseBuyerFilter")?.value || "").trim().toLowerCase();
  return monthExpenses(month).filter((expense) => {
    if (!buyer) return true;
    return expenseBuyerName(expense).toLowerCase() === buyer;
  });
}

function renderExpenses() {
  const list = $("#expensesList");
  if (!list) return;
  const month = $("#expenseMonth").value || monthISO();
  const allRows = monthExpenses(month);
  const buyers = Array.from(new Set(allRows.map(expenseBuyerName).filter((buyer) => buyer !== "-"))).sort((a, b) => a.localeCompare(b));
  const buyerOptions = $("#expenseBuyerOptions");
  if (buyerOptions) buyerOptions.innerHTML = buyers.map((buyer) => `<option value="${escapeHTML(buyer)}"></option>`).join("");
  const rows = filteredMonthExpenses(month).sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const totals = rows.reduce((sum, expense) => {
    const ledger = expenseLedger(expense);
    sum.amount += ledger.amount;
    sum.paid += ledger.paid;
    sum.unpaid += ledger.unpaid;
    sum.balance += ledger.balance;
    return sum;
  }, { amount: 0, paid: 0, unpaid: 0, balance: 0 });
  const summary = $("#expenseSummary");
  if (summary) {
    const buyerFilter = ($("#expenseBuyerFilter")?.value || "").trim();
    summary.innerHTML = `
      <article><span>${t("expenseSummary")}</span><strong>${buyerFilter ? escapeHTML(buyerFilter) : t("allBuyers")}</strong></article>
      <article><span>${t("totalExpenses")}</span><strong>${money(totals.amount)}</strong></article>
      <article><span>${t("moneyGiven")}</span><strong>${money(totals.paid)}</strong></article>
      <article><span>${t("expenseUnpaid")}</span><strong>${money(totals.unpaid)}</strong></article>
      <article><span>${t("buyerBalance")}</span><strong>${money(totals.balance)}</strong></article>
    `;
  }
  list.innerHTML = rows.length ? rows.map((expense) => `
    <tr>
      ${(() => {
        const ledger = expenseLedger(expense);
        return `
      <td>${escapeHTML(expense.date || "-")}</td>
      <td>${escapeHTML(expense.buyer || "-")}</td>
      <td>${escapeHTML(expense.category || "-")}</td>
      <td>${escapeHTML(expense.merchant || "-")}</td>
      <td>${escapeHTML(expense.location || "-")}</td>
      <td>${escapeHTML(expense.description || "-")}</td>
      <td><strong>${money(expense.amount)}</strong></td>
      <td>${money(ledger.paid)}</td>
      <td>${money(ledger.unpaid)}</td>
      <td>${ledger.balance ? `${money(ledger.balance)}<br><small>${t("expenseOverpaidHelp")}</small>` : money(0)}</td>
      <td><span class="status-pill ${ledger.status === "paid" ? "paid" : "unpaid"}">${expenseStatusLabel(ledger.status)}</span></td>
      <td>${expense.receiptPhoto ? `<button class="ghost" data-view-expense="${expense.id}">${t("viewBill")}</button>` : "-"}</td>
      <td><button class="danger ghost" data-remove-expense="${expense.id}">${t("remove")}</button></td>
        `;
      })()}
    </tr>
  `).join("") : `<tr><td colspan="13">${t("noExpenses")}</td></tr>`;
}

function setExpenseReceiptPhoto(photo = "") {
  $("#expenseReceiptPhoto").value = photo;
  const preview = $("#expenseReceiptPreview");
  if (!preview) return;
  preview.innerHTML = photo
    ? `<img src="${photo}" alt="${t("bill")}"><span>${t("receiptSaved")}</span>`
    : t("noBillPicture");
}

function suggestReceiptFields(file) {
  const name = String(file?.name || "").replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").trim();
  if (name && !$("#expenseMerchant").value.trim()) $("#expenseMerchant").value = name.slice(0, 60);
  const lower = name.toLowerCase();
  if (!$("#expenseCategory").value.trim()) {
    if (lower.includes("fuel") || lower.includes("petrol") || lower.includes("diesel") || lower.includes("oil")) $("#expenseCategory").value = "Fuel / car oil";
    else if (lower.includes("food") || lower.includes("restaurant") || lower.includes("meal")) $("#expenseCategory").value = "Food";
    else if (lower.includes("tool") || lower.includes("material")) $("#expenseCategory").value = "Tools / material";
  }
  if (!$("#expenseLocation").value.trim() && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (!$("#expenseLocation").value.trim()) {
          const { latitude, longitude } = position.coords;
          $("#expenseLocation").value = `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
        }
      },
      () => {},
      { enableHighAccuracy: true, timeout: 4000, maximumAge: 300000 },
    );
  }
}

function viewExpenseReceipt(expenseId) {
  const expense = (app.expenses || []).find((item) => item.id === expenseId);
  if (!expense) return;
  $("#receiptDialogContent").innerHTML = `
    <div class="receipt-detail-grid">
      <div><span>${t("date")}</span><strong>${escapeHTML(expense.date || "-")}</strong></div>
      <div><span>${t("buyerName")}</span><strong>${escapeHTML(expense.buyer || "-")}</strong></div>
      <div><span>${t("expenseCategory")}</span><strong>${escapeHTML(expense.category || "-")}</strong></div>
      <div><span>${t("marketName")}</span><strong>${escapeHTML(expense.merchant || "-")}</strong></div>
      <div><span>${t("expenseLocation")}</span><strong>${escapeHTML(expense.location || "-")}</strong></div>
      <div><span>${t("expenseAmount")}</span><strong>${money(expense.amount)}</strong></div>
      <div><span>${t("paid")}</span><strong>${money(expenseLedger(expense).paid)}</strong></div>
      <div><span>${t("unpaid")}</span><strong>${money(expenseLedger(expense).unpaid)}</strong></div>
      <div><span>${t("expenseBalance")}</span><strong>${money(expenseLedger(expense).balance)}</strong></div>
      <div class="wide"><span>${t("expenseDescription")}</span><strong>${escapeHTML(expense.description || "-")}</strong></div>
    </div>
    ${expense.receiptPhoto ? `<img class="receipt-full-image" src="${expense.receiptPhoto}" alt="${t("bill")}">` : `<p class="help-text">${t("noBillPicture")}</p>`}
  `;
  $("#receiptDialog").showModal();
}

function renderStorage() {
  const attendanceCount = Object.values(app.attendance).reduce((sum, day) => sum + Object.keys(day).length, 0);
  $("#storageWorkers").textContent = app.workers.length;
  $("#storageAttendance").textContent = attendanceCount;
  $("#storageSaved").textContent = app.lastSaved ? new Date(app.lastSaved).toLocaleString() : t("never");
}

function payrollAlerts() {
  const alerts = [];
  Object.entries(app.attendance || {}).forEach(([date, day]) => {
    Object.entries(day || {}).forEach(([workerId, raw]) => {
      const worker = app.workers.find((item) => item.id === workerId);
      const record = normalizeAttendanceRecord(raw);
      const label = `${worker?.name || workerId} · ${date}`;
      const hours = calculateHours(record);
      const payable = attendanceWage(worker || { dailyWage: 0 }, record, record.status === "present" ? hours.overtime : 0, date);
      const paid = paymentLedgerTotal(workerId, date, date);
      if (["present", "halfday"].includes(record.status) && record.inTime && !record.outTime) alerts.push(`${label}: in time without out time`);
      if (record.status === "present" && hours.total > 14) alerts.push(`${label}: more than 14 hours`);
      if (record.foodDeduction > payable && payable > 0) alerts.push(`${label}: food deduction bigger than wage`);
      if (paid > payable && payable > 0) alerts.push(`${label}: payment bigger than payable wage`);
    });
  });
  return alerts;
}

function workerLifetimeSummary(workerId) {
  const records = summarizeRecords(recordsForRange("2000-01-01", "2099-12-31", workerId))[0];
  if (!records) return { wage: 0, paid: 0, unpaid: 0, present: 0, halfday: 0, overtime: 0 };
  const paid = paymentLedgerTotal(workerId, "2000-01-01", "2099-12-31");
  return {
    wage: records.wage || 0,
    paid,
    unpaid: Math.max(0, Number(records.wage || 0) - paid),
    present: records.present || 0,
    halfday: records.halfday || 0,
    overtime: records.overtime || 0,
  };
}

function renderSafety() {
  if (!$("#payrollLocksList")) return;
  const month = $("#lockMonth").value || monthISO();
  const locks = Object.entries(app.payrollLocks || {}).sort((a, b) => b[0].localeCompare(a[0]));
  $("#payrollLocksList").innerHTML = locks.length
    ? locks.map(([lockMonth, lock]) => `<div><span>${lockMonth}</span><strong>${escapeHTML(lock.user || "-")} · ${new Date(lock.at).toLocaleString()}</strong></div>`).join("")
    : `<div><span>${t("payrollLock")}</span><strong>${month}: ${isMonthLocked(month) ? t("locked") : "-"}</strong></div>`;

  const backups = Object.entries(app.dailyBackups || {}).sort((a, b) => b[0].localeCompare(a[0]));
  $("#dailyBackupsList").innerHTML = backups.length
    ? backups.slice(0, 10).map(([date, backup]) => `<div><span>${date}</span><strong>${new Date(backup.at).toLocaleString()}</strong></div>`).join("")
    : `<div><span>${t("dailyBackups")}</span><strong>-</strong></div>`;

  const alerts = payrollAlerts();
  $("#mistakeAlertsList").innerHTML = alerts.length
    ? alerts.slice(0, 30).map((alert) => `<div><span>${t("mistakeAlerts")}</span><strong>${escapeHTML(alert)}</strong></div>`).join("")
    : `<div><span>${t("mistakeAlerts")}</span><strong>${t("noAlerts")}</strong></div>`;

  $("#paymentLedgerList").innerHTML = paymentLedgerEntries().slice().sort((a, b) => String(b.date).localeCompare(String(a.date))).map((payment) => {
    const worker = app.workers.find((item) => item.id === payment.workerId);
    return `<tr><td>${payment.date}</td><td>${escapeHTML(worker?.name || payment.workerId)}</td><td>${money(payment.amount)}</td><td>${escapeHTML(payment.method || "-")}</td><td>${escapeHTML(payment.user || "-")}</td><td>${escapeHTML(payment.note || "-")}</td></tr>`;
  }).join("") || `<tr><td colspan="6">-</td></tr>`;

  const inactive = app.workers.filter((worker) => worker.status === "inactive");
  const select = $("#settlementWorker");
  const current = select.value;
  select.innerHTML = inactive.map((worker) => `<option value="${worker.id}" ${worker.id === current ? "selected" : ""}>${escapeHTML(displayWorkerName(worker))}</option>`).join("");
  const selected = app.workers.find((worker) => worker.id === (select.value || inactive[0]?.id));
  if (selected) {
    const summary = workerLifetimeSummary(selected.id);
    $("#settlementOutput").innerHTML = `
      <div><span>${t("worker")}</span><strong>${escapeHTML(displayWorkerName(selected))}</strong></div>
      <div><span>${t("payableWage")}</span><strong>${money(summary.wage)}</strong></div>
      <div><span>${t("paid")}</span><strong>${money(summary.paid)}</strong></div>
      <div><span>${t("unpaid")}</span><strong>${money(summary.unpaid)}</strong></div>
    `;
  } else {
    $("#settlementOutput").innerHTML = `<div><span>${t("finalSettlement")}</span><strong>-</strong></div>`;
  }

  const quickDate = $("#quickAttendanceDate").value || todayISO();
  $("#quickAttendanceList").innerHTML = activeWorkers().map((worker) => {
    const record = getAttendanceRecord(quickDate, worker.id);
    return `<div class="attendance-row quick-attendance-row">
      <div class="attendance-person">${worker.photo ? `<img class="attendance-avatar" src="${worker.photo}" alt="${escapeHTML(displayWorkerName(worker))}">` : `<div class="attendance-avatar worker-avatar-fallback">${escapeHTML(workerInitials(worker))}</div>`}<div><strong>${escapeHTML(displayWorkerName(worker))}</strong><p class="time-summary">${statusLabel(record.status || "not marked")}</p></div></div>
      <div class="attendance-actions" data-worker="${worker.id}" data-date="${quickDate}">
        ${["present", "halfday", "absent", "off"].map((status) => `<button data-status="${status}" class="${record.status === status ? "active" : ""}">${statusLabel(status)}</button>`).join("")}
      </div>
    </div>`;
  }).join("") || emptyState(t("noActiveWorkers"));

  $("#auditReportPreview").innerHTML = (app.logs || []).slice(0, 8).map((entry) => `<div><span>${new Date(entry.at).toLocaleString()} · ${escapeHTML(entry.user || "-")}</span><strong>${escapeHTML(entry.action || "-")} · ${escapeHTML(entry.details || "-")}</strong></div>`).join("") || `<div><span>${t("auditReport")}</span><strong>-</strong></div>`;
}

function renderLogs() {
  const list = $("#logsList");
  if (!list) return;
  const logs = app.logs || [];
  list.innerHTML = logs.length ? logs.map((entry) => `
    <tr>
      <td>${new Date(entry.at).toLocaleString()}</td>
      <td>${escapeHTML(entry.user || "-")}</td>
      <td>${escapeHTML(entry.action || "-")}</td>
      <td>${escapeHTML(entry.details || "-")}</td>
    </tr>
  `).join("") : `<tr><td colspan="4">${t("noLogs")}</td></tr>`;
}

function updatePhotoPreview(photo = "") {
  const preview = $("#workerPhotoPreview");
  if (!preview) return;
  preview.style.backgroundImage = photo ? `url("${photo}")` : "";
  preview.textContent = photo ? "" : t("photo");
}

function stopWorkerCamera() {
  const video = $("#workerCamera");
  if (video?.srcObject) {
    video.srcObject.getTracks().forEach((track) => track.stop());
    video.srcObject = null;
  }
  video?.classList.add("hidden");
  $("#capturePhoto")?.classList.add("hidden");
}

function setWorkerPhoto(photo = "") {
  $("#workerPhoto").value = photo;
  updatePhotoPreview(photo);
}

function resizePhotoDataUrl(dataUrl, maxSize = 520) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
      const canvas = $("#workerPhotoCanvas") || document.createElement("canvas");
      canvas.width = Math.round(image.width * scale);
      canvas.height = Math.round(image.height * scale);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.82));
    };
    image.onerror = () => resolve(dataUrl);
    image.src = dataUrl;
  });
}
function openWorkerDialog(workerId = "") {
  if (!requireAdmin()) return;
  const worker = app.workers.find((item) => item.id === workerId);
  stopWorkerCamera();
  $("#workerDialogTitle").textContent = worker ? t("editWorkerTitle") : t("addWorkerTitle");
  $("#workerId").value = worker?.id || "";
  $("#workerPhotoUpload").value = "";
  setWorkerPhoto(worker?.photo || "");
  $("#workerName").value = worker?.name || "";
  $("#workerNamePs").value = worker?.namePs || "";
  $("#workerRole").value = worker?.role || "";
  $("#workerCity").value = worker?.city || "";
  $("#workerNationality").value = worker?.nationality || "";
  $("#workerPerformance").value = worker?.performance || "good";
  $("#workerDefaultShift").value = workerDefaultShift(worker);
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
  if (!requireAdmin()) return;
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
    namePs: $("#workerNamePs").value.trim(),
    role: $("#workerRole").value.trim(),
    city: $("#workerCity").value.trim(),
    nationality: $("#workerNationality").value.trim(),
    performance: $("#workerPerformance").value,
    defaultShift: $("#workerDefaultShift").value === "night" ? "night" : "day",
    phone: $("#workerPhone").value.trim(),
    emiratesId: $("#workerEmiratesId").value.trim(),
    photo: $("#workerPhoto").value || "",
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

  if (existing) {
    Object.assign(existing, worker);
    addLog("Worker updated", `${worker.name} · #${app.workers.findIndex((item) => item.id === worker.id) + 1}${worker.photo ? " · photo saved" : ""}`);
  } else {
    app.workers.push(worker);
    addLog("Worker added", `${worker.name} · #${app.workers.length}${worker.photo ? " · photo saved" : ""}`);
  }

  $("#workerDialog").close();
  stopWorkerCamera();
  saveData();
  toast(existing ? t("workerUpdated") : t("workerAdded"));
}

function removeWorker() {
  if (!requireAdmin()) return;
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
    addLog("Worker marked inactive", worker.name);
  } else {
    app.workers = app.workers.filter((item) => item.id !== id);
    addLog("Worker removed", worker.name);
  }
  $("#workerDialog").close();
  saveData();
}

function moveWorker(workerId, direction) {
  if (!requireAdmin()) return;
  const index = app.workers.findIndex((worker) => worker.id === workerId);
  if (index < 0) return;
  const target = direction === "up" ? index - 1 : index + 1;
  if (target < 0 || target >= app.workers.length) return;
  const [worker] = app.workers.splice(index, 1);
  app.workers.splice(target, 0, worker);
  addLog("Worker moved", `${worker.name} · #${index + 1} to #${target + 1}`);
  saveData();
}

function moveWorkerToPosition(workerId, targetWorkerId) {
  if (!requireAdmin()) return;
  if (!workerId || !targetWorkerId || workerId === targetWorkerId) return;
  const fromIndex = app.workers.findIndex((worker) => worker.id === workerId);
  const targetIndex = app.workers.findIndex((worker) => worker.id === targetWorkerId);
  if (fromIndex < 0 || targetIndex < 0) return;
  const [worker] = app.workers.splice(fromIndex, 1);
  const insertIndex = app.workers.findIndex((item) => item.id === targetWorkerId);
  app.workers.splice(insertIndex, 0, worker);
  addLog("Worker moved", `${worker.name} · #${fromIndex + 1} to #${insertIndex + 1}`);
  saveData();
}

function toggleWorkerStatus(workerId) {
  if (!requireAdmin()) return;
  const worker = app.workers.find((item) => item.id === workerId);
  if (!worker) return;
  worker.status = worker.status === "active" ? "inactive" : "active";
  addLog(worker.status === "active" ? "Worker marked active" : "Worker marked inactive", worker.name);
  saveData();
}

function hideWorkerContextMenu() {
  const menu = $("#workerContextMenu");
  if (!menu) return;
  menu.classList.add("hidden");
  workerContextTargetId = "";
}

function showWorkerContextMenu(event, workerId) {
  event.preventDefault();
  const menu = $("#workerContextMenu");
  const worker = app.workers.find((item) => item.id === workerId);
  if (!menu || !worker) return;
  workerContextTargetId = workerId;
  const toggle = menu.querySelector('[data-context-action="toggle-status"]');
  if (toggle) toggle.textContent = worker.status === "active" ? t("inactive") : t("active");
  menu.style.left = `${Math.min(event.clientX, window.innerWidth - 190)}px`;
  menu.style.top = `${Math.min(event.clientY, window.innerHeight - 96)}px`;
  menu.classList.remove("hidden");
}

function addExpenseFromForm() {
  if (!requireAdmin()) return;
  app.expenses ||= [];
  const expense = {
    id: makeId(),
    date: $("#expenseDate").value || todayISO(),
    buyer: $("#expenseBuyer").value.trim(),
    category: $("#expenseCategory").value.trim(),
    merchant: $("#expenseMerchant").value.trim(),
    location: $("#expenseLocation").value.trim(),
    description: $("#expenseDescription").value.trim(),
    amount: Number($("#expenseAmount").value || 0),
    paidAmount: Number($("#expensePaidAmount").value || 0),
    receiptPhoto: $("#expenseReceiptPhoto").value || "",
    createdAt: new Date().toISOString(),
  };
  if (!expense.category || expense.amount <= 0) return;
  app.expenses.unshift(expense);
  addLog("Company expense added", `${expense.date} · ${expense.category} · ${money(expense.amount)}`);
  $("#expenseBuyer").value = "";
  $("#expenseCategory").value = "";
  $("#expenseMerchant").value = "";
  $("#expenseLocation").value = "";
  $("#expenseDescription").value = "";
  $("#expenseAmount").value = "";
  $("#expensePaidAmount").value = "";
  $("#expenseReceiptUpload").value = "";
  setExpenseReceiptPhoto("");
  saveData();
  toast(t("expenseSaved"));
}

function removeExpense(expenseId) {
  if (!requireAdmin()) return;
  const expense = (app.expenses || []).find((item) => item.id === expenseId);
  app.expenses = (app.expenses || []).filter((item) => item.id !== expenseId);
  addLog("Company expense removed", expense ? `${expense.date} · ${expense.category} · ${money(expense.amount)}` : expenseId);
  saveData();
  toast(t("expenseRemoved"));
}

function exportBackup() {
  addLog("Backup exported", `${app.workers.length} workers`);
  saveData(false);
  downloadFile(`ahmad-times-backup-${todayISO()}.json`, JSON.stringify(app, null, 2), "application/json");
}

function downloadLatestDailyBackup() {
  const latest = Object.entries(app.dailyBackups || {}).sort((a, b) => b[0].localeCompare(a[0]))[0];
  if (!latest) return exportBackup();
  downloadFile(`ahmad-times-daily-backup-${latest[0]}.json`, JSON.stringify(latest[1], null, 2), "application/json");
  addLog("Daily backup downloaded", latest[0]);
}

function lockPayrollMonth() {
  if (!requireAdmin()) return;
  const month = $("#lockMonth").value || monthISO();
  app.payrollLocks[month] = { at: new Date().toISOString(), user: currentUserLabel() };
  addLog("Payroll month locked", month);
  saveData();
}

function unlockPayrollMonth() {
  if (!requireAdmin()) return;
  const month = $("#lockMonth").value || monthISO();
  delete app.payrollLocks[month];
  addLog("Payroll month unlocked", month);
  saveData();
}

function printPlainReport(title, bodyHtml) {
  const win = window.open("", "_blank");
  if (!win) return;
  win.document.write(`<!doctype html><html><head><title>${escapeHTML(title)}</title><style>body{font-family:Arial,sans-serif;padding:24px;color:#1d2433}h1{font-size:24px}.row{padding:10px;border-bottom:1px solid #ddd}strong{display:block;margin-top:4px}</style></head><body><h1>${escapeHTML(title)}</h1>${bodyHtml}<script>window.print()</script></body></html>`);
  win.document.close();
}

function printSettlement() {
  const worker = app.workers.find((item) => item.id === $("#settlementWorker").value);
  if (!worker) return;
  const summary = workerLifetimeSummary(worker.id);
  printPlainReport("Final settlement", `
    <div class="row"><span>Worker</span><strong>${escapeHTML(displayWorkerName(worker))}</strong></div>
    <div class="row"><span>Payable</span><strong>${money(summary.wage)}</strong></div>
    <div class="row"><span>Paid</span><strong>${money(summary.paid)}</strong></div>
    <div class="row"><span>Unpaid</span><strong>${money(summary.unpaid)}</strong></div>
  `);
  addLog("Final settlement printed", worker.name);
}

function printAuditReport() {
  const rows = (app.logs || []).slice(0, 200).map((entry) => `<div class="row"><span>${new Date(entry.at).toLocaleString()} · ${escapeHTML(entry.user || "-")}</span><strong>${escapeHTML(entry.action || "-")} · ${escapeHTML(entry.details || "-")}</strong></div>`).join("");
  printPlainReport("Audit report", rows || "<p>No logs.</p>");
  addLog("Audit report printed", `${(app.logs || []).length} logs`);
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
      app.expenses = parsed.expenses || [];
      app.payrollLocks = parsed.payrollLocks || {};
      app.dailyBackups = parsed.dailyBackups || {};
      app.logs = parsed.logs || app.logs || [];
      app.lastSaved = parsed.lastSaved || new Date().toISOString();
      addLog("Backup imported", `${app.workers.length} workers`);
      saveData();
      toast(t("backupImported"));
    } catch {
      toast(t("backupImportFailed"));
    }
  };
  reader.readAsText(file);
}

function exportReportCSV() {
  return withLanguage(reportLanguage(), () => {
  renderReport();
  const table = $("#reportOutput table");
  if (!table) {
    toast(t("emptyReport"));
    return;
  }
  const rows = [];
  table.querySelectorAll("tr").forEach((tr) => {
    const cells = Array.from(tr.children).map((cell) => cell.textContent.trim());
    if (cells.length) rows.push(cells);
  });
  addLog("CSV exported", `${rows.length ? rows.length - 1 : 0} report rows`);
  saveData(false);
  downloadFile(`attendance-report-${todayISO()}.csv`, `\ufeff${rows.map((row) => row.map(csvCell).join(",")).join("\n")}`, "text/csv;charset=utf-8");
  });
}

function downloadFile(name, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
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
  if (!name || !phone || !emiratesId) return false;
  return app.workers.some((item) => {
    if (item.id === worker.id) return false;
    return normalizeCompare(item.name) === name
      && normalizeCompare(item.phone) === phone
      && normalizeCompare(item.emiratesId) === emiratesId;
  });
}

function emptyState(message) {
  return `<div class="today-row"><p>${message}</p></div>`;
}

async function loginWithCredentials(username, password, errorTarget = null) {
  const user = SIMPLE_USERS.find((item) => item.username.toLowerCase() === username.toLowerCase() && item.password === password);
  if (!user) {
    if (errorTarget) errorTarget.textContent = t("invalidLogin");
    toast(t("invalidLogin"));
    return;
  }

  app.user = { id: null, email: user.username, username: user.username };
  app.profile = simpleUserProfile(user);
  try {
    localStorage.setItem(SIMPLE_LOGIN_KEY, user.username);
    localStorage.setItem(LAST_ACTIVITY_KEY, String(Date.now()));
  } catch {
    // Login still works for the current browser session.
  }
  scheduleSessionTimeout();

  $("#authDialog")?.close();
  $("#authPassword").value = "";
  $("#loginPassword").value = "";
  if (errorTarget) errorTarget.textContent = "";
  await loadData();
  renderAll();
  toast(t("loggedIn"));
}

async function loginFromForm() {
  await loginWithCredentials($("#authEmail").value.trim(), $("#authPassword").value);
}

async function loginFromScreen() {
  await loginWithCredentials($("#loginUsername").value.trim(), $("#loginPassword").value, $("#loginScreenError"));
}

async function logout() {
  if (supabaseClient) await supabaseClient.auth.signOut();
  try {
    localStorage.removeItem(SIMPLE_LOGIN_KEY);
    localStorage.removeItem(LAST_ACTIVITY_KEY);
  } catch {
    // Ignore unavailable storage.
  }
  window.clearTimeout(sessionTimer);
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

  document.addEventListener("click", (event) => {
    const jumpButton = event.target.closest("[data-jump-view]");
    if (!jumpButton) return;
    const targetView = jumpButton.dataset.jumpView;
    const navButton = $(`.nav-item[data-view="${targetView}"]`);
    if (navButton) navButton.click();
  });

  $("#quickAddWorker").addEventListener("click", () => openWorkerDialog());
  $("#languageSelect").addEventListener("change", (event) => {
    app.language = event.target.value;
    localStorage.setItem(LANG_KEY, app.language);
    renderAll();
  });
  $("#themeToggle").addEventListener("click", () => {
    app.theme = app.theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, app.theme);
    applyTheme();
  });
  $("#authButton").addEventListener("click", async () => {
    if (app.user) {
      await logout();
    } else {
      document.body.classList.add("login-locked");
      $("#loginUsername")?.focus();
    }
  });
  $("#undoButton").addEventListener("click", undoChange);
  $("#redoButton").addEventListener("click", redoChange);
  $("#loginScreenForm").addEventListener("submit", (event) => {
    event.preventDefault();
    loginFromScreen();
  });
  ["click", "keydown", "input", "mousemove", "touchstart"].forEach((eventName) => {
    document.addEventListener(eventName, markActivity, { passive: true });
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
  $("#workerShiftFilter").addEventListener("change", () => {
    app.workerShiftFilter = $("#workerShiftFilter").value || "all";
    renderWorkers();
  });
  $$(".worker-view").forEach((button) => {
    button.addEventListener("click", () => {
      app.workerView = button.dataset.workerView || "large";
      localStorage.setItem(WORKER_VIEW_KEY, app.workerView);
      renderWorkers();
    });
  });
  $("#closeWorkerDialog").addEventListener("click", () => {
    stopWorkerCamera();
    $("#workerDialog").close();
  });
  $("#cancelWorker").addEventListener("click", () => {
    stopWorkerCamera();
    $("#workerDialog").close();
  });
  $("#workerPhotoUpload").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      setWorkerPhoto(await resizePhotoDataUrl(reader.result));
      stopWorkerCamera();
    };
    reader.readAsDataURL(file);
  });
  $("#startCamera").addEventListener("click", async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
      const video = $("#workerCamera");
      video.srcObject = stream;
      video.classList.remove("hidden");
      $("#capturePhoto").classList.remove("hidden");
    } catch {
      toast(t("cameraFailed"));
    }
  });
  $("#capturePhoto").addEventListener("click", async () => {
    const video = $("#workerCamera");
    if (!video?.videoWidth) return;
    const canvas = $("#workerPhotoCanvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    setWorkerPhoto(await resizePhotoDataUrl(canvas.toDataURL("image/jpeg", 0.9)));
    stopWorkerCamera();
  });
  $("#removePhoto").addEventListener("click", () => {
    setWorkerPhoto("");
    $("#workerPhotoUpload").value = "";
    stopWorkerCamera();
  });
  $("#workerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    saveWorkerFromForm();
  });
  $("#deleteWorkerBtn").addEventListener("click", removeWorker);

  document.addEventListener("click", (event) => {
    const contextAction = event.target.closest("[data-context-action]");
    if (contextAction) {
      const action = contextAction.dataset.contextAction;
      const workerId = workerContextTargetId;
      hideWorkerContextMenu();
      if (action === "edit") openWorkerDialog(workerId);
      if (action === "toggle-status") toggleWorkerStatus(workerId);
      return;
    }
    if (!event.target.closest("#workerContextMenu")) hideWorkerContextMenu();

    const editButton = event.target.closest("[data-edit-worker]");
    if (editButton) openWorkerDialog(editButton.dataset.editWorker);

    const moveButton = event.target.closest("[data-move-worker]");
    if (moveButton) moveWorker(moveButton.dataset.moveWorker, moveButton.dataset.moveDirection);

    const backWorkersButton = event.target.closest("[data-back-workers]");
    if (backWorkersButton) closeWorkerSummary();

    const detailsCard = event.target.closest("[data-open-worker-details]");
    if (detailsCard) {
      if (suppressWorkerOpen) {
        suppressWorkerOpen = false;
        return;
      }
      openWorkerSummary(detailsCard.dataset.openWorkerDetails);
    }

    const removeExpenseButton = event.target.closest("[data-remove-expense]");
    if (removeExpenseButton) removeExpense(removeExpenseButton.dataset.removeExpense);

    const viewExpenseButton = event.target.closest("[data-view-expense]");
    if (viewExpenseButton) viewExpenseReceipt(viewExpenseButton.dataset.viewExpense);

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

    const payTodayButton = event.target.closest("[data-pay-today]");
    if (payTodayButton) {
      const parent = payTodayButton.closest(".time-grid");
      saveDailyPayment(parent.dataset.worker, parent.dataset.date, payTodayButton.dataset.payToday);
      renderAll();
      return;
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

    const whatsappButton = event.target.closest("[data-whatsapp-worker]");
    if (whatsappButton) {
      openWhatsAppReport(
        whatsappButton.dataset.whatsappWorker,
        whatsappButton.dataset.whatsappStart,
        whatsappButton.dataset.whatsappEnd,
        whatsappButton.dataset.whatsappTitle,
      );
    }
  });

  document.addEventListener("contextmenu", (event) => {
    const workerCard = event.target.closest("[data-worker-id]");
    if (!workerCard) return;
    showWorkerContextMenu(event, workerCard.dataset.workerId);
  });

  document.addEventListener("dragstart", (event) => {
    const workerCard = event.target.closest("[data-worker-id]");
    if (!workerCard || event.target.closest("button, input, select, textarea, a")) return;
    draggedWorkerId = workerCard.dataset.workerId;
    workerCard.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", draggedWorkerId);
  });

  document.addEventListener("dragover", (event) => {
    const workerCard = event.target.closest("[data-worker-id]");
    if (!workerCard || !draggedWorkerId || workerCard.dataset.workerId === draggedWorkerId) return;
    event.preventDefault();
    workerCard.classList.add("drag-over");
    event.dataTransfer.dropEffect = "move";
  });

  document.addEventListener("dragleave", (event) => {
    const workerCard = event.target.closest("[data-worker-id]");
    if (workerCard) workerCard.classList.remove("drag-over");
  });

  document.addEventListener("drop", (event) => {
    const workerCard = event.target.closest("[data-worker-id]");
    if (!workerCard || !draggedWorkerId) return;
    event.preventDefault();
    const targetWorkerId = workerCard.dataset.workerId;
    $$(".worker-card.drag-over").forEach((item) => item.classList.remove("drag-over"));
    moveWorkerToPosition(draggedWorkerId, targetWorkerId);
    draggedWorkerId = "";
    suppressWorkerOpen = true;
    window.setTimeout(() => { suppressWorkerOpen = false; }, 200);
  });

  document.addEventListener("dragend", () => {
    draggedWorkerId = "";
    $$(".worker-card.dragging, .worker-card.drag-over").forEach((item) => item.classList.remove("dragging", "drag-over"));
  });

  document.addEventListener("keydown", (event) => {
    const detailsCard = event.target.closest?.("[data-open-worker-details]");
    if (!detailsCard || !["Enter", " "].includes(event.key)) return;
    event.preventDefault();
    openWorkerSummary(detailsCard.dataset.openWorkerDetails);
  });

  document.addEventListener("change", (event) => {
    const select = event.target.closest("[data-month-worker]");
    if (select) setAttendance(select.dataset.monthDate, select.dataset.monthWorker, select.value, false);

    const timeInput = event.target.closest("[data-time-field]");
    if (timeInput) {
      const parent = timeInput.closest(".time-grid");
      setAttendanceTime(parent.dataset.date, parent.dataset.worker, timeInput.dataset.timeField, timeInput.value);
    }

    const shiftInput = event.target.closest("[data-shift-field]");
    if (shiftInput) {
      const parent = shiftInput.closest(".time-grid");
      setAttendanceShift(parent.dataset.date, parent.dataset.worker, shiftInput.value);
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

  ["todayInput", "dashboardMonth", "attendanceDate", "attendanceWeekDate", "attendanceMonth", "attendanceWorkerSelect", "quickAttendanceDate", "settlementWorker", "lockMonth", "expenseMonth", "expenseBuyerFilter", "reportType", "reportDate", "reportMonth", "reportWorker", "reportShiftFilter", "reportLanguage"].forEach((id) => {
    $(`#${id}`).addEventListener("change", renderAll);
  });
  $("#expenseBuyerFilter").addEventListener("input", renderExpenses);

  $("#attendanceWorkerFilter").addEventListener("change", () => {
    app.attendanceWorkerFilter = $("#attendanceWorkerFilter").value;
    renderAll();
  });
  $("#attendanceShiftFilter").addEventListener("change", () => {
    app.attendanceShiftFilter = $("#attendanceShiftFilter").value;
    renderAll();
  });
  $("#bulkAttendanceShiftFilter").addEventListener("change", () => {
    app.bulkAttendanceShiftFilter = $("#bulkAttendanceShiftFilter").value || "all";
    renderBulkAttendanceWorkerPicker();
  });
  $("#bulkSelectAllWorkers").addEventListener("click", () => {
    const select = $("#bulkAttendanceWorkers");
    Array.from(select.options).forEach((option) => { option.selected = true; });
  });
  $("#bulkClearWorkers").addEventListener("click", () => {
    const select = $("#bulkAttendanceWorkers");
    Array.from(select.options).forEach((option) => { option.selected = false; });
  });
  $("#applyBulkAttendance").addEventListener("click", applyBulkAttendance);

  $("#expenseForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addExpenseFromForm();
  });
  $("#expenseReceiptUpload").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      setExpenseReceiptPhoto(await resizePhotoDataUrl(reader.result, 900));
      suggestReceiptFields(file);
    };
    reader.readAsDataURL(file);
  });
  $("#closeReceiptDialog").addEventListener("click", () => $("#receiptDialog").close());

  $$(".mode-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      $$(".mode-tab").forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      $("#dayAttendancePanel").classList.toggle("hidden", tab.dataset.mode !== "day");
      $("#weekAttendancePanel").classList.toggle("hidden", tab.dataset.mode !== "week");
      $("#monthAttendancePanel").classList.toggle("hidden", tab.dataset.mode !== "month");
    });
  });

  $("#markAllPresent").addEventListener("click", () => bulkSetMonth("present"));
  $("#markAllOff").addEventListener("click", () => bulkSetMonth("off"));
  $("#clearMonth").addEventListener("click", () => bulkSetMonth(""));
  $("#printReport").addEventListener("click", printReportOnly);
  $("#pdfReport").addEventListener("click", openPdfReport);
  $("#printAllWages").addEventListener("click", () => {
    Array.from($("#reportWorker").options).forEach((option) => {
      option.selected = option.value === "all";
    });
    renderReport();
    printReportOnly();
  });
  $("#printSelectedWage").addEventListener("click", () => {
    if (selectedReportWorkerIds().includes("all")) {
      const firstActive = app.workers.find((worker) => worker.status === "active");
      Array.from($("#reportWorker").options).forEach((option) => {
        option.selected = firstActive ? option.value === firstActive.id : option.value === "all";
      });
    }
    renderReport();
    printReportOnly();
  });
  $("#exportReport").addEventListener("click", exportReportCSV);
  $("#exportBackup").addEventListener("click", exportBackup);
  $("#downloadLatestBackup").addEventListener("click", downloadLatestDailyBackup);
  $("#lockPayrollMonth").addEventListener("click", lockPayrollMonth);
  $("#unlockPayrollMonth").addEventListener("click", unlockPayrollMonth);
  $("#printSettlement").addEventListener("click", printSettlement);
  $("#printAuditReport").addEventListener("click", printAuditReport);
  $("#importBackup").addEventListener("change", (event) => {
    if (event.target.files[0]) importBackup(event.target.files[0]);
  });
  $("#clearLogs").addEventListener("click", () => {
    if (!confirm(t("clearLogs"))) return;
    app.logs = [];
    addLog("Logs cleared", "");
    saveData();
    toast(t("logsCleared"));
  });
}

function bulkSetMonth(status) {
  const month = $("#attendanceMonth").value || monthISO();
  if (isMonthLocked(month)) {
    toast(t("monthLocked"));
    return;
  }
  if (month < monthISO() && !confirm(t("oldChangeWarning"))) return;
  daysInMonth(month).forEach((date) => {
    attendanceWorkers().forEach((worker) => {
      app.attendance[date] ||= {};
      if (status) {
        const current = getAttendanceRecord(date, worker.id);
        app.attendance[date][worker.id] = {
          ...current,
          status,
          shift: selectedAttendanceShift() === "all" ? (current.shift || "day") : selectedAttendanceShift(),
        };
      }
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
  const monthExpensesTotal = companyExpenseTotal(month);
  const monthOvertime = summary.reduce((sum, row) => sum + row.overtime, 0);
  const monthDates = daysInMonth(month);
  const dashboardPayTotals = paymentTotals(summary, monthDates[0], monthDates[monthDates.length - 1]);

  $("#statTotalWorkers").textContent = app.workers.filter((worker) => worker.status === "active").length;
  $("#statActiveWorkers").textContent = app.workers.filter((worker) => worker.status === "active").length;
  $("#statInactiveWorkers").textContent = app.workers.filter((worker) => worker.status === "inactive").length;
  $("#statPresentToday").textContent = Object.values(todayRecords).filter((record) => ["present", "halfday"].includes(normalizeAttendanceRecord(record).status)).length;
  $("#statMonthWages").textContent = money(monthWages);
  $("#statMonthExpenses").textContent = money(monthExpensesTotal);
  $("#statGrandTotal").textContent = money(monthWages + monthExpensesTotal);
  $("#statAttendanceDays").textContent = formatHours(monthOvertime);
  $("#statUnpaidWages").textContent = money(dashboardPayTotals.pending);
  if ($("#statPaidWages")) $("#statPaidWages").textContent = money(dashboardPayTotals.paid);
  if ($("#dashboardDateLabel")) $("#dashboardDateLabel").textContent = date;

  $("#dashboardSummary").innerHTML = summary
    .filter((row) => row.worker.status === "active" && (row.present || row.halfday || row.worker.status === "active"))
    .map((row) => {
      const paid = rowPaidAmount(row, monthDates[0], monthDates[monthDates.length - 1]);
      const unpaid = rowUnpaidAmount(row, monthDates[0], monthDates[monthDates.length - 1]);
      return `
        <tr>
          <td data-label="${t("worker")}">${escapeHTML(displayWorkerName(row.worker))}</td>
          <td data-label="${t("days")}">${row.present + (row.halfday * 0.5)}</td>
          <td data-label="${t("hours")}">${formatHours(row.hours)}</td>
          <td data-label="${t("overtime")}">${formatHours(row.overtime)}</td>
          <td data-label="${t("dailyWage")}">${money(row.dailyWage || currentDailyWage(row.worker))}</td>
          <td data-label="${t("paid")}">${money(paid)}</td>
          <td data-label="${t("unpaid")}"><strong>${money(unpaid)}</strong></td>
          <td data-label="${t("total")}"><strong>${money(row.wage)}</strong></td>
        </tr>
      `;
    }).join("") || `<tr><td colspan="8">${t("noWageRecords")}</td></tr>`;

  if ($("#todayList")) $("#todayList").innerHTML = activeWorkers().map((worker) => {
    const record = normalizeAttendanceRecord(todayRecords[worker.id]);
    const status = record.status || "not marked";
    const hours = calculateHours(record);
    return `
      <div class="today-row">
        <div class="attendance-person">
          ${worker.photo ? `<img class="attendance-avatar" src="${worker.photo}" alt="${escapeHTML(displayWorkerName(worker))}">` : `<div class="attendance-avatar worker-avatar-fallback">${escapeHTML(workerInitials(worker))}</div>`}
          <div>
          <strong>${escapeHTML(displayWorkerName(worker))}</strong>
          <p>${t("in")}: ${record.inTime || "-"} · ${t("out")}: ${record.outTime || "-"} · ${t("hours")}: ${formatHours(hours.total)} · ${t("overtime")}: ${formatHours(hours.overtime)}</p>
          <p>${escapeHTML(worker.role || t("roleWorker"))} · ${money(wageForDate(worker, date))}</p>
          </div>
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





