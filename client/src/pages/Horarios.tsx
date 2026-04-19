import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, MapPin, Phone } from 'lucide-react';

/**
 * Horarios - Página de Horarios Expandida
 * Diseño Clásico Sagrado: Presentación clara y detallada de horarios
 */

export default function Horarios() {
  const horariosMisas = [
    {
      dia: 'Lunes a Viernes',
      horarios: ['09:30 hs'],
      tipo: 'Misa Matutina',
      descripcion: 'Celebración eucarística matutina para la comunidad',
    },
    {
      dia: 'Sábado',
      horarios: ['19:00 hs'],
      tipo: 'Misa Vespertina',
      descripcion: 'Misa de preparación para el domingo',
    },
    {
      dia: 'Domingo',
      horarios: ['10:30 hs', '19:00 hs'],
      tipo: 'Misas Dominicales',
      descripcion: 'Celebraciones principales de la semana',
    },
  ];

  const servicios = [
    {
      nombre: 'Confesiones',
      horarios: 'Antes de cada misa y en horarios especiales',
      descripcion: 'Consultar con la secretaría parroquial para horarios específicos',
    },
    {
      nombre: 'Adoración al Santísimo',
      horarios: 'Según programación especial',
      descripcion: 'Momentos de oración y contemplación en presencia del Santísimo Sacramento',
    },
    {
      nombre: 'Rosario',
      horarios: 'Diariamente antes de la misa',
      descripcion: 'Rezo comunitario del rosario',
    },
  ];

  const secretaria = [
    {
      dia: 'Lunes',
      horario: '15:00 a 17:00 hs',
    },
    {
      dia: 'Miércoles',
      horario: '15:00 a 17:00 hs',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Horarios de Misas
            </h1>
            <p className="text-xl text-white/90">
              Encuentra los horarios de las celebraciones eucarísticas y servicios parroquiales
            </p>
          </div>
        </section>

        {/* Horarios de Misas */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center" style={{ fontFamily: 'Playfair Display' }}>
              Celebraciones Eucarísticas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {horariosMisas.map((horario, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-border hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: 'Playfair Display' }}>
                    {horario.dia}
                  </h3>
                  <div className="mb-6">
                    {horario.horarios.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 mb-3">
                        <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-lg font-semibold text-accent">{h}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold text-primary mb-2">{horario.tipo}</p>
                    <p className="text-muted-foreground text-sm">{horario.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Otros Servicios */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center" style={{ fontFamily: 'Playfair Display' }}>
              Otros Servicios
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicios.map((servicio, index) => (
                <div key={index} className="bg-background rounded-lg p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary mb-3" style={{ fontFamily: 'Playfair Display' }}>
                    {servicio.nombre}
                  </h3>
                  <div className="flex items-start gap-3 mb-4">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <p className="font-semibold text-foreground">{servicio.horarios}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">{servicio.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secretaría Parroquial */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 md:p-12 border border-primary/20">
              <h2 className="text-3xl font-bold text-primary mb-8" style={{ fontFamily: 'Playfair Display' }}>
                Secretaría Parroquial
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Horarios */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-6" style={{ fontFamily: 'Playfair Display' }}>
                    Horarios de Atención
                  </h3>
                  <div className="space-y-4">
                    {secretaria.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-primary">{item.dia}</p>
                          <p className="text-muted-foreground">{item.horario}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contacto */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-6" style={{ fontFamily: 'Playfair Display' }}>
                    Contacto
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary">Teléfono</p>
                        <a href="tel:+541167902235" className="text-accent hover:underline">
                          +54 11 6790-2235
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary">Ubicación</p>
                        <p className="text-muted-foreground">
                          Parada Robles
                          <br />
                          Exaltación de la Cruz
                          <br />
                          Buenos Aires, Argentina
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
