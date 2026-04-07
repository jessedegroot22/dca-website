'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import {
  Check,
  ArrowRight,
  Shield,
  Clock,
  Users,
  FileCheck,
  BarChart3,
  Lock,
  ChevronDown,
  ChevronUp,
  Phone,
  Calendar,
  Zap,
  AlertCircle,
} from 'lucide-react'

// ─── Platform UI Mockups ───────────────────────────────────────────────────────

function DashboardMockup() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden text-left">
      {/* Titlebar */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-4 bg-white border border-slate-200 rounded px-3 py-1 text-xs text-slate-400 text-center">
          app.dca.nl/dashboard
        </div>
      </div>

      {/* App chrome */}
      <div className="flex h-72">
        {/* Sidebar */}
        <div className="w-40 border-r border-slate-100 bg-slate-50 p-3 flex-shrink-0">
          <div className="flex items-center gap-2 mb-5 px-1">
            <div className="w-5 h-5 rounded bg-slate-900" />
            <span className="text-xs font-bold text-slate-900">DCA</span>
          </div>
          {[
            { label: 'Dashboard', active: true },
            { label: 'Taken', active: false },
            { label: 'Risico\'s', active: false },
            { label: 'Documenten', active: false },
            { label: 'Audit', active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`text-xs px-2 py-1.5 rounded mb-0.5 font-medium ${
                item.active
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-500'
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 p-5 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900">Compliance overzicht</h3>
            <span className="text-xs text-slate-400">Bijgewerkt vandaag</span>
          </div>

          {/* Score cards */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { label: 'ISO 27001', pct: 94, color: 'bg-green-500' },
              { label: 'NIS2', pct: 67, color: 'bg-amber-500' },
              { label: 'NEN 7510', pct: 41, color: 'bg-red-400' },
            ].map((f) => (
              <div key={f.label} className="bg-slate-50 border border-slate-100 rounded-lg p-2.5">
                <div className="text-[10px] text-slate-500 mb-1">{f.label}</div>
                <div className="text-lg font-bold text-slate-900 mb-1.5">{f.pct}%</div>
                <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className={`h-full ${f.color} rounded-full`} style={{ width: `${f.pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Activity */}
          <div className="space-y-1.5">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Recente activiteit</div>
            {[
              { text: 'A.5.1 Informatiebeveiligingsbeleid', status: 'done' },
              { text: 'Risicoanalyse Q2 bijgewerkt', status: 'done' },
              { text: 'A.7.2 Bewustwordingstraining', status: 'open' },
              { text: 'A.8.2 Asset classificatie', status: 'urgent' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-[11px]">
                {item.status === 'done' && <div className="w-3.5 h-3.5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0"><Check className="w-2 h-2 text-white" /></div>}
                {item.status === 'open' && <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-300 flex-shrink-0" />}
                {item.status === 'urgent' && <AlertCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />}
                <span className={item.status === 'done' ? 'text-slate-400' : 'text-slate-700'}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TaskMockup() {
  const tasks = [
    { code: 'A.5.1', title: 'Informatiebeveiligingsbeleid', owner: 'Lisa T.', status: 'done', date: '12 mrt' },
    { code: 'A.6.1', title: 'Rollen & verantwoordelijkheden', owner: 'Erik H.', status: 'open', date: '28 apr' },
    { code: 'A.7.2', title: 'Bewustwordingstraining', owner: 'Sandra M.', status: 'open', date: '15 mei' },
    { code: 'A.8.2', title: 'Asset classificatie', owner: '—', status: 'urgent', date: 'Urgent' },
    { code: 'A.9.1', title: 'Toegangscontrolebeleid', owner: 'Martijn B.', status: 'done', date: '3 mrt' },
  ]
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden text-left">
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-4 bg-white border border-slate-200 rounded px-3 py-1 text-xs text-slate-400 text-center">
          app.dca.nl/taken
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900">Taken — ISO 27001</h3>
          <div className="flex gap-2">
            <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded font-medium">3 open</span>
            <span className="text-[10px] bg-amber-50 text-amber-700 px-2 py-1 rounded font-medium">1 urgent</span>
          </div>
        </div>
        <div className="space-y-1">
          {/* Header row */}
          <div className="grid grid-cols-12 gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
            <span className="col-span-1">Nr</span>
            <span className="col-span-5">Taak</span>
            <span className="col-span-3">Eigenaar</span>
            <span className="col-span-2">Deadline</span>
            <span className="col-span-1">Status</span>
          </div>
          {tasks.map((t) => (
            <div key={t.code} className={`grid grid-cols-12 gap-2 items-center text-[11px] px-3 py-2 rounded-lg ${t.status === 'urgent' ? 'bg-amber-50 border border-amber-100' : 'hover:bg-slate-50'}`}>
              <span className="col-span-1 font-mono text-slate-400 text-[10px]">{t.code}</span>
              <span className={`col-span-5 font-medium ${t.status === 'done' ? 'text-slate-400 line-through' : 'text-slate-800'}`}>{t.title}</span>
              <span className="col-span-3 text-slate-500">{t.owner}</span>
              <span className={`col-span-2 text-[10px] ${t.status === 'urgent' ? 'text-amber-600 font-bold' : 'text-slate-400'}`}>{t.date}</span>
              <div className="col-span-1 flex justify-end">
                {t.status === 'done' && <div className="w-3.5 h-3.5 rounded-full bg-green-500 flex items-center justify-center"><Check className="w-2 h-2 text-white" /></div>}
                {t.status === 'open' && <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-300" />}
                {t.status === 'urgent' && <AlertCircle className="w-3.5 h-3.5 text-amber-500" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function RiskMockup() {
  const risks = [
    { id: 'R-01', asset: 'Klantdata CRM', threat: 'Diefstal / ongeautoriseerde toegang', kans: 'Middel', impact: 'Hoog', score: 'Hoog', status: 'open' },
    { id: 'R-02', asset: 'Mailserver', threat: 'Phishing / credential compromise', kans: 'Hoog', impact: 'Hoog', score: 'Kritiek', status: 'urgent' },
    { id: 'R-03', asset: 'Back-ups', threat: 'Ransomware / dataverlies', kans: 'Laag', impact: 'Hoog', score: 'Middel', status: 'done' },
    { id: 'R-04', asset: 'Fysieke serverruimte', threat: 'Brand / overstroming', kans: 'Laag', impact: 'Middel', score: 'Laag', status: 'done' },
  ]
  const scoreColor = (s: string) => {
    if (s === 'Kritiek') return 'bg-red-100 text-red-700'
    if (s === 'Hoog') return 'bg-amber-100 text-amber-700'
    if (s === 'Middel') return 'bg-blue-100 text-blue-700'
    return 'bg-slate-100 text-slate-600'
  }
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden text-left">
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-4 bg-white border border-slate-200 rounded px-3 py-1 text-xs text-slate-400 text-center">
          app.dca.nl/risicos
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900">Risicoregister</h3>
          <span className="text-[10px] bg-red-50 text-red-600 px-2 py-1 rounded font-medium border border-red-100">1 kritiek risico</span>
        </div>
        <div className="space-y-1">
          <div className="grid grid-cols-12 gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
            <span className="col-span-1">ID</span>
            <span className="col-span-3">Asset</span>
            <span className="col-span-4">Bedreiging</span>
            <span className="col-span-2">Kans / Impact</span>
            <span className="col-span-2">Risico</span>
          </div>
          {risks.map((r) => (
            <div key={r.id} className={`grid grid-cols-12 gap-2 items-center text-[11px] px-3 py-2 rounded-lg ${r.status === 'urgent' ? 'bg-red-50 border border-red-100' : 'hover:bg-slate-50'}`}>
              <span className="col-span-1 font-mono text-slate-400 text-[10px]">{r.id}</span>
              <span className="col-span-3 font-medium text-slate-700 truncate">{r.asset}</span>
              <span className="col-span-4 text-slate-500 truncate">{r.threat}</span>
              <span className="col-span-2 text-slate-400">{r.kans} / {r.impact}</span>
              <div className="col-span-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${scoreColor(r.score)}`}>{r.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Review snippet ────────────────────────────────────────────────────────────

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const selectedReviews = [
  {
    quote: 'Binnen 30 minuten had ik een helder beeld van wat het platform kan. De demo was concreet, geen verkooppraatjes. We zijn daarna direct gestart.',
    name: 'Martijn van der Berg',
    role: 'CISO · Solvinity',
    initials: 'MB',
  },
  {
    quote: 'De consultant kende onze sector door en door. Ze stelden de juiste vragen en lieten precies zien wat relevant was voor ons NEN 7510-traject.',
    name: 'Sandra Meijer',
    role: 'Hoofd ICT · Zorggroep Noord',
    initials: 'SM',
  },
  {
    quote: 'Geen standaard productpresentatie, maar een gerichte sessie op onze situatie. Binnen een week hadden we een voorstel op tafel.',
    name: 'Thomas Klaassen',
    role: 'IT Manager · SoftwareHuis B.V.',
    initials: 'TK',
  },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'Hoe lang duurt de demo?',
    a: 'De demo duurt 30 minuten. We lopen het platform door, bespreken jouw specifieke situatie en beantwoorden vragen. Geen verkooppitch, wel een concreet gesprek.',
  },
  {
    q: 'Hoe snel word ik teruggebeld?',
    a: 'Je ontvangt binnen één werkdag een bevestiging met een voorstel voor een datum en tijdstip. Op drukke periodes kan dit twee werkdagen zijn.',
  },
  {
    q: 'Moet ik al weten welk framework ik nodig heb?',
    a: 'Nee. We helpen je ook te bepalen welk framework het meest relevant is voor jouw organisatie. Weet je het al — dan stemmen we de demo daar op af.',
  },
  {
    q: 'Is de demo vrijblijvend?',
    a: 'Volledig vrijblijvend. Je gaat nergens akkoord mee en er volgt geen verplichte opvolging. We geloven dat een goede demo zichzelf verkoopt.',
  },
  {
    q: 'Wie doet de demo?',
    a: 'Altijd een van onze gecertificeerde compliance consultants — niet een verkoper. Ze kennen de normen van binnen en buiten en spreken jouw taal.',
  },
  {
    q: 'Kan ik daarna ook een proefperiode aanvragen?',
    a: 'Ja. Na de demo kun je een proefperiode aanvragen om zelf met het platform aan de slag te gaan. We bespreken dit tijdens het gesprek.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DemoPage() {
  const [form, setForm] = useState({
    naam: '', bedrijf: '', email: '', telefoon: '', framework: '', grootte: '', bericht: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* ── Hero + Form ─────────────────────────────────────────────────────── */}
      <section className="pt-48 pb-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: pitch */}
            <div className="lg:pt-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-5 block">
                Gratis · 30 minuten · Vrijblijvend
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.05] tracking-tight">
                Zie hoe DCA werkt voor jouw organisatie
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Plan een persoonlijke demo met een van onze compliance consultants. Geen verkooppraatjes — een concreet gesprek over jouw situatie.
              </p>

              {/* USPs */}
              <ul className="space-y-4 mb-10">
                {[
                  { icon: Clock, text: 'Binnen één werkdag contact' },
                  { icon: Users, text: 'Demo door een gecertificeerde consultant, niet een verkoper' },
                  { icon: FileCheck, text: 'Afgestemd op jouw framework en sector' },
                  { icon: Zap, text: 'Direct bruikbare inzichten, ook als je nog niet besloten hebt' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-slate-700" />
                    </div>
                    <span className="text-slate-700">{text}</span>
                  </li>
                ))}
              </ul>

              {/* Trust logos */}
              <div className="pt-8 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                  Vertrouwd door 100+ organisaties
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  {['Solvinity', 'RST Group', 'Gem. Schiedam', 'Emerce', 'FinTech Solutions'].map((name) => (
                    <span key={name} className="text-sm font-medium text-slate-400">{name}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Aanvraag ontvangen</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Bedankt voor je aanvraag. Je hoort binnen één werkdag van ons met een voorstel voor datum en tijdstip.
                  </p>
                  <div className="bg-white border border-slate-200 rounded-xl p-5 text-left space-y-3">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Wat gebeurt er nu?</p>
                    {[
                      'We bekijken je aanvraag en selecteren de beste consultant voor jouw situatie',
                      'Je ontvangt een e-mail met 2–3 tijdslots om uit te kiezen',
                      'De demo duurt 30 minuten en vindt plaats via video of op locatie',
                    ].map((step, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center flex-shrink-0 font-bold mt-0.5">{i + 1}</div>
                        <span className="text-sm text-slate-600 leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">Demo aanvragen</h2>
                  <p className="text-sm text-slate-500 mb-6">Vul je gegevens in — we nemen binnen één werkdag contact op.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Naam *</label>
                        <input
                          required
                          type="text"
                          placeholder="Jan de Vries"
                          value={form.naam}
                          onChange={(e) => setForm({ ...form, naam: e.target.value })}
                          className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Bedrijf *</label>
                        <input
                          required
                          type="text"
                          placeholder="Bedrijfsnaam B.V."
                          value={form.bedrijf}
                          onChange={(e) => setForm({ ...form, bedrijf: e.target.value })}
                          className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">E-mailadres *</label>
                      <input
                        required
                        type="email"
                        placeholder="jan@bedrijf.nl"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Telefoonnummer</label>
                      <input
                        type="tel"
                        placeholder="+31 6 12345678"
                        value={form.telefoon}
                        onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Framework</label>
                        <select
                          value={form.framework}
                          onChange={(e) => setForm({ ...form, framework: e.target.value })}
                          className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white"
                        >
                          <option value="">Nog niet zeker</option>
                          <option>ISO 27001</option>
                          <option>NIS2</option>
                          <option>NEN 7510</option>
                          <option>ISO 42001</option>
                          <option>Meerdere frameworks</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Organisatiegrootte</label>
                        <select
                          value={form.grootte}
                          onChange={(e) => setForm({ ...form, grootte: e.target.value })}
                          className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white"
                        >
                          <option value="">Kies grootte</option>
                          <option>1–25 medewerkers</option>
                          <option>25–100 medewerkers</option>
                          <option>100–500 medewerkers</option>
                          <option>500+ medewerkers</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Bericht <span className="text-slate-400 font-normal">(optioneel)</span></label>
                      <textarea
                        rows={3}
                        placeholder="Wat is jouw belangrijkste compliance-uitdaging?"
                        value={form.bericht}
                        onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      Demo aanvragen <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      Volledig vrijblijvend · Geen verplichtingen · Binnen 1 werkdag reactie
                    </p>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── Verwachtingsmanagement ──────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Wat kun je verwachten?</h2>
            <p className="text-slate-600">Geen verrassingen. Zo verloopt het proces na je aanvraag.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-0 relative">
            {/* connecting line */}
            <div className="hidden md:block absolute top-8 left-[16.666%] right-[16.666%] h-px bg-slate-200" />
            {[
              {
                icon: Phone,
                step: '01',
                title: 'Contact binnen 1 werkdag',
                body: 'Een consultant neemt persoonlijk contact op — per e-mail of telefoon — om de planning af te stemmen en alvast meer te horen over jouw situatie.',
              },
              {
                icon: Calendar,
                step: '02',
                title: '30-minuten demo op maat',
                body: 'We lopen samen door het platform, toegespitst op jouw framework en sector. Geen standaard presentatie: jouw vragen staan centraal.',
              },
              {
                icon: FileCheck,
                step: '03',
                title: 'Concreet voorstel op maat',
                body: 'Na de demo ontvang je een helder voorstel. Daarin staat wat we aanbevelen, welk pakket past en wat een realistisch traject zou zijn.',
              },
            ].map(({ icon: Icon, step, title, body }) => (
              <div key={step} className="relative flex flex-col items-center text-center px-8">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-5 relative z-10 shadow-sm">
                  <Icon className="w-6 h-6 text-slate-700" />
                </div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">{step}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform screenshots ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3 block">Het platform</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Wat je te zien krijgt in de demo</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Drie centrale modules die samen het volledige compliance-traject afdekken.</p>
          </div>

          <div className="space-y-20">
            {/* Dashboard */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Module 1</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Compliance dashboard</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  In één oogopslag zie je de voortgang per framework, openstaande acties en recente activiteit. Het dashboard is leidend voor het management en de compliance officer.
                </p>
                <ul className="space-y-2.5">
                  {['Realtime voortgang per framework', 'Signalering van urgente risico\'s', 'Overzicht voor management rapportage'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <DashboardMockup />
              </div>
            </div>

            {/* Tasks */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Module 2</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Takenmodule</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Alle normeisen zijn vertaald naar concrete taken met eigenaren en deadlines. Zo weet iedereen wat er van hem of haar verwacht wordt — zonder eindeloos mailverkeer.
                </p>
                <ul className="space-y-2.5">
                  {['Normeisen als werkbare taken', 'Eigenaarschap en deadlines per taak', 'Voortgangsbewaking en statusmeldingen'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:order-1">
                <TaskMockup />
              </div>
            </div>

            {/* Risks */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Module 3</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Risicoregister</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Identificeer, beoordeel en beheer informatiebeveiligingsrisico's gestructureerd. Altijd audit-ready, altijd inzichtelijk welke risico's aandacht vragen.
                </p>
                <ul className="space-y-2.5">
                  {['Gestructureerde risicoanalyse conform de norm', 'Kans × impact scorematrix', 'Koppeling aan maatregelen en bewijslast'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <RiskMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USPs ────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-3">Waarom DCA</h2>
            <p className="text-slate-400">De redenen waarom 100+ organisaties voor ons kiezen.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Shield,
                title: 'Gecertificeerde consultants',
                body: 'Al onze consultants zijn gecertificeerd voor de frameworks die ze begeleiden. Je praat altijd met een vakinhoudelijk expert.',
              },
              {
                icon: BarChart3,
                title: 'Bewezen aanpak',
                body: 'We hebben honderden organisaties door certificeringstrajecten geleid. Onze methodiek is gebaseerd op wat werkt — niet op theorie.',
              },
              {
                icon: Zap,
                title: 'Platform + mens',
                body: 'Software neemt de administratie over; consultants denken mee op inhoud. De combinatie bespaart tijd en vergroot de slagingskans.',
              },
              {
                icon: Lock,
                title: 'Altijd audit-ready',
                body: 'Alle documentatie, bewijslast en rapportages worden automatisch bijgehouden. Je hoeft nooit meer panisch op zoek naar documenten.',
              },
              {
                icon: Clock,
                title: 'Kortere doorlooptijd',
                body: 'Gemiddeld halen onze klanten hun certificaat 30% sneller dan de marktnorm. Gestructureerde aanpak en templates doen dat werk.',
              },
              {
                icon: Users,
                title: 'Meerdere frameworks tegelijk',
                body: 'ISO 27001, NIS2, NEN 7510 en ISO 42001 in één platform. Overlap benutten en dubbel werk voorkomen is de standaard werkwijze.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-slate-800 border border-slate-700 rounded-xl p-7">
                <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-accent" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3 block">Ervaringen</span>
              <h2 className="text-3xl font-bold text-slate-900">Wat klanten zeggen over de demo</h2>
            </div>
            <div className="hidden md:flex flex-col items-end gap-1">
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold text-slate-900 leading-none">4.9</span>
                <div className="mb-1">
                  <StarRating />
                  <p className="text-xs text-slate-400 mt-0.5">80+ beoordelingen</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {selectedReviews.map((r) => (
              <div key={r.name} className="bg-slate-50 border border-slate-200 rounded-xl p-7 flex flex-col gap-4">
                <StarRating />
                <blockquote className="text-slate-700 leading-relaxed text-sm flex-1">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                  <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{r.initials}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{r.name}</div>
                    <div className="text-xs text-slate-500">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/cases" className="text-sm font-semibold text-slate-600 hover:text-slate-900 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
              Bekijk alle cases <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Veelgestelde vragen</h2>
            <p className="text-slate-600">Alles wat je wilt weten voor je de demo aanvraagt.</p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Klaar om een demo in te plannen?
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Scroll terug naar het formulier of neem direct contact op via telefoon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
            >
              Demo aanvragen <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+31103602829"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-slate-400 text-slate-700 font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              +31 10 360 28 29
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
