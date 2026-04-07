import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export function AIFrameworkBanner() {
  return (
    <section className="py-40 bg-slate-900 border-b border-slate-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: content */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4 block">
              Nieuw framework
            </span>
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              ISO 42001 — AI Management
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Kunstmatige intelligentie brengt nieuwe risico's en verantwoordelijkheden met zich mee.
              ISO 42001 biedt een raamwerk om AI verantwoord te implementeren en aantoonbaar in
              control te zijn — richting klanten, toezichthouders en de EU AI Act.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Voldoe aan de EU AI Act met een gecertificeerd AI-managementsysteem',
                'Identificeer en beheers risico\'s van AI-toepassingen in jouw organisatie',
                'Audit-ready documentatie voor AI-beleid en impactanalyses',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-brand-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-brand-accent" />
                  </div>
                  <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/frameworks/iso-42001"
              className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:gap-3 transition-all text-sm"
            >
              Meer over ISO 42001 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: visual */}
          <div className="flex items-center justify-center">
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-brand-accent/10 rounded-full blur-3xl scale-150" />

              {/* Badge */}
              <div className="relative w-72 h-72 flex items-center justify-center">

                {/* SVG icon — shield shape matching the uploaded logo */}
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-56 h-56"
                >
                  {/* Outer ring */}
                  <circle cx="100" cy="100" r="96" stroke="#1e293b" strokeWidth="2" />

                  {/* Left curved bracket */}
                  <path
                    d="M52 68 Q28 100 52 132"
                    stroke="#f97316"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Right curved bracket */}
                  <path
                    d="M148 68 Q172 100 148 132"
                    stroke="#f97316"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Top chevron */}
                  <path
                    d="M72 72 L100 56 L128 72"
                    stroke="#f97316"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />

                  {/* Center text */}
                  <text
                    x="100"
                    y="96"
                    textAnchor="middle"
                    fill="white"
                    fontSize="22"
                    fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="-0.5"
                  >
                    ISO 42001
                  </text>
                  <text
                    x="100"
                    y="118"
                    textAnchor="middle"
                    fill="#94a3b8"
                    fontSize="10"
                    fontWeight="500"
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="2"
                  >
                    AI MANAGEMENT
                  </text>

                  {/* Bottom status */}
                  <rect x="68" y="134" width="64" height="20" rx="10" fill="#f97316" fillOpacity="0.15" />
                  <text
                    x="100"
                    y="148"
                    textAnchor="middle"
                    fill="#f97316"
                    fontSize="9"
                    fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="1.5"
                  >
                    NIEUW
                  </text>
                </svg>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
