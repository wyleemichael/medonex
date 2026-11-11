import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HospitalCard } from './cards';
import { useSite } from '@/lib/i18n';
import { hospitalsMeta, type HospitalSlug } from '@/content/site';
import { cn } from '@/lib/utils';

const AUTOPLAY_MS = 5200;

function useSlidesPerView() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const queries: [number, MediaQueryList][] = [
      [1, window.matchMedia('(max-width: 639px)')],
      [2, window.matchMedia('(max-width: 1023px)')],
    ];

    const update = () => {
      if (queries[0][1].matches) setCount(1);
      else if (queries[1][1].matches) setCount(2);
      else setCount(3);
    };

    update();
    queries.forEach(([, query]) => query.addEventListener('change', update));
    return () => queries.forEach(([, query]) => query.removeEventListener('change', update));
  }, []);

  return count;
}

/**
 * Owl-style carousel: continuous autoplay, wrap-around, arrows and dots,
 * pause on hover/focus, and swipe on touch devices.
 */
export function HospitalCarousel({ slugs }: { slugs?: HospitalSlug[] }) {
  const { t } = useSite();
  const perView = useSlidesPerView();
  const items = useMemo(
    () => (slugs ? hospitalsMeta.filter((h) => slugs.includes(h.slug)) : hospitalsMeta),
    [slugs],
  );

  const maxIndex = Math.max(0, items.length - perView);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const pointerStart = useRef<number | null>(null);
  const dragged = useRef(false);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const goTo = useCallback(
    (next: number) => {
      if (maxIndex === 0) return;
      if (next < 0) setIndex(maxIndex);
      else if (next > maxIndex) setIndex(0);
      else setIndex(next);
    },
    [maxIndex],
  );

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [paused, maxIndex]);

  const onPointerDown = (event: React.PointerEvent) => {
    pointerStart.current = event.clientX;
    dragged.current = false;
  };

  const onPointerUp = (event: React.PointerEvent) => {
    if (pointerStart.current === null) return;
    const delta = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(delta) < 48) return;
    dragged.current = true;
    goTo(delta < 0 ? index + 1 : index - 1);
  };

  return (
    <div
      className="relative"
      role="group"
      aria-roledescription="carousel"
      aria-label={t.home.hospitalsEyebrow}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setPaused(false);
      }}
    >
      <div
        className="overflow-hidden px-0.5 py-3"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          pointerStart.current = null;
        }}
      >
        <div
          className="flex touch-pan-y transition-transform duration-[650ms] ease-[cubic-bezier(.22,.61,.36,1)]"
          style={{ transform: `translate3d(-${(index * 100) / perView}%, 0, 0)` }}
        >
          {items.map((hospital) => (
            <div
              key={hospital.slug}
              className="shrink-0 px-2.5"
              style={{ flexBasis: `${100 / perView}%` }}
              aria-hidden={false}
              onClickCapture={(event) => {
                if (dragged.current) {
                  event.preventDefault();
                  dragged.current = false;
                }
              }}
            >
              <HospitalCard slug={hospital.slug} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5" role="tablist" aria-label={t.home.hospitalsEyebrow}>
          {Array.from({ length: maxIndex + 1 }).map((_, dot) => (
            <button
              key={dot}
              type="button"
              role="tab"
              aria-selected={dot === index}
              aria-label={`${dot + 1} / ${maxIndex + 1}`}
              onClick={() => goTo(dot)}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                dot === index ? 'w-7 bg-brand' : 'w-2 bg-brand/25 hover:bg-brand/45',
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={maxIndex === 0}
            aria-label="Previous hospitals"
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-brand hover:text-brand disabled:opacity-40"
          >
            <ChevronLeft className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={maxIndex === 0}
            aria-label="Next hospitals"
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-brand hover:text-brand disabled:opacity-40"
          >
            <ChevronRight className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}