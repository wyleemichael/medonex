import {
  HeartPulse,
  Ribbon,
  Bone,
  Brain,
  Stethoscope,
  Baby,
  ClipboardCheck,
  Eye,
  Flower2,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero, Crumbs, CtaBand } from '@/components/site/cards';
import { Container } from '@/components/site/primitives';
import { useSite } from '@/lib/i18n';
import { hospitalsMeta, treatmentsMeta, type TreatmentSlug } from '@/content/site';

const icons: Record<string, typeof HeartPulse> = {
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

export default function Treatments() {
  const { t, path } = useSite();

  return (
    <>
      <PageHero eyebrow={t.treatmentsPage.eyebrow} title={t.treatmentsPage.title} lede={t.treatmentsPage.lede}>
        <Crumbs items={[{ label: t.nav.home, to: '/' }, { label: t.nav.treatments }]} />
      </PageHero>

      <section className="bg-paper py-12 md:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {treatmentsMeta.map((treatment) => {
              const copy = t.treatments[treatment.slug as TreatmentSlug];
              const Icon = icons[treatment.icon] ?? HeartPulse;
              const availableHospitals = treatment.hospitals
                .map((slug) => hospitalsMeta.find((h) => h.slug === slug))
                .filter((h): h is NonNullable<typeof h> => Boolean(h));

              return (
                <article
                  key={treatment.slug}
                  className="flex flex-col rounded-[14px] border border-line bg-surface p-6 md:p-7"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[9px] bg-sand text-brand">
                      <Icon className="h-[22px] w-[22px]" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="font-display text-[23px] leading-snug text-ink">{copy.name}</h2>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">{copy.detail}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-2 rounded-[9px] bg-sand/60 px-3.5 py-2.5">
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {copy.stay}
                    </span>
                  </div>

                  <div className="mt-5 border-t border-line pt-4">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {t.common.availableAt}
                    </p>
                    <ul className="mt-2.5 flex flex-wrap gap-1.5">
                      {availableHospitals.map((hospital) => (
                        <li key={hospital.slug}>
                          <Link
                            to={path(`/hospitals/${hospital.slug}`)}
                            className="inline-flex items-center rounded-full border border-line bg-paper px-2.5 py-1 text-[11.5px] font-medium text-ink/75 transition-colors hover:border-brand hover:text-brand"
                          >
                            {hospital.name.replace(' Specialist Hospital', '').replace(' Hospital', '')}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-[14px] border border-line bg-sand/50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-azure" aria-hidden="true" />
              <p className="max-w-2xl text-[13px] leading-relaxed text-ink/70">{t.treatmentsPage.note}</p>
            </div>
            <Link
              to={path('/contact')}
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-brand px-5 text-[13.5px] font-semibold text-paper transition-colors hover:bg-brand-deep"
            >
              {t.treatmentsPage.ctaButton}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow={t.treatmentsPage.eyebrow}
        title={t.treatmentsPage.ctaTitle}
        body={t.treatmentsPage.ctaBody}
        buttonLabel={t.treatmentsPage.ctaButton}
      />
    </>
  );
}
