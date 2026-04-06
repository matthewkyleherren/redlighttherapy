'use client';

import { useEffect, useRef } from 'react';

export function ATPDiagram() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            svg.classList.add('atpAnimated');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={svgRef}
      className="atpDiagram"
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Diagram showing how red light triggers ATP production"
    >
      {/* Node 1: Photon */}
      <circle className="atpNode atpNode1" cx="70" cy="60" r="30" stroke="#C8392B" strokeWidth="1.5" />
      <text className="atpLabel atpLabel1" x="70" y="56" textAnchor="middle" fill="#C8392B" fontSize="11" fontWeight="500">Photon</text>
      <text className="atpSublabel atpSublabel1" x="70" y="72" textAnchor="middle" fill="#C8392B" fontSize="9" opacity="0.7">630–850nm</text>

      {/* Arrow 1→2 */}
      <path className="atpArrow atpArrow1" d="M100 60 L170 120" stroke="#F0EBE6" strokeWidth="1" strokeDasharray="4 4" />
      <polygon className="atpArrowHead atpArrowHead1" points="170,120 162,114 164,124" fill="#F0EBE6" />

      {/* Node 2: CCO absorbs */}
      <circle className="atpNode atpNode2" cx="200" cy="140" r="30" stroke="#F0EBE6" strokeWidth="1.5" />
      <text className="atpLabel atpLabel2" x="200" y="136" textAnchor="middle" fill="#F0EBE6" fontSize="11" fontWeight="500">CCO</text>
      <text className="atpSublabel atpSublabel2" x="200" y="152" textAnchor="middle" fill="#F0EBE6" fontSize="9" opacity="0.7">absorbs</text>

      {/* Arrow 2→3 */}
      <path className="atpArrow atpArrow2" d="M230 140 L290 200" stroke="#F0EBE6" strokeWidth="1" strokeDasharray="4 4" />
      <polygon className="atpArrowHead atpArrowHead2" points="290,200 282,194 284,204" fill="#F0EBE6" />

      {/* Node 3: ATP produced */}
      <circle className="atpNode atpNode3" cx="320" cy="220" r="30" stroke="#F0EBE6" strokeWidth="1.5" />
      <text className="atpLabel atpLabel3" x="320" y="216" textAnchor="middle" fill="#F0EBE6" fontSize="11" fontWeight="500">ATP</text>
      <text className="atpSublabel atpSublabel3" x="320" y="232" textAnchor="middle" fill="#F0EBE6" fontSize="9" opacity="0.7">produced</text>

      {/* Arrow 3→4 */}
      <path className="atpArrow atpArrow3" d="M320 250 L260 290" stroke="#F0EBE6" strokeWidth="1" strokeDasharray="4 4" />
      <polygon className="atpArrowHead atpArrowHead3" points="260,290 268,284 264,294" fill="#F0EBE6" />

      {/* Node 4: Repair cascade */}
      <circle className="atpNode atpNode4" cx="230" cy="290" r="30" stroke="#F0EBE6" strokeWidth="1.5" />
      <text className="atpLabel atpLabel4" x="230" y="286" textAnchor="middle" fill="#F0EBE6" fontSize="10" fontWeight="500">Repair</text>
      <text className="atpSublabel atpSublabel4" x="230" y="300" textAnchor="middle" fill="#F0EBE6" fontSize="9" opacity="0.7">cascade</text>
    </svg>
  );
}
