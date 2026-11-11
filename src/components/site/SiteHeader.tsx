import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { Container } from './primitives';
import { LOCALES, localeMeta, switchLocalePath, useSite, type Locale } from '@/lib/i18n';
import { whatsappLink } from '@/lib/contact';
import { cn } from '@/lib/utils';

function LanguageMenu({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) {
  const { locale, path, t } = useSite();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener('scroll', close);
    return () => window.removeEventListener('scroll', close);
  }, [open]);

  return (
    <div
      className={cn('relative', variant === 'mobile' && 'w-full')}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={t.common.language}
        className={cn(
          'inline-flex h-10 items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 text-[13px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand',
          variant === 'mobile' && 'h-11 w-full justify-between px-4',
        )}
      >
        <span className="inline-flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand" aria-hidden="true" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
            <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          {localeMeta[locale].short}
        </span>
        <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>

      {open ? (
        <div
          role="menu"
          className={cn(
            'absolute z-50 mt-2 overflow-hidden rounded-xl border border-line bg-surface p-1.5 shadow-[0_24px_64px_-24px_rgba(11,46,42,0.28)]',
            variant === 'desktop' ? 'right-0 w-56' : 'left-0 right-0 w-full',
          )}
        >
          {LOCALES.map((code: Locale) => (
            <Link
              key={code}
              role="menuitem"
              to={`${switchLocalePath(location.pathname, code)}${location.hash}`}
              onClick={() => setOpen(false)}
              aria-current={code === locale ? 'true' : undefined}
              className={cn(
                'flex items-center justify-between rounded-lg px-3 py-2.5 text-[14px] transition-colors',
                code === locale ? 'bg-sand font-semibold text-ink' : 'text-muted-foreground hover:bg-sand hover:text-ink',
              )}
            >
              {localeMeta[code].label}
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                {localeMeta[code].short}
              </span>
            </Link>
          ))}
        </div>
      ) : null}
      <span className="sr-only">{path('/')}</span>
    </div>
  );
}

const navItems = [
  { key: 'hospitals', to: '/hospitals' },
  { key: 'treatments', to: '/treatments' },
  { key: 'journey', to: '/journey' },
  { key: 'about', to: '/about' },
  { key: 'contact', to: '/contact' },
] as const;

export function SiteHeader() {
  const { t, path, locale } = useSite();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
      >
        {t.common.skip}
      </a>

      <header
        className={cn(
          'sticky top-0 z-40 border-b transition-colors duration-200',
          scrolled ? 'border-line bg-paper/95 backdrop-blur-md' : 'border-transparent bg-paper',
        )}
      >
        <Container>
          <div className="flex h-[72px] items-center justify-between gap-4">
            <Logo />

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {navItems.map((item) => (
                <NavLink
                  key={item.key}
                  to={path(item.to)}
                  className={({ isActive }) =>
                    cn(
                      'relative rounded-md px-3 py-2 text-[14px] font-medium transition-colors',
                      isActive ? 'text-brand' : 'text-ink/75 hover:text-brand',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {t.nav[item.key]}
                      {isActive ? (
                        <span className="absolute inset-x-3 -bottom-[3px] h-[2px] rounded-full bg-azure" aria-hidden="true" />
                      ) : null}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <LanguageMenu />
              <Link
                to={path('/contact')}
                className="hidden h-10 items-center gap-2 rounded-full bg-azure px-4 text-[13.5px] font-semibold text-white transition-colors hover:bg-azure/90 sm:inline-flex"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {t.common.consultShort}
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-brand hover:text-brand lg:hidden"
                aria-label={t.common.menu}
                aria-expanded={mobileOpen}
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-paper shadow-2xl">
            <div className="flex h-[72px] items-center justify-between border-b border-line px-5">
              <Logo />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink"
                aria-label={t.common.close}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
              <Link
                to={path('/')}
                className="block border-b border-line/70 py-3.5 font-display text-[21px] text-ink"
              >
                {t.nav.home}
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={path(item.to)}
                  className="block border-b border-line/70 py-3.5 font-display text-[21px] text-ink"
                >
                  {t.nav[item.key]}
                </Link>
              ))}
              <div className="mt-6">
                <LanguageMenu variant="mobile" />
              </div>
            </nav>

            <div className="border-t border-line p-5">
              <a
                href={whatsappLink(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-azure text-[15px] font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {t.common.consult}
              </a>
              <p className="mt-3 text-center text-[12px] text-muted-foreground">{t.common.replyTime}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}