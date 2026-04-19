import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Users, Utensils, Stethoscope, Gift, HandHeart } from 'lucide-react';

/**
 * Cáritas - Página de Servicios de Cáritas Parroquial
 * Diseño Clásico Sagrado: Presentación de servicios sociales y de solidaridad
 */

export default function Caritas() {
  const servicios = [
    {
      id: 1,
      nombre: 'Asistencia Integral',
      descripcion: 'Acompañamiento completo a familias en situación de vulnerabilidad, incluyendo trámites, turnos médicos y apoyo emocional.',
      icon: HandHeart,
      horario: 'Martes a las 17:00 hs',
    },
    {
      id: 2,
      nombre: 'Bolsones de Mercadería',
      descripcion: 'Entrega mensual de alimentos y productos básicos a familias del radio parroquial que requieren asistencia.',
      icon: Gift,
      horario: 'Una vez al mes',
    },
    {
      id: 3,
      nombre: 'Merendero',
      descripcion: 'Espacio de encuentro donde compartimos una merienda con las personas asistidas por Cáritas.',
      icon: Utensils,
      horario: 'Martes a las 17:30 hs',
    },
    {
      id: 4,
      nombre: 'Bancadero - Contención Psicológica',
      descripcion: 'Atención gratuita de un equipo de psicología para brindar contención y escucha a personas en situación de vulnerabilidad.',
      icon: Stethoscope,
      horario: 'Martes de 17:30 a 19:00 hs',
    },
    {
      id: 5,
      nombre: 'Noches de la Caridad',
      descripcion: 'Distribución de viandas calientes a personas en situación de calle, especialmente en invierno, con acompañamiento y contención.',
      icon: Heart,
      horario: 'Miércoles a las 18:00 hs',
    },
    {
      id: 6,
      nombre: 'Feria Solidaria',
      descripcion: 'Feria americana con ropa, zapatos y artículos a precios accesibles. Las ganancias se destinan a la compra de mercadería.',
      icon: Users,
      horario: 'Fechas especiales',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-rose-600 to-rose-700">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Cáritas Parroquial
            </h1>
            <p className="text-xl text-white/90">
              Servicio de solidaridad y acompañamiento a las personas más necesitadas de nuestra comunidad
            </p>
          </div>
        </section>

        {/* Sobre Cáritas */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" style={{ fontFamily: 'Playfair Display' }}>
                ¿Qué es Cáritas?
              </h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Cáritas es una organización internacional de la Iglesia Católica que trabaja para dar respuesta a las problemáticas sociales
                que derivan de la pobreza. En Argentina, funciona desde hace décadas con presencia en las 67 Diócesis del país.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Cáritas Parroquial funciona desde hace muchos años en nuestra parroquia, acompañando a familias carenciadas del barrio.
                Nuestro trabajo no se reduce a un mero asistencialismo, sino que buscamos brindar un acompañamiento integral a cada persona.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                El objetivo principal es animar y coordinar la obra social y caritativa de la Iglesia, con especial preferencia por las personas
                y comunidades más marginadas, buscando el desarrollo integral de todo el hombre y de todos los hombres.
              </p>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center" style={{ fontFamily: 'Playfair Display' }}>
              Nuestros Servicios
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicios.map((servicio) => {
                const Icon = servicio.icon;
                return (
                  <div key={servicio.id} className="bg-white rounded-lg shadow-lg p-8 border border-border hover:shadow-xl transition-shadow">
                    <Icon className="w-12 h-12 text-rose-600 mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-3" style={{ fontFamily: 'Playfair Display' }}>
                      {servicio.nombre}
                    </h3>
                    <p className="text-foreground mb-4 text-sm leading-relaxed">
                      {servicio.descripcion}
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="text-xs font-semibold text-rose-600 uppercase tracking-wide">
                        {servicio.horario}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cómo Participar */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center" style={{ fontFamily: 'Playfair Display' }}>
              ¿Cómo Participar?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Como Voluntario */}
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-8 border border-rose-200">
                <h3 className="text-2xl font-bold text-rose-600 mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Como Voluntario
                </h3>
                <p className="text-foreground mb-6">
                  Si deseas participar como voluntario en cualquiera de nuestros servicios, te invitamos a contactarnos en Secretaría Parroquial.
                </p>
                <p className="text-sm text-muted-foreground">
                  Estamos buscando personas comprometidas con la solidaridad que deseen dedicar su tiempo y talento al servicio de los más necesitados.
                </p>
              </div>

              {/* Como Donante */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-600 mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Como Donante
                </h3>
                <p className="text-foreground mb-6">
                  Tus donaciones son fundamentales para que podamos continuar con nuestro trabajo de asistencia integral.
                </p>
                <p className="text-sm text-muted-foreground">
                  Puedes colaborar con alimentos, ropa, artículos de higiene o realizar una donación económica. Consulta en Secretaría Parroquial.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="/#contacto"
                className="inline-block px-8 py-3 bg-rose-600 text-white font-bold rounded-lg hover:bg-rose-700 transition-colors"
                style={{ fontFamily: 'Montserrat' }}
              >
                Contactarnos
              </a>
            </div>
          </div>
        </section>

        {/* Reflexión */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-rose-600/10 to-rose-700/10">
          <div className="container mx-auto px-4 max-w-3xl">
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl text-foreground mb-4 italic" style={{ fontFamily: 'Playfair Display' }}>
                "Lo que hagas por los más pequeños, lo haces por mí"
              </p>
              <p className="text-muted-foreground">Mateo 25:40</p>
            </blockquote>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
