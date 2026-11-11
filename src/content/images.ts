/**
 * Photography delivered as remote CDN assets. Keys mirror the design spec so
 * components never hard-code URLs.
 */
export const images = {
  heroAtrium:
    'https://mgx-backend-cdn.metadl.com/generate/images/1657760/2026-11-05/zywazbqcal6q/hero-kl-atrium.png',
  skyline:
    'https://mgx-backend-cdn.metadl.com/generate/images/1657760/2026-11-05/zywazoical6a/kl-skyline.png',
  hospitalGleneagles:
    'https://mgx-backend-cdn.metadl.com/generate/images/1657760/2026-11-05/zywdg4qcal5q/hospital-gleneagles.png',
  hospitalSunway:
    'https://mgx-backend-cdn.metadl.com/generate/images/1657760/2026-11-05/zywa2iical5a/hospital-sunway.png',
  hospitalPantai:
    'https://mgx-backend-cdn.metadl.com/generate/images/1657760/2026-11-05/zywa2xacal7q/hospital-pantai.png',
  hospitalKpj:
    'https://mgx-backend-cdn.metadl.com/generate/images/1657760/2026-11-05/zywa3dycal7a/hospital-kpj.png',
  hospitalColumbia:
    'https://mgx-backend-cdn.metadl.com/generate/images/1657760/2026-11-05/zywa3qyaal6q/hospital-columbia.png',
  hospitalSubang:
    'https://mgx-backend-cdn.metadl.com/generate/images/1657760/2026-11-05/zywa35qcal6a/hospital-subang.png',
  consultation:
    'https://mgx-backend-cdn.metadl.com/generate/images/1657760/2026-11-05/zywa4kical5q/consultation.png',
  airportArrival:
    'https://mgx-backend-cdn.metadl.com/generate/images/1657760/2026-11-05/zywa4xical5a/airport-arrival.png',
  patientSuite:
    'https://mgx-backend-cdn.metadl.com/generate/images/1657760/2026-11-05/zywa5eical7q/patient-suite.png',
  careCoordination:
    'https://mgx-backend-cdn.metadl.com/generate/images/1657760/2026-11-05/zywa5racal7a/care-coordination.png',
} as const;

export type ImageKey = keyof typeof images;
