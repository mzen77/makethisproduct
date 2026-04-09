interface IconProps {
  size?: number;
  className?: string;
}

export function TechIcon({ size = 30, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <path d="M9 6V4M12 6V4M15 6V4" />
      <path d="M9 20v-2M12 20v-2M15 20v-2" />
      <path d="M6 9H4M6 12H4M6 15H4" />
      <path d="M20 9h-2M20 12h-2M20 15h-2" />
    </svg>
  );
}

export function HomeIcon({ size = 30, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M3 11.5L12 3l9 8.5" />
      <path d="M5 9.5V20a.5.5 0 0 0 .5.5h4.5v-5h4v5H19a.5.5 0 0 0 .5-.5V9.5" />
    </svg>
  );
}

export function LifestyleIcon({ size = 30, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M12 21C12 21 5 16 5 9.5a7 7 0 0 1 14 0C19 16 12 21 12 21z" />
      <path d="M12 21V12" />
      <path d="M12 15l-3-3" />
      <path d="M12 12l3-2.5" />
    </svg>
  );
}

export function TravelIcon({ size = 30, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M22 12L3 5l4 7-4 7 19-7z" />
      <path d="M7 12h8" />
    </svg>
  );
}

export function ProductivityIcon({ size = 30, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M9.5 12.5l2 2 3.5-4" />
    </svg>
  );
}

export function MobilityIcon({ size = 30, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="6.5" cy="17" r="2" />
      <circle cx="17.5" cy="17" r="2" />
      <path d="M8.5 17H15V11l-3-4H7L6.5 9" />
      <path d="M15 11h3.5l1 3" />
      <path d="M9 7h3" />
    </svg>
  );
}

export function FurnitureIcon({ size = 30, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M4 10.5V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2.5" />
      <path d="M2 10.5a1.5 1.5 0 0 1 3 0V14h14v-3.5a1.5 1.5 0 0 1 3 0V16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5.5z" />
      <path d="M6 17v2.5M18 17v2.5" />
    </svg>
  );
}

export const categoryIconMap: Record<string, React.ComponentType<IconProps>> = {
  tech: TechIcon,
  home: HomeIcon,
  lifestyle: LifestyleIcon,
  travel: TravelIcon,
  productivity: ProductivityIcon,
  mobility: MobilityIcon,
  furniture: FurnitureIcon,
};
