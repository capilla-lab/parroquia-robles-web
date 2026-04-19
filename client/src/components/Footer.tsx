import { Mail, Phone, MapPin, Facebook } from 'lucide-react';

/**
 * Footer Component - Pie de Página
 * Diseño Clásico Sagrado: Información de contacto y enlaces
 * Colores: Azul marino (#1B3A6B) con acentos dorados
 */

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Información de Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+541167902235" className="hover:text-accent transition-colors">
                  +54 11 6790-2235
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:contacto@parroquiarobles.com" className="hover:text-accent transition-colors">
                  Contacto
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p>Parada Robles</p>
                  <p>Exaltación de la Cruz</p>
                  <p>Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Horarios de Misa
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Lunes a Viernes:</strong>
                <br />
                09:30 hs
              </p>
              <p>
                <strong>Sábado:</strong>
                <br />
                19:00 hs
              </p>
              <p>
                <strong>Domingo:</strong>
                <br />
                10:30 hs y 19:00 hs
              </p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Síguenos
            </h3>
            <p className="mb-4 text-sm">Mantente conectado con nuestra comunidad</p>
            <a
              href="https://www.facebook.com/p/Parroquia-NtraSe%C3%B1ora-del-Rosario-de-San-Nicolas-Robles-100072375021022/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
              style={{ fontFamily: 'Montserrat' }}
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </a>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="text-center text-sm opacity-80">
            <p>
              © {new Date().getFullYear()} Parroquia Nuestra Señora del Rosario de San Nicolás. Todos los derechos
              reservados.
            </p>
            <p className="mt-2">Parada Robles, Exaltación de la Cruz, Buenos Aires</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
