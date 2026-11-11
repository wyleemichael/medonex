import { useState, type FormEvent } from 'react';
import { ArrowRight, Check, Clock, Copy, Mail, MapPin, MessageCircle, Pencil, Send } from 'lucide-react';
import { PageHero, Crumbs } from '@/components/site/cards';
import { Container } from '@/components/site/primitives';
import { useSite } from '@/lib/i18n';
import { CONTACT, mailtoLink, whatsappLink } from '@/lib/contact';
import { hospitalsMeta, treatmentsMeta } from '@/content/site';
import { cn } from '@/lib/utils';

type Fields = {
  name: string;
  contact: string;
  country: string;
  treatment: string;
  hospital: string;
  message: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s()-]{7,20}$/;

export default function Contact() {
  const { t, locale } = useSite();
  const [fields, setFields] = useState<Fields>({
    name: '',
    contact: '',
    country: '',
    treatment: '',
    hospital: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [prepared, setPrepared] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!fields.name.trim()) next.name = t.contact.errors.required;
    const contact = fields.contact.trim();
    if (!contact) next.contact = t.contact.errors.required;
    else if (!EMAIL_RE.test(contact) && !PHONE_RE.test(contact)) next.contact = t.contact.errors.contact;
    if (!fields.message.trim()) next.message = t.contact.errors.required;
    if (!fields.consent) next.consent = t.contact.errors.consent;
    return next;
  };

  const composeMessage = (): string => {
    const hospitalLabel = fields.hospital || t.contact.fields.hospitalAny;
    return [
      `${t.contact.formTitle} — MedOneX`,
      '',
      `${t.contact.fields.name}: ${fields.name.trim()}`,
      `${t.contact.fields.contact}: ${fields.contact.trim()}`,
      fields.country.trim() ? `${t.contact.fields.country}: ${fields.country.trim()}` : '',
      fields.treatment ? `${t.contact.fields.treatment}: ${fields.treatment}` : '',
      `${t.contact.fields.hospital}: ${hospitalLabel}`,
      '',
      `${t.contact.fields.message}:`,
      fields.message.trim(),
    ]
      .filter((line, index, arr) => !(line === '' && arr[index - 1] === ''))
      .join('\n');
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      document.getElementById(`field-${firstKey}`)?.focus();
      return;
    }
    setPrepared(composeMessage());
  };

  const copyMessage = async () => {
    if (!prepared) return;
    try {
      await navigator.clipboard.writeText(prepared);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  const inputClass = (key: keyof Fields) =>
    cn(
      'h-11 w-full rounded-[8px] border bg-surface px-3.5 text-[14px] text-ink placeholder:text-muted-foreground/70 transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-1 focus:ring-offset-paper',
      errors[key] ? 'border-azure' : 'border-line',
    );

  const labelClass = 'mb-1.5 block text-[12.5px] font-semibold text-ink/80';

  return (
    <>
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} lede={t.contact.lede}>
        <Crumbs items={[{ label: t.nav.home, to: '/' }, { label: t.nav.contact }]} />
      </PageHero>

      <section className="bg-paper py-12 md:py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            {/* ------------------------------------------------ Form */}
            <div className="md:col-span-7">
              <div className="rounded-[14px] border border-line bg-surface p-6 md:p-8">
                {prepared ? (
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-brand/10 text-brand">
                        <Check className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h2 className="font-display text-[24px] text-ink">{t.contact.successTitle}</h2>
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{t.contact.successBody}</p>

                    <pre className="mt-5 max-h-64 overflow-auto whitespace-pre-wrap rounded-[10px] border border-line bg-paper p-4 text-[12.5px] leading-relaxed text-ink/75">
                      {prepared}
                    </pre>

                    <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                      <a
                        href={whatsappLink(locale, prepared)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-azure px-5 text-[14px] font-semibold text-white transition-colors hover:bg-azure/90"
                      >
                        <Send className="h-4 w-4" aria-hidden="true" />
                        {t.contact.openWhatsApp}
                      </a>
                      <button
                        type="button"
                        onClick={copyMessage}
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/20 px-5 text-[14px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                      >
                        {copied ? <Check className="h-4 w-4 text-brand" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                        {copied ? t.contact.copied : t.contact.copyMessage}
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setPrepared(null);
                        setCopied(false);
                      }}
                      className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand hover:underline"
                    >
                      <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
                      {t.contact.again}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate>
                    <h2 className="font-display text-[24px] text-ink">{t.contact.formTitle}</h2>
                    <p className="mt-1.5 text-[13px] text-muted-foreground">{t.contact.formNote}</p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="field-name" className={labelClass}>
                          {t.contact.fields.name} <span className="text-azure">*</span>
                        </label>
                        <input
                          id="field-name"
                          name="name"
                          value={fields.name}
                          onChange={(e) => set('name', e.target.value)}
                          placeholder={t.contact.fields.namePlaceholder}
                          autoComplete="name"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'error-name' : undefined}
                          className={inputClass('name')}
                        />
                        {errors.name ? (
                          <p id="error-name" className="mt-1.5 text-[12px] font-medium text-azure">
                            {errors.name}
                          </p>
                        ) : null}
                      </div>

                      <div>
                        <label htmlFor="field-contact" className={labelClass}>
                          {t.contact.fields.contact} <span className="text-azure">*</span>
                        </label>
                        <input
                          id="field-contact"
                          name="contact"
                          value={fields.contact}
                          onChange={(e) => set('contact', e.target.value)}
                          placeholder={t.contact.fields.contactPlaceholder}
                          autoComplete="tel"
                          aria-invalid={Boolean(errors.contact)}
                          aria-describedby={errors.contact ? 'error-contact' : undefined}
                          className={inputClass('contact')}
                        />
                        {errors.contact ? (
                          <p id="error-contact" className="mt-1.5 text-[12px] font-medium text-azure">
                            {errors.contact}
                          </p>
                        ) : null}
                      </div>

                      <div>
                        <label htmlFor="field-country" className={labelClass}>
                          {t.contact.fields.country}
                        </label>
                        <input
                          id="field-country"
                          name="country"
                          value={fields.country}
                          onChange={(e) => set('country', e.target.value)}
                          placeholder={t.contact.fields.countryPlaceholder}
                          autoComplete="country-name"
                          className={inputClass('country')}
                        />
                      </div>

                      <div>
                        <label htmlFor="field-treatment" className={labelClass}>
                          {t.contact.fields.treatment}
                        </label>
                        <select
                          id="field-treatment"
                          name="treatment"
                          value={fields.treatment}
                          onChange={(e) => set('treatment', e.target.value)}
                          className={cn(inputClass('treatment'), 'appearance-none pr-9')}
                        >
                          <option value="">{t.contact.fields.treatmentPlaceholder}</option>
                          {treatmentsMeta.map((item) => (
                            <option key={item.slug} value={t.treatments[item.slug].name}>
                              {t.treatments[item.slug].name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="field-hospital" className={labelClass}>
                          {t.contact.fields.hospital}
                        </label>
                        <select
                          id="field-hospital"
                          name="hospital"
                          value={fields.hospital}
                          onChange={(e) => set('hospital', e.target.value)}
                          className={cn(inputClass('hospital'), 'appearance-none pr-9')}
                        >
                          <option value="">{t.contact.fields.hospitalAny}</option>
                          {hospitalsMeta.map((hospital) => (
                            <option key={hospital.slug} value={hospital.name}>
                              {hospital.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="field-message" className={labelClass}>
                          {t.contact.fields.message} <span className="text-azure">*</span>
                        </label>
                        <textarea
                          id="field-message"
                          name="message"
                          rows={5}
                          value={fields.message}
                          onChange={(e) => set('message', e.target.value)}
                          placeholder={t.contact.fields.messagePlaceholder}
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={errors.message ? 'error-message' : undefined}
                          className={cn(
                            'w-full resize-y rounded-[8px] border bg-surface px-3.5 py-3 text-[14px] leading-relaxed text-ink placeholder:text-muted-foreground/70 transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-1 focus:ring-offset-paper',
                            errors.message ? 'border-azure' : 'border-line',
                          )}
                        />
                        {errors.message ? (
                          <p id="error-message" className="mt-1.5 text-[12px] font-medium text-azure">
                            {errors.message}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="mt-5">
                      <label htmlFor="field-consent" className="flex items-start gap-3 text-[12.5px] leading-relaxed text-ink/75">
                        <input
                          id="field-consent"
                          name="consent"
                          type="checkbox"
                          checked={fields.consent}
                          onChange={(e) => set('consent', e.target.checked)}
                          aria-invalid={Boolean(errors.consent)}
                          aria-describedby={errors.consent ? 'error-consent' : undefined}
                          className="mt-[3px] h-4 w-4 shrink-0 rounded-[3px] border-line accent-brand"
                        />
                        {t.contact.fields.consent}
                      </label>
                      {errors.consent ? (
                        <p id="error-consent" className="mt-1.5 text-[12px] font-medium text-azure">
                          {errors.consent}
                        </p>
                      ) : null}
                    </div>

                    <button
                      type="submit"
                      className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-azure px-6 text-[14.5px] font-semibold text-white transition-colors hover:bg-azure/90 sm:w-auto"
                    >
                      {t.contact.submit}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>

                    <p className="mt-3 text-[11.5px] leading-relaxed text-muted-foreground">{t.contact.privacyNote}</p>
                  </form>
                )}
              </div>
            </div>

            {/* --------------------------------------------- Sidebar */}
            <aside className="md:col-span-5">
              <div className="rounded-[14px] bg-ink p-6 text-paper">
                <h2 className="font-display text-[20px] text-paper">{t.contact.channelsTitle}</h2>
                <div className="mt-4 space-y-3">
                  <a
                    href={whatsappLink(locale)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-[10px] bg-paper/8 px-4 py-3 transition-colors hover:bg-paper/15"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 text-azure" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block text-[10.5px] uppercase tracking-[0.13em] text-paper/45">WhatsApp</span>
                      <span className="block text-[14px] font-semibold">{CONTACT.phoneDisplay}</span>
                    </span>
                  </a>
                  <a
                    href={mailtoLink(t.contact.formTitle)}
                    className="flex items-center gap-3 rounded-[10px] bg-paper/8 px-4 py-3 transition-colors hover:bg-paper/15"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-azure" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block text-[10.5px] uppercase tracking-[0.13em] text-paper/45">Email</span>
                      <span className="block truncate text-[14px] font-semibold">{CONTACT.email}</span>
                    </span>
                  </a>
                  <div className="flex items-center gap-3 rounded-[10px] bg-paper/8 px-4 py-3">
                    <MapPin className="h-4 w-4 shrink-0 text-azure" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block text-[10.5px] uppercase tracking-[0.13em] text-paper/45">
                        {t.common.location}
                      </span>
                      <span className="block text-[14px] font-semibold">{CONTACT.addressLine}</span>
                    </span>
                  </div>
                </div>

                <div className="mt-6 border-t border-paper/10 pt-5">
                  <h3 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-paper/50">
                    <Clock className="h-3.5 w-3.5 text-azure" aria-hidden="true" />
                    {t.contact.hoursTitle}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-[12.5px] text-paper/70">
                    {t.contact.hours.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 rounded-[14px] border border-line bg-surface p-6">
                <h2 className="font-display text-[19px] text-ink">{t.contact.nextTitle}</h2>
                <ol className="mt-4 space-y-3">
                  {t.contact.next.map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sand text-[11px] font-bold text-brand">
                        {index + 1}
                      </span>
                      <span className="text-[13px] leading-relaxed text-ink/75">{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 border-t border-line pt-4 text-[12px] text-muted-foreground">
                  {t.contact.alternative}
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
