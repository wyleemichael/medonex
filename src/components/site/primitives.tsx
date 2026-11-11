import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Container({
  children,
  className,
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div className={cn('mx-auto w-full px-5 sm:px-8', wide ? 'max-w-[1320px]' : 'max-w-[1240px]', className)}>
      {children}
    </div>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  action?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  action,
  align = 'left',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-6',
        align === 'center' ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between',
        className,
      )}
    >
      <div className={cn('max-w-2xl', align === 'center' && 'mx-auto')}>
        {eyebrow ? (
          <p className={cn('eyebrow mb-3', tone === 'dark' && 'text-azure')}>{eyebrow}</p>
        ) : null}
        <h2 className={cn('display-l text-balance', tone === 'dark' ? 'text-paper' : 'text-ink')}>{title}</h2>
        {lede ? (
          <p className={cn('body-lede mt-4', tone === 'dark' && 'text-paper/70')}>{lede}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function Eyebrow({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' }) {
  return <p className={cn('eyebrow', tone === 'dark' && 'text-azure')}>{children}</p>;
}

export function Hairline({ className }: { className?: string }) {
  return <div className={cn('hairline', className)} aria-hidden="true" />;
}