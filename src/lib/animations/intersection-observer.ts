export type OnEnterCallback = () => void;

export interface IntersectionOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function observeIntersection(
  element: Element,
  onEnter: OnEnterCallback,
  options?: IntersectionOptions,
): () => void {
  let hasTriggered = false;
  const once = options?.once ?? true;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && (!once || !hasTriggered)) {
          onEnter();
          hasTriggered = true;
          if (once) {
            observer.disconnect();
          }
        }
      });
    },
    {
      threshold: options?.threshold ?? 0.5,
      rootMargin: options?.rootMargin,
    },
  );

  observer.observe(element);
  return () => observer.disconnect();
}

export function setupEntranceObserver(
  element: HTMLElement,
  playAnimation: () => void,
  getTarget?: () => Element | null,
  options?: Omit<IntersectionOptions, 'once'>,
): () => void {
  const target = getTarget?.() ?? element;
  if (!target) {
    return () => {};
  }
  return observeIntersection(target, playAnimation, { ...options, once: true });
}
