"use client";

import { useEffect, useRef } from "react";
import { interests } from "@/data/interests";
import { tr } from "@/i18n/config";
import { useI18n } from "@/i18n/client";

// Chaque orbite est une ellipse (rayons en % de la taille du bloc),
// inclinée d'un angle différent, comme le symbole d'un atome.
const RX = 46;
const RY = 17;
const ORBITS = [
  { tilt: 0, period: 11, phase: 0 },
  { tilt: 60, period: 14, phase: 2.2 },
  { tilt: -60, period: 17, phase: 4.4 },
];

function positionOn(orbitIndex: number, t: number) {
  const { tilt } = ORBITS[orbitIndex];
  const rad = (tilt * Math.PI) / 180;
  const ex = RX * Math.cos(t);
  const ey = RY * Math.sin(t);
  const x = 50 + ex * Math.cos(rad) - ey * Math.sin(rad);
  const y = 50 + ex * Math.sin(rad) + ey * Math.cos(rad);
  // sin(t) > 0 : l'électron passe « devant » le noyau
  const depth = (Math.sin(t) + 1) / 2;
  return { x, y, depth };
}

function applyPosition(el: HTMLElement, orbitIndex: number, t: number) {
  const { x, y, depth } = positionOn(orbitIndex, t);
  el.style.left = `${x.toFixed(2)}%`;
  el.style.top = `${y.toFixed(2)}%`;
  el.style.transform = `translate(-50%, -50%) scale(${(0.8 + depth * 0.25).toFixed(3)})`;
  el.style.opacity = (0.55 + depth * 0.45).toFixed(3);
  el.style.zIndex = depth > 0.5 ? "30" : "10";
}

export default function InterestsAtom() {
  const { locale, t } = useI18n();
  const electrons = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const place = (seconds: number) =>
      electrons.current.forEach((el, i) => {
        if (!el) return;
        const { period, phase } = ORBITS[i];
        applyPosition(el, i, phase + (seconds / period) * Math.PI * 2);
      });

    // Animations réduites : électrons immobiles, déjà bien placés.
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      place(0);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      place((now - start) / 1000);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        role="img"
        aria-label={`${t.hero.interests} : ${interests.map((i) => tr(i.label, locale)).join(", ")}`}
        className="relative aspect-square w-full"
      >
        {/* Orbites */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full overflow-visible text-accent"
          aria-hidden="true"
        >
          {ORBITS.map((orbit) => (
            <ellipse
              key={orbit.tilt}
              cx="50"
              cy="50"
              rx={RX}
              ry={RY}
              transform={`rotate(${orbit.tilt} 50 50)`}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="0.4"
            />
          ))}
        </svg>

        {/* Noyau */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 animate-ping rounded-full bg-accent/20 [animation-duration:3s] motion-reduce:animate-none" />
          <div className="absolute -inset-6 rounded-full bg-accent/20 blur-2xl" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-accent text-3xl font-bold text-on-accent shadow-2xl shadow-accent/40 sm:h-24 sm:w-24">
            S
          </div>
        </div>

        {/* Électrons = centres d'intérêt */}
        {interests.map(({ label, icon: Icon }, i) => {
          const initial = positionOn(i, ORBITS[i].phase);
          return (
            <div
              key={label.fr}
              ref={(el) => {
                electrons.current[i] = el;
              }}
              title={tr(label, locale)}
              className="absolute will-change-transform"
              style={{
                left: `${initial.x.toFixed(2)}%`,
                top: `${initial.y.toFixed(2)}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-card text-accent shadow-lg shadow-accent/20 sm:h-16 sm:w-16">
                <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Légende */}
      <ul className="mt-6 flex flex-wrap justify-center gap-3">
        {interests.map(({ label, icon: Icon }) => (
          <li
            key={label.fr}
            className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-muted"
          >
            <Icon size={16} className="text-accent" aria-hidden="true" />
            {tr(label, locale)}
          </li>
        ))}
      </ul>
    </div>
  );
}
