import { useState } from 'react';

const OPCIONES = [
  'Diagnóstico estratégico',
  'Planificación con foco',
  'Acompañamiento ejecutivo',
  'Otro',
];

export default function ContactoForm() {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    email: '',
    servicio: '',
    mensaje: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = 'El nombre es requerido.';
    if (!form.email.trim()) {
      e.email = 'El email es requerido.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Email inválido.';
    }
    if (!form.servicio) e.servicio = 'Seleccioná una opción.';
    if (!form.mensaje.trim()) e.mensaje = 'El mensaje es requerido.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // Simulate send (no real endpoint yet)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const inputClass =
    'w-full bg-(--bg3) border border-(--line) text-(--text) placeholder:text-(--muted) font-sans font-light text-sm px-4 py-3 outline-none focus:border-(--accent) transition-colors duration-200';

  const errorClass = 'text-red-400 text-xs mt-1 font-sans';

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 py-12">
        <div className="w-12 h-12 border border-(--accent) flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-(--accent)"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-light text-(--text)">
          Mensaje enviado.
        </h3>
        <p className="font-sans text-sm font-light text-(--muted)">
          Gracias por escribirme. Voy a estar en contacto en las próximas 24–48 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Nombre + Empresa */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre *"
            value={form.nombre}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.nombre && <p className={errorClass}>{errors.nombre}</p>}
        </div>
        <div>
          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            value={form.empresa}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.email && <p className={errorClass}>{errors.email}</p>}
      </div>

      {/* Servicio */}
      <div>
        <select
          name="servicio"
          value={form.servicio}
          onChange={handleChange}
          className={`${inputClass} appearance-none cursor-pointer ${!form.servicio ? 'text-(--muted)' : ''}`}
        >
          <option value="" disabled>
            ¿En qué podría ayudarte? *
          </option>
          {OPCIONES.map((op) => (
            <option key={op} value={op} className="bg-(--bg3) text-(--text)">
              {op}
            </option>
          ))}
        </select>
        {errors.servicio && <p className={errorClass}>{errors.servicio}</p>}
      </div>

      {/* Mensaje */}
      <div>
        <textarea
          name="mensaje"
          placeholder="Mensaje *"
          rows={5}
          value={form.mensaje}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
        {errors.mensaje && <p className={errorClass}>{errors.mensaje}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="self-start flex items-center gap-3 px-8 py-3 bg-(--accent) text-(--bg) font-sans text-sm font-medium hover:bg-(--accent2) transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Enviando...' : 'Enviar mensaje'}
        {!loading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        )}
      </button>
    </form>
  );
}
