"use client";

interface BastienAvatarProps {
  size?: number;
  animated?: boolean;
  showRing?: boolean;
}

export default function BastienAvatar({
  size = 80,
  animated = true,
  showRing = true,
}: BastienAvatarProps) {
  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {showRing && (
        <>
          <span
            className="absolute inset-0 rounded-full animate-pulse-ring"
            style={{ background: "rgba(59,130,246,0.15)" }}
          />
          <span
            className="absolute inset-0 rounded-full animate-pulse-ring"
            style={{
              background: "rgba(59,130,246,0.08)",
              animationDelay: "0.8s",
            }}
          />
        </>
      )}
      <div
        className={`relative rounded-full flex items-center justify-center glow-blue ${animated ? "animate-float" : ""}`}
        style={{
          width: size,
          height: size,
          background:
            "linear-gradient(135deg, #1e3a5f 0%, #1a2744 50%, #0f172a 100%)",
          border: "1.5px solid rgba(59,130,246,0.35)",
        }}
      >
        {/* Scan line animation */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{ pointerEvents: "none" }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "1.5px",
              background:
                "linear-gradient(90deg, transparent, rgba(59,130,246,0.6), transparent)",
              animation: "scan 3s ease-in-out infinite",
            }}
          />
        </div>

        {/* B stylisé */}
        <svg
          width={size * 0.46}
          height={size * 0.46}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 6h14c4.4 0 8 3.6 8 8v0c0 2.4-1.08 4.56-2.8 6 1.84 1.44 3.04 3.68 3.04 6.2v0c0 4.64-3.76 8.2-8.4 8.2H8V6z"
            fill="none"
            stroke="rgba(96,165,250,0.9)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 20h12c2.8 0 5 2.2 5 5s-2.2 5-5 5H8"
            stroke="rgba(167,139,250,0.7)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="32" cy="10" r="3" fill="rgba(16,185,129,0.9)">
            <animate
              attributeName="opacity"
              values="1;0.3;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
}
