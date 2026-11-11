import { createContext, useContext, useMemo, type ReactNode } from 'react';
import en from '@/content/en';
import id from '@/content/id';
import zh from '@/content/zh';
import type { SiteContent } from '@/content/site';

export const LOCALES = ['en', 'id', 'zh'] as const;
export type Locale = (typeof LOCALES)[number];

export const localeMeta: Record<Locale, { label: string; short: string; htmlLang: string }> = {
  en: { label: 'English', short: 'EN', htmlLang: 'en' },
  id: { label: 'Bahasa Indonesia', short: 'ID', htmlLang: 'id' },
  zh: { label: '中文', short: '中文', htmlLang: 'zh-Hans' },
};

const content: Record<Locale, SiteContent> = { en, id, zh };

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** Picks a locale from the browser, defaulting to English for everyone else. */
export function detectLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en';
  const stored = window.localStorage.getItem('medonex.locale');
  if (isLocale(stored ?? undefined)) return stored as Locale;
  const preferred = navigator.languages ?? [navigator.language];
  for (const raw of preferred) {
    const tag = raw.toLowerCase();
    if (tag.startsWith('id') || tag.startsWith('ms')) return 'id';
    if (tag.startsWith('zh')) return 'zh';
    if (tag.startsWith('en')) return 'en';
  }
  return 'en';
}

type LocaleContextValue = {
  locale: Locale;
  t: SiteContent;
  /** Builds a locale-prefixed path, e.g. path('/hospitals') → '/id/hospitals'. */
  path: (to?: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      t: content[locale],
      path: (to = '/') => {
        const clean = to.startsWith('/') ? to : `/${to}`;
        return `/${locale}${clean === '/' ? '' : clean}`;
      },
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useSite(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useSite must be used inside LocaleProvider');
  return ctx;
}

/** Swaps the locale segment of the current pathname, preserving the page. */
export function switchLocalePath(pathname: string, next: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return `/${next}`;
  if (isLocale(segments[0])) {
    segments[0] = next;
    return `/${segments.join('/')}`;
  }
  return `/${next}/${segments.join('/')}`;
}
