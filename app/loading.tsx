export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin"></div>
        <p className="text-text-secondary-light dark:text-text-secondary-dark">
          Carregando...
        </p>
      </div>
    </div>
  );
}
