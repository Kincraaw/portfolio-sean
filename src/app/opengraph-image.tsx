import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { dictionaries } from "@/i18n/dictionaries";

// Image d'aperçu affichée quand le lien du site est partagé
// (LinkedIn, Discord, WhatsApp, X…). Une seule image, en français.
const t = dictionaries.fr;
export const alt = `${site.fullName} — ${t.meta.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stack = ["React", "Next.js", "TypeScript", "PHP", "SQL"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#080b12",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(6,182,212,0.22), transparent 45%), radial-gradient(circle at 90% 90%, rgba(124,58,237,0.25), transparent 45%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            alignSelf: "flex-start",
            padding: "12px 24px",
            borderRadius: 999,
            border: "2px solid rgba(34,211,238,0.35)",
            color: "#67e8f9",
            fontSize: 24,
          }}
        >
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#4ade80" }} />
          {t.hero.availability}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 700, lineHeight: 1.05 }}>
            {site.fullName}
            <span style={{ color: "#22d3ee" }}>.</span>
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 44, color: "#d1d5db" }}>
            {t.meta.role}
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {stack.map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                fontSize: 26,
                color: "#d1d5db",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
