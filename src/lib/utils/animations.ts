export function isEven(index: number): boolean {
  return index % 2 === 0;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(value, max));
}

export function interpolate(start: number, end: number, progress: number): number {
  return start + (end - start) * progress;
}
