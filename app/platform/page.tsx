import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PlatformPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-48 pb-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Het platform
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Een overzichtelijk systeem dat je begeleidt van gap analyse tot certificaat. Eenvoudig, compleet en altijd up-to-date.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-brand-accent hover:bg-orange-600 text-white text-base font-medium px-10 h-14"
          >
            <Link href="/#demo">Demo aanvragen</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Takenlijst</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Alle vereisten omgezet in concrete taken. Je weet precies wat er moet gebeuren en wanneer.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Gestructureerde werklijst</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Automatische prioritering</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Voortgangstracking</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 rounded-lg aspect-video"></div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="bg-slate-100 rounded-lg aspect-video"></div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Risicomanagement</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Identificeer, beoordeel en beheer risico's systematisch. Voldoe aan de eisen van je framework.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Risicoanalyse templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Impactbepaling</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Maatregelenbeheer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Audit management</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Bereid je voor op interne en externe audits. Alle documentatie en bewijslast op één plek.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Audit planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Bewijslastbeheer</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Rapportage</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 rounded-lg aspect-video"></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Klaar om te starten?
          </h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            Plan een demo en ontdek hoe het platform werkt.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-brand-accent hover:bg-orange-600 text-white text-base font-medium px-10 h-14"
          >
            <Link href="/#demo">Demo aanvragen</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
