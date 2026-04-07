import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Check, FileText, Copy, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Voorbeeldtemplates | De Compliance Afdeling',
  description: 'Start direct met professionele, op maat gemaakte templates voor ISO 27001, NEN 7510 en meer. Geen blanco documenten meer.',
}

export default function TemplatesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-48 pb-32 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Feature</span>
            <h1 className="text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
              Voorbeeldtemplates
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              Start direct met kant-en-klare, professioneel opgebouwde templates. Geen blanco documenten, geen giswerk — alleen een gestructureerde basis die je direct kunt gebruiken.
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

      {/* Template grid */}
      <section className="py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Wat je direct kunt gebruiken</h2>
          <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            Alle templates zijn afgestemd op de actuele normeisen en worden beheerd door onze compliance-experts.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Informatiebeveiligingsbeleid', norm: 'ISO 27001 / NEN 7510', desc: 'Een volledig beleidsdocument met alle verplichte onderdelen, klaar om aan te passen aan jouw organisatie.' },
              { title: 'Risicoanalyse template', norm: 'ISO 27001', desc: 'Gestructureerde aanpak voor het identificeren, beoordelen en behandelen van informatiebeveiligingsrisico\'s.' },
              { title: 'Verklaring van toepasselijkheid (VvT)', norm: 'ISO 27001', desc: 'SoA-template met alle 93 controls uit Annex A, inclusief toelichting per control.' },
              { title: 'Incidentregistratie', norm: 'ISO 27001 / NIS2', desc: 'Standaard formulier voor het vastleggen, opvolgen en rapporteren van beveiligingsincidenten.' },
              { title: 'Interne auditchecklist', norm: 'ISO 27001', desc: 'Stapsgewijze checklist voor het uitvoeren van een interne audit conform de norm.' },
              { title: 'Leveranciersbeoordeling', norm: 'ISO 27001', desc: 'Gestandaardiseerd beoordelingsformulier voor de informatiebeveiligingseisen aan leveranciers.' },
            ].map((t) => (
              <div key={t.title} className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-sm hover:border-slate-300 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-slate-500" />
                  </div>
                  <span className="text-xs text-slate-500 bg-slate-100 rounded-full px-3 py-1">{t.norm}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{t.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">Minder tijd kwijt aan documenten, meer tijd voor echte compliance</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Onze templates zijn niet zomaar lege formulieren. Ze zijn opgebouwd door consultants met jarenlange audit-ervaring en bevatten de juiste structuur, toelichting en controlepunten.
              </p>
              <ul className="space-y-4">
                {[
                  'Direct inzetbaar, aanpasbaar aan jouw context',
                  'Up-to-date met de meest recente normeisen',
                  'Beschikbaar in het Nederlands en Engels',
                  'Automatisch gekoppeld aan de juiste controls in het platform',
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
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <div className="space-y-3">
                {['Beleid', 'Procedures', 'Checklists', 'Registers', 'Rapportages'].map((cat, i) => (
                  <div key={cat} className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-medium text-slate-700">{cat}</span>
                    </div>
                    <span className="text-xs text-slate-400">{[4, 7, 6, 3, 5][i]} templates</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Bekijk alle templates in het platform</h2>
          <p className="text-slate-400 mb-10 leading-relaxed">Plan een demo en ontdek welke templates direct inzetbaar zijn voor jouw organisatie.</p>
          <Button asChild size="lg" className="bg-brand-accent hover:bg-orange-600 text-white font-semibold px-10 h-12">
            <Link href="/#demo">Demo aanvragen</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
