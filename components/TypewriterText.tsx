"use client";

import { useEffect, useState } from "react";

interface Props {
  text: string;
  delay?: number; // ms antes de começar
  speed?: number; // ms por caractere
  className?: string;
  style?: React.CSSProperties;
}

export default function TypewriterText({ text, delay = 600, speed = 50, className, style }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [started, displayed, text, speed]);

  return (
    <span className={className} style={style}>
      {displayed}
      {displayed.length < text.length && (
        <span className="animate-pulse" style={{ opacity: 0.5 }}>|</span>
      )}
    </span>
  );
}
