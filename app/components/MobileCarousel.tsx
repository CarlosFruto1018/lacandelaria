"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const AUTOPLAY_MS = 3800;
const RESUME_MS = 6000;
const SIDE_PADDING = 16;

/**
 * Carrusel que avanza solo en celular (con puntos). A partir de `sm` se muestra
 * como cuadrícula normal; las clases de la cuadrícula llegan por `gridClassName`.
 */
export default function MobileCarousel({
  children,
  gridClassName = "",
}: {
  children: React.ReactNode;
  gridClassName?: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const pausedUntil = useRef(0);
  const [active, setActive] = useState(0);
  const [count, setCount] = useState(0);

  const items = useCallback(() => Array.from(scroller.current?.children ?? []) as HTMLElement[], []);

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const list = items();
    setCount(list.length);
    let closest = 0;
    let min = Infinity;
    list.forEach((item, index) => {
      const distance = Math.abs(item.offsetLeft - SIDE_PADDING - el.scrollLeft);
      if (distance < min) {
        min = distance;
        closest = index;
      }
    });
    setActive(closest);
  }, [items]);

  const goTo = useCallback(
    (index: number) => {
      const el = scroller.current;
      const target = items()[index];
      if (!el || !target) return;
      el.scrollTo({ left: Math.max(0, target.offsetLeft - SIDE_PADDING), behavior: "smooth" });
    },
    [items],
  );

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  // Avance automático (solo en celular y si el usuario no pidió menos movimiento).
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const timer = window.setInterval(() => {
      const mobile = window.matchMedia("(max-width: 639px)").matches;
      if (!mobile || Date.now() < pausedUntil.current) return;
      const total = items().length;
      if (total < 2) return;
      goTo((active + 1) % total);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [active, goTo, items]);

  function pause() {
    pausedUntil.current = Date.now() + RESUME_MS;
  }

  return (
    <div>
      <div
        ref={scroller}
        onScroll={update}
        onTouchStart={pause}
        onPointerDown={pause}
        className={`relative -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 pt-1 [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0 sm:pt-0 [&::-webkit-scrollbar]:hidden ${gridClassName}`}
        style={{ scrollPaddingInline: SIDE_PADDING }}
      >
        {children}
      </div>

      {count > 1 && (
        <div className="mt-2 flex items-center justify-center gap-2 sm:hidden" role="tablist" aria-label="Diapositivas">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-label={`Ir a la diapositiva ${index + 1}`}
              onClick={() => {
                pause();
                goTo(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === index ? "w-7 bg-govco" : "w-2 bg-navy/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
