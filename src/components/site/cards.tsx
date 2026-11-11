import type { ReactNode } from 'react';
import { ArrowRight, MapPin, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSite } from '@/lib/i18n';
import { hospitalsMeta, type HospitalSlug } from '@/content/site';
import { images } from '@/content/images';
import { cn } from '@/lib/utils';

/* ------------------------------------------------------------------ */
/* Hospital card                                                       */
/* ------------------------------------------------------------------ */

export function HospitalCard({ slug, className }: { slug: HospitalSlug; className?: string }) {
  const { t, path } = useSite();
  const meta = hospitalsMeta.find((h) => h.slug === slug);
  if (!meta) return null;
  const copy = t.hospitals[slug];

  return (
    <Link
      to={path(`/hospitals/${slug}`)}
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-surface transition-all duration-200 hover:-translate-y-[3px] hover:border-brand/40 hover:shadow-[0_18px_40px_-28px_rgba(11,46,42,0.45)]',
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <img
          src={images[meta.imageKey]}
          alt={meta.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-paper/92 px-2.5 py-1 text-[11px] font-semibold text-ink backdrop-blur">
          <MapPin className="h-3 w-3 text-brand" aria-hidden="true" />
          {meta.area}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[21px] leading-tight text-ink">{meta.name}</h3>
        <p className="mt-2 line-clamp-3 text-[14px] leading-relaxed text-muted-foreground">{copy.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {copy.specialties.slice(0, 3).map((item) => (
            <li
              key={item}
              className="rounded-full bg-sand px-2.5 py-1 text-[11.5px] font-medium text-ink/70"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
          <span className="min-w-0 truncate text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {meta.established} · {meta.beds} {t.common.beds.toLowerCase()}
          </span>
          <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-[13px] font-semibold text-brand transition-transform group-hover:translate-x-0.5">
            {t.common.viewProfile}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Treatment card                                                      */
/* ------------------------------------------------------------------ */

export function TreatmentCard({
  name,
  summary,
  stay,
  icon,
  to,
}: {
  name: string;
  summary: string;
  stay: string;
  icon: ReactNode;
  to?: string;
}) {
  const body = (
    <>
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[9px] bg-sand text-brand">{icon}</span>
        <div>
          <h3 className="font-display text-[19px] leading-snug text-ink">{name}</h3>
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">{summary}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-line pt-3.5">
        <span className="text-[11.5px] font-medium text-muted-foreground">{stay}</span>
        <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </div>
    </>
  );

  const shell =
    'group flex h-full flex-col rounded-[14px] border border-line bg-surface p-5 transition-all duration-200 hover:-translate-y-[2px] hover:border-brand/40 hover:shadow-[0_16px_36px_-28px_rgba(11,46,42,0.4)]';

  return to ? (
    <Link to={to} className={shell}>
      {body}
    </Link>
  ) : (
    <div className={shell}>{body}</div>
  );
}

/* ------------------------------------------------------------------ */
/* CTA band                                                            */
/* ------------------------------------------------------------------ */

export function CtaBand({
  eyebrow,
  title,
  body,
  buttonLabel,
  note,
  points,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  buttonLabel: string;
  note?: string;
  points?: string[];
}) {
  const { path } = useSite();

  return (
    <section className="bg-ink">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            {eyebrow ? <p className="eyebrow mb-3 text-azure">{eyebrow}</p> : null}
            <h2 className="display-l text-balance text-paper">{title}</h2>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-paper/65">{body}</p>
            {note ? <p className="mt-3 text-[13px] text-paper/45">{note}</p> : null}
          </div>

          <div className="md:col-span-5 md:justify-self-end">
            <Link
              to={path('/contact')}
              className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-azure px-7 text-[15px] font-semibold text-white transition-colors hover:bg-azure/90 sm:w-auto"
            >
              {buttonLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {points?.length ? (
              <ul className="mt-5 space-y-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-[13px] text-paper/70">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-azure" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page hero (inner pages)                                             */
/* ------------------------------------------------------------------ */

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  aside,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-12 pt-12 sm:px-8 md:pb-16 md:pt-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className={aside ? 'md:col-span-8' : 'md:col-span-9'}>
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h1 className="display-xl text-balance text-ink">{title}</h1>
            <p className="body-lede mt-5 max-w-2xl">{lede}</p>
            {children}
          </div>
          {aside ? <div className="md:col-span-4">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Breadcrumb                                                          */
/* ------------------------------------------------------------------ */

export function Crumbs({ items }: { items: { label: string; to?: string }[] }) {
  const { path } = useSite();
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] text-muted-foreground">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.to ? (
              <Link to={path(item.to)} className="transition-colors hover:text-brand">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink/60">{item.label}</span>
            )}
            {index < items.length - 1 ? <span aria-hidden="true">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}