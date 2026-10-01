import { GraduationCap } from "lucide-react";

/**
 * Placeholder del escudo institucional. Reemplazar por <Image src="/escudo.png" .../>
 * cuando se disponga del archivo oficial del colegio.
 */
export default function InstitutionCrest({ size = 56 }: { size?: number }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full border-2 border-gold bg-white shadow-sm"
      style={{ width: size, height: size }}
    >
      <GraduationCap className="text-navy" style={{ width: size * 0.5, height: size * 0.5 }} />
    </div>
  );
}
