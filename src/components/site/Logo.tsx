import { Link } from 'react-router-dom';
import { useSite } from '@/lib/i18n';
import { cn } from '@/lib/utils';

/**
 * Official MedOneX lockup (cross + aircraft mark, wordmark and tagline).
 * Two pre-traced variants ship in /public/brand: colour and knockout white
 * for the dark footer.
 */
export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  const { path } = useSite();

  return (
    <Link
      to={path('/')}
      className={cn('group inline-flex shrink-0 items-center', className)}
      aria-label="MedOneX — Health Journeys Made Easy"
    >
      <img
        src={inverted ? '/brand/medonex-logo-light.png' : '/brand/medonex-logo.png'}
        alt="MedOneX"
        width={900}
        height={278}
        className={cn(
          'w-auto transition-opacity group-hover:opacity-85',
          inverted ? 'h-[30px] md:h-[34px]' : 'h-[34px] md:h-[38px]',
        )}
      />
    </Link>
  );
}