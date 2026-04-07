import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function WatIsISO27001Article() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* Article */}
      <article className="pt-48 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/kenniscentrum/iso-27001"
              className="text-sm text-slate-600 hover:text-slate-900 inline-flex items-center gap-2"
            >
              ← Terug naar ISO 27001
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="text-xs font-medium text-slate-500 mb-4 uppercase tracking-wider">
              ISO 27001
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Wat is ISO 27001?
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Een complete uitleg over de internationale standaard voor informatiebeveiliging 
              en waarom deze belangrijk is voor jouw organisatie.
            </p>
            <div className="mt-6 text-sm text-slate-500">
              8 minuten leestijd
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              De basis van ISO 27001
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              ISO 27001 is de internationale standaard voor het opzetten, implementeren, onderhouden en continu verbeteren van een Information Security Management System (ISMS). De norm wordt uitgegeven door de International Organization for Standardization (ISO) en is wereldwijd erkend als hét referentiekader voor informatiebeveiliging.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Het doel van ISO 27001 is om organisaties te helpen hun informatie systematisch te beschermen. Dit omvat niet alleen digitale gegevens, maar ook papieren documenten en kennis binnen de organisatie. De standaard biedt een raamwerk van beleid, procedures en maatregelen die zorgen voor de vertrouwelijkheid, integriteit en beschikbaarheid van informatie.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Waarom is ISO 27001 belangrijk?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              In een tijd waarin cyberaanvallen, datalekken en privacyschendingen regelmatig het nieuws halen, is informatiebeveiliging voor elke organisatie cruciaal. ISO 27001 biedt een bewezen methode om risico's te identificeren en te beheersen voordat ze problemen veroorzaken.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Voor veel organisaties is certificering volgens ISO 27001 inmiddels een vereiste. Klanten, leveranciers en partners willen zekerheid dat hun gegevens veilig zijn. Daarnaast eisen toezichthouders en brancheorganisaties steeds vaker dat informatiebeveiliging aantoonbaar op orde is.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Naast externe eisen biedt ISO 27001 ook interne voordelen. Het helpt organisaties om risico's beter in kaart te brengen, processen te stroomlijnen en incidenten sneller te detecteren en aan te pakken. Dit draagt bij aan de bedrijfscontinuïteit en voorkomt reputatieschade.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Hoe werkt ISO 27001?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              De norm is gebaseerd op het Plan-Do-Check-Act model, een cyclisch proces van continue verbetering. Dit betekent dat informatiebeveiliging geen eenmalig project is, maar een structureel onderdeel van de bedrijfsvoering wordt.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              De implementatie van ISO 27001 begint met een risicoanalyse. Hierbij breng je in kaart welke informatie waardevol is, welke bedreigingen er zijn en wat de impact zou zijn als deze informatie in verkeerde handen valt. Op basis hiervan stel je beveiligingsmaatregelen op.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              ISO 27001 bevat een set van 93 beveiligingsmaatregelen verdeeld over 14 domeinen, zoals toegangscontrole, cryptografie, fysieke beveiliging en incidentmanagement. Niet alle maatregelen zijn verplicht; op basis van de risicoanalyse bepaal je welke maatregelen relevant zijn voor jouw organisatie.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Het verschil tussen ISO 27001 en ISO 27002
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              ISO 27001 is de certificeerbare norm die de eisen beschrijft waaraan een ISMS moet voldoen. ISO 27002 daarentegen is een richtlijn die best practices en implementatieadviezen bevat voor de beveiligingsmaatregelen. Beide normen worden vaak samen gebruikt, waarbij ISO 27001 de basis vormt en ISO 27002 de praktische invulling geeft.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Voor wie is ISO 27001 geschikt?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              ISO 27001 is branche-onafhankelijk en kan door elke organisatie worden toegepast, ongeacht de grootte of sector. Of je nu een klein IT-bedrijf bent, een zorginstelling, een financiële dienstverlener of een overheidsdienst: informatiebeveiliging is relevant.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Wel zijn er sectoren waar ISO 27001 certificering vaker voorkomt of zelfs verplicht is. Denk aan organisaties die met gevoelige klantgegevens werken, zoals banken, verzekeraars, zorgverleners en IT-dienstverleners. Ook bij aanbestedingen wordt ISO 27001 certificering steeds vaker als eis gesteld.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Het certificeringsproces
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Om officieel gecertificeerd te worden volgens ISO 27001, moet je organisatie een externe audit ondergaan door een geaccrediteerde certificatie-instelling. Deze audit verloopt in twee fasen:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
              <li>Fase 1: Documentatie review waarbij de auditor controleert of het ISMS compleet is en voldoet aan de normeisen.</li>
              <li>Fase 2: Implementatie audit waarbij wordt gecontroleerd of de maatregelen daadwerkelijk zijn ingevoerd en effectief werken.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-6">
              Na succesvolle certificering ontvang je een certificaat dat drie jaar geldig is. Jaarlijks vinden er surveillance audits plaats om te controleren of het ISMS nog steeds voldoet aan de eisen. Na drie jaar moet je opnieuw een volledige hercertificering doorlopen.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              De voordelen van ISO 27001 certificering
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Certificering biedt verschillende voordelen:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
              <li><strong>Vertrouwen</strong>: Klanten en partners hebben vertrouwen in jouw informatiebeveiliging</li>
              <li><strong>Concurrentievoordeel</strong>: Onderscheid je van concurrenten die niet gecertificeerd zijn</li>
              <li><strong>Risicoreductie</strong>: Minder kans op beveiligingsincidenten en datalekken</li>
              <li><strong>Compliance</strong>: Voldoe aan wettelijke eisen zoals de AVG</li>
              <li><strong>Efficiëntie</strong>: Gestructureerde processen en heldere verantwoordelijkheden</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Veelvoorkomende uitdagingen
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Hoewel ISO 27001 veel voordelen biedt, zijn er ook uitdagingen bij de implementatie. De belangrijkste zijn tijdsinvestering, betrokkenheid van management en medewerkers, en het up-to-date houden van het ISMS. Veel organisaties kiezen er daarom voor om externe ondersteuning in te schakelen en gebruik te maken van software die het beheer vereenvoudigt.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Volgende stappen
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Wil je meer weten over hoe je ISO 27001 implementeert? Bekijk ons <Link href="/kenniscentrum/iso-27001/stappenplan" className="text-slate-900 underline hover:text-slate-700">stappenplan voor ISO 27001 implementatie</Link> of lees meer over de <Link href="/kenniscentrum/iso-27001/certificering-kosten" className="text-slate-900 underline hover:text-slate-700">kosten en het traject van certificering</Link>.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Ook bieden wij een <Link href="/platform" className="text-slate-900 underline hover:text-slate-700">compliance platform</Link> dat het hele proces ondersteunt, van risicoanalyse tot audit management.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Gerelateerde artikelen
          </h2>
          <div className="grid gap-6">
            <Link
              href="/kenniscentrum/iso-27001/stappenplan"
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-slate-300 transition-all"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-slate-700">
                ISO 27001 stappenplan
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Een praktisch stappenplan om ISO 27001 te implementeren in jouw organisatie.
              </p>
              <span className="text-slate-900 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Lees meer <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/kenniscentrum/iso-27001/certificering-kosten"
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-slate-300 transition-all"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-slate-700">
                ISO 27001 certificering: kosten en traject
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Wat kost ISO 27001 certificering en hoe ziet het traject eruit?
              </p>
              <span className="text-slate-900 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Lees meer <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Hulp nodig bij ISO 27001?
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Wij begeleiden je van gap-analyse tot certificaat. Plan een vrijblijvend gesprek 
            om te bespreken hoe we kunnen helpen.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white"
          >
            <Link href="/#demo">Plan een gesprek</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
