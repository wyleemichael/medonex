import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, BadgeCheck, BedDouble, Building2, CalendarDays, Check, MapPin, Plane, Sparkles } from 'lucide-react';
import { Container } from '@/components/site/primitives';
import { Crumbs, CtaBand, HospitalCard } from '@/components/site/cards';
import { useSite } from '@/lib/i18n';
import { hospitalsMeta, type HospitalSlug } from '@/content/site';
import { images } from '@/content/images';
import { whatsappLink } from '@/lib/contact';

export default function HospitalDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t, path, locale } = useSite();

  const index = hospitalsMeta.findIndex((h) => h.slug === slug);
  if (index === -1) return <Navigate to={path('/hospitals')} replace />;

  const meta = hospitalsMeta[index];
  const copy = t.hospitals[meta.slug as HospitalSlug];
  const siblings = hospitalsMeta.filter((h) => h.slug !== meta.slug).slice(0, 3);
  const next = hospitalsMeta[(index + 1) % hospitalsMeta.length];

  const whatsappMessage = `${t.common.consult} — ${meta.name}`;

  return (
    <>
      {/* ---------------------------------------------------- Hero */}
      <section className="border-b border-line bg-paper">
        <Container>
          <div className="py-8 md:py-10">
            <Crumbs
              items={[
                { label: t.nav.home, to: '/' },
                { label: t.nav.hospitals, to: '/hospitals' },
                { label: meta.name },
              ]}
            />

            <div className="mt-2 grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
              <div className="md:col-span-7">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5">
                  <BadgeCheck className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/70">
                    {copy.accreditations[0]}
                  </span>
                </div>
                <h1 className="display-l text-balance text-ink">{meta.name}</h1>
                <p className="mt-2 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-muted-foreground">
                  <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                  {meta.area}, {meta.city}
                </p>
                <p className="body-lede mt-5 max-w-2xl">{copy.profile}</p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={whatsappLink(locale, `${whatsappMessage}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-azure px-6 text-[14.5px] font-semibold text-white transition-colors hover:bg-azure/90"
                  >
                    {t.common.askAvailability}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <Link
                    to={path('/hospitals')}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/20 px-6 text-[14.5px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                  >
                    {t.hospitalDetail.back}
                  </Link>
                </div>
              </div>

              {/* At a glance card */}
              <div className="md:col-span-5">
                <div className="rounded-[14px] border border-line bg-surface p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {t.common.atAGlance}
                  </p>
                  <dl className="mt-4 space-y-3.5">
                    {[
                      { icon: CalendarDays, label: t.common.established, value: meta.established },
                      { icon: BedDouble, label: t.common.beds, value: meta.beds },
                      { icon: Plane, label: t.common.airport, value: meta.airport },
                      { icon: Building2, label: t.common.location, value: `${meta.area}, ${meta.city}` },
                    ].map((row) => (
                      <div key={row.label} className="flex items-start justify-between gap-4 border-b border-line pb-3.5 last:border-b-0 last:pb-0">
                        <dt className="flex items-center gap-2 text-[12.5px] text-muted-foreground">
                          <row.icon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                          {row.label}
                        </dt>
                        <dd className="text-right text-[13px] font-semibold text-ink">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-4 rounded-[10px] bg-sand px-3.5 py-3">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {t.common.bestFor}
                    </p>
                    <p className="mt-1 text-[12.5px] font-medium leading-snug text-ink">{copy.bestFor}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------ Photo band */}
      <section className="bg-paper pt-8 md:pt-10">
        <Container wide>
          <div className="photo-frame aspect-[16/9] md:aspect-[21/8]">
            <img src={images[meta.imageKey]} alt={meta.name} className="h-full w-full object-cover" />
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- Content */}
      <section className="bg-paper py-14 md:py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-7">
              <h2 className="display-m text-ink">{t.hospitalDetail.highlightsTitle}</h2>
              <ul className="mt-6 space-y-0">
                {copy.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-line py-4 first:border-t first:border-line">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span className="text-[14.5px] leading-relaxed text-ink/85">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="display-m mt-12 text-ink">{t.hospitalDetail.specialtiesTitle}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {copy.specialties.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-2 text-[13px] font-medium text-ink/80"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-azure" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <aside className="md:col-span-5">
              <div className="rounded-[14px] border border-line bg-sand/50 p-6">
                <h2 className="font-display text-[19px] text-ink">{t.hospitalDetail.facilitiesTitle}</h2>
                <ul className="mt-4 space-y-2.5">
                  {copy.facilities.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink/75">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-[14px] border border-line bg-surface p-6">
                <h2 className="font-display text-[19px] text-ink">{t.hospitalDetail.accreditationTitle}</h2>
                <ul className="mt-4 space-y-2.5">
                  {copy.accreditations.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] font-medium text-ink/80">
                      <BadgeCheck className="mt-[1px] h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-line pt-3 text-[11.5px] leading-relaxed text-muted-foreground">
                  {t.treatmentsPage.note}
                </p>
              </div>

              <div className="mt-5 rounded-[14px] bg-ink p-6 text-paper">
                <h2 className="font-display text-[20px] leading-snug">{t.hospitalDetail.ctaTitle}</h2>
                <p className="mt-2 text-[13px] leading-relaxed text-paper/65">{t.hospitalDetail.ctaBody}</p>
                <a
                  href={whatsappLink(locale, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-azure px-5 text-[13.5px] font-semibold text-white transition-colors hover:bg-azure/90"
                >
                  {t.hospitalDetail.ctaButton}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------- Sibling hospitals */}
      <section className="border-t border-line bg-sand/40 py-14 md:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display-m text-ink">{t.hospitalDetail.siblingTitle}</h2>
            <Link
              to={path(`/hospitals/${next.slug}`)}
              className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand hover:underline"
            >
              {t.common.nextHospital}: {next.name.replace(' Hospital', '')}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {siblings.map((hospital) => (
              <HospitalCard key={hospital.slug} slug={hospital.slug} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow={t.home.ctaEyebrow}
        title={t.home.ctaTitle}
        body={t.home.ctaLede}
        buttonLabel={t.home.ctaButton}
        points={t.home.ctaPoints}
      />
    </>
  );
}
