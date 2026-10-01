import {
  Building2,
  Scale,
  FileSignature,
  LineChart,
  ClipboardList,
  Users,
  Database,
  Baby,
  BarChart3,
  Headset,
  type LucideIcon,
} from "lucide-react";

export type ItaDocument = {
  title: string;
  type: "PDF" | "Enlace";
  date: string;
  size?: string;
};

export type ItaCategory = {
  id: string;
  numero: number;
  titulo: string;
  descripcion: string;
  icon: LucideIcon;
  documentos: ItaDocument[];
};

export const itaCategories: ItaCategory[] = [
  {
    id: "informacion-entidad",
    numero: 1,
    titulo: "Información de la entidad",
    descripcion: "Misión, visión, organigrama, directorio y funciones del colegio.",
    icon: Building2,
    documentos: [
      { title: "Organigrama institucional 2026", type: "PDF", date: "2026-01-15", size: "1.2 MB" },
      { title: "Directorio de funcionarios", type: "PDF", date: "2026-02-01", size: "340 KB" },
      { title: "Misión, visión y valores institucionales", type: "Enlace", date: "2025-11-10" },
    ],
  },
  {
    id: "normatividad",
    numero: 2,
    titulo: "Normatividad",
    descripcion: "Proyecto Educativo Institucional (PEI), Manual de Convivencia y resoluciones.",
    icon: Scale,
    documentos: [
      { title: "Proyecto Educativo Institucional (PEI) 2026", type: "PDF", date: "2026-01-20", size: "4.8 MB" },
      { title: "Manual de Convivencia Escolar", type: "PDF", date: "2026-01-20", size: "2.1 MB" },
      { title: "Resoluciones de reconocimiento oficial", type: "PDF", date: "2025-08-05", size: "890 KB" },
    ],
  },
  {
    id: "contratacion",
    numero: 3,
    titulo: "Contratación",
    descripcion: "Procesos de contratación, SECOP y Plan Anual de Adquisiciones (PAA).",
    icon: FileSignature,
    documentos: [
      { title: "Plan Anual de Adquisiciones (PAA) 2026", type: "PDF", date: "2026-01-31", size: "1.5 MB" },
      { title: "Procesos de contratación - SECOP II", type: "Enlace", date: "2026-02-10" },
      { title: "Contratos vigentes vigencia 2026", type: "PDF", date: "2026-02-15", size: "670 KB" },
    ],
  },
  {
    id: "planeacion-presupuesto",
    numero: 4,
    titulo: "Planeación y Presupuesto",
    descripcion: "Plan Operativo Anual, presupuesto de ingresos y gastos, ejecución presupuestal.",
    icon: LineChart,
    documentos: [
      { title: "Presupuesto aprobado vigencia 2026", type: "PDF", date: "2026-01-10", size: "2.3 MB" },
      { title: "Ejecución presupuestal - Primer trimestre", type: "PDF", date: "2026-04-05", size: "1.1 MB" },
      { title: "Plan de Acción Institucional 2026", type: "PDF", date: "2026-01-25", size: "1.8 MB" },
    ],
  },
  {
    id: "tramites-servicios",
    numero: 5,
    titulo: "Trámites y Servicios",
    descripcion: "Matrículas, certificados, constancias y otros trámites institucionales.",
    icon: ClipboardList,
    documentos: [
      { title: "Guía de matrícula y renovación 2026", type: "PDF", date: "2025-11-01", size: "950 KB" },
      { title: "Solicitud de certificados y constancias", type: "Enlace", date: "2026-01-05" },
      { title: "Requisitos de traslado e ingreso", type: "PDF", date: "2025-12-12", size: "410 KB" },
    ],
  },
  {
    id: "participacion-ciudadana",
    numero: 6,
    titulo: "Participación Ciudadana",
    descripcion: "Rendición de cuentas, gobierno escolar y espacios de participación.",
    icon: Users,
    documentos: [
      { title: "Informe de rendición de cuentas 2025", type: "PDF", date: "2025-12-20", size: "3.2 MB" },
      { title: "Acta de conformación del Gobierno Escolar", type: "PDF", date: "2026-02-01", size: "520 KB" },
      { title: "Cronograma de audiencias públicas", type: "Enlace", date: "2026-01-18" },
    ],
  },
  {
    id: "datos-abiertos",
    numero: 7,
    titulo: "Datos Abiertos",
    descripcion: "Conjuntos de datos institucionales en formatos reutilizables.",
    icon: Database,
    documentos: [
      { title: "Estadísticas de matrícula por grado (CSV)", type: "Enlace", date: "2026-02-01" },
      { title: "Indicadores de deserción escolar", type: "PDF", date: "2025-12-15", size: "780 KB" },
      { title: "Catálogo de datos abiertos del colegio", type: "Enlace", date: "2026-01-10" },
    ],
  },
  {
    id: "ninos-ninas-adolescentes",
    numero: 8,
    titulo: "Información para Niños, Niñas y Adolescentes",
    descripcion: "Contenido accesible y adaptado para la comunidad estudiantil.",
    icon: Baby,
    documentos: [
      { title: "Cartilla de derechos y deberes escolares", type: "PDF", date: "2025-10-01", size: "1.4 MB" },
      { title: "Ruta de atención integral para estudiantes", type: "PDF", date: "2025-09-15", size: "600 KB" },
      { title: "Línea de protección y bienestar escolar", type: "Enlace", date: "2026-01-08" },
    ],
  },
  {
    id: "reporte-desempeno",
    numero: 9,
    titulo: "Reporte de Desempeño",
    descripcion: "Resultados institucionales, pruebas Saber y planes de mejoramiento.",
    icon: BarChart3,
    documentos: [
      { title: "Resultados Pruebas Saber 11° - 2025", type: "PDF", date: "2026-01-22", size: "2.0 MB" },
      { title: "Plan de Mejoramiento Institucional 2026", type: "PDF", date: "2026-02-05", size: "1.6 MB" },
      { title: "Informe de gestión académica anual", type: "PDF", date: "2025-12-18", size: "2.4 MB" },
    ],
  },
  {
    id: "canales-atencion",
    numero: 10,
    titulo: "Canales de Atención",
    descripcion: "Puntos de contacto, horarios y medios de atención al ciudadano.",
    icon: Headset,
    documentos: [
      { title: "Directorio de canales de atención", type: "PDF", date: "2026-01-12", size: "300 KB" },
      { title: "Formulario PQRSDF en línea", type: "Enlace", date: "2026-01-01" },
      { title: "Horarios de atención presencial y virtual", type: "PDF", date: "2026-01-12", size: "220 KB" },
    ],
  },
];

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: "Circular" | "Noticia" | "Comunicado";
};

export const newsItems: NewsItem[] = [
  {
    id: "circular-001-2026",
    title: "Circular 001 de 2026: Inicio de calendario académico",
    excerpt:
      "Se informa a la comunidad educativa las fechas oficiales de inicio de actividades académicas para el año lectivo 2026.",
    date: "2026-01-20",
    category: "Circular",
  },
  {
    id: "jornada-matriculas",
    title: "Jornada extendida de matrículas para nuevos estudiantes",
    excerpt:
      "El colegio habilitará horario extendido en la oficina de admisiones durante la segunda semana de febrero.",
    date: "2026-02-03",
    category: "Noticia",
  },
  {
    id: "resultados-saber",
    title: "Reconocimiento por resultados en Pruebas Saber 11°",
    excerpt:
      "La institución fue destacada por el ICFES entre los colegios públicos con mayor mejora en el departamento.",
    date: "2026-01-25",
    category: "Comunicado",
  },
];
