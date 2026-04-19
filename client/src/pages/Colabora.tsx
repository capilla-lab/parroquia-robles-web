import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Banknote, Copy } from 'lucide-react';
import { useState } from 'react';

/**
 * Colaborá con la Parroquia - Página de Donaciones
 * Diseño Clásico Sagrado: Presentación clara de opciones de donación
 */

export default function Colabora() {
  const [copiedAlias, setCopiedAlias] = useState<string | null>(null);

  const handleCopyToClipboard = (text: string, alias: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAlias(alias);
    setTimeout(() => setCopiedAlias(null), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Colaborá con la Parroquia
            </h1>
            <p className="text-xl text-white/90">
              Tu generosidad nos ayuda a continuar con nuestra misión de servicio y solidaridad
            </p>
          </div>
        </section>

        {/* Introducción */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <Heart className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" style={{ fontFamily: 'Playfair Display' }}>
                Tu Apoyo es Fundamental
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                La Parroquia Nuestra Señora del Rosario no recibe ningún aporte económico del estado. Nos sostenemos gracias a la generosidad
                de nuestra comunidad, que con sus donaciones nos permite continuar adelante con nuestras actividades pastorales, servicios
                sociales y obra misionera.
              </p>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-8 border border-accent/20">
              <p className="text-foreground text-lg leading-relaxed">
                Agradecemos profundamente tu aporte, que nos permite seguir siendo una comunidad de fe, esperanza y amor en el corazón de Buenos Aires.
                Cada donación, por pequeña que sea, es una expresión de solidaridad y compromiso con nuestra misión.
              </p>
            </div>
          </div>
        </section>

        {/* Opciones de Donación */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center" style={{ fontFamily: 'Playfair Display' }}>
              Formas de Colaborar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Transferencia Bancaria */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-border hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <Banknote className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Playfair Display' }}>
                    Transferencia Bancaria
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Banco</label>
                    <p className="text-lg text-foreground font-semibold">Banco Ciudad</p>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Razón Social</label>
                    <p className="text-lg text-foreground font-semibold">PARROQUIA NUESTRA SEÑORA DEL ROSARIO</p>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Cuenta Corriente</label>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="text-lg text-foreground font-mono font-semibold">1234567890</p>
                      <button
                        onClick={() => handleCopyToClipboard('1234567890', 'cuenta')}
                        className="p-2 hover:bg-muted rounded transition-colors"
                        title="Copiar número de cuenta"
                      >
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">CBU</label>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="text-sm text-foreground font-mono font-semibold break-all">0290020900000000104078</p>
                      <button
                        onClick={() => handleCopyToClipboard('0290020900000000104078', 'cbu')}
                        className="p-2 hover:bg-muted rounded transition-colors flex-shrink-0"
                        title="Copiar CBU"
                      >
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Alias</label>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="text-lg text-foreground font-mono font-semibold">ROSARIO.PARADA</p>
                      <button
                        onClick={() => handleCopyToClipboard('ROSARIO.PARADA', 'alias')}
                        className="p-2 hover:bg-muted rounded transition-colors"
                        title="Copiar alias"
                      >
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>

                  {copiedAlias && (
                    <div className="bg-green-50 border border-green-200 rounded p-3 text-sm text-green-700">
                      ✓ Copiado al portapapeles
                    </div>
                  )}
                </div>
              </div>

              {/* Mercado Pago */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-border hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Playfair Display' }}>
                    Mercado Pago
                  </h3>
                </div>

                <div className="space-y-4">
                  <p className="text-foreground">
                    Puedes hacer tu donación a través de Mercado Pago escaneando el código QR o utilizando nuestro alias.
                  </p>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 flex items-center justify-center min-h-48">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Código QR</p>
                      <div className="w-32 h-32 bg-white rounded border-2 border-blue-200 flex items-center justify-center">
                        <p className="text-xs text-muted-foreground">QR Mercado Pago</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Alias Mercado Pago</label>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="text-lg text-foreground font-mono font-semibold">delcarmen.mp</p>
                      <button
                        onClick={() => handleCopyToClipboard('delcarmen.mp', 'mp')}
                        className="p-2 hover:bg-muted rounded transition-colors"
                        title="Copiar alias"
                      >
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>

                  {copiedAlias === 'mp' && (
                    <div className="bg-green-50 border border-green-200 rounded p-3 text-sm text-green-700">
                      ✓ Copiado al portapapeles
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Otras Formas de Colaborar */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center" style={{ fontFamily: 'Playfair Display' }}>
              Otras Formas de Colaborar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-8 border border-rose-200 text-center">
                <h3 className="text-xl font-bold text-rose-600 mb-3" style={{ fontFamily: 'Playfair Display' }}>
                  Donaciones en Especie
                </h3>
                <p className="text-foreground text-sm">
                  Alimentos, ropa, artículos de higiene y otros productos que apoyen nuestras actividades sociales.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200 text-center">
                <h3 className="text-xl font-bold text-blue-600 mb-3" style={{ fontFamily: 'Playfair Display' }}>
                  Voluntariado
                </h3>
                <p className="text-foreground text-sm">
                  Dedica tu tiempo y talento a nuestros programas de Cáritas, catequesis y actividades comunitarias.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-8 border border-amber-200 text-center">
                <h3 className="text-xl font-bold text-amber-600 mb-3" style={{ fontFamily: 'Playfair Display' }}>
                  Intención de Misas
                </h3>
                <p className="text-foreground text-sm">
                  Solicita una misa por intenciones especiales. Consulta en Secretaría Parroquial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 md:p-12 border border-primary/20 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'Playfair Display' }}>
                ¿Tienes Preguntas?
              </h2>
              <p className="text-foreground mb-8">
                Contáctanos para conocer más sobre las formas de colaborar o si tienes alguna consulta.
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
