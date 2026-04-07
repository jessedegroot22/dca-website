import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Shield, TrendingUp, Scale, Activity, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function InformatiebeveiligingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-accent text-xs font-bold uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-brand-accent" />
                THEMA
              </div>

              <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
                Informatiebeveiliging
                <br />
                <span className="text-brand-primary">Fundament van vertrouwen.</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed">
                Informatie is het nieuwe goud. Bescherm uw organisatie tegen datalekken en
                cyberaanvallen. Wij helpen u grip te krijgen op uw informatiebeveiliging.
              </p>

              <div>
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-dark hover:bg-slate-800 text-white rounded-full font-bold group"
                >
                  <Link href="#normenkaders">
                    Bekijk Normenkaders
                    <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-gradient-to-br from-brand-dark to-slate-900">
              <div className="aspect-[4/3] flex items-center justify-center p-12">
                <div className="w-full max-w-sm bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-slate-400 text-sm mb-1">Beveiligingsstatus</div>
                      <div className="text-white font-bold text-lg">Secure & Monitored</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Laatste scan</span>
                      <span className="text-green-400 font-medium">2 minuten geleden</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-3">
                      <span className="text-slate-400">Actieve dreigingen</span>
                      <span className="text-white font-bold">0</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-3">
                      <span className="text-slate-400">Compliance score</span>
                      <span className="text-green-400 font-bold">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Focus on This Theme */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Waarom focussen op dit thema?</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Informatiebeveiliging is geen kostenpost, maar een randvoorwaarde voor zakelijk
              succes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ReasonCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Commerciële Kansen"
              description="Steeds meer opdrachtgevers eisen certificering. Zonder ISO 27001 of NEN 7510 komt u simpelweg niet meer binnen bij aanbestedingen."
              color="blue"
            />
            <ReasonCard
              icon={<Scale className="w-8 h-8" />}
              title="Wet & Regelgeving"
              description="De wetgever wordt strenger (denk aan de NIS2 richtlijn). Bestuurders kunnen rechtstreeks aansprakelijk worden gesteld voor nalatigheid."
              color="purple"
            />
            <ReasonCard
              icon={<Activity className="w-8 h-8" />}
              title="Continuïteit"
              description="Eén hack of ransomware-aanval kan uw bedrijfscontinuïteit bedreigen. Preventie en goede beveiliging zijn van levensbelang."
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Relevant Standards */}
      <section id="normenkaders" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-brand-primary font-bold uppercase tracking-wider text-sm mb-4">
              OPLOSSINGEN
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Relevante Normenkaders
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <StandardCard
              label="ISO"
              labelColor="text-blue-600"
              title="ISO 27001"
              description="Dé internationale standaard voor informatiebeveiliging. Bevat niet alleen de eisen als een zeer gerichte tool dat u in die zaken werkt."
              link="/frameworks/iso-27001"
            />
            <StandardCard
              label="NEN"
              labelColor="text-green-600"
              title="NEN 7510"
              description="Informatiebeveiliging in de zorg. Specifiek voor organisaties die persoonsgegevens verwerken in de zorgsector."
              link="/frameworks/nen-7510"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-blue-700 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om te certificeren?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Vraag vandaag nog een vrijblijvend adviesgesprek aan. We bespreken uw situatie en geven
            direct inzicht in de stappen die nodig zijn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-accent hover:bg-orange-600 text-white rounded-full font-bold"
            >
              <Link href="#contact">Gratis Adviesgesprek</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white rounded-full font-bold backdrop-blur-sm"
            >
              <Link href="#brochure">Download Brochure</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ReasonCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}) {
  const colorClasses = {
    blue: 'bg-blue-500/20 text-blue-400',
    purple: 'bg-purple-500/20 text-purple-400',
    green: 'bg-green-500/20 text-green-400',
  }

  return (
    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-8 hover:bg-slate-800/70 transition">
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colorClasses[color as keyof typeof colorClasses]}`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </Card>
  )
}

function StandardCard({
  label,
  labelColor,
  title,
  description,
  link,
}: {
  label: string
  labelColor: string
  title: string
  description: string
  link: string
}) {
  return (
    <Card className="p-8 hover:shadow-lg transition group">
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`px-3 py-1 rounded-lg bg-slate-100 ${labelColor} font-bold text-sm uppercase tracking-wider`}
        >
          {label}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-brand-dark mb-3">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      <Link
        href={link}
        className="text-brand-primary font-bold hover:underline inline-flex items-center gap-2 group-hover:gap-3 transition-all"
      >
        Meer informatie →
      </Link>
    </Card>
  )
}
