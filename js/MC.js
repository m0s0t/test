const DB = {
  // 🚩 منشورات ثقافية (culture)
  culture: [
{
  id: "t1",
  type: "term",
  title: "Auscultation (الاستماع)",
  excerpt: "الاستماع إلى أصوات الجسم باستخدام السماعة الطبية.",
  image: "https://i.pinimg.com/1200x/c0/7e/de/c07ede4cdaf92d7ed5a139a2d03a7934.jpg",
  body: [
    "يستخدم غالباً لسماع أصوات القلب، الرئة، والأمعاء.",
    "يساعد على كشف أمراض مثل الالتهاب الرئوي أو اللغط القلبي.",
  ]
},
{
  id: "t2",
  type: "term",
  title: "Spontaneous Ventilation (التهوية التلقائية)",
  excerpt: "عملية التنفس الطبيعي دون تدخل أجهزة.",
  image: "https://i.pinimg.com/1200x/70/ee/76/70ee7641caf616570e3f3e8e5593a8f6.jpg",
  body: [
    "تعتمد على عمل الحجاب الحاجز وعضلات التنفس.",
    "مؤشر مهم على سلامة المريض وعدم الحاجة لجهاز التنفس الصناعي.",
  ]
},
{
  id: "t3",
  type: "term",
  title: "Aspiration (الشفط/الاستنشاق الخاطئ)",
  excerpt: "دخول سوائل أو أجسام غريبة إلى مجرى التنفس.",
  image: "https://i.pinimg.com/736x/99/bc/62/99bc62da3fd518d42b38e1a269974426.jpg",
  body: [
    "قد يؤدي إلى التهاب رئوي أو انسداد مجرى الهواء.",
    "شائع عند فقدان الوعي أو ضعف منعكس البلع.",
  ]
},
{
  id: "t4",
  type: "term",
  title: "Glottis (الحنجرة العليا)",
  excerpt: "الفتحة بين الحبلين الصوتيين.",
  image: "https://i.pinimg.com/1200x/72/63/41/726341649f9fa289e91d9e1fcd18b822.jpg",
  body: [
    "جزء مهم في مرور الهواء وإصدار الصوت.",
    "تغلق أثناء البلع لمنع دخول الطعام والشراب.",
  ]
},
{
  id: "t5",
  type: "term",
  title: "Cricoid Cartilage (غضروف الحلق الحلقي)",
  excerpt: "غضروف حلقي يقع أسفل الحنجرة.",
  image: "https://i.pinimg.com/1200x/cd/1c/64/cd1c64f2f3818b60c37e8c90748d4ab9.jpg",
  body: [
    "أصغر غضروف كامل في مجرى التنفس.",
    "يستخدم كمرجع أثناء التنبيب الرغامي.",
  ]
},
{
  id: "t6",
  type: "term",
  title: "Necrosis (النخر)",
  excerpt: "موت الخلايا أو الأنسجة.",
  image: "https://i.pinimg.com/1200x/aa/77/3d/aa773dcd91f1f52f5f1840bc7a92a290.jpg",
  body: [
    "قد ينجم عن نقص التروية أو العدوى.",
    "يُعتبر علامة مرضية خطيرة تستوجب التدخل.",
  ]
},
{
  id: "t7",
  type: "term",
  title: "Tracheal Mucosa (الغشاء المخاطي للقصبة الهوائية)",
  excerpt: "طبقة تغطي القصبة الهوائية وتحميها.",
  image: "https://i.pinimg.com/1200x/3e/84/f4/3e84f4a8b421a2f3f13d75029d7318b5.jpg",
  body: [
    "تفرز مواد مخاطية لترطيب وحماية مجرى الهواء.",
    "قد تتضرر من التنبيب لفترات طويلة.",
  ]
},
{
  id: "t8",
  type: "term",
  title: "Wrinkles (التجاعيد/الطيات)",
  excerpt: "طيات جلدية أو أنسجة تظهر مع العمر أو الحركة.",
  image: "https://i.pinimg.com/1200x/f4/9a/38/f49a383f9e189c1a48ef86ef0a229f8b.jpg",
  body: [
    "قد تكون طبيعية أو مرتبطة بجفاف وفقدان مرونة الجلد.",
    "أحياناً تُلاحظ في الأغشية المخاطية أيضاً.",
  ]
},
{
  id: "t9",
  type: "term",
  title: "Sinus Infection (التهاب الجيوب)",
  excerpt: "التهاب في الجيوب الأنفية.",
  image: "https://i.pinimg.com/1200x/85/24/ab/8524ab4fa37de7cf34596f407b14b870.jpg",
  body: [
    "يسبب احتقان، صداع، وإفرازات أنفية.",
    "قد يكون بكتيري أو فيروسي.",
  ]
},
{
  id: "p2",
  type: "term",
  title: "أوكسيفينيا (Hypoxemia)",
  excerpt: "قلة الأكسجين في الدم.",
  image: "https://i.pinimg.com/1200x/c7/bb/f4/c7bbf4a97022799b4d6683d3e7064565.jpg",
  body: [
    "الأوكسيفينيا تعني انخفاض مستوى الأكسجين في الدم الشرياني عن المعدل الطبيعي.",
    "من أهم أسبابها أمراض الرئة المزمنة مثل الربو و COPD، أمراض القلب، أو التسمم بغازات معينة.",
    "أعراضها تشمل ضيق التنفس، زُرقة الشفاه والأظافر، صداع، وتعب شديد.",
    "التشخيص يتم بواسطة قياس نسبة الأكسجين في الدم (SpO2) وتحليل الغازات الشريانية.",
  ]
},
{
  id: "p4",
  type: "term",
  title: "ضغط دم مرتفع (Hypertension)",
  excerpt: "زيادة ضغط الدم عن الطبيعي.",
  image: "https://i.pinimg.com/1200x/58/5f/07/585f07ca7d1ed41e41da7e35821502fc.jpg",
  body: [
    "ارتفاع ضغط الدم من أكثر الأمراض المزمنة شيوعًا في العالم.",
    "قد لا يشعر المريض بأي أعراض واضحة، لكنه يزيد من خطر السكتة الدماغية والنوبات القلبية.",
    "الوقاية تشمل ممارسة الرياضة بانتظام، تناول غذاء صحي، وتجنب التوتر.",
    "المتابعة الدورية لقياس الضغط مهمة للسيطرة على المرض.",
    
  ]
},
{
  id: "t10",
  type: "term",
  title: "Hypertrophy of Adenoid (تضخم اللحمية)",
  excerpt: "زيادة حجم النسيج اللمفاوي خلف الأنف.",
  image: "https://i.pinimg.com/1200x/5b/0d/7e/5b0d7e3c1a3c29e7dcae86c2fef8ef2f.jpg",
  body: [
    "يؤدي إلى انسداد الأنف وصعوبة التنفس.",
    "شائع عند الأطفال وقد يسبب الشخير.",
  ]
},
{
  id: "t11",
  type: "term",
  title: "Nasal Mucosa (الغشاء المخاطي للأنف)",
  excerpt: "بطانة الأنف الداخلية التي تفرز المخاط.",
  image: "https://i.pinimg.com/1200x/72/97/33/72973388e67e66e930d5a2a3dd4206cf.jpg",
  body: [
    "ترطب الهواء وتعمل كحاجز ضد الميكروبات.",
    "تتعرض للالتهاب في حالات الحساسية أو العدوى.",
  ]
},
{
  id: "t12",
  type: "term",
  title: "Neonatal (حديث الولادة)",
  excerpt: "الفترة الأولى بعد الولادة حتى 28 يومًا.",
  image: "https://i.pinimg.com/1200x/16/3c/1c/163c1c06de02879d8321c4a3ed2a59d2.jpg",
  body: [
    "تتميز بحاجة عالية للرعاية الطبية الدقيقة.",
    "يشمل متابعة الوزن، التنفس، والتغذية.",
  ]
},
{
  id: "t13",
  type: "term",
  title: "Herniation (الفتق)",
  excerpt: "خروج عضو أو نسيج من مكانه الطبيعي.",
  image: "https://i.pinimg.com/1200x/5c/fb/9a/5cfb9a826548d7a9fa60fd6f4d2eb25c.jpg",
  body: [
    "قد يحدث في البطن أو الدماغ (فتق دماغي).",
    "يتطلب علاج جراحي في بعض الحالات.",
  ]
},
{
  id: "t14",
  type: "term",
  title: "Oesophageal (المريئي)",
  excerpt: "مرتبط بالمريء، الأنبوب الناقل للطعام.",
  image: "https://i.pinimg.com/1200x/d3/7f/9d/d37f9df1db16bc7b61c1b2b7fbb6b6b3.jpg",
  body: [
    "يستخدم لوصف أمراض مثل الارتجاع المريئي.",
    "المريء جزء أساسي في الجهاز الهضمي العلوي.",
  ]
},
{
  id: "t15",
  type: "term",
  title: "Bronchial (الشعبي/القصبي)",
  excerpt: "مرتبط بالشُعب الهوائية.",
  image: "https://i.pinimg.com/1200x/cc/0d/54/cc0d54e87c4d1f5d90bca89ab41c37b6.jpg",
  body: [
    "يستخدم في أمراض مثل التهاب الشعب الهوائية.",
    "جزء رئيسي في نقل الهواء إلى الرئة.",
  ]
},
{
  id: "t16",
  type: "term",
  title: "Septic (إنتاني)",
  excerpt: "مرتبط بالعدوى الشديدة أو التسمم الدموي.",
  image: "https://i.pinimg.com/1200x/58/5d/41/585d41a5f388a7b72eb893ad2d621be3.jpg",
  body: [
    "قد يؤدي إلى صدمة إنتانية.",
    "يتطلب علاج سريع بالمضادات الحيوية والدعم الطبي.",
  ]
},
{
  id: "t17",
  type: "term",
  title: "RR (Respiratory Rate – معدل التنفس)",
  excerpt: "عدد مرات التنفس في الدقيقة.",
  image: "https://i.pinimg.com/1200x/22/8b/9f/228b9f0c78389d9a90c55e312c2a0e87.jpg",
  body: [
    "القيمة الطبيعية للبالغين: 12–20 نفس/دقيقة.",
    "مؤشر مهم في تقييم حالة المريض.",
  ]
},
{
  id: "t18",
  type: "term",
  title: "BP (Blood Pressure – ضغط الدم)",
  excerpt: "قوة دفع الدم على جدران الشرايين.",
  image: "https://i.pinimg.com/1200x/94/5d/47/945d477e4c5e6f8f43c1556e907eec70.jpg",
  body: [
    "يُقاس بالملليمتر زئبق (mmHg).",
    "الطبيعي: 120/80 mmHg تقريبًا.",
  ]
},
{
  id: "t19",
  type: "term",
  title: "PR (Pulse Rate – معدل النبض)",
  excerpt: "عدد ضربات القلب في الدقيقة.",
  image: "https://i.pinimg.com/1200x/5d/63/8d/5d638d2aaf5e54f17c70f26aee5cb8aa.jpg",
  body: [
    "المعدل الطبيعي: 60–100 نبضة/دقيقة.",
    "يمكن قياسه في المعصم أو العنق.",
  ]
},
{
  id: "t20",
  type: "term",
  title: "BT (Body Temperature – درجة حرارة الجسم)",
  excerpt: "الحرارة الداخلية للجسم.",
  image: "https://i.pinimg.com/1200x/94/1f/90/941f90d3f8134b7a4ff66e3f322a9d1c.jpg",
  body: [
    "القيمة الطبيعية: 36.5 – 37.5 °C.",
    "ارتفاعها يدل على الحمى، وانخفاضها على انخفاض الحرارة.",
  ]
},
{
  id: "t21",
  type: "term",
  title: "CO (Cardiac Output – النتاج القلبي)",
  excerpt: "كمية الدم التي يضخها القلب في الدقيقة.",
  image: "https://i.pinimg.com/1200x/d2/b7/51/d2b751e80a25959c157cc71cd5b39b7d.jpg",
  body: [
    "تساوي حجم الضربة × معدل ضربات القلب.",
    "مؤشر على كفاءة عمل القلب.",
  ]
},
{
  id: "t22",
  type: "term",
  title: "O2 in Blood (الأكسجين في الدم)",
  excerpt: "كمية الأكسجين الذائب في الدم.",
  image: "https://i.pinimg.com/1200x/e7/73/6a/e7736ac9f0d62cdd46960a92bb26fb59.jpg",
  body: [
    "يُقاس بتحليل الغازات الشريانية.",
    "النقص يؤدي إلى نقص الأكسجة (Hypoxemia).",
  ]
},
{
  id: "t23",
  type: "term",
  title: "CO2 in Blood (ثاني أكسيد الكربون في الدم)",
  excerpt: "كمية ثاني أكسيد الكربون في الدم.",
  image: "https://i.pinimg.com/1200x/b8/6d/47/b86d47a0d5c59e1b7f42cb11c5d4a92d.jpg",
  body: [
    "يُقاس بتحليل الغازات.",
    "ارتفاعه يدل على قصور تهوية أو مرض رئوي.",
  ]
},
{
  id: "t24",
  type: "term",
  title: "SpO2 (تشبع الأكسجين)",
  excerpt: "النسبة المئوية للهيموغلوبين المشبع بالأكسجين.",
  image: "https://i.pinimg.com/1200x/2f/11/9a/2f119a40b2e6472f97ddce5d8d76b6f5.jpg",
  body: [
    "القيمة الطبيعية: 95–100%.",
    "يُقاس بجهاز Pulse Oximeter.",
  ]
},
{
  id: "t25",
  type: "term",
  title: "ETCO2 (End Tidal CO2 – ثاني أكسيد الكربون الزفيري)",
  excerpt: "قياس CO2 في نهاية الزفير.",
  image: "https://i.pinimg.com/1200x/34/14/0c/34140cf4d67f90a48bdf0d473a9a5c16.jpg",
  body: [
    "المعدل الطبيعي: 35–45 mmHg.",
    "يستخدم لمراقبة التهوية أثناء التخدير.",
  ]
},
{
  id: "t26",
  type: "term",
  title: "Hypothermia (انخفاض الحرارة)",
  excerpt: "هبوط حرارة الجسم عن 35°C.",
  image: "https://i.pinimg.com/1200x/70/23/9b/70239b08fc144f2a9c7474a2a1f28f47.jpg",
  body: [
    "يسبب رجفان، ضعف وارتباك.",
    "قد يحدث أثناء العمليات أو التعرض للبرد.",
  ]
},
{
  id: "t27",
  type: "term",
  title: "Hyperthermia (ارتفاع الحرارة)",
  excerpt: "زيادة حرارة الجسم بشكل مفرط.",
  image: "https://i.pinimg.com/1200x/15/42/65/154265cc9f6e0466a48b9692d9b8b1e7.jpg",
  body: [
    "قد تكون بسبب عدوى، ضربة شمس، أو فرط الاستقلاب.",
    "تستدعي علاج لتجنب تلف الأعضاء.",
  ]
},
{
  id: "t28",
  type: "term",
  title: "Fluid Disturbances (اضطرابات السوائل)",
  excerpt: "خلل في توازن السوائل بالجسم.",
  image: "https://i.pinimg.com/1200x/83/26/71/832671250dc3d21390c6f2365e4f51c8.jpg",
  body: [
    "تشمل الجفاف أو فرط السوائل.",
    "تؤثر على الدورة الدموية والأعضاء الحيوية.",
  ]
},
{
  id: "t29",
  type: "term",
  title: "Electrolyte Disturbances (اضطرابات الأملاح)",
  excerpt: "خلل في مستويات الصوديوم، البوتاسيوم، الكالسيوم…",
  image: "https://i.pinimg.com/1200x/77/77/44/777744c5e234cba0da25a2163e3082a7.jpg",
  body: [
    "قد تسبب اضطراب نبض القلب أو تشنجات.",
    "تُقاس بفحوصات الدم وتحتاج تصحيح عاجل.",
  ]
},
{
  id: "t30",
  type: "term",
  title: "Nausea (الغثيان)",
  excerpt: "إحساس بالرغبة في التقيؤ.",
  image: "https://i.pinimg.com/1200x/41/3b/55/413b55a2edc29377f0de9e83f1f10e53.jpg",
  body: [
    "شائع بعد التخدير أو تناول بعض الأدوية.",
    "قد يرتبط بأمراض الجهاز الهضمي أو العصبي.",
  ]
},
{
  id: "t31",
  type: "term",
  title: "Airway Reflexes (منعكسات مجرى الهواء)",
  excerpt: "ردود فعل تحمي مجرى التنفس.",
  image: "https://i.pinimg.com/1200x/8c/6f/2b/8c6f2ba15a0db76b6571f6ac17b9a127.jpg",
  body: [
    "تشمل السعال والبلع لمنع دخول الأجسام الغريبة.",
    "قد تتأثر بالتخدير أو الأمراض العصبية.",
  ]
},
{
  id: "t3",
  type: "term",
  title: "Hyperglycemia (ارتفاع السكر بالدم)",
  excerpt: "ارتفاع مستوى الجلوكوز في الدم.",
  image: "https://i.pinimg.com/736x/6a/a0/0a/6aa00a40d8979ad22d2705344344cb6c.jpg",
  body: [
    "ارتفاع السكر في الدم يعني أن مستوى الجلوكوز في الدم أعلى من الطبيعي.",
    "مثال: قراءة سكر الدم 200 ملغ/ديسيلتر بعد الوجبة.",
    "شرح بسيط: الجسم لا يستخدم الجلوكوز بشكل فعّال بسبب نقص الإنسولين أو مقاومة الإنسولين.",
    "طريقة الفهم: تخيل أن الخلايا مثل المحركات، والجلوكوز هو الوقود، إذا لم يتم توصيله بشكل صحيح يظل في الدم.",

  ]
},
{
  id: "t4",
  type: "term",
  title: "Hypotension (انخفاض ضغط الدم)",
  excerpt: "انخفاض ضغط الدم عن المعدل الطبيعي.",
  image: "https://i.pinimg.com/1200x/bd/ae/fb/bdaefbc97787c63fb380baa655d311d7.jpg",
  body: [
    "انخفاض ضغط الدم يعني أن ضغط الدم في الشرايين أقل من الطبيعي.",
    "مثال: قراءة ضغط الدم 85/55 ملم زئبق.",
    "شرح بسيط: تدفق الدم إلى الأعضاء الحيوية قد يكون غير كافٍ.",
    "طريقة الفهم: تخيل خزان مياه ضغطه منخفض، لا يصل الماء لكل الأنابيب.",
    {
      type: "link",
      text: "راجع أيضًا: Tachycardia (تسرع ضربات القلب)",
      to: "t5"
    }
  ]
},
{
  id: "t5",
  type: "term",
  title: "Tachycardia (تسرع ضربات القلب)",
  excerpt: "زيادة معدل ضربات القلب عن الطبيعي.",
  image: "https://i.pinimg.com/736x/3f/11/c6/3f11c601f3d344bc8efa8c2d908729a6.jpg",
  body: [
    "تسرع ضربات القلب يعني أن القلب ينبض بسرعة أعلى من الطبيعي (>100 ضربة في الدقيقة للبالغين).",
    "مثال: شخص معدل ضرباته 120 نبضة/دقيقة أثناء الراحة.",
    "شرح بسيط: القلب يعمل أسرع لضخ الدم بسبب حاجة الجسم للأكسجين أو بسبب مشاكل قلبية.",
    "طريقة الفهم: تخيل مضخة ماء تعمل بسرعة عالية لتلبية الطلب الكبير فجأة.",
    {
      type: "link",
      text: "راجع أيضًا: Bradycardia (بطء ضربات القلب)",
      to: "t6"
    }
  ]
},
{
  id: "t6",
  type: "term",
  title: "Bradycardia (بطء ضربات القلب)",
  excerpt: "انخفاض معدل ضربات القلب عن الطبيعي.",
  image: "https://i.pinimg.com/736x/3b/08/1b/3b081b9d5963e0b62c3a64b7df923901.jpg",
  body: [
    "بطء ضربات القلب يعني أن القلب ينبض ببطء أقل من الطبيعي (<60 ضربة في الدقيقة للبالغين).",
    "مثال: شخص معدل ضرباته 50 نبضة/دقيقة أثناء الراحة.",
    "شرح بسيط: قد يكون بسبب لياقة عالية، أو مشاكل كهربائية في القلب.",
    "طريقة الفهم: تخيل مضخة ماء تعمل ببطء، قد لا يفي الطلب باحتياجات الجسم.",
    {
      type: "link",
      text: "راجع أيضًا: Hypertension (ارتفاع ضغط الدم)",
      to: "t1"
    }
  ]
},
{
  id: "d1",
  type: "device",
  title: "ECG (Electrocardiogram – تخطيط القلب)",
  excerpt: "جهاز يسجل النشاط الكهربائي للقلب.",
  image: "https://i.pinimg.com/1200x/12/9f/56/129f56f93a30e15e5f8c37df6c70e4dd.jpg",
  body: [
    "يُستخدم لتشخيص اضطرابات نظم القلب والجلطات.",
    "يظهر على شكل موجات كهربائية (P, QRS, T).",
  ]
},
{
  id: "d2",
  type: "device",
  title: "Defibrillator (جهاز الصدمات الكهربائية)",
  excerpt: "جهاز يستخدم لإعادة نبض القلب عند توقفه.",
  image: "https://i.pinimg.com/1200x/18/0a/f6/180af6b5a5298aa9a53f3213a99f9b7b.jpg",
  body: [
    "يطلق صدمة كهربائية لإعادة النظم القلبي الطبيعي.",
    "يُستخدم في الإنعاش القلبي الرئوي (CPR).",
  ]
},
{
  id: "d3",
  type: "device",
  title: "Vacuum (جهاز الشفط)",
  excerpt: "جهاز لسحب الإفرازات أو السوائل من مجرى التنفس والجروح.",
  image: "https://i.pinimg.com/1200x/1b/36/3a/1b363a4dfe6b5d83a5159b1a45dc1aa3.jpg",
  body: [
    "يُستخدم أثناء العمليات وأقسام الطوارئ.",
    "يساعد على إبقاء مجرى الهواء مفتوحًا.",
  ]
},
{
  id: "d4",
  type: "device",
  title: "Non-Invasive Blood Pressure Monitor (جهاز ضغط الدم غير الباضع)",
  excerpt: "جهاز يقيس ضغط الدم عبر الكفة الهوائية.",
  image: "https://i.pinimg.com/1200x/31/ae/0b/31ae0b86f15f274f62d9e44502e307ed.jpg",
  body: [
    "يستخدم في العيادات والمستشفيات لمراقبة المرضى.",
    "يعطي قراءة للضغط الانقباضي والانبساطي.",
  ]
},
{
  id: "d5",
  type: "device",
  title: "Ventilator (جهاز التنفس الصناعي)",
  excerpt: "جهاز يساعد أو يستبدل عملية التنفس.",
  image: "https://i.pinimg.com/1200x/33/cf/8d/33cf8dcd623dc671e177d6f5a40a70df.jpg",
  body: [
    "يُستخدم في غرف العمليات والعناية المركزة.",
    "يعمل بأنماط مختلفة مثل الضغط أو الحجم.",
  ]
},
{
  id: "d6",
  type: "device",
  title: "Infusion Pump (مضخة التسريب)",
  excerpt: "جهاز لضخ الأدوية أو السوائل بدقة.",
  image: "https://i.pinimg.com/1200x/aa/1f/9f/aa1f9f92a8b4db6c8e8391a8897e53db.jpg",
  body: [
    "يتيح التحكم بمعدل تدفق السوائل إلى المريض.",
    "مهم في العناية المركزة والعمليات.",
  ]
},
{
  id: "d7",
  type: "device",
  title: "Suction Apparatus (جهاز الشفط الطبي)",
  excerpt: "جهاز لسحب الإفرازات والدم من مجرى التنفس.",
  image: "https://i.pinimg.com/1200x/ab/50/3c/ab503c37019c13c8a40f22c8e41f01e1.jpg",
  body: [
    "يُستخدم أثناء التنبيب والعمليات.",
    "يحافظ على مجرى التنفس مفتوحًا.",
  ]
},
{
  id: "d8",
  type: "device",
  title: "Portable Crash Cart (عربة الطوارئ المتنقلة)",
  excerpt: "عربة مجهزة بالأدوية والأدوات الطارئة.",
  image: "https://i.pinimg.com/1200x/fd/c2/1a/fdc21a1c245bb6c5a7e65cb37c4740de.jpg",
  body: [
    "تحتوي على مزيل رجفان، أدوية إنعاش، وأدوات تنبيب.",
    "تُستخدم في أقسام الطوارئ والإنعاش.",
  ]
},
{
  id: "d9",
  type: "device",
  title: "Ambu Bag (كيس التنفس اليدوي)",
  excerpt: "جهاز يدوي لدعم التنفس في حالات الطوارئ.",
  image: "https://i.pinimg.com/1200x/d3/44/9d/d3449d7488c7755e6b8c1a65a6d1d6a2.jpg",
  body: [
    "يُستخدم قبل التوصيل بجهاز التنفس الصناعي.",
    "يتطلب ضغط يدوي لتوصيل الهواء للرئتين.",
  ]
},
{
  id: "d10",
  type: "device",
  title: "Medication Box (صندوق الأدوية)",
  excerpt: "صندوق يحتوي على أدوية طبية منظمة.",
  image: "https://i.pinimg.com/1200x/1a/41/12/1a4112d1f1f63a1a9476b592e4f0932c.jpg",
  body: [
    "يستخدم في الطوارئ لتسريع إعطاء الأدوية.",
    "يشمل أدوية الإنعاش والمضادات الحيوية.",
  ]
},
{
  id: "d11",
  type: "device",
  title: "Mobile X-ray Units (الأشعة السينية المتنقلة)",
  excerpt: "جهاز أشعة يُنقل إلى سرير المريض.",
  image: "https://i.pinimg.com/1200x/f6/3c/f9/f63cf91f3b5029b3517c26b91a02dc6f.jpg",
  body: [
    "يُستخدم في أقسام العناية والطوارئ.",
    "يساعد على تشخيص كسور الرئة والقلب دون نقل المريض.",
  ]
},
{
  id: "d12",
  type: "device",
  title: "Portable Clinical Laboratory Device (جهاز مختبر متنقل)",
  excerpt: "جهاز صغير لتحليل عينات الدم والبول.",
  image: "https://i.pinimg.com/1200x/2e/4d/98/2e4d98aa3e2b91b86a0b56a0ab9c011f.jpg",
  body: [
    "يوفر نتائج سريعة للفحوصات الأساسية.",
    "مفيد في الطوارئ والمناطق النائية.",
  ]
},
{
  id: "m1",
  type: "topic",
  title: "IPPV (Intermittent Positive Pressure Ventilation – نظام التهوية بالضغط الإيجابي)",
  excerpt: "طريقة تهوية ميكانيكية تستخدم أثناء التخدير والعناية المركزة.",
  image: "https://i.pinimg.com/1200x/0b/3f/0e/0b3f0e07ebd2f9e8f0f2e4d46a59d394.jpg",
  body: [
    "تُدخل الهواء إلى الرئتين باستخدام ضغط إيجابي.",
    "تساعد على الحفاظ على تبادل الغازات عند المرضى غير القادرين على التنفس التلقائي.",
  ]
},
{
  id: "m2",
  type: "topic",
  title: "Poly Vinyl Chloride (PVC – مادة أنبوب التخدير)",
  excerpt: "مادة بلاستيكية تُستخدم في صناعة أنابيب التنبيب.",
  image: "https://i.pinimg.com/1200x/91/85/d6/9185d6c176f59d67ab52f8c365d6f8bb.jpg",
  body: [
    "تتميز بالمرونة ومقاومة الكسر.",
    "شائعة في تصنيع أنابيب القصبة الهوائية.",
  ]
},
{
  id: "m3",
  type: "topic",
  title: "Protex (مطهّر/تعقيم)",
  excerpt: "محلول يُستخدم لتعقيم الأدوات الطبية.",
  image: "https://i.pinimg.com/1200x/7a/54/f8/7a54f8a62c0db2f2c05e44e59c7ee6d2.jpg",
  body: [
    "فعال ضد البكتيريا والفيروسات.",
    "يُستخدم في تنظيف الأدوات بين العمليات.",
  ]
},
{
  id: "m4",
  type: "topic",
  title: "ENT (Ear, Nose, Throat – اختصاص الأنف والأذن والحنجرة)",
  excerpt: "فرع طبي يعالج أمراض الأذن، الأنف، والحنجرة.",
  image: "https://i.pinimg.com/1200x/3e/65/ed/3e65ed4d1d0147b8c11f79b6e10c2b29.jpg",
  body: [
    "يشمل تشخيص وعلاج مشاكل السمع والبلع والتنفس.",
    "يتداخل مع جراحة الرأس والرقبة.",
  ]
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
/* Page: Culture (grid) */
function renderCulture(){
  const grid = $('#cultureGrid'); if(!grid) return;
  function apply(){
    const q = ($('#cultureSearch').value||'').trim().toLowerCase();
    const filter = $('#cultureFilter').value;
    let list = DB.culture.slice();
    if(filter) list = list.filter(p=> p.type === filter);
    if(q) list = list.filter(p=> (p.title + ' ' + p.excerpt).toLowerCase().includes(q));
    grid.innerHTML = list.map(formatCultureCard).join('') || '<div class="card"><div class="content">لا توجد مقالات</div></div>';
  }
  $('#cultureSearch').addEventListener('input', debounce(apply, 120));
  $('#cultureFilter').addEventListener('change', apply);
  apply();
}
/* Page: Culture Post (single page view) */
function renderCulturePostPage(){
  const postId = qsParam('postId');
  const wrap = $('#postContent');
  if(!wrap) return;
  if(!postId) { wrap.innerHTML = '<div class="content">لم يتم تحديد المقال.</div>'; return; }
  const post = DB.culture.find(p=>p.id===postId);
  if(!post){ wrap.innerHTML = '<div class="content">المقال غير موجود.</div>'; return; }
  wrap.innerHTML = `
    <div class="article-hero">
      <h1>${escapeHtml(post.title)}</h1>
      <div class="article-meta"><span>${escapeHtml(post.type)}</span><span class="muted">قابل للقراءة</span></div>
    </div>
    <div class="article-body">
      ${escapeHtml(post.body).replace(/\n/g,'<br><br>')}
    </div>
    <div style="margin-top:16px"><a class="link" href="medical-culture.html">← العودة إلى المقالات</a></div>
  `;
}
document.addEventListener('DOMContentLoaded', ()=>{
  const page = document.body.getAttribute('data-page');
  if(page === 'home') renderHome();
  else if(page === 'departments') renderDepartments();
  else if(page === 'courses') renderCourses();
  else if(page === 'course-details') renderCourseDetails();
  else if(page === 'notes') renderNotes();
  else if(page === 'exams') renderExams();
  else if(page === 'culture') renderCulture();
  else if(page === 'culture-post') renderCulturePostPage();
});
const cultureModal = document.getElementById("cultureModal");
const closeCultureModal = document.getElementById("closeCultureModal");
const cultureModalOverlay = document.getElementById("cultureModalOverlay");
function openCultureModal(title, body, img) {
  document.getElementById("cultureModalTitle").textContent = title;
  document.getElementById("cultureModalBody").textContent = body;
  document.getElementById("cultureImage").src = img;
  cultureModal.classList.add("show");
}
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
    if (typeof item === "object" && item.type === "link") {
      return `<p><a href="#" onclick="showPost('${item.to}'); return false;">${escapeHtml(item.text)}</a></p>`;
    } 
    else if (typeof item === "string") {
      return `<p>${escapeHtml(item)}</p>`;
    }
  }).join('');
}
function showPost(postId) {
  const post = DB.culture.find(p => p.id === postId);
  if (!post) return;
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
});
