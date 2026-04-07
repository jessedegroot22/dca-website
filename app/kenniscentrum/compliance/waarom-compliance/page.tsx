import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AlertTriangle, FileWarning, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Waarom moet je organisatie compliant zijn? | Kenniscentrum',
  description: 'Boetes, reputatieschade en verlies van klanten: de gevolgen van niet-naleving zijn concreet. Ontdek waarom compliance geen optie meer is voor middelgrote en grote organisaties.',
}

export default function WaaromCompliancePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-48 pb-24 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/kenniscentrum/compliance"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors mb-10"
          >
            ← Compliance
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Compliance</span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-slate-500">7 min leestijd</span>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Waarom moet je organisatie compliant zijn?
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Wet- en regelgeving rondom informatiebeveiliging en privacy wordt strenger. Toch stellen veel organisaties compliance nog uit. Wat zijn de echte risico&apos;s — en wat levert het op als je het wél serieus neemt?
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-slate prose-lg max-w-none">

            <h2 className="text-3xl font-bold text-slate-900 mt-0 mb-6">Wat is compliance eigenlijk?</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Compliance betekent letterlijk &apos;naleving&apos; — het aantoonbaar voldoen aan wet- en regelgeving, normen en interne beleidsregels die van toepassing zijn op jouw organisatie. Denk aan privacywetgeving zoals de AVG, sectorspecifieke normen zoals NEN 7510 voor de zorg, of internationale standaarden zoals ISO 27001 voor informatiebeveiliging.
            </p>
            <p className="text-slate-700 leading-relaxed mb-12">
              Compliance is niet hetzelfde als beveiliging. Je kunt technisch goed beveiligd zijn, maar toch niet compliant zijn — omdat je de maatregelen niet kunt aantonen. Andersom geldt ook: je kunt op papier compliant zijn, maar in de praktijk grote beveiligingsgaten hebben. Goede compliance vraagt om beide: aantoonbare maatregelen én een werkende structuur.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">De risico&apos;s van niet-naleving</h2>
            <p className="text-slate-700 leading-relaxed mb-8">
              Organisaties die compliance uitstellen of niet serieus nemen, lopen concrete risico&apos;s. Dit zijn de drie meest voorkomende gevolgen:
            </p>

            {/* Risk cards */}
            <div className="space-y-5 mb-12 not-prose">
              {[
                {
                  icon: AlertTriangle,
                  title: 'Reputatieschade bij een datalek',
                  body: 'Één beveiligingsincident zonder aantoonbare beveiligingsmaatregelen kan het vertrouwen van klanten, partners en toezichthouders permanent beschadigen. De AVG verplicht organisaties datalekken te melden bij de Autoriteit Persoonsgegevens. Wie op dat moment geen aantoonbaar beveiligingsbeleid heeft, staat direct in een defensieve positie.',
                },
                {
                  icon: FileWarning,
                  title: 'Boetes en juridische aansprakelijkheid',
                  body: 'De Autoriteit Persoonsgegevens (AP) kan bij schending van de AVG boetes opleggen tot 20 miljoen euro of 4% van de wereldwijde jaaromzet. De NIS2-richtlijn, die in 2024 in nationale wetgeving is omgezet, voegt hier boetes van maximaal 10 miljoen euro of 2% van de jaaromzet aan toe voor essentiële en belangrijke entiteiten.',
                },
                {
                  icon: TrendingUp,
                  title: 'Verlies van klanten en aanbestedingen',
                  body: 'Steeds meer opdrachtgevers stellen een ISO 27001-certificaat of aantoonbare NIS2-compliance als harde eis bij aanbestedingen en inkoopprocessen. Zonder certificering val je buiten de selectie — ongeacht hoe goed je product of dienst is. Dit geldt in het bijzonder voor overheidscontracten, zorginstellingen en financiële dienstverleners.',
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-5 bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-slate-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">{title}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">Welke wetgeving is van toepassing?</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Welke regels voor jouw organisatie gelden, hangt af van je sector, omvang en de aard van de gegevens die je verwerkt. De meest relevante kaders zijn:
            </p>
            <ul className="space-y-3 mb-12 not-prose list-none pl-0">
              {[
                { label: 'AVG / GDPR', desc: 'Van toepassing op elke organisatie die persoonsgegevens verwerkt van EU-burgers.' },
                { label: 'NIS2-richtlijn', desc: 'Verplicht voor organisaties in kritieke sectoren zoals energie, transport, financiën, zorg en digitale infrastructuur.' },
                { label: 'ISO 27001', desc: 'Geen wettelijke verplichting, maar de facto standaard die steeds vaker contractueel vereist wordt.' },
                { label: 'NEN 7510', desc: 'Specifiek voor zorgorganisaties die medische persoonsgegevens verwerken.' },
                { label: 'BIO (Baseline Informatiebeveiliging Overheid)', desc: 'Verplicht voor alle overheidsorganisaties in Nederland.' },
              ].map(({ label, desc }) => (
                <li key={label} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0 mt-2.5"></div>
                  <span className="text-slate-700 text-base leading-relaxed">
                    <strong className="font-semibold text-slate-900">{label}:</strong> {desc}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">Wat levert compliance op?</h2>
            <p className="text-slate-700 leading-relaxed mb-8">
              Compliance is geen kostenpost — het is een investering die zich terugbetaalt. Organisaties die informatiebeveiliging structureel aanpakken, profiteren van:
            </p>

            <div className="space-y-5 mb-12 not-prose">
              {[
                {
                  title: 'Aantoonbare controle over informatiebeveiligingsrisico\'s',
                  body: 'Een gecertificeerd ISMS (Information Security Management System) geeft inzicht in risico\'s en toont aan dat je ze beheerst — intern én richting externe partijen.',
                },
                {
                  title: 'Sterkere marktpositie',
                  body: 'Een ISO 27001-certificaat of NIS2-compliance stelt je in staat te concurreren in aanbestedingen en samenwerkingen waar dit als harde eis geldt.',
                },
                {
                  title: 'Efficiënter werken door structuur',
                  body: 'Wie compliance serieus neemt, bouwt aan duidelijke processen, eigenaarschap en rapportage. Dat bespaart tijd bij incidenten, audits en interne controles.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="flex gap-5 bg-slate-900 rounded-xl p-6">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">{title}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">Wanneer moet je beginnen?</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              De meeste organisaties stellen compliance uit omdat het complex en tijdrovend lijkt. Dat klopt — zonder de juiste aanpak. Maar wie wacht tot een incident of handhavingsactie, betaalt de hoogste prijs. De sleutel is een gestructureerde aanpak die begint met een heldere gap-analyse: waar sta je nu, wat ontbreekt er, en wat zijn de prioriteiten?
            </p>
            <p className="text-slate-700 leading-relaxed mb-0">
              Onze consultants begeleiden organisaties door dit traject — van de eerste inventarisatie tot aan het behalen van het certificaat. Met ons platform houd je het overzicht, verdeel je taken en documenteer je alles audit-ready.
            </p>

          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Gerelateerde artikelen</h2>
          <div className="space-y-4">
            {[
              { title: 'Wat is ISO 27001?', slug: 'iso-27001/wat-is-iso-27001', time: '8 min' },
              { title: 'ISO 27001 stappenplan', slug: 'iso-27001/stappenplan', time: '10 min' },
            ].map((a) => (
              <Link
                key={a.slug}
                href={`/kenniscentrum/${a.slug}`}
                className="flex items-center justify-between gap-4 bg-white border border-slate-200 rounded-xl px-6 py-5 hover:shadow-md hover:border-slate-300 transition-all group"
              >
                <div>
                  <p className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">{a.title}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{a.time} leestijd</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-5">Klaar om te beginnen?</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Plan een vrijblijvend gesprek en ontdek wat er nodig is om jouw organisatie compliant te maken.
          </p>
          <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-10 h-14">
            <Link href="/#demo">Plan een gesprek</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
