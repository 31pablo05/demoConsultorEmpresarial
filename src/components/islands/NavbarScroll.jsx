import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre mí', href: '#sobre' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Artículos', href: '#articulos' },
  { label: 'Contacto', href: '#contacto' },
];

const SECTION_IDS = ['inicio', 'servicios', 'sobre', 'proceso', 'articulos', 'contacto'];

export default function NavbarScroll({ siteName }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy
      let current = 'inicio';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-(--bg)/90 backdrop-blur-md border-b border-(--line)'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNav(e, '#inicio')}
          className="font-serif text-xl font-light tracking-wide text-(--accent2) hover:text-(--accent) transition-colors"
        >
          {siteName}
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNav(e, item.href)}
                  className={`font-sans text-sm font-light tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-(--accent2)'
                      : 'text-(--muted) hover:text-(--text)'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <a
          href="#contacto"
          onClick={(e) => handleNav(e, '#contacto')}
          className="hidden md:inline-flex items-center px-5 py-2 border border-(--accent) text-(--accent) text-sm font-light font-sans rounded-none hover:bg-(--accent) hover:text-(--bg) transition-all duration-300"
        >
          Hablemos
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-(--text)"
          aria-label="Abrir menú"
        >
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-(--bg2) border-t border-(--line) px-6 py-6">
          <ul className="flex flex-col gap-5">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNav(e, item.href)}
                    className={`font-sans text-base font-light transition-colors ${
                      isActive ? 'text-(--accent2)' : 'text-(--muted) hover:text-(--text)'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#contacto"
                onClick={(e) => handleNav(e, '#contacto')}
                className="inline-flex items-center px-5 py-2 border border-(--accent) text-(--accent) text-sm font-light font-sans hover:bg-(--accent) hover:text-(--bg) transition-all duration-300"
              >
                Hablemos
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
