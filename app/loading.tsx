export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center relative z-10">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 rounded-full border-2 animate-spin"
          style={{
            borderColor: "var(--card-border)",
            borderTopColor: "var(--text-primary)",
          }}
        />
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>Carregando...</p>
      </div>
    </div>
  );
}
