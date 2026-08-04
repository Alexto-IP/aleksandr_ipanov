export default function BlueprintGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-grid bg-grid" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-blueprint-bg via-transparent to-blueprint-bg" />
      {/* регистрационные метки по углам, как на технических чертежах */}
      {[
        'top-6 left-6',
        'top-6 right-6 rotate-90',
        'bottom-6 left-6 -rotate-90',
        'bottom-6 right-6 rotate-180',
      ].map((pos, i) => (
        <svg
          key={i}
          className={`absolute ${pos} h-8 w-8 text-blueprint-cyanDim/60`}
          viewBox="0 0 32 32"
          fill="none"
        >
          <path d="M16 2V12M16 22V32M2 16H12M22 16H32" stroke="currentColor" strokeWidth="1" />
          <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1" />
        </svg>
      ))}
    </div>
  )
}
