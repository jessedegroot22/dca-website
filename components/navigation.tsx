'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

type FrameworkItem = {
  title: string
  description: string
  href: string
}

type Feature = {
  title: string
  description: string
  href: string
  rightLabel: string
  frameworks: FrameworkItem[]
}

const features: Feature[] = [
  {
    title: 'Gestructureerd managementsysteem',
    description: 'Normen, risico\'s en maatregelen centraal beheerd',
    href: '/features/managementsysteem',
    rightLabel: 'Toepasbaar voor',
    frameworks: [
      { title: 'ISO 27001', description: 'Beheers informatiebeveiligingsrisico\'s met een ISMS', href: '/frameworks/iso-27001' },
      { title: 'NEN 7510', description: 'Managementsysteem voor zorgorganisaties', href: '/frameworks/nen-7510' },
      { title: 'NIS2', description: 'Risicobeheersing voor kritieke sectoren', href: '/frameworks/nis2' },
    ],
  },
  {
    title: 'Voorbeeldtemplates',
    description: 'Direct inzetbare compliance-documenten',
    href: '/features/voorbeeldtemplates',
    rightLabel: 'Beschikbare templates',
    frameworks: [
      { title: 'ISO 27001 templates', description: 'Beleid, procedures, risicoregister en ISMS-documentatie', href: '/frameworks/iso-27001' },
      { title: 'NEN 7510 templates', description: 'Zorggerelateerde beveiligingsdocumenten en registers', href: '/frameworks/nen-7510' },
      { title: 'ISO 42001 templates', description: 'AI-beleid, impactanalyses en governance-documenten', href: '/frameworks/iso-42001' },
    ],
  },
  {
    title: 'Beschikbare frameworks',
    description: 'ISO 27001, NEN 7510, NIS2 en meer',
    href: '/features/frameworks',
    rightLabel: 'Alle frameworks',
    frameworks: [
      { title: 'ISO 27001', description: 'Internationale standaard voor informatiebeveiliging', href: '/frameworks/iso-27001' },
      { title: 'NEN 7510', description: 'Informatiebeveiliging in de zorgsector', href: '/frameworks/nen-7510' },
      { title: 'NIS2', description: 'EU-richtlijn voor cybersecurity en weerbaarheid', href: '/frameworks/nis2' },
      { title: 'ISO 42001', description: 'Managementsysteem voor verantwoorde AI', href: '/frameworks/iso-42001' },
    ],
  },
  {
    title: 'Gebruiksvriendelijke takenmodule',
    description: 'Toewijzen, bewaken en voortgang rapporteren',
    href: '/features/takenmodule',
    rightLabel: 'Taken per framework',
    frameworks: [
      { title: 'ISO 27001 taken', description: 'Controls toewijzen aan eigenaren per domein', href: '/frameworks/iso-27001' },
      { title: 'NEN 7510 taken', description: 'Afdeling-specifieke actielijsten in de zorg', href: '/frameworks/nen-7510' },
      { title: 'NIS2 taken', description: 'Maatregel-workflows en deadline-bewaking', href: '/frameworks/nis2' },
    ],
  },
]

const defaultFrameworks: FrameworkItem[] = [
  { title: 'ISO 27001', description: 'Internationale standaard voor informatiebeveiliging', href: '/frameworks/iso-27001' },
  { title: 'NEN 7510', description: 'Informatiebeveiliging in de zorgsector', href: '/frameworks/nen-7510' },
  { title: 'NIS2', description: 'EU-richtlijn voor cybersecurity en weerbaarheid', href: '/frameworks/nis2' },
  { title: 'ISO 42001', description: 'Managementsysteem voor verantwoorde AI', href: '/frameworks/iso-42001' },
]

const kenniscentrumLinks = [
  { title: 'Alle artikelen', href: '/kenniscentrum', indent: false, heading: true },
  { title: 'Compliance', href: '/kenniscentrum/compliance', indent: false, heading: false },
  { title: 'Waarom moet je compliant zijn?', href: '/kenniscentrum/compliance/waarom-compliance', indent: true, heading: false },
  { title: 'ISO 27001', href: '/kenniscentrum/iso-27001', indent: false, heading: false },
  { title: 'Wat is ISO 27001?', href: '/kenniscentrum/iso-27001/wat-is-iso-27001', indent: true, heading: false },
  { title: 'Stappenplan certificering', href: '/kenniscentrum/iso-27001/stappenplan', indent: true, heading: false },
]

export function Navigation() {
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const [kenniscentrumOpen, setKenniscentrumOpen] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState<Feature | null>(null)

  const featuresTimer = useRef<NodeJS.Timeout | null>(null)
  const kenniscentrumTimer = useRef<NodeJS.Timeout | null>(null)

  const handleEnter = (setter: (v: boolean) => void, timer: React.MutableRefObject<NodeJS.Timeout | null>) => {
    if (timer.current) clearTimeout(timer.current)
    setter(true)
  }

  const handleLeave = (setter: (v: boolean) => void, timer: React.MutableRefObject<NodeJS.Timeout | null>) => {
    timer.current = setTimeout(() => {
      setter(false)
      setHoveredFeature(null)
    }, 200)
  }

  const activeFrameworks = hoveredFeature ? hoveredFeature.frameworks : defaultFrameworks

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo.png"
            alt="De Compliance Afdeling"
            width={180}
            height={50}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Main Menu */}
        <div className="hidden lg:flex items-center gap-8">

          {/* Features Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => handleEnter(setFeaturesOpen, featuresTimer)}
            onMouseLeave={() => handleLeave(setFeaturesOpen, featuresTimer)}
          >
            <button className="text-sm text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1 font-medium py-2">
              Features
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${featuresOpen ? 'rotate-180' : ''}`} />
            </button>

            {featuresOpen && (
              <div className="fixed left-0 right-0 top-20 z-50">
                <div className="bg-white border-b border-slate-200 shadow-xl">
                  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-2 gap-0">

                      {/* Left column: Features — visually dominant */}
                      <div className="pr-12">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
                          Features
                        </p>
                        <div className="space-y-1">
                          {features.map((feature) => {
                            const isActive = hoveredFeature?.href === feature.href
                            return (
                              <Link
                                key={feature.href}
                                href={feature.href}
                                onMouseEnter={() => setHoveredFeature(feature)}
                                className={`group flex items-start gap-3 p-3 rounded-lg transition-colors ${
                                  isActive ? 'bg-slate-50' : 'hover:bg-slate-50'
                                }`}
                              >
                                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-colors ${
                                  isActive ? 'bg-brand-accent' : 'bg-slate-300 group-hover:bg-brand-accent'
                                }`} />
                                <div>
                                  <div className={`text-sm font-semibold transition-colors ${
                                    isActive ? 'text-brand-accent' : 'text-slate-900 group-hover:text-brand-accent'
                                  }`}>
                                    {feature.title}
                                  </div>
                                  <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                    {feature.description}
                                  </div>
                                </div>
                                <ArrowRight className={`w-3.5 h-3.5 text-brand-accent ml-auto flex-shrink-0 mt-1 transition-opacity ${
                                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                }`} />
                              </Link>
                            )
                          })}
                        </div>
                        <div className="mt-5 pl-3">
                          <Link
                            href="/features/frameworks"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:gap-2.5 transition-all"
                          >
                            Bekijk alle features <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>

                      {/* Right column: Dynamic — visually subordinate */}
                      <div className="border-l border-slate-100 pl-12">
                        <p className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-5">
                          {hoveredFeature ? hoveredFeature.rightLabel : 'Frameworks & certificeringen'}
                        </p>
                        <div className="space-y-1">
                          {activeFrameworks.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="group flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2 flex-shrink-0 group-hover:bg-slate-400 transition-colors" />
                              <div>
                                <div className="text-sm font-medium text-slate-500 group-hover:text-slate-700 transition-colors">
                                  {item.title}
                                </div>
                                <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-5 pl-3">
                          <Link
                            href="/frameworks/iso-27001"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-slate-600 hover:gap-2.5 transition-all"
                          >
                            Bekijk alle frameworks <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/platform" className="text-sm text-slate-700 hover:text-slate-900 transition-colors font-medium">
            Platform
          </Link>

          <Link href="/pakketten" className="text-sm text-slate-700 hover:text-slate-900 transition-colors font-medium">
            Pakketten
          </Link>

          <Link href="/cases" className="text-sm text-slate-700 hover:text-slate-900 transition-colors font-medium">
            Cases
          </Link>

          {/* Kenniscentrum Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleEnter(setKenniscentrumOpen, kenniscentrumTimer)}
            onMouseLeave={() => handleLeave(setKenniscentrumOpen, kenniscentrumTimer)}
          >
            <button className="text-sm text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1 font-medium py-2">
              Kenniscentrum
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${kenniscentrumOpen ? 'rotate-180' : ''}`} />
            </button>
            {kenniscentrumOpen && (
              <div className="absolute top-full left-0 pt-2 z-50">
                <div className="w-64 bg-white border border-slate-200 rounded-lg shadow-lg py-2">
                  {kenniscentrumLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block py-2.5 text-sm hover:bg-slate-50 transition-colors ${
                        item.indent
                          ? 'pl-7 text-slate-400 hover:text-slate-600'
                          : item.heading
                            ? 'px-4 font-semibold text-slate-900 border-b border-slate-100 pb-3 mb-1'
                            : 'px-4 font-medium text-slate-700'
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/blog" className="text-sm text-slate-700 hover:text-slate-900 transition-colors font-medium">
            Blog
          </Link>

          <Link href="#over-ons" className="text-sm text-slate-700 hover:text-slate-900 transition-colors font-medium">
            Over ons
          </Link>

        </div>

        {/* CTA */}
        <Button
          asChild
          className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-6 shadow-sm"
        >
          <Link href="#demo">Demo aanvragen</Link>
        </Button>

      </div>
    </nav>
  )
}
