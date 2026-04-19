import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone } from 'lucide-react';

/**
 * Capillas - Página de Capillas de la Parroquia
 * Diseño Clásico Sagrado: Presentación de las tres capillas con mapas integrados
 */

interface Capilla {
  id: number;
  nombre: string;
  ubicacion: string;
  direccion: string;
  coordenadas: {
    lat: number;
    lng: number;
  };
  descripcion: string;
  horarios?: string;
}

const capillas: Capilla[] = [
  {
    id: 1,
    nombre: 'Santísima Trinidad',
    ubicacion: 'FUSEDIM',
    direccion: 'Pasaje Siroco, Parcela 12, Parada Robles',
    coordenadas: {
      lat: -34.2847,
      lng: -59.1234,
    },
    descripcion:
      'La Capilla Santísima Trinidad es un espacio dedicado a la adoración y oración. Ubicada en el corazón de FUSEDIM, es un lugar de encuentro espiritual para la comunidad.',
    horarios: 'Consultar en secretaría parroquial',
  },
  {
    id: 2,
    nombre: 'María Madre de la Esperanza',
    ubicacion: 'El Guardamonte y La Cortejada',
    direccion: 'El Guardamonte y La Cortejada - El Remanso',
    coordenadas: {
      lat: -34.2856,
      lng: -59.1289,
    },
    descripcion:
      'La Capilla María Madre de la Esperanza es un santuario mariano dedicado a la Virgen María. Es un lugar de paz y contemplación donde la comunidad se reúne para rezar el rosario y participar en celebraciones especiales.',
    horarios: 'Consultar en secretaría parroquial',
  },
  {
    id: 3,
    nombre: 'San Francisco de Asís',
    ubicacion: 'Parque Sakura',
    direccion: 'Rubén Darío y García Lorca, Parque Sakura',
    coordenadas: {
      lat: -34.2834,
      lng: -59.1267,
    },
    descripcion:
      'La Capilla San Francisco de Asís es un espacio dedicado a la contemplación y la oración. Ubicada en el hermoso Parque Sakura, es un lugar de encuentro comunitario y reflexión espiritual.',
    horarios: 'Consultar en secretaría parroquial',
  },
];

export default function Capillas() {

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Nuestras Capillas
            </h1>
            <p className="text-xl text-white/90">
              Conoce los espacios sagrados de nuestra comunidad parroquial
            </p>
          </div>
        </section>

        {/* Introducción */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" style={{ fontFamily: 'Playfair Display' }}>
                Espacios de Oración y Encuentro
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                La Parroquia Nuestra Señora del Rosario cuenta con tres capillas ubicadas estratégicamente en la comunidad. Cada una de ellas
                es un espacio sagrado dedicado a la oración, la contemplación y el encuentro espiritual de nuestros fieles.
              </p>
            </div>
          </div>
        </section>

        {/* Capillas */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {capillas.map((capilla, index) => (
              <div key={capilla.id} className={`mb-16 ${index !== capillas.length - 1 ? 'pb-16 border-b border-border' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Información */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Playfair Display' }}>
                      {capilla.nombre}
                    </h2>
                    <p className="text-accent font-bold text-sm uppercase tracking-widest mb-6">{capilla.ubicacion}</p>

                    <p className="text-foreground text-lg leading-relaxed mb-8">{capilla.descripcion}</p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-bold text-primary mb-1">Ubicación</p>
                          <p className="text-foreground">{capilla.direccion}</p>
                        </div>
                      </div>

                      {capilla.horarios && (
                        <div className="flex items-start gap-4">
                          <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-bold text-primary mb-1">Horarios</p>
                            <p className="text-foreground">{capilla.horarios}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(capilla.direccion)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-8 px-6 py-2 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition-opacity"
                      style={{ fontFamily: 'Montserrat' }}
                    >
                      Ver en Google Maps
                    </a>
                  </div>

                  {/* Mapa */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="w-full h-96 rounded-lg shadow-lg border border-border bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                        <p className="text-muted-foreground font-semibold">Haz clic en el botón para ver en Google Maps</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'Playfair Display' }}>
              ¿Necesitas Más Información?
            </h2>
            <p className="text-foreground mb-8">
              Si tienes preguntas sobre nuestras capillas o deseas conocer más sobre los servicios que ofrecemos, no dudes en contactarnos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contacto"
                className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity"
                style={{ fontFamily: 'Montserrat' }}
              >
                Enviar Mensaje
              </a>
              <a
                href="tel:+541167902235"
                className="px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition-opacity"
                style={{ fontFamily: 'Montserrat' }}
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
