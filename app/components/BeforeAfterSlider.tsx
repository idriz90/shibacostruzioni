"use client";

import { useState } from "react";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  initialPosition?: number;
  beforeLabel?: string;
  afterLabel?: string;
  imagePosition?: string;
};

export function BeforeAfterSlider({ before, after, beforeAlt, afterAlt, initialPosition = 50, beforeLabel = "Prima", afterLabel = "Dopo", imagePosition }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(initialPosition);

  return (
    <div className="comparison" style={{ "--position": `${position}%` } as React.CSSProperties}>
      <img className="comparison-image comparison-before" src={before} alt={beforeAlt} loading="lazy" decoding="async" style={imagePosition ? { objectPosition: imagePosition } : undefined} />
      <div className="comparison-after" aria-hidden="true">
        <img className="comparison-image" src={after} alt="" loading="lazy" decoding="async" style={imagePosition ? { objectPosition: imagePosition } : undefined} />
      </div>
      <span className="comparison-label comparison-label-before">{beforeLabel}</span>
      <span className="comparison-label comparison-label-after">{afterLabel}</span>
      <div className="comparison-divider" aria-hidden="true"><span>↔</span></div>
      <input
        className="comparison-range"
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={`Confronta ${beforeAlt} e ${afterAlt}`}
      />
    </div>
  );
}
