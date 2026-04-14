"use client";

// Partículas com valores fixos para evitar erro de hidratação SSR
const particles = [
  { w: 280, h: 280, l: 10, t: 5,  dur: 18, delay: 0 },
  { w: 180, h: 180, l: 75, t: 15, dur: 22, delay: 2 },
  { w: 350, h: 350, l: 40, t: 60, dur: 16, delay: 1 },
  { w: 120, h: 120, l: 85, t: 40, dur: 25, delay: 3 },
  { w: 220, h: 220, l: 20, t: 80, dur: 20, delay: 0.5 },
  { w: 160, h: 160, l: 55, t: 30, dur: 19, delay: 4 },
  { w: 300, h: 300, l: 90, t: 70, dur: 23, delay: 1.5 },
  { w: 100, h: 100, l: 30, t: 45, dur: 17, delay: 2.5 },
  { w: 240, h: 240, l: 65, t: 10, dur: 21, delay: 0.8 },
  { w: 190, h: 190, l: 5,  t: 55, dur: 24, delay: 3.5 },
];

export default function VoidBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Fundo base */}
      <div className="absolute inset-0 bg-black" />

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
            background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
            animation: `float ${p.dur}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Estrelas (twinkle) */}
      {[
        { l: 15, t: 20 }, { l: 35, t: 8 },  { l: 60, t: 25 },
        { l: 80, t: 12 }, { l: 25, t: 65 }, { l: 50, t: 50 },
        { l: 70, t: 75 }, { l: 90, t: 35 }, { l: 45, t: 88 },
        { l: 8,  t: 42 }, { l: 55, t: 18 }, { l: 78, t: 58 },
      ].map((s, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: i % 3 === 0 ? "2px" : "1px",
            height: i % 3 === 0 ? "2px" : "1px",
            left: s.l + "%",
            top: s.t + "%",
            animation: `twinkle ${3 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${(i * 0.4) % 3}s`,
          }}
        />
      ))}

      {/* Gradiente radial central */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
