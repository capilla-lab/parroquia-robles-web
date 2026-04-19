import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, Facebook, Instagram, Youtube } from 'lucide-react';

/**
 * Header Component - Navegación Principal
 * Diseño Clásico Sagrado: Elegancia tradicional con navegación clara
 * Colores: Azul marino (#1B3A6B) y oro (#D4AF37)
 * Tipografía: Montserrat para navegación
 */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Capillas', href: '/capillas' },
    { label: 'Misas', href: '/horarios' },
    { label: 'Grupos', href: '/grupos' },
    { label: 'Cáritas', href: '/caritas' },
    { label: 'Colaborá', href: '/colabora' },
    { label: 'Contacto', href: '/#contacto' },
  ];

  return (
    <header className="bg-white border-b-2 border-accent shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-accent text-xl font-bold">✝</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-primary font-bold text-lg" style={{ fontFamily: 'Playfair Display' }}>
                  Parroquia
                </h1>
                <p className="text-accent text-xs font-semibold" style={{ fontFamily: 'Montserrat' }}>
                  Nuestra Señora del Rosario
                </p>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="text-primary hover:text-accent transition-colors duration-300 font-semibold"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="flex gap-4 ml-4 pl-4 border-l border-border">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors" title="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors" title="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors" title="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="text-primary hover:text-accent transition-colors duration-300 font-semibold py-2"
                  style={{ fontFamily: 'Montserrat' }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="flex gap-4 pt-4 border-t border-border mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors" title="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors" title="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors" title="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
