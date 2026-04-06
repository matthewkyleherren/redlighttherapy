'use client';

import { useState, useCallback } from 'react';

export function ShareSection({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://sequel.co/stories/${slug}`;

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const input = document.querySelector<HTMLInputElement>('.shareInput');
      if (input) {
        input.select();
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  }, [url]);

  return (
    <div className="shareSection">
      <h2 className="shareTitle">Share this story</h2>
      <div className="glass shareInputContainer">
        <input
          type="text"
          className="shareInput"
          value={url}
          readOnly
          aria-label="Story URL"
        />
        <button
          type="button"
          className={`copyButton${copied ? ' copied' : ''}`}
          onClick={handleCopy}
        >
          <span className="copyButtonText">{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
    </div>
  );
}
