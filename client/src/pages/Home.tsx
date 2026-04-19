import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Users, BookOpen, Flame, MapPin, Phone, Clock, Handshake } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Home Page - Página Principal de la Parroquia
 * Diseño Clásico Sagrado: Elegancia tradicional con solemnidad
 * Estructura: Hero, Misas, Sobre Nosotros, Servicios, Contacto
 */

export default function Home() {
  // URLs de imágenes generadas
  const heroImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028227964/Egh5a8XPGJX5DgBzxUhvUs/hero-iglesia-B7Dti29EJpYCykBx8xeYZi.webp';
  const comunidadImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028227964/Egh5a8XPGJX5DgBzxUhvUs/comunidad-iglesia-b24xq6iHEbkNE47jmRWDHF.webp';
  const rosarioImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028227964/Egh5a8XPGJX5DgBzxUhvUs/rosario-detalle-C2nAqE8zAn7sT9B2f2PwRR.webp';
  const velasImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028227964/Egh5a8XPGJX5DgBzxUhvUs/velas-iglesia-Zy2Txp5CjcZYftcDzuwZGD.webp';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="Interior de la iglesia"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display' }}>
              Parroquia Nuestra Señora del Rosario de San Nicolás
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">Parada Robles, Exaltación de la Cruz, Provincia de Buenos Aires</p>
            <p className="text-lg opacity-90 mb-8">
              Un lugar de encuentro, fe y comunidad en el corazón de Parada Robles
            </p>
            <a
              href="#misas"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition-opacity"
              style={{ fontFamily: 'Montserrat' }}
            >
              Ver Horarios de Misa
            </a>
          </div>
        </section>

        {/* Sección de Misas */}
        <section id="misas" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary" style={{ fontFamily: 'Playfair Display' }}>
              Horarios de Misa
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Lunes a Viernes */}
              <div className="bg-card rounded-lg shadow-lg p-8 border border-border hover:shadow-xl transition-shadow">
                <Flame className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Lunes a Viernes
                </h3>
                <p className="text-lg font-semibold text-accent mb-2">09:30 hs</p>
                <p className="text-muted-foreground">Misa Matutina</p>
              </div>

              {/* Sábado */}
              <div className="bg-card rounded-lg shadow-lg p-8 border border-border hover:shadow-xl transition-shadow">
                <Flame className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Sábado
                </h3>
                <p className="text-lg font-semibold text-accent mb-2">19:00 hs</p>
                <p className="text-muted-foreground">Misa Vespertina</p>
              </div>

              {/* Domingo - Mañana */}
              <div className="bg-card rounded-lg shadow-lg p-8 border border-border hover:shadow-xl transition-shadow">
                <Flame className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Domingo
                </h3>
                <p className="text-lg font-semibold text-accent mb-2">10:30 hs</p>
                <p className="text-muted-foreground">Misa Dominical</p>
              </div>

              {/* Domingo - Tarde */}
              <div className="bg-card rounded-lg shadow-lg p-8 border border-border hover:shadow-xl transition-shadow">
                <Flame className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Domingo
                </h3>
                <p className="text-lg font-semibold text-accent mb-2">19:00 hs</p>
                <p className="text-muted-foreground">Misa Vespertina</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-muted rounded-lg border border-border">
              <p className="text-center text-muted-foreground">
                <strong>Secretaría Parroquial:</strong> Lunes y Miércoles de 15:00 a 17:00 hs
                <br />
                <strong>Teléfono:</strong> +54 11 6790-2235
              </p>
            </div>
          </div>
        </section>

        {/* Sección Sobre Nosotros */}
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Imagen */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={comunidadImage} alt="Comunidad de la parroquia" className="w-full h-auto" />
              </div>

              {/* Contenido */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: 'Playfair Display' }}>
                  Sobre Nosotros
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-accent to-transparent mb-6"></div>

                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  La Parroquia Nuestra Señora del Rosario de San Nicolás es una comunidad de fe ubicada en Parada Robles,
                  en el partido de Exaltación de la Cruz, provincia de Buenos Aires.
                </p>

                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  Somos una comunidad dedicada a vivir los valores del Evangelio, celebrando la fe a través de la Eucaristía
                  y los sacramentos, y sirviendo a nuestros hermanos con amor y solidaridad.
                </p>

                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Nuestra misión es ser un espacio de encuentro, oración y crecimiento espiritual para todos los miembros de
                  la comunidad, donde cada persona se sienta acogida y valorada.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <Link href="/capillas">
                    <a className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-primary">Nuestras Capillas</h4>
                        <p className="text-sm text-muted-foreground">Espacios de oración</p>
                      </div>
                    </a>
                  </Link>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary">Comunidad</h4>
                      <p className="text-sm text-muted-foreground">Unidos en la fe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Párroco y Diáconos */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary" style={{ fontFamily: 'Playfair Display' }}>
              Nuestro Equipo Sacerdotal
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-12"></div>

            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-12 border border-border">
                <div className="mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto flex items-center justify-center mb-6">
                    <span className="text-4xl text-white">✝</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Párroco</p>
                    <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Playfair Display' }}>
                      P. Nombre del Párroco
                    </h3>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Vicario</p>
                    <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Playfair Display' }}>
                      P. Nombre del Vicario
                    </h3>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Diácono</p>
                    <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Playfair Display' }}>
                      Diác. Nombre del Diácono
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Servicios */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary" style={{ fontFamily: 'Playfair Display' }}>
              Nuestros Servicios
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sacramentos */}
              <div className="bg-card rounded-lg shadow-lg p-8 border border-border hover:shadow-xl transition-shadow">
                <BookOpen className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-3" style={{ fontFamily: 'Playfair Display' }}>
                  Sacramentos
                </h3>
                <p className="text-foreground">
                  Celebramos los sacramentos de Bautismo, Confirmación, Matrimonio, Penitencia y Unción de los Enfermos.
                </p>
              </div>

              {/* Catequesis */}
              <div className="bg-card rounded-lg shadow-lg p-8 border border-border hover:shadow-xl transition-shadow">
                <BookOpen className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-3" style={{ fontFamily: 'Playfair Display' }}>
                  Catequesis
                </h3>
                <p className="text-foreground">
                  Programas de formación religiosa para niños, jóvenes y adultos que deseen profundizar su fe.
                </p>
              </div>

              {/* Actividades Comunitarias */}
              <div className="bg-card rounded-lg shadow-lg p-8 border border-border hover:shadow-xl transition-shadow">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-3" style={{ fontFamily: 'Playfair Display' }}>
                  Actividades Comunitarias
                </h3>
                <p className="text-foreground">
                  Celebraciones especiales, encuentros comunitarios y actividades de solidaridad con los necesitados.
                </p>
              </div>

              {/* Confesiones */}
              <div className="bg-card rounded-lg shadow-lg p-8 border border-border hover:shadow-xl transition-shadow">
                <Flame className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-3" style={{ fontFamily: 'Playfair Display' }}>
                  Confesiones
                </h3>
                <p className="text-foreground">
                  Disponibles antes de las misas y en horarios especiales. Consultar con la secretaría parroquial.
                </p>
              </div>

              {/* Adoración */}
              <div className="bg-card rounded-lg shadow-lg p-8 border border-border hover:shadow-xl transition-shadow">
                <Flame className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-3" style={{ fontFamily: 'Playfair Display' }}>
                  Adoración al Santísimo
                </h3>
                <p className="text-foreground">
                  Momentos de oración y contemplación en presencia del Santísimo Sacramento.
                </p>
              </div>

              {/* Asesoramiento Espiritual */}
              <div className="bg-card rounded-lg shadow-lg p-8 border border-border hover:shadow-xl transition-shadow">
                <Heart className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-3" style={{ fontFamily: 'Playfair Display' }}>
                  Asesoramiento Espiritual
                </h3>
                <p className="text-foreground">
                  Acompañamiento pastoral para todos aquellos que deseen crecer en su vida espiritual.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Colaborá con la Parroquia */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-accent/10 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <Handshake className="w-12 h-12 text-accent flex-shrink-0" />
                <h2 className="text-4xl md:text-5xl font-bold text-primary" style={{ fontFamily: 'Playfair Display' }}>
                  Colaborá con la Parroquia
                </h2>
              </div>
              <div className="h-1 w-24 bg-gradient-to-r from-accent to-transparent mb-8"></div>

              <p className="text-lg text-foreground mb-6 leading-relaxed">
                La Parroquia Nuestra Señora del Rosario no recibe aportes económicos del estado. Nos sostenemos gracias a la generosidad
                de nuestra comunidad. Tu donación nos permite continuar con nuestras actividades pastorales, servicios sociales y obra misionera.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 border border-border text-center">
                  <p className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Transferencia</p>
                  <p className="text-primary font-semibold">Banco Ciudad</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-border text-center">
                  <p className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Mercado Pago</p>
                  <p className="text-primary font-semibold">Alias: delcarmen.mp</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-border text-center">
                  <p className="text-sm font-bold text-accent uppercase tracking-widest mb-2">En Especie</p>
                  <p className="text-primary font-semibold">Alimentos y artículos</p>
                </div>
              </div>

              <a
                href="/colabora"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity"
                style={{ fontFamily: 'Montserrat' }}
              >
                Ver Todas las Opciones
              </a>
            </div>
          </div>
        </section>

        {/* Sección de Contacto */}
        <section id="contacto" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary" style={{ fontFamily: 'Playfair Display' }}>
              Contacto
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Información de Contacto */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6" style={{ fontFamily: 'Playfair Display' }}>
                  Ubicación e Información
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary mb-2">Dirección</h4>
                      <p className="text-foreground">
                        Parada Robles
                        <br />
                        Exaltación de la Cruz
                        <br />
                        Buenos Aires, Argentina
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary mb-2">Teléfono</h4>
                      <a href="tel:+541167902235" className="text-foreground hover:text-accent transition-colors">
                        +54 11 6790-2235
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary mb-2">Horario de Secretaría</h4>
                      <p className="text-foreground">
                        Lunes y Miércoles
                        <br />
                        15:00 a 17:00 hs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulario de Contacto */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6" style={{ fontFamily: 'Playfair Display' }}>
                  Envíanos un Mensaje
                </h3>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Nombre</label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Mensaje</label>
                    <textarea
                      placeholder="Tu mensaje..."
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity"
                    style={{ fontFamily: 'Montserrat' }}
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


