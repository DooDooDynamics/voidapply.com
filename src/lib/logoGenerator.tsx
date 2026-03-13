function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

const PALETTES = [
  { bg: "#1e3a5f", fg: "#7eb8da" },
  { bg: "#2d3748", fg: "#a0aec0" },
  { bg: "#44337a", fg: "#b794f4" },
  { bg: "#1a365d", fg: "#63b3ed" },
  { bg: "#234e52", fg: "#81e6d9" },
  { bg: "#3c366b", fg: "#a3bffa" },
  { bg: "#2a4365", fg: "#90cdf4" },
  { bg: "#285e61", fg: "#76e4f7" },
];

function getInitials(companyId: string): string {
  return companyId
    .split("-")
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("")
    .slice(0, 2);
}

type LogoProps = {
  companyId: string;
  size?: number;
  className?: string;
};

export function CompanyLogo({ companyId, size = 48, className = "" }: LogoProps) {
  const hash = hashCode(companyId);
  const palette = PALETTES[hash % PALETTES.length]!;
  const variant = hash % 4;
  const initials = getInitials(companyId);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label={`${companyId} logo`}
    >
      {variant === 0 && (
        <>
          <circle cx="24" cy="24" r="22" fill={palette.bg} />
          <text
            x="24"
            y="24"
            textAnchor="middle"
            dominantBaseline="central"
            fill={palette.fg}
            fontSize="16"
            fontFamily="system-ui, sans-serif"
            fontWeight="700"
          >
            {initials}
          </text>
        </>
      )}
      {variant === 1 && (
        <>
          <rect x="2" y="2" width="44" height="44" rx="10" fill={palette.bg} />
          <text
            x="24"
            y="24"
            textAnchor="middle"
            dominantBaseline="central"
            fill={palette.fg}
            fontSize="16"
            fontFamily="system-ui, sans-serif"
            fontWeight="700"
          >
            {initials}
          </text>
        </>
      )}
      {variant === 2 && (
        <>
          <circle cx="18" cy="24" r="16" fill={palette.bg} opacity="0.8" />
          <circle cx="30" cy="24" r="16" fill={palette.fg} opacity="0.3" />
          <text
            x="24"
            y="24"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#fff"
            fontSize="14"
            fontFamily="system-ui, sans-serif"
            fontWeight="700"
          >
            {initials}
          </text>
        </>
      )}
      {variant === 3 && (
        <>
          <polygon points="24,2 46,46 2,46" fill={palette.bg} />
          <text
            x="24"
            y="34"
            textAnchor="middle"
            dominantBaseline="central"
            fill={palette.fg}
            fontSize="13"
            fontFamily="system-ui, sans-serif"
            fontWeight="700"
          >
            {initials}
          </text>
        </>
      )}
    </svg>
  );
}
