import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Icône affichée quand on ajoute le site à l'écran d'accueil (iPhone, iPad).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#080b12",
          color: "#ffffff",
          fontSize: 110,
          fontWeight: 700,
        }}
      >
        S<span style={{ color: "#22d3ee" }}>.</span>
      </div>
    ),
    size,
  );
}
