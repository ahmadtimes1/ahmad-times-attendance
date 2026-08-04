const STORAGE_KEY = "ahmad-times-attendance-v1";
const LANG_KEY = "ahmad-times-language";
const SIMPLE_LOGIN_KEY = "ahmad-times-simple-user";
const LAST_ACTIVITY_KEY = "ahmad-times-last-activity";
const WORKER_VIEW_KEY = "ahmad-times-worker-view";
const THEME_KEY = "ahmad-times-theme";
const ROLLING_BACKUPS_KEY = "ahmad-times-rolling-backups-v1";
const STANDARD_HOURS = 8;
const SESSION_TIMEOUT_MS = 30 * 60 * 1000;

const SIMPLE_USERS = [
  { username: "admin", password: "Dubai@#123", role: "admin", name: "Admin" },
  { username: "Ahmadadmin", password: "Ahmad@dxb", role: "admin", name: "Ahmad Admin" },
  { username: "Najib", password: "Najib@dxb", role: "manager", name: "Najib" },
  { username: "Raees Khan", password: "Raeeskhan@dxb", role: "manager", name: "Raees Khan" },
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
    periodAttendance: "Attendance in period",
    monthWages: "This month wages",
    monthlyOvertime: "Monthly overtime",
    periodOvertime: "Overtime in period",
    monthlyWageSummary: "Monthly Wage Summary",
    wageSummary: "Wage Summary",
    printWageSummary: "Print wage summary",
    printCompleteProjectReport: "Print complete project report",
    dashboardPeriod: "Dashboard period",
    allMonthsCombined: "All months combined",
    currentMonth: "Current month",
    previousMonth: "Previous month",
    specificMonth: "Specific month",
    customDateRange: "Custom date range",
    dashboardPeriodShowing: "Showing",
    budgetReceivedInPeriod: "Budget received in period",
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
    backupToday: "Backup today",
    backupNotToday: "Backup not today",
    monthOpen: "Month open",
    monthLockedShort: "Month locked",
    readyToClose: "Ready to close",
    reviewBeforeClose: "Review before closing",
    never: "Never",
    fullDayBasis: "actual working hours full day basis",
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
    notAvailable: "Not available on this date",
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
    companyAssistant: "Company Assistant",
    companyAssistantHelp: "Private internal assistant for company workers, attendance, wages, payments, expenses, and safety checks.",
    assistantPlaceholder: "Ask: who is unpaid this month, show absent today, worker Naeem report...",
    askAssistant: "Ask assistant",
    quickQuestions: "Quick questions",
    askTodaySummary: "Today summary",
    askUnpaidMonth: "Unpaid this month",
    askPaidMonth: "Paid this month",
    askExpensesMonth: "Expenses this month",
    askMistakes: "Attendance mistakes",
    askNightShift: "Night shift workers",
    assistantReady: "Internal assistant ready",
    assistantNoAnswer: "I could not understand that yet. Try asking about unpaid wages, attendance, expenses, workers, shifts, or mistakes.",
    safety: "Safety",
    logs: "Logs",
    backup: "Backup",
    more: "More",
    appSubtitle: "Automatic attendance and daily wage system",
    buildingMaintenance: "Building Maintenance",
    payrollLock: "Payroll lock",
    payrollLockHelp: "Lock a finished month so attendance, wages, and payments cannot be changed by mistake.",
    payrollApproval: "Monthly payroll approval",
    payrollApprovalHelp: "A manager submits the month for review. An admin verifies it, approves it, and locks it.",
    submitForApproval: "Submit for approval",
    approveAndLock: "Approve and lock",
    returnToDraft: "Return to draft",
    approvalDraft: "Draft",
    approvalSubmitted: "Submitted",
    approvalApproved: "Approved and locked",
    approvalReturned: "Returned for correction",
    payrollSubmitted: "Payroll submitted for approval",
    payrollApproved: "Payroll approved and locked",
    payrollReturned: "Payroll returned to draft",
    approvalBlocked: "Fix payroll verification problems before submitting or approving.",
    monthSubmittedLocked: "This month is submitted for approval. Return it to draft before changing records.",
    monthlyReconciliation: "Monthly reconciliation",
    balanced: "Balanced",
    difference: "Difference",
    overpaidAmount: "Overpaid amount",
    lockMonth: "Lock month",
    unlockMonth: "Unlock month",
    dailyBackups: "Daily backups",
    dailyBackupsHelp: "The system keeps one automatic backup copy per day.",
    downloadLatestBackup: "Download latest backup",
    mistakeAlerts: "Mistake alerts",
    mistakeAlertsHelp: "Important attendance and payment problems that need checking.",
    payrollVerification: "Payroll verification",
    payrollVerificationHelp: "Independent checks for wage math, unpaid balances, overtime, and backup safety.",
    verified: "Verified",
    needsReview: "Needs review",
    cloudSaveProblem: "Cloud save problem",
    browserCopySaved: "Browser safety copy saved",
    backupSnapshotSafe: "Daily backup snapshot protected",
    calculationVerified: "Payroll calculation verified",
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
    all: "All",
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
    customRange: "Custom range",
    date: "Date",
    month: "Month",
    fromDate: "From date",
    toDate: "To date",
    print: "Download report",
    pdfReport: "PDF / print file",
    reportLanguage: "Report language",
    exportCsv: "Export CSV",
    dataBackup: "Data Backup",
    backupHelp: "Export all workers, attendance, and wage records as a JSON backup file. Import the file later to restore the system on this browser.",
    exportBackup: "Export backup",
    importBackup: "Import backup",
    restoreLatestBackup: "Restore latest backup",
    recoveryBackups: "Recovery backups",
    recoveryBackupsHelp: "Restore a previous browser safety copy if the cloud screen shows zero data.",
    noRecoveryBackups: "No recovery backups with worker records found in this browser.",
    restoreBackup: "Restore",
    recoveryBackupRestored: "Recovery backup restored",
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
    requiredFields: "Please fill the required fields",
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
    periodAttendance: "په ټاکلې موده کې حاضري",
    monthWages: "د دې میاشتې مزدوري",
    monthlyOvertime: "د میاشتې اضافي وخت",
    periodOvertime: "په ټاکلې موده کې اضافي وخت",
    monthlyWageSummary: "د میاشتې مزدورۍ لنډیز",
    wageSummary: "د مزدورۍ لنډیز",
    printWageSummary: "د مزدورۍ لنډیز چاپ کړئ",
    printCompleteProjectReport: "د پروژې مکمل راپور چاپ کړئ",
    dashboardPeriod: "د ډشبورډ موده",
    allMonthsCombined: "ټولې میاشتې یوځای",
    currentMonth: "اوسنۍ میاشت",
    previousMonth: "تېره میاشت",
    specificMonth: "ځانګړې میاشت",
    customDateRange: "ځانګړې نېټې",
    dashboardPeriodShowing: "ښودل کېږي",
    budgetReceivedInPeriod: "په ټاکلې موده کې ترلاسه شوې بودیجه",
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
    notAvailable: "په دې نېټه شتون نه لري",
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
    backupToday: "نن بیک اپ شته",
    backupNotToday: "نن بیک اپ نشته",
    monthOpen: "میاشت خلاصه ده",
    monthLockedShort: "میاشت بنده ده",
    readyToClose: "د بندولو لپاره چمتو",
    reviewBeforeClose: "د بندولو مخکې یې وګورئ",
    never: "هېڅکله",
    fullDayBasis: "د حقیقي کاري ساعتونو د بشپړې ورځې حساب",
    recentAttendance: "وروستۍ حاضري",
    todaysAttendance: "د نن حاضري",
    dashboard: "ډشبورډ",
    workers: "کارکوونکي",
    attendance: "حاضري",
    reports: "راپورونه",
    companyAssistant: "د شرکت مرستیال",
    companyAssistantHelp: "د شرکت د کارکوونکو، حاضري، مزدوري، تادیاتو، مصارفو او غلطیو لپاره داخلي مرستیال.",
    assistantPlaceholder: "پوښتنه وکړئ: د دې میاشتې ناادا مزدوران، د نن غیر حاضر، د نعیم راپور...",
    askAssistant: "پوښتنه وکړئ",
    quickQuestions: "چټکې پوښتنې",
    askTodaySummary: "د نن لنډیز",
    askUnpaidMonth: "د دې میاشتې ناادا",
    askPaidMonth: "د دې میاشتې ادا شوي",
    askExpensesMonth: "د دې میاشتې مصارف",
    askMistakes: "د حاضري غلطۍ",
    askNightShift: "د شپې شفټ کارکوونکي",
    assistantReady: "داخلي مرستیال چمتو دی",
    assistantNoAnswer: "دا پوښتنه مې ښه ونه پېژندله. د مزدورۍ، حاضري، مصارفو، کارکوونکو، شفټونو یا غلطیو په اړه پوښتنه وکړئ.",
    safety: "خوندیتوب",
    logs: "لاګونه",
    backup: "بیک اپ",
    more: "نور",
    appSubtitle: "اتومات حاضري او ورځنۍ مزدوري سیستم",
    buildingMaintenance: "بلډنګ مینټیننس",
    payrollLock: "د معاش بندول",
    payrollLockHelp: "ختمه میاشت بنده کړئ چې معلومات په غلطۍ بدل نه شي.",
    payrollApproval: "د میاشتني معاش تایید",
    payrollApprovalHelp: "منیجر میاشت د کتنې لپاره سپاري، اډمین یې تاییدوي او بندوي.",
    submitForApproval: "د تایید لپاره وسپارئ",
    approveAndLock: "تایید او بند کړئ",
    returnToDraft: "مسودې ته ستنول",
    approvalDraft: "مسوده",
    approvalSubmitted: "سپارل شوی",
    approvalApproved: "تایید او بند شوی",
    approvalReturned: "د سمون لپاره ستنول شوی",
    payrollSubmitted: "معاش د تایید لپاره وسپارل شو",
    payrollApproved: "معاش تایید او بند شو",
    payrollReturned: "معاش مسودې ته ستون شو",
    approvalBlocked: "د سپارلو یا تایید څخه مخکې د معاش ستونزې سمې کړئ.",
    monthSubmittedLocked: "دا میاشت د تایید لپاره سپارل شوې؛ د بدلون مخکې یې مسودې ته ستنه کړئ.",
    monthlyReconciliation: "میاشتنی حساب برابرول",
    balanced: "برابر",
    difference: "توپیر",
    overpaidAmount: "زیاته ورکړه",
    lockMonth: "میاشت بنده کړئ",
    unlockMonth: "میاشت خلاصه کړئ",
    dailyBackups: "ورځني بیک اپونه",
    dailyBackupsHelp: "سیسټم هره ورځ یو بیک اپ ساتي.",
    downloadLatestBackup: "وروستی بیک اپ ښکته کړئ",
    mistakeAlerts: "د غلطۍ خبرتیاوې",
    mistakeAlertsHelp: "مهمې ستونزې چې کتل غواړي.",
    payrollVerification: "د مزدورۍ تصدیق",
    payrollVerificationHelp: "د مزدورۍ حساب، پاتې پیسې، اضافي وخت او بیک اپ دقت چک کوي.",
    verified: "تایید شو",
    needsReview: "بیا کتنه غواړي",
    cloudSaveProblem: "د کلاوډ ذخیرې ستونزه",
    browserCopySaved: "د براوزر خوندي کاپي ذخیره شوه",
    backupSnapshotSafe: "ورځنی بیک اپ خوندي دی",
    calculationVerified: "د مزدورۍ حساب تایید شو",
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
    all: "ټول",
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
    customRange: "ځانګړې نېټې",
    date: "نېټه",
    month: "میاشت",
    fromDate: "له نېټې",
    toDate: "تر نېټې",
    print: "راپور ښکته کړئ",
    pdfReport: "PDF / چاپ فایل",
    reportLanguage: "د راپور ژبه",
    exportCsv: "CSV وباسئ",
    dataBackup: "د معلوماتو بیک اپ",
    backupHelp: "ټول کارکوونکي، حاضري او مزدوري ریکارډونه د JSON بیک اپ فایل په توګه وباسئ. وروسته یې د سیستم د بحالولو لپاره داخل کړئ.",
    exportBackup: "بیک اپ وباسئ",
    importBackup: "بیک اپ داخل کړئ",
    restoreLatestBackup: "وروستی بیک اپ راواخلئ",
    recoveryBackups: "د بیا راګرځولو بیک اپونه",
    recoveryBackupsHelp: "که کلاوډ صفر ښکاره کړي، پخوانۍ د براوزر خوندي کاپي راواخلئ.",
    noRecoveryBackups: "په دې براوزر کې د کارکوونکو بیک اپ ونه موندل شو.",
    restoreBackup: "راګرځول",
    recoveryBackupRestored: "بیک اپ راواګرځول شو",
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
    requiredFields: "مهرباني وکړئ اړین ځایونه ډک کړئ",
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
    printSeparateWorkerReports: "Print separate worker reports",
    downloadSeparateWorkerReports: "Download separate worker reports",
    printMonthlyAttendance: "Print monthly attendance",
    printAllMonthlyAttendance: "Print all monthly attendance",
    monthlyAttendanceReport: "Monthly attendance report",
    attendanceCode: "Code",
    attendanceTotals: "Attendance totals",
    overtimeDetails: "Overtime details",
    totalOvertime: "Total overtime",
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
  manualOvertimeHelp: "Leave empty for automatic overtime",
  restBreak: "Rest break",
  defaultRest: "Default 1-hour rest",
  noRest: "No rest",
  customRest: "Custom rest",
  customRestMinutes: "Custom rest (minutes)",
  totalTime: "Total time",
  actualWorkingHours: "Actual working hours",
  normalHours: "Normal hours",
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
  addPaymentEntry: "Add payment entry",
  paymentFor: "Payment for",
  directWorker: "Direct worker",
  paymentPerson: "Worker / supplier",
  paymentDateHelp: "Use the real date when you give this payment. It can be today or any future payment date.",
  balancePeriod: "Balance period",
  balancePeriodHelp: "Payable, paid, balance, and payment history use only this date range.",
  totalWageAmount: "Total wage amount",
  remainingUnpaidBalance: "Remaining unpaid balance",
  paymentHistory: "Payment history",
  includePaymentHistory: "Include payment history",
  noPaymentHistory: "No payment history yet.",
  noPaymentTarget: "No worker or supplier selected.",
  addPaymentAmountFirst: "Enter a paid amount first.",
  editPayment: "Edit payment",
  paymentUpdated: "Payment updated",
  paymentRemoved: "Payment removed",
  currentDailyWage: "Current daily wage",
  advanceBalanceAed: "Opening advance only (AED)",
  workerAdvanceBalance: "Worker advance remaining",
  addWorkerAdvance: "Add worker advance",
  advanceAmount: "Advance amount",
  advanceDate: "Advance date",
  advanceNote: "Advance note",
  advanceSaved: "Advance saved",
  advanceHistory: "Advance history",
  noAdvanceHistory: "No advance history yet.",
  totalAdvanceGiven: "Total advance given",
  shiftFilteredWarning: "This report is filtered by shift. Some worked days may be hidden.",
  advanceDeducted: "Advance deducted",
  advanceDeductedThisMonth: "Advance deducted this month",
  remainingAdvanceBalance: "Remaining advance balance",
  grossPayable: "Gross payable",
  finalPayable: "Final payable",
  payableAfterAdvance: "Payable after advance",
  workerBalance: "Worker balance",
  paymentDeducted: "Payment deducted",
  extraPaidBalance: "Extra paid balance",
  balanceOnCompany: "Balance on company",
  balanceAfterPayment: "Balance after payment",
  wageEffectiveDate: "Wage effective from",
  wageHistory: "Wage history",
  monthlyWageHistory: "Monthly wage history",
  wageHistoryHelp: "Set the wage from the month it starts. Old months keep old rates.",
  wageMonth: "Month",
  addWageRate: "Add / update rate",
  removeWageRate: "Remove rate",
  noWageRates: "No monthly wage rates yet.",
  wageRateSaved: "Wage rate saved",
  effectiveFrom: "from",
  expenses: "Expenses",
  companyExpenses: "Company expenses",
  companyExpensesHelp: "Store daily company expenses such as worker food, car oil, fuel, tools, or site costs.",
  companyExpenseReport: "Company Expense Report",
  investorExpenseReport: "Investor expense report",
  companyExpenseReportHelp: "Full company expense report for investors.",
  printCompanyExpenseReport: "Investor expense report",
  exportCompanyExpenseReport: "Export investor CSV",
  projectWiseReport: "Project-wise report",
  workerWiseReport: "Worker-wise report",
  supplierWiseReport: "Supplier-wise report",
  labourWages: "Labour wages",
  supplierWorkerWages: "Supplier worker wages",
  paymentSummary: "Payment summary",
  role: "Profession",
  attendanceDays: "Attendance days",
  records: "Records",
  totalCompanyExpenses: "Total company expenses",
  normalHours: "Normal hours",
  overtimeAmount: "Overtime amount",
  totalWage: "Total wage",
  totalLabourWages: "Total labour wages",
  completeLabourWages: "Complete labour wages",
  currentMonthBalance: "Current month balance",
  totalSupplierWorkerWages: "Total supplier worker wages",
  totalPaidAmount: "Total paid amount",
  totalUnpaidAmount: "Total unpaid amount",
  grandTotalExpense: "Grand total expense",
  materialExpenses: "Material expenses",
  transportExpenses: "Transport expenses",
  fuelExpenses: "Fuel expenses",
  carRent: "Car rent",
  toolsEquipment: "Tools and equipment",
  foodGroceryExpenses: "Food / grocery expenses",
  otherSmallExpenses: "Other small expenses",
  workersProvided: "Workers provided",
  dailyRate: "Daily rate",
  expenseReport: "Expense report",
  expenseReportBuyers: "Report buyers",
  printExpenseReport: "Print expense report",
  selectedBuyers: "Selected buyers",
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
  weeklyExpense: "Week expense",
  monthlyExpense: "Month expense",
  overallExpense: "Overall summary",
  fuelExpense: "Fuel",
  roomExpense: "Room",
  breakfastExpense: "Breakfast",
  foodExpense: "Food",
  moneyGiven: "Money given",
  expenseUnpaid: "Expense unpaid",
  buyerBalance: "Buyer balance",
  buyerTotals: "Buyer totals",
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
  expenseUpdated: "Expense updated",
  editExpense: "Edit",
  saveExpenseChanges: "Save changes",
  expenseRemoved: "Expense removed",
  projectsBudget: "Projects & Budget",
  projectsBudgetHelp: "Track investor budget received, project expenses, and remaining balance in one simple place.",
  projectName: "Project / site",
  projectNamePlaceholder: "Project or site",
  investorName: "Investor name",
  investorNamePlaceholder: "Investor name",
  budgetAmount: "Budget amount (AED)",
  fromMonth: "From month",
  toMonth: "To month",
  addBudgetEntry: "Add budget",
  budgetEntrySaved: "Budget saved",
  budgetEntryUpdated: "Budget updated",
  budgetEntryRemoved: "Budget removed",
  allProjects: "All projects",
  budgetReceived: "Budget received",
  budgetReceivedThisMonth: "Budget received this month",
  projectExpenses: "Project expenses",
  companyExpenseCost: "Company expenses",
  workerWageCost: "Worker wages",
  totalAllMonthsWages: "Total all months wages",
  totalCompanyCost: "Total company cost",
  budgetRemaining: "Budget remaining",
  noBudgetEntries: "No budget entries yet.",
  printPartnerReport: "Print partner report",
  partnerReport: "Partner report",
  projectSummary: "Project summary",
  monthlyExpenses: "Company monthly expenses",
  grandTotal: "Grand total",
  pashtoName: "Pashto name",
  pashtoNamePlaceholder: "Worker name in Pashto",
  remove: "Remove",
  supplierWorkers: "Supplier Workers",
  supplierWorkersHelp: "Simple count-based supplier labour entry, separate from direct company workers.",
  supplierName: "Supplier name",
  supplierWorkerCount: "Workers provided today",
  supplierDailyWage: "Daily wage per worker",
  supplierOvertimeHours: "Overtime hours per worker",
  transportationCharges: "Transportation charges",
  previousLoan: "Previous loan",
  normalAmount: "Normal amount",
  overtimeAmount: "Overtime amount",
  totalSupplierAmount: "Total supplier amount",
  unpaidAmount: "Unpaid amount",
  addSupplierEntry: "Add supplier entry",
  supplierEntrySaved: "Supplier entry saved",
  supplierEntryUpdated: "Supplier entry updated",
  supplierEntryRemoved: "Supplier entry removed",
  supplierWorkersTotalAmount: "Supplier workers total",
  supplierWorkersPaidAmount: "Supplier workers paid",
  supplierWorkersUnpaidAmount: "Supplier workers unpaid",
  allCompanyCost: "All company cost",
  directWorkersTotalAmount: "Direct labour payable after advance",
  directWorkersPaidAmount: "Direct workers paid",
  directWorkersUnpaidAmount: "Direct workers unpaid",
  grandTotalAmount: "Total company cost this month",
  previousMonthCompanyCost: "Previous month company cost",
  twoMonthCompanyCost: "Selected + previous month cost",
  includePreviousMonth: "Include previous month",
  previousMonthDetails: "Previous month details",
  grandTotalPaid: "Grand total paid",
  grandTotalUnpaid: "Grand total unpaid",
  totalUnpaidBalance: "Total unpaid balance",
  dashboardWorkersGroup: "Workers",
  dashboardWagesGroup: "Direct labour wages",
  dashboardSupplierGroup: "Supplier labour",
  dashboardExpensesBudgetGroup: "Expenses and budget",
  noSupplierEntries: "No supplier worker entries.",
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
  printSeparateWorkerReports: "جلا جلا د کارکوونکو راپورونه چاپ",
  downloadSeparateWorkerReports: "جلا جلا د کارکوونکو راپورونه ډاونلوډ",
  printMonthlyAttendance: "میاشتنۍ حاضري چاپ",
  printAllMonthlyAttendance: "د ټولو میاشتنۍ حاضري چاپ",
  monthlyAttendanceReport: "د میاشتنۍ حاضري راپور",
  attendanceCode: "کوډ",
  attendanceTotals: "د حاضري ټولټال",
  overtimeDetails: "د اضافي وخت تفصیل",
  totalOvertime: "ټول اضافي وخت",
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
  manualOvertimeHelp: "تش پرېږدئ، سیستم یې پخپله حسابوي",
  restBreak: "د آرام وقفه",
  defaultRest: "اصلي ۱ ساعت آرام",
  noRest: "بې آرامه",
  customRest: "ځانګړی آرام",
  customRestMinutes: "ځانګړی آرام (دقیقې)",
  totalTime: "ټول وخت",
  actualWorkingHours: "حقیقي کاري ساعتونه",
  normalHours: "عادي ساعتونه",
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
  addPaymentEntry: "د تادیې ریکارډ اضافه کړئ",
  paymentFor: "تادیه د چا لپاره",
  directWorker: "مستقیم کارکوونکی",
  paymentPerson: "کارکوونکی / سپلایر",
  paymentDateHelp: "هغه اصلي نېټه وټاکئ چې پیسې ورکوئ. نن یا د راتلونکې هره نېټه کېدای شي.",
  balancePeriod: "د بیلانس موده",
  balancePeriodHelp: "مزدوري، ورکړل شوې پیسې، بیلانس، او د تادیاتو تاریخچه یوازې د همدې نېټو له مخې حسابېږي.",
  totalWageAmount: "ټوله مزدوري",
  remainingUnpaidBalance: "پاتې ناادا",
  paymentHistory: "د تادیاتو تاریخچه",
  includePaymentHistory: "د تادیاتو تاریخچه شامل کړئ",
  noPaymentHistory: "تر اوسه تادیه نشته.",
  noPaymentTarget: "کارکوونکی یا سپلایر نه دی ټاکل شوی.",
  addPaymentAmountFirst: "لومړی د تادیې اندازه ولیکئ.",
  editPayment: "تادیه اصلاح کړئ",
  paymentUpdated: "تادیه تازه شوه",
  paymentRemoved: "تادیه لرې شوه",
});

Object.assign(translations.ps, {
  currentDailyWage: "اوسنۍ ورځنۍ مزدوري",
  advanceBalanceAed: "یوازې لومړنی اډوانس (AED)",
  workerAdvanceBalance: "د کارکوونکو پاتې اډوانس",
  addWorkerAdvance: "د کارکوونکي اډوانس اضافه کړئ",
  advanceAmount: "د اډوانس اندازه",
  advanceDate: "د اډوانس نېټه",
  advanceNote: "د اډوانس یادښت",
  advanceSaved: "اډوانس ذخیره شو",
  advanceHistory: "د اډوانس تاریخچه",
  noAdvanceHistory: "تر اوسه اډوانس نشته.",
  totalAdvanceGiven: "ټول ورکړل شوی اډوانس",
  shiftFilteredWarning: "دا راپور د شفټ له مخې فلټر شوی. ځینې کاري ورځې پټېدای شي.",
  advanceDeducted: "کم شوی اډوانس",
  advanceDeductedThisMonth: "د دې میاشتې کم شوی اډوانس",
  remainingAdvanceBalance: "پاتې اډوانس بیلنس",
  grossPayable: "مجموعي ورکړه",
  finalPayable: "وروستۍ ورکړه",
  payableAfterAdvance: "له اډوانس وروسته ورکړه",
  workerBalance: "د کارکوونکي پاتې حساب",
  paymentDeducted: "کم شوې تادیه",
  extraPaidBalance: "زیاتې ورکړل شوې پیسې",
  balanceOnCompany: "د شرکت پاتې حساب",
  balanceAfterPayment: "له تادیې وروسته پاتې حساب",
  wageEffectiveDate: "مزدوري له دې نېټې نه",
  wageHistory: "د مزدورۍ تاریخچه",
  monthlyWageHistory: "د میاشتني مزدورۍ تاریخچه",
  wageHistoryHelp: "مزدوري له هغې میاشتې څخه وټاکئ چې شروع کېږي. پخوانۍ میاشتې خپل زاړه نرخونه ساتي.",
  wageMonth: "میاشت",
  addWageRate: "نرخ اضافه / تازه کړئ",
  removeWageRate: "نرخ لرې کړئ",
  noWageRates: "تر اوسه میاشتنی نرخ نشته.",
  wageRateSaved: "د مزدورۍ نرخ ذخیره شو",
  effectiveFrom: "له",
  expenses: "مصارف",
  companyExpenses: "د شرکت مصارف",
  companyExpensesHelp: "د شرکت ورځني مصارف لکه د مزدور خوراک، د موټر تېل، سامان، یا د سایټ مصرفونه ذخیره کړئ.",
  companyExpenseReport: "د شرکت د مصارفو راپور",
  investorExpenseReport: "د انویسټر د مصارفو راپور",
  companyExpenseReportHelp: "د انویسټرانو لپاره د شرکت بشپړ مصارفو راپور.",
  printCompanyExpenseReport: "د انویسټر راپور چاپ",
  exportCompanyExpenseReport: "د انویسټر CSV وباسئ",
  projectWiseReport: "د پروژې له مخې راپور",
  workerWiseReport: "د کارکوونکي له مخې راپور",
  supplierWiseReport: "د سپلایر له مخې راپور",
  labourWages: "د مزدورانو مزدوري",
  supplierWorkerWages: "د سپلایر مزدورانو مزدوري",
  paymentSummary: "د تادیاتو لنډیز",
  role: "مسلک",
  attendanceDays: "د حاضري ورځې",
  records: "ریکارډونه",
  totalCompanyExpenses: "د شرکت ټول مصارف",
  normalHours: "عادي ساعتونه",
  overtimeAmount: "د اضافي وخت اندازه",
  totalWage: "ټوله مزدوري",
  totalLabourWages: "د مزدورانو ټولې مزدورۍ",
  completeLabourWages: "د مزدورانو مکملې مزدورۍ",
  currentMonthBalance: "د روانې میاشتې بیلنس",
  totalSupplierWorkerWages: "د سپلایر مزدورانو ټولې مزدورۍ",
  totalPaidAmount: "ټول ادا شوی مبلغ",
  totalUnpaidAmount: "ټول ناادا مبلغ",
  grandTotalExpense: "د ټول لګښت مجموعه",
  materialExpenses: "د موادو مصارف",
  transportExpenses: "د ټرانسپورټ مصارف",
  fuelExpenses: "د تېلو مصارف",
  carRent: "د موټر کرایه",
  toolsEquipment: "اوزار او سامان",
  foodGroceryExpenses: "خوراک / سودا مصارف",
  otherSmallExpenses: "نور واړه مصارف",
  workersProvided: "ورکړل شوي مزدوران",
  dailyRate: "ورځنی نرخ",
  expenseReport: "د مصارفو راپور",
  expenseReportBuyers: "د راپور اخیستونکي",
  printExpenseReport: "د مصارفو راپور چاپ",
  selectedBuyers: "ټاکل شوي اخیستونکي",
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
  weeklyExpense: "اونۍ مصرف",
  monthlyExpense: "میاشتنی مصرف",
  overallExpense: "ټول لنډیز",
  fuelExpense: "تیل",
  roomExpense: "روم",
  breakfastExpense: "ناشته",
  foodExpense: "خوراک",
  moneyGiven: "ورکړل شوې پیسې",
  expenseUnpaid: "ناادا مصرف",
  buyerBalance: "د اخیستونکي باقي",
  buyerTotals: "د اخیستونکو ټول حساب",
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
  expenseUpdated: "مصرف تازه شو",
  editExpense: "سمول",
  saveExpenseChanges: "بدلونونه ذخیره کړئ",
  expenseRemoved: "مصرف لرې شو",
  projectsBudget: "پروژې او بودیجه",
  projectsBudgetHelp: "د انویسټر بودیجه، د پروژې مصرفونه، او پاتې بیلنس په ساده ډول ثبت کړئ.",
  projectName: "پروژه / سایټ",
  projectNamePlaceholder: "پروژه یا سایټ",
  investorName: "د انویسټر نوم",
  investorNamePlaceholder: "د انویسټر نوم",
  budgetAmount: "د بودیجې اندازه (AED)",
  fromMonth: "له میاشتې",
  toMonth: "تر میاشتې",
  addBudgetEntry: "بودیجه اضافه کړئ",
  budgetEntrySaved: "بودیجه ذخیره شوه",
  budgetEntryUpdated: "بودیجه تازه شوه",
  budgetEntryRemoved: "بودیجه لرې شوه",
  allProjects: "ټولې پروژې",
  budgetReceived: "ترلاسه شوې بودیجه",
  budgetReceivedThisMonth: "د دې میاشتې بودیجه",
  projectExpenses: "د پروژې مصرف",
  companyExpenseCost: "د شرکت مصارف",
  workerWageCost: "د مزدورانو مزدوري",
  totalAllMonthsWages: "د ټولو میاشتو مزدوري",
  totalCompanyCost: "د شرکت ټول لګښت",
  budgetRemaining: "پاتې بودیجه",
  noBudgetEntries: "تر اوسه بودیجه نشته.",
  printPartnerReport: "د شریکانو راپور چاپ",
  partnerReport: "د شریکانو راپور",
  projectSummary: "د پروژې لنډیز",
  supplierWorkers: "د سپلایر کارکوونکي",
  supplierWorkersHelp: "د سپلایر مزدورانو ساده حساب، د مستقیمو کارکوونکو څخه جلا.",
  supplierName: "د سپلایر نوم",
  supplierWorkerCount: "نن ورکړل شوي کارکوونکي",
  supplierDailyWage: "د هر کارکوونکي ورځنۍ مزدوري",
  supplierOvertimeHours: "د هر کارکوونکي اضافي ساعتونه",
  transportationCharges: "د ټرانسپورټ خرچه",
  previousLoan: "پخوانی قرض",
  normalAmount: "عادي اندازه",
  overtimeAmount: "د اضافي وخت اندازه",
  totalSupplierAmount: "د سپلایر ټول مبلغ",
  unpaidAmount: "ناادا مبلغ",
  addSupplierEntry: "د سپلایر ریکارډ اضافه کړئ",
  supplierEntrySaved: "د سپلایر ریکارډ ذخیره شو",
  supplierEntryUpdated: "د سپلایر ریکارډ تازه شو",
  supplierEntryRemoved: "د سپلایر ریکارډ لرې شو",
  supplierWorkersTotalAmount: "د سپلایر ټول مبلغ",
  supplierWorkersPaidAmount: "د سپلایر ادا شوی",
  supplierWorkersUnpaidAmount: "د سپلایر ناادا",
  allCompanyCost: "د شرکت ټول لګښت",
  directWorkersTotalAmount: "له اډوانس وروسته د مستقیمو مزدورانو ورکړه",
  directWorkersPaidAmount: "د مستقیمو کارکوونکو ادا شوی",
  directWorkersUnpaidAmount: "د مستقیمو کارکوونکو ناادا",
  grandTotalAmount: "د دې میاشتې ټول شرکت لګښت",
  previousMonthCompanyCost: "د تېرې میاشتې د شرکت لګښت",
  twoMonthCompanyCost: "ټاکل شوې + تېره میاشت لګښت",
  includePreviousMonth: "تېره میاشت هم شامل کړئ",
  previousMonthDetails: "د تېرې میاشتې تفصیل",
  grandTotalPaid: "ټول ادا شوی",
  grandTotalUnpaid: "ټول ناادا",
  totalUnpaidBalance: "ټول پاتې ناادا",
  dashboardWorkersGroup: "کارکوونکي",
  dashboardWagesGroup: "د مستقیمو مزدورانو مزدوري",
  dashboardSupplierGroup: "د سپلایر مزدوران",
  dashboardExpensesBudgetGroup: "مصارف او بودیجه",
  noSupplierEntries: "د سپلایر کارکوونکو ریکارډ نشته.",
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
  projectBudgets: [],
  supplierEntries: [],
  supplierPayments: [],
  workerAdvances: [],
  logs: [],
  payrollLocks: {},
  payrollApprovals: {},
  dailyBackups: {},
  lastSaved: null,
  lastCloudSaveError: "",
  storageMode: "local",
  user: null,
  profile: null,
  assistantMessages: [],
  language: localStorage.getItem(LANG_KEY) || "en",
  theme: localStorage.getItem(THEME_KEY) || "light",
  workerFilter: "active",
  workerShiftFilter: "all",
  workerView: localStorage.getItem(WORKER_VIEW_KEY) || "large",
  selectedWorkerSummaryId: "",
  attendanceWorkerFilter: "all",
  attendanceShiftFilter: "all",
  bulkAttendanceShiftFilter: "all",
  editingExpenseId: "",
};

let supabaseClient = null;
let workerContextTargetId = "";
let draggedWorkerId = "";
let suppressWorkerOpen = false;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function localDateISO(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function localMonthISO(date = new Date()) {
  return localDateISO(date).slice(0, 7);
}

function dateFromISO(value = todayISO()) {
  const [year, month, day] = String(value || todayISO()).split("-").map(Number);
  return new Date(year || new Date().getFullYear(), (month || 1) - 1, day || 1);
}

const todayISO = () => localDateISO(new Date());
const monthISO = (date = new Date()) => localMonthISO(date);
const roundMoney = (value) => Math.round((Number(value || 0) + Number.EPSILON) * 100) / 100;
const money = (value) => `AED ${roundMoney(value).toLocaleString("en-AE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const makeId = () => crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
const t = (key) => translations[app.language]?.[key] || translations.en[key] || key;
const reportLanguage = () => $("#reportLanguage")?.value || app.language || "en";
let undoStack = [];
let redoStack = [];
let historySnapshot = "";
let historyPaused = false;
let renderAllQueued = false;
let cloudSaveTimer = null;
let cloudSaveInFlight = false;
let cloudSaveQueued = false;
let pendingSaveToast = false;
let lastRollingBackupAt = 0;
const calculationCache = new Map();

function cacheKey(...parts) {
  return parts.map((part) => Array.isArray(part) ? part.join("|") : String(part ?? "")).join("::");
}

function cachedCalculation(key, calculator) {
  if (calculationCache.has(key)) return calculationCache.get(key);
  const value = calculator();
  calculationCache.set(key, value);
  return value;
}

function clearCalculationCache() {
  calculationCache.clear();
}

function cloneData(value) {
  return JSON.parse(JSON.stringify(value || null));
}

function snapshotAppData() {
  return JSON.stringify({
    workers: app.workers || [],
    attendance: app.attendance || {},
    payments: app.payments || {},
    expenses: app.expenses || [],
    projectBudgets: app.projectBudgets || [],
    supplierEntries: app.supplierEntries || [],
    supplierPayments: app.supplierPayments || [],
    workerAdvances: app.workerAdvances || [],
    payrollLocks: app.payrollLocks || {},
    payrollApprovals: app.payrollApprovals || {},
    dailyBackups: app.dailyBackups || {},
  });
}

function normalizeAppCollections() {
  app.workers ||= [];
  app.attendance ||= {};
  app.payments ||= [];
  app.expenses ||= [];
  app.projectBudgets ||= [];
  app.supplierEntries ||= [];
  app.supplierPayments ||= [];
  app.workerAdvances ||= [];
  app.logs ||= [];
  app.payrollLocks ||= {};
  app.payrollApprovals ||= {};
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
  app.projectBudgets = data.projectBudgets || [];
  app.supplierEntries = data.supplierEntries || [];
  app.supplierPayments = data.supplierPayments || [];
  app.workerAdvances = data.workerAdvances || [];
  app.payrollLocks = data.payrollLocks || {};
  app.payrollApprovals = data.payrollApprovals || {};
  app.dailyBackups = data.dailyBackups || {};
  normalizeAppCollections();
  clearCalculationCache();
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
  if (date instanceof Date) return localMonthISO(date);
  return String(date || todayISO()).slice(0, 7);
}

function shiftMonth(month, offset) {
  const [year, monthIndex] = String(month || monthISO()).split("-").map(Number);
  const date = new Date(year, (monthIndex || 1) - 1 + offset, 1);
  return localMonthISO(date);
}

function previousMonth(month) {
  return shiftMonth(month, -1);
}

function companyCostForMonth(month) {
  const dates = daysInMonth(month);
  const start = dates[0];
  const end = dates[dates.length - 1];
  const direct = paymentTotals(monthSummary(month), start, end).finalPayable;
  const supplier = supplierTotals(monthSupplierEntries(month), start, end).total;
  const expenses = companyExpenseTotal(month);
  return roundMoney(direct + supplier + expenses);
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
  if (app.payrollApprovals?.[monthFromDate(date)]?.status === "submitted") {
    toast(t("monthSubmittedLocked"));
    addLog("Blocked submitted payroll change", `${action} · ${date}`);
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
    workers: cloneData(app.workers),
    attendance: cloneData(app.attendance),
    payments: cloneData(app.payments),
    expenses: cloneData(app.expenses),
    projectBudgets: cloneData(app.projectBudgets),
    supplierEntries: cloneData(app.supplierEntries),
    supplierPayments: cloneData(app.supplierPayments),
    workerAdvances: cloneData(app.workerAdvances),
    payrollLocks: cloneData(app.payrollLocks),
    payrollApprovals: cloneData(app.payrollApprovals),
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
  if (!worker) return [];
  const fallbackDate = worker.joinDate || (worker.createdAt ? worker.createdAt.slice(0, 10) : todayISO());
  const entries = Array.isArray(worker.wageHistory) ? worker.wageHistory : [];
  const map = new Map();
  entries.forEach((entry) => {
    const date = normalizeDateValue(entry?.date);
    if (!date) return;
    const dailyWage = Number(entry.dailyWage ?? entry.wage ?? 0);
    if (Number.isFinite(dailyWage) && dailyWage >= 0) map.set(date, roundMoney(dailyWage));
  });
  if (!map.size && Number(worker.dailyWage || 0)) map.set(normalizeDateValue(fallbackDate) || todayISO(), roundMoney(worker.dailyWage || 0));
  return Array.from(map, ([date, dailyWage]) => ({ date, dailyWage }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function wageForDate(worker, date = todayISO()) {
  const history = normalizeWageHistory(worker);
  const targetDate = normalizeDateValue(date) || todayISO();
  let wage = history[0]?.dailyWage ?? Number(worker?.dailyWage || 0);
  history.forEach((entry) => {
    if (entry.date <= targetDate) wage = Number(entry.dailyWage || 0);
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

function normalizeDateValue(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
  const slash = raw.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
  if (slash) {
    const [, day, month, year] = slash;
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }
  return "";
}

function wageHistoryFormText(worker) {
  return normalizeWageHistory(worker)
    .map((entry) => `${entry.date} = ${entry.dailyWage}`)
    .join("\n");
}

function normalizeMonthlyWageHistory(worker) {
  const monthMap = new Map();
  normalizeWageHistory(worker).forEach((entry) => {
    const month = monthFromDate(entry.date);
    if (!month) return;
    monthMap.set(`${month}-01`, roundMoney(entry.dailyWage || 0));
  });
  return Array.from(monthMap, ([date, dailyWage]) => ({ date, dailyWage }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function removeWageMonthFromMap(historyMap, month) {
  Array.from(historyMap.keys()).forEach((date) => {
    if (monthFromDate(date) === month) historyMap.delete(date);
  });
}

function parseWageHistoryText(text) {
  const entries = [];
  String(text || "").split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) return;
    const parts = trimmed.split(/[=,|:]+/).map((part) => part.trim()).filter(Boolean);
    const date = normalizeDateValue(parts[0]);
    const dailyWage = Number(parts[1]);
    if (!date || !Number.isFinite(dailyWage) || dailyWage < 0) return;
    entries.push({ date, dailyWage: roundMoney(dailyWage) });
  });
  return normalizeWageHistory({ wageHistory: entries });
}

function buildUpdatedWageHistory(existing, { dailyWage, joinDate, effectiveDate, typedHistory }) {
  const baseWorker = existing || { dailyWage, joinDate };
  const historyMap = new Map();
  normalizeWageHistory(baseWorker).forEach((entry) => historyMap.set(entry.date, entry.dailyWage));

  if (!historyMap.size && existing && Number(existing.dailyWage || 0)) {
    const seedDate = normalizeDateValue(existing.joinDate || existing.createdAt?.slice(0, 10) || joinDate || effectiveDate) || todayISO();
    historyMap.set(seedDate, roundMoney(existing.dailyWage || 0));
  }

  typedHistory.forEach((entry) => {
    const month = monthFromDate(entry.date);
    if (month) removeWageMonthFromMap(historyMap, month);
    historyMap.set(entry.date, entry.dailyWage);
  });

  const sourceDate = normalizeDateValue(effectiveDate || joinDate) || todayISO();
  const date = `${monthFromDate(sourceDate)}-01`;
  if (Number.isFinite(dailyWage) && dailyWage >= 0) {
    removeWageMonthFromMap(historyMap, monthFromDate(date));
    historyMap.set(date, roundMoney(dailyWage));
  }

  if (!historyMap.size && Number.isFinite(dailyWage) && dailyWage >= 0) {
    historyMap.set(normalizeDateValue(joinDate) || todayISO(), roundMoney(dailyWage));
  }

  return Array.from(historyMap, ([date, dailyWage]) => ({ date, dailyWage }))
    .filter((entry) => entry.date && Number.isFinite(entry.dailyWage))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function readWorkerWageHistoryEditor() {
  try {
    const value = $("#workerWageHistoryData")?.value || "[]";
    const entries = JSON.parse(value);
    return normalizeMonthlyWageHistory({ wageHistory: Array.isArray(entries) ? entries : [] });
  } catch {
    return [];
  }
}

function setWorkerWageHistoryEditor(entries) {
  const history = normalizeMonthlyWageHistory({ wageHistory: entries || [] });
  if ($("#workerWageHistoryData")) $("#workerWageHistoryData").value = JSON.stringify(history);
  const list = $("#workerWageHistoryList");
  if (!list) return;
  list.innerHTML = history.length
    ? history.map((entry) => `
      <div class="wage-rate-row">
        <div>
          <strong>${escapeHTML(monthFromDate(entry.date))}</strong>
          <span>${money(entry.dailyWage)} ${t("effectiveFrom")} ${escapeHTML(entry.date)}</span>
        </div>
        <button type="button" class="mini-button" data-remove-worker-wage-rate="${escapeHTML(entry.date)}">${t("removeWageRate")}</button>
      </div>
    `).join("")
    : `<p class="empty-inline">${t("noWageRates")}</p>`;
}

function addWorkerWageRateFromForm() {
  const month = $("#workerWageMonth")?.value || monthISO();
  const dailyWage = Number($("#workerMonthlyWage")?.value || $("#workerDailyWage")?.value || 0);
  if (!month || !Number.isFinite(dailyWage) || dailyWage <= 0) {
    toast(t("requiredFields"));
    return;
  }
  const date = `${month}-01`;
  const historyMap = new Map(readWorkerWageHistoryEditor().map((entry) => [entry.date, entry.dailyWage]));
  removeWageMonthFromMap(historyMap, month);
  historyMap.set(date, roundMoney(dailyWage));
  const history = Array.from(historyMap, ([date, dailyWage]) => ({ date, dailyWage }));
  setWorkerWageHistoryEditor(history);
  $("#workerWageEffectiveDate").value = date;
  $("#workerDailyWage").value = dailyWage;
  toast(t("wageRateSaved"));
}

function removeWorkerWageRate(date) {
  const history = readWorkerWageHistoryEditor().filter((entry) => entry.date !== date);
  setWorkerWageHistoryEditor(history);
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
  return cachedCalculation(cacheKey("paymentLedgerTotal", workerId, start, end), () => roundMoney(paymentLedgerEntries()
    .filter((payment) => payment.workerId === workerId && paymentAppliesToRange(payment, start, end))
    .reduce((sum, payment) => sum + Number(payment.amount || 0), 0)));
}

function rangesOverlap(aStart, aEnd, bStart, bEnd) {
  return String(aStart || "") <= String(bEnd || "") && String(aEnd || "") >= String(bStart || "");
}

function paymentAppliesToRange(payment, start, end) {
  const hasAssignedPeriod = Boolean(payment.start || payment.end);
  const paymentStart = payment.start || payment.date || start;
  const paymentEnd = payment.end || payment.date || paymentStart;
  if (hasAssignedPeriod) {
    return String(paymentStart) >= String(start) && String(paymentEnd) <= String(end);
  }
  return String(payment.date || "") >= String(start) && String(payment.date || "") <= String(end);
}

function workerPaymentHistory(workerId, start, end) {
  return paymentLedgerEntries()
    .filter((payment) => payment.workerId === workerId && paymentAppliesToRange(payment, start, end))
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")) || String(b.updatedAt || "").localeCompare(String(a.updatedAt || "")));
}

function workerAdvanceAmount(worker) {
  return workerAdvanceAmountUntil(worker, "9999-12-31");
}

function workerOpeningAdvance(worker) {
  return roundMoney(Math.max(0, Number(worker?.advanceBalance ?? worker?.balance ?? worker?.openingBalance ?? 0)));
}

function workerAdvanceAmountUntil(worker, end = todayISO()) {
  return cachedCalculation(cacheKey("workerAdvanceAmountUntil", worker?.id, end, worker?.advanceBalance, worker?.balance, worker?.openingBalance), () => {
    const opening = workerOpeningAdvance(worker);
    const entries = workerAdvanceEntries(worker?.id).filter((entry) => String(entry.date || "") <= String(end || todayISO()));
    return roundMoney(opening + entries.reduce((sum, entry) => sum + Number(entry.amount || 0), 0));
  });
}

function workerAdvanceEntries(workerId) {
  if (!workerId) return [];
  return cachedCalculation(cacheKey("workerAdvanceEntries", workerId), () => (app.workerAdvances || [])
    .filter((entry) => entry.workerId === workerId)
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")) || String(b.createdAt || "").localeCompare(String(a.createdAt || ""))));
}

function previousISODate(date) {
  const value = dateFromISO(date);
  value.setDate(value.getDate() - 1);
  return localDateISO(value);
}

function workerGrossWageUntil(workerId, end) {
  if (!workerId || !end || end < "2000-01-01") return 0;
  return cachedCalculation(cacheKey("workerGrossWageUntil", workerId, end), () => {
    const row = summarizeRecords(recordsForRange("2000-01-01", end, [workerId], "all"))[0];
    return roundMoney(row?.wage || 0);
  });
}

function workerAdvanceUsedUntil(worker, end) {
  return cachedCalculation(cacheKey("workerAdvanceUsedUntil", worker?.id, end), () => roundMoney(Math.min(workerAdvanceAmountUntil(worker, end), workerGrossWageUntil(worker?.id, end))));
}

function rowAdvanceDeduction(row, start, end) {
  if (!row?.worker?.id || !start || !end) return 0;
  return cachedCalculation(cacheKey("rowAdvanceDeduction", row.worker.id, start, end, row.wage), () => {
    const usedThroughEnd = workerAdvanceUsedUntil(row.worker, end);
    const usedBeforeStart = workerAdvanceUsedUntil(row.worker, previousISODate(start));
    return roundMoney(Math.min(Number(row.wage || 0), Math.max(0, usedThroughEnd - usedBeforeStart)));
  });
}

function rowFinalPayable(row, start, end) {
  return cachedCalculation(cacheKey("rowFinalPayable", row.worker?.id, start, end, row.wage), () => roundMoney(Math.max(0, Number(row.wage || 0) - rowAdvanceDeduction(row, start, end))));
}

function workerRemainingAdvance(worker, end = todayISO()) {
  return cachedCalculation(cacheKey("workerRemainingAdvance", worker?.id, end), () => roundMoney(Math.max(0, workerAdvanceAmountUntil(worker, end) - workerAdvanceUsedUntil(worker, end))));
}

function rowPaidAmount(row, start, end) {
  return paymentLedgerTotal(row.worker.id, start, end);
}

function rowUnpaidAmount(row, start, end) {
  return roundMoney(Math.max(0, rowFinalPayable(row, start, end) - rowPaidAmount(row, start, end)));
}

function rowPaymentDeducted(row, start, end) {
  return roundMoney(Math.min(rowPaidAmount(row, start, end), rowFinalPayable(row, start, end)));
}

function rowWorkerBalance(row, start, end) {
  return rowUnpaidAmount(row, start, end);
}

function rowExtraPaidBalance(row, start, end) {
  return roundMoney(Math.max(0, rowPaidAmount(row, start, end) - rowFinalPayable(row, start, end)));
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
  const advance = rowAdvanceDeduction(row, start, end);
  const finalPayable = rowFinalPayable(row, start, end);
  const paymentDeducted = rowPaymentDeducted(row, start, end);
  const extraPaid = rowExtraPaidBalance(row, start, end);
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
    `${t("grossPayable")}: ${money(row.wage || 0)}`,
    `${t("advanceDeducted")}: ${money(advance)}`,
    `${t("payableAfterAdvance")}: ${money(finalPayable)}`,
    `${t("paymentDeducted")}: ${money(paymentDeducted)}`,
    `${t("workerBalance")}: ${money(unpaid)}`,
    `${t("extraPaidBalance")}: ${money(extraPaid)}`,
    "",
    "Thank you.",
  ].join("\n");
}

function openWhatsAppReport(workerId, start, end, title) {
  return withLanguage(reportLanguage(), () => {
  const type = $("#reportType").value;
  const month = $("#reportMonth").value || monthISO();
  const rows = type === "monthly" ? monthSummary(month, workerId, selectedReportShift()) : summarizeRecords(recordsForRange(start, end, workerId, selectedReportShift()));
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
      clearCalculationCache();
      const cleaned = purgeWorkersByExactName("Ayoub Rahman CZN 1");
      app.storageMode = "cloud";
      restoreSimpleLogin();
      resetHistory();
      if (cleaned) await saveData(false);
      return;
    }
    if (error) toast(error.message);
  }

  const saved = getBrowserBackup();
  if (saved) {
    try {
      Object.assign(app, JSON.parse(saved));
      normalizeAppCollections();
      clearCalculationCache();
      const cleaned = purgeWorkersByExactName("Ayoub Rahman CZN 1");
      app.storageMode = supabaseClient ? "login required" : "local";
      resetHistory();
      if (cleaned) await saveData(false);
      return;
    } catch {
      removeBrowserBackup();
    }
  }

  app.workers = [];
  app.payments = {};
  app.expenses = [];
  app.projectBudgets = [];
  app.supplierEntries = [];
  app.supplierPayments = [];
  app.workerAdvances = [];
  app.logs = [];
  resetHistory();
  saveData(false);
}

function cloudSaveAllowed() {
  return Boolean(supabaseClient && app.user && app.profile?.active && ["admin", "manager"].includes(app.profile.role));
}

function persistentPayload({ includeDailyBackups = false } = {}) {
  return {
    workers: app.workers,
    attendance: app.attendance,
    payments: app.payments,
    expenses: app.expenses,
    projectBudgets: app.projectBudgets,
    supplierEntries: app.supplierEntries,
    supplierPayments: app.supplierPayments,
    workerAdvances: app.workerAdvances,
    payrollLocks: app.payrollLocks,
    payrollApprovals: app.payrollApprovals,
    dailyBackups: includeDailyBackups ? app.dailyBackups : {},
    logs: (app.logs || []).slice(0, 300),
    lastSaved: app.lastSaved,
  };
}

function scheduleRenderAll() {
  if (renderAllQueued) return;
  renderAllQueued = true;
  window.requestAnimationFrame(() => {
    renderAllQueued = false;
    renderAll();
  });
}

async function flushCloudSave(show = false) {
  if (!cloudSaveAllowed()) {
    if (show) toast(supabaseClient ? t("savedLocalLogin") : t("savedLocal"));
    return;
  }
  if (cloudSaveInFlight) {
    cloudSaveQueued = true;
    pendingSaveToast ||= show;
    return;
  }
  cloudSaveInFlight = true;
  try {
    const { error } = await supabaseClient
      .from("app_data")
      .upsert({ id: "main", data: persistentPayload(), updated_by: app.user.id || null, updated_at: new Date().toISOString() });
    if (error) {
      app.lastCloudSaveError = `${new Date().toLocaleString()}: ${error.message}`;
      app.storageMode = "cloud save failed";
      setBrowserBackup(true);
      toast(`${t("cloudSaveFailed")}: ${error.message}`);
    } else {
      app.lastCloudSaveError = "";
      app.storageMode = "cloud";
      if (show || pendingSaveToast) toast(t("savedOnline"));
    }
  } finally {
    cloudSaveInFlight = false;
    const shouldRunAgain = cloudSaveQueued;
    const shouldToast = pendingSaveToast;
    cloudSaveQueued = false;
    pendingSaveToast = false;
    if (shouldRunAgain) {
      window.setTimeout(() => flushCloudSave(shouldToast), 250);
    } else {
      scheduleRenderAll();
    }
  }
}

function scheduleCloudSave(show = false) {
  pendingSaveToast ||= show;
  if (cloudSaveTimer) window.clearTimeout(cloudSaveTimer);
  cloudSaveTimer = window.setTimeout(() => {
    cloudSaveTimer = null;
    flushCloudSave(pendingSaveToast);
  }, 700);
}

async function saveData(show = true) {
  clearCalculationCache();
  createDailyBackup();
  recordHistory();
  app.lastSaved = new Date().toISOString();
  setBrowserBackup();

  if (cloudSaveAllowed()) {
    scheduleCloudSave(show);
  } else if (show) {
    toast(supabaseClient ? t("savedLocalLogin") : t("savedLocal"));
  }

  scheduleRenderAll();
}

function getBrowserBackup() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function setBrowserBackup(forceRolling = false) {
  try {
    const payload = {
      ...persistentPayload({ includeDailyBackups: true }),
      logs: app.logs,
      lastCloudSaveError: app.lastCloudSaveError,
    };
    const serialized = JSON.stringify(payload);
    localStorage.setItem(STORAGE_KEY, serialized);
    const now = Date.now();
    if (forceRolling || now - lastRollingBackupAt > 30000) {
      const rolling = JSON.parse(localStorage.getItem(ROLLING_BACKUPS_KEY) || "[]");
      rolling.unshift({ at: new Date().toISOString(), data: payload });
      localStorage.setItem(ROLLING_BACKUPS_KEY, JSON.stringify(rolling.slice(0, 5)));
      lastRollingBackupAt = now;
    }
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
  if ($("#budgetDate")) $("#budgetDate").value = today;
  if ($("#supplierDate")) $("#supplierDate").value = today;
  $("#reportDate").value = today;
  if ($("#reportStartDate")) $("#reportStartDate").value = today;
  if ($("#reportEndDate")) $("#reportEndDate").value = today;
  if ($("#dashboardPeriod")) $("#dashboardPeriod").value = "all";
  $("#dashboardMonth").value = month;
  if ($("#dashboardStartDate")) $("#dashboardStartDate").value = `${month}-01`;
  if ($("#dashboardEndDate")) $("#dashboardEndDate").value = today;
  $("#lockMonth").value = month;
  if ($("#approvalMonth")) $("#approvalMonth").value = month;
  $("#attendanceMonth").value = month;
  $("#expenseMonth").value = month;
  if ($("#budgetFromMonth")) $("#budgetFromMonth").value = month;
  if ($("#budgetToMonth")) $("#budgetToMonth").value = month;
  if ($("#supplierMonth")) $("#supplierMonth").value = month;
  $("#reportMonth").value = month;
  if ($("#reportShiftFilter")) $("#reportShiftFilter").value = "all";
  if ($("#bulkAttendanceRestType")) $("#bulkAttendanceRestType").value = "default";
  if ($("#bulkAttendanceRestMinutes")) $("#bulkAttendanceRestMinutes").value = 60;
  $("#workerJoinDate").value = today;
  $("#workerWageEffectiveDate").value = today;
}

function activeWorkers() {
  return app.workers.filter((worker) => worker.status === "active");
}

function workerJoinedByDate(worker, date = todayISO()) {
  return !worker?.joinDate || String(worker.joinDate) <= String(date);
}

function workerAvailableForAttendance(worker, date = todayISO()) {
  return worker?.status === "active" && workerJoinedByDate(worker, date);
}

function workerHasRecordInRange(worker, start, end, shift = "all") {
  return datesBetween(start, end).some((date) => {
    const record = getAttendanceRecord(date, worker.id);
    return Boolean(record.status && recordMatchesShift(record, shift));
  });
}

function selectedAttendanceWorkerIds() {
  const select = $("#attendanceWorkerSelect");
  if (!select) return [];
  return Array.from(select.selectedOptions).map((option) => option.value).filter(Boolean);
}

function selectedReportWorkerIds() {
  const select = $("#reportWorker");
  const mobileList = $("#reportWorkerMobileList");
  if (mobileList && window.matchMedia("(max-width: 700px)").matches) {
    const values = Array.from(mobileList.querySelectorAll("input[type='checkbox']:checked"))
      .map((input) => input.value)
      .filter(Boolean);
    if (!values.length || values.includes("all")) return ["all"];
    return values;
  }
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
  const checkDates = dates.length ? dates : [$("#attendanceDate")?.value || todayISO()];
  const workers = activeWorkers().filter((worker) => checkDates.some((date) => workerAvailableForAttendance(worker, date)));
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
  const workers = activeWorkers()
    .filter((worker) => workerAvailableForAttendance(worker, date))
    .filter((worker) => selectedAttendanceShift() === "all" || workerAssignedShift(worker, date) === selectedAttendanceShift());
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
  const workers = activeWorkers()
    .filter((worker) => workerAvailableForAttendance(worker, date))
    .filter((worker) => shiftFilter === "all" || workerAssignedShift(worker, date) === shiftFilter);
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
  if (!record) return { status: "", shift: "day", inTime: "", outTime: "", restBreakType: "default", restMinutes: 60, overtimeHours: "", foodDeduction: 0, paidAmount: 0 };
  if (typeof record === "string") return { status: record, shift: "day", inTime: "", outTime: "", restBreakType: "default", restMinutes: 60, overtimeHours: "", foodDeduction: 0, paidAmount: 0 };
  const overtimeHours = record.overtimeHours === "" || record.overtimeHours === null || record.overtimeHours === undefined
    ? ""
    : Number(record.overtimeHours || 0);
  const restBreakType = ["none", "custom"].includes(record.restBreakType) ? record.restBreakType : "default";
  const restMinutes = restBreakType === "none"
    ? 0
    : restBreakType === "custom"
      ? Math.max(0, Number(record.restMinutes ?? record.restBreakMinutes ?? 0))
      : 60;
  return {
    status: record.status || "",
    shift: record.shift === "night" ? "night" : "day",
    inTime: record.inTime || "",
    outTime: record.outTime || "",
    restBreakType,
    restMinutes,
    overtimeHours,
    foodDeduction: Number(record.foodDeduction || 0),
    paidAmount: Number(record.paidAmount || 0),
  };
}

function restBreakLabel(record) {
  const item = normalizeAttendanceRecord(record);
  if (item.restBreakType === "none") return t("noRest");
  if (item.restBreakType === "custom") return `${t("customRest")}: ${item.restMinutes} min`;
  return t("defaultRest");
}

function shiftFromInTime(inTime, fallback = "day") {
  if (!inTime) return fallback === "night" ? "night" : "day";
  const [hour, minute] = inTime.split(":").map(Number);
  if (!Number.isFinite(hour) || !Number.isFinite(minute)) return fallback === "night" ? "night" : "day";
  return (hour * 60 + minute) >= (15 * 60) ? "night" : "day";
}

function setAttendance(date, workerId, status, autoTime = true) {
  if (!canChangePayrollDate(date, "Attendance status")) return;
  app.attendance[date] ||= {};
  const current = getAttendanceRecord(date, workerId);
  const worker = app.workers.find((item) => item.id === workerId);
  if (status && worker && !workerAvailableForAttendance(worker, date)) {
    toast(t("noActiveWorkers"));
    if (Object.keys(app.attendance[date]).length === 0) delete app.attendance[date];
    return;
  }
  if (status) {
    const now = autoTime ? currentTime() : "";
    app.attendance[date][workerId] = {
      ...current,
      status,
      shift: ["present", "halfday"].includes(status) ? shiftFromInTime(current.inTime || now, selectedAttendanceShift() === "all" ? (current.shift || "day") : selectedAttendanceShift()) : "day",
      inTime: ["present", "halfday"].includes(status) ? (current.inTime || now) : "",
      outTime: ["present", "halfday"].includes(status) ? current.outTime : "",
      restBreakType: ["present", "halfday"].includes(status) ? current.restBreakType : "default",
      restMinutes: ["present", "halfday"].includes(status) ? current.restMinutes : 60,
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
  const isWorkingStatus = ["present", "halfday"].includes(status);
  const selectedShift = $("#bulkAttendanceShift")?.value === "night" ? "night" : "day";
  const inTime = $("#bulkAttendanceIn")?.value || "";
  const shift = isWorkingStatus && inTime ? shiftFromInTime(inTime, selectedShift) : selectedShift;
  const outTime = $("#bulkAttendanceOut")?.value || "";
  const restBreakType = ["none", "custom"].includes($("#bulkAttendanceRestType")?.value) ? $("#bulkAttendanceRestType").value : "default";
  const restMinutes = restBreakType === "none" ? 0 : restBreakType === "custom" ? Math.max(0, Number($("#bulkAttendanceRestMinutes")?.value || 0)) : 60;

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
      restBreakType: isWorkingStatus ? restBreakType : "default",
      restMinutes: isWorkingStatus ? restMinutes : 60,
      overtimeHours: isWorkingStatus ? current.overtimeHours : "",
      foodDeduction: isWorkingStatus ? current.foodDeduction : 0,
      paidAmount: isWorkingStatus ? current.paidAmount : 0,
    };
  });
  if (Object.keys(app.attendance[date]).length === 0) delete app.attendance[date];
  addLog("Bulk attendance changed", `${workerIds.length} workers · ${date} · ${statusLabel(status)} · ${inTime || "-"} / ${outTime || "-"} · ${restBreakType}:${restMinutes}m`);
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
  if (field === "inTime") app.attendance[date][workerId].shift = shiftFromInTime(value, current.shift);
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
  if (!canChangePayrollDate(date, "Attendance number")) return;
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

function setAttendanceRestBreak(date, workerId, field, value) {
  if (!canChangePayrollDate(date, "Attendance rest break")) return;
  app.attendance[date] ||= {};
  const current = getAttendanceRecord(date, workerId);
  const next = { ...current, status: current.status || "" };
  if (field === "restBreakType") {
    next.restBreakType = ["none", "custom"].includes(value) ? value : "default";
    next.restMinutes = next.restBreakType === "none" ? 0 : next.restBreakType === "default" ? 60 : current.restMinutes;
  } else {
    next.restBreakType = current.restBreakType === "custom" ? "custom" : current.restBreakType;
    next.restMinutes = Math.max(0, Number(value || 0));
  }
  app.attendance[date][workerId] = next;
  const worker = app.workers.find((item) => item.id === workerId);
  addLog("Attendance rest break changed", `${worker?.name || workerId} · ${date} · ${next.restBreakType}: ${next.restMinutes}m`);
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
  if (!item.inTime || !item.outTime) return { total: 0, rest: item.restMinutes / 60, actual: 0, normal: 0, overtime: manualOvertime ?? 0, autoOvertime: 0 };
  const [inHour, inMinute] = item.inTime.split(":").map(Number);
  const [outHour, outMinute] = item.outTime.split(":").map(Number);
  let start = inHour * 60 + inMinute;
  let end = outHour * 60 + outMinute;
  if (end < start) end += 24 * 60;
  const total = Math.max(0, (end - start) / 60);
  const rest = Math.min(total, Math.max(0, item.restMinutes / 60));
  const actual = Math.max(0, total - rest);
  const normal = Math.min(actual, STANDARD_HOURS);
  const autoOvertime = Math.max(0, actual - STANDARD_HOURS);
  return {
    total,
    rest,
    actual,
    normal,
    overtime: manualOvertime ?? autoOvertime,
    autoOvertime,
  };
}

function attendanceBaseWage(worker, status, date = todayISO()) {
  const daily = wageForDate(worker, date);
  if (status === "present") return roundMoney(daily);
  if (status === "halfday") return roundMoney(daily / 2);
  return 0;
}

function attendanceOvertimeWage(worker, overtimeHours, date = todayISO(), status = "present") {
  if (status !== "present") return 0;
  const hourlyRate = wageForDate(worker, date) / STANDARD_HOURS;
  return roundMoney(overtimeHours * hourlyRate);
}

function foodDeduction(record, status) {
  if (!["present", "halfday"].includes(status)) return 0;
  return roundMoney(normalizeAttendanceRecord(record).foodDeduction || 0);
}

function attendanceWage(worker, record, overtimeHours = 0, date = todayISO()) {
  const status = normalizeAttendanceRecord(record).status;
  return roundMoney(Math.max(0, attendanceBaseWage(worker, status, date) + attendanceOvertimeWage(worker, overtimeHours, date, status) - foodDeduction(record, status)));
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
    const advance = rowAdvanceDeduction(row, start, end);
    const finalPayable = rowFinalPayable(row, start, end);
    const paid = rowPaidAmount(row, start, end);
    const paymentDeducted = Math.min(paid, finalPayable);
    const balance = Math.max(0, finalPayable - paid);
    const extraPaid = Math.max(0, paid - finalPayable);
    acc.gross = roundMoney(acc.gross + Number(row.wage || 0));
    acc.advance = roundMoney(acc.advance + advance);
    acc.finalPayable = roundMoney(acc.finalPayable + finalPayable);
    acc.paid = roundMoney(acc.paid + paid);
    acc.paymentDeducted = roundMoney(acc.paymentDeducted + paymentDeducted);
    acc.extraPaid = roundMoney(acc.extraPaid + extraPaid);
    acc.pending = roundMoney(acc.pending + balance);
    acc.balance = acc.pending;
    return acc;
  }, { gross: 0, advance: 0, finalPayable: 0, paid: 0, paymentDeducted: 0, extraPaid: 0, pending: 0, balance: 0 });
}

function currentReportPeriod() {
  const type = $("#reportType")?.value || "monthly";
  const month = $("#reportMonth")?.value || monthISO();
  const reportDate = $("#reportDate")?.value || todayISO();
  const customStart = $("#reportStartDate")?.value || reportDate;
  const customEnd = $("#reportEndDate")?.value || customStart;
  let start = reportDate;
  let end = reportDate;
  let title = `${t("dailyReport")} · ${reportDate}`;
  if (type === "weekly") {
    const date = dateFromISO(reportDate);
    const day = date.getDay();
    date.setDate(date.getDate() - day);
    start = localDateISO(date);
    date.setDate(date.getDate() + 6);
    end = localDateISO(date);
    title = `${t("weeklyReport")} · ${start} ${t("to")} ${end}`;
  }
  if (type === "monthly") {
    const dates = daysInMonth(month);
    start = dates[0];
    end = dates[dates.length - 1];
    title = `${t("monthlyReport")} · ${month}`;
  }
  if (type === "custom") {
    start = customStart <= customEnd ? customStart : customEnd;
    end = customStart <= customEnd ? customEnd : customStart;
    title = `${t("customRange")} · ${start} ${t("to")} ${end}`;
  }
  return { type, month, reportDate, start, end, title };
}

function supplierEntriesForRange(start, end, supplierName = "") {
  const name = String(supplierName || "").trim().toLowerCase();
  return (app.supplierEntries || []).filter((entry) => {
    if (!entry.date || entry.date < start || entry.date > end) return false;
    if (name && String(entry.supplierName || "").trim().toLowerCase() !== name) return false;
    return true;
  });
}

function renderPaymentHistory(history = [], options = {}) {
  if (!history.length) return `<p class="help-text">${t("noPaymentHistory")}</p>`;
  const editable = Boolean(options.editable);
  const type = options.type || "worker";
  return `<div class="payment-history-list">${history.map((payment) => `
    <div>
      <span class="payment-history-main">
        <strong>${money(payment.amount)}</strong>
        <span>${escapeHTML(payment.date || "-")} · ${escapeHTML(payment.method || "cash")} · ${escapeHTML(payment.note || "-")}</span>
      </span>
      ${editable ? `
        <span class="payment-history-actions">
          <button type="button" class="ghost mini-button" data-edit-payment-entry="${escapeHTML(payment.id)}" data-payment-entry-type="${escapeHTML(type)}">${t("editPayment")}</button>
          <button type="button" class="ghost danger mini-button" data-remove-payment-entry="${escapeHTML(payment.id)}" data-payment-entry-type="${escapeHTML(type)}">${t("remove")}</button>
        </span>
      ` : ""}
    </div>
  `).join("")}</div>`;
}

function renderPaymentEntryPanel() {
  const typeSelect = $("#paymentEntryType");
  const personSelect = $("#paymentEntryPerson");
  const summary = $("#paymentEntrySummary");
  if (!typeSelect || !personSelect || !summary) return;
  const type = typeSelect.value || "worker";
  const previousValue = personSelect.value;
  const reportWorkerOptions = Array.from($("#reportWorker")?.options || [])
    .filter((option) => option.value && option.value !== "all")
    .map((option) => ({ value: option.value, label: option.textContent || option.value }));
  const workerOptions = app.workers.length
    ? app.workers
      .slice()
      .sort((a, b) => Number(a.order ?? 0) - Number(b.order ?? 0) || displayWorkerName(a).localeCompare(displayWorkerName(b)))
      .map((worker) => ({
        value: worker.id,
        label: `${displayWorkerName(worker)}${worker.status === "inactive" ? ` (${t("inactive")})` : ""}`,
      }))
    : reportWorkerOptions;
  const options = type === "supplier"
    ? supplierNamesFromEntries().map((name) => ({ value: name, label: name }))
    : workerOptions;
  personSelect.innerHTML = options.map((option) => `<option value="${escapeHTML(option.value)}">${escapeHTML(option.label)}</option>`).join("");
  if (options.some((option) => option.value === previousValue)) personSelect.value = previousValue;
  if (!personSelect.value && options[0]) personSelect.value = options[0].value;
  const paymentDate = $("#paymentEntryDate");
  if (paymentDate && !paymentDate.value) paymentDate.value = $("#todayInput")?.value || todayISO();
  const { start, end, month } = currentReportPeriod();
  let total = 0;
  let paid = 0;
  let history = [];
  if (type === "supplier") {
    const supplierName = personSelect.value;
    const entries = supplierEntriesForRange(start, end, supplierName);
    const totals = supplierTotals(entries, start, end);
    total = totals.total;
    paid = totals.paid;
    history = supplierPaymentHistory(supplierName, start, end);
  } else {
    const worker = app.workers.find((item) => item.id === personSelect.value);
    if (worker) {
      const reportShift = selectedReportShift();
      const rows = currentReportPeriod().type === "monthly"
        ? monthSummary(month, [worker.id], reportShift)
        : summarizeRecords(recordsForRange(start, end, [worker.id], reportShift));
      const row = rows[0];
      total = row ? rowFinalPayable(row, start, end) : 0;
      paid = paymentLedgerTotal(worker.id, start, end);
      history = workerPaymentHistory(worker.id, start, end);
    }
  }
  const paymentDeducted = roundMoney(Math.min(paid, total));
  const unpaid = roundMoney(Math.max(0, total - paid));
  const extraPaid = roundMoney(Math.max(0, paid - total));
  const selectedWorker = type === "worker" ? app.workers.find((item) => item.id === personSelect.value) : null;
  const remainingAdvance = selectedWorker ? workerRemainingAdvance(selectedWorker, end) : 0;
  if (!options.length) {
    summary.innerHTML = `<div><span>${t("paymentFor")}</span><strong>${type === "supplier" ? t("noSupplierEntries") : t("noPaymentTarget")}</strong></div>`;
    return;
  }
  summary.innerHTML = `
    <div class="wide payment-period-note">
      <span>${t("balancePeriod")}</span>
      <strong>${start} ${t("to")} ${end}</strong>
      <p>${t("balancePeriodHelp")}</p>
    </div>
    <div><span>${t("payableAfterAdvance")}</span><strong>${money(total)}</strong></div>
    <div><span>${t("paymentDeducted")}</span><strong>${money(paymentDeducted)}</strong></div>
    <div><span>${t("workerBalance")}</span><strong>${money(unpaid)}</strong></div>
    <div><span>${t("extraPaidBalance")}</span><strong>${money(extraPaid)}</strong></div>
    ${selectedWorker ? `<div><span>${t("remainingAdvanceBalance")}</span><strong>${money(remainingAdvance)}</strong></div>` : ""}
    <div class="wide"><span>${t("paymentHistory")}</span>${renderPaymentHistory(history, { editable: true, type })}</div>
  `;
}

function saveSupplierPayment(supplierName, start, end, paidAmount, paymentDate, method, note) {
  const name = String(supplierName || "").trim();
  const amount = roundMoney(paidAmount || 0);
  const date = paymentDate || end || todayISO();
  if (!name) {
    toast(t("noPaymentTarget"));
    return;
  }
  if (amount <= 0) {
    toast(t("addPaymentAmountFirst"));
    return;
  }
  if (!canChangePayrollDate(date, "Supplier payment")) return;
  app.supplierPayments ||= [];
  app.supplierPayments.push({
    id: `supplier_payment__${date}__${Date.now()}__${Math.random().toString(36).slice(2, 8)}`,
    supplierName: name,
    date,
    start,
    end,
    amount,
    method: method || "cash",
    note: note || "",
    source: "supplier-payment",
    user: currentUserLabel(),
    updatedAt: new Date().toISOString(),
  });
  addLog("Supplier payment saved", `${name} · ${start} to ${end} · ${money(amount)}`);
  saveData();
  toast(t("paymentSaved"));
}

function addPaymentEntryFromPanel() {
  const type = $("#paymentEntryType")?.value || "worker";
  const person = $("#paymentEntryPerson")?.value || "";
  const amount = $("#paymentEntryAmount")?.value || 0;
  const date = $("#paymentEntryDate")?.value || todayISO();
  const method = $("#paymentEntryMethod")?.value || "cash";
  const note = $("#paymentEntryNote")?.value || "";
  const { start, end } = currentReportPeriod();
  if (type === "supplier") saveSupplierPayment(person, start, end, amount, date, method, note);
  else savePayment(person, start, end, amount, date, method, note);
  if ($("#paymentEntryAmount")) $("#paymentEntryAmount").value = "";
  if ($("#paymentEntryNote")) $("#paymentEntryNote").value = "";
  renderAll();
}

function savePayment(workerId, start, end, paidAmount, paymentDate, method, note) {
  if (!canChangePayrollDate(paymentDate || end, "Payment")) return;
  const worker = app.workers.find((item) => item.id === workerId);
  const date = paymentDate || end || todayISO();
  normalizePaymentLedger();
  const amount = Math.max(0, Number(paidAmount || 0));
  if (amount <= 0) {
    toast(t("addPaymentAmountFirst"));
    return;
  }
  if (amount > 0) {
    app.payments.push({
      id: `payment__${workerId}__${date}__${Date.now()}__${Math.random().toString(36).slice(2, 8)}`,
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

function paymentEntryList(type) {
  if (type === "supplier") {
    app.supplierPayments ||= [];
    return app.supplierPayments;
  }
  normalizePaymentLedger();
  app.payments ||= [];
  return app.payments;
}

function findPaymentEntry(type, id) {
  return paymentEntryList(type).find((payment) => payment.id === id);
}

function editPaymentEntry(type, id) {
  const payment = findPaymentEntry(type, id);
  if (!payment) return;
  const amountText = prompt(t("paidAmount"), String(roundMoney(payment.amount || 0)));
  if (amountText === null) return;
  const amount = roundMoney(amountText);
  if (amount <= 0) {
    toast(t("addPaymentAmountFirst"));
    return;
  }
  const date = prompt(t("paymentDate"), payment.date || todayISO());
  if (date === null) return;
  if (!canChangePayrollDate(date || payment.date || todayISO(), "Payment")) return;
  const method = prompt(t("paymentMethod"), payment.method || "cash");
  if (method === null) return;
  const note = prompt(t("paymentNote"), payment.note || "");
  if (note === null) return;
  payment.amount = amount;
  payment.date = date || payment.date || todayISO();
  payment.method = method || "cash";
  payment.note = note || "";
  payment.updatedAt = new Date().toISOString();
  payment.user = currentUserLabel();
  clearCalculationCache();
  addLog("Payment updated", `${type} · ${payment.date} · ${money(amount)}`);
  saveData();
  renderAll();
  toast(t("paymentUpdated"));
}

function removePaymentEntry(type, id) {
  const payment = findPaymentEntry(type, id);
  if (!payment) return;
  if (!confirm(`${t("remove")} ${money(payment.amount)}?`)) return;
  if (!canChangePayrollDate(payment.date || todayISO(), "Payment")) return;
  if (type === "supplier") {
    app.supplierPayments = (app.supplierPayments || []).filter((item) => item.id !== id);
  } else {
    normalizePaymentLedger();
    app.payments = (app.payments || []).filter((item) => item.id !== id);
  }
  clearCalculationCache();
  addLog("Payment removed", `${type} · ${payment.date || "-"} · ${money(payment.amount)}`);
  saveData();
  renderAll();
  toast(t("paymentRemoved"));
}

function saveWorkerAdvance(workerId, date, amount, note = "") {
  if (!canChangePayrollDate(date || todayISO(), "Worker advance")) return;
  const worker = app.workers.find((item) => item.id === workerId);
  const value = roundMoney(amount || 0);
  if (!worker || value <= 0) {
    toast(t("addPaymentAmountFirst"));
    return;
  }
  app.workerAdvances ||= [];
  app.workerAdvances.push({
    id: `advance__${workerId}__${date || todayISO()}__${Date.now()}__${Math.random().toString(36).slice(2, 8)}`,
    workerId,
    date: date || todayISO(),
    amount: value,
    note: note || "",
    source: "worker-advance",
    user: currentUserLabel(),
    createdAt: new Date().toISOString(),
  });
  addLog("Worker advance saved", `${worker.name} · ${date || todayISO()} · ${money(value)}`);
  saveData();
  toast(t("advanceSaved"));
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

function printableReportHtml(customReport = "", { includePrintActions = true } = {}) {
  const language = reportLanguage();
  const dir = language === "ps" ? "rtl" : "ltr";
  const logoUrl = new URL("ahmad-times-logo.png", window.location.href).href;
  const stampUrl = new URL("ahmad-times-stamp.png", window.location.href).href;
  const sourceReport = customReport || $("#reportOutput").innerHTML;
  const report = sourceReport
    .replace(/<div class="report-logo-fallback"[^>]*>.*?<\/div>/g, "")
    .replaceAll('src="ahmad-times-logo.png"', `src="${logoUrl}"`)
    .replaceAll("src='ahmad-times-logo.png'", `src='${logoUrl}'`)
    .replaceAll('src="ahmad-times-stamp.png"', `src="${stampUrl}"`);
  if (!report.trim()) {
    return "";
  }
  return `<!doctype html>
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
          .report-payment-history { margin: 14px 0; padding: 12px; border: 1px solid #d9eaf1; border-radius: 8px; background: #fbfdff; break-inside: avoid; }
          .report-payment-history h3 { margin: 0 0 10px; }
          .report-payment-worker { padding: 8px 0; border-bottom: 1px solid #e6edf5; }
          .report-payment-worker:last-child { border-bottom: 0; }
          .payment-history-list { display: grid; gap: 6px; margin-top: 6px; }
          .payment-history-list div { display: flex; justify-content: space-between; gap: 12px; padding: 7px 9px; border-radius: 8px; background: #f4f7fb; }
          .separate-worker-report { break-after: page; page-break-after: always; }
          .separate-worker-report:last-child { break-after: auto; page-break-after: auto; }
          .attendance-print-note { margin: 8px 0 10px; color: #667085; font-size: 11px; }
          .attendance-print-table { table-layout: fixed; width: 100%; font-size: 9px; }
          .attendance-print-table thead { display: table-header-group; }
          .attendance-print-table tfoot { display: table-footer-group; }
          .attendance-print-table tr { break-inside: avoid; page-break-inside: avoid; }
          .attendance-print-table th, .attendance-print-table td { padding: 4px 3px; text-align: center; white-space: normal; border: 1px solid #d9e0ea; }
          .attendance-print-table th:first-child, .attendance-print-table td:first-child { width: 150px; text-align: start; font-weight: 700; }
          .attendance-print-table .attendance-day-heading { font-size: 8px; line-height: 1.15; color: #425466; }
          .attendance-print-table .attendance-day-heading strong { display: block; color: #1d2433; font-size: 9px; }
          .attendance-print-table .attendance-day-heading span { display: block; color: #667085; font-size: 7px; }
          .attendance-print-table .attendance-total-col { width: 32px; font-weight: 700; background: #f4f7fb; }
          .attendance-print-table .attendance-overtime-col { width: 44px; font-weight: 800; background: #eef9fb; color: #087fae; }
          .attendance-day-cell { display: grid; justify-items: center; gap: 2px; min-height: 28px; }
          .attendance-mark { display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 5px; font-size: 9px; font-weight: 800; color: #fff; }
          .attendance-mark.present { background: #188a6a; }
          .attendance-mark.halfday { background: #b7791f; }
          .attendance-mark.absent { background: #c94040; }
          .attendance-mark.off { background: #526071; }
          .attendance-mark.empty, .attendance-mark.unavailable { color: #98a2b3; background: #f4f7fb; border: 1px dashed #d0d5dd; }
          .attendance-day-overtime { display: inline-block; max-width: 100%; padding: 1px 3px; border-radius: 999px; color: #087fae; background: #e7f8fd; font-size: 7px; font-weight: 800; line-height: 1.15; white-space: nowrap; }
          .attendance-worker-line { display: grid; gap: 2px; }
          .attendance-worker-line span { color: #667085; font-size: 8px; font-weight: 500; }
          .attendance-print-footer { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 8px; margin-top: 10px; }
          .attendance-print-footer div { padding: 8px; border-radius: 8px; background: #f4f7fb; }
          .attendance-print-footer span { display: block; color: #667085; font-size: 10px; font-weight: 700; text-transform: uppercase; }
          .attendance-print-footer strong { display: block; margin-top: 2px; font-size: 14px; }
          .attendance-overtime-details { margin-top: 14px; break-inside: avoid; page-break-inside: avoid; }
          .attendance-overtime-details h4 { margin: 0 0 8px; font-size: 14px; }
          .attendance-overtime-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
          .attendance-overtime-card { padding: 8px; border: 1px solid #d9e0ea; border-radius: 8px; background: #fbfdff; break-inside: avoid; page-break-inside: avoid; }
          .attendance-overtime-card strong { display: block; margin-bottom: 4px; font-size: 12px; }
          .attendance-overtime-card ul { margin: 0; padding-left: 18px; color: #344054; font-size: 10px; line-height: 1.35; }
          [dir="rtl"] .attendance-overtime-card ul { padding-right: 18px; padding-left: 0; }
          .attendance-overtime-total { margin-top: 5px; font-weight: 800; color: #087fae; font-size: 11px; }
          .panel, .report-panel { border: 0; box-shadow: none; background: #fff; }
          .payment-list, .report-controls { display: none; }
          .table-wrap { overflow: visible; max-width: 100%; }
          table { width: 100%; border-collapse: collapse; margin-top: 14px; font-size: 12px; }
          th, td { padding: 8px; border-bottom: 1px solid #d9e0ea; text-align: start; white-space: nowrap; }
          th { color: #667085; text-transform: uppercase; font-size: 11px; }
          @media (max-width: 700px) { body { padding: 12px; overflow-x: hidden; } .report-page { width: 100%; max-width: 100%; padding-bottom: 110px; } .report-brand { align-items: flex-start; } .report-brand img { width: 54px; height: 54px; } .report-brand strong { font-size: 17px; line-height: 1.15; overflow-wrap: anywhere; } .report-meta { flex-direction: column; gap: 4px; overflow-wrap: anywhere; } .summary-strip, .worker-report-grid { grid-template-columns: 1fr 1fr; } .worker-report-grid .wide { grid-column: 1 / -1; } .table-wrap { overflow-x: auto; overflow-y: hidden; -webkit-overflow-scrolling: touch; overscroll-behavior-inline: contain; } .table-wrap table { min-width: 760px; } .attendance-print-table { min-width: 980px; } .attendance-overtime-grid { grid-template-columns: 1fr; } .attendance-overtime-card, .attendance-overtime-card li, .payment-history-list div { overflow-wrap: anywhere; } .report-footer { align-items: flex-start; flex-direction: column; position: static; } }
          @media (max-width: 460px) { body { padding: 10px; } .report-brand { flex-wrap: wrap; } .summary-strip, .worker-report-grid, .attendance-print-footer { grid-template-columns: 1fr; } .print-actions { position: sticky; top: 0; z-index: 3; justify-content: stretch; padding: 8px 0; background: #fff; } .print-actions button { width: 100%; min-height: 46px; } .attendance-print-table { min-width: 1040px; } }
          @media print { @page { size: A4 landscape; margin: 8mm; } body { padding: 0; } .print-actions { display: none; } .report-page { max-width: none; min-height: auto; padding-bottom: 0; } .report-footer { position: static; right: auto; bottom: auto; left: auto; background: #fff; break-inside: avoid; page-break-inside: avoid; } .attendance-report-page { padding-bottom: 0; } .attendance-report-page .report-footer { margin-top: 16px; } .attendance-print-table { font-size: 8px; page-break-inside: auto; } .attendance-print-table thead { display: table-header-group; } .attendance-print-table tr { break-inside: avoid; page-break-inside: avoid; } .attendance-print-table th, .attendance-print-table td { padding: 3px 2px; } .attendance-print-table th:first-child, .attendance-print-table td:first-child { width: 132px; } .attendance-mark { width: 15px; height: 15px; font-size: 8px; } .attendance-day-overtime { font-size: 6px; padding: 1px 2px; } .attendance-print-footer, .attendance-overtime-details { break-inside: avoid; page-break-inside: avoid; } .attendance-overtime-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } .attendance-overtime-card { padding: 6px; } .attendance-overtime-card ul { font-size: 9px; } }
        </style>
      </head>
      <body>
        ${includePrintActions ? `<div class="print-actions">
          <button onclick="window.print()">Print / Save PDF</button>
        </div>` : ""}
        <main class="report-page">${report}</main>
      </body>
    </html>`;
}

function openPrintableReport(customReport = "") {
  if (!customReport) renderReport();
  const html = printableReportHtml(customReport);
  if (!html.trim()) {
    toast(t("emptyReport"));
    return;
  }
  downloadFile(`ahmad-times-report-${todayISO()}.html`, html, "text/html");
  toast(t("reportDownloaded"));
}

function printReportOnly() {
  openPrintableReport();
}

function openPdfReport() {
  openPrintableReport();
}

function printSeparateWorkerReports() {
  renderReport();
  const workerSelect = $("#reportWorker");
  if (!workerSelect) return;
  const originalSelected = Array.from(workerSelect.options).map((option) => ({ value: option.value, selected: option.selected }));
  const selectedIds = selectedReportWorkerIds();
  const workerOptions = Array.from(workerSelect.options).filter((option) => option.value && option.value !== "all");
  const ids = selectedIds.includes("all")
    ? workerOptions.map((option) => option.value)
    : selectedIds.filter((id) => workerOptions.some((option) => option.value === id));
  if (!ids.length) {
    toast(t("noRecordsReport"));
    return;
  }
  const reports = ids.map((workerId) => {
    Array.from(workerSelect.options).forEach((option) => {
      option.selected = option.value === workerId;
    });
    renderReport();
    return `<section class="separate-worker-report">${$("#reportOutput").innerHTML}</section>`;
  });
  Array.from(workerSelect.options).forEach((option) => {
    const original = originalSelected.find((item) => item.value === option.value);
    option.selected = Boolean(original?.selected);
  });
  renderReport();
  openPrintableReport(reports.join(""));
  addLog("Separate worker reports printed", `${ids.length} workers`);
  saveData(false);
}

function selectedWorkerReportIdsForSeparateFiles() {
  renderReport();
  const workerSelect = $("#reportWorker");
  if (!workerSelect) return [];
  const selectedIds = selectedReportWorkerIds();
  const workerOptions = Array.from(workerSelect.options).filter((option) => option.value && option.value !== "all");
  return selectedIds.includes("all")
    ? workerOptions.map((option) => option.value)
    : selectedIds.filter((id) => workerOptions.some((option) => option.value === id));
}

function workerReportFileName(worker, period) {
  const name = String(displayWorkerName(worker) || "worker")
    .replace(/[\\/:*?"<>|]+/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 80) || "worker";
  return `${name}-${period.start}-to-${period.end}.html`;
}

function workerReportHtmlFile(workerId) {
  const workerSelect = $("#reportWorker");
  Array.from(workerSelect.options).forEach((option) => {
    option.selected = option.value === workerId;
  });
  renderReport();
  return printableReportHtml($("#reportOutput").innerHTML, { includePrintActions: true });
}

function downloadSeparateWorkerReports() {
  const workerSelect = $("#reportWorker");
  if (!workerSelect) return;
  const originalSelected = Array.from(workerSelect.options).map((option) => ({ value: option.value, selected: option.selected }));
  const ids = selectedWorkerReportIdsForSeparateFiles();
  if (!ids.length) {
    toast(t("noRecordsReport"));
    return;
  }
  const period = currentReportPeriod();
  const files = ids.map((workerId) => {
    const worker = app.workers.find((item) => item.id === workerId);
    return {
      name: workerReportFileName(worker || { name: workerId }, period),
      content: workerReportHtmlFile(workerId),
    };
  }).filter((file) => file.content);
  Array.from(workerSelect.options).forEach((option) => {
    const original = originalSelected.find((item) => item.value === option.value);
    option.selected = Boolean(original?.selected);
  });
  renderReport();
  if (!files.length) {
    toast(t("emptyReport"));
    return;
  }
  downloadZip(`ahmad-times-worker-reports-${period.start}-to-${period.end}.zip`, files);
  addLog("Separate worker report files downloaded", `${files.length} workers`);
  saveData(false);
}

function monthlyAttendancePrintableWorkers(month, selection = ["all"], shift = "all") {
  const dates = daysInMonth(month);
  const workerSelection = Array.isArray(selection) ? selection : [selection];
  return app.workers.filter((worker) => {
    if (!workerMatchesSelection(worker, workerSelection)) return false;
    const hasRecord = dates.some((date) => {
      const record = getAttendanceRecord(date, worker.id);
      return record.status && recordMatchesShift(record, shift);
    });
    const canWorkInMonth = worker.status === "active"
      && dates.some((date) => workerJoinedByDate(worker, date))
      && (shift === "all" || dates.some((date) => workerAssignedShift(worker, date) === shift));
    return hasRecord || canWorkInMonth;
  });
}

function attendancePrintMark(worker, date, shift) {
  const record = getAttendanceRecord(date, worker.id);
  if (!workerAvailableForAttendance(worker, date)) {
    return { code: "-", status: "unavailable", label: t("notAvailable") };
  }
  if (!record.status || !recordMatchesShift(record, shift)) {
    return { code: "-", status: "empty", label: t("notMarked") };
  }
  return {
    code: { present: "P", halfday: "H", absent: "A", off: "O" }[record.status] || "-",
    status: record.status,
    label: statusLabel(record.status),
  };
}

function monthlyWorkerOvertimeDetails(worker, dates, shift) {
  return dates.map((date) => {
    const record = getAttendanceRecord(date, worker.id);
    if (record.status !== "present" || !recordMatchesShift(record, shift)) return null;
    const overtime = calculateHours(record).overtime || 0;
    if (overtime <= 0) return null;
    return { date, overtime };
  }).filter(Boolean);
}

function printableDateLabel(date) {
  const value = dateFromISO(date);
  if (Number.isNaN(value.getTime())) return date;
  return value.toLocaleDateString(app.language === "ps" ? "ps-AF" : "en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function printableDayName(date, style = "short") {
  const value = dateFromISO(date);
  if (Number.isNaN(value.getTime())) return "";
  return value.toLocaleDateString(app.language === "ps" ? "ps-AF" : "en-GB", { weekday: style });
}

function attendancePrintCell(worker, date, shift) {
  const mark = attendancePrintMark(worker, date, shift);
  const record = getAttendanceRecord(date, worker.id);
  const overtime = record.status === "present" && recordMatchesShift(record, shift)
    ? calculateHours(record).overtime || 0
    : 0;
  return `
    <td>
      <div class="attendance-day-cell">
        <span class="attendance-mark ${escapeHTML(mark.status)}" title="${escapeHTML(mark.label)}">${escapeHTML(mark.code)}</span>
        ${overtime > 0 ? `<span class="attendance-day-overtime">OT ${escapeHTML(formatHours(overtime))}</span>` : ""}
      </div>
    </td>
  `;
}

function monthlyAttendancePrintRow(worker, dates, shift, summaryRow = null) {
  const overtimeDetails = monthlyWorkerOvertimeDetails(worker, dates, shift);
  const overtimeTotal = Number(summaryRow?.overtime ?? overtimeDetails.reduce((sum, item) => sum + item.overtime, 0));
  const totals = dates.reduce((acc, date) => {
    const record = getAttendanceRecord(date, worker.id);
    if (!record.status || !recordMatchesShift(record, shift)) return acc;
    if (record.status === "present") acc.present += 1;
    if (record.status === "halfday") acc.halfday += 1;
    if (record.status === "absent") acc.absent += 1;
    if (record.status === "off") acc.off += 1;
    return acc;
  }, { present: 0, halfday: 0, absent: 0, off: 0 });
  return `
    <tr>
      <td>
        <div class="attendance-worker-line">
          <strong>${escapeHTML(displayWorkerName(worker))}</strong>
          <span>${escapeHTML(worker.role || t("roleWorker"))}</span>
        </div>
      </td>
      ${dates.map((date) => attendancePrintCell(worker, date, shift)).join("")}
      <td class="attendance-total-col">${totals.present}</td>
      <td class="attendance-total-col">${totals.halfday}</td>
      <td class="attendance-total-col">${totals.absent}</td>
      <td class="attendance-total-col">${totals.off}</td>
      <td class="attendance-overtime-col">${formatHours(overtimeTotal)}</td>
    </tr>
  `;
}

function monthlyAttendanceOvertimeDetailsHtml(workers, dates, shift, summaryRowsByWorker = new Map()) {
  const cards = workers.map((worker) => {
    const details = monthlyWorkerOvertimeDetails(worker, dates, shift);
    const total = Number(summaryRowsByWorker.get(worker.id)?.overtime ?? details.reduce((sum, item) => sum + item.overtime, 0));
    return `
      <div class="attendance-overtime-card">
        <strong>${escapeHTML(displayWorkerName(worker))}</strong>
        ${details.length ? `
          <ul>
            ${details.map((item) => `<li>${escapeHTML(printableDateLabel(item.date))} - ${escapeHTML(formatHours(item.overtime))} ${escapeHTML(t("overtime").toLowerCase())}</li>`).join("")}
          </ul>
        ` : `<p class="help-text">${formatHours(0)} ${escapeHTML(t("overtime").toLowerCase())}</p>`}
        <div class="attendance-overtime-total">${t("totalOvertime")}: ${formatHours(total)}</div>
      </div>
    `;
  }).join("");
  return `
    <section class="attendance-overtime-details">
      <h4>${t("overtimeDetails")}</h4>
      <div class="attendance-overtime-grid">${cards}</div>
    </section>
  `;
}

function monthlyAttendanceReportHtml({ allWorkers = false } = {}) {
  renderReport();
  const month = $("#reportMonth")?.value || monthISO();
  const dates = daysInMonth(month);
  const start = dates[0];
  const end = dates[dates.length - 1];
  const shift = selectedReportShift();
  const selectedIds = allWorkers ? ["all"] : selectedReportWorkerIds();
  const workers = monthlyAttendancePrintableWorkers(month, selectedIds, shift);
  if (!workers.length) return "";
  const summaryRowsByWorker = new Map(monthSummary(month, workers.map((worker) => worker.id), shift).map((row) => [row.worker.id, row]));
  const totals = workers.reduce((acc, worker) => {
    const summaryRow = summaryRowsByWorker.get(worker.id);
    acc.overtime += Number(summaryRow?.overtime || 0);
    dates.forEach((date) => {
      const record = getAttendanceRecord(date, worker.id);
      if (!record.status || !recordMatchesShift(record, shift)) return;
      if (record.status === "present") acc.present += 1;
      if (record.status === "halfday") acc.halfday += 1;
      if (record.status === "absent") acc.absent += 1;
      if (record.status === "off") acc.off += 1;
    });
    return acc;
  }, { present: 0, halfday: 0, absent: 0, off: 0, overtime: 0 });
  const subject = allWorkers || selectedIds.includes("all")
    ? t("companyWideReport")
    : workers.length === 1
      ? displayWorkerName(workers[0])
      : `${t("selectedWorkerReports")} (${workers.length})`;
  const shiftLabel = shift === "all" ? t("allShifts") : attendanceShiftLabel(shift);
  return `
    <section class="attendance-report-page">
      <div class="report-brand">
        <img src="ahmad-times-logo.png" alt="Ahmad Times logo">
        <div>
          <strong>Ahmad Times For Building Maintenance L.L.C</strong>
          <span>${t("monthlyAttendanceReport")}</span>
        </div>
      </div>
      <div class="report-meta">
        <span>${t("monthlyReport")} · ${month}</span>
        <span>${t("shift")}: ${shiftLabel}</span>
        <span>${t("serialNo")}: ATBM-ATT-${start.replaceAll("-", "")}-${end.replaceAll("-", "")}</span>
      </div>
      <h3>${t("monthlyAttendanceReport")} · ${month}</h3>
      <p class="help-text">${escapeHTML(subject)} · ${start} ${t("to")} ${end}</p>
      <p class="attendance-print-note">
        ${t("attendanceCode")}: P = ${t("present")}, H = ${t("halfday")}, A = ${t("absent")}, O = ${t("off")}, - = ${t("notMarked")}. OT = ${t("overtime")} on that exact date.
      </p>
      <div class="table-wrap">
        <table class="attendance-print-table">
          <thead>
            <tr>
              <th>${t("worker")}</th>
              ${dates.map((date) => `<th><span class="attendance-day-heading"><span>${escapeHTML(printableDayName(date))}</span><strong>${Number(date.slice(-2))}</strong><span>${escapeHTML(date.slice(5))}</span></span></th>`).join("")}
              <th class="attendance-total-col">P</th>
              <th class="attendance-total-col">H</th>
              <th class="attendance-total-col">A</th>
              <th class="attendance-total-col">O</th>
              <th class="attendance-overtime-col">OT</th>
            </tr>
          </thead>
          <tbody>
            ${workers.map((worker) => monthlyAttendancePrintRow(worker, dates, shift, summaryRowsByWorker.get(worker.id))).join("")}
          </tbody>
        </table>
      </div>
      <div class="attendance-print-footer">
        <div><span>${t("present")}</span><strong>${totals.present}</strong></div>
        <div><span>${t("halfday")}</span><strong>${totals.halfday}</strong></div>
        <div><span>${t("absent")}</span><strong>${totals.absent}</strong></div>
        <div><span>${t("off")}</span><strong>${totals.off}</strong></div>
        <div><span>${t("totalOvertime")}</span><strong>${formatHours(totals.overtime)}</strong></div>
      </div>
      ${monthlyAttendanceOvertimeDetailsHtml(workers, dates, shift, summaryRowsByWorker)}
      <footer class="report-footer">
        <div class="report-stamp-box">
          <img class="report-stamp" src="ahmad-times-stamp.png" alt="Ahmad Times stamp" width="136" height="136" onerror="this.onerror=null;this.src='ahmad-times-logo.png';">
          <p class="help-text">Generated: ${new Date().toLocaleString()}</p>
        </div>
      </footer>
    </section>
  `;
}

function printMonthlyAttendanceReport(allWorkers = false) {
  const report = monthlyAttendanceReportHtml({ allWorkers });
  if (!report.trim()) {
    toast(t("noRecordsReport"));
    return;
  }
  openPrintableReport(report);
  addLog("Monthly attendance report printed", allWorkers ? "All workers" : selectedReportWorkerIds().join(", "));
  saveData(false);
}

function formatHours(value) {
  if (!value) return "0h";
  const totalMinutes = Math.round(Number(value || 0) * 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
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
  const current = dateFromISO(start);
  const last = dateFromISO(end);
  while (current <= last) {
    dates.push(localDateISO(current));
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

function recordsForRange(start, end, workerId = "all", shift = "all") {
  const rows = [];
  const workerSelection = Array.isArray(workerId) ? workerId : [workerId];
  const current = dateFromISO(start);
  const last = dateFromISO(end);
  while (current <= last) {
    const date = localDateISO(current);
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
        hours: hours.actual,
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
  const workerSelection = Array.isArray(workerId) ? workerId : [workerId];
  return cachedCalculation(cacheKey("monthSummary", month, workerSelection, shift), () => {
    const dates = daysInMonth(month);
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
        const hours = shiftedDates.reduce((sum, date) => sum + calculateHours(getAttendanceRecord(date, worker.id)).actual, 0);
        const overtime = shiftedDates.reduce((sum, date) => {
          const record = getAttendanceRecord(date, worker.id);
          return sum + (record.status === "present" ? calculateHours(record).overtime : 0);
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
          baseWage: roundMoney(baseWage),
          overtimeWage: roundMoney(overtimeWage),
          foodDeduction: roundMoney(food),
          paidAmount,
          wage: roundMoney(Math.max(0, baseWage + overtimeWage - food)),
        };
      });
  });
}

const MOBILE_PRIMARY_VIEWS = new Set(["dashboard", "workers", "attendance", "reports"]);
let responsiveTableFrame = 0;

function activeViewId() {
  return $(".view.active")?.id || "dashboard";
}

function closeMobileMore() {
  const backdrop = $("#mobileMoreBackdrop");
  const button = $("#mobileMoreButton");
  if (!backdrop) return;
  backdrop.classList.remove("open");
  if (button) button.setAttribute("aria-expanded", "false");
  window.setTimeout(() => {
    if (!backdrop.classList.contains("open")) backdrop.hidden = true;
  }, 180);
}

function openMobileMore() {
  const backdrop = $("#mobileMoreBackdrop");
  const button = $("#mobileMoreButton");
  if (!backdrop) return;
  backdrop.hidden = false;
  window.requestAnimationFrame(() => backdrop.classList.add("open"));
  if (button) button.setAttribute("aria-expanded", "true");
}

function syncNavigation(viewId = activeViewId()) {
  $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
  $$(".mobile-nav-item[data-mobile-view]").forEach((item) => item.classList.toggle("active", item.dataset.mobileView === viewId));
  $("#mobileMoreButton")?.classList.toggle("active", !MOBILE_PRIMARY_VIEWS.has(viewId));
}

function switchView(viewId) {
  const target = $(`#${viewId}`);
  if (!target) return;
  $$(".view").forEach((view) => view.classList.remove("active"));
  target.classList.add("active");
  closeMobileMore();
  renderAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function decorateResponsiveTables() {
  $$(".table-wrap table, #reportOutput table").forEach((table) => {
    if (table.classList.contains("dashboard-wage-table") || table.classList.contains("weekly-attendance-table") || table.classList.contains("month-grid-table")) return;
    table.classList.add("mobile-card-table");
    table.closest(".table-wrap")?.classList.add("mobile-card-wrap");
    const headers = Array.from(table.querySelectorAll("thead th")).map((header) => header.textContent.trim());
    table.querySelectorAll("tbody tr").forEach((row) => {
      Array.from(row.children).forEach((cell, index) => {
        if (cell.tagName !== "TD") return;
        const label = headers[index] || "";
        if (cell.dataset.label !== label) cell.dataset.label = label;
      });
    });
  });
}

function scheduleResponsiveTableDecoration() {
  if (responsiveTableFrame) return;
  responsiveTableFrame = window.requestAnimationFrame(() => {
    responsiveTableFrame = 0;
    decorateResponsiveTables();
  });
}

function renderAll() {
  applyTheme();
  applyLanguage();
  renderLoginGate();
  renderAuthStatus();
  renderActiveView();
  syncNavigation();
  scheduleResponsiveTableDecoration();
}

function renderActiveView() {
  const activeView = $(".view.active")?.id || "dashboard";
  const pageTitle = $("#pageTitle");
  if (pageTitle) pageTitle.textContent = t(activeView);

  if (activeView === "dashboard") {
    renderDashboard();
    renderControlCenter();
    return;
  }
  if (activeView === "workers") {
    renderWorkers();
    return;
  }
  if (activeView === "attendance") {
    renderAttendanceWorkerPicker();
    renderBulkAttendanceWorkerPicker();
    renderActiveAttendancePanel();
    return;
  }
  if (activeView === "supplierWorkers") {
    renderSupplierWorkers();
    return;
  }
  if (activeView === "expenses") {
    renderExpenses();
    return;
  }
  if (activeView === "projectsBudget") {
    renderProjectsBudget();
    return;
  }
  if (activeView === "reports") {
    renderReport();
    renderPaymentEntryPanel();
    return;
  }
  if (activeView === "companyAssistant") {
    renderCompanyAssistant();
    return;
  }
  if (activeView === "backup") {
    renderStorage();
    return;
  }
  if (activeView === "logs") {
    renderLogs();
    return;
  }
  if (activeView === "safety") {
    renderSafety();
  }
}

function activeAttendanceMode() {
  return $("#attendance .mode-tab.active")?.dataset.mode || "day";
}

function renderActiveAttendancePanel() {
  const mode = activeAttendanceMode();
  if (mode === "week") {
    renderWeekAttendance();
    return;
  }
  if (mode === "month") {
    renderMonthAttendance();
    return;
  }
  renderDayAttendance();
}

function renderControlCenter() {
  const date = $("#todayInput")?.value || todayISO();
  const month = $("#dashboardMonth")?.value || monthISO();
  const todayRecords = app.attendance[date] || {};
  const activeCount = activeWorkers().length;
  const presentToday = Object.values(todayRecords)
    .filter((record) => ["present", "halfday"].includes(normalizeAttendanceRecord(record).status))
    .length;
  const alerts = payrollAlerts();
  const verification = verifyPayrollCalculations(month);
  const monthLocked = isMonthLocked(month);
  const latestBackup = Object.entries(app.dailyBackups || {})
    .sort((a, b) => b[0].localeCompare(a[0]))[0];
  const backupIsToday = latestBackup?.[0] === todayISO();
  const storageLabel = app.lastCloudSaveError ? t("cloudSaveProblem") : (app.storageMode === "cloud" ? t("cloudMode") : t("localMode"));
  const lastSaved = app.lastSaved ? new Date(app.lastSaved).toLocaleString() : t("never");
  const setCardState = (selector, state) => {
    const card = $(selector)?.closest(".control-card");
    if (!card) return;
    card.classList.remove("control-good", "control-warning", "control-danger");
    card.classList.add(`control-${state}`);
  };

  if ($("#controlTodayStatus")) $("#controlTodayStatus").textContent = `${presentToday}/${activeCount}`;
  if ($("#controlTodayDetail")) {
    $("#controlTodayDetail").textContent = `${t("presentToday")} · ${date} · ${STANDARD_HOURS}h ${t("fullDayBasis")}`;
  }
  setCardState("#controlTodayStatus", presentToday === activeCount && activeCount > 0 ? "good" : presentToday > 0 ? "warning" : "danger");
  if ($("#controlHealthStatus")) {
    $("#controlHealthStatus").textContent = verification.issueCount || alerts.length
      ? t("needsReview")
      : monthLocked ? t("monthLockedShort") : t("readyToClose");
  }
  if ($("#controlHealthDetail")) {
    const healthParts = [
      `${month}: ${monthLocked ? t("locked") : t("monthOpen")}`,
      verification.issueCount ? `${verification.issueCount} ${t("mistakeAlerts")}` : t("calculationVerified"),
      alerts.length ? `${alerts.length} ${t("mistakeAlerts")}` : t("noAlerts"),
    ];
    $("#controlHealthDetail").textContent = healthParts.join(" · ");
  }
  setCardState("#controlHealthStatus", verification.issueCount || alerts.length ? "danger" : monthLocked ? "good" : "warning");
  if ($("#controlDataSafety")) $("#controlDataSafety").textContent = storageLabel;
  if ($("#controlDataSafetyDetail")) {
    $("#controlDataSafetyDetail").textContent = app.lastCloudSaveError
      ? `${app.lastCloudSaveError} · ${t("browserCopySaved")}`
      : `${t("recordsSaved")}: ${lastSaved} · ${t("latestBackup")}: ${latestBackup?.[0] || t("noBackupYet")} · ${backupIsToday ? t("backupToday") : t("backupNotToday")}`;
  }
  setCardState("#controlDataSafety", app.lastCloudSaveError ? "danger" : backupIsToday ? "good" : "warning");
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
  const monthExpensesTotal = companyExpenseTotal(month);
  const budgetSummary = projectBudgetSummary(month, "all");
  const monthExpenseLedger = monthExpenses(month).reduce((acc, expense) => {
    const ledger = expenseLedger(expense);
    acc.paid = roundMoney(acc.paid + ledger.paid);
    acc.unpaid = roundMoney(acc.unpaid + ledger.unpaid);
    return acc;
  }, { paid: 0, unpaid: 0 });
  const supplierDashboardTotals = supplierTotals(monthSupplierEntries(month));
  const monthOvertime = summary.reduce((sum, row) => sum + row.overtime, 0);
  const monthDates = daysInMonth(month);
  const dashboardPayTotals = paymentTotals(summary, monthDates[0], monthDates[monthDates.length - 1]);
  const directPaid = dashboardPayTotals.paid;
  const directUnpaid = dashboardPayTotals.pending;

  $("#statTotalWorkers").textContent = app.workers.filter((worker) => worker.status === "active").length;
  $("#statActiveWorkers").textContent = app.workers.filter((worker) => worker.status === "active").length;
  $("#statInactiveWorkers").textContent = app.workers.filter((worker) => worker.status === "inactive").length;
  $("#statPresentToday").textContent = Object.values(todayRecords).filter((record) => ["present", "halfday"].includes(normalizeAttendanceRecord(record).status)).length;
  $("#statMonthWages").textContent = money(monthWages);
  if ($("#statSupplierTotal")) $("#statSupplierTotal").textContent = money(supplierDashboardTotals.total);
  $("#statMonthExpenses").textContent = money(monthExpensesTotal);
  $("#statGrandTotal").textContent = money(monthWages + supplierDashboardTotals.total);
  $("#statAttendanceDays").textContent = formatHours(monthOvertime);
  $("#statUnpaidWages").textContent = money(directUnpaid);
  if ($("#statPaidWages")) $("#statPaidWages").textContent = money(directPaid);
  if ($("#statSupplierPaid")) $("#statSupplierPaid").textContent = money(supplierDashboardTotals.paid);
  if ($("#statSupplierUnpaid")) $("#statSupplierUnpaid").textContent = money(supplierDashboardTotals.unpaid);
  if ($("#statGrandPaid")) $("#statGrandPaid").textContent = money(directPaid + supplierDashboardTotals.paid);
  if ($("#statGrandUnpaid")) $("#statGrandUnpaid").textContent = money(directUnpaid + supplierDashboardTotals.unpaid);
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
          <p>${t("in")}: ${record.inTime || "-"} · ${t("out")}: ${record.outTime || "-"} · ${t("actualWorkingHours")}: ${formatHours(hours.actual)} · ${t("overtime")}: ${formatHours(hours.overtime)}</p>
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

function validISODate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(value || "")) ? String(value) : "";
}

function earliestDashboardDate() {
  const dates = [];
  const add = (value) => {
    const date = validISODate(value);
    if (date) dates.push(date);
  };
  Object.keys(app.attendance || {}).forEach(add);
  (app.workers || []).forEach((worker) => {
    add(worker.joinDate);
    normalizeWageHistory(worker).forEach((entry) => add(entry.date));
  });
  paymentLedgerEntries().forEach((payment) => {
    add(payment.start);
    add(payment.end);
    add(payment.date);
  });
  (app.supplierEntries || []).forEach((entry) => add(entry.date));
  supplierPaymentEntries().forEach((payment) => {
    add(payment.start);
    add(payment.end);
    add(payment.date);
  });
  (app.expenses || []).forEach((expense) => add(expense.date));
  (app.projectBudgets || []).forEach((entry) => add(entry.date));
  return dates.length ? dates.sort()[0] : `${monthISO()}-01`;
}

function dashboardPeriodRange() {
  const period = $("#dashboardPeriod")?.value || "all";
  const today = $("#todayInput")?.value || todayISO();
  const selectedMonth = $("#dashboardMonth")?.value || monthISO();
  let start = earliestDashboardDate();
  let end = today;
  let title = t("allMonthsCombined");

  if (period === "current") {
    const month = monthFromDate(today) || monthISO();
    start = `${month}-01`;
    end = today;
    title = t("currentMonth");
  } else if (period === "previous") {
    const month = previousMonth(monthFromDate(today) || monthISO());
    const dates = daysInMonth(month);
    start = dates[0];
    end = dates[dates.length - 1];
    title = `${t("previousMonth")} · ${month}`;
  } else if (period === "month") {
    const dates = daysInMonth(selectedMonth);
    start = dates[0];
    end = dates[dates.length - 1];
    title = `${t("specificMonth")} · ${selectedMonth}`;
  } else if (period === "custom") {
    const from = $("#dashboardStartDate")?.value || start;
    const to = $("#dashboardEndDate")?.value || end;
    start = from <= to ? from : to;
    end = from <= to ? to : from;
    title = `${t("customDateRange")} · ${start} ${t("to")} ${end}`;
  }

  if (end > today && period !== "previous" && period !== "month") end = today;
  if (start > end) start = end;
  return { period, start, end, title, month: selectedMonth };
}

function periodSummary(start, end, shift = "all") {
  const rowsByWorker = new Map(summarizeRecords(recordsForRange(start, end, "all", shift)).map((row) => [row.worker.id, row]));
  app.workers.forEach((worker) => {
    if (rowsByWorker.has(worker.id)) return;
    rowsByWorker.set(worker.id, {
      worker,
      present: 0,
      halfday: 0,
      absent: 0,
      off: 0,
      hours: 0,
      overtime: 0,
      dailyWage: wageForDate(worker, end),
      baseWage: 0,
      overtimeWage: 0,
      foodDeduction: 0,
      paidAmount: paymentLedgerTotal(worker.id, start, end),
      wage: 0,
    });
  });
  return Array.from(rowsByWorker.values()).sort((a, b) => Number(a.worker.order ?? 0) - Number(b.worker.order ?? 0) || displayWorkerName(a.worker).localeCompare(displayWorkerName(b.worker)));
}

function expenseTotalsBetween(start, end) {
  return expenseRowsBetween(start, end).reduce((acc, expense) => {
    const ledger = expenseLedger(expense);
    acc.amount = roundMoney(acc.amount + Number(expense.amount || 0));
    acc.paid = roundMoney(acc.paid + ledger.paid);
    acc.unpaid = roundMoney(acc.unpaid + ledger.unpaid);
    return acc;
  }, { amount: 0, paid: 0, unpaid: 0 });
}

function budgetReceivedBetween(start, end) {
  return roundMoney((app.projectBudgets || [])
    .filter((entry) => validISODate(entry.date) && entry.date >= start && entry.date <= end)
    .reduce((sum, entry) => sum + Number(entry.amount || 0), 0));
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
  const advance = rowAdvanceDeduction(row, start, end);
  const finalPayable = rowFinalPayable(row, start, end);
  const paymentDeducted = rowPaymentDeducted(row, start, end);
  const extraPaid = rowExtraPaidBalance(row, start, end);
  const totalAdvance = workerAdvanceAmount(worker);
  const remainingAdvance = workerRemainingAdvance(worker, end);
  const advanceHistory = workerAdvanceEntries(worker.id);
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
          <td>${formatHours(hours.actual)}</td>
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
        <div><span>${t("grossPayable")}</span><strong>${money(row.wage)}</strong></div>
        <div><span>${t("totalAdvanceGiven")}</span><strong>${money(totalAdvance)}</strong></div>
        <div><span>${t("advanceDeducted")}</span><strong>${money(advance)}</strong></div>
        <div><span>${t("payableAfterAdvance")}</span><strong>${money(finalPayable)}</strong></div>
        <div><span>${t("remainingAdvanceBalance")}</span><strong>${money(remainingAdvance)}</strong></div>
        <div><span>${t("paymentDeducted")}</span><strong>${money(paymentDeducted)}</strong></div>
        <div><span>${t("workerBalance")}</span><strong>${money(unpaid)}</strong></div>
        <div><span>${t("extraPaidBalance")}</span><strong>${money(extraPaid)}</strong></div>
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
          <div><span>${t("actualWorkingHours")}</span><strong>${formatHours(todayHours.actual)}</strong></div>
          <div><span>${t("overtime")}</span><strong>${formatHours(todayHours.overtime)}</strong></div>
          <div><span>${t("payableWage")}</span><strong>${money(todayPayable)}</strong></div>
        </div>
      </section>

      <section class="mini-attendance-card advance-card">
        <div>
          <h3>${t("addWorkerAdvance")}</h3>
          <p class="help-text">${t("remainingAdvanceBalance")}: ${money(remainingAdvance)}</p>
        </div>
        <div class="advance-entry-grid" data-advance-worker="${worker.id}">
          <label><span>${t("advanceDate")}</span><input type="date" data-advance-field="date" value="${today}"></label>
          <label><span>${t("advanceAmount")}</span><input type="number" min="0" step="0.01" data-advance-field="amount"></label>
          <label><span>${t("advanceNote")}</span><input data-advance-field="note"></label>
          <button type="button" class="primary" data-save-advance>${t("addWorkerAdvance")}</button>
        </div>
        <div class="payment-row-history">
          <h4>${t("advanceHistory")}</h4>
          ${advanceHistory.length ? renderPaymentHistory(advanceHistory) : `<p class="help-text">${t("noAdvanceHistory")}</p>`}
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
        <div><span>${t("remainingAdvanceBalance")}</span><strong>${money(workerRemainingAdvance(worker, todayISO()))}</strong></div>
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
  const start = dateFromISO(dateValue);
  const day = start.getDay();
  start.setDate(start.getDate() - day);
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return localDateISO(date);
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
            <small>${formatHours(hours.actual)} · ${formatHours(overtime)}</small>
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
          <p class="time-summary">${t("in")}: ${record.inTime || "-"} · ${t("out")}: ${record.outTime || "-"} · ${t("totalTime")}: ${formatHours(hours.total)} · ${t("restBreak")}: ${formatHours(hours.rest)} · ${t("actualWorkingHours")}: ${formatHours(hours.actual)} · ${t("normalHours")}: ${formatHours(hours.normal)} · ${t("overtime")}: ${formatHours(overtime)}</p>
          <p class="time-summary">${t("manualOvertimeHelp")} · ${t("overtime")}: ${record.overtimeHours === "" ? `${formatHours(hours.autoOvertime)} auto` : `${formatHours(hours.overtime)} manual`}</p>
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
          <label>${t("restBreak")}<select data-rest-field="restBreakType">
            <option value="default" ${record.restBreakType === "default" ? "selected" : ""}>${t("defaultRest")}</option>
            <option value="none" ${record.restBreakType === "none" ? "selected" : ""}>${t("noRest")}</option>
            <option value="custom" ${record.restBreakType === "custom" ? "selected" : ""}>${t("customRest")}</option>
          </select></label>
          <label>${t("customRestMinutes")}<input type="number" min="0" max="360" step="5" data-rest-minutes-field="restMinutes" value="${record.restMinutes}"></label>
          <label>${t("manualOvertime")}<input type="number" min="0" step="0.25" data-number-field="overtimeHours" value="${record.overtimeHours}" placeholder="${formatHours(hours.autoOvertime)}"></label>
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
        if (!workerAvailableForAttendance(worker, date)) {
          return `
        <td class="month-day unavailable-day">
          <span class="mini-select mini-select-disabled" title="${escapeHTML(t("notAvailable"))}">-</span>
        </td>
      `;
        }
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

function wageReportRowsForPeriod(type, month, start, end, selection, shift) {
  const sourceRows = type === "monthly"
    ? monthSummary(month, selection, shift)
    : summarizeRecords(recordsForRange(start, end, selection, shift));
  return sourceRows.filter((row) => row.present || row.halfday || row.absent || row.off || row.wage || rowPaidAmount(row, start, end));
}

function wageReportTotals(rows, start, end) {
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
    acc.wage += row.wage || 0;
    return acc;
  }, { present: 0, halfday: 0, absent: 0, off: 0, hours: 0, overtime: 0, baseWage: 0, overtimeWage: 0, foodDeduction: 0, wage: 0 });
  return { ...totals, pay: paymentTotals(rows, start, end) };
}

function compactWageReportSection({ title, start, end, rows, shift }) {
  const totals = wageReportTotals(rows, start, end);
  return `
    <section class="previous-report-section">
      <h3>${escapeHTML(title)}</h3>
      <div class="summary-strip">
        <div><span>${t("present")} ${t("days")}</span><strong>${totals.present}</strong></div>
        <div><span>${t("halfDays")}</span><strong>${totals.halfday}</strong></div>
        <div><span>${t("absent")} ${t("days")}</span><strong>${totals.absent}</strong></div>
        <div><span>${t("off")} ${t("days")}</span><strong>${totals.off}</strong></div>
        <div><span>${t("overtime")}</span><strong>${formatHours(totals.overtime)}</strong></div>
        <div><span>${t("grossPayable")}</span><strong>${money(totals.wage)}</strong></div>
        <div><span>${t("paid")}</span><strong>${money(totals.pay.paid)}</strong></div>
        <div><span>${t("unpaid")}</span><strong>${money(totals.pay.pending)}</strong></div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>${t("worker")}</th>
              <th>${t("shift")}</th>
              <th>${t("present")}</th>
              <th>${t("halfday")}</th>
              <th>${t("absent")}</th>
              <th>${t("overtime")}</th>
              <th>${t("dailyWage")}</th>
              <th>${t("baseWage")}</th>
              <th>${t("overtimeWage")}</th>
              <th>${t("grossPayable")}</th>
              <th>${t("paid")}</th>
              <th>${t("unpaid")}</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map((row) => `
              <tr>
                <td>${escapeHTML(displayWorkerName(row.worker))}</td>
                <td>${shift === "all" ? t("allShifts") : attendanceShiftLabel(shift)}</td>
                <td>${row.present}</td>
                <td>${row.halfday || 0}</td>
                <td>${row.absent}</td>
                <td>${formatHours(row.overtime || 0)}</td>
                <td>${money(row.dailyWage || currentDailyWage(row.worker))}</td>
                <td>${money(row.baseWage || 0)}</td>
                <td>${money(row.overtimeWage || 0)}</td>
                <td><strong>${money(row.wage || 0)}</strong></td>
                <td>${money(rowPaidAmount(row, start, end))}</td>
                <td><strong>${money(rowWorkerBalance(row, start, end))}</strong></td>
              </tr>
            `).join("") || `<tr><td colspan="12">${t("noRecordsReport")}</td></tr>`}
          </tbody>
        </table>
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
  const { month, start, end, title } = currentReportPeriod();
  renderCompanyExpenseReportFilters();
  const reportDates = datesBetween(start, end);

  const reportWorkers = app.workers.filter((worker) => {
    const hasRecord = workerHasRecordInRange(worker, start, end, reportShift);
    const canWorkInRange = worker.status === "active"
      && reportDates.some((date) => workerJoinedByDate(worker, date))
      && (reportShift === "all" || reportDates.some((date) => workerAssignedShift(worker, date) === reportShift));
    return hasRecord || canWorkInRange;
  });
  const validSelectedIds = selectedReportIds.includes("all")
    ? ["all"]
    : selectedReportIds.filter((id) => reportWorkers.some((worker) => worker.id === id));
  const selectedWorkerIds = validSelectedIds.length ? validSelectedIds : ["all"];
  const workerOptions = [`<option value="all">${t("companyWideReport")}</option>`]
    .concat(reportWorkers.map((worker) => `<option value="${worker.id}" ${selectedWorkerIds.includes(worker.id) ? "selected" : ""}>${escapeHTML(displayWorkerName(worker))}</option>`));
  $("#reportWorker").innerHTML = workerOptions.join("");
  if (selectedWorkerIds.includes("all")) $("#reportWorker").querySelector('option[value="all"]').selected = true;
  if ($("#reportWorkerMobileList")) {
    const mobileOptions = [{ id: "all", name: t("companyWideReport") }]
      .concat(reportWorkers.map((worker) => ({ id: worker.id, name: displayWorkerName(worker) })));
    $("#reportWorkerMobileList").innerHTML = mobileOptions.map((option) => {
      const checked = selectedWorkerIds.includes("all")
        ? option.id === "all"
        : selectedWorkerIds.includes(option.id);
      return `
        <label class="mobile-check-item">
          <input type="checkbox" value="${escapeHTML(option.id)}" ${checked ? "checked" : ""}>
          <span>${escapeHTML(option.name)}</span>
        </label>
      `;
    }).join("");
  }

  const reportSelection = selectedWorkerIds.includes("all") ? ["all"] : selectedWorkerIds;
  const rows = wageReportRowsForPeriod(type, month, start, end, reportSelection, reportShift);
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
    acc.advanceDeducted += rowAdvanceDeduction(row, start, end);
    acc.finalPayable += rowFinalPayable(row, start, end);
    return acc;
  }, { present: 0, halfday: 0, absent: 0, off: 0, hours: 0, overtime: 0, baseWage: 0, overtimeWage: 0, foodDeduction: 0, paidAmount: 0, wage: 0, advanceDeducted: 0, finalPayable: 0 });
  const payTotals = paymentTotals(rows, start, end);
  const selectedWorker = selectedWorkerIds.length === 1 && !selectedWorkerIds.includes("all") ? app.workers.find((worker) => worker.id === selectedWorkerIds[0]) : null;
  const reportSubject = selectedWorkerIds.includes("all")
    ? t("companyWideReport")
    : selectedWorker
      ? escapeHTML(displayWorkerName(selectedWorker))
      : `${t("selectedWorkerReports")} (${rows.length})`;
  const includePreviousMonth = type === "monthly" && Boolean($("#includePreviousMonthReport")?.checked);
  const includePaymentHistory = Boolean($("#includePaymentHistoryReport")?.checked);
  const previousReportMonth = previousMonth(month);
  const previousDates = daysInMonth(previousReportMonth);
  const previousRows = includePreviousMonth
    ? wageReportRowsForPeriod("monthly", previousReportMonth, previousDates[0], previousDates[previousDates.length - 1], reportSelection, reportShift)
    : [];
  const previousReportHtml = includePreviousMonth
    ? compactWageReportSection({
      title: `${t("previousMonthDetails")} · ${previousReportMonth}`,
      start: previousDates[0],
      end: previousDates[previousDates.length - 1],
      rows: previousRows,
      shift: reportShift,
    })
    : "";

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
    ${reportShift !== "all" ? `<p class="help-text report-warning">${t("shiftFilteredWarning")}</p>` : ""}
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
      <div><span>${t("grossPayable")}</span><strong>${money(totals.wage)}</strong></div>
      <div><span>${t("paid")}</span><strong>${money(payTotals.paid)}</strong></div>
      <div><span>${t("unpaid")}</span><strong>${money(payTotals.pending)}</strong></div>
      <div><span>${t("workerBalance")}</span><strong>${money(payTotals.extraPaid)}</strong></div>
      <div><span>${t("balanceOnCompany")}</span><strong>${money(payTotals.pending)}</strong></div>
    </div>
    ${includePaymentHistory ? `<section class="report-payment-history">
      <h3>${t("paymentHistory")}</h3>
      ${rows.map((row) => {
        const history = workerPaymentHistory(row.worker.id, start, end);
        return `
          <div class="report-payment-worker">
            <strong>${escapeHTML(displayWorkerName(row.worker))}</strong>
            ${history.length ? renderPaymentHistory(history) : `<p class="help-text">${t("noPaymentHistory")}</p>`}
          </div>
        `;
      }).join("") || `<p class="help-text">${t("noPaymentHistory")}</p>`}
    </section>` : ""}
    <div class="payment-list">
      <h3>${t("payments")}</h3>
      ${rows.map((row) => {
        const paid = rowPaidAmount(row, start, end);
        const pending = rowWorkerBalance(row, start, end);
        const extraPaid = rowExtraPaidBalance(row, start, end);
        const serial = reportSerial(row.worker, start, end);
        const history = workerPaymentHistory(row.worker.id, start, end);
        return `
          <div class="payment-row" data-payment-worker="${row.worker.id}" data-payment-start="${start}" data-payment-end="${end}">
            <div>
              <strong>${escapeHTML(displayWorkerName(row.worker))}</strong>
              <p>${t("serialNo")}: ${serial}</p>
              <p>${t("grossPayable")}: ${money(row.wage)} · ${t("paid")}: ${money(paid)} · ${t("unpaid")}: ${money(pending)} · ${t("workerBalance")}: ${money(extraPaid)} · ${t("balanceOnCompany")}: ${money(pending)}</p>
              ${includePaymentHistory ? `<div class="payment-row-history">${renderPaymentHistory(history, { editable: true, type: "worker" })}</div>` : ""}
            </div>
            <label>${t("paidAmount")}<input type="number" min="0" step="0.01" data-payment-field="paidAmount" value=""></label>
            <label>${t("paymentDate")}<input type="date" data-payment-field="paymentDate" value="${$("#todayInput")?.value || todayISO()}"></label>
            <label>${t("paymentMethod")}
              <select data-payment-field="method">
                <option value="cash" selected>${t("cash")}</option>
                <option value="bank">${t("bank")}</option>
                <option value="exchange">${t("exchange")}</option>
                <option value="other">${t("other")}</option>
              </select>
            </label>
            <label>${t("paymentNote")}<input data-payment-field="note" value=""></label>
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
            <th>${t("overtime")}</th>
            <th>${t("dailyWage")}</th>
            <th>${t("baseWage")}</th>
            <th>${t("overtimeWage")}</th>
            <th>${t("foodDeductionTotal")}</th>
            <th>${t("grossPayable")}</th>
            <th>${t("paid")}</th>
            <th>${t("unpaid")}</th>
            <th>${t("workerBalance")}</th>
            <th>${t("balanceOnCompany")}</th>
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
              <td>${formatHours(row.overtime || 0)}</td>
              <td>${money(row.dailyWage || currentDailyWage(row.worker))}</td>
              <td>${money(row.baseWage || 0)}</td>
              <td>${money(row.overtimeWage || 0)}</td>
              <td>${money(row.foodDeduction || 0)}</td>
              <td><strong>${money(row.wage)}</strong></td>
              <td>${money(rowPaidAmount(row, start, end))}</td>
              <td><strong>${money(rowWorkerBalance(row, start, end))}</strong></td>
              <td><strong>${money(rowExtraPaidBalance(row, start, end))}</strong></td>
              <td><strong>${money(rowWorkerBalance(row, start, end))}</strong></td>
            </tr>
          `).join("") || `<tr><td colspan="17">${t("noRecordsReport")}</td></tr>`}
        </tbody>
      </table>
    </div>
    ${previousReportHtml}
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

function expenseSearchText(expense) {
  return [
    expense.project,
    expense.category,
    expense.merchant,
    expense.location,
    expense.description,
  ].filter(Boolean).join(" ").toLowerCase();
}

function expenseCategoryGroup(expense) {
  const text = expenseSearchText(expense);
  if (/(breakfast|ناشته|صبح|chai|tea|karak)/i.test(text)) return "breakfast";
  if (/(room|rent|accommodation|camp|روم|کرایه|اطاق)/i.test(text)) return "room";
  if (/(fuel|petrol|diesel|gasoline|pump|car oil|engine oil|oil|تیل|پمپ)/i.test(text)) return "fuel";
  if (/(food|meal|lunch|dinner|restaurant|kitchen|خوراک|ډوډۍ|غذا)/i.test(text)) return "food";
  return "other";
}

function expenseRowsBetween(start, end, buyerFilter = "") {
  const buyer = String(buyerFilter || "").trim().toLowerCase();
  return (app.expenses || []).filter((expense) => {
    const date = String(expense.date || "");
    if (!date || date < start || date > end) return false;
    if (!buyer) return true;
    return expenseBuyerName(expense).toLowerCase() === buyer;
  });
}

function expenseTotalsForRows(rows, category = "all") {
  return rows.reduce((sum, expense) => {
    if (category !== "all" && expenseCategoryGroup(expense) !== category) return sum;
    const ledger = expenseLedger(expense);
    sum.amount = roundMoney(sum.amount + ledger.amount);
    sum.paid = roundMoney(sum.paid + ledger.paid);
    sum.unpaid = roundMoney(sum.unpaid + ledger.unpaid);
    sum.balance = roundMoney(sum.balance + ledger.balance);
    return sum;
  }, { amount: 0, paid: 0, unpaid: 0, balance: 0 });
}

function expenseBuyerTotals(rows = []) {
  const totals = new Map();
  rows.forEach((expense) => {
    const buyer = expenseBuyerName(expense);
    if (!buyer || buyer === "-") return;
    const ledger = expenseLedger(expense);
    const current = totals.get(buyer) || { buyer, amount: 0, paid: 0, unpaid: 0, balance: 0 };
    current.amount = roundMoney(current.amount + ledger.amount);
    current.paid = roundMoney(current.paid + ledger.paid);
    current.unpaid = roundMoney(current.unpaid + ledger.unpaid);
    current.balance = roundMoney(current.balance + ledger.balance);
    totals.set(buyer, current);
  });
  return Array.from(totals.values()).sort((a, b) => b.amount - a.amount || a.buyer.localeCompare(b.buyer));
}

function supplierEntryTotals(entry) {
  const workers = Math.max(0, Number(entry.workerCount || 0));
  const dailyWage = roundMoney(entry.dailyWage || 0);
  const overtimeHours = Math.max(0, Number(entry.overtimeHours || 0));
  const transportationCharges = roundMoney(entry.transportationCharges || 0);
  const previousLoan = roundMoney(entry.previousLoan || 0);
  const paid = roundMoney(entry.paidAmount || 0);
  const hourlyRate = roundMoney(dailyWage / STANDARD_HOURS);
  const normalAmount = roundMoney(workers * dailyWage);
  const overtimeAmount = roundMoney(workers * overtimeHours * hourlyRate);
  const total = roundMoney(normalAmount + overtimeAmount + transportationCharges + previousLoan);
  const unpaid = roundMoney(Math.max(0, total - paid));
  return { workers, dailyWage, overtimeHours, hourlyRate, normalAmount, overtimeAmount, transportationCharges, previousLoan, total, paid, unpaid };
}

function monthSupplierEntries(month = monthISO()) {
  app.supplierEntries ||= [];
  return app.supplierEntries.filter((entry) => String(entry.date || "").startsWith(month));
}

function supplierPaymentEntries() {
  app.supplierPayments ||= [];
  app.supplierPayments = app.supplierPayments
    .map((payment) => ({
      id: payment.id || makeId(),
      supplierName: String(payment.supplierName || "").trim(),
      date: payment.date || payment.paymentDate || payment.end || payment.start || todayISO(),
      start: payment.start || payment.date || payment.paymentDate || todayISO(),
      end: payment.end || payment.date || payment.paymentDate || todayISO(),
      amount: roundMoney(payment.amount || payment.paidAmount || 0),
      method: payment.method || "cash",
      note: payment.note || "",
      source: payment.source || "supplier-payment",
      user: payment.user || currentUserLabel(),
      updatedAt: payment.updatedAt || new Date().toISOString(),
    }))
    .filter((payment) => payment.supplierName && payment.amount > 0);
  return app.supplierPayments;
}

function supplierPaymentHistory(supplierName, start, end) {
  const name = String(supplierName || "").trim().toLowerCase();
  return supplierPaymentEntries()
    .filter((payment) => payment.supplierName.toLowerCase() === name && paymentAppliesToRange(payment, start, end))
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")) || String(b.updatedAt || "").localeCompare(String(a.updatedAt || "")));
}

function supplierPaymentTotal(supplierName, start, end) {
  return roundMoney(supplierPaymentHistory(supplierName, start, end)
    .reduce((sum, payment) => sum + Number(payment.amount || 0), 0));
}

function supplierNamesFromEntries(entries = app.supplierEntries || []) {
  const names = [
    ...entries.map((entry) => String(entry.supplierName || "").trim()),
    ...(app.supplierPayments || []).map((payment) => String(payment.supplierName || "").trim()),
  ];
  return Array.from(new Set(names.filter(Boolean))).sort();
}

function supplierTotals(entries = [], start = "", end = "") {
  const entryDates = entries.map((entry) => entry.date).filter(Boolean).sort();
  const rangeStart = start || entryDates[0] || todayISO();
  const rangeEnd = end || entryDates[entryDates.length - 1] || rangeStart;
  const bySupplier = new Map();
  const totals = entries.reduce((acc, entry) => {
    const entryTotals = supplierEntryTotals(entry);
    const supplierName = String(entry.supplierName || "").trim() || "-";
    const supplier = bySupplier.get(supplierName) || { total: 0, paid: 0 };
    supplier.total = roundMoney(supplier.total + entryTotals.total);
    supplier.paid = roundMoney(supplier.paid + entryTotals.paid);
    bySupplier.set(supplierName, supplier);
    acc.total = roundMoney(acc.total + entryTotals.total);
    acc.normal = roundMoney(acc.normal + entryTotals.normalAmount);
    acc.overtime = roundMoney(acc.overtime + entryTotals.overtimeAmount);
    acc.transportationCharges = roundMoney(acc.transportationCharges + entryTotals.transportationCharges);
    acc.previousLoan = roundMoney(acc.previousLoan + entryTotals.previousLoan);
    acc.workers += entryTotals.workers;
    return acc;
  }, { total: 0, paid: 0, unpaid: 0, overpaid: 0, normal: 0, overtime: 0, transportationCharges: 0, previousLoan: 0, workers: 0 });
  supplierPaymentEntries()
    .filter((payment) => paymentAppliesToRange(payment, rangeStart, rangeEnd))
    .forEach((payment) => {
      const supplierName = String(payment.supplierName || "").trim() || "-";
      const supplier = bySupplier.get(supplierName) || { total: 0, paid: 0 };
      supplier.paid = roundMoney(supplier.paid + Number(payment.amount || 0));
      bySupplier.set(supplierName, supplier);
    });
  bySupplier.forEach((supplier) => {
    totals.paid = roundMoney(totals.paid + supplier.paid);
    totals.unpaid = roundMoney(totals.unpaid + Math.max(0, supplier.total - supplier.paid));
    totals.overpaid = roundMoney(totals.overpaid + Math.max(0, supplier.paid - supplier.total));
  });
  return totals;
}

function filteredSupplierEntries() {
  const month = $("#supplierMonth")?.value || monthISO();
  const date = $("#supplierFilterDate")?.value || "";
  const name = String($("#supplierFilterName")?.value || "").trim().toLowerCase();
  const status = $("#supplierFilterStatus")?.value || "all";
  return monthSupplierEntries(month).filter((entry) => {
    const totals = supplierEntryTotals(entry);
    if (date && entry.date !== date) return false;
    if (name && !String(entry.supplierName || "").toLowerCase().includes(name)) return false;
    if (status === "paid" && totals.unpaid > 0) return false;
    if (status === "unpaid" && totals.unpaid <= 0) return false;
    return true;
  });
}

function supplierReportRows(entries = filteredSupplierEntries()) {
  return entries.map((entry) => {
    const totals = supplierEntryTotals(entry);
    const ledgerPaid = supplierPaymentTotal(entry.supplierName, entry.date || todayISO(), entry.date || todayISO());
    const paid = roundMoney(totals.paid + ledgerPaid);
    const unpaid = roundMoney(Math.max(0, totals.total - paid));
    return [
      entry.date || "",
      entry.supplierName || "",
      entry.project || "",
      totals.workers,
      money(totals.dailyWage),
      formatHours(totals.overtimeHours),
      money(totals.normalAmount),
      money(totals.overtimeAmount),
      money(totals.transportationCharges),
      money(totals.previousLoan),
      money(totals.total),
      money(paid),
      money(unpaid),
      entry.notes || "",
    ];
  });
}

function filteredMonthExpenses(month = monthISO()) {
  const buyer = ($("#expenseBuyerFilter")?.value || "").trim().toLowerCase();
  return monthExpenses(month).filter((expense) => {
    if (!buyer) return true;
    return expenseBuyerName(expense).toLowerCase() === buyer;
  });
}

function selectedExpenseReportBuyers() {
  const select = $("#expenseReportBuyers");
  if (!select) return [];
  return Array.from(select.selectedOptions).map((option) => option.value).filter(Boolean);
}

function expenseReportRows(month = monthISO(), buyers = []) {
  const buyerSet = new Set((buyers || []).map((buyer) => String(buyer || "").toLowerCase()));
  const fallbackBuyer = ($("#expenseBuyerFilter")?.value || "").trim().toLowerCase();
  return monthExpenses(month)
    .filter((expense) => {
      const buyer = expenseBuyerName(expense).toLowerCase();
      if (buyerSet.size) return buyerSet.has(buyer);
      if (fallbackBuyer) return buyer === fallbackBuyer;
      return true;
    })
    .sort((a, b) => String(a.date || "").localeCompare(String(b.date || "")));
}

function printExpenseReport() {
  const month = $("#expenseMonth")?.value || monthISO();
  const buyers = selectedExpenseReportBuyers();
  const rows = expenseReportRows(month, buyers);
  const totals = expenseTotalsForRows(rows, "all");
  const buyerTotals = expenseBuyerTotals(rows);
  const fallbackBuyer = ($("#expenseBuyerFilter")?.value || "").trim();
  const buyerLabel = buyers.length
    ? buyers.join(", ")
    : fallbackBuyer
      ? fallbackBuyer
      : t("allBuyers");
  const headers = [
    t("date"),
    t("buyerName"),
    t("expenseCategory"),
    t("projectName"),
    t("marketName"),
    t("expenseLocation"),
    t("expenseDescription"),
    t("expenseAmount"),
    t("paid"),
    t("unpaid"),
    t("status"),
  ];
  const detailRows = rows.map((expense) => {
    const ledger = expenseLedger(expense);
    return [
      expense.date || "-",
      expenseBuyerName(expense),
      expense.category || "-",
      expense.project || "-",
      expense.merchant || "-",
      expense.location || "-",
      expense.description || "-",
      money(ledger.amount),
      money(ledger.paid),
      money(ledger.unpaid),
      expenseStatusLabel(ledger.status),
    ];
  });
  const detailTable = detailRows.length
    ? `<table><thead><tr>${headers.map((header) => `<th>${escapeHTML(header)}</th>`).join("")}</tr></thead><tbody>${detailRows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHTML(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>`
    : `<p>${t("noExpenses")}</p>`;
  const buyerSummary = buyerTotals.length
    ? `<h2>${t("buyerTotals")}</h2><table><thead><tr><th>${t("buyerName")}</th><th>${t("totalExpenses")}</th><th>${t("paid")}</th><th>${t("unpaid")}</th><th>${t("buyerBalance")}</th></tr></thead><tbody>${buyerTotals.map((buyer) => `
      <tr>
        <td>${escapeHTML(buyer.buyer)}</td>
        <td>${money(buyer.amount)}</td>
        <td>${money(buyer.paid)}</td>
        <td>${money(buyer.unpaid)}</td>
        <td>${money(buyer.balance)}</td>
      </tr>
    `).join("")}</tbody></table>`
    : "";
  printPlainReport(t("expenseReport"), `
    <p>${t("monthlyExpense")}: ${escapeHTML(month)} · ${t("selectedBuyers")}: ${escapeHTML(buyerLabel)}</p>
    <div class="summary-grid">
      <div class="row"><span>${t("totalExpenses")}</span><strong>${money(totals.amount)}</strong></div>
      <div class="row"><span>${t("paid")}</span><strong>${money(totals.paid)}</strong></div>
      <div class="row"><span>${t("unpaid")}</span><strong>${money(totals.unpaid)}</strong></div>
      <div class="row"><span>${t("buyerBalance")}</span><strong>${money(totals.balance)}</strong></div>
    </div>
    ${buyerSummary}
    <h2>${t("companyExpenses")}</h2>
    ${detailTable}
  `);
  addLog("Expense report printed", `${month} · ${buyerLabel} · ${rows.length} rows`);
  saveData(false);
}

function reportProjectFilter() {
  return $("#companyExpenseProjectFilter")?.value || "all";
}

function selectedCompanyExpenseSuppliers() {
  const select = $("#companyExpenseSupplierFilter");
  if (!select) return [];
  return Array.from(select.selectedOptions).map((option) => option.value).filter(Boolean);
}

function renderCompanyExpenseReportFilters() {
  const projectSelect = $("#companyExpenseProjectFilter");
  if (projectSelect) {
    const current = projectSelect.value || "all";
    const options = [`<option value="all">${t("allProjects")}</option>`]
      .concat(projectNames().map((project) => `<option value="${escapeHTML(project)}" ${project === current ? "selected" : ""}>${escapeHTML(project)}</option>`));
    projectSelect.innerHTML = options.join("");
    if (!Array.from(projectSelect.options).some((option) => option.value === current)) projectSelect.value = "all";
  }

  const supplierSelect = $("#companyExpenseSupplierFilter");
  if (supplierSelect) {
    const selected = new Set(selectedCompanyExpenseSuppliers());
    const names = Array.from(new Set((app.supplierEntries || []).map((entry) => String(entry.supplierName || "").trim()).filter(Boolean))).sort((a, b) => a.localeCompare(b));
    supplierSelect.innerHTML = names.map((name) => `<option value="${escapeHTML(name)}" ${selected.has(name) ? "selected" : ""}>${escapeHTML(name)}</option>`).join("");
  }
}

function investorExpenseCategoryKey(expense) {
  const text = [
    expense.category,
    expense.merchant,
    expense.location,
    expense.description,
    expense.project,
  ].filter(Boolean).join(" ").toLowerCase();
  if (/(fuel|petrol|diesel|gasoline|pump|engine oil|car oil|تیل|پمپ)/i.test(text)) return "fuelExpenses";
  if (/(transport|transportation|taxi|bus|pickup|delivery|driver|د ټرانسپورټ|ټرانسپورټ)/i.test(text)) return "transportExpenses";
  if (/(car rent|vehicle rent|rent car|car hire|موټر کرایه)/i.test(text)) return "carRent";
  if (/(tool|tools|equipment|machine|drill|ladder|safety|اوزار|سامان)/i.test(text)) return "toolsEquipment";
  if (/(food|grocery|meal|lunch|dinner|breakfast|restaurant|kitchen|خوراک|ناشته|ډوډۍ|غذا|سودا)/i.test(text)) return "foodGroceryExpenses";
  if (/(material|cement|steel|sand|paint|block|pipe|wood|tile|مواد|سیمنټ|رنګ)/i.test(text)) return "materialExpenses";
  if (projectNameOf(expense.project)) return "projectExpenses";
  return "otherSmallExpenses";
}

function companyExpenseReportData() {
  const { start, end, title } = currentReportPeriod();
  const project = reportProjectFilter();
  const shift = selectedReportShift();
  const selectedSuppliers = selectedCompanyExpenseSuppliers();
  const supplierFilter = new Set(selectedSuppliers.map((name) => name.toLowerCase()));
  const selectedWorkers = selectedReportWorkerIds();
  const workerSelection = selectedWorkers.includes("all") ? ["all"] : selectedWorkers;

  const labourRows = summarizeRecords(recordsForRange(start, end, workerSelection, shift))
    .filter((row) => row.present || row.halfday || row.absent || row.off || row.wage || rowPaidAmount(row, start, end))
    .filter((row) => project === "all" || projectNameOf(row.worker?.project) === project)
    .sort((a, b) => displayWorkerName(a.worker).localeCompare(displayWorkerName(b.worker)));
  const labourTotals = paymentTotals(labourRows, start, end);

  const supplierEntries = (app.supplierEntries || [])
    .filter((entry) => String(entry.date || "") >= start && String(entry.date || "") <= end)
    .filter((entry) => project === "all" || projectNameOf(entry.project) === project)
    .filter((entry) => !supplierFilter.size || supplierFilter.has(String(entry.supplierName || "").trim().toLowerCase()));
  const supplierRows = Array.from(supplierEntries.reduce((map, entry) => {
    const name = String(entry.supplierName || "-").trim() || "-";
    const current = map.get(name) || { name, projects: new Set(), workers: 0, dailyRates: new Set(), overtimeHours: 0, total: 0, paidFromEntries: 0, normal: 0, overtimeAmount: 0 };
    const totals = supplierEntryTotals(entry);
    if (projectNameOf(entry.project)) current.projects.add(projectNameOf(entry.project));
    current.workers += totals.workers;
    if (totals.dailyWage) current.dailyRates.add(money(totals.dailyWage));
    current.overtimeHours += totals.overtimeHours;
    current.normal = roundMoney(current.normal + totals.normalAmount);
    current.overtimeAmount = roundMoney(current.overtimeAmount + totals.overtimeAmount);
    current.total = roundMoney(current.total + totals.total);
    current.paidFromEntries = roundMoney(current.paidFromEntries + totals.paid);
    map.set(name, current);
    return map;
  }, new Map()).values()).map((row) => {
    const ledgerPaid = supplierPaymentTotal(row.name, start, end);
    const paid = roundMoney(row.paidFromEntries + ledgerPaid);
    return {
      ...row,
      projectText: row.projects.size ? Array.from(row.projects).join(" / ") : "-",
      dailyRateText: row.dailyRates.size ? Array.from(row.dailyRates).join(" / ") : money(0),
      paid,
      unpaid: roundMoney(Math.max(0, row.total - paid)),
    };
  }).sort((a, b) => a.name.localeCompare(b.name));
  const supplierTotalsData = supplierTotals(supplierEntries, start, end);

  const expenseRows = expenseRowsBetween(start, end)
    .filter((expense) => project === "all" || projectNameOf(expense.project) === project)
    .sort((a, b) => String(a.date || "").localeCompare(String(b.date || "")));
  const expenseTotalsData = expenseTotalsForRows(expenseRows, "all");
  const buyerTotals = expenseBuyerTotals(expenseRows);
  const expenseCategories = [
    "materialExpenses",
    "transportExpenses",
    "fuelExpenses",
    "carRent",
    "toolsEquipment",
    "foodGroceryExpenses",
    "projectExpenses",
    "otherSmallExpenses",
  ].map((key) => {
    const rows = expenseRows.filter((expense) => investorExpenseCategoryKey(expense) === key);
    const totals = expenseTotalsForRows(rows, "all");
    return { key, label: t(key), rows, ...totals };
  });

  const totalPaid = roundMoney(labourTotals.paid + supplierTotalsData.paid + expenseTotalsData.paid);
  const totalUnpaid = roundMoney(labourTotals.pending + supplierTotalsData.unpaid + expenseTotalsData.unpaid);
  const grandTotal = roundMoney(labourTotals.gross + supplierTotalsData.total + expenseTotalsData.amount);

  return {
    start,
    end,
    title,
    project,
    shift,
    supplierNames: selectedSuppliers,
    labourRows,
    labourTotals,
    supplierRows,
    supplierTotals: supplierTotalsData,
    expenseRows,
    expenseTotals: expenseTotalsData,
    buyerTotals,
    expenseCategories,
    summary: { totalPaid, totalUnpaid, grandTotal },
  };
}

function reportTable(headers, rows, emptyText = "") {
  if (!rows.length) return `<p>${escapeHTML(emptyText || t("noRecordsReport"))}</p>`;
  return `<table><thead><tr>${headers.map((header) => `<th>${escapeHTML(header)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHTML(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}

function companyExpenseReportHtml(data) {
  const projectLabel = data.project === "all" ? t("allProjects") : data.project;
  const supplierLabel = data.supplierNames.length ? data.supplierNames.join(", ") : t("all");
  const labourRows = data.labourRows.map((row) => {
    const paid = rowPaidAmount(row, data.start, data.end);
    const unpaid = rowUnpaidAmount(row, data.start, data.end);
    const normalHours = Math.max(0, Number(row.hours || 0) - Number(row.overtime || 0));
    return [
      displayWorkerName(row.worker),
      row.worker.role || t("roleWorker"),
      money(row.dailyWage || currentDailyWage(row.worker)),
      String(row.present + ((row.halfday || 0) * 0.5)),
      formatHours(normalHours),
      formatHours(row.overtime || 0),
      money(row.overtimeWage || 0),
      money(paid),
      money(unpaid),
      money(row.wage || 0),
    ];
  });
  const supplierRows = data.supplierRows.map((row) => [
    row.name,
    row.projectText,
    String(row.workers),
    row.dailyRateText,
    formatHours(row.overtimeHours),
    money(row.paid),
    money(row.unpaid),
    money(row.total),
  ]);
  const expenseCategoryRows = data.expenseCategories.map((item) => [
    item.label,
    money(item.amount),
    money(item.paid),
    money(item.unpaid),
    String(item.rows.length),
  ]);
  const buyerRows = (data.buyerTotals || []).map((buyer) => [
    buyer.buyer,
    money(buyer.amount),
    money(buyer.paid),
    money(buyer.unpaid),
    money(buyer.balance),
  ]);
  const expenseRows = data.expenseRows.map((expense) => {
    const ledger = expenseLedger(expense);
    return [
      expense.date || "-",
      expenseBuyerName(expense),
      t(investorExpenseCategoryKey(expense)),
      expense.project || "-",
      expense.merchant || "-",
      expense.description || "-",
      money(ledger.amount),
      money(ledger.paid),
      money(ledger.unpaid),
    ];
  });

  return `
    <p>${escapeHTML(data.title)} · ${t("fromDate")}: ${escapeHTML(data.start)} · ${t("toDate")}: ${escapeHTML(data.end)} · ${t("projectName")}: ${escapeHTML(projectLabel)} · ${t("supplierName")}: ${escapeHTML(supplierLabel)}</p>
    <div class="summary-grid">
      <div class="row"><span>${t("totalCompanyExpenses") || t("totalExpenses")}</span><strong>${money(data.expenseTotals.amount)}</strong></div>
      <div class="row"><span>${t("totalLabourWages")}</span><strong>${money(data.labourTotals.gross)}</strong></div>
      <div class="row"><span>${t("totalSupplierWorkerWages")}</span><strong>${money(data.supplierTotals.total)}</strong></div>
      <div class="row"><span>${t("totalPaidAmount")}</span><strong>${money(data.summary.totalPaid)}</strong></div>
      <div class="row"><span>${t("totalUnpaidAmount")}</span><strong>${money(data.summary.totalUnpaid)}</strong></div>
      <div class="row"><span>${t("grandTotalExpense")}</span><strong>${money(data.summary.grandTotal)}</strong></div>
    </div>
    <h2>${t("labourWages")}</h2>
    ${reportTable([t("worker"), t("role"), t("dailyWage"), t("attendanceDays"), t("normalHours"), t("overtime"), t("overtimeAmount"), t("paid"), t("unpaid"), t("totalWage")], labourRows, t("noRecordsReport"))}
    <h2>${t("supplierWorkerWages")}</h2>
    ${reportTable([t("supplierName"), t("projectName"), t("workersProvided"), t("dailyRate"), t("overtime"), t("paid"), t("unpaid"), t("totalSupplierAmount")], supplierRows, t("noSupplierEntries"))}
    <h2>${t("companyExpenses")}</h2>
    ${reportTable([t("expenseCategory"), t("expenseAmount"), t("paid"), t("unpaid"), t("records")], expenseCategoryRows, t("noExpenses"))}
    <h2>${t("buyerTotals")}</h2>
    ${reportTable([t("buyerName"), t("totalExpenses"), t("paid"), t("unpaid"), t("buyerBalance")], buyerRows, t("noExpenses"))}
    <h2>${t("companyExpenses")} · ${t("details")}</h2>
    ${reportTable([t("date"), t("buyerName"), t("expenseCategory"), t("projectName"), t("marketName"), t("expenseDescription"), t("expenseAmount"), t("paid"), t("unpaid")], expenseRows, t("noExpenses"))}
    <h2>${t("paymentSummary")}</h2>
    <div class="summary-grid">
      <div class="row"><span>${t("totalExpenses")}</span><strong>${money(data.expenseTotals.amount)}</strong></div>
      <div class="row"><span>${t("totalLabourWages")}</span><strong>${money(data.labourTotals.gross)}</strong></div>
      <div class="row"><span>${t("totalSupplierWorkerWages")}</span><strong>${money(data.supplierTotals.total)}</strong></div>
      <div class="row"><span>${t("totalPaidAmount")}</span><strong>${money(data.summary.totalPaid)}</strong></div>
      <div class="row"><span>${t("totalUnpaidAmount")}</span><strong>${money(data.summary.totalUnpaid)}</strong></div>
      <div class="row"><span>${t("grandTotalExpense")}</span><strong>${money(data.summary.grandTotal)}</strong></div>
    </div>
  `;
}

function printCompanyExpenseReport() {
  return withLanguage(reportLanguage(), () => {
    renderReport();
    const data = companyExpenseReportData();
    printPlainReport(t("companyExpenseReport"), companyExpenseReportHtml(data));
    addLog("Investor company expense report printed", `${data.start} to ${data.end} · ${data.project}`);
    saveData(false);
  });
}

function exportCompanyExpenseReportCSV() {
  return withLanguage(reportLanguage(), () => {
    renderReport();
    const data = companyExpenseReportData();
    const rows = [];
    rows.push([t("companyExpenseReport"), data.title]);
    rows.push([t("fromDate"), data.start, t("toDate"), data.end, t("projectName"), data.project === "all" ? t("allProjects") : data.project]);
    rows.push([]);
    rows.push([t("paymentSummary")]);
    rows.push([t("totalExpenses"), money(data.expenseTotals.amount)]);
    rows.push([t("totalLabourWages"), money(data.labourTotals.gross)]);
    rows.push([t("totalSupplierWorkerWages"), money(data.supplierTotals.total)]);
    rows.push([t("totalPaidAmount"), money(data.summary.totalPaid)]);
    rows.push([t("totalUnpaidAmount"), money(data.summary.totalUnpaid)]);
    rows.push([t("grandTotalExpense"), money(data.summary.grandTotal)]);
    rows.push([]);
    rows.push([t("labourWages")]);
    rows.push([t("worker"), t("role"), t("dailyWage"), t("attendanceDays"), t("normalHours"), t("overtime"), t("overtimeAmount"), t("paid"), t("unpaid"), t("totalWage")]);
    data.labourRows.forEach((row) => {
      rows.push([
        displayWorkerName(row.worker),
        row.worker.role || t("roleWorker"),
        money(row.dailyWage || currentDailyWage(row.worker)),
        String(row.present + ((row.halfday || 0) * 0.5)),
        formatHours(Math.max(0, Number(row.hours || 0) - Number(row.overtime || 0))),
        formatHours(row.overtime || 0),
        money(row.overtimeWage || 0),
        money(rowPaidAmount(row, data.start, data.end)),
        money(rowUnpaidAmount(row, data.start, data.end)),
        money(row.wage || 0),
      ]);
    });
    rows.push([]);
    rows.push([t("supplierWorkerWages")]);
    rows.push([t("supplierName"), t("projectName"), t("workersProvided"), t("dailyRate"), t("overtime"), t("paid"), t("unpaid"), t("totalSupplierAmount")]);
    data.supplierRows.forEach((row) => rows.push([row.name, row.projectText, row.workers, row.dailyRateText, formatHours(row.overtimeHours), money(row.paid), money(row.unpaid), money(row.total)]));
    rows.push([]);
    rows.push([t("companyExpenses")]);
    rows.push([t("expenseCategory"), t("expenseAmount"), t("paid"), t("unpaid"), t("records")]);
    data.expenseCategories.forEach((item) => rows.push([item.label, money(item.amount), money(item.paid), money(item.unpaid), item.rows.length]));
    rows.push([]);
    rows.push([t("companyExpenses"), t("details")]);
    rows.push([t("date"), t("buyerName"), t("expenseCategory"), t("projectName"), t("marketName"), t("expenseDescription"), t("expenseAmount"), t("paid"), t("unpaid")]);
    data.expenseRows.forEach((expense) => {
      const ledger = expenseLedger(expense);
      rows.push([expense.date || "-", expenseBuyerName(expense), t(investorExpenseCategoryKey(expense)), expense.project || "-", expense.merchant || "-", expense.description || "-", money(ledger.amount), money(ledger.paid), money(ledger.unpaid)]);
    });
    downloadFile(`company-expense-report-${data.start}-${data.end}.csv`, `\ufeff${rows.map((row) => row.map(csvCell).join(",")).join("\n")}`, "text/csv;charset=utf-8");
    addLog("Investor company expense CSV exported", `${data.start} to ${data.end} · ${data.project}`);
    saveData(false);
  });
}

function projectNameOf(value) {
  return String(value || "").trim();
}

function projectNames() {
  const names = [
    ...(app.projectBudgets || []).map((entry) => projectNameOf(entry.project)),
    ...(app.expenses || []).map((expense) => projectNameOf(expense.project)),
    ...(app.supplierEntries || []).map((entry) => projectNameOf(entry.project)),
    ...(app.workers || []).map((worker) => projectNameOf(worker.project)),
  ];
  return Array.from(new Set(names.filter(Boolean))).sort((a, b) => a.localeCompare(b));
}

function budgetEntriesForMonth(month = monthISO()) {
  return (app.projectBudgets || []).filter((entry) => String(entry.date || "").startsWith(month));
}

function monthsBetweenRange(startMonth = monthISO(), endMonth = startMonth) {
  const start = String(startMonth || monthISO()).slice(0, 7);
  const end = String(endMonth || start).slice(0, 7);
  const first = start <= end ? start : end;
  const last = start <= end ? end : start;
  const months = [];
  const cursor = dateFromISO(`${first}-01`);
  while (localMonthISO(cursor) <= last) {
    months.push(localMonthISO(cursor));
    cursor.setMonth(cursor.getMonth() + 1);
  }
  return months;
}

function budgetEntriesForRange(startMonth = monthISO(), endMonth = startMonth) {
  const months = new Set(monthsBetweenRange(startMonth, endMonth));
  return (app.projectBudgets || []).filter((entry) => months.has(String(entry.date || "").slice(0, 7)));
}

function expensesForMonthRange(startMonth = monthISO(), endMonth = startMonth) {
  const months = new Set(monthsBetweenRange(startMonth, endMonth));
  return (app.expenses || []).filter((expense) => months.has(String(expense.date || "").slice(0, 7)));
}

function projectExpenseRows(project = "all", startMonth = monthISO(), endMonth = startMonth) {
  return expensesForMonthRange(startMonth, endMonth).filter((expense) => {
    const name = projectNameOf(expense.project);
    return project === "all" || (name && name === project);
  });
}

function projectWorkerWageRows(project = "all", startMonth = monthISO(), endMonth = startMonth) {
  return monthsBetweenRange(startMonth, endMonth).flatMap((month) => {
    const dates = daysInMonth(month);
    return monthSummary(month)
      .filter((row) => project === "all" || projectNameOf(row.worker?.project) === project)
      .map((row) => ({
        month,
        worker: row.worker,
        amount: rowFinalPayable(row, dates[0], dates[dates.length - 1]),
        paid: rowPaymentDeducted(row, dates[0], dates[dates.length - 1]),
        unpaid: rowUnpaidAmount(row, dates[0], dates[dates.length - 1]),
      }));
  });
}

function projectSupplierRows(project = "all", startMonth = monthISO(), endMonth = startMonth) {
  const months = monthsBetweenRange(startMonth, endMonth);
  const start = `${months[0] || startMonth}-01`;
  const endDates = daysInMonth(months[months.length - 1] || endMonth);
  const end = endDates[endDates.length - 1];
  return supplierEntriesForRange(start, end).filter((entry) => {
    const name = projectNameOf(entry.project);
    return project === "all" || (name && name === project);
  });
}

function projectBudgetSummary(startMonth = monthISO(), selectedProject = "all", endMonth = startMonth) {
  const entries = budgetEntriesForRange(startMonth, endMonth).filter((entry) => selectedProject === "all" || projectNameOf(entry.project) === selectedProject);
  const expenses = projectExpenseRows(selectedProject, startMonth, endMonth);
  const workerWages = projectWorkerWageRows(selectedProject, startMonth, endMonth);
  const supplierEntries = projectSupplierRows(selectedProject, startMonth, endMonth);
  const months = monthsBetweenRange(startMonth, endMonth);
  const rangeStart = `${months[0] || startMonth}-01`;
  const rangeEndDates = daysInMonth(months[months.length - 1] || endMonth);
  const rangeEnd = rangeEndDates[rangeEndDates.length - 1];
  const supplierSummary = supplierTotals(supplierEntries, rangeStart, rangeEnd);
  const received = roundMoney(entries.reduce((sum, entry) => sum + Number(entry.amount || 0), 0));
  const companySpent = roundMoney(expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0));
  const workerSpent = roundMoney(workerWages.reduce((sum, item) => sum + Number(item.amount || 0), 0));
  const supplierSpent = supplierSummary.total;
  const labourSpent = roundMoney(workerSpent + supplierSpent);
  const spent = roundMoney(companySpent + labourSpent);
  const expensePaid = roundMoney(expenses.reduce((sum, expense) => sum + expenseLedger(expense).paid, 0));
  const expenseUnpaid = roundMoney(expenses.reduce((sum, expense) => sum + expenseLedger(expense).unpaid, 0));
  const workerPaid = roundMoney(workerWages.reduce((sum, item) => sum + Number(item.paid || 0), 0));
  const workerUnpaid = roundMoney(workerWages.reduce((sum, item) => sum + Number(item.unpaid || 0), 0));
  const supplierPaid = supplierSummary.paid;
  const supplierUnpaid = supplierSummary.unpaid;
  const paid = roundMoney(expensePaid + workerPaid + supplierPaid);
  const unpaid = roundMoney(expenseUnpaid + workerUnpaid + supplierUnpaid);
  return { entries, expenses, workerWages, supplierEntries, received, spent, companySpent, workerSpent, supplierSpent, labourSpent, expensePaid, expenseUnpaid, workerPaid, workerUnpaid, supplierPaid, supplierUnpaid, paid, unpaid, remaining: roundMoney(received - spent) };
}

function projectSummaryRows(startMonth = monthISO(), selectedProject = "all", endMonth = startMonth) {
  const names = selectedProject === "all" ? projectNames() : [selectedProject];
  return names.map((project) => ({ project, ...projectBudgetSummary(startMonth, project, endMonth) }))
    .filter((row) => row.project && (row.received || row.spent || row.labourSpent || row.entries.length || row.expenses.length || row.workerWages.length || row.supplierEntries.length));
}

function renderProjectOptions() {
  const names = projectNames();
  const datalist = $("#projectNameOptions");
  if (datalist) datalist.innerHTML = names.map((name) => `<option value="${escapeHTML(name)}"></option>`).join("");
  const filter = $("#budgetProjectFilter");
  if (filter) {
    const current = filter.value || "all";
    filter.innerHTML = `<option value="all">${t("allProjects")}</option>${names.map((name) => `<option value="${escapeHTML(name)}">${escapeHTML(name)}</option>`).join("")}`;
    filter.value = names.includes(current) ? current : "all";
  }
}

function renderProjectsBudget() {
  if (!$("#budgetEntriesList")) return;
  renderProjectOptions();
  const startMonth = $("#budgetFromMonth")?.value || monthISO();
  const endMonth = $("#budgetToMonth")?.value || startMonth;
  const selectedProject = $("#budgetProjectFilter")?.value || "all";
  const summary = projectBudgetSummary(startMonth, selectedProject, endMonth);
  $("#budgetSummary").innerHTML = `
    <article><span>${t("budgetReceived")}</span><strong>${money(summary.received)}</strong></article>
    <article><span>${t("totalAllMonthsWages")}</span><strong>${money(summary.labourSpent)}</strong></article>
    <article><span>${t("totalCompanyCost")}</span><strong>${money(summary.spent)}</strong></article>
    <article><span>${t("unpaid")}</span><strong>${money(summary.unpaid)}</strong></article>
    <article><span>${t("monthlyExpenses")}</span><strong>${money(summary.companySpent)}</strong></article>
  `;
  $("#budgetEntriesList").innerHTML = summary.entries
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
    .map((entry) => `
      <tr>
        <td>${escapeHTML(entry.date || "-")}</td>
        <td>${escapeHTML(entry.investor || "-")}</td>
        <td>${escapeHTML(entry.project || "-")}</td>
        <td><strong>${money(entry.amount)}</strong></td>
        <td>${escapeHTML(entry.method || "-")}</td>
        <td>${escapeHTML(entry.notes || "-")}</td>
        <td>
          <button class="ghost" data-edit-budget="${entry.id}">${t("editExpense")}</button>
          <button class="danger ghost" data-remove-budget="${entry.id}">${t("remove")}</button>
        </td>
      </tr>
    `).join("") || `<tr><td colspan="7">${t("noBudgetEntries")}</td></tr>`;
}

function resetBudgetForm(keepDate = true) {
  const date = $("#budgetDate")?.value || todayISO();
  $("#budgetForm")?.reset();
  if ($("#budgetEditId")) $("#budgetEditId").value = "";
  if (keepDate && $("#budgetDate")) $("#budgetDate").value = date;
  if ($("#saveBudgetEntry")) $("#saveBudgetEntry").textContent = t("addBudgetEntry");
  $("#cancelBudgetEdit")?.classList.add("hidden");
}

function addBudgetEntryFromForm() {
  if (!requireAdmin()) return;
  app.projectBudgets ||= [];
  const editId = $("#budgetEditId")?.value || "";
  const existing = editId ? app.projectBudgets.find((entry) => entry.id === editId) : null;
  const entry = {
    id: existing?.id || makeId(),
    date: $("#budgetDate").value || todayISO(),
    investor: $("#budgetInvestor").value.trim(),
    project: $("#budgetProject").value.trim(),
    amount: roundMoney($("#budgetAmount").value || 0),
    method: $("#budgetMethod").value || "cash",
    notes: $("#budgetNotes").value.trim(),
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: currentUserLabel(),
  };
  if (!entry.investor || !entry.project || entry.amount <= 0) {
    toast(t("requiredFields"));
    return;
  }
  if (existing) {
    Object.assign(existing, entry);
    addLog("Budget updated", `${entry.project} · ${entry.investor} · ${money(entry.amount)}`);
  } else {
    app.projectBudgets.unshift(entry);
    addLog("Budget added", `${entry.project} · ${entry.investor} · ${money(entry.amount)}`);
  }
  resetBudgetForm(true);
  saveData();
  toast(existing ? t("budgetEntryUpdated") : t("budgetEntrySaved"));
}

function editBudgetEntry(id) {
  if (!requireAdmin()) return;
  const entry = (app.projectBudgets || []).find((item) => item.id === id);
  if (!entry) return;
  $("#budgetEditId").value = entry.id;
  $("#budgetDate").value = entry.date || todayISO();
  $("#budgetInvestor").value = entry.investor || "";
  $("#budgetProject").value = entry.project || "";
  $("#budgetAmount").value = Number(entry.amount || 0);
  $("#budgetMethod").value = entry.method || "cash";
  $("#budgetNotes").value = entry.notes || "";
  if ($("#saveBudgetEntry")) $("#saveBudgetEntry").textContent = t("saveExpenseChanges");
  $("#cancelBudgetEdit")?.classList.remove("hidden");
  $("#budgetForm")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function removeBudgetEntry(id) {
  if (!requireAdmin()) return;
  const entry = (app.projectBudgets || []).find((item) => item.id === id);
  app.projectBudgets = (app.projectBudgets || []).filter((item) => item.id !== id);
  if ($("#budgetEditId")?.value === id) resetBudgetForm(true);
  addLog("Budget removed", entry ? `${entry.project} · ${entry.investor} · ${money(entry.amount)}` : id);
  saveData();
  toast(t("budgetEntryRemoved"));
}

function budgetReportRows(startMonth = $("#budgetFromMonth")?.value || monthISO(), selectedProject = $("#budgetProjectFilter")?.value || "all", endMonth = $("#budgetToMonth")?.value || startMonth) {
  return projectSummaryRows(startMonth, selectedProject, endMonth).map((row) => [
    row.project,
    money(row.received),
    money(row.companySpent),
    money(row.labourSpent),
    money(row.spent),
    money(row.paid),
    money(row.unpaid),
    money(row.remaining),
  ]);
}

function printBudgetReport() {
  const startMonth = $("#budgetFromMonth")?.value || monthISO();
  const endMonth = $("#budgetToMonth")?.value || startMonth;
  const selectedProject = $("#budgetProjectFilter")?.value || "all";
  const summary = projectBudgetSummary(startMonth, selectedProject, endMonth);
  const rows = budgetReportRows(startMonth, selectedProject, endMonth);
  const headers = [t("projectName"), t("budgetReceived"), t("companyExpenseCost"), t("workerWageCost"), t("projectExpenses"), t("paid"), t("unpaid"), t("budgetRemaining")];
  const table = `<table><thead><tr>${headers.map((header) => `<th>${escapeHTML(header)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHTML(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
  printPlainReport(t("partnerReport"), `
    <p>${t("fromMonth")}: ${escapeHTML(startMonth)} · ${t("toMonth")}: ${escapeHTML(endMonth)} · ${selectedProject === "all" ? t("allProjects") : escapeHTML(selectedProject)}</p>
    <div class="row"><span>${t("budgetReceived")}</span><strong>${money(summary.received)}</strong></div>
    <div class="row"><span>${t("companyExpenseCost")}</span><strong>${money(summary.companySpent)}</strong></div>
    <div class="row"><span>${t("workerWageCost")}</span><strong>${money(summary.labourSpent)}</strong></div>
    <div class="row"><span>${t("projectExpenses")}</span><strong>${money(summary.spent)}</strong></div>
    <div class="row"><span>${t("budgetRemaining")}</span><strong>${money(summary.remaining)}</strong></div>
    ${table}
  `);
  addLog("Partner budget report printed", `${startMonth} to ${endMonth} · ${selectedProject}`);
}

function exportBudgetCSV() {
  const headers = [t("projectName"), t("budgetReceived"), t("companyExpenseCost"), t("workerWageCost"), t("projectExpenses"), t("paid"), t("unpaid"), t("budgetRemaining")];
  const rows = [headers, ...budgetReportRows()];
  downloadFile(`project-budget-report-${todayISO()}.csv`, `\ufeff${rows.map((row) => row.map(csvCell).join(",")).join("\n")}`, "text/csv;charset=utf-8");
  addLog("Budget CSV exported", `${rows.length - 1} projects`);
  saveData(false);
}

function renderSupplierWorkers() {
  if (!$("#supplierEntriesList")) return;
  renderProjectOptions();
  const month = $("#supplierMonth")?.value || monthISO();
  const allMonthEntries = monthSupplierEntries(month);
  const filtered = filteredSupplierEntries();
  const monthDates = daysInMonth(month);
  const totals = supplierTotals(allMonthEntries, monthDates[0], monthDates[monthDates.length - 1]);
  const names = Array.from(new Set((app.supplierEntries || []).map((entry) => String(entry.supplierName || "").trim()).filter(Boolean))).sort();
  $("#supplierNameOptions").innerHTML = names.map((name) => `<option value="${escapeHTML(name)}"></option>`).join("");
  $("#supplierSummary").innerHTML = `
    <article><span>${t("supplierWorkerCount")}</span><strong>${totals.workers}</strong></article>
    <article><span>${t("normalAmount")}</span><strong>${money(totals.normal)}</strong></article>
    <article><span>${t("overtimeAmount")}</span><strong>${money(totals.overtime)}</strong></article>
    <article><span>${t("transportationCharges")}</span><strong>${money(totals.transportationCharges)}</strong></article>
    <article><span>${t("previousLoan")}</span><strong>${money(totals.previousLoan)}</strong></article>
    <article><span>${t("totalSupplierAmount")}</span><strong>${money(totals.total)}</strong></article>
    <article><span>${t("paid")}</span><strong>${money(totals.paid)}</strong></article>
    <article><span>${t("unpaid")}</span><strong>${money(totals.unpaid)}</strong></article>
  `;
  $("#supplierEntriesList").innerHTML = filtered.map((entry) => {
    const totals = supplierEntryTotals(entry);
    const ledgerPaid = supplierPaymentTotal(entry.supplierName, entry.date || todayISO(), entry.date || todayISO());
    const paid = roundMoney(totals.paid + ledgerPaid);
    const unpaid = roundMoney(Math.max(0, totals.total - paid));
    return `<tr>
      <td>${entry.date || "-"}</td>
      <td>${escapeHTML(entry.supplierName || "-")}</td>
      <td>${escapeHTML(entry.project || "-")}</td>
      <td>${totals.workers}</td>
      <td>${money(totals.dailyWage)}</td>
      <td>${formatHours(totals.overtimeHours)}</td>
      <td>${money(totals.normalAmount)}</td>
      <td>${money(totals.overtimeAmount)}</td>
      <td>${money(totals.transportationCharges)}</td>
      <td>${money(totals.previousLoan)}</td>
      <td><strong>${money(totals.total)}</strong></td>
      <td>${money(paid)}</td>
      <td><strong>${money(unpaid)}</strong></td>
      <td>${escapeHTML(entry.notes || "-")}</td>
      <td>
        <button class="ghost" data-edit-supplier="${entry.id}">${t("editExpense")}</button>
        <button class="danger ghost" data-remove-supplier="${entry.id}">${t("remove")}</button>
      </td>
    </tr>`;
  }).join("") || `<tr><td colspan="15">${t("noSupplierEntries")}</td></tr>`;
}

function resetSupplierForm(keepDate = true) {
  const date = $("#supplierDate")?.value || todayISO();
  $("#supplierForm")?.reset();
  if ($("#supplierEditId")) $("#supplierEditId").value = "";
  if (keepDate && $("#supplierDate")) $("#supplierDate").value = date;
  if ($("#supplierOvertimeHours")) $("#supplierOvertimeHours").value = 0;
  if ($("#supplierTransportationCharges")) $("#supplierTransportationCharges").value = 0;
  if ($("#supplierPreviousLoan")) $("#supplierPreviousLoan").value = 0;
  if ($("#supplierPaidAmount")) $("#supplierPaidAmount").value = 0;
  if ($("#saveSupplierEntry")) $("#saveSupplierEntry").textContent = t("addSupplierEntry");
  $("#cancelSupplierEdit")?.classList.add("hidden");
}

function addSupplierEntryFromForm() {
  const date = $("#supplierDate").value || todayISO();
  const supplierName = $("#supplierName").value.trim();
  const workerCount = Math.max(0, Number($("#supplierWorkerCount").value || 0));
  const dailyWage = roundMoney($("#supplierDailyWage").value || 0);
  const editId = $("#supplierEditId")?.value || "";
  const existing = editId ? app.supplierEntries.find((item) => item.id === editId) : null;
  if (!canChangePayrollDate(existing?.date || date, "Supplier entry")) return;
  if (existing?.date && existing.date !== date && !canChangePayrollDate(date, "Supplier entry date")) return;
  if (!supplierName || workerCount <= 0 || dailyWage <= 0) {
    toast(t("requiredFields"));
    return;
  }
  const entry = {
    id: existing?.id || makeId(),
    date,
    supplierName,
    project: $("#supplierProject")?.value.trim() || "",
    workerCount,
    dailyWage,
    overtimeHours: Math.max(0, Number($("#supplierOvertimeHours").value || 0)),
    transportationCharges: roundMoney($("#supplierTransportationCharges").value || 0),
    previousLoan: roundMoney($("#supplierPreviousLoan").value || 0),
    paidAmount: roundMoney($("#supplierPaidAmount").value || 0),
    notes: $("#supplierNotes").value.trim(),
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: currentUserLabel(),
  };
  if (existing) {
    Object.assign(existing, entry);
    addLog("Supplier entry updated", `${supplierName} · ${date} · ${workerCount} workers · ${money(supplierEntryTotals(entry).total)}`);
  } else {
    app.supplierEntries.unshift(entry);
    addLog("Supplier entry added", `${supplierName} · ${date} · ${workerCount} workers · ${money(supplierEntryTotals(entry).total)}`);
  }
  resetSupplierForm(true);
  saveData();
  toast(existing ? t("supplierEntryUpdated") : t("supplierEntrySaved"));
}

function editSupplierEntry(id) {
  const entry = app.supplierEntries.find((item) => item.id === id);
  if (!entry) return;
  $("#supplierEditId").value = entry.id;
  $("#supplierDate").value = entry.date || todayISO();
  $("#supplierName").value = entry.supplierName || "";
  if ($("#supplierProject")) $("#supplierProject").value = entry.project || "";
  $("#supplierWorkerCount").value = Number(entry.workerCount || 0);
  $("#supplierDailyWage").value = Number(entry.dailyWage || 0);
  $("#supplierOvertimeHours").value = Number(entry.overtimeHours || 0);
  $("#supplierTransportationCharges").value = Number(entry.transportationCharges || 0);
  $("#supplierPreviousLoan").value = Number(entry.previousLoan || 0);
  $("#supplierPaidAmount").value = Number(entry.paidAmount || 0);
  $("#supplierNotes").value = entry.notes || "";
  if ($("#saveSupplierEntry")) $("#saveSupplierEntry").textContent = t("saveExpenseChanges");
  $("#cancelSupplierEdit")?.classList.remove("hidden");
  $("#supplierForm")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function removeSupplierEntry(id) {
  const entry = app.supplierEntries.find((item) => item.id === id);
  if (!entry || !canChangePayrollDate(entry.date || todayISO(), "Remove supplier entry")) return;
  app.supplierEntries = app.supplierEntries.filter((item) => item.id !== id);
  if ($("#supplierEditId")?.value === id) resetSupplierForm(true);
  addLog("Supplier entry removed", `${entry?.supplierName || id} · ${entry?.date || "-"}`);
  saveData();
  toast(t("supplierEntryRemoved"));
}

function printSupplierReport() {
  const entries = filteredSupplierEntries();
  const rows = supplierReportRows(entries);
  const totals = supplierTotals(entries);
  const headers = [t("date"), t("supplierName"), t("projectName"), t("supplierWorkerCount"), t("supplierDailyWage"), t("supplierOvertimeHours"), t("normalAmount"), t("overtimeAmount"), t("transportationCharges"), t("previousLoan"), t("totalSupplierAmount"), t("paidAmount"), t("unpaidAmount"), t("paymentNote")];
  const table = `<table><thead><tr>${headers.map((header) => `<th>${escapeHTML(header)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHTML(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
  printPlainReport(t("supplierWorkers"), `
    <div class="row"><span>${t("totalSupplierAmount")}</span><strong>${money(totals.total)}</strong></div>
    <div class="row"><span>${t("paid")}</span><strong>${money(totals.paid)}</strong></div>
    <div class="row"><span>${t("unpaid")}</span><strong>${money(totals.unpaid)}</strong></div>
    ${table}
  `);
  addLog("Supplier report printed", `${entries.length} rows`);
}

function exportSupplierCSV() {
  const headers = [t("date"), t("supplierName"), t("projectName"), t("supplierWorkerCount"), t("supplierDailyWage"), t("supplierOvertimeHours"), t("normalAmount"), t("overtimeAmount"), t("transportationCharges"), t("previousLoan"), t("totalSupplierAmount"), t("paidAmount"), t("unpaidAmount"), t("paymentNote")];
  const rows = [headers, ...supplierReportRows()];
  downloadFile(`supplier-workers-report-${todayISO()}.csv`, `\ufeff${rows.map((row) => row.map(csvCell).join(",")).join("\n")}`, "text/csv;charset=utf-8");
  addLog("Supplier CSV exported", `${rows.length - 1} rows`);
  saveData(false);
}

function renderExpenses() {
  const list = $("#expensesList");
  if (!list) return;
  renderProjectOptions();
  const month = $("#expenseMonth").value || monthISO();
  const allRows = monthExpenses(month);
  const buyers = Array.from(new Set(allRows.map(expenseBuyerName).filter((buyer) => buyer !== "-"))).sort((a, b) => a.localeCompare(b));
  const buyerOptions = $("#expenseBuyerOptions");
  if (buyerOptions) buyerOptions.innerHTML = buyers.map((buyer) => `<option value="${escapeHTML(buyer)}"></option>`).join("");
  const reportBuyerSelect = $("#expenseReportBuyers");
  if (reportBuyerSelect) {
    const selected = new Set(selectedExpenseReportBuyers());
    reportBuyerSelect.innerHTML = buyers.map((buyer) => `<option value="${escapeHTML(buyer)}" ${selected.has(buyer) ? "selected" : ""}>${escapeHTML(buyer)}</option>`).join("");
  }
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
    const weekDates = weekRange($("#todayInput")?.value || todayISO());
    const weekStart = weekDates[0];
    const weekEnd = weekDates[weekDates.length - 1];
    const monthDates = daysInMonth(month);
    const monthStart = monthDates[0];
    const monthEnd = monthDates[monthDates.length - 1];
    const weeklyRows = expenseRowsBetween(weekStart, weekEnd, buyerFilter);
    const monthlyRows = expenseRowsBetween(monthStart, monthEnd, buyerFilter);
    const buyerTotals = expenseBuyerTotals(monthlyRows);
    const categories = [
      ["all", t("overallExpense")],
      ["fuel", t("fuelExpense")],
      ["room", t("roomExpense")],
      ["breakfast", t("breakfastExpense")],
      ["food", t("foodExpense")],
    ];
    summary.innerHTML = `
      <article><span>${t("expenseSummary")}</span><strong>${buyerFilter ? escapeHTML(buyerFilter) : t("allBuyers")}</strong></article>
      <article><span>${t("totalExpenses")}</span><strong>${money(totals.amount)}</strong></article>
      <article><span>${t("moneyGiven")}</span><strong>${money(totals.paid)}</strong></article>
      <article><span>${t("expenseUnpaid")}</span><strong>${money(totals.unpaid)}</strong></article>
      <article><span>${t("buyerBalance")}</span><strong>${money(totals.balance)}</strong></article>
      ${categories.map(([key, label]) => {
        const week = expenseTotalsForRows(weeklyRows, key);
        const monthTotal = expenseTotalsForRows(monthlyRows, key);
        return `
          <article class="expense-category-card">
            <span>${escapeHTML(label)}</span>
            <strong>${money(monthTotal.amount)}</strong>
            <small>${t("monthlyExpense")} · ${month}</small>
            <small>${t("weeklyExpense")} · ${money(week.amount)}</small>
            <small>${t("paid")}: ${money(monthTotal.paid)} · ${t("unpaid")}: ${money(monthTotal.unpaid)}</small>
          </article>
        `;
      }).join("")}
      ${buyerTotals.length ? `
        <article class="expense-category-card">
          <span>${t("buyerTotals")}</span>
          <strong>${buyerTotals.length}</strong>
          <small>${t("monthlyExpense")} · ${month}</small>
        </article>
        ${buyerTotals.map((buyer) => `
          <article class="expense-category-card">
            <span>${escapeHTML(buyer.buyer)}</span>
            <strong>${money(buyer.amount)}</strong>
            <small>${t("paid")}: ${money(buyer.paid)}</small>
            <small>${t("unpaid")}: ${money(buyer.unpaid)}</small>
            ${buyer.balance ? `<small>${t("buyerBalance")}: ${money(buyer.balance)}</small>` : ""}
          </article>
        `).join("")}
      ` : ""}
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
      <td>${escapeHTML(expense.project || "-")}</td>
      <td>${escapeHTML(expense.merchant || "-")}</td>
      <td>${escapeHTML(expense.location || "-")}</td>
      <td>${escapeHTML(expense.description || "-")}</td>
      <td><strong>${money(expense.amount)}</strong></td>
      <td>${money(ledger.paid)}</td>
      <td>${money(ledger.unpaid)}</td>
      <td>${ledger.balance ? `${money(ledger.balance)}<br><small>${t("expenseOverpaidHelp")}</small>` : money(0)}</td>
      <td><span class="status-pill ${ledger.status === "paid" ? "paid" : "unpaid"}">${expenseStatusLabel(ledger.status)}</span></td>
      <td>${expense.receiptPhoto ? `<button class="ghost" data-view-expense="${expense.id}">${t("viewBill")}</button>` : "-"}</td>
      <td>
        <button class="ghost" data-edit-expense="${expense.id}">${t("editExpense")}</button>
        <button class="danger ghost" data-remove-expense="${expense.id}">${t("remove")}</button>
      </td>
        `;
      })()}
    </tr>
  `).join("") : `<tr><td colspan="14">${t("noExpenses")}</td></tr>`;
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
      if (record.status === "present" && hours.total > 14) alerts.push(`${label}: more than 14 total attendance hours`);
      if (record.foodDeduction > payable && payable > 0) alerts.push(`${label}: food deduction bigger than wage`);
      if (paid > payable && payable > 0) alerts.push(`${label}: payment bigger than payable wage`);
    });
  });
  return alerts;
}

function verifyPayrollCalculations(month = monthISO()) {
  const dates = daysInMonth(month);
  const start = dates[0];
  const end = dates[dates.length - 1];
  const rows = monthSummary(month);
  const issues = [];

  rows.forEach((row) => {
    const expectedWage = roundMoney(Math.max(0, Number(row.baseWage || 0) + Number(row.overtimeWage || 0) - Number(row.foodDeduction || 0)));
    const paid = rowPaidAmount(row, start, end);
    const expectedFinalPayable = roundMoney(Math.max(0, expectedWage - rowAdvanceDeduction(row, start, end)));
    const expectedUnpaid = roundMoney(Math.max(0, expectedFinalPayable - paid));
    const shownUnpaid = rowUnpaidAmount(row, start, end);
    const name = displayWorkerName(row.worker);

    if (roundMoney(row.wage) !== expectedWage) issues.push(`${name}: payable wage check failed`);
    if (shownUnpaid !== expectedUnpaid) issues.push(`${name}: unpaid wage check failed`);
    if (row.halfday > 0 && row.baseWage < 0) issues.push(`${name}: half day wage invalid`);
    if (row.overtime < 0 || row.overtimeWage < 0) issues.push(`${name}: overtime cannot be negative`);
    if (row.foodDeduction > row.baseWage + row.overtimeWage && row.wage > 0) issues.push(`${name}: food deduction check failed`);
  });

  return {
    month,
    rowCount: rows.length,
    issueCount: issues.length,
    issues,
    checkedAt: new Date().toISOString(),
  };
}

function assistantMonthContext() {
  const month = $("#dashboardMonth")?.value || $("#reportMonth")?.value || monthISO();
  const dates = daysInMonth(month);
  const rows = monthSummary(month).filter((row) => row.worker.status === "active");
  const pay = paymentTotals(rows, dates[0], dates[dates.length - 1]);
  const wages = pay.finalPayable;
  const expenses = companyExpenseTotal(month);
  return { month, dates, rows, pay, wages, expenses };
}

function assistantTodayContext() {
  const date = $("#todayInput")?.value || todayISO();
  const records = app.attendance[date] || {};
  const active = activeWorkers();
  const present = active.filter((worker) => ["present", "halfday"].includes(getAttendanceRecord(date, worker.id).status));
  const absent = active.filter((worker) => getAttendanceRecord(date, worker.id).status === "absent");
  const off = active.filter((worker) => getAttendanceRecord(date, worker.id).status === "off");
  const unmarked = active.filter((worker) => !records[worker.id]);
  return { date, active, present, absent, off, unmarked };
}

function assistantFindWorker(question) {
  const normalized = question.toLowerCase();
  return app.workers.find((worker) => [worker.name, worker.namePs, worker.phone, worker.emiratesId]
    .filter(Boolean)
    .some((value) => normalized.includes(String(value).toLowerCase())));
}

function assistantWorkerReport(worker) {
  const context = assistantMonthContext();
  const row = monthSummary(context.month, worker.id)[0];
  if (!row) return `${displayWorkerName(worker)}: ${t("noWageRecords")}`;
  const paid = rowPaidAmount(row, context.dates[0], context.dates[context.dates.length - 1]);
  const unpaid = rowUnpaidAmount(row, context.dates[0], context.dates[context.dates.length - 1]);
  const advance = rowAdvanceDeduction(row, context.dates[0], context.dates[context.dates.length - 1]);
  const finalPayable = rowFinalPayable(row, context.dates[0], context.dates[context.dates.length - 1]);
  const paymentDeducted = rowPaymentDeducted(row, context.dates[0], context.dates[context.dates.length - 1]);
  const extraPaid = rowExtraPaidBalance(row, context.dates[0], context.dates[context.dates.length - 1]);
  return [
    `${displayWorkerName(worker)} · ${context.month}`,
    `${t("status")}: ${t(worker.status || "active")} · ${t("shift")}: ${attendanceShiftLabel(workerDefaultShift(worker))}`,
    `${t("present")}: ${row.present} · ${t("halfday")}: ${row.halfday || 0} · ${t("absent")}: ${row.absent} · ${t("off")}: ${row.off}`,
    `${t("hours")}: ${formatHours(row.hours)} · ${t("overtime")}: ${formatHours(row.overtime)}`,
    `${t("grossPayable")}: ${money(row.wage)} · ${t("advanceDeducted")}: ${money(advance)} · ${t("payableAfterAdvance")}: ${money(finalPayable)} · ${t("paymentDeducted")}: ${money(paymentDeducted)} · ${t("workerBalance")}: ${money(unpaid)} · ${t("extraPaidBalance")}: ${money(extraPaid)}`,
  ].join("\n");
}

function assistantAnswer(question) {
  const q = question.trim().toLowerCase();
  const today = assistantTodayContext();
  const context = assistantMonthContext();
  const foundWorker = assistantFindWorker(question);
  if (foundWorker) return assistantWorkerReport(foundWorker);
  if (q.includes("today") || q.includes("نن")) {
    return [
      `${t("today")}: ${today.date}`,
      `${t("activeWorkers")}: ${today.active.length}`,
      `${t("presentToday")}: ${today.present.length}`,
      `${t("absent")}: ${today.absent.length}`,
      `${t("off")}: ${today.off.length}`,
      `${t("notMarked")}: ${today.unmarked.length}`,
      today.unmarked.length ? `${t("notMarked")}: ${today.unmarked.slice(0, 10).map(displayWorkerName).join(", ")}` : "",
    ].filter(Boolean).join("\n");
  }
  if (q.includes("unpaid") || q.includes("pending") || q.includes("ناادا")) {
    const rows = context.rows
      .map((row) => ({ row, unpaid: rowUnpaidAmount(row, context.dates[0], context.dates[context.dates.length - 1]) }))
      .filter((item) => item.unpaid > 0)
      .sort((a, b) => b.unpaid - a.unpaid);
    return rows.length
      ? [`${t("unpaidWages")} · ${context.month}: ${money(rows.reduce((sum, item) => sum + item.unpaid, 0))}`, ...rows.slice(0, 20).map((item) => `${displayWorkerName(item.row.worker)}: ${money(item.unpaid)}`)].join("\n")
      : `${t("unpaidWages")} · ${context.month}: ${money(0)}`;
  }
  if (q.includes("paid")) return `${t("paidWages")} · ${context.month}: ${money(context.pay.paid)}\n${t("unpaidWages")}: ${money(context.pay.pending)}`;
  if (q.includes("expense") || q.includes("مصارف")) {
    const expenses = monthExpenses(context.month);
    const paid = expenses.reduce((sum, expense) => sum + expenseLedger(expense).paid, 0);
    const unpaid = expenses.reduce((sum, expense) => sum + expenseLedger(expense).unpaid, 0);
    return `${t("companyExpenses")} · ${context.month}: ${money(context.expenses)}\n${t("paid")}: ${money(paid)}\n${t("unpaid")}: ${money(unpaid)}`;
  }
  if (q.includes("mistake") || q.includes("alert") || q.includes("غلط")) {
    const alerts = payrollAlerts();
    return alerts.length ? alerts.slice(0, 25).join("\n") : t("noAlerts");
  }
  if (q.includes("verify") || q.includes("check calculation") || q.includes("calculation") || q.includes("حساب")) {
    const check = verifyPayrollCalculations(context.month);
    return check.issueCount
      ? [`${t("payrollVerification")} · ${context.month}: ${t("needsReview")}`, ...check.issues.slice(0, 25)].join("\n")
      : `${t("payrollVerification")} · ${context.month}: ${t("calculationVerified")} (${check.rowCount} ${t("workers")})`;
  }
  if (q.includes("night")) {
    const workers = activeWorkers().filter((worker) => workerDefaultShift(worker) === "night");
    return workers.length ? [`${t("nightShift")}: ${workers.length}`, ...workers.map(displayWorkerName)].join("\n") : `${t("nightShift")}: 0`;
  }
  if (q.includes("day shift")) {
    const workers = activeWorkers().filter((worker) => workerDefaultShift(worker) === "day");
    return workers.length ? [`${t("dayShift")}: ${workers.length}`, ...workers.map(displayWorkerName)].join("\n") : `${t("dayShift")}: 0`;
  }
  if (q.includes("summary") || q.includes("month") || q.includes("wage")) {
    return [
      `${t("monthlySummary")} · ${context.month}`,
      `${t("activeWorkers")}: ${activeWorkers().length}`,
      `${t("finalPayable")}: ${money(context.wages)}`,
      `${t("advanceDeducted")}: ${money(context.pay.advance)}`,
      `${t("paidWages")}: ${money(context.pay.paid)}`,
      `${t("unpaidWages")}: ${money(context.pay.pending)}`,
      `${t("monthlyExpenses")}: ${money(context.expenses)}`,
      `${t("grandTotal")}: ${money(context.wages + context.expenses)}`,
    ].join("\n");
  }
  return t("assistantNoAnswer");
}

function renderCompanyAssistant() {
  const summary = $("#assistantSummary");
  const messages = $("#assistantMessages");
  if (!summary || !messages) return;
  const context = assistantMonthContext();
  const today = assistantTodayContext();
  summary.innerHTML = `
    <div><span>${t("activeWorkers")}</span><strong>${today.active.length}</strong></div>
    <div><span>${t("presentToday")}</span><strong>${today.present.length}</strong></div>
    <div><span>${t("paidWages")}</span><strong>${money(context.pay.paid)}</strong></div>
    <div><span>${t("unpaidWages")}</span><strong>${money(context.pay.pending)}</strong></div>
    <div><span>${t("monthlyExpenses")}</span><strong>${money(context.expenses)}</strong></div>
  `;
  messages.innerHTML = app.assistantMessages.length
    ? app.assistantMessages.map((message) => `<div class="assistant-message ${message.role}"><strong>${escapeHTML(message.role === "user" ? "You" : t("companyAssistant"))}</strong><p>${escapeHTML(message.text).replaceAll("\n", "<br>")}</p></div>`).join("")
    : `<div class="assistant-message assistant"><strong>${t("companyAssistant")}</strong><p>${t("assistantReady")}</p></div>`;
  messages.scrollTop = messages.scrollHeight;
}

function askCompanyAssistant(question) {
  const text = String(question || "").trim();
  if (!text) return;
  app.assistantMessages.push({ role: "user", text });
  app.assistantMessages.push({ role: "assistant", text: assistantAnswer(text) });
  app.assistantMessages = app.assistantMessages.slice(-20);
  renderCompanyAssistant();
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

function payrollApprovalStatusLabel(status) {
  if (status === "submitted") return t("approvalSubmitted");
  if (status === "approved") return t("approvalApproved");
  if (status === "returned") return t("approvalReturned");
  return t("approvalDraft");
}

function monthlyReconciliation(month = monthISO()) {
  const dates = daysInMonth(month);
  const start = dates[0];
  const end = dates[dates.length - 1];
  const direct = monthSummary(month).reduce((result, row) => {
    const total = rowFinalPayable(row, start, end);
    const paid = rowPaidAmount(row, start, end);
    result.total = roundMoney(result.total + total);
    result.paid = roundMoney(result.paid + Math.min(paid, total));
    result.unpaid = roundMoney(result.unpaid + Math.max(0, total - paid));
    result.overpaid = roundMoney(result.overpaid + Math.max(0, paid - total));
    return result;
  }, { total: 0, paid: 0, unpaid: 0, overpaid: 0 });
  const supplierEntries = monthSupplierEntries(month);
  const supplierNames = new Set([
    ...supplierEntries.map((entry) => String(entry.supplierName || "").trim()).filter(Boolean),
    ...supplierPaymentEntries()
      .filter((payment) => paymentAppliesToRange(payment, start, end))
      .map((payment) => payment.supplierName),
  ]);
  const supplier = Array.from(supplierNames).reduce((result, supplierName) => {
    const entries = supplierEntries.filter((entry) => String(entry.supplierName || "").trim().toLowerCase() === supplierName.toLowerCase());
    const entryAmounts = entries.reduce((sum, entry) => {
      const totals = supplierEntryTotals(entry);
      sum.total = roundMoney(sum.total + totals.total);
      sum.paid = roundMoney(sum.paid + totals.paid);
      return sum;
    }, { total: 0, paid: 0 });
    const paid = roundMoney(entryAmounts.paid + supplierPaymentTotal(supplierName, start, end));
    result.total = roundMoney(result.total + entryAmounts.total);
    result.paid = roundMoney(result.paid + Math.min(paid, entryAmounts.total));
    result.unpaid = roundMoney(result.unpaid + Math.max(0, entryAmounts.total - paid));
    result.overpaid = roundMoney(result.overpaid + Math.max(0, paid - entryAmounts.total));
    return result;
  }, { total: 0, paid: 0, unpaid: 0, overpaid: 0 });
  const expenses = monthExpenses(month).reduce((result, expense) => {
    const ledger = expenseLedger(expense);
    result.total = roundMoney(result.total + ledger.amount);
    result.paid = roundMoney(result.paid + ledger.paid);
    result.unpaid = roundMoney(result.unpaid + ledger.unpaid);
    result.overpaid = roundMoney(result.overpaid + ledger.balance);
    return result;
  }, { total: 0, paid: 0, unpaid: 0, overpaid: 0 });

  const total = roundMoney(direct.total + supplier.total + expenses.total);
  const paidApplied = roundMoney(direct.paid + supplier.paid + expenses.paid);
  const unpaid = roundMoney(direct.unpaid + supplier.unpaid + expenses.unpaid);
  const overpaid = roundMoney(direct.overpaid + supplier.overpaid + expenses.overpaid);
  return {
    month,
    total,
    paidApplied,
    unpaid,
    overpaid,
    difference: roundMoney(total - paidApplied - unpaid),
  };
}

function renderSafety() {
  if (!$("#payrollLocksList")) return;
  const month = $("#lockMonth").value || monthISO();
  const approvalMonth = $("#approvalMonth")?.value || month;
  const approval = app.payrollApprovals?.[approvalMonth] || { status: "draft" };
  const approvalStatus = isMonthLocked(approvalMonth) ? "approved" : (approval.status || "draft");
  if ($("#payrollApprovalList")) {
    const activityAt = approval.approvedAt || approval.submittedAt || approval.returnedAt;
    const activityBy = approval.approvedBy || approval.submittedBy || approval.returnedBy;
    $("#payrollApprovalList").innerHTML = `
      <div><span>${escapeHTML(approvalMonth)}</span><strong>${escapeHTML(payrollApprovalStatusLabel(approvalStatus))}</strong></div>
      <div><span>${t("user")}</span><strong>${escapeHTML(activityBy || "-")}${activityAt ? ` · ${new Date(activityAt).toLocaleString()}` : ""}</strong></div>
    `;
  }
  if ($("#submitPayrollMonth")) $("#submitPayrollMonth").disabled = isMonthLocked(approvalMonth) || approvalStatus === "submitted" || approvalStatus === "approved";
  if ($("#approvePayrollMonth")) $("#approvePayrollMonth").disabled = !isAdmin() || approvalStatus !== "submitted";
  if ($("#returnPayrollMonth")) $("#returnPayrollMonth").disabled = !isAdmin() || !["submitted", "approved"].includes(approvalStatus);
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

  const verification = verifyPayrollCalculations(month);
  const reconciliation = monthlyReconciliation(month);
  const latestBackup = backups[0];
  const verificationItems = [
    {
      label: t("payrollVerification"),
      value: verification.issueCount ? `${t("needsReview")} · ${verification.issueCount}` : `${t("verified")} · ${verification.rowCount} ${t("workers")}`,
      bad: verification.issueCount > 0,
    },
    {
      label: t("monthlyReconciliation"),
      value: Math.abs(reconciliation.difference) <= 0.01 && reconciliation.overpaid <= 0.01
        ? `${t("balanced")} · ${money(reconciliation.total)} = ${money(reconciliation.paidApplied)} + ${money(reconciliation.unpaid)}`
        : `${t("needsReview")} · ${t("difference")}: ${money(reconciliation.difference)} · ${t("overpaidAmount")}: ${money(reconciliation.overpaid)}`,
      bad: Math.abs(reconciliation.difference) > 0.01 || reconciliation.overpaid > 0.01,
    },
    {
      label: t("dataSafety"),
      value: latestBackup ? `${t("backupSnapshotSafe")} · ${latestBackup[0]}` : t("noBackupYet"),
      bad: !latestBackup,
    },
    {
      label: t("storage"),
      value: app.lastCloudSaveError ? `${t("cloudSaveProblem")} · ${app.lastCloudSaveError}` : `${app.storageMode === "cloud" ? t("cloudMode") : t("browserCopySaved")}`,
      bad: Boolean(app.lastCloudSaveError),
    },
    ...verification.issues.slice(0, 20).map((issue) => ({ label: t("needsReview"), value: issue, bad: true })),
  ];
  if ($("#payrollVerificationList")) {
    $("#payrollVerificationList").innerHTML = verificationItems
      .map((item) => `<div class="${item.bad ? "danger-item" : "safe-item"}"><span>${escapeHTML(item.label)}</span><strong>${escapeHTML(item.value)}</strong></div>`)
      .join("");
  }

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
  if ($("#workerProject")) $("#workerProject").value = worker?.project || "";
  $("#workerCity").value = worker?.city || "";
  $("#workerNationality").value = worker?.nationality || "";
  $("#workerPerformance").value = worker?.performance || "good";
  $("#workerDefaultShift").value = workerDefaultShift(worker);
  $("#workerPhone").value = worker?.phone || "";
  $("#workerEmiratesId").value = worker?.emiratesId || "";
  $("#workerDailyWage").value = worker ? currentDailyWage(worker) : "";
  $("#workerAdvanceBalance").value = worker ? workerOpeningAdvance(worker) : 0;
  $("#workerWageEffectiveDate").value = todayISO();
  if ($("#workerWageMonth")) $("#workerWageMonth").value = monthISO();
  if ($("#workerMonthlyWage")) $("#workerMonthlyWage").value = worker ? currentDailyWage(worker) : "";
  setWorkerWageHistoryEditor(worker ? normalizeWageHistory(worker) : []);
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
  const typedWageHistory = readWorkerWageHistoryEditor();
  const updatedWageHistory = buildUpdatedWageHistory(existing, {
    dailyWage,
    joinDate,
    effectiveDate: wageEffectiveDate,
    typedHistory: typedWageHistory,
  });
  const worker = {
    id,
    name: $("#workerName").value.trim(),
    namePs: $("#workerNamePs").value.trim(),
    role: $("#workerRole").value.trim(),
    project: $("#workerProject")?.value.trim() || "",
    city: $("#workerCity").value.trim(),
    nationality: $("#workerNationality").value.trim(),
    performance: $("#workerPerformance").value,
    defaultShift: $("#workerDefaultShift").value === "night" ? "night" : "day",
    phone: $("#workerPhone").value.trim(),
    emiratesId: $("#workerEmiratesId").value.trim(),
    photo: $("#workerPhoto").value || "",
    dailyWage: wageForDate({ dailyWage, joinDate, wageHistory: updatedWageHistory }, todayISO()),
    advanceBalance: roundMoney($("#workerAdvanceBalance").value || 0),
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
  if (!worker) return;
  const hasRecords = Object.values(app.attendance).some((day) => day[id]);
  if (hasRecords) {
    const keepRecords = confirm(`${worker.name} has attendance or wage records.\n\nPress OK to mark inactive and keep records safe.\nPress Cancel if this is a wrong duplicate entry and you want the permanent delete option.`);
    if (keepRecords) {
      worker.status = "inactive";
      addLog("Worker marked inactive", worker.name);
      $("#workerDialog").close();
      saveData();
      return;
    }
    const deleteForever = confirm(`Permanently delete ${worker.name} and remove this worker from attendance and payment records?\n\nUse this only for wrong duplicate entries.`);
    if (!deleteForever) return;
  }
  purgeWorker(worker.id);
  $("#workerDialog").close();
  saveData();
}

function purgeWorker(workerId) {
  const worker = app.workers.find((item) => item.id === workerId);
  app.workers = app.workers.filter((item) => item.id !== workerId);
  Object.keys(app.attendance || {}).forEach((date) => {
    if (app.attendance[date]?.[workerId]) delete app.attendance[date][workerId];
    if (Object.keys(app.attendance[date] || {}).length === 0) delete app.attendance[date];
  });
  app.payments = paymentLedgerEntries().filter((payment) => payment.workerId !== workerId);
  if (app.selectedWorkerSummaryId === workerId) app.selectedWorkerSummaryId = "";
  addLog("Worker permanently removed", worker?.name || workerId);
}

function purgeWorkersByExactName(name) {
  const target = normalizeCompare(name);
  const matches = app.workers.filter((worker) => normalizeCompare(worker.name) === target);
  if (!matches.length) return false;
  matches.forEach((worker) => purgeWorker(worker.id));
  addLog("Duplicate worker cleanup", `${name} removed completely`);
  return true;
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
  const existing = app.editingExpenseId
    ? app.expenses.find((item) => item.id === app.editingExpenseId)
    : null;
  const expense = {
    id: existing?.id || makeId(),
    date: $("#expenseDate").value || todayISO(),
    buyer: $("#expenseBuyer").value.trim(),
    category: $("#expenseCategory").value.trim(),
    project: $("#expenseProject")?.value.trim() || "",
    merchant: $("#expenseMerchant").value.trim(),
    location: $("#expenseLocation").value.trim(),
    description: $("#expenseDescription").value.trim(),
    amount: Number($("#expenseAmount").value || 0),
    paidAmount: Number($("#expensePaidAmount").value || 0),
    receiptPhoto: $("#expenseReceiptPhoto").value || "",
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  if (!expense.category || expense.amount <= 0) return;
  if (existing) {
    const index = app.expenses.findIndex((item) => item.id === existing.id);
    app.expenses[index] = { ...existing, ...expense };
    addLog("Company expense updated", `${expense.date} · ${expense.category} · ${money(expense.amount)}`);
  } else {
    app.expenses.unshift(expense);
    addLog("Company expense added", `${expense.date} · ${expense.category} · ${money(expense.amount)}`);
  }
  clearExpenseForm();
  saveData();
  toast(existing ? t("expenseUpdated") : t("expenseSaved"));
}

function clearExpenseForm() {
  app.editingExpenseId = "";
  $("#expenseBuyer").value = "";
  $("#expenseCategory").value = "";
  if ($("#expenseProject")) $("#expenseProject").value = "";
  $("#expenseMerchant").value = "";
  $("#expenseLocation").value = "";
  $("#expenseDescription").value = "";
  $("#expenseAmount").value = "";
  $("#expensePaidAmount").value = "";
  $("#expenseReceiptUpload").value = "";
  setExpenseReceiptPhoto("");
  const button = $("#saveExpenseButton");
  if (button) button.textContent = t("addExpense");
  $("#cancelExpenseEdit")?.classList.add("hidden");
}

function editExpense(expenseId) {
  if (!requireAdmin()) return;
  const expense = (app.expenses || []).find((item) => item.id === expenseId);
  if (!expense) return;
  app.editingExpenseId = expense.id;
  $("#expenseDate").value = expense.date || todayISO();
  $("#expenseBuyer").value = expense.buyer || "";
  $("#expenseCategory").value = expense.category || "";
  if ($("#expenseProject")) $("#expenseProject").value = expense.project || "";
  $("#expenseMerchant").value = expense.merchant || "";
  $("#expenseLocation").value = expense.location || "";
  $("#expenseDescription").value = expense.description || "";
  $("#expenseAmount").value = Number(expense.amount || 0);
  $("#expensePaidAmount").value = Number(expense.paidAmount || 0);
  setExpenseReceiptPhoto(expense.receiptPhoto || "");
  const button = $("#saveExpenseButton");
  if (button) button.textContent = t("saveExpenseChanges");
  $("#cancelExpenseEdit")?.classList.remove("hidden");
  $("#expenseForm")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function removeExpense(expenseId) {
  if (!requireAdmin()) return;
  const expense = (app.expenses || []).find((item) => item.id === expenseId);
  app.expenses = (app.expenses || []).filter((item) => item.id !== expenseId);
  if (app.editingExpenseId === expenseId) clearExpenseForm();
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

function submitPayrollMonth() {
  const month = $("#approvalMonth")?.value || monthISO();
  if (isMonthLocked(month)) {
    toast(t("monthLocked"));
    return;
  }
  const verification = verifyPayrollCalculations(month);
  if (verification.issueCount) {
    toast(t("approvalBlocked"));
    return;
  }
  const previous = app.payrollApprovals?.[month] || {};
  app.payrollApprovals[month] = {
    ...previous,
    status: "submitted",
    submittedAt: new Date().toISOString(),
    submittedBy: currentUserLabel(),
    approvedAt: "",
    approvedBy: "",
  };
  addLog("Payroll submitted for approval", month);
  saveData();
  toast(t("payrollSubmitted"));
}

function approvePayrollMonth() {
  if (!requireAdmin()) return;
  const month = $("#approvalMonth")?.value || monthISO();
  const approval = app.payrollApprovals?.[month];
  if (approval?.status !== "submitted") return;
  const verification = verifyPayrollCalculations(month);
  if (verification.issueCount) {
    toast(t("approvalBlocked"));
    return;
  }
  const now = new Date().toISOString();
  app.payrollApprovals[month] = {
    ...approval,
    status: "approved",
    approvedAt: now,
    approvedBy: currentUserLabel(),
  };
  app.payrollLocks[month] = { at: now, user: currentUserLabel(), source: "approval" };
  addLog("Payroll approved and locked", month);
  saveData();
  toast(t("payrollApproved"));
}

function returnPayrollMonthToDraft() {
  if (!requireAdmin()) return;
  const month = $("#approvalMonth")?.value || monthISO();
  const previous = app.payrollApprovals?.[month] || {};
  delete app.payrollLocks[month];
  app.payrollApprovals[month] = {
    ...previous,
    status: "returned",
    returnedAt: new Date().toISOString(),
    returnedBy: currentUserLabel(),
  };
  addLog("Payroll returned to draft", month);
  saveData();
  toast(t("payrollReturned"));
}

function lockPayrollMonth() {
  if (!requireAdmin()) return;
  const month = $("#lockMonth").value || monthISO();
  const verification = verifyPayrollCalculations(month);
  if (verification.issueCount) {
    toast(t("approvalBlocked"));
    return;
  }
  const now = new Date().toISOString();
  app.payrollLocks[month] = { at: now, user: currentUserLabel(), source: "manual" };
  app.payrollApprovals[month] = {
    ...(app.payrollApprovals?.[month] || {}),
    status: "approved",
    approvedAt: now,
    approvedBy: currentUserLabel(),
  };
  addLog("Payroll month locked", month);
  saveData();
}

function unlockPayrollMonth() {
  if (!requireAdmin()) return;
  const month = $("#lockMonth").value || monthISO();
  delete app.payrollLocks[month];
  app.payrollApprovals[month] = {
    ...(app.payrollApprovals?.[month] || {}),
    status: "returned",
    returnedAt: new Date().toISOString(),
    returnedBy: currentUserLabel(),
  };
  addLog("Payroll month unlocked", month);
  saveData();
}

function printPlainReport(title, bodyHtml) {
  const win = window.open("", "_blank");
  if (!win) return;
  const logoUrl = new URL("ahmad-times-logo.png", window.location.href).href;
  const dir = app.language === "ps" ? "rtl" : "ltr";
  win.document.write(`<!doctype html><html lang="${escapeHTML(app.language || "en")}" dir="${dir}"><head><title>${escapeHTML(title)}</title><style>
    body{font-family:Arial,sans-serif;padding:24px;color:#1d2433;background:#fff;direction:${dir}}
    .brand{display:flex;align-items:center;gap:12px;margin-bottom:18px;padding-bottom:12px;border-bottom:2px solid #bce7f7}
    .brand img{width:58px;height:58px;object-fit:contain;border-radius:50%}
    .brand strong{display:block;font-size:19px}
    .brand span{display:block;margin-top:3px;color:#667085}
    h1{margin:0 0 12px;font-size:24px}
    h2{margin:22px 0 10px;font-size:16px}
    p{color:#667085}
    .summary-grid{display:grid;grid-template-columns:repeat(4,minmax(130px,1fr));gap:8px;margin:14px 0}
    .row{padding:10px;border:1px solid #d9eef5;border-radius:8px;background:#f7fbfd}
    .row span{color:#667085;font-size:12px;font-weight:700}
    .row strong{display:block;margin-top:4px;font-size:16px}
    table{width:100%;border-collapse:collapse;margin-top:10px;font-size:12px}
    th,td{padding:8px;border-bottom:1px solid #e4e7ec;text-align:inherit;vertical-align:top}
    th{background:#f7fbfd;color:#667085;font-size:11px;text-transform:uppercase}
    @media print{body{padding:12px}.summary-grid{grid-template-columns:repeat(4,1fr)}}
  </style></head><body><div class="brand"><img src="${logoUrl}" alt="Ahmad Times logo"><div><strong>Ahmad Times For Building Maintenance L.L.C</strong><span>${escapeHTML(title)} · ${new Date().toLocaleString()}</span></div></div><h1>${escapeHTML(title)}</h1>${bodyHtml}<script>window.print()</script></body></html>`);
  win.document.close();
}

function printDashboardWageSummary() {
  const { start, end, title } = dashboardPeriodRange();
  const rows = periodSummary(start, end)
    .filter((row) => row.present || row.halfday || row.absent || row.off || row.wage || rowPaidAmount(row, start, end) || rowAdvanceDeduction(row, start, end));
  const totals = paymentTotals(rows, start, end);
  const overtime = rows.reduce((sum, row) => sum + Number(row.overtime || 0), 0);
  const attendanceDays = rows.reduce((sum, row) => sum + Number(row.present || 0) + Number(row.halfday || 0) * 0.5, 0);
  const headers = [
    t("worker"),
    t("days"),
    t("hours"),
    t("overtime"),
    t("dailyWage"),
    t("advanceDeducted"),
    t("payableAfterAdvance"),
    t("paymentDeducted"),
    t("workerBalance"),
    t("extraPaidBalance"),
  ];
  const bodyRows = rows.map((row) => {
    const advance = rowAdvanceDeduction(row, start, end);
    const finalPayable = rowFinalPayable(row, start, end);
    const paymentDeducted = rowPaymentDeducted(row, start, end);
    const unpaid = rowUnpaidAmount(row, start, end);
    const extraPaid = rowExtraPaidBalance(row, start, end);
    return [
      displayWorkerName(row.worker),
      String(row.present + (row.halfday * 0.5)),
      formatHours(row.hours),
      formatHours(row.overtime),
      money(row.dailyWage || currentDailyWage(row.worker)),
      money(advance),
      money(finalPayable),
      money(paymentDeducted),
      money(unpaid),
      money(extraPaid),
    ];
  });
  const table = bodyRows.length
    ? `<table><thead><tr>${headers.map((header) => `<th>${escapeHTML(header)}</th>`).join("")}</tr></thead><tbody>${bodyRows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHTML(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>`
    : `<p>${t("noWageRecords")}</p>`;
  printPlainReport(t("wageSummary"), `
    <p>${escapeHTML(title)} · ${escapeHTML(start)} ${t("to")} ${escapeHTML(end)}</p>
    <div class="summary-grid">
      <div class="row"><span>${t("totalWorkers")}</span><strong>${rows.length}</strong></div>
      <div class="row"><span>${t("attendanceDays")}</span><strong>${attendanceDays}</strong></div>
      <div class="row"><span>${t("overtime")}</span><strong>${formatHours(overtime)}</strong></div>
      <div class="row"><span>${t("totalLabourWages")}</span><strong>${money(totals.gross)}</strong></div>
      <div class="row"><span>${t("payableAfterAdvance")}</span><strong>${money(totals.finalPayable)}</strong></div>
      <div class="row"><span>${t("totalPaidAmount")}</span><strong>${money(totals.paid)}</strong></div>
      <div class="row"><span>${t("totalUnpaidAmount")}</span><strong>${money(totals.pending)}</strong></div>
      <div class="row"><span>${t("extraPaidBalance")}</span><strong>${money(totals.extraPaid)}</strong></div>
    </div>
    ${table}
  `);
  addLog("Dashboard wage summary printed", `${start} to ${end}`);
}

function printDashboardProjectReport() {
  return withLanguage(app.language || "en", () => {
    const { start, end, title } = dashboardPeriodRange();
    const labourRows = periodSummary(start, end)
      .filter((row) => row.present || row.halfday || row.absent || row.off || row.wage || rowPaidAmount(row, start, end) || rowAdvanceDeduction(row, start, end))
      .sort((a, b) => displayWorkerName(a.worker).localeCompare(displayWorkerName(b.worker)));
    const labourTotals = paymentTotals(labourRows, start, end);
    const supplierEntries = supplierEntriesForRange(start, end);
    const supplierRows = Array.from(supplierEntries.reduce((map, entry) => {
      const name = String(entry.supplierName || "-").trim() || "-";
      const current = map.get(name) || { name, projects: new Set(), workers: 0, dailyRates: new Set(), overtimeHours: 0, total: 0, paidFromEntries: 0, normal: 0, overtimeAmount: 0 };
      const totals = supplierEntryTotals(entry);
      if (projectNameOf(entry.project)) current.projects.add(projectNameOf(entry.project));
      current.workers += totals.workers;
      if (totals.dailyWage) current.dailyRates.add(money(totals.dailyWage));
      current.overtimeHours += totals.overtimeHours;
      current.normal = roundMoney(current.normal + totals.normalAmount);
      current.overtimeAmount = roundMoney(current.overtimeAmount + totals.overtimeAmount);
      current.total = roundMoney(current.total + totals.total);
      current.paidFromEntries = roundMoney(current.paidFromEntries + totals.paid);
      map.set(name, current);
      return map;
    }, new Map()).values()).map((row) => {
      const ledgerPaid = supplierPaymentTotal(row.name, start, end);
      const paid = roundMoney(row.paidFromEntries + ledgerPaid);
      return {
        ...row,
        projectText: row.projects.size ? Array.from(row.projects).join(" / ") : "-",
        dailyRateText: row.dailyRates.size ? Array.from(row.dailyRates).join(" / ") : money(0),
        paid,
        unpaid: roundMoney(Math.max(0, row.total - paid)),
      };
    }).sort((a, b) => a.name.localeCompare(b.name));
    const supplierTotalsData = supplierTotals(supplierEntries, start, end);
    const expenseRows = expenseRowsBetween(start, end).sort((a, b) => String(a.date || "").localeCompare(String(b.date || "")));
    const expenseTotalsData = expenseTotalsForRows(expenseRows, "all");
    const buyerTotals = expenseBuyerTotals(expenseRows);
    const expenseCategories = [
      "materialExpenses",
      "transportExpenses",
      "fuelExpenses",
      "carRent",
      "toolsEquipment",
      "foodGroceryExpenses",
      "projectExpenses",
      "otherSmallExpenses",
    ].map((key) => {
      const rows = expenseRows.filter((expense) => investorExpenseCategoryKey(expense) === key);
      const totals = expenseTotalsForRows(rows, "all");
      return { key, label: t(key), rows, ...totals };
    });
    const data = {
      start,
      end,
      title,
      project: "all",
      shift: "all",
      supplierNames: [],
      labourRows,
      labourTotals,
      supplierRows,
      supplierTotals: supplierTotalsData,
      expenseRows,
      expenseTotals: expenseTotalsData,
      buyerTotals,
      expenseCategories,
      summary: {
        totalPaid: roundMoney(labourTotals.paid + supplierTotalsData.paid + expenseTotalsData.paid),
        totalUnpaid: roundMoney(labourTotals.pending + supplierTotalsData.unpaid + expenseTotalsData.unpaid),
        grandTotal: roundMoney(labourTotals.gross + supplierTotalsData.total + expenseTotalsData.amount),
      },
    };
    printPlainReport(t("companyExpenseReport"), companyExpenseReportHtml(data));
    addLog("Dashboard complete project report printed", `${start} to ${end}`);
    saveData(false);
  });
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
      app.projectBudgets = parsed.projectBudgets || [];
      app.supplierEntries = parsed.supplierEntries || [];
      app.supplierPayments = parsed.supplierPayments || [];
      app.workerAdvances = parsed.workerAdvances || [];
      app.payrollLocks = parsed.payrollLocks || {};
      app.payrollApprovals = parsed.payrollApprovals || {};
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

const ZIP_CRC_TABLE = (() => {
  const table = [];
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(bytes) {
  let crc = 0xffffffff;
  bytes.forEach((byte) => {
    crc = ZIP_CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  });
  return (crc ^ 0xffffffff) >>> 0;
}

function zipDateTime(date = new Date()) {
  const dosTime = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
  const dosDate = ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { dosDate, dosTime };
}

function pushZipNumber(parts, value, bytes) {
  for (let index = 0; index < bytes; index += 1) parts.push((value >>> (8 * index)) & 0xff);
}

function pushZipBytes(parts, bytes) {
  bytes.forEach((byte) => parts.push(byte));
}

function createZipBlob(files) {
  const encoder = new TextEncoder();
  const fileParts = [];
  const centralParts = [];
  let offset = 0;
  const { dosDate, dosTime } = zipDateTime();
  files.forEach((file) => {
    const nameBytes = encoder.encode(file.name);
    const dataBytes = encoder.encode(file.content);
    const crc = crc32(dataBytes);
    const local = [];
    pushZipNumber(local, 0x04034b50, 4);
    pushZipNumber(local, 20, 2);
    pushZipNumber(local, 0, 2);
    pushZipNumber(local, 0, 2);
    pushZipNumber(local, dosTime, 2);
    pushZipNumber(local, dosDate, 2);
    pushZipNumber(local, crc, 4);
    pushZipNumber(local, dataBytes.length, 4);
    pushZipNumber(local, dataBytes.length, 4);
    pushZipNumber(local, nameBytes.length, 2);
    pushZipNumber(local, 0, 2);
    pushZipBytes(local, nameBytes);
    pushZipBytes(local, dataBytes);
    pushZipBytes(fileParts, local);

    const central = [];
    pushZipNumber(central, 0x02014b50, 4);
    pushZipNumber(central, 20, 2);
    pushZipNumber(central, 20, 2);
    pushZipNumber(central, 0, 2);
    pushZipNumber(central, 0, 2);
    pushZipNumber(central, dosTime, 2);
    pushZipNumber(central, dosDate, 2);
    pushZipNumber(central, crc, 4);
    pushZipNumber(central, dataBytes.length, 4);
    pushZipNumber(central, dataBytes.length, 4);
    pushZipNumber(central, nameBytes.length, 2);
    pushZipNumber(central, 0, 2);
    pushZipNumber(central, 0, 2);
    pushZipNumber(central, 0, 2);
    pushZipNumber(central, 0, 2);
    pushZipNumber(central, 0, 4);
    pushZipNumber(central, offset, 4);
    pushZipBytes(central, nameBytes);
    pushZipBytes(centralParts, central);
    offset += local.length;
  });
  const end = [];
  pushZipNumber(end, 0x06054b50, 4);
  pushZipNumber(end, 0, 2);
  pushZipNumber(end, 0, 2);
  pushZipNumber(end, files.length, 2);
  pushZipNumber(end, files.length, 2);
  pushZipNumber(end, centralParts.length, 4);
  pushZipNumber(end, fileParts.length, 4);
  pushZipNumber(end, 0, 2);
  return new Blob([new Uint8Array([...fileParts, ...centralParts, ...end])], { type: "application/zip" });
}

function downloadZip(name, files) {
  const blob = createZipBlob(files);
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
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  $$('[data-mobile-view]').forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.mobileView));
  });
  $("#mobileMoreButton")?.addEventListener("click", () => {
    if ($("#mobileMoreBackdrop")?.classList.contains("open")) closeMobileMore();
    else openMobileMore();
  });
  $("#closeMobileMore")?.addEventListener("click", closeMobileMore);
  $("#mobileMoreBackdrop")?.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) closeMobileMore();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileMore();
  });

  document.addEventListener("click", (event) => {
    const jumpButton = event.target.closest("[data-jump-view]");
    if (!jumpButton) return;
    switchView(jumpButton.dataset.jumpView);
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
  $("#addWorkerWageRate")?.addEventListener("click", addWorkerWageRateFromForm);
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

    const removeWageRateButton = event.target.closest("[data-remove-worker-wage-rate]");
    if (removeWageRateButton) {
      removeWorkerWageRate(removeWageRateButton.dataset.removeWorkerWageRate);
      return;
    }

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

    const editExpenseButton = event.target.closest("[data-edit-expense]");
    if (editExpenseButton) editExpense(editExpenseButton.dataset.editExpense);

    const editSupplierButton = event.target.closest("[data-edit-supplier]");
    if (editSupplierButton) editSupplierEntry(editSupplierButton.dataset.editSupplier);

    const removeSupplierButton = event.target.closest("[data-remove-supplier]");
    if (removeSupplierButton) removeSupplierEntry(removeSupplierButton.dataset.removeSupplier);

    const saveAdvanceButton = event.target.closest("[data-save-advance]");
    if (saveAdvanceButton) {
      const panel = saveAdvanceButton.closest("[data-advance-worker]");
      const getField = (field) => panel?.querySelector(`[data-advance-field="${field}"]`)?.value || "";
      saveWorkerAdvance(panel?.dataset.advanceWorker, getField("date"), getField("amount"), getField("note"));
      renderAll();
    }

    const viewExpenseButton = event.target.closest("[data-view-expense]");
    if (viewExpenseButton) viewExpenseReceipt(viewExpenseButton.dataset.viewExpense);

    const editBudgetButton = event.target.closest("[data-edit-budget]");
    if (editBudgetButton) editBudgetEntry(editBudgetButton.dataset.editBudget);

    const removeBudgetButton = event.target.closest("[data-remove-budget]");
    if (removeBudgetButton) removeBudgetEntry(removeBudgetButton.dataset.removeBudget);

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
      renderAll();
    }

    const editPaymentButton = event.target.closest("[data-edit-payment-entry]");
    if (editPaymentButton) {
      editPaymentEntry(editPaymentButton.dataset.paymentEntryType || "worker", editPaymentButton.dataset.editPaymentEntry);
    }

    const removePaymentButton = event.target.closest("[data-remove-payment-entry]");
    if (removePaymentButton) {
      removePaymentEntry(removePaymentButton.dataset.paymentEntryType || "worker", removePaymentButton.dataset.removePaymentEntry);
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

    const restInput = event.target.closest("[data-rest-field]");
    if (restInput) {
      const parent = restInput.closest(".time-grid");
      setAttendanceRestBreak(parent.dataset.date, parent.dataset.worker, restInput.dataset.restField, restInput.value);
    }

    const restMinutesInput = event.target.closest("[data-rest-minutes-field]");
    if (restMinutesInput) {
      const parent = restMinutesInput.closest(".time-grid");
      setAttendanceRestBreak(parent.dataset.date, parent.dataset.worker, restMinutesInput.dataset.restMinutesField, restMinutesInput.value);
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

  ["todayInput", "dashboardPeriod", "dashboardMonth", "dashboardStartDate", "dashboardEndDate", "attendanceDate", "attendanceWeekDate", "attendanceMonth", "attendanceWorkerSelect", "quickAttendanceDate", "settlementWorker", "lockMonth", "approvalMonth", "expenseMonth", "expenseBuyerFilter", "expenseReportBuyers", "reportType", "reportDate", "reportMonth", "reportStartDate", "reportEndDate", "reportWorker", "reportShiftFilter", "reportLanguage", "includePreviousMonthReport", "includePaymentHistoryReport", "companyExpenseProjectFilter", "companyExpenseSupplierFilter"].forEach((id) => {
    $(`#${id}`)?.addEventListener("change", renderAll);
  });
  $("#reportWorkerMobileList")?.addEventListener("change", (event) => {
    const input = event.target.closest("input[type='checkbox']");
    if (!input) return;
    const list = $("#reportWorkerMobileList");
    if (input.value === "all" && input.checked) {
      list.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        checkbox.checked = checkbox.value === "all";
      });
    } else if (input.checked) {
      const allOption = list.querySelector('input[value="all"]');
      if (allOption) allOption.checked = false;
    }
    if (!list.querySelector("input[type='checkbox']:checked")) {
      const allOption = list.querySelector('input[value="all"]');
      if (allOption) allOption.checked = true;
    }
    renderAll();
  });
  ["paymentEntryType", "paymentEntryPerson"].forEach((id) => {
    $(`#${id}`)?.addEventListener("change", renderPaymentEntryPanel);
    $(`#${id}`)?.addEventListener("focus", renderPaymentEntryPanel);
    $(`#${id}`)?.addEventListener("pointerdown", renderPaymentEntryPanel);
  });
  $(".payment-entry-panel")?.addEventListener("toggle", renderPaymentEntryPanel);
  $("#addPaymentEntry")?.addEventListener("click", addPaymentEntryFromPanel);
  $("#printDashboardWageSummary")?.addEventListener("click", printDashboardWageSummary);
  $("#printDashboardProjectReport")?.addEventListener("click", printDashboardProjectReport);
  $("#expenseBuyerFilter").addEventListener("input", renderExpenses);
  $("#printExpenseReport")?.addEventListener("click", printExpenseReport);

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
  $("#cancelExpenseEdit")?.addEventListener("click", clearExpenseForm);
  $("#budgetForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    addBudgetEntryFromForm();
  });
  $("#cancelBudgetEdit")?.addEventListener("click", () => resetBudgetForm(true));
  $("#budgetFromMonth")?.addEventListener("change", renderProjectsBudget);
  $("#budgetToMonth")?.addEventListener("change", renderProjectsBudget);
  $("#budgetProjectFilter")?.addEventListener("change", renderProjectsBudget);
  $("#printBudgetReport")?.addEventListener("click", printBudgetReport);
  $("#exportBudgetReport")?.addEventListener("click", exportBudgetCSV);
  $("#supplierForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addSupplierEntryFromForm();
  });
  $("#cancelSupplierEdit")?.addEventListener("click", () => resetSupplierForm(true));
  ["supplierMonth", "supplierFilterDate", "supplierFilterStatus"].forEach((id) => {
    $(`#${id}`).addEventListener("change", renderSupplierWorkers);
  });
  $("#supplierFilterName").addEventListener("input", renderSupplierWorkers);
  $("#printSupplierReport").addEventListener("click", printSupplierReport);
  $("#exportSupplierReport").addEventListener("click", exportSupplierCSV);
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
      renderActiveAttendancePanel();
    });
  });

  $("#markAllPresent").addEventListener("click", () => bulkSetMonth("present"));
  $("#markAllOff").addEventListener("click", () => bulkSetMonth("off"));
  $("#clearMonth").addEventListener("click", () => bulkSetMonth(""));
  $("#printReport").addEventListener("click", printReportOnly);
  $("#pdfReport").addEventListener("click", openPdfReport);
  $("#printCompanyExpenseReport")?.addEventListener("click", printCompanyExpenseReport);
  $("#exportCompanyExpenseReport")?.addEventListener("click", exportCompanyExpenseReportCSV);
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
  $("#printSeparateWorkerReports")?.addEventListener("click", printSeparateWorkerReports);
  $("#downloadSeparateWorkerReports")?.addEventListener("click", downloadSeparateWorkerReports);
  $("#printMonthlyAttendance")?.addEventListener("click", () => printMonthlyAttendanceReport(false));
  $("#printAllMonthlyAttendance")?.addEventListener("click", () => printMonthlyAttendanceReport(true));
  $("#exportReport").addEventListener("click", exportReportCSV);
  $("#exportBackup").addEventListener("click", exportBackup);
  $("#downloadLatestBackup").addEventListener("click", downloadLatestDailyBackup);
  $("#submitPayrollMonth")?.addEventListener("click", submitPayrollMonth);
  $("#approvePayrollMonth")?.addEventListener("click", approvePayrollMonth);
  $("#returnPayrollMonth")?.addEventListener("click", returnPayrollMonthToDraft);
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
  $("#assistantForm").addEventListener("submit", (event) => {
    event.preventDefault();
    askCompanyAssistant($("#assistantQuestion").value);
    $("#assistantQuestion").value = "";
  });
  document.addEventListener("click", (event) => {
    const promptButton = event.target.closest("[data-assistant-prompt]");
    if (!promptButton) return;
    askCompanyAssistant(promptButton.dataset.assistantPrompt);
  });
}

function bulkSetMonth(status) {
  const month = $("#attendanceMonth").value || monthISO();
  const dates = daysInMonth(month);
  if (isMonthLocked(month)) {
    toast(t("monthLocked"));
    return;
  }
  if (app.payrollApprovals?.[month]?.status === "submitted") {
    toast(t("monthSubmittedLocked"));
    return;
  }
  if (month < monthISO() && !confirm(t("oldChangeWarning"))) return;
  const workers = attendanceWorkers(dates);
  dates.forEach((date) => {
    workers.forEach((worker) => {
      if (status && !workerAvailableForAttendance(worker, date)) return;
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
  const { start, end, title, month } = dashboardPeriodRange();
  const previous = previousMonth(monthFromDate(end) || month);
  const summary = periodSummary(start, end);
  const todayRecords = app.attendance[date] || {};
  const expenseTotals = expenseTotalsBetween(start, end);
  const budgetReceived = budgetReceivedBetween(start, end);
  const dashboardPayTotals = paymentTotals(summary, start, end);
  const supplierDashboardTotals = supplierTotals(supplierEntriesForRange(start, end), start, end);
  const monthWages = dashboardPayTotals.finalPayable;
  const selectedMonthCompanyCost = roundMoney(monthWages + supplierDashboardTotals.total + expenseTotals.amount);
  const previousMonthCompanyCost = companyCostForMonth(previous);
  const directPaid = dashboardPayTotals.paid;
  const directUnpaid = dashboardPayTotals.pending;
  const totalUnpaidBalance = roundMoney(directUnpaid + supplierDashboardTotals.unpaid + expenseTotals.unpaid);
  const attendanceInPeriod = summary.reduce((sum, row) => sum + row.present + row.halfday, 0);

  if ($("#statTotalWorkers")) $("#statTotalWorkers").textContent = app.workers.filter((worker) => worker.status === "active").length;
  $("#statActiveWorkers").textContent = app.workers.filter((worker) => worker.status === "active").length;
  if ($("#statInactiveWorkers")) $("#statInactiveWorkers").textContent = app.workers.filter((worker) => worker.status === "inactive").length;
  $("#statPresentToday").textContent = attendanceInPeriod;
  if ($("#statCompleteLabourWages")) $("#statCompleteLabourWages").textContent = money(dashboardPayTotals.gross);
  $("#statMonthWages").textContent = money(monthWages);
  if ($("#statSupplierTotal")) $("#statSupplierTotal").textContent = money(supplierDashboardTotals.total);
  $("#statMonthExpenses").textContent = money(expenseTotals.amount);
  $("#statGrandTotal").textContent = money(selectedMonthCompanyCost);
  if ($("#statPreviousMonthCost")) $("#statPreviousMonthCost").textContent = money(previousMonthCompanyCost);
  if ($("#statAttendanceDays")) $("#statAttendanceDays").textContent = formatHours(summary.reduce((sum, row) => sum + row.overtime, 0));
  $("#statUnpaidWages").textContent = money(directUnpaid);
  if ($("#statTotalUnpaidBalance")) $("#statTotalUnpaidBalance").textContent = money(totalUnpaidBalance);
  if ($("#statPaidWages")) $("#statPaidWages").textContent = money(directPaid);
  if ($("#statSupplierPaid")) $("#statSupplierPaid").textContent = money(supplierDashboardTotals.paid);
  if ($("#statSupplierUnpaid")) $("#statSupplierUnpaid").textContent = money(supplierDashboardTotals.unpaid);
  if ($("#statBudgetReceived")) $("#statBudgetReceived").textContent = money(budgetReceived);
  if ($("#statBudgetRemaining")) $("#statBudgetRemaining").textContent = money(roundMoney(budgetReceived - selectedMonthCompanyCost));
  if ($("#dashboardDateLabel")) $("#dashboardDateLabel").textContent = date;
  if ($("#dashboardPeriodLabel")) $("#dashboardPeriodLabel").textContent = `${t("dashboardPeriodShowing")}: ${title} · ${start} ${t("to")} ${end}`;
  if ($("#dashboardSummaryPeriod")) $("#dashboardSummaryPeriod").textContent = `${start} ${t("to")} ${end}`;
  if ($("#dashboardLabourTotals")) {
    $("#dashboardLabourTotals").innerHTML = `
      <article><span>${t("totalWorkers")}</span><strong>${summary.length}</strong></article>
      <article><span>${t("attendanceDays")}</span><strong>${attendanceInPeriod}</strong></article>
      <article><span>${t("totalLabourWages")}</span><strong>${money(dashboardPayTotals.gross)}</strong></article>
      <article><span>${t("payableAfterAdvance")}</span><strong>${money(dashboardPayTotals.finalPayable)}</strong></article>
      <article><span>${t("totalPaidAmount")}</span><strong>${money(dashboardPayTotals.paid)}</strong></article>
      <article><span>${t("totalUnpaidAmount")}</span><strong>${money(dashboardPayTotals.pending)}</strong></article>
      <article><span>${t("extraPaidBalance")}</span><strong>${money(dashboardPayTotals.extraPaid)}</strong></article>
      <article><span>${t("overtime")}</span><strong>${formatHours(summary.reduce((sum, row) => sum + Number(row.overtime || 0), 0))}</strong></article>
    `;
  }

  const balanceMonth = monthFromDate(date) || monthISO();
  const balanceMonthDates = daysInMonth(balanceMonth);
  const balanceStart = balanceMonthDates[0];
  const balanceEnd = balanceMonthDates[balanceMonthDates.length - 1];
  const currentMonthRowsByWorker = new Map(monthSummary(balanceMonth, "all", "all").map((row) => [row.worker.id, row]));

  $("#dashboardSummary").innerHTML = summary
    .filter((row) => row.present || row.halfday || row.absent || row.off || row.wage || rowPaidAmount(row, start, end) || rowAdvanceDeduction(row, start, end))
    .map((row) => {
      const paid = rowPaidAmount(row, start, end);
      const unpaid = rowUnpaidAmount(row, start, end);
      const advance = rowAdvanceDeduction(row, start, end);
      const finalPayable = rowFinalPayable(row, start, end);
      const paymentDeducted = rowPaymentDeducted(row, start, end);
      const extraPaid = rowExtraPaidBalance(row, start, end);
      const currentMonthRow = currentMonthRowsByWorker.get(row.worker.id);
      const currentMonthBalance = currentMonthRow ? rowWorkerBalance(currentMonthRow, balanceStart, balanceEnd) : 0;
      return `
        <tr>
          <td data-label="${t("worker")}">${escapeHTML(displayWorkerName(row.worker))}</td>
          <td data-label="${t("days")}">${row.present + (row.halfday * 0.5)}</td>
          <td data-label="${t("hours")}">${formatHours(row.hours)}</td>
          <td data-label="${t("overtime")}">${formatHours(row.overtime)}</td>
          <td data-label="${t("dailyWage")}">${money(row.dailyWage || currentDailyWage(row.worker))}</td>
          <td data-label="${t("advanceDeducted")}">${money(advance)}</td>
          <td data-label="${t("payableAfterAdvance")}"><strong>${money(finalPayable)}</strong></td>
          <td data-label="${t("paymentDeducted")}">${money(paymentDeducted)}</td>
          <td data-label="${t("workerBalance")}"><strong>${money(unpaid)}</strong></td>
          <td data-label="${t("currentMonthBalance")}"><strong>${money(currentMonthBalance)}</strong></td>
          <td data-label="${t("extraPaidBalance")}"><strong>${money(extraPaid)}</strong></td>
        </tr>
      `;
    }).join("") || `<tr><td colspan="11">${t("noWageRecords")}</td></tr>`;

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
          <p>${t("in")}: ${record.inTime || "-"} · ${t("out")}: ${record.outTime || "-"} · ${t("actualWorkingHours")}: ${formatHours(hours.actual)} · ${t("overtime")}: ${formatHours(hours.overtime)}</p>
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
const responsiveTableObserver = new MutationObserver(scheduleResponsiveTableDecoration);
if ($(".main")) responsiveTableObserver.observe($(".main"), { childList: true, subtree: true });
window.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "hidden" || !cloudSaveTimer) return;
  window.clearTimeout(cloudSaveTimer);
  cloudSaveTimer = null;
  flushCloudSave(false);
});
window.addEventListener("beforeunload", () => {
  if (!cloudSaveTimer) return;
  window.clearTimeout(cloudSaveTimer);
  cloudSaveTimer = null;
  flushCloudSave(false);
});
initCloud()
  .then(loadData)
  .then(renderAll)
  .catch((error) => {
    console.error(error);
    toast(t("startupCloudFailed"));
    renderAll();
  });





