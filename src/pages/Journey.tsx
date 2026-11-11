import { Check, X, ArrowRight, Plane, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero, Crumbs, CtaBand } from '@/components/site/cards';
import { Container } from '@/components/site/primitives';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useSite } from '@/lib/i18n';
import { images } from '@/content/images';

export default function Journey() {
  const { t, path } = useSite();

  return (
    <>
      <PageHero eyebrow={t.journey.eyebrow} title={t.journey.title} lede={t.journey.lede}>
        <Crumbs items={[{ label: t.nav.home, to: '/' }, { label: t.nav.journey }]} />
      </PageHero>

      {/* ------------------------------------------------------- Steps */}
      <section className="bg-paper py-12 md:py-16">
        <Container>
          <ol className="relative">
            {t.journey.steps.map((step, index) => (
              <li key={step.title} className="relative border-t border-line py-8 first:border-t-0 first:pt-0 md:grid md:grid-cols-12 md:gap-10">
                <div className="md:col-span-3">
                  <span className="font-display text-[13px] font-semibold tracking-[0.1em] text-azure">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-sand px-2.5 py-1 text-[11px] font-medium text-ink/70">
                    {step.meta}
                  </p>
                </div>
                <div className="mt-3 md:col-span-9 md:mt-0">
                  <h2 className="font-display text-[24px] leading-snug text-ink md:text-[26px]">{step.title}</h2>
                  <p className="mt-2.5 max-w-3xl text-[14.5px] leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="photo-frame aspect-[4/3]">
              <img
                src={images.airportArrival}
                alt="Concierge greeting an arriving patient at Kuala Lumpur International Airport"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="photo-frame aspect-[4/3]">
              <img
                src={images.patientSuite}
                alt="Recovery suite with a view of tropical greenery"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------- Inclusions */}
      <section className="border-y border-line bg-sand/40 py-14 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <p className="eyebrow mb-3">{t.journey.inclusionsEyebrow}</p>
              <h2 className="display-l text-balance text-ink">{t.journey.inclusionsTitle}</h2>
              <p className="body-lede mt-4">{t.journey.inclusionsLede}</p>
              <div className="mt-6 rounded-[14px] border border-line bg-surface p-5">
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
                  {t.journey.excludedTitle}
                </h3>
                <ul className="mt-3 space-y-2">
                  {t.journey.excluded.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink/70">
                      <X className="mt-[3px] h-3.5 w-3.5 shrink-0 text-azure" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-7">
              <ul className="grid gap-x-8 sm:grid-cols-2">
                {t.journey.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 border-t border-line py-3.5 text-[13.5px] leading-relaxed text-ink/80">
                    <Check className="mt-[3px] h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------ Costs */}
      <section className="bg-paper py-14 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <p className="eyebrow mb-3">{t.journey.costEyebrow}</p>
              <h2 className="display-l text-balance text-ink">{t.journey.costTitle}</h2>
              <div className="photo-frame mt-7 aspect-[4/3]">
                <img
                  src={images.careCoordination}
                  alt="Coordinator preparing a cost estimate from patient reports"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="space-y-4">
                {t.journey.costBody.map((paragraph) => (
                  <p key={paragraph} className="text-[14.5px] leading-[1.8] text-ink/80">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-6 flex items-start gap-3 rounded-[12px] border border-line bg-surface p-4">
                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <p className="text-[12.5px] leading-relaxed text-muted-foreground">{t.common.indicative}</p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Link
                  to={path('/contact')}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-azure px-5 text-[14px] font-semibold text-white transition-colors hover:bg-azure/90"
                >
                  {t.common.consult}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to={path('/hospitals')}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/20 px-5 text-[14px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  <Plane className="h-4 w-4" aria-hidden="true" />
                  {t.common.viewAllHospitals}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------- FAQ */}
      <section className="border-t border-line bg-sand/40 py-14 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-4">
              <p className="eyebrow mb-3">{t.journey.faqEyebrow}</p>
              <h2 className="display-m text-balance text-ink">{t.journey.faqTitle}</h2>
            </div>
            <div className="md:col-span-8">
              <Accordion type="single" collapsible className="w-full">
                {t.journey.faq.map((item, index) => (
                  <AccordionItem key={item.q} value={`faq-${index}`} className="border-line">
                    <AccordionTrigger className="py-5 text-left font-display text-[17px] font-medium text-ink hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 pr-8 text-[14px] leading-relaxed text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow={t.journey.eyebrow}
        title={t.journey.ctaTitle}
        body={t.journey.ctaBody}
        buttonLabel={t.common.consult}
        points={t.home.ctaPoints}
      />
    </>
  );
}
