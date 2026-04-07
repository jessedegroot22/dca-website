import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Check, ArrowRight, Layers, GitMerge, BarChart3, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Gestructureerd managementsysteem | De Compliance Afdeling',
  description: 'Beheer alle normeisen, risico\'s en maatregelen vanuit één centraal managementsysteem. Zie direct de samenhang en overlap tussen meerdere normen.',
}

export default function ManagementSysteemPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-48 pb-32 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Feature</span>
            <h1 className="text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
              Gestructureerd managementsysteem
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              Alle normeisen, risico's en maatregelen in één overzicht. Zie direct de relaties en overlap tussen meerdere normen, beheerd vanuit één centrale plek.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-slate-900 hover:bg-slate-700 text-white font-semibold px-8 h-12"
            >
              <Link href="/#demo">Demo aanvragen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core value */}
      <section className="py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                Eén systeem voor alle normen en eisen
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Veel organisaties werken met meerdere normen tegelijk — ISO 27001, NEN 7510, NIS2. In de praktijk betekent dit dubbel werk: dezelfde maatregelen worden meerdere keren gedocumenteerd, in aparte bestanden, voor aparte auditors.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Ons managementsysteem brengt dit samen. Elke norm is gekoppeld aan dezelfde onderliggende maatregelen en risico's. Overlap wordt automatisch herkend — je beheert het één keer, het telt voor alle normen.
              </p>
              <ul className="space-y-4">
                {[
                  'Normeisen direct gekoppeld aan maatregelen en risico\'s',
                  'Overlap tussen normen automatisch zichtbaar',
                  'Centrale beheerplek voor alle compliance-activiteiten',
                  'Real-time inzicht in compliance-status per norm',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-accent" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Visual */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-6">Norm overzicht</div>
              <div className="space-y-4">
                {[
                  { norm: 'ISO 27001', controls: 93, done: 88, color: 'bg-brand-accent' },
                  { norm: 'NEN 7510', controls: 71, done: 58, color: 'bg-slate-700' },
                  { norm: 'NIS2', controls: 46, done: 32, color: 'bg-slate-400' },
                ].map((row) => (
                  <div key={row.norm} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-slate-900">{row.norm}</span>
                      <span className="text-slate-500">{row.done}/{row.controls} controls</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${row.color} rounded-full transition-all`}
                        style={{ width: `${Math.round((row.done / row.controls) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="text-xs text-slate-500 mb-3 font-semibold uppercase tracking-wider">Gedeelde maatregelen</div>
                <div className="flex flex-wrap gap-2">
                  {['Toegangsbeheer', 'Incident response', 'Risicoanalyse', 'Asset management', 'Business continuity'].map((tag) => (
                    <span key={tag} className="text-xs bg-orange-50 text-orange-700 border border-orange-200 rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-32 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Hoe het managementsysteem werkt</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: 'Gelaagde structuur',
                body: 'Normeisen zijn gekoppeld aan maatregelen, die gekoppeld zijn aan taken en bewijslast. Je ziet altijd de samenhang van boven naar beneden.',
              },
              {
                icon: GitMerge,
                title: 'Normoverlap centraal',
                body: 'Een maatregel die geldt voor zowel ISO 27001 als NEN 7510 wordt één keer beheerd. De status wordt automatisch doorgetrokken naar beide normen.',
              },
              {
                icon: BarChart3,
                title: 'Rapportage op elk niveau',
                body: 'Of je nu een directierapport of een auditoverzicht nodig hebt — het systeem genereert altijd een actuele weergave van je compliance-status.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-slate-50 border border-slate-200 rounded-xl p-8">
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 shadow-sm">
                  <Icon className="w-5 h-5 text-brand-accent" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Klaar om grip te krijgen op je compliance?</h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Vraag een demo aan en zie hoe het managementsysteem werkt voor jouw organisatie.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-brand-accent hover:bg-orange-600 text-white font-semibold px-10 h-12"
          >
            <Link href="/#demo">Demo aanvragen</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
