import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/site/primitives';
import { useSite } from '@/lib/i18n';

export default function NotFound() {
  const { t, path } = useSite();

  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <div className="max-w-xl">
          <p className="eyebrow mb-4">404</p>
          <h1 className="display-l text-ink">{t.notFound.title}</h1>
          <p className="body-lede mt-4">{t.notFound.body}</p>
          <Link
            to={path('/')}
            className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-azure px-6 text-[14.5px] font-semibold text-white transition-colors hover:bg-azure/90"
          >
            {t.notFound.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
