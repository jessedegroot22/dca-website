import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AIFrameworkBanner } from '@/components/ai-framework-banner'
import { ArrowRight, Check, AlertTriangle, ShieldCheck, TrendingUp, FileWarning } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-52 pb-40 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.05] tracking-tight">
                Compliance structureel op orde
              </h1>
              <p className="text-xl text-slate-700 mb-12 leading-relaxed">
                Ons platform begeleidt je van gap analyse tot certificaat. Met duidelijke stappen, audit-ready documentatie en ondersteuning van ervaren consultants.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white text-base font-medium px-10 h-14"
              >
                <Link href="#demo">Demo aanvragen</Link>
              </Button>
            </div>

            {/* Platform Preview */}
            <div className="relative">
              <div className="bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-sm font-semibold text-slate-900">ISO 27001 Dashboard</span>
                    <span className="text-xs text-slate-500">94% compleet</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded bg-green-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex-1 text-sm text-slate-600">A.5 Informatiebeveiligingsbeleid</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded bg-green-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex-1 text-sm text-slate-600">A.6 Organisatie</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded border-2 border-slate-300 flex-shrink-0"></div>
                      <div className="flex-1 text-sm text-slate-400">A.7 Personeel</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded border-2 border-slate-300 flex-shrink-0"></div>
                      <div className="flex-1 text-sm text-slate-400">A.8 Asset management</div>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-900 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-20 border-y border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm text-slate-500 mb-12">Meer dan 100+ organisaties vertrouwen op ons platform</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex items-center justify-center text-slate-400 font-medium">
              Solvinity
            </div>
            <div className="flex items-center justify-center text-slate-400 font-medium">
              RST
            </div>
            <div className="flex items-center justify-center text-slate-400 font-medium">
              Schiedam
            </div>
            <div className="flex items-center justify-center text-slate-400 font-medium">
              Emerce
            </div>
          </div>
        </div>
      </section>

      {/* Why Compliance Section */}
      <section className="py-40 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">

          {/* Intro */}
          <div className="max-w-2xl mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4 block">Waarom compliance?</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Organisaties worden steeds vaker aansprakelijk gehouden voor digitale risico's
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Wet- en regelgeving rondom informatiebeveiliging en privacy wordt strenger. Klanten, opdrachtgevers en toezichthouders verwachten aantoonbaar bewijs van controle. Compliance is geen keuze meer — het is een voorwaarde om te blijven opereren.
            </p>
          </div>

          {/* Risks + Solution grid */}
          <div className="grid lg:grid-cols-2 gap-6">

            {/* Left: risks */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 space-y-8">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Zonder structurele aanpak</p>
              <div className="space-y-6">
                {[
                  {
                    icon: AlertTriangle,
                    title: 'Reputatieschade bij een datalek',
                    body: 'Één incident zonder aantoonbare beveiligingsmaatregelen kan het vertrouwen van klanten en partners permanent beschadigen.',
                  },
                  {
                    icon: FileWarning,
                    title: 'Boetes en juridische aansprakelijkheid',
                    body: 'Toezichthouders zoals de AP kunnen bij niet-naleving van de AVG en NIS2 boetes opleggen tot miljoenen euro\'s.',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Verlies van klanten en aanbestedingen',
                    body: 'Steeds meer opdrachtgevers en inkopers eisen een ISO 27001-certificaat of vergelijkbaar bewijs als voorwaarde voor samenwerking.',
                  },
                ].map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-slate-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">{title}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: solution */}
            <div className="bg-slate-900 rounded-2xl p-10 space-y-8">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Met een gestructureerde aanpak</p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Aantoonbare controle over je informatiebeveiliging',
                    body: 'Een gecertificeerd ISMS laat zien dat je informatiebeveiliging serieus neemt — intern én richting externe partijen.',
                  },
                  {
                    title: 'Voldoen aan wet- en regelgeving',
                    body: 'ISO 27001, NIS2 en NEN 7510 geven je een bewezen raamwerk om te voldoen aan actuele wettelijke verplichtingen.',
                  },
                  {
                    title: 'Meer vertrouwen bij klanten en partners',
                    body: 'Een certificaat of compliance-bewijs opent deuren bij aanbestedingen en versterkt je positie in de markt.',
                  },
                ].map(({ title, body }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-brand-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">{title}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <Link
                  href="/frameworks/iso-27001"
                  className="inline-flex items-center gap-2 text-sm text-brand-accent font-semibold hover:gap-3 transition-all"
                >
                  Bekijk hoe ISO 27001 helpt <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-40 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Van gap analyse tot certificaat
              </h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Ons platform begeleidt je stap voor stap door het compliance-proces. Met duidelijke taken, voorbeelddocumenten en ingebouwde checks.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-900 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Gestructureerde implementatie</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-900 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Audit-ready documentatie</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-900 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Continue monitoring</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 rounded-lg aspect-square"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="py-40 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-20 text-center">
            Diensten
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl p-10 hover:shadow-lg transition-all hover:border-slate-300">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Certificering</h3>
              <p className="text-slate-700 leading-relaxed">
                Wij begeleiden je naar ISO 27001, NEN 7510 of andere certificeringen met bewezen methodes.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-10 hover:shadow-lg transition-all hover:border-slate-300">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Advies</h3>
              <p className="text-slate-700 leading-relaxed">
                Onze consultants bieden strategisch advies voor compliance-vraagstukken in jouw organisatie.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-10 hover:shadow-lg transition-all hover:border-slate-300">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Platform</h3>
              <p className="text-slate-700 leading-relaxed">
                Onze software automatiseert compliance-taken en zorgt voor audit-ready documentatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 27001 Focus Block */}
      <section className="py-40 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">
              ISO 27001 implementeren zonder complexiteit
            </h2>
            <p className="text-xl text-slate-700 mb-12 leading-relaxed">
              Wij begeleiden je door het volledige ISO 27001-traject. Van gap-analyse tot succesvolle certificering. Met duidelijke stappen en praktische ondersteuning.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-white"
            >
              <Link href="/frameworks/iso-27001">
                Meer over ISO 27001 <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <AIFrameworkBanner />

      {/* Framework Overview */}
      <section id="frameworks" className="py-40 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-20 text-center">
            Ondersteuning voor meerdere frameworks
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/frameworks/iso-27001"
              className="group bg-white border border-slate-200 rounded-xl p-10 hover:border-slate-300 hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">ISO 27001</h3>
              <p className="text-slate-700 leading-relaxed">
                Internationale standaard voor informatiebeveiliging
              </p>
            </Link>
            <div className="bg-white border border-slate-200 rounded-xl p-10 hover:border-slate-300 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">NEN 7510</h3>
              <p className="text-slate-700 leading-relaxed">
                Informatiebeveiliging in de zorg
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-10 hover:border-slate-300 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">NIS2</h3>
              <p className="text-slate-700 leading-relaxed">
                EU-richtlijn voor cybersecurity
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-10 hover:border-slate-300 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">ISO 42001</h3>
              <p className="text-slate-700 leading-relaxed">
                AI management systeem
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-10 hover:border-slate-300 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">BRL 9500</h3>
              <p className="text-slate-700 leading-relaxed">
                Beveiliging particuliere onderzoeksbureaus
              </p>
            </div>
            <Link
              href="#demo"
              className="border-2 border-slate-300 rounded-xl p-10 hover:border-slate-900 hover:bg-slate-50 transition-all flex flex-col items-center justify-center text-center"
            >
              <p className="text-slate-700 font-medium mb-2">Bekijk alle frameworks</p>
              <ArrowRight className="w-5 h-5 text-slate-900" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-40 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-24 text-center">
            Hoe het werkt
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="text-5xl font-bold text-slate-200 mb-6">01</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Gap-analyse</h3>
              <p className="text-slate-600 leading-relaxed">
                We brengen de huidige situatie in kaart en identificeren wat er nodig is voor certificering.
              </p>
            </div>
            <div className="relative">
              <div className="text-5xl font-bold text-slate-200 mb-6">02</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Implementatie</h3>
              <p className="text-slate-600 leading-relaxed">
                Stap voor stap implementeren we de benodigde maatregelen met ondersteuning van het platform.
              </p>
            </div>
            <div className="relative">
              <div className="text-5xl font-bold text-slate-200 mb-6">03</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Audit & certificering</h3>
              <p className="text-slate-600 leading-relaxed">
                We bereiden je voor op de audit en begeleiden je tot het behalen van het certificaat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge & Insights */}
      <section id="kenniscentrum" className="py-40 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-20 text-center">
            Kennis & Inzichten
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <article className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:border-slate-300">
              <div className="bg-slate-100 aspect-video"></div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  ISO 27001:2022 — Wat is er veranderd?
                </h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  De nieuwe versie van ISO 27001 brengt belangrijke wijzigingen. Ontdek wat dit betekent voor jouw organisatie.
                </p>
                <Link
                  href="#"
                  className="text-slate-900 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Lees meer <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
            <article className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:border-slate-300">
              <div className="bg-slate-100 aspect-video"></div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  NIS2: Ben jij verplicht?
                </h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  De NIS2-richtlijn verplicht veel organisaties tot versterkte cybersecurity. Check of dit voor jou geldt.
                </p>
                <Link
                  href="#"
                  className="text-slate-900 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Lees meer <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
            <article className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:border-slate-300">
              <div className="bg-slate-100 aspect-video"></div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  5 veelgemaakte fouten bij ISO-certificering
                </h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Leer van de ervaringen van anderen en voorkom deze veelvoorkomende valkuilen tijdens het certificeringsproces.
                </p>
                <Link
                  href="#"
                  className="text-slate-900 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Lees meer <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          </div>
          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              <Link href="#">
                Bekijk alle artikelen <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="py-40 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Klaar om te starten?
          </h2>
          <p className="text-xl text-slate-700 mb-12 leading-relaxed">
            Plan een demo en ontdek hoe ons platform jouw compliance-proces vereenvoudigt.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white text-base font-medium px-10 h-14"
          >
            <Link href="#contact">Demo aanvragen</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
