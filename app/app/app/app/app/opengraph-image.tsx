import { ImageResponse } from "next/og";

export const alt = "Vitrine — Tes clients n'ont plus besoin de t'appeler";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f6f1e7",
          color: "#1c1b19",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 800 }}>Vitrine</div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, maxWidth: 1000 }}>
          Tes clients n&apos;ont plus besoin de t&apos;appeler pour savoir où ça en est.
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          {[
            ["Reçu", "#6b665c"],
            ["En cours", "#e4572e"],
            ["Prêt", "#1c1b19"],
            ["Livré", "#2f6b4f"],
          ].map(([t, c]) => (
            <div
              key={t}
              style={{
                border: `4px solid ${c}`,
                color: c,
                borderRadius: 10,
                padding: "8px 22px",
                fontSize: 30,
                fontWeight: 800,
                textTransform: "uppercase",
                transform: "rotate(-4deg)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
