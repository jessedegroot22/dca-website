import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'NEN 7510 certificering | De Compliance Afdeling',
  description: 'Alles over NEN 7510 certificering voor informatiebeveiliging in de zorg. Wat is het, voor wie is het, en hoe behaal je het certificaat?',
}

export default function NEN7510Page() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />

      <section className="pt-48 pb-32 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Framework</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-3 mb-6 leading-[1.05] tracking-tight">
            NEN 7510 certificering
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
            De Nederlandse norm voor informatiebeveiliging in de zorgsector. Verplicht voor veel zorgaanbieders en uitwisselingssystemen.
          </p>
          <Button asChild size="lg" className="bg-brand-accent hover:bg-orange-600 text-white font-semibold px-8 h-12">
            <Link href="/#demo">Demo aanvragen</Link>
          </Button>
        </div>
      </section>

      <section className="py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Wat is NEN 7510?</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            NEN 7510 is de Nederlandse norm voor informatiebeveiliging in de zorg. De norm is gebaseerd op ISO 27001 maar specifiek afgestemd op de eisen en risico's van zorginstellingen, zorgverleners en partijen die medische gegevens verwerken.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            De norm beschrijft hoe organisaties in de zorg passende beveiligingsmaatregelen moeten nemen voor de bescherming van patiëntgegevens en zorginformatie.
          </p>
        </div>
      </section>

      <section className="py-32 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Voor wie is NEN 7510?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Ziekenhuizen en klinieken', 'Huisartsenpraktijken', 'GGZ-instellingen', 'Apothekers', 'Zorgportalen en EPD-leveranciers', 'Gemeenten met WMO-taken'].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg bg-slate-50">
                <Check className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Klaar om te starten met NEN 7510?</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Ons platform en onze consultants begeleiden je van nulmeting tot certificaat.
          </p>
          <Button asChild size="lg" className="bg-brand-accent hover:bg-orange-600 text-white font-semibold px-10 h-12">
            <Link href="/#demo">Plan een gesprek</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
