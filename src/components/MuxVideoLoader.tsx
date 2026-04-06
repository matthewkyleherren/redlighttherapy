'use client';

import { useEffect } from 'react';

let loaded = false;

export function MuxVideoLoader() {
  useEffect(() => {
    if (loaded) return;
    loaded = true;
    import('@mux/mux-video');
  }, []);
  return null;
}
