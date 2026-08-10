"use client";

import { useState } from "react";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

export function BeforeAfterSlider({ before, after, beforeAlt, afterAlt }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="comparison" style={{ "--position": `${position}%` } as React.CSSProperties}>
      <img className="comparison-image comparison-before" src={before} alt={beforeAlt} />
      <div className="comparison-after" aria-hidden="true">
        <img className="comparison-image" src={after} alt="" />
      </div>
      <span className="comparison-label comparison-label-before">Prima</span>
      <span className="comparison-label comparison-label-after">Dopo</span>
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
