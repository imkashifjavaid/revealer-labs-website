import { ImageResponse } from "next/og";

export const alt = "Revealer Labs website development, automation and technical support";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#070b09",
          color: "#f2f7f3",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#4ade80",
            borderRadius: "999px",
            filter: "blur(90px)",
            height: "360px",
            opacity: 0.16,
            position: "absolute",
            right: "-90px",
            top: "-120px",
            width: "360px",
          }}
        />
        <div
          style={{
            border: "1px solid rgba(242,247,243,0.12)",
            borderRadius: "36px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: "58px 64px",
            width: "100%",
          }}
        >
          <div style={{ alignItems: "center", display: "flex", fontSize: 30, fontWeight: 700 }}>
            <span
              style={{
                alignItems: "center",
                background: "rgba(74,222,128,0.1)",
                border: "1px solid rgba(74,222,128,0.35)",
                borderRadius: "14px",
                color: "#4ade80",
                display: "flex",
                height: "54px",
                justifyContent: "center",
                marginRight: "18px",
                width: "54px",
              }}
            >
              R
            </span>
            Revealer Labs
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#a7b8ac", fontSize: 24, letterSpacing: "0.16em" }}>
              WEB · AUTOMATION · TECHNICAL SUPPORT
            </div>
            <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: "-0.045em", marginTop: "22px" }}>
              Websites and software.
            </div>
            <div style={{ color: "#4ade80", fontSize: 72, fontWeight: 700, letterSpacing: "-0.045em" }}>
              Built for real work.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
