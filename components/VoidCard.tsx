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
      className={`rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 ${className}`}
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
