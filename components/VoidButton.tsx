"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface VoidButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
}

export default function VoidButton({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
}: VoidButtonProps) {
  const base = "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300";

  const styles = {
    primary: {
      background: "var(--btn-primary-bg)",
      color: "var(--btn-primary-text)",
    },
    secondary: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid var(--card-border-hover)",
    },
  };

  const hoverClass = variant === "primary"
    ? "hover:scale-105 hover:opacity-90"
    : "hover:scale-105";

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${base} ${hoverClass} ${className}`}
      style={styles[variant]}
    >
      {children}
    </Link>
  );
}
