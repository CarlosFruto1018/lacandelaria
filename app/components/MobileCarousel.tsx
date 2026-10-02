"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Carrusel deslizable en celular (con puntos y flechas). A partir de `sm`
 * se muestra como cuadrícula normal; las clases de la cuadrícula llegan por `gridClassName`.
 */
export default function MobileCarousel({
  children,
  gridClassName = "",
}: {
  children: React.ReactNode;
  gridClassName?: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [count, setCount] = useState(0);

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    setCount(items.length);
    let closest = 0;
    let min = Infinity;
    items.forEach((item, index) => {
      const distance = Math.abs(item.offsetLeft - el.offsetLeft - el.scrollLeft - 16);
      if (distance < min) {
        min = distance;
        closest = index;
      }
    });
    setActive(closest);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  function goTo(index: number) {
    const el = scroller.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    const target = items[Math.max(0, Math.min(items.length - 1, index))];
    if (!target) return;
    el.scrollTo({ left: target.offsetLeft - el.offsetLeft - 16, behavior: "smooth" });
  }

  return (
    <div>
      <div
        ref={scroller}
        onScroll={update}
        className={`-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden ${gridClassName}`}
      >
        {children}
      </div>

      {count > 1 && (
        <div className="mt-5 flex items-center justify-between sm:hidden">
          <div className="flex items-center gap-2" role="tablist" aria-label="Diapositivas">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-label={`Ir a la diapositiva ${index + 1}`}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === index ? "w-7 bg-govco" : "w-2 bg-navy/20"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy shadow-card transition-opacity duration-200 disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              disabled={active === count - 1}
              aria-label="Siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-govco text-white shadow-card transition-opacity duration-200 disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
