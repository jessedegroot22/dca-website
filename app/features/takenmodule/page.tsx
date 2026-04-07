import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Check, CheckSquare, Bell, Users, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Gebruiksvriendelijke takenmodule | De Compliance Afdeling',
  description: 'Wijs compliance-taken toe aan de juiste personen, stel deadlines in en houd voortgang bij. Eenvoudig, overzichtelijk en zonder e-mailchaos.',
}

export default function TakenmodulePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />

      <section className="pt-48 pb-32 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Feature</span>
            <h1 className="text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
              Gebruiksvriendelijke takenmodule
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              Compliance werkt alleen als mensen weten wat ze moeten doen. De takenmodule maakt verantwoordelijkheden helder, houdt voortgang bij en zorgt dat niets tussen wal en schip valt.
            </p>
            <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-700 text-white font-semibold px-8 h-12">
              <Link href="/#demo">Demo aanvragen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                Iedereen weet wat er van hem verwacht wordt
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Compliance is teamwork. Maar in de praktijk gaat er veel tijd verloren aan het doorsturen van e-mails, navragen van status en handmatig bijhouden van voortgang in spreadsheets.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                De takenmodule legt verantwoordelijkheden vast, koppelt taken direct aan normeisen en laat zien wat de status is — zonder dat je hoeft te vragen.
              </p>
              <ul className="space-y-4">
                {[
                  'Taken direct gekoppeld aan controls en normeisen',
                  'Toewijzen aan individuele medewerkers of teams',
                  'Automatische herinneringen bij naderende deadlines',
                  'Overzicht van openstaande, lopende en afgeronde taken',
                  'Bewijslast uploaden direct bij de taak',
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

            {/* Visual task list mockup */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">Mijn taken</span>
                <span className="text-xs bg-brand-accent text-white rounded-full px-2.5 py-0.5 font-semibold">3 open</span>
              </div>
              <div className="divide-y divide-slate-100">
                {[
                  { title: 'Toegangsbeheer procedure updaten', due: 'Morgen', priority: 'Hoog', done: false },
                  { title: 'Leveranciersovereenkomst review', due: '15 apr', priority: 'Normaal', done: false },
                  { title: 'Interne audit plannen Q2', due: '20 apr', priority: 'Normaal', done: false },
                  { title: 'Risicoanalyse afronden', due: '8 apr', priority: 'Hoog', done: true },
                  { title: 'Bewustzijnstraining medewerkers', due: '1 apr', priority: 'Normaal', done: true },
                ].map((task) => (
                  <div key={task.title} className={`flex items-start gap-4 px-6 py-4 ${task.done ? 'opacity-50' : ''}`}>
                    <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${task.done ? 'bg-green-500 border-green-500' : 'border-slate-300'}`}>
                      {task.done && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${task.done ? 'line-through text-slate-400' : 'text-slate-800'}`}>{task.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">Deadline: {task.due}</p>
                    </div>
                    <span className={`text-xs rounded-full px-2.5 py-0.5 font-medium flex-shrink-0 ${task.priority === 'Hoog' ? 'bg-orange-50 text-orange-700' : 'bg-slate-100 text-slate-500'}`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three features */}
      <section className="py-32 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Alles voor effectief taakbeheer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Rolverdeling', body: 'Wijs taken toe op basis van functie of afdeling. Iedereen ziet alleen wat voor hem relevant is.' },
              { icon: Bell, title: 'Automatische meldingen', body: 'Bij naderende deadlines of wijzigingen ontvangen betrokkenen automatisch een melding via e-mail.' },
              { icon: BarChart3, title: 'Voortgangsrapportage', body: 'Compliance managers zien in één overzicht de voortgang per afdeling, norm en periode.' },
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

      <section className="py-32 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Minder achtervolgen, meer resultaat</h2>
          <p className="text-slate-400 mb-10 leading-relaxed">Vraag een demo aan en ontdek hoe de takenmodule past in de werkwijze van jouw organisatie.</p>
          <Button asChild size="lg" className="bg-brand-accent hover:bg-orange-600 text-white font-semibold px-10 h-12">
            <Link href="/#demo">Demo aanvragen</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
