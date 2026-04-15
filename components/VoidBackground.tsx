"use client";

const particles = [
  { w: 320, h: 320, l: 8,  t: 5,  dur: 18, delay: 0   },
  { w: 200, h: 200, l: 72, t: 12, dur: 22, delay: 2   },
  { w: 400, h: 400, l: 38, t: 55, dur: 16, delay: 1   },
  { w: 140, h: 140, l: 82, t: 38, dur: 25, delay: 3   },
  { w: 260, h: 260, l: 18, t: 75, dur: 20, delay: 0.5 },
  { w: 180, h: 180, l: 52, t: 28, dur: 19, delay: 4   },
  { w: 340, h: 340, l: 88, t: 65, dur: 23, delay: 1.5 },
  { w: 120, h: 120, l: 28, t: 42, dur: 17, delay: 2.5 },
  { w: 280, h: 280, l: 62, t: 8,  dur: 21, delay: 0.8 },
  { w: 220, h: 220, l: 4,  t: 52, dur: 24, delay: 3.5 },
];

const stars = [
  { l: 15, t: 20, s: 2 }, { l: 35, t: 8,  s: 1 }, { l: 60, t: 25, s: 2 },
  { l: 80, t: 12, s: 1 }, { l: 25, t: 65, s: 2 }, { l: 50, t: 50, s: 1 },
  { l: 70, t: 75, s: 2 }, { l: 90, t: 35, s: 1 }, { l: 45, t: 88, s: 2 },
  { l: 8,  t: 42, s: 1 }, { l: 55, t: 18, s: 2 }, { l: 78, t: 58, s: 1 },
  { l: 20, t: 33, s: 1 }, { l: 66, t: 44, s: 2 }, { l: 92, t: 22, s: 1 },
];

export default function VoidBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Fundo base */}
      <div className="absolute inset-0 transition-colors duration-500" style={{ backgroundColor: "var(--bg)" }} />

      {/* Partículas flutuantes */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.w + "px",
            height: p.h + "px",
            left: p.l + "%",
            top: p.t + "%",
            background: "radial-gradient(circle, var(--particle-color) 0%, transparent 70%)",
            animation: `float ${p.dur}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Estrelas / pontos */}
      {stars.map((s, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            width: s.s + "px",
            height: s.s + "px",
            left: s.l + "%",
            top: s.t + "%",
            backgroundColor: "var(--star-color)",
            animation: `twinkle ${3 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${(i * 0.4) % 3}s`,
          }}
        />
      ))}

      {/* Gradiente radial central */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 30%, var(--particle-color) 0%, transparent 60%)",
      }} />

      {/* Gradiente de canto */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 80% 80%, var(--particle-color) 0%, transparent 50%)",
        opacity: 0.6,
      }} />
    </div>
  );
}
