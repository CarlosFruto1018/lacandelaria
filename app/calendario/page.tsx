import Calendar from "@/app/components/Calendar";
import { calendarEvents } from "@/lib/calendario";

export const metadata = { title: "Calendario | I.E. Nuestra Señora de la Candelaria" };

export default function CalendarioPage() {
  return (
    <>
      <section className="bg-govco-dark">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h1 className="tracking-display text-3xl font-extrabold text-white sm:text-4xl">Calendario</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Próximos eventos, reuniones, fechas especiales y cumpleaños de nuestra comunidad educativa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Calendar events={calendarEvents} />
      </section>
    </>
  );
}
