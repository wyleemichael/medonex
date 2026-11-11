import { useMemo, useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { PageHero, Crumbs, CtaBand, HospitalCard } from '@/components/site/cards';
import { Container } from '@/components/site/primitives';
import { useSite } from '@/lib/i18n';
import { hospitalsMeta } from '@/content/site';
import { cn } from '@/lib/utils';

export default function Hospitals() {
  const { t, path } = useSite();
  const [activeArea, setActiveArea] = useState<string>('all');

  const areas = useMemo(() => {
    const unique = Array.from(new Set(hospitalsMeta.map((h) => h.area)));
    return unique;
  }, []);

  const visible = activeArea === 'all' ? hospitalsMeta : hospitalsMeta.filter((h) => h.area === activeArea);

  return (
    <>
      <PageHero
        eyebrow={t.hospitalsPage.eyebrow}
        title={t.hospitalsPage.title}
        lede={t.hospitalsPage.lede}
      >
        <Crumbs items={[{ label: t.nav.home, to: '/' }, { label: t.nav.hospitals }]} />
      </PageHero>

      <section className="bg-paper py-10 md:py-14">
        <Container>
          <div className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label={t.hospitalsPage.filterCity}>
              <button
                type="button"
                onClick={() => setActiveArea('all')}
                aria-pressed={activeArea === 'all'}
                className={cn(
                  'h-9 rounded-full border px-4 text-[12.5px] font-semibold transition-colors',
                  activeArea === 'all'
                    ? 'border-brand bg-brand text-paper'
                    : 'border-line bg-surface text-ink/70 hover:border-brand hover:text-brand',
                )}
              >
                {t.hospitalsPage.filterAll}
              </button>
              {areas.map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => setActiveArea(area)}
                  aria-pressed={activeArea === area}
                  className={cn(
                    'h-9 rounded-full border px-4 text-[12.5px] font-semibold transition-colors',
                    activeArea === area
                      ? 'border-brand bg-brand text-paper'
                      : 'border-line bg-surface text-ink/70 hover:border-brand hover:text-brand',
                  )}
                >
                  {area}
                </button>
              ))}
            </div>

            <p className="text-[12.5px] font-medium text-muted-foreground" aria-live="polite">
              {visible.length} {visible.length === 1 ? t.hospitalsPage.countOne : t.hospitalsPage.countMany}
            </p>
          </div>

          {visible.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((hospital) => (
                <HospitalCard key={hospital.slug} slug={hospital.slug} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-[14px] border border-dashed border-line bg-surface px-6 py-16 text-center">
              <h2 className="font-display text-[24px] text-ink">{t.hospitalsPage.emptyTitle}</h2>
              <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                {t.hospitalsPage.emptyBody}
              </p>
              <button
                type="button"
                onClick={() => setActiveArea('all')}
                className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-brand px-5 text-[13.5px] font-semibold text-paper"
              >
                {t.hospitalsPage.reset}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          )}

          <div className="mt-12 rounded-[14px] border border-line bg-surface p-6 md:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[8px] bg-sand text-brand">
                <ShieldCheck className="h-[18px] w-[18px]" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-[19px] text-ink">{t.hospitalsPage.noteTitle}</h2>
                <p className="mt-2 max-w-3xl text-[13.5px] leading-relaxed text-muted-foreground">
                  {t.hospitalsPage.note}
                </p>
                <a
                  href={path('/journey')}
                  className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand hover:underline"
                >
                  {t.nav.journey}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
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
