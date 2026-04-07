import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Check, Shield, FileCheck, Users, Lock, Zap, BarChart3, ChevronRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const faq = [
  {
    q: 'Hoe lang duurt een ISO 27001 certificeringstraject?',
    a: 'Gemiddeld duurt een certificeringstraject 6 tot 12 maanden, afhankelijk van de omvang van de organisatie en de mate van voorbereiding. Met ons platform en begeleiding stroomlijnen we dit proces aanzienlijk.',
  },
  {
    q: 'Wat kost ISO 27001 certificering?',
    a: 'De kosten variëren afhankelijk van de organisatiegrootte, de gekozen certificerende instelling en de hoeveelheid begeleiding die je nodig hebt. We bespreken dit altijd transparant in een eerste gesprek.',
  },
  {
    q: 'Voor welke organisaties is ISO 27001 verplicht?',
    a: 'ISO 27001 is niet wettelijk verplicht, maar steeds meer opdrachtgevers — met name in de overheid, zorg en financiële sector — stellen het als eis. NIS2 maakt een ISMS (de basis van ISO 27001) wel verplicht voor aanbieders van essentiële diensten.',
  },
  {
    q: 'Wat is het verschil tussen ISO 27001:2013 en ISO 27001:2022?',
    a: 'De 2022-versie heeft een herziene Annex A met 93 controls (was 114), nieuwe controls op het gebied van clouddiensten, bedreigingsinformatie en datamaskering, en een iets gewijzigde structuur. Organisaties gecertificeerd onder de 2013-versie moesten voor oktober 2023 migreren.',
  },
  {
    q: 'Begeleiden jullie ook de interne audit?',
    a: 'Ja. Onze consultants begeleiden zowel de interne audit als de voorbereiding op de Stage 1 en Stage 2 audit door de certificerende instelling. We zorgen dat je documentatie en medewerkers volledig voorbereid zijn.',
  },
  {
    q: 'Kan ik na ISO 27001 eenvoudig andere frameworks toevoegen?',
    a: 'Absoluut. ISO 27001 heeft grote overlap met standaarden zoals NEN 7510, SOC 2 en NIS2. Via ons platform hergebruik je bestaande controls en documentatie, zodat uitbreiding naar andere frameworks aanzienlijk minder werk kost.',
  },
]

const checklist = [
  { phase: 'Voorbereiding', items: ['Bepaal de scope van het ISMS', 'Stel het projectteam samen', 'Voer een gap-analyse uit', 'Zorg voor commitment van het management'] },
  { phase: 'Implementatie', items: ['Voer een risicoanalyse uit', 'Stel het risicobehandelplan op', 'Implementeer de benodigde Annex A controls', 'Schrijf verplichte beleidsdocumenten en procedures', 'Train medewerkers op informatiebeveiliging'] },
  { phase: 'Interne audit', items: ['Plan en voer een interne audit uit', 'Voer een management review uit', 'Los afwijkingen en verbeterpunten op'] },
  { phase: 'Externe certificering', items: ['Kies een geaccrediteerde certificerende instelling', 'Doorloop Stage 1 documentatietoets', 'Doorloop Stage 2 implementatieaudit', 'Ontvang het ISO 27001 certificaat'] },
]

export default function ISO27001Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* H1 Hero */}
      <section className="pt-48 pb-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                <span className="text-sm font-medium text-orange-700">Internationaal erkende standaard</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.05] tracking-tight">
                ISO 27001 certificering
              </h1>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                De internationale standaard voor informatiebeveiliging. Wij begeleiden je van gap-analyse tot certificaat — gestructureerd, efficiënt en zonder onnodige complexiteit.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-brand-accent hover:bg-orange-600 text-white text-base font-semibold px-10 h-14 shadow-sm"
              >
                <Link href="/#demo">Demo aanvragen</Link>
              </Button>
            </div>

            {/* Circular Progress Visual */}
            <div className="relative">
              <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="relative w-52 h-52">
                    <svg className="transform -rotate-90 w-52 h-52">
                      <circle cx="104" cy="104" r="92" stroke="#f1f5f9" strokeWidth="10" fill="none" />
                      <circle
                        cx="104" cy="104" r="92"
                        stroke="#f97316"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={578}
                        strokeDashoffset={578 * 0.06}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-5xl font-bold text-slate-900">94%</span>
                      <span className="text-sm text-slate-500 mt-1">Compliance score</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Controls geïmplementeerd</span>
                    <span className="font-semibold text-slate-900">88 / 93</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-accent rounded-full" style={{ width: '94%' }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Documenten compleet</span>
                    <span className="font-semibold text-slate-900">24 / 24</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Wat is het */}
      <section className="py-32 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Wat is ISO 27001?</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
                De wereldwijde standaard voor informatiebeveiliging
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                ISO 27001 is de internationale norm voor het opzetten, implementeren, onderhouden en continu verbeteren van een Information Security Management System (ISMS). Het framework beschrijft hoe organisaties hun informatiebeveiliging systematisch inrichten.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Een certificering toont aan dat je organisatie risico's rond informatiebeveiliging serieus neemt en beheerst. Het geeft klanten, partners en toezichthouders vertrouwen in de manier waarop je met gevoelige informatie omgaat.
              </p>
            </div>
            <div className="space-y-4 pt-10">
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Internationaal erkend</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Erkend in meer dan 150 landen en geaccepteerd door klanten, overheid en toezichthouders wereldwijd.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Risico­gestuurd</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Het framework verplicht je om risico's te identificeren en te behandelen, niet om blind een lijst af te vinken.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Continu verbeteren</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">ISO 27001 is geen eenmalig project. Jaarlijkse toetsingen zorgen dat je beveiliging actueel blijft.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Voor wie is het */}
      <section className="py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Voor wie is het?</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
              ISO 27001 is relevant voor jouw organisatie als...
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Hoewel ISO 27001 voor elke organisatie waardevol is, zijn er situaties waarbij certificering bijzonder relevant of noodzakelijk is.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Klanten of aanbesteders eisen het', body: 'Steeds meer organisaties — met name in de publieke sector — stellen ISO 27001 als harde eis bij aanbesteding of contractverlenging.' },
              { title: 'Je verwerkt gevoelige persoonsgegevens', body: 'Organisaties die persoonsgegevens verwerken op grote schaal ondersteunen AVG-naleving met een robuust ISMS als fundament.' },
              { title: 'Je levert software of cloud­diensten', body: 'SaaS- en IT-dienstverleners gebruiken ISO 27001 als bewijs van beveiligingsvolwassenheid richting zakelijke klanten.' },
              { title: 'Je valt onder NIS2', body: 'Aanbieders van essentiële of belangrijke diensten zijn verplicht passende beveiligingsmaatregelen te treffen. ISO 27001 biedt een solide invulling.' },
              { title: 'Je wilt internationaal zakendoen', body: 'Buitenlandse partners en klanten herkennen ISO 27001 als universele standaard voor betrouwbare informatiebeveiliging.' },
              { title: 'Je wilt intern orde op zaken stellen', body: 'Ook zonder externe druk helpt ISO 27001 om processen, verantwoordelijkheden en beveiligingsmaatregelen structureel te verankeren.' },
            ].map((card) => (
              <div key={card.title} className="bg-white border border-slate-200 rounded-xl p-8 hover:border-orange-200 hover:shadow-sm transition-all">
                <div className="w-2 h-2 rounded-full bg-brand-accent mb-5"></div>
                <h3 className="font-semibold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Checklist */}
      <section className="py-32 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Stappenplan</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
              ISO 27001 certificering checklist
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Een overzicht van alle stappen die je doorloopt op weg naar certificering. Ons platform en onze consultants begeleiden je door elk van deze fasen.
            </p>
            <div className="mt-8">
              <Button
                variant="outline"
                className="border-brand-accent text-brand-accent hover:bg-orange-50 gap-2 font-semibold"
              >
                <Download className="w-4 h-4" />
                Download uitgebreide checklist
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {checklist.map((phase, i) => (
              <div key={phase.phase} className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="flex items-center gap-4 px-8 py-5 bg-slate-50 border-b border-slate-200">
                  <span className="text-2xl font-bold text-slate-200">0{i + 1}</span>
                  <h3 className="font-bold text-slate-900 text-lg">{phase.phase}</h3>
                </div>
                <ul className="p-8 space-y-4">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-brand-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-brand-accent" />
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Screenshot */}
      <section className="py-32 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Het platform</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
                Eén overzicht voor je volledige ISO 27001-traject
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Geen verspreide spreadsheets of losse documenten. Ons platform brengt alle controls, taken, risico's en audits samen in één helder dashboard.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Realtime inzicht in je compliance score',
                  'Taakbeheer per medewerker of afdeling',
                  'Automatische voortgangsrapportage',
                  'Audit-ready documentatie op elk moment',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-accent" />
                    </div>
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-brand-accent hover:bg-orange-600 text-white font-semibold px-8 h-12"
              >
                <Link href="/#demo">Bekijk een demo</Link>
              </Button>
            </div>

            {/* Screenshot placeholder — vervang src door jouw screenshot */}
            <div className="relative">
              <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                {/* Browser chrome */}
                <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  </div>
                  <div className="flex-1 mx-4 bg-slate-700 rounded text-xs text-slate-400 px-3 py-1 text-center">
                    app.decomplianceafdeling.nl
                  </div>
                </div>
                {/* Screenshot area */}
                <div className="bg-slate-50 aspect-[4/3] relative">
                  {/* Simulated dashboard UI */}
                  <div className="absolute inset-0 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-5 w-32 bg-slate-200 rounded"></div>
                      <div className="h-5 w-20 bg-orange-100 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-white rounded-lg border border-slate-200 p-3">
                        <div className="h-3 w-12 bg-slate-200 rounded mb-2"></div>
                        <div className="text-xl font-bold text-slate-900">94%</div>
                        <div className="h-1.5 bg-slate-100 rounded-full mt-2">
                          <div className="h-full bg-brand-accent rounded-full" style={{ width: '94%' }}></div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg border border-slate-200 p-3">
                        <div className="h-3 w-12 bg-slate-200 rounded mb-2"></div>
                        <div className="text-xl font-bold text-slate-900">88/93</div>
                        <div className="h-1.5 bg-slate-100 rounded-full mt-2">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: '94%' }}></div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg border border-slate-200 p-3">
                        <div className="h-3 w-12 bg-slate-200 rounded mb-2"></div>
                        <div className="text-xl font-bold text-slate-900">3</div>
                        <div className="h-1.5 bg-slate-100 rounded-full mt-2">
                          <div className="h-full bg-amber-400 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                      {['A.5 Informatiebeveiligingsbeleid', 'A.6 Organisatie van informatiebeveiliging', 'A.7 Personeel', 'A.8 Asset management', 'A.9 Toegangsbeheer'].map((row, i) => (
                        <div key={row} className={`flex items-center gap-3 px-4 py-2.5 text-xs ${i < 4 ? 'border-b border-slate-100' : ''}`}>
                          <div className={`w-3 h-3 rounded-full flex-shrink-0 ${i < 3 ? 'bg-green-500' : i === 3 ? 'bg-brand-accent' : 'bg-slate-200'}`}></div>
                          <span className="text-slate-700 flex-1">{row}</span>
                          <span className={`text-xs font-medium ${i < 3 ? 'text-green-600' : i === 3 ? 'text-orange-600' : 'text-slate-400'}`}>
                            {i < 3 ? 'Compleet' : i === 3 ? 'In uitvoering' : 'Open'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Subtle glow */}
              <div className="absolute -inset-4 bg-orange-50 rounded-3xl -z-10 opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Dark */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-orange-400 uppercase tracking-wider">Het platform</span>
            <h2 className="text-4xl font-bold mt-3 mb-6">
              Alles wat je nodig hebt, standaard inbegrepen
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Geen losse tools of spreadsheets. Eén geïntegreerd platform voor je volledige ISO 27001-traject.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: FileCheck, title: '93 Annex A Controls', body: 'Alle controls uit de ISO 27001:2022 standaard, kant-en-klaar in het platform.' },
              { icon: Users, title: 'Rollen & taken', body: 'Wijs verantwoordelijkheden toe en houd voortgang bij per medewerker of afdeling.' },
              { icon: BarChart3, title: 'Risicoanalyse', body: 'Identificeer, beoordeel en behandel informatierisico\'s met een gestructureerde methode.' },
              { icon: Shield, title: 'Beleidsdocumenten', body: 'Sjablonen voor alle verplichte beleidsregels en procedures, aanpasbaar aan jouw organisatie.' },
              { icon: Lock, title: 'Statement of Applicability', body: 'Automatisch gegenereerd op basis van jouw geselecteerde controls en uitzonderingen.' },
              { icon: Zap, title: 'Management Review', body: 'Gestructureerd overzicht voor directie van de compliance status en openstaande risico\'s.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
                <Icon className="w-7 h-7 text-orange-400 mb-5" />
                <h3 className="text-lg font-semibold mb-3">{title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Veelgestelde vragen</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 leading-tight">
              Veelgestelde vragen over ISO 27001 certificering
            </h2>
          </div>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <details key={i} className="group bg-white border border-slate-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-8 py-6 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                  <span className="font-semibold text-slate-900 pr-6">{item.q}</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-8 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 leading-tight">
            Klaar om ISO 27001 gecertificeerd te worden?
          </h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            Plan een vrijblijvende demo en ontdek hoe ons platform je begeleidt van gap-analyse tot certificaat.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-brand-accent hover:bg-orange-600 text-white text-base font-semibold px-10 h-14 shadow-sm"
          >
            <Link href="/#demo">
              Demo aanvragen <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
