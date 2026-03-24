export interface Servicio {
  id: number;
  numero: string;
  nombre: string;
  descripcion: string;
  icono: string;
}

export const servicios: Servicio[] = [
  {
    id: 1,
    numero: "01",
    nombre: "Diagnóstico estratégico",
    descripcion:
      "Análisis profundo del estado actual de tu organización: estructura, mercado, procesos y capacidades. Identificamos fortalezas reales y bloqueos concretos.",
    icono: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>`,
  },
  {
    id: 2,
    numero: "02",
    nombre: "Planificación con foco",
    descripcion:
      "Definición de objetivos claros, prioridades reales y un plan de acción ejecutable. Sin frameworks de moda: solo lo que tiene sentido para tu empresa.",
    icono: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
  },
  {
    id: 3,
    numero: "03",
    nombre: "Acompañamiento ejecutivo",
    descripcion:
      "Trabajo continuo junto al equipo directivo para implementar la estrategia, resolver obstáculos en el camino y mantener el foco en lo que importa.",
    icono: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
];
