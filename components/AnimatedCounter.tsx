"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  target: string; // ex: "10+", "5/5", "100%", "2025"
}

export default function AnimatedCounter({ target }: Props) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          // Extrai número do target
          const num = parseInt(target.replace(/\D/g, ""));
          const suffix = target.replace(/[\d]/g, "");
          if (isNaN(num)) { setDisplay(target); return; }

          const duration = 1200;
          const steps = 40;
          const increment = num / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= num) {
              setDisplay(target);
              clearInterval(timer);
            } else {
              setDisplay(Math.floor(current) + suffix);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{display}</span>;
}
