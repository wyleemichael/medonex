import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Container } from './primitives';
import { Logo } from './Logo';
import { useSite } from '@/lib/i18n';
import { CONTACT, mailtoLink, whatsappLink } from '@/lib/contact';
import { hospitalsMeta } from '@/content/site';

export function SiteFooter() {
  const { t, path, locale } = useSite();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-paper">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo inverted />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-paper/60">{t.footer.tagline}</p>
            <div className="mt-6 space-y-2.5 text-[13.5px] text-paper/75">
              <a
                href={whatsappLink(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-paper"
              >
                <MessageCircle className="h-4 w-4 text-azure" aria-hidden="true" />
                {CONTACT.phoneDisplay}
              </a>
              <a href={mailtoLink()} className="flex items-center gap-2.5 hover:text-paper">
                <Mail className="h-4 w-4 text-azure" aria-hidden="true" />
                {CONTACT.email}
              </a>
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-azure" aria-hidden="true" />
                {CONTACT.addressLine}
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-azure" aria-hidden="true" />
                {CONTACT.hours}
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/45">{t.footer.explore}</h3>
            <ul className="mt-4 space-y-2.5 text-[14px] text-paper/75">
              {[
                { to: '/', label: t.nav.home },
                { to: '/treatments', label: t.nav.treatments },
                { to: '/journey', label: t.nav.journey },
                { to: '/about', label: t.nav.about },
                { to: '/contact', label: t.nav.contact },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={path(item.to)} className="transition-colors hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/45">{t.footer.hospitals}</h3>
            <ul className="mt-4 space-y-2.5 text-[14px] text-paper/75">
              {hospitalsMeta.slice(0, 5).map((hospital) => (
                <li key={hospital.slug}>
                  <Link to={path(`/hospitals/${hospital.slug}`)} className="transition-colors hover:text-paper">
                    {hospital.name.replace(' Specialist Hospital', '')}
                  </Link>
                </li>
              ))}
              <li>
                <Link to={path('/hospitals')} className="font-semibold text-azure hover:text-azure/80">
                  {t.common.backToHospitals} →
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/45">
              {t.footer.contactTitle}
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed text-paper/75">{t.contact.lede}</p>
            <Link
              to={path('/contact')}
              className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-azure px-5 text-[13.5px] font-semibold text-white transition-colors hover:bg-azure/90"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {t.common.consultShort}
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/10 pt-6">
          <p className="max-w-3xl text-[12px] leading-relaxed text-paper/45">{t.footer.disclaimer}</p>
          <div className="mt-5 flex flex-col gap-2 text-[12px] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} MedOneX. {t.footer.rights}
            </p>
            <p>{t.common.languages}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}