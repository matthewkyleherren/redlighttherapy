import Link from 'next/link';

type ArrowButtonProps = {
  href: string;
  children: string;
  variant?: 'default' | 'glass';
  size?: 'sm' | 'md';
  className?: string;
  id?: string;
};

function ArrowIcon() {
  return (
    <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowButton({ href, children, variant = 'default', size = 'md', className = '', id }: ArrowButtonProps) {
  const btnClass = `btn-component btn-${variant} button-${size} ${className}`.trim();

  if (variant === 'glass') {
    return (
      <div className={`glass btn-wrapper ${className}`} id={id}>
        <Link href={href} className={`btn-component btn-glass button-${size}`}>
          <span className="btn-title">{children}</span>
          <span className="btn-icon btn-icon-right">
            <ArrowIcon />
          </span>
        </Link>
      </div>
    );
  }

  return (
    <Link href={href} className={btnClass} id={id}>
      <span className="btn-title">{children}</span>
      <span className="btn-icon btn-icon-right">
        <ArrowIcon />
      </span>
    </Link>
  );
}
