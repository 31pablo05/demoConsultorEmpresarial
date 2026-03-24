export interface PasoProceso {
  numero: number;
  titulo: string;
  descripcion: string;
}

export const proceso: PasoProceso[] = [
  {
    numero: 1,
    titulo: "Diagnóstico",
    descripcion: "Entrevistas, análisis de datos y observación directa.",
  },
  {
    numero: 2,
    titulo: "Estrategia",
    descripcion: "Definimos juntos el rumbo, objetivos y prioridades.",
  },
  {
    numero: 3,
    titulo: "Implementación",
    descripcion: "Acompañamiento activo durante la ejecución.",
  },
  {
    numero: 4,
    titulo: "Seguimiento",
    descripcion: "Medición de resultados y revisión periódica.",
  },
];
