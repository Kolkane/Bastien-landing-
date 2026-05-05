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
  const id = `orb-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Ambient outer glow */}
      {showRing && (
        <>
          <span
            className="absolute rounded-full"
            style={{
              inset: `-${size * 0.25}px`,
              background:
                "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)",
              animation: animated ? "orb-breathe 4s ease-in-out infinite" : undefined,
              filter: "blur(8px)",
            }}
          />
          <span
            className="absolute rounded-full"
            style={{
              inset: `-${size * 0.12}px`,
              background:
                "radial-gradient(circle, rgba(96,165,250,0.25) 0%, transparent 60%)",
              animation: animated ? "orb-breathe 4s ease-in-out infinite 1.2s" : undefined,
              filter: "blur(4px)",
            }}
          />
        </>
      )}

      {/* Rotating conic ring */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 1.05,
          height: size * 1.05,
          background:
            "conic-gradient(from 0deg, transparent 0%, rgba(96,165,250,0.5) 25%, transparent 50%, rgba(167,139,250,0.5) 75%, transparent 100%)",
          animation: animated ? "orb-rotate 6s linear infinite" : undefined,
          maskImage:
            "radial-gradient(circle, transparent 47%, black 49%, black 51%, transparent 53%)",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 47%, black 49%, black 51%, transparent 53%)",
        }}
      />

      {/* Main orb body */}
      <div
        className={animated ? "animate-float" : ""}
        style={{
          position: "relative",
          width: size,
          height: size,
          borderRadius: "50%",
          background: `
            radial-gradient(circle at 35% 30%, rgba(147,197,253,0.95) 0%, rgba(96,165,250,0.7) 18%, rgba(59,130,246,0.5) 38%, rgba(67,56,202,0.6) 65%, rgba(15,23,42,0.95) 100%)
          `,
          boxShadow: `
            0 0 ${size * 0.5}px rgba(59,130,246,0.4),
            0 0 ${size * 0.25}px rgba(99,102,241,0.5),
            inset 0 0 ${size * 0.3}px rgba(15,23,42,0.5),
            inset -${size * 0.1}px -${size * 0.15}px ${size * 0.2}px rgba(15,23,42,0.6)
          `,
          overflow: "hidden",
        }}
      >
        {/* Inner swirl — animated SVG waves */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <radialGradient id={`${id}-core`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(186,230,253,0.6)" />
              <stop offset="40%" stopColor="rgba(96,165,250,0.3)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0)" />
            </radialGradient>
            <radialGradient id={`${id}-highlight`} cx="35%" cy="30%" r="30%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          {/* Pulsing core */}
          <circle
            cx="50"
            cy="50"
            r="22"
            fill={`url(#${id}-core)`}
            style={{
              animation: animated ? "orb-core-pulse 2.5s ease-in-out infinite" : undefined,
              transformOrigin: "center",
            }}
          />

          {/* Rotating wave 1 */}
          <g
            style={{
              animation: animated ? "orb-rotate 8s linear infinite" : undefined,
              transformOrigin: "50px 50px",
            }}
          >
            <ellipse
              cx="50"
              cy="50"
              rx="28"
              ry="10"
              fill="none"
              stroke="rgba(186,230,253,0.35)"
              strokeWidth="0.8"
            />
          </g>

          {/* Rotating wave 2 (reverse) */}
          <g
            style={{
              animation: animated ? "orb-rotate-reverse 11s linear infinite" : undefined,
              transformOrigin: "50px 50px",
            }}
          >
            <ellipse
              cx="50"
              cy="50"
              rx="32"
              ry="14"
              fill="none"
              stroke="rgba(167,139,250,0.3)"
              strokeWidth="0.6"
              transform="rotate(60 50 50)"
            />
          </g>

          {/* Rotating wave 3 */}
          <g
            style={{
              animation: animated ? "orb-rotate 14s linear infinite" : undefined,
              transformOrigin: "50px 50px",
            }}
          >
            <ellipse
              cx="50"
              cy="50"
              rx="35"
              ry="18"
              fill="none"
              stroke="rgba(96,165,250,0.22)"
              strokeWidth="0.5"
              transform="rotate(120 50 50)"
            />
          </g>

          {/* Top highlight */}
          <circle cx="50" cy="50" r="48" fill={`url(#${id}-highlight)`} />

          {/* Floating particles */}
          {animated && (
            <>
              <circle cx="35" cy="40" r="1" fill="rgba(255,255,255,0.8)">
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="3s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values="40;30;40"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="65" cy="55" r="0.8" fill="rgba(186,230,253,0.9)">
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="2.4s"
                  begin="0.8s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values="55;45;55"
                  dur="2.4s"
                  begin="0.8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="55" cy="65" r="0.6" fill="rgba(255,255,255,0.7)">
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="2.8s"
                  begin="1.4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values="65;55;65"
                  dur="2.8s"
                  begin="1.4s"
                  repeatCount="indefinite"
                />
              </circle>
            </>
          )}
        </svg>
      </div>

      {/* Status dot */}
      <span
        style={{
          position: "absolute",
          bottom: size * 0.06,
          right: size * 0.06,
          width: size * 0.14,
          height: size * 0.14,
          borderRadius: "50%",
          background: "#10B981",
          boxShadow: "0 0 8px rgba(16,185,129,0.8), 0 0 0 2px rgba(6,11,24,0.9)",
          animation: animated ? "blink 2s step-end infinite" : undefined,
        }}
      />

      {/* Local keyframes */}
      <style>{`
        @keyframes orb-breathe {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        @keyframes orb-rotate {
          to { transform: rotate(360deg); }
        }
        @keyframes orb-rotate-reverse {
          to { transform: rotate(-360deg); }
        }
        @keyframes orb-core-pulse {
          0%, 100% { transform: scale(0.85); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
