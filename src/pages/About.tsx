import { Check, Languages, ShieldAlert } from 'lucide-react';
import { PageHero, Crumbs, CtaBand } from '@/components/site/cards';
import { Container } from '@/components/site/primitives';
import { useSite } from '@/lib/i18n';
import { images } from '@/content/images';

export default function About() {
  const { t } = useSite();

  return (
    <>
      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} lede={t.about.lede}>
        <Crumbs items={[{ label: t.nav.home, to: '/' }, { label: t.nav.about }]} />
      </PageHero>

      {/* -------------------------------------------------------- Story */}
      <section className="bg-paper py-14 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-7">
              <h2 className="display-m text-ink">{t.about.storyTitle}</h2>
              <div className="mt-5 space-y-4">
                {t.about.story.map((paragraph) => (
                  <p key={paragraph} className="text-[15px] leading-[1.85] text-ink/80">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="photo-frame aspect-[4/5]">
                <img
                  src={images.consultation}
                  alt="A doctor in consultation with a patient"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-y-8 border-t border-line pt-8 md:grid-cols-4">
            {t.about.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-[34px] leading-none text-brand md:text-[40px]">{stat.value}</dt>
                <dd className="mt-2 max-w-[150px] text-[12.5px] leading-snug text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* --------------------------------------------------- Principles */}
      <section className="border-y border-line bg-sand/40 py-14 md:py-20">
        <Container>
          <h2 className="display-m text-ink">{t.about.principlesTitle}</h2>
          <div className="mt-8 grid gap-x-10 gap-y-0 md:grid-cols-2">
            {t.about.principles.map((principle) => (
              <div key={principle.title} className="border-t border-line py-6">
                <h3 className="flex items-start gap-3 font-display text-[19px] leading-snug text-ink">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {principle.title}
                </h3>
                <p className="mt-2 pl-7 text-[13.5px] leading-relaxed text-muted-foreground">{principle.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- Languages */}
      <section className="bg-paper py-14 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <span className="grid h-11 w-11 place-items-center rounded-[9px] bg-sand text-brand">
                <Languages className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <h2 className="display-m mt-4 text-balance text-ink">{t.about.languagesTitle}</h2>
              <p className="body-lede mt-4">{t.about.languagesBody}</p>
            </div>
            <div className="md:col-span-7">
              <ul className="space-y-0">
                {t.about.languagesList.map((language) => (
                  <li key={language.label} className="border-t border-line py-5 first:border-t-0 first:pt-0">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                      <span className="w-40 shrink-0 font-display text-[19px] text-ink">{language.label}</span>
                      <span className="text-[13.5px] leading-relaxed text-muted-foreground">{language.note}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex items-start gap-3 rounded-[14px] border border-line bg-sand/60 p-5">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-azure" aria-hidden="true" />
            <div>
              <h2 className="font-display text-[18px] text-ink">{t.about.disclaimerTitle}</h2>
              <p className="mt-1.5 max-w-4xl text-[13px] leading-relaxed text-ink/70">{t.about.disclaimer}</p>
            </div>
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
