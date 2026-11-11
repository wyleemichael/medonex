import { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { LocaleProvider, isLocale, localeMeta, useSite, type Locale } from '@/lib/i18n';

/**
 * Locale-scoped layout. Keeps `lang` on <html>, resets scroll on navigation and
 * renders shared chrome once for every page.
 */
export function LocaleLayout() {
  const { locale } = useParams<{ locale: string }>();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  if (!isLocale(locale)) return <Navigate to="/en" replace />;
  const typed = locale as Locale;

  return (
    <LocaleProvider locale={typed}>
      <DocumentLanguage locale={typed} />
      <div className="flex min-h-screen flex-col bg-paper">
        <SiteHeader />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </LocaleProvider>
  );
}

function DocumentLanguage({ locale }: { locale: Locale }) {
  const { t } = useSite();

  useEffect(() => {
    document.documentElement.lang = localeMeta[locale].htmlLang;
    document.title = t.meta.title;

    const setMeta = (selector: string, content: string) => {
      const tag = document.querySelector<HTMLMetaElement>(selector);
      if (tag) tag.content = content;
    };

    setMeta('meta[name="description"]', t.meta.description);
    setMeta('meta[property="og:title"]', t.meta.title);
    setMeta('meta[property="og:description"]', t.meta.description);
    setMeta('meta[name="twitter:title"]', t.meta.title);
    setMeta('meta[name="twitter:description"]', t.meta.description);
    setMeta('meta[property="og:locale"]', localeMeta[locale].htmlLang === 'zh-Hans' ? 'zh_CN' : localeMeta[locale].htmlLang);
  }, [locale, t]);

  return null;
}