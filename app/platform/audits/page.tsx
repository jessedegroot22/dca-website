import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import {
  CheckCircle2,
  FileText,
  Calendar,
  Users,
  Download,
  RefreshCw,
  Clock,
  AlertCircle,
  Upload,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function AuditsModulePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-green-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-green-600" />
                AUDIT MODULE
              </div>

              <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
                Stressvrij auditeren.
                <br />
                <span className="text-green-600">Altijd en overal voorbereid.</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed">
                Verzamel bewijslast, plan audits en werk samen met auditors in één platform. Van
                interne controle tot externe certificering.
              </p>

              <div>
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-dark hover:bg-slate-800 text-white rounded-full font-bold"
                >
                  <Link href="#start">Start met gratis trial</Link>
                </Button>
              </div>
            </div>

            {/* Audit Dashboard Mockup */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <div className="aspect-[4/3] bg-slate-50">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-6 py-4 bg-white border-b border-slate-200">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 text-xs text-slate-400 font-mono">
                    AUDIT DASHBOARD
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-6">
                  {/* Navigation tabs */}
                  <div className="flex gap-4 mb-6">
                    <div className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-bold text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Overzicht
                    </div>
                    <div className="px-4 py-2 bg-slate-100 text-slate-500 rounded-lg font-medium text-sm">
                      Planning
                    </div>
                    <div className="px-4 py-2 bg-slate-100 text-slate-500 rounded-lg font-medium text-sm">
                      Rapportages
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white border border-slate-200 rounded-lg p-4">
                      <div className="text-2xl font-bold text-brand-dark mb-1">3</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">
                        Openstaande
                      </div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-lg p-4">
                      <div className="text-2xl font-bold text-brand-dark mb-1">12 Okt</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">
                        Volgende Audit
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600 mb-1">94%</div>
                      <div className="text-xs text-green-700 uppercase tracking-wide">
                        Compliant
                      </div>
                    </div>
                  </div>

                  {/* Table preview */}
                  <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-3">
                    <div className="h-2 bg-slate-200 rounded w-3/4" />
                    <div className="h-2 bg-slate-100 rounded w-2/3" />
                    <div className="h-2 bg-slate-100 rounded w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Always Audit-Ready */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Evidence Collection Visual */}
            <div className="order-2 lg:order-1">
              <Card className="p-8 bg-slate-50">
                <div className="space-y-4">
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-6">
                    EVIDENCE COLLECTION
                  </div>

                  <EvidenceItem
                    title="Backup Log - Sept"
                    date="Voltooid op 30 sept '24"
                    status="complete"
                  />
                  <EvidenceItem
                    title="Access Review Q3"
                    date="Voltooid op 01 okt '24"
                    status="complete"
                  />
                  <EvidenceItem
                    title="Penetratitest Rapport"
                    date="In behandeling"
                    status="pending"
                  />
                </div>
              </Card>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-green-600" />
                <span className="text-green-600 font-bold uppercase tracking-wider text-sm">
                  VOORBEREIDING
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Altijd Audit-Ready
              </h2>
              <div className="text-lg text-slate-600 space-y-4">
                <p>
                  Stop met het op het laatste moment verzamelen van bewijslast. We kunnen uw
                  organisatie het gehele jaar automatisch bewijsstukken, logbestanden, screenshots
                  of logfiles direct aan van noemen.
                </p>

                <div className="space-y-3 pt-4">
                  <FeatureCheckItem text="Automatische reminders voor periodieke taken" />
                  <FeatureCheckItem text="Direct inzicht in ontbrekende bewijslast" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yearly Planning */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-brand-primary" />
                <span className="text-brand-primary font-bold uppercase tracking-wider text-sm">
                  PLANNING
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Jaarplanning & Interne Audits
              </h2>
              <div className="text-lg text-slate-600 space-y-4">
                <p>
                  Houd grip op uw auditcyclus. Plan interne audits in, wijs auditoren toe en bewijs
                  de voortgang. Zo komt u nooit voor verrassingen te staan.
                </p>

                <Button
                  asChild
                  variant="link"
                  className="text-brand-primary font-bold p-0 h-auto hover:underline"
                >
                  <Link href="#calendar">Bekijk audit kalender →</Link>
                </Button>
              </div>
            </div>

            {/* Calendar Visual */}
            <div>
              <Card className="p-6 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-xl font-bold text-brand-dark">Audit Kalender 2024</div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-blue-50 text-brand-primary rounded-md text-sm font-bold">
                      Maand
                    </button>
                    <button className="px-3 py-1 bg-slate-50 text-slate-500 rounded-md text-sm">
                      Week
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <CalendarEvent
                    date="24"
                    month="Sep"
                    title="Interne Audit"
                    subtitle="Informatiebeveiliging"
                    color="blue"
                  />
                  <CalendarEvent
                    date="12"
                    month="Okt"
                    title="Externe Audit"
                    subtitle="ISO 27001 Hoofdaudit"
                    color="green"
                  />
                  <CalendarEvent
                    date="05"
                    month="Nov"
                    title="Management Review"
                    subtitle="Q4 Bespreking"
                    color="purple"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborate with Auditor */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Auditor Portal Visual */}
            <div className="order-2 lg:order-1">
              <Card className="p-8 bg-gradient-to-br from-brand-dark to-slate-900 text-white">
                <div className="mb-8">
                  <div className="text-sm text-slate-400 mb-2">DCA Auditor Portaal</div>
                  <div className="text-xl font-bold">Geef externe auditor toegang</div>
                </div>

                <div className="space-y-4">
                  <AuditorDocItem icon={<FileText />} title="Informatiebeveiligingsbeleid" />
                  <AuditorDocItem icon={<FileText />} title="Risico Analyse 2024" />
                </div>

                <Button className="w-full mt-6 bg-brand-primary hover:bg-blue-600 text-white rounded-lg font-bold">
                  Exporteer Audit Dossier (ZIP)
                </Button>
              </Card>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-purple-600" />
                <span className="text-purple-600 font-bold uppercase tracking-wider text-sm">
                  SAMENWERKING
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Samenwerken met de Auditor
              </h2>
              <div className="text-lg text-slate-600 space-y-4">
                <p>
                  Geef uw externe auditor tijdelijk toegang tot een specifieke omgeving. Zo kunnen
                  zij bewijzen doornemen zonder dat u hoeft te mailen. Iedereen spaart tijd en u
                  hoeft geen gevoelige data te e-mailen.
                </p>

                <div className="space-y-3 pt-4">
                  <FeatureCheckItem text="Veilige gastprofielen voor auditors" />
                  <FeatureCheckItem text="Download compleet audit dossier per druk op de knop" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Finding to Improvement */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-orange-600" />
                <span className="text-brand-accent font-bold uppercase tracking-wider text-sm">
                  VERBETERING
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Van Bevinding naar Verbetering
              </h2>
              <div className="text-lg text-slate-600 space-y-4">
                <p>
                  Een audit stopt niet bij het rapport. Registreer afwijkingen (non-conformiteiten)
                  direct in de tool en koppel die aan een actiehouder. Zo lost u bevindingen
                  gestructureerd en traceerbaar op.
                </p>

                <div className="space-y-2 mt-6">
                  <StatItem label="100%" value="Actievoortgang inzichtelijk" />
                  <StatItem label="0" value="Openstaande kritieke bevindingen" />
                </div>
              </div>
            </div>

            {/* Action List Visual */}
            <div>
              <Card className="p-6 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-lg font-bold text-brand-dark">Actielijst</div>
                  <button className="text-brand-primary text-sm font-bold hover:underline">
                    + Nieuwe actie
                  </button>
                </div>

                <div className="space-y-3">
                  <ActionItem
                    title="Update wachtwoordbeleid"
                    assignee="Compliance Officer"
                    priority="high"
                  />
                  <ActionItem
                    title="Revisie leverancierslijst"
                    assignee="Inkoop Manager"
                    priority="medium"
                  />
                  <ActionItem
                    title="Training medewerkers"
                    assignee="HR Afdeling"
                    priority="low"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-blue-700 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om te certificeren?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Vraag vandaag nog een vrijblijvend adviesgesprek aan. We bespreken uw situatie en geven
            direct inzicht in de stappen die nodig zijn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-accent hover:bg-orange-600 text-white rounded-full font-bold"
            >
              <Link href="#contact">Gratis Adviesgesprek</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white rounded-full font-bold backdrop-blur-sm"
            >
              <Link href="#brochure">Download Brochure</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function EvidenceItem({
  title,
  date,
  status,
}: {
  title: string
  date: string
  status: 'complete' | 'pending'
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200">
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${status === 'complete' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}
        >
          {status === 'complete' ? (
            <CheckCircle2 className="w-5 h-5" />
          ) : (
            <Clock className="w-5 h-5" />
          )}
        </div>
        <div>
          <div className="font-bold text-brand-dark text-sm">{title}</div>
          <div className="text-xs text-slate-500">{date}</div>
        </div>
      </div>
      {status === 'complete' && (
        <button className="text-slate-400 hover:text-slate-600">
          <Download className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}

function FeatureCheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
        <CheckCircle2 className="w-4 h-4" />
      </div>
      <span className="text-slate-600">{text}</span>
    </div>
  )
}

function CalendarEvent({
  date,
  month,
  title,
  subtitle,
  color,
}: {
  date: string
  month: string
  title: string
  subtitle: string
  color: string
}) {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-brand-primary',
    green: 'bg-green-50 border-green-200 text-green-600',
    purple: 'bg-purple-50 border-purple-200 text-purple-600',
  }

  return (
    <div
      className={`flex items-center gap-4 p-4 border-l-4 rounded-lg ${colorClasses[color as keyof typeof colorClasses]}`}
    >
      <div className="text-center">
        <div className="text-2xl font-bold">{date}</div>
        <div className="text-xs uppercase tracking-wide">{month}</div>
      </div>
      <div className="flex-grow">
        <div className="font-bold text-brand-dark text-sm">{title}</div>
        <div className="text-xs text-slate-500">{subtitle}</div>
      </div>
      <Calendar className="w-5 h-5 opacity-40" />
    </div>
  )
}

function AuditorDocItem({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="text-blue-400">{icon}</div>
        <span className="text-sm font-medium">{title}</span>
      </div>
      <button className="text-white/60 hover:text-white">
        <Download className="w-4 h-4" />
      </button>
    </div>
  )
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-2xl font-bold text-brand-dark">{label}</div>
      <div className="text-sm text-slate-500">{value}</div>
    </div>
  )
}

function ActionItem({
  title,
  assignee,
  priority,
}: {
  title: string
  assignee: string
  priority: 'high' | 'medium' | 'low'
}) {
  const priorityConfig = {
    high: { color: 'bg-red-100 text-red-700', icon: <AlertCircle className="w-3 h-3" /> },
    medium: { color: 'bg-orange-100 text-orange-700', icon: <RefreshCw className="w-3 h-3" /> },
    low: { color: 'bg-blue-100 text-blue-700', icon: <Upload className="w-3 h-3" /> },
  }

  const config = priorityConfig[priority]

  return (
    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 transition">
      <div className="flex items-center gap-3 flex-grow">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${config.color}`}>
          {config.icon}
        </div>
        <div>
          <div className="font-bold text-brand-dark text-sm">{title}</div>
          <div className="text-xs text-slate-500">{assignee}</div>
        </div>
      </div>
      <button className="text-slate-400 hover:text-slate-600">
        <Users className="w-4 h-4" />
      </button>
    </div>
  )
}
