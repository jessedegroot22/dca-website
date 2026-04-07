import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Check, Shield, Users, Zap, Target } from 'lucide-react'

export default function PakkettenPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-52 pb-40 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.05] tracking-tight">
            Onze pakketten
          </h1>
          <div className="w-20 h-0.5 bg-slate-300 mx-auto mb-8"></div>
          <p className="text-xl text-slate-700 leading-relaxed max-w-[700px] mx-auto">
            Compliance ondersteuning afgestemd op jouw organisatie. Of je nu volledige begeleiding zoekt, zelfstandig wilt werken met ons platform, of een combinatie daarvan—we hebben een passende oplossing.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Consultancy */}
            <div className="bg-white border border-slate-200 rounded-xl p-12 hover:shadow-xl transition-all flex flex-col shadow-sm">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Consultancy</h3>
                <p className="text-slate-600 leading-relaxed">
                  Persoonlijke begeleiding van ervaren consultants die je door het hele proces heen ondersteunen.
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Persoonlijke begeleiding</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Implementatie-ondersteuning</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Auditvoorbereiding</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Geschikt voor organisaties die maatwerk willen</span>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white h-12 font-semibold"
              >
                <Link href="#contact">Plan een gesprek</Link>
              </Button>
            </div>

            {/* Compliance Tool */}
            <div className="bg-slate-50 border-2 border-slate-300 rounded-xl p-12 hover:shadow-xl transition-all flex flex-col shadow-md relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-slate-200 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-300">
                  Populair
                </span>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Compliance Tool</h3>
                <p className="text-slate-700 leading-relaxed">
                  Ons volledig geautomatiseerde platform waarmee je zelfstandig compliance kunt beheren.
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-800">Volledig platform</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-800">Geautomatiseerde voortgangstracking</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-800">Audit-ready documentatie</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-800">Geschikt voor organisaties die zelfstandig willen werken</span>
                </div>
              </div>

              <Button
                asChild
                className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12 font-semibold"
              >
                <Link href="/platform">Bekijk het platform</Link>
              </Button>
            </div>

            {/* Combinatie */}
            <div className="bg-white border border-slate-200 rounded-xl p-12 hover:shadow-xl transition-all flex flex-col shadow-sm">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Combinatie</h3>
                <p className="text-slate-600 leading-relaxed">
                  Het beste van beide werelden: ons platform gecombineerd met persoonlijke consultancy.
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Platform + consultancy</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Strategische begeleiding</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Snellere certificering</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Geschikt voor organisaties die volledige ontzorging willen</span>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white h-12 font-semibold"
              >
                <Link href="#contact">Vraag een voorstel aan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Explanation */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-12 shadow-sm">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
              Maatwerk tarieven
            </h2>
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                De investering is afhankelijk van de omvang van jouw organisatie, de scope van het project en de gekozen frameworks. Elk traject is uniek.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                We starten altijd met een inhoudelijk gesprek. Niet vanuit cijfers, maar vanuit wat jouw organisatie nodig heeft om compliant te worden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-40 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-20 text-center">
            Waarom organisaties voor ons kiezen
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl p-10 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Bewezen ervaring
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Onze consultants hebben tientallen organisaties succesvol door certificeringstrajecten geleid. Van startups tot enterprise.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-10 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Gestructureerde aanpak
              </h3>
              <p className="text-slate-700 leading-relaxed">
                We volgen een duidelijke methodiek: gap-analyse, implementatie, auditvoorbereiding en certificering. Geen verrassingen.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-10 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Geïntegreerd platform
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Onze software maakt compliance overzichtelijk en transparant. Je ziet altijd waar je staat en wat er nog moet gebeuren.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-10 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Pragmatisch en praktisch
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Compliance hoeft niet complex te zijn. We vertalen frameworks naar concrete acties die passen bij jouw organisatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-40 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Bespreek jouw situatie
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl mx-auto">
            Elk traject begint met een vrijblijvend gesprek. We luisteren naar jouw situatie en adviseren welke aanpak het beste past.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-slate-100 text-slate-900 text-base font-semibold px-12 h-14"
          >
            <Link href="#demo">Plan een gesprek</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
