"use client";

import { useState, useRef, useEffect } from "react";
import { Sun, Monitor, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const options = [
  { value: "light",  label: "Claro",   icon: Sun },
  { value: "system", label: "Sistema", icon: Monitor },
  { value: "dark",   label: "Escuro",  icon: Moon },
] as const;

export default function ThemeSelect({ small = false }: { small?: boolean }) {
  const { mode, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = options.find(o => o.value === mode) ?? options[2];
  const Icon = current.icon;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg transition-all duration-200 hover:opacity-80"
        style={{
          padding: small ? "5px 10px" : "7px 12px",
          fontSize: small ? "12px" : "13px",
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          color: "var(--text-primary)",
          backdropFilter: "blur(8px)",
        }}
        aria-label="Selecionar tema"
      >
        <Icon style={{ width: small ? "13px" : "14px", height: small ? "13px" : "14px" }} />
        <span className="hidden sm:inline font-medium">{current.label}</span>
        <ChevronDown
          style={{
            width: "12px",
            height: "12px",
            opacity: 0.5,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        />
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 rounded-xl overflow-hidden z-50"
          style={{
            minWidth: "130px",
            background: "var(--header-bg-scrolled)",
            border: "1px solid var(--card-border)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}
        >
          {options.map((opt) => {
            const OptIcon = opt.icon;
            const isActive = mode === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => { setMode(opt.value); setOpen(false); }}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-all duration-150"
                style={{
                  color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                  background: isActive ? "var(--card-bg)" : "transparent",
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                <OptIcon style={{ width: "14px", height: "14px" }} />
                {opt.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
