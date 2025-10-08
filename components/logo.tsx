export function Logo({ size = 40, animated = false }: { size?: number; animated?: boolean }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={animated ? "animate-triangle-rotate" : ""}>
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2B705" />
          <stop offset="50%" stopColor="#F29F05" />
          <stop offset="100%" stopColor="#F20587" />
        </linearGradient>
      </defs>

      {/* Triangle outline - matching logo_render.png */}
      <path
        d="M 50 20 L 80 75 L 20 75 Z"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Keyhole - Circle */}
      <circle cx="50" cy="45" r="6" fill="url(#logoGradient)" />

      {/* Keyhole - Rectangle */}
      <rect x="47" y="49" width="6" height="16" fill="url(#logoGradient)" rx="2" />
    </svg>
  )
}
