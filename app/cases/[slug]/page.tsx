import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { notFound } from 'next/navigation'

const cases = [
  {
    slug: 'regio-ict',
    client: 'Regio ICT',
    sector: 'IT-dienstverlening',
    size: '80–120 medewerkers',
    framework: 'ISO 27001',
    result: 'Gecertificeerd binnen 8 maanden',
    image: '/cases/regio-ict.jpg',
    tagline: 'Van achterstanden naar aantoonbare controle — in minder dan een jaar.',
    challenge:
      'Regio ICT levert IT-diensten aan gemeenten en publieke instellingen. Opdrachtgevers vroegen steeds vaker om aantoonbare informatiebeveiliging als voorwaarde voor samenwerking. Intern was er weinig grip op risico\'s, beleid en technische maatregelen. Een gestructureerde aanpak ontbrak volledig.',
    approach:
      'We startten met een gap-analyse op basis van ISO 27001:2022. De uitkomsten werden direct ingevoerd in ons platform, waarna een ISMS-structuur werd opgezet met duidelijke eigenaarschappen per afdeling. Onze consultant begeleidde maandelijkse reviews en zorgde voor voortgang in de implementatie van controls.',
    results: [
      'ISO 27001 certificaat behaald binnen 8 maanden',
      'Volledig ISMS operationeel met 93 controls gedocumenteerd',
      'Risicoregister actueel en eigenaarschappen belegd',
      'Interne audit succesvol doorlopen zonder kritische bevindingen',
      'Gemeentelijke opdrachtgevers akkoord met certificaat',
    ],
    quote: 'Het platform gaf ons overzicht dat we nooit eerder hadden. We wisten eindelijk wat er nog moest gebeuren en wie daarvoor verantwoordelijk was.',
    quotePerson: 'IT-manager, Regio ICT',
    relatedCases: ['zorggroep-noord', 'softwarehuis-bv'],
  },
  {
    slug: 'zorggroep-noord',
    client: 'Zorggroep Noord',
    sector: 'Zorg',
    size: '200–350 medewerkers',
    framework: 'NEN 7510',
    result: 'NEN 7510 certificaat behaald',
    image: '/cases/zorggroep-noord.jpg',
    tagline: 'Informatiebeveiliging in de zorg: compliant zonder de zorgverlening te verstoren.',
    challenge:
      'Als middelgrote zorginstelling was Zorggroep Noord wettelijk verplicht te voldoen aan NEN 7510. Eerdere pogingen strandden door gebrek aan structuur en capaciteit. Het team had behoefte aan een pragmatische aanpak die haalbaar was naast de dagelijkse zorgverlening.',
    approach:
      'Wij brachten de huidige staat in kaart via een NEN 7510-specifieke gap-analyse. Op basis hiervan werd een gefaseerd implementatieplan opgesteld dat aansloot op de planning van de organisatie. Onze consultant nam de coördinatie op zich zodat intern medewerkers ontzorgd werden.',
    results: [
      'NEN 7510 certificaat behaald na 10 maanden',
      'Alle kritische patiëntgegevens-processen gedocumenteerd',
      'Bewustzijnstraining voor 200+ medewerkers afgerond',
      'Incidentprocedure opgezet en getest',
      'Externe auditor beoordeelde dossier als volledig',
    ],
    quote: 'Wij konden ons blijven richten op de zorg. Het compliance-traject liep parallel zonder dat het onze organisatie belastte.',
    quotePerson: 'Hoofd ICT & Privacy, Zorggroep Noord',
    relatedCases: ['regio-ict', 'gemeente-delta'],
  },
  {
    slug: 'fintech-solutions',
    client: 'FinTech Solutions',
    sector: 'Financiële dienstverlening',
    size: '50–80 medewerkers',
    framework: 'ISO 27001 & NIS2',
    result: 'Dubbele compliance in één traject',
    image: '/cases/fintech-solutions.jpg',
    tagline: 'Twee normen, één aanpak — efficiënt en zonder dubbel werk.',
    challenge:
      'FinTech Solutions stond onder druk vanuit zowel klanten als toezichthouders: ISO 27001 was vereist door enterprise-klanten en NIS2 viel onder de wettelijke verplichting als aanbieder van financiële digitale diensten. Twee afzonderlijke trajecten voelden onhaalbaar.',
    approach:
      'We analyseerden de overlap tussen ISO 27001 en NIS2 en ontwierpen een gecombineerde implementatieroute. Gedeelde controls werden één keer ingericht en dubbel gedekt. Het platform ondersteunde de bijhouding van beide frameworks vanuit één dashboard.',
    results: [
      'ISO 27001 certificering afgerond',
      'NIS2-verklaring opgesteld en ingediend',
      '40% minder overlappend werk door gecombineerde aanpak',
      'Eén risicomanagementproces voor beide normen',
      'Klantaudit succesvol doorlopen',
    ],
    quote: 'We dachten dat twee trajecten dubbel zoveel tijd zou kosten. In de praktijk viel dat enorm mee dankzij de gecombineerde aanpak.',
    quotePerson: 'CISO, FinTech Solutions',
    relatedCases: ['regio-ict', 'gemeente-delta'],
  },
  {
    slug: 'gemeente-delta',
    client: 'Gemeente Delta',
    sector: 'Overheid',
    size: '400–600 medewerkers',
    framework: 'NIS2',
    result: 'Volledige NIS2-implementatie',
    image: '/cases/gemeente-delta.jpg',
    tagline: 'Grip op cybersecurity voor een gemeente die het vertrouwen van burgers niet kan verliezen.',
    challenge:
      'Na de invoering van de NIS2-richtlijn moest Gemeente Delta aantonen dat haar cybersecurity op orde was. Intern waren de verantwoordelijkheden versnipperd over meerdere afdelingen. Er was geen centraal overzicht van risico\'s en maatregelen.',
    approach:
      'We startten met een nulmeting op basis van de NIS2-vereisten en vertaalden deze naar concrete maatregelen per afdeling. Ons platform zorgde voor centrale coördinatie. Maandelijkse stuurgroeprapportages hielden het bestuur op de hoogte.',
    results: [
      'Volledige NIS2-risicoanalyse afgerond',
      'Maatregelenplan goedgekeurd door gemeentebestuur',
      'Incidentresponsproces ingesteld en getraind',
      'Supply chain-risico\'s in kaart gebracht',
      'Rapportage ingediend bij toezichthoudende instantie',
    ],
    quote: 'Voor het eerst hadden we als gemeente een compleet beeld van onze cyberrisico\'s. En een plan om er iets aan te doen.',
    quotePerson: 'CISO, Gemeente Delta',
    relatedCases: ['zorggroep-noord', 'fintech-solutions'],
  },
  {
    slug: 'softwarehuis-bv',
    client: 'Softwarehuis BV',
    sector: 'Software development',
    size: '30–50 medewerkers',
    framework: 'ISO 27001',
    result: 'Certificering in 6 maanden',
    image: '/cases/softwarehuis-bv.jpg',
    tagline: 'ISO 27001 als commercieel voordeel: deuren openen bij enterprise-klanten.',
    challenge:
      'Softwarehuis BV ontwikkelt maatwerksoftware voor grote organisaties. Steeds vaker was ISO 27001 een harde eis in aanbestedingen. Zonder certificering vielen ze af in de eerste selectieronde.',
    approach:
      'We kozen voor een snelle route: gestructureerde gap-analyse, directe inzet van onze voorbeeldtemplates en wekelijkse begeleiding door een consultant. Het platform maakte de voortgang continu inzichtelijk voor het management.',
    results: [
      'ISO 27001 gecertificeerd binnen 6 maanden',
      'Volledige documentatieset opgezet via templates',
      'Drie nieuwe enterprise-klanten gewonnen na certificering',
      'Interne security awareness significant verbeterd',
      'Herhalingsaudit na 1 jaar zonder tekortkomingen doorlopen',
    ],
    quote: 'Het certificaat heeft ons direct nieuwe klanten opgeleverd. De investering was binnen drie maanden terugverdiend.',
    quotePerson: 'Directeur, Softwarehuis BV',
    relatedCases: ['regio-ict', 'ai-startup'],
  },
  {
    slug: 'ai-startup',
    client: 'AI Startup',
    sector: 'Technologie',
    size: '15–30 medewerkers',
    framework: 'ISO 42001',
    result: 'Eerste ISO 42001-gecertificeerde startup in NL',
    image: '/cases/ai-startup.jpg',
    tagline: 'Verantwoorde AI als concurrentievoordeel — aantoonbaar en geloofwaardig.',
    challenge:
      'Als startup die AI-systemen ontwikkelt voor gereguleerde sectoren, wilde het bedrijf aantonen dat het verantwoord met AI omgaat. Klanten en investeerders vroegen steeds vaker om een concrete onderbouwing. ISO 42001 bood het kader, maar de norm was nieuw en er was weinig precedent.',
    approach:
      'We vertaalden de ISO 42001-vereisten naar een implementatieplan dat aansloot op de startup-context. Samen met de CTO werd een AI-managementsysteem ingericht inclusief risicoclassificatie van AI-modellen, impactanalyses en governance-documenten.',
    results: [
      'Eerste ISO 42001-certificaat in Nederland voor een startup',
      'AI-risicoregister opgezet voor alle productie-modellen',
      'Governance-structuur voor AI-beslissingen geïmplementeerd',
      'Twee enterprise-klanten overtuigd mede dankzij certificering',
      'Investeerderspitch versterkt met aantoonbare AI-governance',
    ],
    quote: 'ISO 42001 gaf ons geloofwaardigheid die we met woorden alleen nooit hadden kunnen opbouwen. Het opende deuren die eerder gesloten bleven.',
    quotePerson: 'CEO, AI Startup',
    relatedCases: ['softwarehuis-bv', 'fintech-solutions'],
  },
]

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseData = cases.find((c) => c.slug === slug)
  if (!caseData) notFound()

  const related = cases.filter((c) => caseData.relatedCases.includes(c.slug))

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-48 pb-0 bg-white">
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> Alle cases
          </Link>

          {/* Meta tags */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{caseData.sector}</span>
            <span className="text-slate-200">|</span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{caseData.size}</span>
            <span className="text-slate-200">|</span>
            <span className="text-xs font-semibold text-brand-accent bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
              {caseData.framework}
            </span>
          </div>

          <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {caseData.client}
          </h1>
          <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl mb-10">
            {caseData.tagline}
          </p>

          {/* Result badge */}
          <div className="inline-flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-lg px-5 py-3">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm font-semibold text-slate-800">{caseData.result}</span>
          </div>
        </div>

        {/* Hero image — full width, flush to bottom of hero */}
        <div className="relative w-full aspect-[21/7] overflow-hidden bg-slate-100">
          <Image
            src={caseData.image}
            alt={caseData.client}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/10" />
        </div>
      </section>

      {/* Content — full width, no sidebar */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 space-y-20">

          {/* Challenge */}
          <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
            <div>
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">De uitdaging</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Wat speelde er?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{caseData.challenge}</p>
            </div>
          </div>

          <div className="border-t border-slate-100" />

          {/* Approach */}
          <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
            <div>
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">De aanpak</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Hoe zijn we te werk gegaan?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{caseData.approach}</p>
            </div>
          </div>

          <div className="border-t border-slate-100" />

          {/* Results */}
          <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
            <div>
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">De resultaten</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Wat heeft het opgeleverd?</h2>
              <ul className="space-y-4">
                {caseData.results.map((r) => (
                  <li key={r} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-brand-accent" />
                    </div>
                    <span className="text-lg text-slate-700 leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-100" />

          {/* Quote — full width */}
          <blockquote className="py-4">
            <div className="text-5xl text-brand-accent font-serif leading-none mb-6">&ldquo;</div>
            <p className="text-2xl text-slate-700 leading-relaxed italic font-light max-w-3xl mb-6">
              {caseData.quote}
            </p>
            <footer className="text-sm font-semibold text-slate-500">— {caseData.quotePerson}</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Vergelijkbare uitdaging?</h2>
            <p className="text-slate-400 leading-relaxed">
              Plan een gesprek en ontdek wat wij voor uw organisatie kunnen betekenen.
            </p>
          </div>
          <Link
            href="/#demo"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors whitespace-nowrap flex-shrink-0"
          >
            Demo aanvragen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Related cases */}
      {related.length > 0 && (
        <section className="py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-12">Vergelijkbare cases</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 hover:shadow-md transition-all"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <Image
                      src={c.image}
                      alt={c.client}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{c.sector}</span>
                      <span className="text-xs font-semibold text-brand-accent bg-orange-50 px-2.5 py-1 rounded-full">{c.framework}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-accent transition-colors">{c.client}</h3>
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-sm font-medium text-slate-600">{c.result}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent group-hover:gap-2.5 transition-all">
                      Lees de case <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
