import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'ISO 42001 certificering | De Compliance Afdeling',
  description: 'ISO 42001 is de internationale norm voor verantwoord AI-management. Wij begeleiden je naar certificering.',
}

export default function ISO42001Page() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />

      <section className="pt-48 pb-32 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Framework</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-3 mb-6 leading-[1.05] tracking-tight">
            ISO 42001 certificering
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
            De internationale norm voor verantwoord beheer van kunstmatige intelligentie. Laat zien dat jouw organisatie AI op een betrouwbare en ethische manier inzet.
          </p>
          <Button asChild size="lg" className="bg-brand-accent hover:bg-orange-600 text-white font-semibold px-8 h-12">
            <Link href="/#demo">Demo aanvragen</Link>
          </Button>
        </div>
      </section>

      <section className="py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Wat is ISO 42001?</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            ISO 42001 is gepubliceerd in 2023 en is de eerste internationale managementsysteemnorm voor kunstmatige intelligentie. De norm biedt een raamwerk voor organisaties die AI ontwikkelen, implementeren of gebruiken, en helpt hen om dit op een verantwoorde, transparante en beheersbare manier te doen.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            De norm is gebouwd op dezelfde structuur als ISO 27001 en ISO 9001, waardoor organisaties die al gecertificeerd zijn snel kunnen uitbreiden naar ISO 42001.
          </p>
        </div>
      </section>

      <section className="py-32 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Voor wie is ISO 42001?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Technologiebedrijven die AI ontwikkelen', 'Organisaties die AI-tools inzetten', 'Financiële instellingen met ML-modellen', 'Zorgorganisaties met AI-toepassingen', 'Overheden en publieke instellingen', 'Bedrijven die voldoen aan de EU AI Act willen'].map((item) => (
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
          <h2 className="text-3xl font-bold mb-6">Start met ISO 42001 certificering</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Ons platform ondersteunt het volledige traject van gap-analyse tot certificaat.
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
