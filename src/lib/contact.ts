import type { Locale } from '@/lib/i18n';

export const CONTACT = {
  whatsappNumber: '60199620261',
  phoneDisplay: '+60 19-962 0261',
  email: 'rachele@med-onex.co',
  addressLine: 'Jalan Ampang, Kuala Lumpur, Malaysia',
  hours: 'Mon–Fri 09:00–19:00 (MYT)',
} as const;

const greetings: Record<Locale, string> = {
  en: 'Hello MedOneX, I would like a free consultation about treatment in Kuala Lumpur.',
  id: 'Halo MedOneX, saya ingin konsultasi gratis mengenai pengobatan di Kuala Lumpur.',
  zh: '您好 MedOneX，我想免费咨询在吉隆坡就医的安排。',
};

/** Builds a wa.me link with a locale-appropriate opening message. */
export function whatsappLink(locale: Locale, message?: string): string {
  const text = message?.trim() ? message : greetings[locale];
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function mailtoLink(subject?: string): string {
  const base = `mailto:${CONTACT.email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}
