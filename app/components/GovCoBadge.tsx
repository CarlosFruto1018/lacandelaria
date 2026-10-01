type GovCoBadgeProps = {
  size?: "sm" | "lg";
  variant?: "color" | "white";
  showColombia?: boolean;
};

const gridColors = {
  color: ["#FFB81C", "#00A3AD", "#8246AF", "#F2545B"],
  white: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
};

export default function GovCoBadge({
  size = "sm",
  variant = "color",
  showColombia = false,
}: GovCoBadgeProps) {
  const cell = size === "sm" ? "h-1.5 w-1.5" : "h-2.5 w-2.5";
  const gap = size === "sm" ? "gap-[1.5px]" : "gap-0.5";
  const textSize = size === "sm" ? "text-sm" : "text-xl";

  return (
    <div className="flex items-center gap-2">
      <div className={`grid grid-cols-2 ${gap}`} aria-hidden="true">
        {gridColors[variant].map((color, index) => (
          <span
            key={index}
            className={`${cell} rounded-[2px]`}
            style={{ backgroundColor: variant === "white" ? "rgba(255,255,255,0.9)" : color }}
          />
        ))}
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`font-extrabold tracking-tight ${textSize} ${
            variant === "white" ? "text-white" : "text-navy"
          }`}
        >
          GOV.CO
        </span>
        {showColombia && (
          <span
            className={`text-[10px] font-medium tracking-wide ${
              variant === "white" ? "text-white/70" : "text-navy/60"
            }`}
          >
            COLOMBIA
          </span>
        )}
      </div>
    </div>
  );
}
