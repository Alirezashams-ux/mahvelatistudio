"use client";

import { useState } from "react";

export function ModelRealityLab() {
  const [disturbance, setDisturbance] = useState(0);

  const gap = Math.abs(disturbance);

  const realityPath =
    `M 70 260 C 180 80, 335 ${120 + disturbance}, ` +
    `465 ${210 + disturbance * 0.45} S 650 ${160 - disturbance * 0.25}, 730 90`;

  return (
    <section className="model-reality-lab">
      <div className="lab-header">
        <div>
          <span>MODEL–REALITY GAP</span>
          <h2>A good model can still make a bad decision.</h2>
        </div>

        <div className="live-indicator">
          <span />
          INTERACTIVE
        </div>
      </div>

      <p className="lab-copy">
        Move across the field. The model remains fixed while the physical
        trajectory responds to disturbance.
      </p>

      <div
        className="lab-stage"
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();

          const y =
            (event.clientY - rect.top) /
            rect.height;

          setDisturbance(
            Math.round((y - 0.5) * 180)
          );
        }}
        onPointerLeave={() => setDisturbance(0)}
      >
        <svg
          viewBox="0 0 800 340"
          role="img"
          aria-label="Model and physical reality trajectories"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                className="lab-grid-line"
              />
            </pattern>
          </defs>

          <rect
            width="800"
            height="340"
            fill="url(#grid)"
          />

          <line
            x1="620"
            x2="620"
            y1="20"
            y2="320"
            className="decision-boundary"
          />

          <text
            x="640"
            y="42"
            className="boundary-label"
          >
            DECISION BOUNDARY
          </text>

          <path
            d="M 70 260 C 180 80, 335 120, 465 210 S 650 160, 730 90"
            className="model-path"
          />

          <path
            d={realityPath}
            className="reality-path"
          />

          <circle
            cx="70"
            cy="260"
            r="6"
            className="state-node"
          />
        </svg>
      </div>

      <div className="instrument-row">
        <div>
          <span>STATE GAP</span>
          <strong>{(gap / 100).toFixed(2)}</strong>
        </div>

        <div>
          <span>MODEL</span>
          <strong>nominal</strong>
        </div>

        <div>
          <span>PHYSICAL SYSTEM</span>
          <strong>
            {gap > 55 ? "disturbed" : "stable"}
          </strong>
        </div>

        <div>
          <span>DECISION</span>
          <strong>
            {gap > 75 ? "fragile" : "stable"}
          </strong>
        </div>
      </div>
    </section>
  );
}
