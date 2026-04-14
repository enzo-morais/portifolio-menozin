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
  const baseStyles =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-105",
    secondary:
      "border border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
  };

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
