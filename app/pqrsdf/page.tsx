"use client";

import { useState } from "react";
import {
  MessageSquareWarning,
  Paperclip,
  CheckCircle2,
  Copy,
  Check,
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  type LucideIcon,
  FileQuestion,
  Frown,
  Scale,
  Lightbulb,
  ShieldAlert,
} from "lucide-react";

const requestTypes: {
  value: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    value: "Petición",
    description: "Solicitud de atención, información o respuesta sobre un asunto de interés",
    icon: FileQuestion,
  },
  {
    value: "Queja",
    description: "Manifestación de inconformidad por la atención recibida o el servicio prestado",
    icon: Frown,
  },
  {
    value: "Reclamo",
    description: "Disconformidad relacionada con un derecho que el ciudadano considera vulnerado",
    icon: Scale,
  },
  {
    value: "Sugerencia",
    description: "Propuesta de mejora para optimizar los procesos y servicios de la institución",
    icon: Lightbulb,
  },
  {
    value: "Denuncia",
    description: "Reporte de irregularidades, faltas administrativas o conductas contrarias a la ley",
    icon: ShieldAlert,
  },
];

const steps = ["Tipo", "Solicitante", "Detalle", "Revisión", "Radicado"];

const documentTypes = ["Cédula de ciudadanía", "Tarjeta de identidad", "Cédula de extranjería", "NIT", "Pasaporte"];
const relations = ["Estudiante", "Padre / madre / acudiente", "Docente", "Egresado", "Otro"];

type Errors = Partial<Record<string, string>>;

const inputClass = (error?: string) =>
  `mt-2 w-full rounded-xl border bg-surface px-4 py-2.5 text-sm text-navy transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-govco/40 ${
    error ? "border-red-400" : "border-slate-200"
  }`;

function generarRadicado() {
  const year = new Date().getFullYear();
  const consecutivo = Math.floor(1000 + Math.random() * 9000);
  return `CAN-${year}-${consecutivo}`;
}

export default function PqrsdfPage() {
  const [step, setStep] = useState(1);
  const [tipo, setTipo] = useState("");
  const [anonimo, setAnonimo] = useState(false);
  const [nombre, setNombre] = useState("");
  const [tipoDoc, setTipoDoc] = useState(documentTypes[0]);
  const [documento, setDocumento] = useState("");
  const [relacion, setRelacion] = useState(relations[0]);
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [archivo, setArchivo] = useState<File | null>(null);
  const [acepta, setAcepta] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [radicado, setRadicado] = useState("");
  const [copied, setCopied] = useState(false);

  function validate(current: number): boolean {
    const e: Errors = {};

    if (current === 1 && !tipo) e.tipo = "Selecciona el tipo de solicitud.";

    if (current === 2 && !anonimo) {
      if (!nombre.trim()) e.nombre = "El nombre completo es obligatorio.";
      if (!documento.trim()) e.documento = "El número de documento es obligatorio.";
      if (!correo.trim()) e.correo = "El correo electrónico es obligatorio.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) e.correo = "Ingresa un correo válido.";
      if (telefono.trim() && !/^[0-9+\s-]{7,15}$/.test(telefono)) {
        e.telefono = "Ingresa un número de teléfono válido.";
      }
    }

    if (current === 3) {
      if (!asunto.trim()) e.asunto = "El asunto es obligatorio.";
      if (!mensaje.trim()) e.mensaje = "Describe tu solicitud.";
      else if (mensaje.trim().length < 20) e.mensaje = "La descripción debe tener al menos 20 caracteres.";
    }

    if (current === 4 && !acepta) {
      e.acepta = "Debes autorizar el tratamiento de tus datos para continuar.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (!validate(step)) return;
    if (step === 4) setRadicado(generarRadicado());
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  }

  function reset() {
    setStep(1);
    setTipo("");
    setAnonimo(false);
    setNombre("");
    setDocumento("");
    setCorreo("");
    setTelefono("");
    setAsunto("");
    setMensaje("");
    setArchivo(null);
    setAcepta(false);
    setErrors({});
    setRadicado("");
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(radicado);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Portapapeles no disponible.
    }
  }

  const summary: [string, string][] = [
    ["Tipo de solicitud", tipo],
    ["Solicitante", anonimo ? "Anónimo" : nombre],
    ...(anonimo
      ? []
      : ([
          ["Documento", `${tipoDoc} ${documento}`],
          ["Vínculo con la institución", relacion],
          ["Correo electrónico", correo],
          ["Teléfono", telefono || "No indicado"],
        ] as [string, string][])),
    ["Asunto", asunto],
    ["Descripción", mensaje],
    ["Adjunto", archivo ? archivo.name : "Sin adjunto"],
  ];

  return (
    <>
      <section className="bg-govco-dark">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
            <MessageSquareWarning className="h-3.5 w-3.5 text-gold" />
            Atención al ciudadano
          </span>
          <h1 className="tracking-display mt-4 text-balance text-3xl font-bold text-white sm:text-4xl">
            Radicar PQRSDF
          </h1>
          <p className="mt-2 max-w-xl text-sm text-white/80 sm:text-base">
            Peticiones, quejas, reclamos, sugerencias y denuncias. Al final recibirás un número de
            radicado para hacer seguimiento.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {/* Indicador de pasos */}
        <ol className="flex items-center justify-between gap-1" aria-label="Progreso">
          {steps.map((label, index) => {
            const n = index + 1;
            const done = step > n;
            const active = step === n;
            return (
              <li key={label} className="flex flex-1 flex-col items-center gap-1.5">
                <div className="flex w-full items-center">
                  <span className={`h-0.5 flex-1 ${n === 1 ? "opacity-0" : done || active ? "bg-gold" : "bg-slate-200"}`} />
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-all duration-200 ${
                      done
                        ? "bg-gold text-navy"
                        : active
                          ? "bg-govco text-white ring-4 ring-govco/20"
                          : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {done ? <Check className="h-4 w-4" /> : n}
                  </span>
                  <span className={`h-0.5 flex-1 ${n === steps.length ? "opacity-0" : done ? "bg-gold" : "bg-slate-200"}`} />
                </div>
                <span className={`hidden text-xs font-medium sm:block ${active ? "text-govco-dark" : "text-slate-500"}`}>
                  {label}
                </span>
              </li>
            );
          })}
        </ol>

        <div className="mt-8 rounded-apple border border-slate-200/80 bg-white p-6 shadow-card sm:p-8">
          {/* Paso 1 */}
          {step === 1 && (
            <>
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                Paso 1: ¿Qué desea reportar?
              </p>
              <h2 className="tracking-display mt-1 text-xl font-bold text-navy sm:text-2xl">
                ¿Qué tipo de solicitud desea radicar?
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Seleccione la opción que mejor describa su caso
              </p>

              <div className="mt-6 space-y-3" role="radiogroup" aria-label="Tipo de solicitud">
                {requestTypes.map(({ value, description, icon: Icon }) => {
                  const selected = tipo === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setTipo(value)}
                      className={`press flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200 ${
                        selected
                          ? "border-govco bg-govco/5 ring-2 ring-govco/30"
                          : "border-slate-200 hover:border-govco/40 hover:bg-slate-50"
                      }`}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-govco text-white ring-2 ring-gold/70">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex-1">
                        <span className="block text-base font-semibold text-navy">{value}</span>
                        <span className="block text-sm text-slate-500">{description}</span>
                      </span>
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                          selected ? "border-govco bg-govco" : "border-slate-300"
                        }`}
                      >
                        {selected && <span className="h-2 w-2 rounded-full bg-white" />}
                      </span>
                    </button>
                  );
                })}
              </div>
              {errors.tipo && <p className="mt-3 text-xs text-red-600">{errors.tipo}</p>}

              <div className="mt-6 rounded-2xl border border-gold/40 bg-gold-50 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-navy">
                  <HelpCircle className="h-4 w-4 text-gold-600" />
                  ¿No sabe cuál elegir?
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  <li><strong>Petición:</strong> si necesita algo o quiere información.</li>
                  <li><strong>Queja:</strong> si no le gustó cómo lo atendieron.</li>
                  <li><strong>Reclamo:</strong> si considera que le negaron o vulneraron un derecho.</li>
                  <li><strong>Sugerencia:</strong> si tiene una idea para mejorar.</li>
                  <li><strong>Denuncia:</strong> si quiere reportar una irregularidad o una falta.</li>
                </ul>
              </div>
            </>
          )}

          {/* Paso 2 */}
          {step === 2 && (
            <>
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                Paso 2: Datos del solicitante
              </p>
              <h2 className="tracking-display mt-1 text-xl font-bold text-navy sm:text-2xl">
                ¿Quién radica la solicitud?
              </h2>

              <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 p-4 hover:bg-slate-50">
                <input
                  type="checkbox"
                  checked={anonimo}
                  onChange={(e) => {
                    setAnonimo(e.target.checked);
                    setErrors({});
                  }}
                  className="mt-0.5 h-4 w-4 accent-[#1A7F37]"
                />
                <span className="text-sm text-slate-600">
                  <strong className="text-navy">Radicar de forma anónima.</strong> No registraremos
                  tus datos personales, pero no podremos enviarte la respuesta por correo.
                </span>
              </label>

              {!anonimo && (
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="nombre" className="text-sm font-semibold text-navy">Nombre completo</label>
                    <input id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className={inputClass(errors.nombre)} placeholder="Ej. María Fernanda Pérez" />
                    {errors.nombre && <p className="mt-1.5 text-xs text-red-600">{errors.nombre}</p>}
                  </div>
                  <div>
                    <label htmlFor="tipoDoc" className="text-sm font-semibold text-navy">Tipo de documento</label>
                    <select id="tipoDoc" value={tipoDoc} onChange={(e) => setTipoDoc(e.target.value)} className={inputClass()}>
                      {documentTypes.map((d) => <option key={d}>{d}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="documento" className="text-sm font-semibold text-navy">Número de documento</label>
                    <input id="documento" value={documento} onChange={(e) => setDocumento(e.target.value)} className={inputClass(errors.documento)} />
                    {errors.documento && <p className="mt-1.5 text-xs text-red-600">{errors.documento}</p>}
                  </div>
                  <div>
                    <label htmlFor="correo" className="text-sm font-semibold text-navy">Correo electrónico</label>
                    <input id="correo" type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} className={inputClass(errors.correo)} placeholder="tucorreo@ejemplo.com" />
                    {errors.correo && <p className="mt-1.5 text-xs text-red-600">{errors.correo}</p>}
                  </div>
                  <div>
                    <label htmlFor="telefono" className="text-sm font-semibold text-navy">Teléfono (opcional)</label>
                    <input id="telefono" type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} className={inputClass(errors.telefono)} placeholder="300 123 4567" />
                    {errors.telefono && <p className="mt-1.5 text-xs text-red-600">{errors.telefono}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="relacion" className="text-sm font-semibold text-navy">Vínculo con la institución</label>
                    <select id="relacion" value={relacion} onChange={(e) => setRelacion(e.target.value)} className={inputClass()}>
                      {relations.map((r) => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Paso 3 */}
          {step === 3 && (
            <>
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                Paso 3: Detalle de la solicitud
              </p>
              <h2 className="tracking-display mt-1 text-xl font-bold text-navy sm:text-2xl">
                Cuéntanos qué ocurrió
              </h2>

              <div className="mt-5">
                <label htmlFor="asunto" className="text-sm font-semibold text-navy">Asunto</label>
                <input id="asunto" value={asunto} onChange={(e) => setAsunto(e.target.value)} className={inputClass(errors.asunto)} placeholder="Resumen breve de tu solicitud" />
                {errors.asunto && <p className="mt-1.5 text-xs text-red-600">{errors.asunto}</p>}
              </div>

              <div className="mt-5">
                <label htmlFor="mensaje" className="text-sm font-semibold text-navy">Descripción</label>
                <textarea
                  id="mensaje"
                  rows={6}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className={`${inputClass(errors.mensaje)} resize-none`}
                  placeholder="Describe detalladamente los hechos, fechas y personas involucradas..."
                />
                <div className="mt-1.5 flex items-center justify-between">
                  {errors.mensaje ? (
                    <p className="text-xs text-red-600">{errors.mensaje}</p>
                  ) : (
                    <span className="text-xs text-slate-400">Mínimo 20 caracteres</span>
                  )}
                  <span className="text-xs text-slate-400">{mensaje.length} caracteres</span>
                </div>
              </div>

              <div className="mt-5">
                <span className="text-sm font-semibold text-navy">Adjuntar archivo (opcional)</span>
                <label
                  htmlFor="adjunto"
                  className="press mt-2 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-surface px-4 py-4 text-sm text-slate-500 transition-all duration-200 hover:border-govco/50 hover:bg-govco/5"
                >
                  <Paperclip className="h-4 w-4 shrink-0" />
                  {archivo ? archivo.name : "Haz clic para adjuntar un documento (PDF, JPG, PNG)"}
                </label>
                <input id="adjunto" type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={(e) => setArchivo(e.target.files?.[0] ?? null)} />
              </div>
            </>
          )}

          {/* Paso 4 */}
          {step === 4 && (
            <>
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                Paso 4: Revisión
              </p>
              <h2 className="tracking-display mt-1 text-xl font-bold text-navy sm:text-2xl">
                Revisa tu solicitud antes de enviarla
              </h2>

              <dl className="mt-5 divide-y divide-slate-100 rounded-2xl border border-slate-200">
                {summary.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-semibold text-govco-dark">{label}</dt>
                    <dd className="whitespace-pre-wrap break-words text-sm text-slate-700 sm:col-span-2">{value}</dd>
                  </div>
                ))}
              </dl>

              <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm text-slate-600">
                <input type="checkbox" checked={acepta} onChange={(e) => setAcepta(e.target.checked)} className="mt-0.5 h-4 w-4 accent-[#1A7F37]" />
                Autorizo el tratamiento de mis datos personales conforme a la política de privacidad
                de la institución y a la Ley 1581 de 2012.
              </label>
              {errors.acepta && <p className="mt-2 text-xs text-red-600">{errors.acepta}</p>}
            </>
          )}

          {/* Paso 5 */}
          {step === 5 && (
            <div className="flex flex-col items-center py-6 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="h-8 w-8" />
              </span>
              <h2 className="tracking-display mt-5 text-2xl font-bold text-navy">
                Tu solicitud fue radicada con éxito
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">
                Hemos recibido tu {tipo.toLowerCase()}.{" "}
                {anonimo
                  ? "Guarda tu número de radicado para consultar el estado de tu solicitud."
                  : "Recibirás la respuesta en el correo registrado dentro de los términos establecidos por la ley."}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-apple border border-gold/50 bg-gold-50 px-6 py-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Número de radicado
                </span>
                <span className="text-xl font-bold tracking-tight text-govco-dark">{radicado}</span>
                <button
                  type="button"
                  onClick={copy}
                  className="press rounded-full p-2 text-slate-500 transition-all duration-200 hover:bg-white hover:text-navy"
                  aria-label="Copiar número de radicado"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              <button
                type="button"
                onClick={reset}
                className="press mt-8 rounded-full bg-govco px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-govco-dark"
              >
                Radicar una nueva solicitud
              </button>
            </div>
          )}

          {step < 5 && (
            <div className="mt-8 flex items-center justify-between gap-3">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={back}
                  className="press inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-navy/70 transition-all duration-200 hover:bg-slate-50"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Anterior
                </button>
              ) : (
                <span />
              )}
              <button
                type="button"
                onClick={next}
                className="press inline-flex items-center gap-2 rounded-full bg-govco px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-govco-dark"
              >
                {step === 4 ? "Enviar solicitud" : "Siguiente"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
