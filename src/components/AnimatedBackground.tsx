export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-mesh-1 opacity-70 dark:opacity-50" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 noise opacity-[0.04] dark:opacity-[0.06]" />

      {/* Floating glow orbs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl animate-pulse-soft" />
      <div
        className="absolute top-1/2 -right-40 h-[28rem] w-[28rem] rounded-full bg-cyan-glow/25 blur-3xl animate-pulse-soft"
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl animate-pulse-soft"
        style={{ animationDelay: '0.8s' }}
      />
    </div>
  );
}
