import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Método', href: '#metodo' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre mí', href: '#sobre' },
  { label: 'Artículos', href: '/articulos' },
  { label: 'Contacto', href: '#contacto' },
];

const SECTION_IDS = ['inicio', 'metodo', 'servicios', 'sobre', 'articulos', 'contacto'];

export default function NavbarScroll({ logoSrc }) {
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
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setMenuOpen(false);
      return;
    }

    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-cream/95 backdrop-blur-md ${
        scrolled ? 'shadow-sm' : ''
      }`}
      style={{ borderBottom: '1px solid rgba(211,153,69,0.30)' }}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNav(e, '#inicio')}
          className="flex items-center"
          aria-label="Nogolí Consulting — inicio"
        >
          {logoSrc ? (
            <img src={logoSrc} alt="Nogolí Consulting" className="w-20 h-20 object-contain" />
          ) : (
            <span className="font-serif text-espresso" style={{fontSize: '20px', letterSpacing: '0.04em', fontWeight: '700'}}>
              Nogolí Consulting
            </span>
          )}
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
                  className={`font-sans text-sm font-normal tracking-wide transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold-dark after:transition-all after:duration-300 ${
                    isActive
                      ? 'text-gold-dark after:w-full'
                      : 'text-dark-mid hover:text-espresso after:w-0 hover:after:w-full'
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
          className="hidden md:inline-flex items-center px-5 py-2 border border-gold-dark text-gold-dark text-sm font-medium font-sans rounded-sm hover:bg-gold-dark hover:text-cream transition-all duration-200"
        >
          Hablemos
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-espresso"
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
        <div className="md:hidden bg-cream border-t px-6 py-6 shadow-lg" style={{borderColor: 'rgba(211,153,69,0.30)'}}>
          <ul className="flex flex-col gap-5">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNav(e, item.href)}
                    className={`font-sans text-base font-normal transition-colors ${
                      isActive ? 'text-gold-dark' : 'text-dark-mid hover:text-espresso'
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
                className="inline-flex items-center px-5 py-2 border border-gold-dark text-gold-dark text-sm font-medium font-sans rounded-sm hover:bg-gold-dark hover:text-cream transition-all duration-200"
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
