"use client";

import { useMemo, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { eventTypes, type CalendarEvent, type EventType } from "@/lib/calendario";

const WEEKDAYS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

const pad = (n: number) => String(n).padStart(2, "0");
const toKey = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`;

export default function Calendar({ events }: { events: CalendarEvent[] }) {
  const today = new Date();
  const todayKey = toKey(today.getFullYear(), today.getMonth(), today.getDate());

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState<string>(todayKey);

  const eventsByDate = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    for (const event of events) {
      map.set(event.date, [...(map.get(event.date) ?? []), event]);
    }
    return map;
  }, [events]);

  const monthLabel = new Intl.DateTimeFormat("es-CO", { month: "long", year: "numeric" }).format(
    new Date(year, month, 1),
  );

  // Lunes como primer día de la semana.
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array<null>(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  function goTo(offset: number) {
    const next = new Date(year, month + offset, 1);
    setYear(next.getFullYear());
    setMonth(next.getMonth());
  }

  function goToday() {
    setYear(today.getFullYear());
    setMonth(today.getMonth());
    setSelected(todayKey);
  }

  const upcoming = events
    .filter((e) => e.date >= todayKey)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 6);

  const selectedEvents = eventsByDate.get(selected) ?? [];
  const selectedLabel = new Intl.DateTimeFormat("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(new Date(`${selected}T00:00:00Z`));

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Calendario mensual */}
      <div className="rounded-3xl border border-navy/5 bg-white p-5 shadow-card sm:p-7 lg:col-span-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-extrabold capitalize text-navy">{monthLabel}</h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goToday}
              className="press rounded-full bg-govco/10 px-4 py-2 text-sm font-bold text-govco transition-colors duration-200 hover:bg-govco hover:text-white"
            >
              Hoy
            </button>
            <button
              type="button"
              onClick={() => goTo(-1)}
              aria-label="Mes anterior"
              className="press flex h-10 w-10 items-center justify-center rounded-full bg-surface text-navy transition-colors duration-200 hover:bg-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(1)}
              aria-label="Mes siguiente"
              className="press flex h-10 w-10 items-center justify-center rounded-full bg-surface text-navy transition-colors duration-200 hover:bg-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-7 gap-1 text-center text-xs font-bold uppercase tracking-wide text-navy/50">
          {WEEKDAYS.map((day) => (
            <div key={day} className="py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {cells.map((day, index) => {
            if (day === null) return <div key={`empty-${index}`} className="aspect-square" />;
            const key = toKey(year, month, day);
            const dayEvents = eventsByDate.get(key) ?? [];
            const isToday = key === todayKey;
            const isSelected = key === selected;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelected(key)}
                aria-label={`${day} de ${monthLabel}${dayEvents.length ? `, ${dayEvents.length} eventos` : ""}`}
                aria-pressed={isSelected}
                className={`relative flex aspect-square flex-col items-center justify-center rounded-2xl text-sm font-semibold transition-colors duration-200 ${
                  isSelected
                    ? "bg-govco text-white"
                    : isToday
                      ? "bg-gold/30 text-navy ring-2 ring-gold"
                      : "text-navy hover:bg-surface"
                }`}
              >
                {day}
                {dayEvents.length > 0 && (
                  <span className="absolute bottom-1.5 flex gap-0.5">
                    {dayEvents.slice(0, 3).map((e) => (
                      <span
                        key={e.id}
                        className={`h-1.5 w-1.5 rounded-full ${isSelected ? "bg-white" : eventTypes[e.type].dot}`}
                      />
                    ))}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-navy/10 pt-4 text-xs font-semibold text-navy/70">
          {(Object.keys(eventTypes) as EventType[]).map((type) => (
            <span key={type} className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${eventTypes[type].dot}`} />
              {eventTypes[type].label}
            </span>
          ))}
        </div>
      </div>

      {/* Panel lateral */}
      <div className="flex flex-col gap-6">
        <div className="rounded-3xl border border-navy/5 bg-white p-6 shadow-card">
          <h3 className="text-xs font-bold uppercase tracking-wider text-govco">Día seleccionado</h3>
          <p className="mt-1 text-lg font-extrabold capitalize text-navy">{selectedLabel}</p>
          {selectedEvents.length === 0 ? (
            <p className="mt-3 text-sm text-navy/60">No hay eventos para este día.</p>
          ) : (
            <ul className="mt-3 space-y-2">
              {selectedEvents.map((e) => (
                <li key={e.id} className="rounded-2xl bg-surface p-3">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${eventTypes[e.type].chip}`}>
                    {eventTypes[e.type].label}
                  </span>
                  <p className="mt-1.5 font-bold text-navy">{e.title}</p>
                  {e.description && <p className="text-sm text-navy/60">{e.description}</p>}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-3xl border border-navy/5 bg-white p-6 shadow-card">
          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-govco">
            <CalendarDays className="h-4 w-4" />
            Próximos eventos
          </h3>
          {upcoming.length === 0 ? (
            <p className="mt-3 text-sm text-navy/60">
              Aún no hay eventos programados. Cuando se publiquen, los verás aquí.
            </p>
          ) : (
            <ul className="mt-3 space-y-3">
              {upcoming.map((e) => {
                const date = new Date(`${e.date}T00:00:00Z`);
                return (
                  <li key={e.id} className="flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-2xl bg-surface text-govco">
                      <span className="text-lg font-extrabold leading-none">{date.getUTCDate()}</span>
                      <span className="text-[10px] font-bold uppercase text-malambo-red">
                        {new Intl.DateTimeFormat("es-CO", { month: "short", timeZone: "UTC" })
                          .format(date)
                          .replace(".", "")}
                      </span>
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-navy">{e.title}</span>
                      <span className="block text-xs text-navy/50">{eventTypes[e.type].label}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
