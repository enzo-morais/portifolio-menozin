"use client";

import { CSSProperties, ReactNode } from "react";

interface VoidCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function VoidCard({ children, className = "", style }: VoidCardProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] ${className}`}
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
