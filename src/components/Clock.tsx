'use client';

import { useEffect, useRef } from 'react';

type ClockProps = {
  timezone: string;
  city: string;
  country: string;
  ariaLabel: string;
};

export function Clock({ timezone, city, country, ariaLabel }: ClockProps) {
  const hourRef = useRef<SVGLineElement>(null);
  const minuteRef = useRef<SVGLineElement>(null);
  const secondRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    });

    function syncHands() {
      const parts = formatter.formatToParts(new Date());
      const h = parseInt(parts.find((t) => t.type === 'hour')?.value || '0', 10);
      const m = parseInt(parts.find((t) => t.type === 'minute')?.value || '0', 10);
      const s = parseInt(parts.find((t) => t.type === 'second')?.value || '0', 10);

      if (secondRef.current) secondRef.current.style.animationDelay = `-${s}s`;
      if (minuteRef.current) minuteRef.current.style.animationDelay = `-${m * 60 + s}s`;
      if (hourRef.current) hourRef.current.style.animationDelay = `-${(h % 12) * 3600 + m * 60 + s}s`;
    }

    syncHands();

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') syncHands();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, [timezone]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col px-2">
        <svg viewBox="0 0 80 80" className="w-12 h-12" aria-label={ariaLabel}>
          <line
            ref={hourRef}
            x1="40" y1="40" x2="40" y2="13.34"
            stroke="#FFFAFA" strokeWidth="2.84" strokeLinecap="round"
            className="clock-hand-hour"
          />
          <line
            ref={minuteRef}
            x1="40" y1="40" x2="40" y2="2.2"
            stroke="#FFFAFA" strokeWidth="2.84" strokeLinecap="round"
            className="clock-hand-minute"
          />
          <line
            ref={secondRef}
            x1="40" y1="40" x2="40" y2="9.92"
            stroke="white" strokeWidth="1.14" strokeLinecap="round"
            className="clock-hand-second"
          />
          <circle cx="40" cy="40" r="5.8" fill="#0B0B0C" />
        </svg>
        <h3 className="text-white text-3xl font-light tracking-tight mt-5">{city}</h3>
        <p className="text-white/60 text-[10px] font-sans uppercase tracking-wide mt-1">{country}</p>
      </div>
      <div className="w-full h-px bg-white/20" />
    </div>
  );
}
