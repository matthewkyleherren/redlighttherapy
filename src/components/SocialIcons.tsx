const socialIconClass =
  'text-white opacity-40 hover:opacity-100 transition-opacity duration-[735ms] [transition-timing-function:cubic-bezier(0.625,0.05,0,1)]';

export function FooterSocialIcons() {
  return (
    <div className="flex gap-x-4 items-center">
      <a href="https://instagram.com/sequeloriginals" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialIconClass}>
        <svg width="1.07em" height="1em" className="w-4 h-4" viewBox="0 0 17 16">
          <g fill="currentColor">
            <path d="M8.017 1.446H11.3c.772 0 1.159.193 1.448.289.387.193.677.29.966.578.29.29.483.579.58.964.096.29.193.675.29 1.446v6.554c0 .771-.194 1.157-.29 1.446-.193.385-.29.675-.58.964s-.58.482-.966.578c-.29.096-.676.193-1.448.29H4.733c-.773 0-1.16-.194-1.449-.29-.386-.193-.676-.29-.966-.578-.29-.29-.483-.579-.58-.964-.096-.29-.193-.675-.29-1.446V4.723c0-.771.194-1.157.29-1.446.194-.385.29-.675.58-.964s.58-.482.966-.578c.29-.096.676-.193 1.449-.29zm0-1.446H4.733A4.9 4.9 0 0 0 2.8.386a4.2 4.2 0 0 0-1.449.963c-.483.482-.676.868-.966 1.446-.193.482-.29 1.06-.386 1.928v6.554c0 .868.193 1.446.386 1.928.194.482.483.964.966 1.446s.87.674 1.449.963c.483.193 1.062.29 1.932.386H11.3c.869 0 1.448-.193 1.931-.386a4.2 4.2 0 0 0 1.45-.963c.482-.482.675-.868.965-1.446.193-.482.29-1.06.386-1.928V4.723a4.8 4.8 0 0 0-.386-1.928 4.2 4.2 0 0 0-.966-1.446c-.483-.482-.87-.674-1.449-.963C12.75.193 12.17.096 11.301 0z" />
            <path d="M8.017 3.855A4.12 4.12 0 0 0 3.863 8a4.12 4.12 0 0 0 4.154 4.145A4.12 4.12 0 0 0 12.17 8a4.12 4.12 0 0 0-4.153-4.145m0 6.844A2.697 2.697 0 0 1 5.312 8a2.697 2.697 0 0 1 2.705-2.699A2.697 2.697 0 0 1 10.72 8c0 1.446-1.255 2.699-2.704 2.699m4.251-5.976a.965.965 0 1 0 .002-1.93.965.965 0 0 0-.002 1.93" />
          </g>
        </svg>
      </a>
      <a href="https://www.tiktok.com/@sequeloriginals" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={socialIconClass}>
        <svg width="0.88em" height="1em" className="w-4 h-4" viewBox="0 0 14 16">
          <path fill="currentColor" d="M10.083 0H7.667v10.933c0 1.2-.967 2.178-2.167 2.178s-2.167-.978-2.167-2.178c0-1.177.945-2.133 2.1-2.177V6.31a4.61 4.61 0 0 0-4.516 4.623c0 2.556 2.06 4.623 4.56 4.623s4.606-2.09 4.606-4.623v-5.6a5.74 5.74 0 0 0 3.278 1.09V3.977C11.494 3.91 10.083 2.133 10.083 0" />
        </svg>
      </a>
      <a href="https://www.youtube.com/@sequeloriginals" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={socialIconClass}>
        <svg width="1.38em" height="1em" className="w-4 h-4" viewBox="0 0 22 16">
          <path fill="currentColor" d="M21.582 2.51a2.68 2.68 0 0 0-1.885-1.9C17.991.167 11.2.167 11.2.167s-6.791 0-8.497.442A2.68 2.68 0 0 0 .818 2.51C.38 4.231.38 7.833.38 7.833s0 3.603.438 5.323a2.68 2.68 0 0 0 1.885 1.902c1.706.442 8.497.442 8.497.442s6.791 0 8.497-.442a2.68 2.68 0 0 0 1.885-1.902c.438-1.72.438-5.323.438-5.323s0-3.602-.438-5.323M9.03 11.208v-6.75l5.623 3.375z" />
        </svg>
      </a>
      <a href="https://x.com/joinsequel" target="_blank" rel="noopener noreferrer" aria-label="X" className={socialIconClass}>
        <svg width="1em" height="1em" className="w-4 h-4" viewBox="0 0 13 13">
          <path fill="currentColor" d="M7.484 5.442 12.165 0h-1.11L6.992 4.725 3.745 0H0l4.91 7.145L0 12.851h1.11l4.292-4.99 3.429 4.99h3.744zM1.509.835h1.704l7.843 11.22H9.352z" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/company/sequel-yourlegacymade" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={socialIconClass}>
        <svg width="1em" height="1em" className="w-4 h-4" viewBox="0 0 14 14">
          <path fill="currentColor" d="M3.658 13.385h-2.8V4.959h2.8zm-1.4-9.577H2.24c-.94 0-1.548-.647-1.548-1.456 0-.826.626-1.456 1.584-1.456s1.548.63 1.566 1.456c0 .809-.607 1.456-1.584 1.456m11.5 9.577h-2.801V8.877c0-1.133-.406-1.906-1.42-1.906-.773 0-1.234.522-1.436 1.025-.074.18-.092.431-.092.683v4.706h-2.8s.036-7.636 0-8.426h2.8v1.193c.372-.575 1.038-1.391 2.524-1.391 1.842 0 3.224 1.204 3.224 3.792z" />
        </svg>
      </a>
    </div>
  );
}
