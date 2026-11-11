/**
 * Structural, language-independent site data.
 * Every locale supplies copy for the same ids so pages never branch on language.
 */

export type HospitalSlug =
  | 'gleneagles'
  | 'sunway'
  | 'pantai'
  | 'kpj-ampang'
  | 'columbia-setapak'
  | 'subang-jaya';

export type TreatmentSlug =
  | 'cardiology'
  | 'oncology'
  | 'orthopaedics'
  | 'neurology'
  | 'gastroenterology'
  | 'fertility'
  | 'health-screening'
  | 'ophthalmology'
  | 'womens-health';

export type HospitalMeta = {
  slug: HospitalSlug;
  name: string;
  area: string;
  city: string;
  established: string;
  beds: string;
  airport: string;
  imageKey: 'hospitalGleneagles' | 'hospitalSunway' | 'hospitalPantai' | 'hospitalKpj' | 'hospitalColumbia' | 'hospitalSubang';
  accent: string;
};

export const hospitalsMeta: HospitalMeta[] = [
  {
    slug: 'gleneagles',
    name: 'Gleneagles Hospital Kuala Lumpur',
    area: 'Jalan Ampang',
    city: 'Kuala Lumpur',
    established: '1996',
    beds: '≈ 330',
    airport: '≈ 60 min from KLIA',
    imageKey: 'hospitalGleneagles',
    accent: '#0E6B5C',
  },
  {
    slug: 'sunway',
    name: 'Sunway Medical Centre',
    area: 'Bandar Sunway',
    city: 'Greater Kuala Lumpur',
    established: '1999',
    beds: '700+',
    airport: '≈ 45 min from KLIA',
    imageKey: 'hospitalSunway',
    accent: '#0B5F73',
  },
  {
    slug: 'pantai',
    name: 'Pantai Hospital Kuala Lumpur',
    area: 'Bangsar',
    city: 'Kuala Lumpur',
    established: '1974',
    beds: '≈ 250',
    airport: '≈ 55 min from KLIA',
    imageKey: 'hospitalPantai',
    accent: '#8A5A2B',
  },
  {
    slug: 'kpj-ampang',
    name: 'KPJ Ampang Puteri Specialist Hospital',
    area: 'Ampang',
    city: 'Selangor / Kuala Lumpur border',
    established: '1995',
    beds: '≈ 250',
    airport: '≈ 65 min from KLIA',
    imageKey: 'hospitalKpj',
    accent: '#2F5D8A',
  },
  {
    slug: 'columbia-setapak',
    name: 'Columbia Asia Hospital, Setapak',
    area: 'Setapak',
    city: 'Kuala Lumpur',
    established: '2010',
    beds: '≈ 120',
    airport: '≈ 70 min from KLIA',
    imageKey: 'hospitalColumbia',
    accent: '#0E6B5C',
  },
  {
    slug: 'subang-jaya',
    name: 'Subang Jaya Medical Centre',
    area: 'Subang Jaya',
    city: 'Selangor',
    established: '1985',
    beds: '≈ 400',
    airport: '≈ 40 min from KLIA',
    imageKey: 'hospitalSubang',
    accent: '#6B4E7A',
  },
];

export const treatmentsMeta: { slug: TreatmentSlug; icon: string; hospitals: HospitalSlug[] }[] = [
  { slug: 'cardiology', icon: 'heart', hospitals: ['gleneagles', 'pantai', 'sunway', 'kpj-ampang'] },
  { slug: 'oncology', icon: 'ribbon', hospitals: ['sunway', 'gleneagles', 'subang-jaya'] },
  { slug: 'orthopaedics', icon: 'bone', hospitals: ['pantai', 'gleneagles', 'kpj-ampang', 'columbia-setapak'] },
  { slug: 'neurology', icon: 'brain', hospitals: ['gleneagles', 'sunway', 'subang-jaya'] },
  { slug: 'gastroenterology', icon: 'stomach', hospitals: ['gleneagles', 'pantai', 'subang-jaya'] },
  { slug: 'fertility', icon: 'baby', hospitals: ['sunway', 'gleneagles', 'pantai'] },
  { slug: 'health-screening', icon: 'clipboard', hospitals: ['columbia-setapak', 'kpj-ampang', 'pantai'] },
  { slug: 'ophthalmology', icon: 'eye', hospitals: ['gleneagles', 'sunway', 'pantai'] },
  { slug: 'womens-health', icon: 'flower', hospitals: ['pantai', 'kpj-ampang', 'subang-jaya'] },
];

export type HospitalCopy = {
  summary: string;
  profile: string;
  bestFor: string;
  highlights: string[];
  specialties: string[];
  facilities: string[];
  accreditations: string[];
};

export type TreatmentCopy = {
  name: string;
  summary: string;
  detail: string;
  stay: string;
};

export type SiteContent = {
  meta: { title: string; description: string };
  nav: { home: string; hospitals: string; treatments: string; journey: string; about: string; contact: string };
  common: {
    consult: string;
    consultShort: string;
    freeForPatients: string;
    viewProfile: string;
    viewAllHospitals: string;
    allSpecialties: string;
    backToHospitals: string;
    learnMore: string;
    replyTime: string;
    languages: string;
    indicative: string;
    menu: string;
    close: string;
    language: string;
    skip: string;
    atAGlance: string;
    overview: string;
    whyThisHospital: string;
    specialties: string;
    facilities: string;
    accreditations: string;
    bestFor: string;
    availableAt: string;
    beds: string;
    established: string;
    airport: string;
    location: string;
    askAvailability: string;
    nextHospital: string;
    notBuilt: string;
  };
  home: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
    proofLabel: string;
    proofValue: string;
    proofNote: string;
    chips: string[];
    whyEyebrow: string;
    whyTitle: string;
    whyLede: string;
    pillars: { title: string; body: string }[];
    hospitalsEyebrow: string;
    hospitalsTitle: string;
    hospitalsLede: string;
    hospitalsAction: string;
    treatmentsEyebrow: string;
    treatmentsTitle: string;
    treatmentsLede: string;
    treatmentsAction: string;
    processEyebrow: string;
    processTitle: string;
    processLede: string;
    processAction: string;
    process: { step: string; title: string; body: string }[];
    standardsEyebrow: string;
    standardsTitle: string;
    standardsLede: string;
    standards: { title: string; body: string }[];
    ctaEyebrow: string;
    ctaTitle: string;
    ctaLede: string;
    ctaButton: string;
    ctaPoints: string[];
  };
  hospitalsPage: {
    eyebrow: string;
    title: string;
    lede: string;
    filterAll: string;
    filterCity: string;
    countOne: string;
    countMany: string;
    emptyTitle: string;
    emptyBody: string;
    reset: string;
    noteTitle: string;
    note: string;
  };
  hospitalDetail: {
    back: string;
    lede: string;
    profileTitle: string;
    highlightsTitle: string;
    specialtiesTitle: string;
    facilitiesTitle: string;
    accreditationTitle: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    siblingTitle: string;
  };
  treatmentsPage: {
    eyebrow: string;
    title: string;
    lede: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    note: string;
  };
  journey: {
    eyebrow: string;
    title: string;
    lede: string;
    steps: { title: string; body: string; meta: string }[];
    inclusionsEyebrow: string;
    inclusionsTitle: string;
    inclusionsLede: string;
    included: string[];
    excludedTitle: string;
    excluded: string[];
    costEyebrow: string;
    costTitle: string;
    costBody: string[];
    faqEyebrow: string;
    faqTitle: string;
    faq: { q: string; a: string }[];
    ctaTitle: string;
    ctaBody: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lede: string;
    storyTitle: string;
    story: string[];
    stats: { value: string; label: string }[];
    principlesTitle: string;
    principles: { title: string; body: string }[];
    languagesTitle: string;
    languagesBody: string;
    languagesList: { label: string; note: string }[];
    disclaimerTitle: string;
    disclaimer: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lede: string;
    formTitle: string;
    formNote: string;
    fields: {
      name: string;
      namePlaceholder: string;
      contact: string;
      contactPlaceholder: string;
      country: string;
      countryPlaceholder: string;
      treatment: string;
      treatmentPlaceholder: string;
      hospital: string;
      hospitalAny: string;
      message: string;
      messagePlaceholder: string;
      consent: string;
    };
    errors: { required: string; contact: string; consent: string };
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    openWhatsApp: string;
    copyMessage: string;
    copied: string;
    again: string;
    alternative: string;
    channelsTitle: string;
    hoursTitle: string;
    hours: string[];
    nextTitle: string;
    next: string[];
    privacyNote: string;
  };
  footer: {
    tagline: string;
    explore: string;
    hospitals: string;
    contactTitle: string;
    legal: string;
    rights: string;
    disclaimer: string;
  };
  notFound: { title: string; body: string; cta: string };
  hospitals: Record<HospitalSlug, HospitalCopy>;
  treatments: Record<TreatmentSlug, TreatmentCopy>;
};
