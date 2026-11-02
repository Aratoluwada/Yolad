// Redrawn from the school's banner: indigo disc with a white tick.
export default function Logo({ size = 44, title = 'Yolad Montessori School logo' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label={title} className="logo-mark">
      <circle cx="50" cy="50" r="47" fill="#5a22b8" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="3" />
      <path d="M24 52 L41 68 L77 28" fill="none" stroke="#ffffff" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
