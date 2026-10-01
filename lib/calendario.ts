export type EventType = "evento" | "cumpleanos" | "reunion" | "festivo";

export type CalendarEvent = {
  id: string;
  title: string;
  /** Fecha en formato AAAA-MM-DD */
  date: string;
  type: EventType;
  description?: string;
};

export const eventTypes: Record<EventType, { label: string; dot: string; chip: string }> = {
  evento: { label: "Evento", dot: "bg-govco", chip: "bg-govco/10 text-govco" },
  cumpleanos: { label: "Cumpleaños", dot: "bg-gold", chip: "bg-gold/25 text-gold-600" },
  reunion: { label: "Reunión", dot: "bg-malambo-red", chip: "bg-malambo-red/10 text-malambo-red" },
  festivo: { label: "Festivo", dot: "bg-navy", chip: "bg-navy/10 text-navy" },
};

/**
 * Eventos del calendario. Por ahora está vacío: agrega objetos aquí y aparecerán
 * en el calendario y en la lista de próximos eventos.
 *
 * Ejemplo:
 * { id: "1", title: "Reunión de padres", date: "2026-11-05", type: "reunion" }
 */
export const calendarEvents: CalendarEvent[] = [];
