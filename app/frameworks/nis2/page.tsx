import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'NIS2 compliance | De Compliance Afdeling',
  description: 'Voldoe aan de NIS2-richtlijn. Wij helpen organisaties met NIS2 compliance: risicoanalyse, maatregelen en rapportage.',
}

export default function NIS2Page() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />

      <section className="pt-48 pb-32 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Framework</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-3 mb-6 leading-[1.05] tracking-tight">
            NIS2 compliance
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
            De NIS2-richtlijn verplicht essentiële en belangrijke organisaties in de EU tot versterkte cybersecurity en incidentrapportage.
          </p>
          <Button asChild size="lg" className="bg-brand-accent hover:bg-orange-600 text-white font-semibold px-8 h-12">
            <Link href="/#demo">Demo aanvragen</Link>
          </Button>
        </div>
      </section>

      <section className="py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Wat is NIS2?</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            NIS2 (Network and Information Systems Directive 2) is een EU-richtlijn die organisaties in kritieke sectoren verplicht om te investeren in cybersecurity. De richtlijn geldt voor organisaties in sectoren zoals energie, transport, financiën, gezondheidszorg en digitale infrastructuur.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Organisaties moeten risicogebaseerde beveiligingsmaatregelen treffen en ernstige incidenten binnen 24 uur melden aan de toezichthouder.
          </p>
        </div>
      </section>

      <section className="py-32 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Voor wie geldt NIS2?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Energiebedrijven', 'Transport en logistiek', 'Financiële instellingen', 'Gezondheidszorg', 'Digitale dienstverleners', 'Overheidsinstellingen'].map((item) => (
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
          <h2 className="text-3xl font-bold mb-6">Voldoe aan NIS2 met ons platform</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Ons platform helpt je de vereiste maatregelen te implementeren en bij te houden.
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
