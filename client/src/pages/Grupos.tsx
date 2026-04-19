import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Grupos y Actividades - Página de Grupos Parroquiales
 * Diseño Clásico Sagrado: Grid de tarjetas con imágenes de actividades
 */

export default function Grupos() {
  const grupos = [
    {
      id: 1,
      nombre: 'Grupos Misioneros',
      descripcion: 'Comunidades dedicadas a la evangelización y servicio misionero en la parroquia y comunidades cercanas.',
      color: 'bg-gradient-to-br from-blue-600 to-blue-800',
    },
    {
      id: 2,
      nombre: 'Grupos de Jóvenes',
      descripcion: 'Espacios de encuentro, formación y diversión para jóvenes que desean vivir su fe de manera activa.',
      color: 'bg-gradient-to-br from-emerald-600 to-emerald-800',
    },
    {
      id: 3,
      nombre: 'Grupos de Formación',
      descripcion: 'Programas de estudio y profundización de la fe para adultos que buscan crecer espiritualmente.',
      color: 'bg-gradient-to-br from-purple-600 to-purple-800',
    },
    {
      id: 4,
      nombre: 'Grupos de Oración',
      descripcion: 'Comunidades de oración contemplativa y adoración al Santísimo Sacramento.',
      color: 'bg-gradient-to-br from-amber-600 to-amber-800',
    },
    {
      id: 5,
      nombre: 'Catequesis',
      descripcion: 'Programas de formación religiosa para niños, adolescentes y adultos en preparación a los sacramentos.',
      color: 'bg-gradient-to-br from-rose-600 to-rose-800',
    },
    {
      id: 6,
      nombre: 'Coros y Música',
      descripcion: 'Grupos de canto y música que animan las celebraciones litúrgicas de la comunidad.',
      color: 'bg-gradient-to-br from-indigo-600 to-indigo-800',
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
              Grupos y Actividades
            </h1>
            <p className="text-xl text-white/90">
              Descubre las comunidades y actividades que forman parte de nuestra parroquia
            </p>
          </div>
        </section>

        {/* Contenido Principal */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {grupos.map((grupo) => (
                <Link key={grupo.id} href="/#contacto">
                  <a className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer block">
                    {/* Fondo con gradiente */}
                    <div className={`${grupo.color} h-64 flex items-end p-6 relative overflow-hidden`}>
                      {/* Overlay decorativo */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>

                      {/* Contenido */}
                      <div className="relative z-10 w-full">
                        <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display' }}>
                          {grupo.nombre}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed mb-4">
                          {grupo.descripcion}
                        </p>
                        <div className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                          <span>Más información</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Contacto */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Playfair Display' }}>
              ¿Quieres participar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contáctanos para conocer más detalles sobre cualquiera de nuestros grupos y actividades.
              Estamos aquí para acoger a todos aquellos que deseen formar parte de nuestra comunidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contacto"
                className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity"
                style={{ fontFamily: 'Montserrat' }}
              >
                Envíanos un Mensaje
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
