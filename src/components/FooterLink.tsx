import type { ReactNode } from 'react';

type FooterLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
};

export function FooterLink({ href, children, external }: FooterLinkProps) {
  return (
    <span className="footer-link">
      <a
        href={href}
        className="inline-block focus:outline-none focus:ring-2 focus:ring-white font-sans text-base text-white"
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
      </a>
    </span>
  );
}
