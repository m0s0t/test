
/* ---------- بيانات تجريبية (dummy) ---------- */
const DB = {
  // 🚩 الأقسام (departments)
  departments: [
    {
      id: "anesthesia",
      name: "التخدير",
      about: "قسم متخصص بالعناية والتخدير.",
      stages: ["Stage 2", "Stage 3.1"],
      teachers: ["د. ليث", "د.عادل"]
    },
    
  ],

  // 🚩 الدورات (courses)
  courses: [
    // === الدورات الأصلية ===
   {
  id: "an2",
  title: "محاضرات التخدير",
  desc: "محاضرات في مادة التخدير الوزارية للمرحلة الثالثة",
  subject: " تخدير وزاري",
  stage: "Stage 3.2",
  dept: "anesthesia",
  thumb: "an.png",
  doctor: "د. حسام",
  lessons: [
    {
      id: "an2L1",
      title: "Regional Anaesthesia",
      yt: "HXCs6U7iF4s"
    },
    {
      id: "an2L2",
      title: "Renal Disease and Anesthesia",
      yt: "buWSlHhCdPU"
    },
    {
      id: "an2L3",
      title: "Liver Disease and Anesthesia",
      yt: "IezLnNJVg5s"
    },
    {
      id: "an2L4",
      title: "Anesthesia for orthopedic surgery",
      yt: "QilDCovuP6A"
    },
    {
      id: "an2L5",
      title: "Day case surgery",
      yt: "htPOCiRo80A"
    },
    {
      id: "an2L6",
      title: "Anesthesia for laparoscopic surgery",
      yt: "LQUswDYEfvI"
    },
    {
      id: "an2L7",
      title: "Non Operating Room Anaesthesia (NORA)",
      yt: "hQoMO4dSTHw"
    },
    {
      id: "an2L8",
      title: "Anesthesia for ophthalmic surgery",
      yt: "D-gBvoaukLc"
    }
    ]
  },

    {
  id: "ana3.2",
  title: "العناية وزاري مرحلة ثالثة",
  desc: "قائمة تشغيل لفديوهات دكتور حسام في مادة العناية للمرحلة الثالثة",
  subject: "عناية وزاري",
  stage: "Stage 3.2",
  dept: "anesthesia",
  thumb: "an2.PNG",
  doctor: "د. حسام",
  lessons: [
    {
      id: "ana3L1",
      title: "Respiratory monitoring",
      yt: "HQSBcsyGp6s"
    },
    {
      id: "ana3L2",
      title: "ARDS and ALI",
      yt: "fHKk0elS438"
    },
    {
      id: "ana3L3",
      title: "COPD and Acute asthma",
      yt: "4G025boFktM"
    },
    {
      id: "ana3L4",
      title: "Arterial Blood Gas Analysis ABG",
      yt: "S49wI1Nd2Tc"
    },
    {
      id: "ana3L5",
      title: "Cardiopulmonary resuscitation CPR",
      yt: "adXy666nh1Q"
    },
    {
      id: "ana3L6",
      title: "Mechanical Ventilation in Brain Injured Patients",
      yt: "YCK77rQJDr4"
    },
    {
      id: "ana3L7",
      title: "Fluid therapy for critical ill patient",
      yt: "tbi59UK4yPU"
    },
    {
      id: "ana3L8",
      title: "Blood transfusion",
      yt: "OSXIWigGAEg"
    },
    {
      id: "ana3L9",
      title: "Status epilepticus",
      yt: "Mg1YYp0GJMI"
    }
  ]
},


  ],

  // 🚩 الملازم (notes)
  notes: [
    // 🔹 مادة اجهزة نظري - مرحلة ثالثة تخدير
{
  id: "e101",
  subject: "اجهزة نظري",
  number: 1,
  title: "Tracheal Tube",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ah3k1l1.pdf"
},
{
  id: "e102",
  subject: "اجهزة نظري",
  number: 2,
  title: "Oropharyngeal Airways",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ah3k1l2.pdf"
},
{
  id: "e103",
  subject: "اجهزة نظري",
  number: 3,
  title: "Laryngeal Mask",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ah3k1l3.pdf"
},
{
  id: "e104",
  subject: "اجهزة نظري",
  number: 4,
  title: "Laryngoscope",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ah3k1l4.pdf"
},
{
  id: "e105",
  subject: "اجهزة نظري",
  number: 5,
  title: "Humidifiers",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ah3k1l5.pdf"
},
{
  id: "e106",
  subject: "اجهزة نظري",
  number: 6,
  title: "Nebulizers",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ah3k1l6.pdf"
},
{
  id: "e107",
  subject: "اجهزة نظري",
  number: 7,
  title: "Medical Suction Apparatus",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ah3k1l7.pdf"
},
    {
      id: "n101",
      subject: "اجهزة مرتب",
      number: 1,
      title: "اجهزة نظري 1",
      teacher: "د. ميثم",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/a1.pdf"
    },
    // 🔹 مادة باطني نظري - مرحلة ثالثة تخدير
{
  id: "m101",
  subject: "باطني نظري",
  number: 1,
  title: "Jaundice",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ba3k1l1.pdf"
},
{
  id: "m102",
  subject: "باطني نظري",
  number: 2,
  title: "Peptic Ulcer",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ba3k1l2.pdf"
},
{
  id: "m103",
  subject: "باطني نظري",
  number: 3,
  title: "Cerebrovascular Accident",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ba3k1l3.pdf"
},
{
  id: "m104",
  subject: "باطني نظري",
  number: 4,
  title: "Renal Failure",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ba3k1l4.pdf"
},
{
  id: "m105",
  subject: "باطني نظري",
  number: 5,
  title: "Coronary Artery Diseases",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ba3k1l5.pdf"
},
{
  id: "m106",
  subject: "باطني نظري",
  number: 6,
  title: "Arrhythmia",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ba3k1l6.pdf"
},
{
  id: "m107",
  subject: "باطني نظري",
  number: 7,
  title: "Hypertension",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ba3k1l7.pdf"
},
    {
      id: "n102",
      subject: "اجهزة نظري",
      number: 2,
      title:"اجهزة مرتب",
      teacher: "د. ميثم",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/a2.pdf"
    },
    {
      id: "n103",
      subject: "اجهزة نظري",
      subject: " اجهزة مرتب",
      number: 3,
      title: "الأجهزة نظري 3",
      teacher: "د. ميثم",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/a3.pdf"
    },
    {
      id: "n104",
      subject: "عناية عملي",
      number: "1,2,3",
      title: "عناية عملي",
      teacher: "د. عادل",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/m123.pdf"
    },
  
   {
  id: "n101",
  subject: "تخدير نظري",
  number: 1,
  title: "Introduction to Anesthesiology",
  teacher: "Dr. Waad A. Hayder ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/AN.K1.L1.PDF"
},
{
  id: "n102",
  subject: "تخدير نظري",
  number: 2,
  title: "Drugs used in premedication ",
  teacher: "Dr. Waad A. Hayder ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/AN.K1.L2.PDF"
},
{
  id: "n103",
  subject: "تخدير نظري",
  number: 3,
  title: "Inhalational anesthetic agents",
  teacher: "Dr. Waad A. Hayder ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/AN.K1.L3.PDF"
},
{
  id: "n104",
  subject: "تخدير نظري",
  number: 4,
  title: "Intravenous anesthetic agents ",
  teacher: "Dr. Waad A. Hayder ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/AN.K1.L4.PDF"
},
{
  id: "n105",
  subject: "تخدير نظري",
  number: 5,
  title: " NEUROMUSCULAR BLOCKADE",
  teacher: "Dr. Waad A. Hayder ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/AN.K1.L5.PDF"
},
{
  id: "n106",
  subject: "تخدير نظري",
  number: 6,
  title: "General Principles of Pharmacology",
  teacher: "Dr. Waad A. Hayder ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/AN.K1.L6.PDF"
},
{
  id: "n107",
  subject: "تخدير نظري",
  number: 7,
  title: "Choice of anesthetic method and anesthetic agents",
  teacher: "Dr. Waad A. Hayder ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/AN.K1.L7.PDF"
},
{
  id: "n108",
  subject: "تخدير نظري",
  number: 8,
  title: "Preanaesthetic visit and assessment ",
  teacher: "Dr. Waad A. Hayder ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/AN.K1.L8.PDF"
},
// 🔹 مادة الجراحة النظري - مرحلة ثالثة تخدير
{
  id: "s101",
  subject: "جراحة نظري",
  number: 1,
  title: "Git (Upper and Lower)",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/SU3K1L1.pdf"
},
{
  id: "s102",
  subject: "جراحة نظري",
  number: 2,
  title: "Git (General Review and Surgical Approaches)",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/SU3K1L2.pdf"
},
{
  id: "s103",
  subject: "جراحة نظري",
  number: 3,
  title: "Liver",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/SU3K1L3.pdf"
},
{
  id: "s104",
  subject: "جراحة نظري",
  number: 4,
  title: "Spleen",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/SU3K1L4.pdf"
},
{
  id: "s105",
  subject: "جراحة نظري",
  number: 5,
  title: "Esophageal Diseases & Surgery",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/SU3K1L5.pdf"
},
{
  id: "s106",
  subject: "جراحة نظري",
  number: 6,
  title: "Pancreas",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/SU3.K1.L6"
},
{
    id: "n201",
    subject: "عناية نظري",
    number: 1,
    title: "Intensive care unit (ICU)",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/ic3k1l1.pdf"
  },
  {
    id: "n202",
    subject: "عناية نظري",
    number: 2,
    title: "POST ANESTHESIA CARE UNIT (PACU)",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/ic3k1l4.pdf"
  },
  {
    id: "n203",
    subject: "عناية نظري",
    number: 3,
    title: "Standard in PACU",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/ic3k1l3.pdf"
  },
  {
    id: "n204",
    subject: "عناية نظري",
    number: 4,
    title: "ROUTINE OBSERVATION In the PACU",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/ic3k1l4.pdf"
  },
  {
    id: "n205",
    subject: "عناية نظري",
    number: 5,
    title: "Cardiovascular assessment",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/ic3k1l5.pdf"
  },
  {
    id: "n206",
    subject: "عناية نظري",
    number: 6,
    title: "Direct arterial blood pressure",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/ic3k1l6.pdf"
  }


  ],

  // 🚩 الامتحانات (exams)
exams: [
  {
    id: "e16",
    date: "2025-11-25",
    time: "13:00",
    day: "الثلاثاء",
    name: "امتحان تخدير نظري",
    dept: "anesthesia",
    notes: ["n101"],
    courses: ["الكورس الأول"],
    remarks: "قاعة 6",
    examType: " وهمي مد ثاني"
  }
]

};



/* ---------- مختصر DOM ---------- */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const qsParam = (k) => new URLSearchParams(location.search).get(k);

/* ---------- الأدوات ---------- */
function escapeHtml(s){ return String(s || '').replace(/[&<>"']/g,(m)=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[m]); }
function debounce(fn, ms=250){ let t; return (...a)=>{ clearTimeout(t); t = setTimeout(()=>fn(...a), ms); }; }

/* ---------- عناصر البحث التفاعلي (Autocomplete) ---------- */
function initAutocomplete(inputEl, onSelect){
  // container لعرض الاقتراحات
  const wrapper = document.createElement('div');
  wrapper.className = 'autocomplete';
  inputEl.parentNode.insertBefore(wrapper, inputEl);
  wrapper.appendChild(inputEl);

  const list = document.createElement('div');
  list.className = 'autocomplete-list';
  list.style.display = 'none';
  wrapper.appendChild(list);

  // صنع مجموعة اقتراحات من العناوين (دورات، ملازم، منشورات)
  const items = [
    ...DB.courses.map(c => ({
        type: 'course',
        id: c.id,
        title: c.title,
        meta: `${c.subject} - ${c.stage}` // ✅ إضافة المرحلة هنا
    })),
    ...DB.notes.map(n => ({
    type: 'note',
    id: n.id,
    title: `مذكرة ${n.number}: ${n.title}:الكورس ${n.course}`, // ✅ ترقيم المذكرة بالـ number
    meta: `${n.subject} - ${n.stage} - الكورس ${n.course}` // ✅ إضافة الكورس هنا
})),

    ...DB.culture.map(p => ({
        type: 'post',
        id: p.id,
        title: p.title,
        meta: p.type
    }))
];

  let activeIndex = -1;
  function renderList(filtered){
    list.innerHTML = filtered.map(it=>`<div class="autocomplete-item" data-type="${it.type}" data-id="${it.id}"><span>${escapeHtml(it.title)}</span><small class="muted">${escapeHtml(it.meta)}</small></div>`).join('');
    list.style.display = filtered.length ? 'block' : 'none';
    activeIndex = -1;
  }

  function query(q){
    if(!q) return renderList([]);
    const low = q.toLowerCase();
    const filtered = items.filter(it => (it.title + ' ' + it.meta).toLowerCase().includes(low)).slice(0,8);
    renderList(filtered);
  }

  const run = debounce((ev)=> query(ev.target.value), 160);
  inputEl.addEventListener('input', run);

  // keyboard navigation
  inputEl.addEventListener('keydown', (e)=>{
    if(list.style.display === 'none') return;
    const nodes = Array.from(list.children);
    if(e.key === 'ArrowDown'){ activeIndex = Math.min(activeIndex+1, nodes.length-1); e.preventDefault(); }
    else if(e.key === 'ArrowUp'){ activeIndex = Math.max(activeIndex-1, 0); e.preventDefault(); }
    else if(e.key === 'Enter'){ e.preventDefault(); if(activeIndex>=0) nodes[activeIndex].click(); else { inputEl.form && inputEl.form.requestSubmit(); } }
    nodes.forEach((n,i)=> n.classList.toggle('active', i===activeIndex));
    if(activeIndex>=0) nodes[activeIndex].scrollIntoView({block:'nearest', inline:'nearest'});
  });

  // click on item
  list.addEventListener('click', (e)=>{
    const item = e.target.closest('.autocomplete-item'); if(!item) return;
    const type = item.dataset.type; const id = item.dataset.id;
    list.style.display = 'none';
    inputEl.value = item.querySelector('span').textContent;
    if(typeof onSelect === 'function') onSelect({type, id});
  });

  // click outside -> hide
  document.addEventListener('click', (e)=>{ if(!wrapper.contains(e.target)) list.style.display = 'none'; });
}

/* ---------- تنسيقات الصفحة العامة ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  const el = $('#year'); if(el) el.textContent = new Date().getFullYear();

  // init autocomplete on any search inputs that exist in header/hero
  const homeInput = $('#homeSearch');
  if(homeInput) initAutocomplete(homeInput, ({type,id})=>{
    if(type === 'course') location.href = `course-details.html?courseId=${id}`;
    else if(type === 'note') location.href = `notes.html?filter=${id}`;
    else if(type === 'post') location.href = `culture-post.html?postId=${id}`;
  });

  // generic: if a search field exists on courses page, enhance it too
  const coursesSearch = $('#courseSearch');
  if(coursesSearch) initAutocomplete(coursesSearch, ({type,id})=>{
    if(type==='course') location.href = `course-details.html?courseId=${id}`;
    else if(type==='post') location.href = `culture-post.html?postId=${id}`;
  });
});

/* ---------- Renderers (per page) ---------- */

/* Helpers لبطاقات */
function formatCourseCard(course){
  return `
    <article class="card">
      <img class="thumb" src="${course.thumb}" alt="${escapeHtml(course.title)}" />
      <div class="content">
        <div class="chips"><span class="chip">${escapeHtml(course.subject)}</span><span class="chip">${escapeHtml(course.stage)}</span></div>
        <h3>${escapeHtml(course.title)}</h3>
        <p class="muted">${escapeHtml(course.desc)}</p>
        <div style="margin-top:10px;display:flex;gap:8px;justify-content:flex-start">
          <a class="btn" href="course-details.html?courseId=${course.id}">تفاصيل</a>
          <a class="btn ghost" href="notes.html?course=${course.id}">ملازم متعلقة</a>
        </div>
      </div>
    </article>
  `;
}
function formatNoteCard(note){
  return `
    <article class="card">
      <div class="content">
        <div class="chips">
          <span class="chip">${escapeHtml(note.subject)}</span>
          <span class="chip">${escapeHtml(note.stage)}</span> <!-- ✅ إضافة المرحلة هنا -->
          <span class="chip">مذكرة ${note.number}</span>
        </div>
        <h3>${escapeHtml(note.title)}</h3>
        <p class="muted">المدرّس: ${escapeHtml(note.teacher)}</p>
        <div style="margin-top:10px;display:flex;gap:8px">
          <a class="btn" href="${note.file}" download>تحميل</a>
        </div>
      </div>
    </article>
  `;
}

function formatCultureCard(post){
  return `
    <article class="card">
      <img class="thumb" src="${post.image}" alt="${escapeHtml(post.title)}" />
      <div class="content">
        <h3>${escapeHtml(post.title)}</h3>
        <p class="muted">${escapeHtml(post.excerpt)}</p>
        <div style="margin-top:10px;display:flex;gap:8px">
          <a class="btn" href="culture-post.html?postId=${post.id}">اقرأ</a>
        </div>
      </div>
    </article>
  `;
}

/* Page: Home */
function renderHome(){
  const hc = $('#homeCourses'); if(hc) hc.innerHTML = DB.courses.slice(0,3).map(formatCourseCard).join('');
  const hn = $('#homeNotes'); if(hn) hn.innerHTML = DB.notes.slice(0,3).map(formatNoteCard).join('');
  const hcu = $('#homeCulture'); if(hcu) hcu.innerHTML = DB.culture.slice(0,3).map(formatCultureCard).join('');
  const hf = $('#homeSearchForm');
  if(hf) hf.addEventListener('submit', e=>{
    e.preventDefault();
    const q = $('#homeSearch').value.trim();
    if(!q) return location.href='courses.html';
    location.href = `courses.html?search=${encodeURIComponent(q)}`;
  });
}

/* Page: Departments */
function renderDepartments(){
  const root = $('#deptList');
  if(!root) return;
  root.innerHTML = DB.departments.map(d=>`
    <article class="card">
      <div class="content">
        <h3>${escapeHtml(d.name)}</h3>
        <p class="muted">${escapeHtml(d.about)}</p>
        <div style="margin-top:10px">
          <button class="btn" data-dept="${d.id}">عرض القسم</button>
        </div>
      </div>
    </article>
  `).join('');

  document.body.addEventListener('click', (e)=>{
    const deptId = e.target.getAttribute('data-dept');
    if(deptId) showDeptDetails(deptId);
  });
}
function showDeptDetails(deptId){
  const d = DB.departments.find(x=>x.id===deptId); if(!d) return;
  $('#deptTitle').textContent = d.name;
  $('#deptStages').innerHTML = d.stages.map(s=>`<button class="chip" data-stage="${encodeURIComponent(s)}">${escapeHtml(s)}</button>`).join(' ');
  $('#deptTeachers').innerHTML = d.teachers.map(t=>`<span class="chip">${escapeHtml(t)}</span>`).join(' ');
  $('#deptDetails').hidden = false;
  $('#stageContent').innerHTML = d.stages.map(stage=>{
    const courses = DB.courses.filter(c=>c.dept===deptId && c.stage===stage);
    const notes = DB.notes.filter(n=>n.dept===deptId && n.stage===stage);
    return `<div class="card"><div class="content"><h4>${escapeHtml(stage)}</h4>
      <div><strong>دورات:</strong> ${courses.map(c=>escapeHtml(c.title)).join(', ') || 'لا توجد'}</div>
      <div><strong>ملازم:</strong> ${notes.map(n=>escapeHtml(n.title)).join(', ') || 'لا توجد'}</div></div></div>`;
  }).join('');
}

/* Page: Courses */
function renderCourses(){
  const deptSel = $('#filterDepartment');
  if(!deptSel) return;
  deptSel.innerHTML = '<option value=\"\">كل الأقسام</option>';
  DB.departments.forEach(d=> deptSel.insertAdjacentHTML('beforeend', `<option value="${d.id}">${escapeHtml(d.name)}</option>`));
  const uniqueStages = [...new Set(DB.courses.map(c=>c.stage))];
  const stageSel = $('#filterStage');
  stageSel.innerHTML = '<option value="">كل المراحل</option>';
  uniqueStages.forEach(s=> stageSel.insertAdjacentHTML('beforeend', `<option value="${s}">${escapeHtml(s)}</option>`));

  const grid = $('#coursesGrid');
  const initQuery = qsParam('search') || '';

  $('#courseSearch').value = initQuery;

  function applyFilters(){
    const q = ($('#courseSearch').value || '').trim().toLowerCase();
    const dept = $('#filterDepartment').value;
    const stage = $('#filterStage').value;
    let list = DB.courses.slice();
    if(q) list = list.filter(c => (c.title + ' ' + c.desc + ' ' + c.subject).toLowerCase().includes(q));
    if(dept) list = list.filter(c=>c.dept===dept);
    if(stage) list = list.filter(c=>c.stage===stage);
    grid.innerHTML = list.map(formatCourseCard).join('') || '<div class="card"><div class="content">لا توجد نتائج</div></div>';
  }

  $('#courseSearch').addEventListener('input', debounce(applyFilters, 160));
  $('#filterDepartment').addEventListener('change', applyFilters);
  $('#filterStage').addEventListener('change', applyFilters);
  applyFilters();
}

/* Page: Course Details */
function renderCourseDetails(){
  const courseId = qsParam('courseId');
  if(!courseId) return $('#courseTitle').textContent = 'لم يتم تحديد دورة';
  const course = DB.courses.find(c=>c.id===courseId);
  if(!course) return $('#courseTitle').textContent = 'الدورة غير موجودة';
  $('#courseTitle').textContent = course.title;
  $('#courseThumb').src = course.thumb;
  $('#courseMeta').innerHTML = `<span class="chip">${escapeHtml(course.subject)}</span><span class="chip">${escapeHtml(course.stage)}</span><span class="chip">${escapeHtml(course.doctor)}</span><span class="chip">${escapeHtml(course.dept)}</span>`;
  const listEl = $('#lessonList'); listEl.innerHTML = '';
  course.lessons.forEach((l, idx)=>{
    const watchedKey = `watched:${courseId}:${l.id}`;
    const watched = localStorage.getItem(watchedKey) === '1';
    const li = document.createElement('li');
    li.innerHTML = `<span>${idx+1}. ${escapeHtml(l.title)}</span>
                    <div style="display:flex;gap:8px">
                      <button class="btn" data-play="${l.id}">شغّل</button>
                      <button class="btn ghost" data-toggle-watched="${l.id}">${watched ? 'مُشاهَد' : 'علّم كمشاهدة'}</button>
                    </div>`;
    listEl.appendChild(li);
  });

  function updateProgress(){
    const total = course.lessons.length;
    const watchedCount = course.lessons.reduce((s,l)=> s + (localStorage.getItem(`watched:${courseId}:${l.id}`)==='1' ? 1:0), 0);
    const percent = Math.round((watchedCount/total)*100);
    $('#courseProgress').style.width = percent+'%';
  }
  updateProgress();

  const player = $('#ytPlayer'); const nowPlaying = $('#nowPlaying');
  function playLesson(lessonId){
    const lesson = course.lessons.find(x=>x.id===lessonId); if(!lesson) return;
    player.src = `https://www.youtube.com/embed/${lesson.yt}?rel=0&autoplay=1`;
    nowPlaying.textContent = lesson.title;
    localStorage.setItem(`watched:${courseId}:${lessonId}`,'1');
    $$('[data-toggle-watched]').forEach(b=>{
      const id = b.getAttribute('data-toggle-watched');
      const watched = localStorage.getItem(`watched:${courseId}:${id}`) === '1';
      b.textContent = watched ? 'مُشاهَد' : 'علّم كمشاهدة';
    });
    updateProgress();
  }

  document.body.addEventListener('click', (e)=>{
    const playId = e.target.getAttribute('data-play'); if(playId) playLesson(playId);
    const toggleId = e.target.getAttribute('data-toggle-watched');
    if(toggleId){
      const key = `watched:${courseId}:${toggleId}`;
      const cur = localStorage.getItem(key) === '1';
      localStorage.setItem(key, cur ? '0':'1');
      updateProgress();
      e.target.textContent = localStorage.getItem(key) === '1' ? 'مُشاهَد' : 'علّم كمشاهدة';
    }
  });

  $('#prevLesson').addEventListener('click', ()=>{
    const current = course.lessons.findIndex(l => $('#nowPlaying').textContent === l.title);
    const prev = Math.max(0, current-1);
    if(current === -1) playLesson(course.lessons[0].id); else playLesson(course.lessons[prev].id);
  });
  $('#nextLesson').addEventListener('click', ()=>{
    const current = course.lessons.findIndex(l => $('#nowPlaying').textContent === l.title);
    const next = Math.min(course.lessons.length-1, current+1);
    if(current === -1) playLesson(course.lessons[0].id); else playLesson(course.lessons[next].id);
  });
}

/* Page: Notes */
function renderNotes(){
  const deptSel = $('#noteDept'), stageSel = $('#noteStage'), subjSel = $('#noteSubject');
  if(!deptSel) return;
  deptSel.innerHTML = '<option value="">كل الأقسام</option>'; DB.departments.forEach(d=> deptSel.insertAdjacentHTML('beforeend', `<option value="${d.id}">${escapeHtml(d.name)}</option>`));
  stageSel.innerHTML = '<option value="">كل المراحل</option>'; [...new Set(DB.notes.map(n=>n.stage))].forEach(s=> stageSel.insertAdjacentHTML('beforeend', `<option value="${s}">${escapeHtml(s)}</option>`));
  subjSel.innerHTML = '<option value="">كل المواد</option>'; [...new Set(DB.notes.map(n=>n.subject))].forEach(s=> subjSel.insertAdjacentHTML('beforeend', `<option value="${s}">${escapeHtml(s)}</option>`));
  const grid = $('#notesGrid');

  function apply(){
    const q = ($('#noteSearch').value||'').trim().toLowerCase();
    const dept = deptSel.value; const stage = stageSel.value; const subject = subjSel.value;
    let list = DB.notes.slice();
    if(q) list = list.filter(n => (n.title + ' ' + n.teacher + ' ' + n.subject).toLowerCase().includes(q));
    if(dept) list = list.filter(n=> n.dept===dept);
    if(stage) list = list.filter(n=> n.stage===stage);
    if(subject) list = list.filter(n=> n.subject===subject);
    grid.innerHTML = list.map(formatNoteCard).join('') || '<div class="card"><div class="content">لا توجد ملاحظات</div></div>';
  }
  $('#noteSearch').addEventListener('input', debounce(apply, 160));
  deptSel.addEventListener('change',apply); stageSel.addEventListener('change',apply); subjSel.addEventListener('change',apply);

  const qcourse = qsParam('course');
  if(qcourse){
    const c = DB.courses.find(x=>x.id===qcourse);
    if(c) $('#noteSearch').value = c.subject;
  }
  apply();
}

/* Page: Exams */
function renderExams(){
  const deptSel = $('#examDeptFilter');
  if(!deptSel) return;
  deptSel.innerHTML = '<option value="">كل الأقسام</option>';
  DB.departments.forEach(d=> deptSel.insertAdjacentHTML('beforeend', `<option value="${d.id}">${escapeHtml(d.name)}</option>`));
  const tbody = $('#examTable tbody');
  function apply(){
    const dept = deptSel.value;
    let list = DB.exams.slice();
    if(dept) list = list.filter(e=> e.dept === dept);
    tbody.innerHTML = list.map(e=>{
      const notesLinks = e.notes.map(id=>{ const n=DB.notes.find(x=>x.id===id); return n? `<a href="${n.file}" download>${escapeHtml(n.title)}</a>` : '' }).join(', ');
      const coursesLinks = e.courses.map(id=>{ const c=DB.courses.find(x=>x.id===id); return c? `<a href="course-details.html?courseId=${c.id}">${escapeHtml(c.title)}</a>` : '' }).join(', ');
      return `<tr>
  <td data-label="التاريخ">${escapeHtml(e.date)}</td>
  <td data-label="الوقت">${escapeHtml(e.time)}</td>
  <td data-label="اليوم">${escapeHtml(e.day)}</td>
    <td data-label="نوع الامتحان">${escapeHtml(e.examType)}</td>
  <td data-label="نوع الامتحان">${escapeHtml(e.session)}</td>
  <td data-label="اسم الامتحان">${escapeHtml(e.name)}</td>
  <td data-label="القسم">${escapeHtml(e.dept)}</td>
  <td data-label="الملاحظات / الدورات">${notesLinks} ${coursesLinks}</td>
  <td data-label="رقم القاعة">${escapeHtml(e.remarks)}</td>
</tr>`;

    }).join('') || '<tr><td colspan="6">لا توجد مواعيد</td></tr>';
  }
  deptSel.addEventListener('change',apply); apply();
}
/* ---------- تطبيق الرندر حسب الصفحة ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  const page = document.body.getAttribute('data-page');
  if(page === 'home') renderHome();
  else if(page === 'departments') renderDepartments();
  else if(page === 'courses') renderCourses();
  else if(page === 'course-details') renderCourseDetails();
  else if(page === 'notes') renderNotes();
  else if(page === 'exams') renderExams();
});
const cultureModal = document.getElementById("cultureModal");
const closeCultureModal = document.getElementById("closeCultureModal");
const cultureModalOverlay = document.getElementById("cultureModalOverlay");

// فتح الـ modal عند الضغط على أي عنصر (مثال، لاحقًا اربطه مع بياناتك)
function openCultureModal(title, body, img) {
  document.getElementById("cultureModalTitle").textContent = title;
  document.getElementById("cultureModalBody").textContent = body;
  document.getElementById("cultureImage").src = img;

  cultureModal.classList.add("show");
}


function closePopup() {
  document.getElementById("welcomePopup").style.display = "none";
}

// إغلاق عند الضغط خارج الصندوق
window.onclick = function(event) {
  const popup = document.getElementById("welcomePopup");
  if (event.target === popup) closePopup();
}
// إغلاق الـ modal عند الضغط على زر الإغلاق أو الخلفية
closeCultureModal.addEventListener("click", () => {
  cultureModal.classList.remove("show");
});

cultureModalOverlay.addEventListener("click", () => {
  cultureModal.classList.remove("show");
});
function goToPost(postId) {
  const post = DB.culture.find(p => p.id === postId);
  if (!post) return;

  document.getElementById("post-container").innerHTML = `
    <h1>${escapeHtml(post.title)}</h1>
    <img src="${post.image}" alt="${escapeHtml(post.title)}">
    ${renderBody(post.body)}
  `;
}
function renderBody(body) {
  return body.map(item => {
    // إذا كان النص عبارة عن رابط
    if (typeof item === "object" && item.type === "link") {
      // رابط ينفذ دالة JS تعرض المنشور المطلوب
      return `<p><a href="#" onclick="showPost('${item.to}'); return false;">${escapeHtml(item.text)}</a></p>`;
    } 
    // نص عادي
    else if (typeof item === "string") {
      return `<p>${escapeHtml(item)}</p>`;
    }
  }).join('');
}

// دالة لعرض المنشور المطلوب
function showPost(postId) {
  const post = DB.culture.find(p => p.id === postId);
  if (!post) return;
  // افترض أن لديك عنصر يحتوي على المنشور، مثل: <div id="post-container"></div>
  const container = document.getElementById("post-container");
  if (!container) return;

  container.innerHTML = `
    <h1>${escapeHtml(post.title)}</h1>
    <img src="${post.image}" alt="${escapeHtml(post.title)}">
    ${renderBody(post.body)}
  `;
}
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-close');

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show'); // إخفاء المودال
});
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
window.addEventListener('resize', apply);
let notesLinks = e.notes.map(id=>{
  const n=DB.notes.find(x=>x.id===id);
  if(!n) return '';
  return window.innerWidth < 768 
         ? `<a href="${n.file}" download>${escapeHtml(n.title).slice(0,10)}...</a>` 
         : `<a href="${n.file}" download>${escapeHtml(n.title)}</a>`;
}).join(', ');

});

