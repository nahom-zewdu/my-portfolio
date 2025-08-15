export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full overflow-hidden">
      {/* Layered radial gradients */}
      <div className="absolute inset-0 h-full w-full">
        {/* Base mist gradient */}
        <div className="absolute inset-0 h-full w-full opacity-90 dark:opacity-90 bg-[radial-gradient(1200px_800px_at_20%_10%,rgba(148,163,184,0.10),transparent_60%)] dark:bg-[radial-gradient(1200px_800px_at_20%_10%,rgba(255,255,255,0.06),transparent_60%)]" />
        {/* Secondary depth gradient */}
        <div className="absolute inset-0 h-full w-full opacity-80 dark:opacity-80 bg-[radial-gradient(1000px_700px_at_80%_20%,rgba(56,189,248,0.06),transparent_70%)] dark:bg-[radial-gradient(1000px_700px_at_80%_20%,rgba(148,163,184,0.06),transparent_70%)]" />
        {/* Distant ambient gradient */}
        <div className="absolute inset-0 h-full w-full opacity-60 dark:opacity-60 bg-[radial-gradient(900px_900px_at_50%_90%,rgba(203,213,225,0.06),transparent_70%)] dark:bg-[radial-gradient(900px_900px_at_50%_90%,rgba(30,41,59,0.50),transparent_70%)]" />
      </div>

      {/* Soft vignette for lighting depth */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(closest-side,transparent_60%,rgba(0,0,0,0.08))] dark:bg-[radial-gradient(closest-side,transparent_60%,rgba(0,0,0,0.20))]" />

      {/* Noise overlay (film grain) */}
      <div
        className="absolute inset-0 h-full w-full bg-repeat opacity-10 dark:opacity-5"
        style={{ backgroundImage: "url('/noise.svg')" }}
      />
    </div>
  );
}
