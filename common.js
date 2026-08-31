/* =========================================================
   OT_Record — shared client infrastructure
   Loaded by BOTH index.html (public login page) and app.html
   (post-login application). Contains no business data, employee
   names, division names, or organization details — those only
   ever arrive from the authenticated API after login.
   ========================================================= */

const T = {
  bn:{
    appName:'OT_Record', appSub:'অতিরিক্ত কর্মঘন্টা ব্যবস্থাপনা',
    login:'লগইন', username:'ইউজারনেম', password:'পাসওয়ার্ড', signin:'প্রবেশ করুন',
    roleAdmin:'অ্যাডমিন', roleEmployee:'কর্মচারী', loginErr:'ইউজারনেম বা পাসওয়ার্ড সঠিক নয়',
    lockedOut:'অনেকবার ভুল চেষ্টার কারণে সাময়িকভাবে বন্ধ, ১৫ মিনিট পর আবার চেষ্টা করুন',
    navNew:'নতুন শিট', navRecords:'রেকর্ডস', navSummary:'সারাংশ', navSettings:'সেটিংস', navLogout:'লগআউট',
    newSheetTitle:'নতুন ওটি শিট তৈরী', editSheetTitle:'ওটি শিট সম্পাদনা',
    date:'তারিখ', division:'বিভাগ', workDesc:'অতিরিক্ত কাজের বিবরণী', remarks:'মন্তব্য',
    timeSlots:'সময়সূচী', addSlot:'+ সময় যোগ করুন', start:'শুরু', end:'শেষ',
    selectEmployees:'কর্মচারী নির্বাচন করুন', actualTime:'প্রকৃত সময় সমন্বয়',
    uploadImage:'ওটি শিটের ছবি (ঐচ্ছিক)', tapUpload:'ছবি আপলোড করতে ট্যাপ করুন', uploading:'আপলোড হচ্ছে...',
    save:'সংরক্ষণ করুন', cancel:'বাতিল', update:'আপডেট করুন',
    recordsTitle:'ওটি শিট রেকর্ডস', recordsSub:'শিট অনুযায়ী প্রদর্শিত',
    noRecords:'কোনো ওটি শিট পাওয়া যায়নি', createFirst:'নতুন শিট তৈরি করুন',
    employees:'জন কর্মচারী', edit:'সম্পাদনা', del:'মুছুন', view:'দেখুন',
    confirmDelete:'আপনি কি নিশ্চিতভাবে এই ওটি শিটটি মুছে ফেলতে চান?', yesDelete:'হ্যাঁ, মুছুন',
    summaryTitle:'মাসিক সারাংশ', totalOtHours:'মোট ওভারটাইম ঘন্টা',
    month:'মাস', exportCsv:'রিপোর্ট এক্সপোর্ট (Excel)', name:'নাম', designation:'পদবী',
    noOfSheets:'শিট সংখ্যা', totalHours:'মোট ঘন্টা', total:'মোট',
    settingsTitle:'সেটিংস', empMgmt:'কর্মচারী তালিকা', divMgmt:'বিভাগ তালিকা', langSet:'ভাষা',
    addEmployee:'+ কর্মচারী যোগ করুন', addDivision:'+ বিভাগ যোগ করুন',
    active:'সক্রিয়', inactive:'নিষ্ক্রিয়',
    cannotDeleteDefault:'ডিফল্ট বিভাগ মুছে ফেলা যাবে না', nameBn:'নাম (বাংলা)', nameEn:'নাম (ইংরেজি)',
    saveBtn:'সংরক্ষণ', empName:'কর্মচারীর নাম', empDesig:'পদবী', required:'আবশ্যক',
    empCode:'কর্মচারী আইডি (ঐচ্ছিক)', empSalary:'মূল বেতন (ঐচ্ছিক)',
    restoreDefaults:'ডিফল্ট কর্মচারী পুনরুদ্ধার করুন', noneMissing:'সবগুলো ডিফল্ট কর্মচারী ইতিমধ্যে আছে',
    overlapErr:'সময় দ্বন্দ্ব: এই কর্মচারীর অন্য একটি শিটে একই সময়ে ওভারটাইম রয়েছে',
    fillRequired:'অনুগ্রহ করে সব আবশ্যক তথ্য পূরণ করুন', selectAtLeastOne:'অন্তত একজন কর্মচারী নির্বাচন করুন',
    savedOk:'সফলভাবে সংরক্ষিত হয়েছে', deletedOk:'মুছে ফেলা হয়েছে', updatedOk:'আপডেট হয়েছে',
    hours:'ঘন্টা', na:'নেই', close:'বন্ধ করুন',
    noData:'কোনো তথ্য নেই', searchEmp:'কর্মচারী খুঁজুন...',
    account:'অ্যাকাউন্ট', loggedInAs:'লগইন করা হয়েছে', changePw:'পাসওয়ার্ড পরিবর্তন',
    newPw:'নতুন পাসওয়ার্ড', pwChanged:'পাসওয়ার্ড পরিবর্তিত হয়েছে',
    empDeleted:'কর্মচারী মুছে ফেলা হয়েছে', divDeleted:'বিভাগ মুছে ফেলা হয়েছে',
    calendar:'দৈনিক ক্যালেন্ডার',
    otSheetsCount:'টি শিট', noEmployees:'কোনো কর্মচারী যোগ করা হয়নি',
    permNoAddEmp:'শুধুমাত্র অ্যাডমিন নতুন কর্মচারী যোগ করতে পারবেন',
    selectAll:'সকল কর্মচারী নির্বাচন করুন', deselectAll:'সকল বাদ দিন',
    setupApiTitle:'সার্ভার সংযোগ সেটআপ', apiUrlLabel:'Apps Script Web App URL',
    apiUrlHelp:'আপনার প্রকাশিত (deployed) Google Apps Script Web App-এর URL এখানে বসান। এই URL গোপন তথ্য নয় — শুধু আপনার সার্ভারের ঠিকানা।',
    saveContinue:'সংরক্ষণ করে এগিয়ে যান', connecting:'সংযোগ হচ্ছে...',
    timeHrs:'সময়কাল (ঘন্টা)',
    networkErr:'সার্ভারের সাথে সংযোগ করা যায়নি, ইন্টারনেট ও URL যাচাই করুন',
    errNoUrl:'প্রথমে Apps Script Web App URL সেট করুন',
    errNetwork:'সার্ভারে পৌঁছানো যায়নি। ইন্টারনেট সংযোগ, URL বানান, এবং আপনি সঠিকভাবে ফাইলটি হোস্ট করেছেন কিনা যাচাই করুন (file:// দিয়ে খুললে কাজ নাও করতে পারে)।',
    errBadResponse:'সার্ভার থেকে সঠিক উত্তর পাওয়া যায়নি। সাধারণত এর মানে: (১) Apps Script ডিপ্লয়মেন্টের "Who has access" সেটিং "Anyone" করা হয়নি, (২) URL-টি /exec দিয়ে শেষ হচ্ছে না, অথবা (৩) কোড পরিবর্তনের পর নতুন ডিপ্লয়মেন্ট তৈরি করা হয়নি।',
    errHttp:'সার্ভার একটি ত্রুটি বার্তা পাঠিয়েছে',
    errNotHttps:'URL অবশ্যই https:// দিয়ে শুরু হতে হবে',
    testConnection:'সংযোগ পরীক্ষা করুন', connectionOk:'সংযোগ সফল হয়েছে ✓',
    editApiUrl:'সার্ভার ঠিকানা পরিবর্তন করুন', sessionExpired:'সেশনের মেয়াদ শেষ, আবার লগইন করুন',
    generatingReport:'রিপোর্ট তৈরি হচ্ছে...',
    reportGenFailed:'রিপোর্ট তৈরিতে সমস্যা হয়েছে (সার্ভার চালু আছে, কিন্তু রিপোর্ট তৈরির সময় একটি ত্রুটি ঘটেছে)',
    authRequiredTitle:'একবারের জন্য অনুমতি প্রয়োজন',
    authRequiredBody:'রিপোর্ট তৈরির ফিচারটি নতুন — এর জন্য গুগলের অতিরিক্ত অনুমতি (Drive ফাইল তৈরি ও এক্সপোর্ট) প্রয়োজন, যা এখনো Apps Script প্রজেক্টে অনুমোদিত হয়নি।',
    authRequiredSteps: `
      <b>১.</b> Google Apps Script এডিটর খুলুন (script.google.com)।<br>
      <b>২.</b> উপরের ফাংশন তালিকা থেকে <b>authorizeReportFeature</b> নির্বাচন করুন।<br>
      <b>৩.</b> ▶ Run বাটনে ক্লিক করুন।<br>
      <b>৪.</b> "Authorization required" ডায়ালগ এলে → Review permissions → নিজের একাউন্ট নির্বাচন করুন → Advanced → "Go to (project) (unsafe)" → Allow।<br>
      <b>৫.</b> এরপর Deploy → Manage deployments → ✏️ Edit → Version: "New version" → Deploy করুন (URL অপরিবর্তিত থাকবে)।<br>
      <b>৬.</b> এই অ্যাপে ফিরে এসে আবার রিপোর্ট এক্সপোর্ট করার চেষ্টা করুন।`,
    reportSettingsTab:'রিপোর্ট সেটিংস',
    reportSettingsHelp:'এখানে পরিবর্তিত তথ্য এক্সপোর্ট করা রিপোর্টের শিরোনাম ও স্বাক্ষর অংশে ব্যবহৃত হবে।',
    rsHeaderText:'রিপোর্ট শিরোনাম', rsWeekLine1:'সাপ্তাহিক হেডার লাইন ১', rsWeekLine2:'সাপ্তাহিক হেডার লাইন ২', rsWeekLine3:'সাপ্তাহিক হেডার লাইন ৩',
    rsOfficers:'কর্মকর্তাদের স্বাক্ষর', rsSig1:'স্বাক্ষর ১', rsSig2:'স্বাক্ষর ২', rsSig3:'স্বাক্ষর ৩', rsSig4:'স্বাক্ষর ৪', rsSig5:'স্বাক্ষর ৫', rsSig6:'স্বাক্ষর ৬',
  },
  en:{
    appName:'OT_Record', appSub:'Employee Overtime Manager',
    login:'Login', username:'Username', password:'Password', signin:'Sign In',
    roleAdmin:'Admin', roleEmployee:'Employee', loginErr:'Incorrect username or password',
    lockedOut:'Too many failed attempts — try again in 15 minutes',
    navNew:'New Sheet', navRecords:'Records', navSummary:'Summary', navSettings:'Settings', navLogout:'Logout',
    newSheetTitle:'Create OT Sheet', editSheetTitle:'Edit OT Sheet',
    date:'Date', division:'Division', workDesc:'Work Description', remarks:'Remarks',
    timeSlots:'Time Slots', addSlot:'+ Add Slot', start:'Start', end:'End',
    selectEmployees:'Select Employees', actualTime:'Actual Time Adjustment',
    uploadImage:'OT Sheet Image (optional)', tapUpload:'Tap to upload image', uploading:'Uploading...',
    save:'Save', cancel:'Cancel', update:'Update',
    recordsTitle:'OT Sheet Records', recordsSub:'Shown by sheet',
    noRecords:'No OT sheets found', createFirst:'Create your first sheet',
    employees:'employees', edit:'Edit', del:'Delete', view:'View',
    confirmDelete:'Are you sure you want to delete this OT sheet?', yesDelete:'Yes, Delete',
    summaryTitle:'Monthly Summary', totalOtHours:'Total Overtime Hours',
    month:'Month', exportCsv:'Export Report (Excel)', name:'Name', designation:'Designation',
    noOfSheets:'No. of Sheets', totalHours:'Total Hours', total:'Total',
    settingsTitle:'Settings', empMgmt:'Employees', divMgmt:'Divisions', langSet:'Language',
    addEmployee:'+ Add Employee', addDivision:'+ Add Division',
    active:'Active', inactive:'Inactive',
    cannotDeleteDefault:'Default divisions cannot be deleted', nameBn:'Name (Bengali)', nameEn:'Name (English)',
    saveBtn:'Save', empName:'Employee Name', empDesig:'Designation', required:'required',
    empCode:'Employee ID (optional)', empSalary:'Basic Salary (optional)',
    restoreDefaults:'Restore Default Employees', noneMissing:'All default employees are already present',
    overlapErr:'Time conflict: this employee already has overtime at this time on another sheet',
    fillRequired:'Please fill all required fields', selectAtLeastOne:'Select at least one employee',
    savedOk:'Saved successfully', deletedOk:'Deleted', updatedOk:'Updated',
    hours:'hrs', na:'—', close:'Close',
    noData:'No data', searchEmp:'Search employee...',
    account:'Account', loggedInAs:'Logged in as', changePw:'Change Password',
    newPw:'New Password', pwChanged:'Password changed',
    empDeleted:'Employee deleted', divDeleted:'Division deleted',
    calendar:'Daily Calendar',
    otSheetsCount:'sheets', noEmployees:'No employees added yet',
    permNoAddEmp:'Only Admin can add new employees',
    selectAll:'Select All Employees', deselectAll:'Deselect All',
    setupApiTitle:'Server Connection Setup', apiUrlLabel:'Apps Script Web App URL',
    apiUrlHelp:"Paste your deployed Google Apps Script Web App URL here. This URL isn't secret — it's just your server's address.",
    saveContinue:'Save & Continue', connecting:'Connecting...',
    timeHrs:'Time (Hrs)',
    networkErr:'Could not reach the server — check your internet connection and URL',
    errNoUrl:'Set your Apps Script Web App URL first',
    errNetwork:"Couldn't reach the server. Check your internet connection, the URL spelling, and that you're opening this file properly hosted (opening via file:// may not work).",
    errBadResponse:"The server didn't return a valid response. This usually means: (1) the Apps Script deployment's \"Who has access\" isn't set to \"Anyone\", (2) the URL doesn't end in /exec, or (3) you edited the code but haven't created a new deployment version.",
    errHttp:'The server returned an error',
    errNotHttps:'The URL must start with https://',
    testConnection:'Test Connection', connectionOk:'Connection successful ✓',
    editApiUrl:'Change Server Address', sessionExpired:'Session expired — please log in again',
    generatingReport:'Generating report...',
    reportGenFailed:'Report generation failed (the server responded, but hit an error while building the report)',
    authRequiredTitle:'One-Time Permission Needed',
    authRequiredBody:"The report-generation feature is new — it needs additional Google permissions (creating/exporting a Drive file) that haven't been authorized in your Apps Script project yet.",
    authRequiredSteps: `
      <b>1.</b> Open the Google Apps Script editor (script.google.com).<br>
      <b>2.</b> In the function dropdown at the top, select <b>authorizeReportFeature</b>.<br>
      <b>3.</b> Click the ▶ Run button.<br>
      <b>4.</b> When the "Authorization required" dialog appears → Review permissions → choose your account → Advanced → "Go to (project name) (unsafe)" → Allow.<br>
      <b>5.</b> Then go to Deploy → Manage deployments → ✏️ Edit → Version: "New version" → Deploy (the URL stays the same).<br>
      <b>6.</b> Come back here and try exporting the report again.`,
    reportSettingsTab:'Report Settings',
    reportSettingsHelp:'Changes here are used in the title and signature sections of the exported report.',
    rsHeaderText:'Report Title', rsWeekLine1:'Weekly Header Line 1', rsWeekLine2:'Weekly Header Line 2', rsWeekLine3:'Weekly Header Line 3',
    rsOfficers:'Officer Signatures', rsSig1:'Signature 1', rsSig2:'Signature 2', rsSig3:'Signature 3', rsSig4:'Signature 4', rsSig5:'Signature 5', rsSig6:'Signature 6',
  }
};
function t(key){ return (T[STATE.lang] && T[STATE.lang][key]) || key; }

/* ---------- local (non-secret) config + helpers ---------- */
const LS = {
  get(k, fallback){ try{ const v = localStorage.getItem(k); return v? JSON.parse(v): fallback; }catch(e){ return fallback; } },
  set(k, v){ localStorage.setItem(k, JSON.stringify(v)); }
};
function uid(prefix){ return (prefix||'id') + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
function esc(s){
  return String(s ?? '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

/* ---------- global state ---------- */
const STATE = {
  lang: LS.get('otr_lang','bn'),
  session: null, // {username, role} — resolved server-side only, never trusted from storage alone
  screen: 'boot', // boot | setup | login | new | records | summary | settings
  editingSheetId: null,
  toastTimer: null,
  employees: [], divisions: [], sheets: [],
  orgConfig: {},
  loaded: false
};

function isAdmin(){ return STATE.session && STATE.session.role === 'admin'; }
function canAddEmployee(){ return isAdmin(); }
function canExport(){ return isAdmin(); }

/* =========================================================
   API CLIENT — the ONLY thing this app talks to.
   Every call is a POST with a JSON string body. Content-Type
   is intentionally left as the browser's default (text/plain)
   so the request stays a CORS "simple request" and the Apps
   Script backend's automatic Access-Control-Allow-Origin: *
   applies without a failed preflight.
   ========================================================= */
const API = {
  baseUrl: localStorage.getItem('otr_api_url') || '',
  token: localStorage.getItem('otr_token') || '',
  status: 'off', // off | busy | on | error

  setStatus(s){ this.status = s; const el=document.getElementById('syncStatusDot'); if(el){ el.className='sync-dot '+(s==='on'?'on':(s==='busy'?'busy':'off')); } },

  async call(action, payload={}){
    this.setStatus('busy');
    if(!this.baseUrl){
      this.setStatus('error');
      const e = new Error('no_url'); throw e;
    }
    let res;
    try{
      const body = JSON.stringify(Object.assign({action, token:this.token}, payload));
      res = await fetch(this.baseUrl, { method:'POST', body });
    }catch(networkErr){
      this.setStatus('error');
      const e = new Error('network_fail'); throw e;
    }
    if(!res.ok){
      this.setStatus('error');
      const e = new Error('http_'+res.status); throw e;
    }
    let text;
    try{ text = await res.text(); }
    catch(readErr){ this.setStatus('error'); throw new Error('network_fail'); }
    let data;
    try{ data = JSON.parse(text); }
    catch(parseErr){
      this.setStatus('error');
      // Apps Script returns HTML (a Google login/consent page) instead of JSON
      // when the deployment's access isn't set to "Anyone", or the URL is wrong/undeployed.
      const e = new Error('bad_response'); throw e;
    }
    this.setStatus('on');
    return data;
  },

  async login(username, password){
    const res = await this.call('login', {username, password});
    if(res.ok){
      this.token = res.token;
      localStorage.setItem('otr_token', res.token);
    }
    return res;
  },
  async logout(){
    try{ await this.call('logout'); }catch(e){}
    this.token = '';
    localStorage.removeItem('otr_token');
  },
  setBaseUrl(url){
    this.baseUrl = url.trim();
    localStorage.setItem('otr_api_url', this.baseUrl);
  },
  changeServer(){
    localStorage.removeItem('otr_api_url');
    localStorage.removeItem('otr_token');
    this.baseUrl = ''; this.token = '';
    STATE.session = null;
    STATE.screen = 'setup';
    render();
  }
};

function diagnoseErr(e){
  const code = e && e.message;
  if(code==='no_url') return t('errNoUrl');
  if(code==='network_fail') return t('errNetwork');
  if(code==='bad_response') return t('errBadResponse');
  if(code && code.indexOf('http_')===0) return t('errHttp') + ' (' + code.replace('http_','') + ')';
  return t('networkErr');
}

/* ---------- toast ---------- */
function toast(msg, isErr){
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = isErr? 'show err':'show';
  clearTimeout(STATE.toastTimer);
  STATE.toastTimer = setTimeout(()=>{ el.className=''; }, 2600);
}

/* ---------- time utils ---------- */
function toMin(hhmm){
  if(!hhmm) return null;
  const [h,m] = String(hhmm).split(':').map(Number);
  return h*60+m;
}
function durationHours(start, end){
  let s = toMin(start), e = toMin(end);
  if(s===null||e===null) return 0;
  if(e <= s) e += 24*60;
  return +( (e-s)/60 ).toFixed(2);
}
function fmtHM(hhmm){ return hhmm || '—'; }

/* ---------- Bengali numeral helper ---------- */
const BN_DIGITS = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
function bnum(input){
  if(input===null||input===undefined) return '';
  let s = String(input);
  if(STATE.lang!=='bn') return s;
  return s.replace(/[0-9]/g, d=> BN_DIGITS[+d]);
}

function intervalsOverlap(aS,aE,bS,bE){
  let as=toMin(aS), ae=toMin(aE), bs=toMin(bS), be=toMin(bE);
  if(ae<=as) ae+=24*60;
  if(be<=bs) be+=24*60;
  return as < be && bs < ae;
}
function findConflicts(employeeId, date, newIntervals, excludeSheetId){
  const conflicts = [];
  STATE.sheets.forEach(sh=>{
    if(sh.id === excludeSheetId) return;
    if(sh.date !== date) return;
    const empEntry = sh.employees.find(e=>e.employee_id===employeeId);
    if(!empEntry) return;
    empEntry.adjustments.forEach(adj=>{
      newIntervals.forEach(ni=>{
        if(intervalsOverlap(ni.start, ni.end, adj.actual_start, adj.actual_end)){
          conflicts.push({sheet:sh, existing:adj});
        }
      });
    });
  });
  return conflicts;
}

