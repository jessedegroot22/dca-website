'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'

const cases = [
  {
    slug: 'regio-ict',
    client: 'Regio ICT',
    sector: 'IT-dienstverlening',
    framework: 'ISO 27001',
    result: 'Gecertificeerd binnen 8 maanden',
    image: '/cases/regio-ict.jpg',
    description:
      'Regio ICT wilde haar informatiebeveiliging aantoonbaar op orde brengen voor haar gemeentelijke opdrachtgevers. Met ons platform en begeleiding van een vaste consultant behaalde zij de ISO 27001-certificering binnen de gestelde termijn.',
  },
  {
    slug: 'zorggroep-noord',
    client: 'Zorggroep Noord',
    sector: 'Zorg',
    framework: 'NEN 7510',
    result: 'NEN 7510 certificaat behaald',
    image: '/cases/zorggroep-noord.jpg',
    description:
      'Als middelgrote zorginstelling was Zorggroep Noord verplicht te voldoen aan NEN 7510. Onze aanpak maakte inzichtelijk welke maatregelen nog ontbraken en hoe deze praktisch ingevoerd konden worden.',
  },
  {
    slug: 'fintech-solutions',
    client: 'FinTech Solutions',
    sector: 'Financiële dienstverlening',
    framework: 'ISO 27001 & NIS2',
    result: 'Dubbele compliance in één traject',
    image: '/cases/fintech-solutions.jpg',
    description:
      'FinTech Solutions moest tegelijkertijd voldoen aan ISO 27001 en de NIS2-richtlijn. Door beide trajecten te combineren bespaarde zij significant op doorlooptijd en consultancykosten.',
  },
  {
    slug: 'gemeente-delta',
    client: 'Gemeente Delta',
    sector: 'Overheid',
    framework: 'NIS2',
    result: 'Volledige NIS2-implementatie',
    image: '/cases/gemeente-delta.jpg',
    description:
      'Na de invoering van de NIS2-richtlijn had Gemeente Delta behoefte aan een gestructureerde aanpak. Ons platform hielp bij het in kaart brengen van risicogebieden en het bewaken van de implementatie.',
  },
  {
    slug: 'softwarehuis-bv',
    client: 'Softwarehuis BV',
    sector: 'Software development',
    framework: 'ISO 27001',
    result: 'Certificering in 6 maanden',
    image: '/cases/softwarehuis-bv.jpg',
    description:
      'Softwarehuis BV had ISO 27001 nodig om enterprise-klanten binnen te halen. Met onze begeleiding en kant-en-klare templates verliep het traject efficiënt en zonder onnodige overhead.',
  },
  {
    slug: 'ai-startup',
    client: 'AI Startup',
    sector: 'Technologie',
    framework: 'ISO 42001',
    result: 'Eerste ISO 42001-gecertificeerde startup in NL',
    image: '/cases/ai-startup.jpg',
    description:
      'Als pionier op het gebied van AI wilde deze startup aantonen verantwoord met AI-systemen om te gaan. ISO 42001 bood het kader; wij boden de structuur en documentatie om dat te realiseren.',
  },
]

const sectors = ['Alle sectoren', ...Array.from(new Set(cases.map((c) => c.sector)))]
const frameworks = ['Alle frameworks', 'ISO 27001', 'NEN 7510', 'NIS2', 'ISO 42001']

export default function CasesPage() {
  const [activeSector, setActiveSector] = useState('Alle sectoren')
  const [activeFramework, setActiveFramework] = useState('Alle frameworks')

  const filtered = cases.filter((c) => {
    const sectorMatch = activeSector === 'Alle sectoren' || c.sector === activeSector
    const frameworkMatch = activeFramework === 'Alle frameworks' || c.framework.includes(activeFramework)
    return sectorMatch && frameworkMatch
  })

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-48 pb-24 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Cases</span>
          <h1 className="text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
            Resultaten bij echte organisaties
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            Hoe middelgrote en grote organisaties hun compliance-traject hebben doorlopen met ons platform en onze consultants.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">

          {/* Filters */}
          <div className="flex flex-wrap gap-10 mb-14 pb-10 border-b border-slate-200">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Sector</p>
              <div className="flex flex-wrap gap-2">
                {sectors.map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveSector(s)}
                    className={`text-sm px-4 py-2 rounded-full border transition-all font-medium ${
                      activeSector === s
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Framework</p>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFramework(f)}
                    className={`text-sm px-4 py-2 rounded-full border transition-all font-medium ${
                      activeFramework === f
                        ? 'bg-brand-accent text-white border-brand-accent'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cases grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-slate-500 text-lg">Geen cases gevonden voor deze combinatie.</p>
              <button
                onClick={() => { setActiveSector('Alle sectoren'); setActiveFramework('Alle frameworks') }}
                className="mt-4 text-sm text-brand-accent hover:underline font-medium"
              >
                Filters wissen
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 hover:shadow-md transition-all flex flex-col"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <Image
                      src={c.image}
                      alt={c.client}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {c.sector}
                      </span>
                      <span className="text-xs font-semibold text-brand-accent bg-orange-50 px-2.5 py-1 rounded-full">
                        {c.framework}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-accent transition-colors">
                      {c.client}
                    </h2>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      <span className="text-sm font-medium text-slate-700">{c.result}</span>
                    </div>

                    <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-6">
                      {c.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-accent group-hover:gap-2.5 transition-all">
                      Lees de case <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Klaar om uw eigen resultaat te boeken?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Plan een vrijblijvend gesprek en ontdek hoe wij uw compliance-traject kunnen begeleiden.
          </p>
          <Link
            href="/#demo"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-lg transition-colors"
          >
            Demo aanvragen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
