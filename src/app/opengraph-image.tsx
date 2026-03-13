import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dreamlytix - School Management Software Company India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #0891b2 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.1,
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-2px",
            }}
          >
            Dreamlytix
          </div>

          <div
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.85)",
              maxWidth: "700px",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            School Management Software | Website & App Development
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            {["Websites", "Admin Panels", "Mobile Apps", "AI Solutions"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "20px",
                    background: "rgba(255,255,255,0.15)",
                    color: "white",
                    fontSize: "16px",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>

          <div
            style={{
              marginTop: "24px",
              fontSize: "18px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            dreamlytix.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
