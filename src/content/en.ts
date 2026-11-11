import type { SiteContent } from './site';

const en: SiteContent = {
  meta: {
    title: 'MedOneX — Medical Tourism Concierge in Kuala Lumpur, Malaysia',
    description:
      'MedOneX coordinates your treatment at accredited partner hospitals in Kuala Lumpur — Gleneagles, Sunway Medical Centre, Pantai, KPJ Ampang and more. Free coordination in English, Bahasa Indonesia and Mandarin.',
  },
  nav: {
    home: 'Home',
    hospitals: 'Partner Hospitals',
    treatments: 'Treatments',
    journey: 'Your Journey',
    about: 'About Us',
    contact: 'Contact',
  },
  common: {
    consult: 'Request a free consultation',
    consultShort: 'Free consultation',
    freeForPatients: 'Free for patients',
    viewProfile: 'View hospital profile',
    viewAllHospitals: 'View all partner hospitals',
    allSpecialties: 'All specialties',
    backToHospitals: 'All partner hospitals',
    learnMore: 'Learn more',
    replyTime: 'We reply within one working hour',
    languages: 'English · Bahasa Indonesia · 中文',
    indicative: 'Indicative only — final costs are quoted by the hospital',
    menu: 'Open menu',
    close: 'Close',
    language: 'Language',
    skip: 'Skip to main content',
    atAGlance: 'At a glance',
    overview: 'Overview',
    whyThisHospital: 'Why patients choose this hospital',
    specialties: 'Centres of excellence',
    facilities: 'Facilities & services',
    accreditations: 'Accreditations',
    bestFor: 'Best suited for',
    availableAt: 'Available at',
    beds: 'Licensed beds',
    established: 'Established',
    airport: 'From KLIA',
    location: 'Location',
    askAvailability: 'Check doctor availability',
    nextHospital: 'Next hospital',
    notBuilt: 'This section is being prepared.',
  },
  home: {
    eyebrow: 'Medical tourism concierge · Kuala Lumpur',
    titleLead: 'Treatment in Malaysia, arranged with',
    titleAccent: 'care and clarity',
    lede:
      'We connect international patients with accredited private hospitals in Kuala Lumpur — from specialist selection and appointment booking to airport pickup and a coordinator beside you throughout your stay.',
    primaryCta: 'Request a free consultation',
    secondaryCta: 'Explore partner hospitals',
    proofLabel: 'Coordinated this month',
    proofValue: '120+ patient journeys',
    proofNote: 'Across six partner hospitals in Klang Valley',
    chips: ['No coordination fee for patients', 'Medical records reviewed before you fly', 'English, Indonesian and Mandarin support'],
    whyEyebrow: 'Why Malaysia',
    whyTitle: 'Internationally accredited care, within a short flight',
    whyLede:
      'Malaysia treats over a million international patients each year. Kuala Lumpur combines JCI-accredited hospitals, UK- and Australian-trained specialists and a cost level well below Singapore — with direct flights from Jakarta, Surabaya, Medan, Pekanbaru and Singapore.',
    pillars: [
      {
        title: 'Accredited, audited hospitals',
        body: 'Our partners hold JCI and MSQH accreditation, with international patient centres accustomed to records in English, Bahasa and Mandarin.',
      },
      {
        title: 'Specialists trained abroad',
        body: 'Many consultants completed fellowships in the UK, Australia or the United States and publish in international journals.',
      },
      {
        title: 'Typically 30–60% below Singapore',
        body: 'Comparable procedures often cost a fraction of Singapore or Australian private rates, with transparent itemised quotes before you commit.',
      },
      {
        title: 'One to two hours from home',
        body: 'Direct flights land you in Kuala Lumpur the same morning, with visa-free entry for Indonesian and most ASEAN passports.',
      },
    ],
    hospitalsEyebrow: 'Partner hospitals',
    hospitalsTitle: 'Six hospitals we know, floor by floor',
    hospitalsLede:
      'We do not list every hospital in Malaysia. We work closely with a small group of institutions so we can answer specific questions about consultants, wards and waiting times.',
    hospitalsAction: 'Compare all hospitals',
    treatmentsEyebrow: 'Treatments',
    treatmentsTitle: 'Care coordinated around your diagnosis',
    treatmentsLede:
      'Send us your medical reports and we will identify the right specialist and the hospital where they practise — before you book a flight.',
    treatmentsAction: 'See all treatments',
    processEyebrow: 'How it works',
    processTitle: 'Four steps, one coordinator',
    processLede: 'From first message to follow-up after you return home, the same person stays with your case.',
    processAction: 'Read the full journey',
    process: [
      {
        step: '01',
        title: 'Share your reports',
        body: 'Send your diagnosis, imaging and current medication by WhatsApp or through our form. A coordinator reviews them with a nurse.',
      },
      {
        step: '02',
        title: 'Receive a care plan',
        body: 'Within two working days you get a shortlist of specialists, an indicative cost range and a realistic treatment timeline.',
      },
      {
        step: '03',
        title: 'We arrange the trip',
        body: 'Appointments, hospital deposit guidance, accommodation near the hospital, airport transfer and a visa letter if you need one.',
      },
      {
        step: '04',
        title: 'Arrive with support',
        body: 'We meet you at the airport, accompany the first consultation and stay reachable for the length of your treatment.',
      },
    ],
    standardsEyebrow: 'Our commitment',
    standardsTitle: 'What “concierge” actually means here',
    standardsLede:
      'We are not a booking website. Every case is handled by a named coordinator who is accountable for the details.',
    standards: [
      { title: 'A named coordinator', body: 'You receive one direct phone number, not a rotating call centre.' },
      { title: 'Written cost estimates', body: 'Hospitals issue itemised quotations; we explain every line before you decide.' },
      { title: 'Records handled privately', body: 'Medical documents are shared only with the hospital you choose, then deleted on request.' },
    ],
    ctaEyebrow: 'Start here',
    ctaTitle: 'Tell us what you are facing',
    ctaLede: 'A first conversation costs nothing and commits you to nothing. We will tell you honestly if treatment at home is the better option.',
    ctaButton: 'Talk to a coordinator',
    ctaPoints: ['Reply within one working hour', 'No coordination fee for patients', 'Your reports stay confidential'],
  },
  hospitalsPage: {
    eyebrow: 'Partner hospitals',
    title: 'Hospitals we work with in Kuala Lumpur',
    lede:
      'Each hospital below is visited by our team and used regularly by our patients. Profiles cover accreditation, centres of excellence and practical travel details.',
    filterAll: 'All locations',
    filterCity: 'Filter by city',
    countOne: 'hospital',
    countMany: 'hospitals',
    emptyTitle: 'No hospitals in this location yet',
    emptyBody: 'We coordinate treatment across the Klang Valley. Tell us your destination preference and we will suggest the closest suitable option.',
    reset: 'Show all hospitals',
    noteTitle: 'How we choose partners',
    note:
      'We partner only with hospitals that hold current JCI or MSQH accreditation, maintain an international patient centre and allow our coordinators to accompany patients to consultations.',
  },
  hospitalDetail: {
    back: 'All partner hospitals',
    lede: 'A partner hospital of MedOneX, coordinated end to end by our Kuala Lumpur team.',
    profileTitle: 'About the hospital',
    highlightsTitle: 'What matters for international patients',
    specialtiesTitle: 'Centres of excellence',
    facilitiesTitle: 'Facilities and support',
    accreditationTitle: 'Accreditation and standards',
    ctaTitle: 'Considering this hospital?',
    ctaBody: 'Send us your diagnosis and we will confirm whether a suitable specialist is available, along with an indicative cost range.',
    ctaButton: 'Check specialist availability',
    siblingTitle: 'Other partner hospitals',
  },
  treatmentsPage: {
    eyebrow: 'Treatments',
    title: 'Specialties we coordinate most often',
    lede:
      'The list below reflects the cases our patients bring to us most frequently. If your condition is not shown, send it anyway — we have access to specialists across every major discipline.',
    ctaTitle: 'Not sure which specialist you need?',
    ctaBody: 'Describe your symptoms or upload your report. We will tell you which discipline to start with, free of charge.',
    ctaButton: 'Ask a coordinator',
    note: 'Medical suitability is always determined by the treating hospital. MedOneX does not provide medical advice or diagnosis.',
  },
  journey: {
    eyebrow: 'Your journey',
    title: 'From first message to follow-up at home',
    lede:
      'Most patients complete a full treatment trip in seven to fourteen days. Here is exactly what happens, who is responsible, and what it costs you.',
    steps: [
      {
        title: 'Initial contact and triage',
        body: 'You message us on WhatsApp or submit the enquiry form. A coordinator — not a bot — asks for your diagnosis, recent reports, current medication and any specialist you have already seen. A registered nurse reviews the summary before anything is sent onward.',
        meta: 'Same working day',
      },
      {
        title: 'Specialist matching and quotation',
        body: 'We shortlist two or three consultants at partner hospitals whose subspecialty matches your case, and request an availability and cost indication. You receive a written comparison covering surgeon, hospital, estimated length of stay and cost range.',
        meta: '1–2 working days',
      },
      {
        title: 'Appointment and travel arrangement',
        body: 'Once you choose, we hold the appointment, explain the hospital deposit, recommend accommodation within walking distance and arrange an airport transfer. If your passport requires a visa, the hospital issues an invitation letter for the medical visa.',
        meta: '3–7 days before travel',
      },
      {
        title: 'Arrival and first consultation',
        body: 'We meet you at KLIA or Subang arrivals, take you to your accommodation or directly to the hospital, and accompany the first consultation as an interpreter and note-taker. You leave with a written plan and a firm quotation.',
        meta: 'Day 1 in Kuala Lumpur',
      },
      {
        title: 'Treatment and daily support',
        body: 'During admission your coordinator checks in daily, helps with consent forms and billing questions, and keeps your family abroad updated. We also arrange meals, SIM cards and transport for relatives.',
        meta: 'Throughout admission',
      },
      {
        title: 'Discharge and follow-up',
        body: 'Before you fly we collect discharge summaries, prescriptions and imaging on USB, arrange a follow-up appointment with your doctor at home, and remain reachable for the first thirty days after you return.',
        meta: 'Discharge and beyond',
      },
    ],
    inclusionsEyebrow: 'What is included',
    inclusionsTitle: 'Our coordination is free for patients',
    inclusionsLede:
      'Hospitals pay us a facilitation fee for international patient coordination. You pay the hospital directly for medical care, and we tell you in advance what else to budget for.',
    included: [
      'Review of your medical reports by a registered nurse',
      'Written specialist and hospital comparison',
      'Appointment booking and deposit guidance',
      'Airport pickup and first-day accompaniment',
      'Interpretation during consultations and admission',
      'Daily check-ins and family updates',
      'Accommodation and transport recommendations near the hospital',
      'Discharge document collection and follow-up scheduling',
    ],
    excludedTitle: 'Paid directly by you',
    excluded: [
      'Hospital bills, consultant fees and medication',
      'Flights, travel insurance and visa fees',
      'Hotel or serviced apartment costs',
      'Additional procedures recommended during treatment',
    ],
    costEyebrow: 'Budgeting',
    costTitle: 'What a treatment trip typically costs',
    costBody: [
      'Hospital charges depend on the procedure, the consultant, the ward class and the length of stay. Once we have your reports, we request an itemised estimate from two hospitals so you can compare like for like.',
      'As a planning reference, patients travelling from Indonesia usually budget for the medical package, seven to ten nights of accommodation, return flights for one companion and roughly MYR 500–1,500 in local transport and meals.',
      'Nothing is payable to MedOneX. Deposits are paid directly to the hospital, usually at appointment confirmation, and the balance on discharge.',
    ],
    faqEyebrow: 'Questions',
    faqTitle: 'What patients ask us first',
    faq: [
      {
        q: 'Do I pay MedOneX anything?',
        a: 'No. Our coordination is funded by a facilitation fee from the hospital. You pay medical costs directly to the hospital and travel costs to your own providers.',
      },
      {
        q: 'How long should I plan to stay in Kuala Lumpur?',
        a: 'For a consultation and minor procedure, five to seven days is usual. Major surgery with recovery typically needs ten to fourteen days. We confirm the expected length of stay before you book flights.',
      },
      {
        q: 'Can someone travel with me?',
        a: 'Yes, and we recommend it for surgical cases. We help with a companion’s accommodation, airport transfer and hospital visitor pass.',
      },
      {
        q: 'Will the doctors speak my language?',
        a: 'Most consultants at our partner hospitals consult in English, and many speak Bahasa Indonesia or Mandarin. When needed, a MedOneX coordinator interprets at no charge.',
      },
      {
        q: 'What if my treatment is not available in Malaysia?',
        a: 'We will say so. Where a case needs a service our partners do not offer, we tell you before you travel and suggest alternatives, including treatment closer to home.',
      },
      {
        q: 'Can I use my insurance?',
        a: 'Some international and corporate policies reimburse treatment abroad. We help you obtain the itemised quotation and medical report your insurer requires, though approval remains with them.',
      },
    ],
    ctaTitle: 'Ready to start? Send your reports.',
    ctaBody: 'A coordinator will review them and reply with a shortlist and an indicative cost range — free of charge.',
  },
  about: {
    eyebrow: 'About MedOneX',
    title: 'A small team that treats every case as a person, not a booking',
    lede:
      'MedOneX was founded in Kuala Lumpur to remove the uncertainty of seeking treatment abroad: unclear prices, unfamiliar hospitals, and nobody to call when something changes.',
    storyTitle: 'Why we exist',
    story: [
      'Our founders spent years watching families from Indonesia arrive in Kuala Lumpur with a folder of reports, a hotel booking and no idea which consultant to see. The hospitals were excellent; the coordination was not.',
      'MedOneX was built to close that gap. We are a facilitation service, not a hospital and not an agency that sells packages. We review your case, match it to a specialist, and stay with you through admission and follow-up.',
      'We work with six partner hospitals in the Klang Valley — enough to offer genuine choice, few enough that we know the consultants, wards and international patient desks personally.',
    ],
    stats: [
      { value: '2019', label: 'Founded in Kuala Lumpur' },
      { value: '6', label: 'Partner hospitals' },
      { value: '1,400+', label: 'Patient journeys coordinated' },
      { value: '3', label: 'Working languages' },
    ],
    principlesTitle: 'How we work',
    principles: [
      {
        title: 'We say no when it is right',
        body: 'If your condition is better treated at home, or the timing is wrong, we will tell you plainly — even though it costs us the case.',
      },
      {
        title: 'One coordinator, start to finish',
        body: 'You are not routed through a call centre. The person who answers your first message handles your discharge paperwork.',
      },
      {
        title: 'Transparent numbers',
        body: 'Every quotation we pass on comes from the hospital in writing. We never mark up medical costs or add a patient-side commission.',
      },
      {
        title: 'Confidential by default',
        body: 'Reports are shared only with the hospital you approve, stored securely, and deleted when your case closes if you ask us to.',
      },
    ],
    languagesTitle: 'Support in your language',
    languagesBody:
      'Coordination is available in three languages, with written summaries in the language you prefer.',
    languagesList: [
      { label: 'English', note: 'Hospital correspondence, quotations and discharge documents are issued in English by default.' },
      { label: 'Bahasa Indonesia', note: 'Our Indonesian-speaking coordinators handle the majority of our patient journeys.' },
      { label: '中文 (Mandarin)', note: 'Mandarin-speaking coordinators support consultations, consent forms and family updates.' },
    ],
    disclaimerTitle: 'Important note',
    disclaimer:
      'MedOneX is a medical facilitation and coordination service. We are not a medical provider and do not diagnose conditions, recommend specific treatments or guarantee outcomes. All clinical decisions are made by the treating hospital and its consultants. Cost ranges shown on this site are indicative and are confirmed only in a written hospital quotation.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Tell us about your case',
    lede:
      'Send the form below and a coordinator will reply within one working hour. If you prefer to talk, WhatsApp is usually the fastest route.',
    formTitle: 'Request a free consultation',
    formNote: 'We only ask what a coordinator needs to review your case. No payment details, ever.',
    fields: {
      name: 'Full name',
      namePlaceholder: 'As written in your passport',
      contact: 'WhatsApp number or email',
      contactPlaceholder: '+62 812 3456 7890 or you@email.com',
      country: 'Country of residence',
      countryPlaceholder: 'Indonesia',
      treatment: 'Treatment needed',
      treatmentPlaceholder: 'Choose a specialty',
      hospital: 'Preferred hospital',
      hospitalAny: 'No preference — recommend one for me',
      message: 'Briefly describe your condition',
      messagePlaceholder: 'Diagnosis, symptoms, current medication and any report you already have.',
      consent: 'I agree that MedOneX may contact me and share my summary with the hospital I choose.',
    },
    errors: {
      required: 'This field is required.',
      contact: 'Enter a valid WhatsApp number or email address.',
      consent: 'Please confirm so we can reply to you.',
    },
    submit: 'Send my request',
    submitting: 'Preparing your message…',
    successTitle: 'Your request is ready to send',
    successBody:
      'Your details have been assembled into a message. Open WhatsApp to send it to a coordinator — nothing is shared until you press send there.',
    openWhatsApp: 'Open WhatsApp and send',
    copyMessage: 'Copy the message instead',
    copied: 'Message copied',
    again: 'Edit my request',
    alternative: 'Prefer email? Write to rachele@med-onex.co',
    channelsTitle: 'Other ways to reach us',
    hoursTitle: 'Coordinator hours',
    hours: ['Monday to Friday, 09:00–19:00 (MYT)', 'Saturday, 09:00–15:00 (MYT)', 'Urgent inpatient cases: message anytime'],
    nextTitle: 'What happens next',
    next: [
      'A coordinator reads your message and may ask one or two clarifying questions.',
      'We review your reports with a registered nurse.',
      'You receive a shortlist of specialists, an indicative cost range and a timeline.',
    ],
    privacyNote: 'Your details are used only to answer this enquiry. We never sell or share them with third parties.',
  },
  footer: {
    tagline: 'Medical coordination for international patients in Kuala Lumpur, Malaysia.',
    explore: 'Explore',
    hospitals: 'Partner hospitals',
    contactTitle: 'Contact',
    legal: 'Legal',
    rights: 'All rights reserved.',
    disclaimer:
      'MedOneX is a medical facilitation service. We do not provide medical advice, diagnosis or treatment. Clinical decisions rest with the treating hospital.',
  },
  notFound: {
    title: 'That page has moved',
    body: 'The page you are looking for is not here. Start from the homepage or browse our partner hospitals.',
    cta: 'Back to homepage',
  },
  hospitals: {
    gleneagles: {
      summary:
        'A long-established private hospital on Jalan Ampang with one of the strongest cardiac and cancer programmes in the country.',
      profile:
        'Opened in 1996 and part of the IHH Healthcare network, Gleneagles Kuala Lumpur sits on Jalan Ampang a short drive from the city centre. The hospital is known for complex cardiac surgery, oncology and neurosurgery, and runs a dedicated international patient centre with Arabic-, Mandarin- and Bahasa-speaking staff. Its consultants frequently hold UK and Australian fellowships.',
      bestFor: 'Cardiac surgery, oncology, neurosurgery and complex diagnostics',
      highlights: [
        'Dedicated international patient centre with multilingual staff',
        'Cardiac catheterisation and open-heart surgery in-house',
        'Comprehensive cancer centre with linear accelerator radiotherapy',
        'Consultants holding UK, Australian and US fellowships',
      ],
      specialties: ['Cardiology & cardiothoracic surgery', 'Oncology & radiotherapy', 'Neurology & neurosurgery', 'Orthopaedics', 'Gastroenterology'],
      facilities: [
        '24-hour accident and emergency',
        'Intensive care and high-dependency units',
        'MRI, CT and PET-CT imaging',
        'International patient lounge and interpreter service',
        'Pharmacy, physiotherapy and rehabilitation',
      ],
      accreditations: ['JCI accredited', 'MSQH accredited', 'ISO 9001 quality management'],
    },
    sunway: {
      summary:
        'One of the largest private hospitals in Malaysia, with a purpose-built cancer centre and a strong research culture.',
      profile:
        'Sunway Medical Centre in Bandar Sunway is a tertiary private hospital with more than 700 beds and a broad subspecialty range, from bone marrow transplant to paediatric cardiac surgery. Its Cancer Centre and Clinical Research Centre attract patients from across the region, and the hospital is accustomed to high-volume international work.',
      bestFor: 'Oncology, bone marrow transplant, paediatric specialities and complex surgery',
      highlights: [
        'One of the largest private tertiary hospitals in Malaysia',
        'Purpose-built cancer centre with radiotherapy and chemotherapy',
        'Bone marrow transplant and advanced haematology services',
        'On-site hotel and serviced suites for families',
      ],
      specialties: ['Oncology & haematology', 'Cardiology', 'Paediatrics', 'Neurosciences', 'Orthopaedics & sports medicine'],
      facilities: [
        '24-hour emergency department',
        'Radiotherapy bunkers and chemotherapy day care',
        'Robotic and minimally invasive surgery theatres',
        'Connected hotel and family accommodation',
        'International patient services desk',
      ],
      accreditations: ['JCI accredited', 'MSQH accredited', 'ISO 15189 laboratory accreditation'],
    },
    pantai: {
      summary:
        'The original Pantai hospital in Bangsar: compact, well connected and familiar to Indonesian patients for decades.',
      profile:
        'Pantai Hospital Kuala Lumpur opened in 1974 and is the flagship of the Pantai group within IHH Healthcare. Located in Bangsar, it is a familiar name to patients from Sumatra and Java, with a long-standing Indonesian patient base. The hospital is particularly strong in cardiology, orthopaedics and obstetrics, and its size keeps the experience personal.',
      bestFor: 'Cardiology, orthopaedics, obstetrics and general surgery',
      highlights: [
        'Five decades of service to international patients',
        'Established Indonesian and Mandarin patient communities',
        'Cardiac, orthopaedic and women’s health centres',
        'Central Bangsar location close to hotels and transport',
      ],
      specialties: ['Cardiology', 'Orthopaedics', 'Obstetrics & gynaecology', 'General surgery', 'Health screening'],
      facilities: [
        '24-hour accident and emergency',
        'Cardiac catheterisation laboratory',
        'Maternity and neonatal care',
        'Health screening centre',
        'International patient assistance desk',
      ],
      accreditations: ['JCI accredited', 'MSQH accredited', 'Baby-friendly hospital initiative'],
    },
    'kpj-ampang': {
      summary:
        'A well-regarded specialist hospital in Ampang with strong cardiology, oncology and health screening services.',
      profile:
        'KPJ Ampang Puteri Specialist Hospital, part of the KPJ Healthcare group, is a 250-bed hospital serving the eastern corridor of Kuala Lumpur and Selangor. It is known for accessible specialist care, a busy cardiology unit and a health screening centre popular with patients who want a thorough check-up within a short trip.',
      bestFor: 'Cardiology, health screening, oncology and day surgery',
      highlights: [
        'Broad specialist coverage close to the Ampang embassy district',
        'Cardiology and cardiac rehabilitation services',
        'Efficient health screening packages for short trips',
        'Part of Malaysia’s largest private hospital network',
      ],
      specialties: ['Cardiology', 'Oncology', 'General surgery', 'Orthopaedics', 'Health screening'],
      facilities: [
        '24-hour emergency services',
        'Cardiac rehabilitation unit',
        'Day surgery centre',
        'Health screening and wellness centre',
        'Visitor accommodation assistance',
      ],
      accreditations: ['MSQH accredited', 'ISO 9001 quality management'],
    },
    'columbia-setapak': {
      summary:
        'A modern, mid-sized hospital in Setapak offering efficient specialist care and health screening at a moderate cost level.',
      profile:
        'Columbia Asia Hospital Setapak, now part of Columbia Asia’s Malaysian network, is a compact modern hospital serving north Kuala Lumpur. Its smaller scale means short waiting times and a calm environment, with a solid outpatient specialist clinic and a well-used health screening service — a practical choice for straightforward procedures and diagnostics.',
      bestFor: 'Health screening, day surgery, orthopaedics and internal medicine',
      highlights: [
        'Short waiting times and a calm, low-traffic setting',
        'Modern diagnostic imaging on site',
        'Efficient day surgery and endoscopy services',
        'Moderate cost level for straightforward cases',
      ],
      specialties: ['Internal medicine', 'Orthopaedics', 'General surgery', 'Health screening', 'ENT'],
      facilities: [
        'Outpatient specialist clinics',
        'Day surgery and endoscopy suites',
        'CT, MRI and ultrasound imaging',
        'Health screening packages',
        'Pharmacy and physiotherapy',
      ],
      accreditations: ['MSQH accredited', 'ISO 9001 quality management'],
    },
    'subang-jaya': {
      summary:
        'A large tertiary hospital in Selangor with a broad range of subspecialties and a strong reputation in cancer care.',
      profile:
        'Subang Jaya Medical Centre is a 400-bed tertiary private hospital in Selangor, part of the Ramsay Sime Darby network. It combines a broad consultant panel with a well-regarded cancer centre and a dedicated international patient unit, and is often a good option for patients whose accommodation is closer to the airport than the city centre.',
      bestFor: 'Oncology, gastroenterology, neurology and complex internal medicine',
      highlights: [
        'Large consultant panel across most subspecialties',
        'Cancer centre with radiotherapy and day chemotherapy',
        'Closer to KLIA than the city-centre hospitals',
        'Established international patient unit',
      ],
      specialties: ['Oncology', 'Gastroenterology', 'Neurology', 'Cardiology', 'Orthopaedics'],
      facilities: [
        '24-hour emergency department',
        'Cancer centre and radiotherapy unit',
        'Advanced endoscopy and imaging',
        'International patient services',
        'Family accommodation nearby',
      ],
      accreditations: ['JCI accredited', 'MSQH accredited', 'ISO 15189 laboratory accreditation'],
    },
  },
  treatments: {
    cardiology: {
      name: 'Cardiology & cardiac surgery',
      summary: 'Angiography, stenting, bypass surgery and arrhythmia care.',
      detail:
        'Chest pain, valve disease and rhythm problems are among the most common reasons patients contact us. Partner hospitals offer same-week angiography, coronary stenting and bypass surgery, with intensive care units staffed around the clock.',
      stay: '7–12 days including angiography or surgery',
    },
    oncology: {
      name: 'Oncology',
      summary: 'Diagnosis, chemotherapy, radiotherapy and surgical oncology.',
      detail:
        'We help patients obtain a second opinion, confirm staging and start treatment quickly. Partner hospitals run multidisciplinary tumour boards and offer radiotherapy, chemotherapy and targeted therapy under one roof.',
      stay: '10–21 days depending on the protocol',
    },
    orthopaedics: {
      name: 'Orthopaedics',
      summary: 'Joint replacement, spine surgery and sports injuries.',
      detail:
        'Knee and hip replacement, arthroscopy and spinal decompression are performed routinely, with modern implants and structured rehabilitation programmes starting the day after surgery.',
      stay: '8–14 days including rehabilitation',
    },
    neurology: {
      name: 'Neurology & neurosurgery',
      summary: 'Stroke care, epilepsy, brain and spine surgery.',
      detail:
        'Partner hospitals provide 24-hour stroke pathways, advanced neuroimaging and neurosurgical teams experienced in tumour, aneurysm and spinal procedures.',
      stay: '8–16 days depending on procedure',
    },
    gastroenterology: {
      name: 'Gastroenterology',
      summary: 'Endoscopy, colonoscopy, liver and digestive care.',
      detail:
        'Diagnostic and therapeutic endoscopy, colonoscopy screening and hepatology services are available, often completed within a single short trip.',
      stay: '4–7 days',
    },
    fertility: {
      name: 'Fertility & IVF',
      summary: 'IVF, IUI, fertility assessment and reproductive surgery.',
      detail:
        'Fertility centres at our partner hospitals offer full IVF cycles, embryo freezing and fertility preservation, with protocols coordinated around your cycle at home.',
      stay: '10–18 days per cycle, split across two visits',
    },
    'health-screening': {
      name: 'Health screening',
      summary: 'Comprehensive executive check-ups in one to two days.',
      detail:
        'A structured screening — bloodwork, imaging, cardiac assessment and specialist review — completed in one or two mornings, with results explained before you fly home.',
      stay: '2–3 days',
    },
    ophthalmology: {
      name: 'Ophthalmology',
      summary: 'Cataract surgery, retina and glaucoma care.',
      detail:
        'Phacoemulsification cataract surgery with premium lens options, retinal laser and glaucoma management, typically completed with a single follow-up visit.',
      stay: '4–6 days',
    },
    'womens-health': {
      name: 'Women’s health',
      summary: 'Gynaecology, maternity and minimally invasive surgery.',
      detail:
        'Fibroid and endometriosis surgery, laparoscopic gynaecological procedures and full maternity services, with female consultants available on request.',
      stay: '5–10 days',
    },
  },
};

export default en;
