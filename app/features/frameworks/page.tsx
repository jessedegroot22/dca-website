import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Check, Shield, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Beschikbare frameworks | De Compliance Afdeling',
  description: 'Ondersteun meerdere compliance-frameworks vanuit één platform. ISO 27001, NEN 7510, NIS2, ISO 42001 en meer.',
}

export default function FrameworksFeaturePage() {
  const frameworks = [
    { name: 'ISO 27001', desc: 'Internationale standaard voor informatiebeveiliging. Meest gevraagd bij aanbestedingen en zakelijke partnerships.', href: '/frameworks/iso-27001' },
    { name: 'NEN 7510', desc: 'Specifiek voor informatiebeveiliging in de zorgsector. Verplicht voor veel zorgaanbieders en -instellingen.', href: '#' },
    { name: 'NIS2', desc: 'EU-richtlijn voor cybersecurity die verplicht is voor organisaties in kritieke sectoren. Inwerkingtreding: oktober 2024.', href: '#' },
    { name: 'ISO 42001', desc: 'Managementsysteem voor verantwoorde AI. De opkomende standaard voor organisaties die AI ontwikkelen of inzetten.', href: '#' },
    { name: 'BRL 9500', desc: 'Beoordelingsrichtlijn voor particuliere beveiligingsorganisaties en recherchebureaus in Nederland.', href: '#' },
    { name: 'CIIO Maatstaf', desc: 'Kwaliteitskader voor informatie-intensieve organisaties, gericht op informatiemanagement en governance.', href: '#' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />

      <section className="pt-48 pb-32 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Feature</span>
            <h1 className="text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
              Beschikbare frameworks
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              Eén platform voor al je compliance-verplichtingen. Kies de frameworks die voor jouw organisatie van toepassing zijn en beheer alles op één plek.
            </p>
            <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-700 text-white font-semibold px-8 h-12">
              <Link href="/#demo">Demo aanvragen</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Ondersteunde frameworks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {frameworks.map((f) => (
              <div key={f.name} className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-sm hover:border-slate-300 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-brand-accent" />
                  </div>
                  {f.href !== '#' && (
                    <Link href={f.href} className="text-xs text-brand-accent font-medium hover:underline flex items-center gap-1">
                      Meer info <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Waarom meerdere frameworks in één platform?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Geen dubbel werk', body: 'Gedeelde maatregelen worden één keer ingericht en tellen automatisch mee voor alle gekoppelde normen.' },
              { title: 'Gecombineerde audits', body: 'Bereid je voor op meerdere certificeringen tegelijk. Eén audit voor meerdere normen is efficiënter en goedkoper.' },
              { title: 'Overzicht per norm', body: 'Bekijk per framework de compliance-status, openstaande acties en documentatiestatus.' },
              { title: 'Schaalbaar naar de toekomst', body: 'Voeg eenvoudig nieuwe frameworks toe zodra je organisatie groeit of regelgeving verandert.' },
            ].map(({ title, body }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Welke frameworks zijn relevant voor jou?</h2>
          <p className="text-slate-400 mb-10 leading-relaxed">Onze consultants helpen je bepalen welke normen van toepassing zijn op jouw sector en organisatie.</p>
          <Button asChild size="lg" className="bg-brand-accent hover:bg-orange-600 text-white font-semibold px-10 h-12">
            <Link href="/#demo">Gratis adviesgesprek</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
