import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  HeartPulse,
  Ribbon,
  Bone,
  Brain,
  Stethoscope,
  Baby,
  ClipboardCheck,
  Eye,
  Flower2,
  Plane,
  Languages,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { Container, SectionHeading, Hairline } from '@/components/site/primitives';
import { TreatmentCard, CtaBand } from '@/components/site/cards';
import { HospitalCarousel } from '@/components/site/HospitalCarousel';
import { useSite } from '@/lib/i18n';
import { treatmentsMeta } from '@/content/site';
import { images } from '@/content/images';
import { whatsappLink } from '@/lib/contact';

const pillarIcons = [BadgeCheck, Stethoscope, ShieldCheck, Plane];

const treatmentIcons: Record<string, typeof HeartPulse> = {
  heart: HeartPulse,
  ribbon: Ribbon,
  bone: Bone,
  brain: Brain,
  stomach: Stethoscope,
  baby: Baby,
  clipboard: ClipboardCheck,
  eye: Eye,
  flower: Flower2,
};

export default function Index() {
  const { t, path, locale } = useSite();

  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-paper">
        <Container wide className="relative">
          <div className="grid items-center gap-10 py-12 md:grid-cols-12 md:gap-12 md:py-16 lg:py-20">
            <div className="md:col-span-7 lg:pr-6">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-azure" aria-hidden="true" />
                <span className="text-[11.5px] font-semibold uppercase tracking-[0.13em] text-ink/70">
                  {t.home.eyebrow}
                </span>
              </div>

              <h1 className="display-xl text-balance text-ink">
                {t.home.titleLead}{' '}
                <em className="font-normal not-italic text-azure">{t.home.titleAccent}</em>.
              </h1>

              <p className="body-lede mt-6 max-w-xl">{t.home.lede}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to={path('/contact')}
                  className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-azure px-7 text-[15px] font-semibold text-white transition-colors hover:bg-azure/90"
                >
                  {t.home.primaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to={path('/hospitals')}
                  className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-ink/20 bg-transparent px-7 text-[15px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  {t.home.secondaryCta}
                </Link>
              </div>

              <ul className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
                {t.home.chips.map((chip) => (
                  <li key={chip} className="flex items-start gap-2 text-[13px] text-ink/70">
                    <Check className="mt-[3px] h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                    {chip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative md:col-span-5">
              <div className="photo-frame relative aspect-[4/5] w-full sm:aspect-[5/6] md:aspect-[2/3]">
                <img
                  src={images.heroAtrium}
                  alt="Sunlit atrium of a partner hospital in Kuala Lumpur"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" aria-hidden="true" />
              </div>

              <div className="absolute -bottom-5 left-4 right-4 rounded-[12px] border border-line bg-surface p-4 shadow-[0_24px_64px_-24px_rgba(11,46,42,0.28)] sm:left-6 sm:right-auto sm:w-[262px]">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {t.home.proofLabel}
                </p>
                <p className="mt-1 font-display text-[22px] leading-tight text-ink">{t.home.proofValue}</p>
                <p className="mt-1 text-[11.5px] leading-snug text-muted-foreground">{t.home.proofNote}</p>
                <div className="mt-3 flex items-center gap-1.5 border-t border-line pt-2.5">
                  <MapPin className="h-3 w-3 text-brand" aria-hidden="true" />
                  <span className="text-[11px] font-medium text-ink/70">Klang Valley · Malaysia</span>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="mt-8 border-y border-line bg-sand/60">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4 text-[12px] font-medium text-ink/60 sm:justify-between">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                JCI &amp; MSQH accredited partners
              </span>
              <span className="hidden items-center gap-1.5 sm:inline-flex">
                <Languages className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                {t.common.languages}
              </span>
              <span className="hidden items-center gap-1.5 md:inline-flex">
                <Plane className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                Direct flights from Jakarta, Medan, Surabaya, Singapore
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                {t.common.freeForPatients}
              </span>
            </div>
          </Container>
        </div>
      </section>

      {/* -------------------------------------------------- Why Malaysia */}
      <section className="bg-paper py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start md:gap-12">
            <div className="md:col-span-5">
              <SectionHeading eyebrow={t.home.whyEyebrow} title={t.home.whyTitle} lede={t.home.whyLede} />
              <div className="photo-frame mt-8 aspect-[16/10]">
                <img
                  src={images.skyline}
                  alt="Kuala Lumpur skyline at golden hour"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-7">
              <ul className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
                {t.home.pillars.map((pillar, index) => {
                  const Icon = pillarIcons[index] ?? BadgeCheck;
                  return (
                    <li key={pillar.title} className="border-t border-line py-6 first:border-t sm:[&:nth-child(-n+2)]:border-t">
                      <span className="grid h-10 w-10 place-items-center rounded-[8px] bg-sand text-brand">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 font-display text-[18px] leading-snug text-ink">{pillar.title}</h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{pillar.body}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* --------------------------------------------------- Hospitals */}
      <section className="border-y border-line bg-sand/40 py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={t.home.hospitalsEyebrow}
            title={t.home.hospitalsTitle}
            lede={t.home.hospitalsLede}
            action={
              <Link
                to={path('/hospitals')}
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand hover:underline"
              >
                {t.home.hospitalsAction}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            }
          />

          <div className="mt-8">
            <HospitalCarousel />
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------- Treatments */}
      <section className="bg-paper py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-4">
              <SectionHeading
                eyebrow={t.home.treatmentsEyebrow}
                title={t.home.treatmentsTitle}
                lede={t.home.treatmentsLede}
              />
              <Link
                to={path('/treatments')}
                className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand hover:underline"
              >
                {t.home.treatmentsAction}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <div className="photo-frame mt-8 aspect-[4/3]">
                <img
                  src={images.consultation}
                  alt="Doctor listening to a patient during a consultation"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {treatmentsMeta.map((treatment) => {
                  const Icon = treatmentIcons[treatment.icon] ?? HeartPulse;
                  const copy = t.treatments[treatment.slug];
                  return (
                    <TreatmentCard
                      key={treatment.slug}
                      name={copy.name}
                      summary={copy.summary}
                      stay={copy.stay}
                      icon={<Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />}
                      to={path('/treatments')}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------ Process */}
      <section className="border-t border-line bg-sand/40 py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={t.home.processEyebrow}
            title={t.home.processTitle}
            lede={t.home.processLede}
            action={
              <Link
                to={path('/journey')}
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand hover:underline"
              >
                {t.home.processAction}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            }
          />

          <ol className="mt-10 grid gap-0 md:grid-cols-4">
            {t.home.process.map((step, index) => (
              <li
                key={step.step}
                className="relative border-t border-line pt-6 md:border-l md:border-t-0 md:pl-6 md:pt-0 md:first:border-l-0 md:first:pl-0"
              >
                <span className="font-display text-[13px] font-semibold tracking-[0.08em] text-azure">
                  {step.step}
                </span>
                <h3 className="mt-2 font-display text-[20px] leading-snug text-ink">{step.title}</h3>
                <p className="mt-2 max-w-xs text-[13.5px] leading-relaxed text-muted-foreground">{step.body}</p>
                {index < t.home.process.length - 1 ? (
                  <ArrowRight
                    className="absolute -right-3 top-0 hidden h-4 w-4 text-line md:block lg:hidden"
                    aria-hidden="true"
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ---------------------------------------------------- Standards */}
      <section className="bg-paper py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <SectionHeading eyebrow={t.home.standardsEyebrow} title={t.home.standardsTitle} lede={t.home.standardsLede} />
              <div className="photo-frame mt-8 aspect-[4/3]">
                <img
                  src={images.careCoordination}
                  alt="Care coordinator reviewing patient reports"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-7">
              <dl className="space-y-0">
                {t.home.standards.map((item) => (
                  <div key={item.title} className="border-t border-line py-6 first:border-t-0 first:pt-0">
                    <dt className="flex items-start gap-3">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      <span className="font-display text-[19px] leading-snug text-ink">{item.title}</span>
                    </dt>
                    <dd className="mt-1.5 pl-7 text-[13.5px] leading-relaxed text-muted-foreground">{item.body}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 rounded-[14px] border border-line bg-surface p-5">
                <p className="text-[13px] leading-relaxed text-muted-foreground">{t.about.disclaimer}</p>
                <Link
                  to={path('/about')}
                  className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand hover:underline"
                >
                  {t.nav.about}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Hairline />

      <CtaBand
        eyebrow={t.home.ctaEyebrow}
        title={t.home.ctaTitle}
        body={t.home.ctaLede}
        buttonLabel={t.home.ctaButton}
        points={t.home.ctaPoints}
      />

      {/* Sticky mobile consult bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 px-4 py-3 backdrop-blur sm:hidden">
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12px] font-semibold text-ink">{t.common.freeForPatients}</p>
            <p className="truncate text-[11px] text-muted-foreground">{t.common.replyTime}</p>
          </div>
          <a
            href={whatsappLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-azure px-4 text-[13px] font-semibold text-white"
          >
            {t.common.consultShort}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="h-[68px] sm:hidden" aria-hidden="true" />
    </>
  );
}

