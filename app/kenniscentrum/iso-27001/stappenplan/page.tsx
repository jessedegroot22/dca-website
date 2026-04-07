import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function StappenplanArticle() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      <article className="pt-48 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-8">
            <Link
              href="/kenniscentrum/iso-27001"
              className="text-sm text-slate-600 hover:text-slate-900 inline-flex items-center gap-2"
            >
              ← Terug naar ISO 27001
            </Link>
          </div>

          <header className="mb-12">
            <div className="text-xs font-medium text-slate-500 mb-4 uppercase tracking-wider">
              ISO 27001
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              ISO 27001 stappenplan
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Een praktisch stappenplan om ISO 27001 te implementeren in jouw organisatie, 
              van gap-analyse tot succesvolle certificering.
            </p>
            <div className="mt-6 text-sm text-slate-500">
              10 minuten leestijd
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">
              Het implementeren van ISO 27001 kan een uitdagende klus lijken, maar met een gestructureerde aanpak is het goed te doen. In dit artikel bespreken we de essentiële stappen die je moet doorlopen om succesvol gecertificeerd te worden. Dit stappenplan is gebaseerd op jarenlange ervaring met ISO 27001 implementaties bij verschillende organisaties.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Stap 1: Management commitment en scope bepalen
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Voor een succesvolle implementatie is draagvlak vanuit het management essentieel. ISO 27001 vraagt om actieve betrokkenheid van de directie, zowel bij de opzet als bij het onderhoud van het Information Security Management System (ISMS).
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Begin met het bepalen van de scope: welke processen, systemen en locaties vallen onder het ISMS? Een heldere afbakening voorkomt misverstanden later in het proces. Bedenk dat je de scope pragmatisch moet kiezen: begin niet te breed, maar wel zodanig dat het nuttig is voor de organisatie.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Stel een projectteam samen met vertegenwoordigers uit verschillende afdelingen. Informatiebeveiliging is een organisatiebreed vraagstuk, dus betrek IT, HR, facilitair, inkoop en andere relevante afdelingen vanaf het begin.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Stap 2: Gap-analyse uitvoeren
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Voordat je aan de implementatie begint, is het verstandig om een gap-analyse uit te voeren. Hiermee breng je in kaart waar je organisatie nu staat ten opzichte van de ISO 27001 eisen. Dit geeft een helder beeld van wat er nog gedaan moet worden.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Een gap-analyse bestaat uit het doorlopen van alle onderdelen van de norm en het beoordelen in hoeverre deze al zijn geïmplementeerd. Dit kan variëren van volledig afwezig tot grotendeels op orde. Het resultaat is een lijst van aandachtspunten en een inschatting van de benodigde tijd en middelen.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Veel organisaties laten de gap-analyse uitvoeren door een externe consultant. Dit zorgt voor een objectieve blik en bespaart tijd. Daarnaast heeft een ervaren consultant vaak nuttige best practices uit andere implementaties.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Stap 3: Risicoanalyse en risicobehandeling
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              De kern van ISO 27001 is risicomanagement. Je moet in kaart brengen welke informatie-assets waardevol zijn voor de organisatie, welke bedreigingen er zijn, hoe kwetsbaar je bent en wat de mogelijke impact is.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Start met het inventariseren van informatie-assets: denk aan databases, applicaties, klantgegevens, intellectueel eigendom, maar ook hardware, netwerken en papieren dossiers. Betrek medewerkers bij dit proces, zij weten vaak het beste welke informatie cruciaal is voor hun werk.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Voor elk geïdentificeerd risico bepaal je vervolgens hoe je ermee omgaat. De vier opties zijn: risico accepteren, reduceren, overdragen (bijvoorbeeld via verzekeringen) of vermijden (bijvoorbeeld door bepaalde processen stop te zetten). Voor de risico's die je reduceert, kies je passende maatregelen uit Annex A van de norm.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Deze stap levert twee belangrijke documenten op: het Risk Assessment Report en de Statement of Applicability (SoA). In de SoA leg je uit welke van de 93 maatregelen uit Annex A je wel of niet implementeert en waarom.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Stap 4: Beleid en procedures opstellen
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              ISO 27001 vraagt om gedocumenteerd beleid en procedures. Dit klinkt bureaucratisch, maar het zorgt ervoor dat iedereen weet hoe informatiebeveiliging in de organisatie geregeld is. Documentatie zorgt ook voor continuïteit als medewerkers vertrekken.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Begin met een Informatiebeveiligingsbeleid op hoofdlijnen. Dit document beschrijft de doelen, principes en verantwoordelijkheden rondom informatiebeveiliging. Het moet worden goedgekeurd door het management en gedeeld met alle medewerkers.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Werk dit beleid verder uit in specifieke procedures voor onderwerpen als toegangsbeheer, incidentmanagement, back-ups, wijzigingsbeheer en beveiligde software ontwikkeling. Houd procedures praktisch en leesbaar; niemand heeft baat bij ellenlange documenten vol jargon.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Gebruik waar mogelijk templates en voorbeelden van andere organisaties of van je <Link href="/platform" className="text-slate-900 underline hover:text-slate-700">compliance platform</Link>. Dit bespaart tijd en zorgt ervoor dat je niets vergeet.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Stap 5: Beveiligingsmaatregelen implementeren
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Nu komt het echte werk: het daadwerkelijk implementeren van de gekozen beveiligingsmaatregelen. Dit kunnen technische maatregelen zijn zoals firewalls, encryptie en multi-factor authenticatie, maar ook organisatorische maatregelen zoals beveiligingstrainingen, contractafspraken met leveranciers en fysieke toegangscontrole.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Maak een implementatieplan met prioriteiten en deadlines. Niet alles hoeft in één keer perfect te zijn, maar zorg wel dat kritieke risico's als eerste worden aangepakt. Houd rekening met de beschikbare tijd en budget.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Betrek medewerkers bij de implementatie. Als nieuwe maatregelen niet praktisch zijn of de werkzaamheden te veel bemoeilijken, is de kans groot dat mensen er omheen gaan werken. Communiceer daarom duidelijk waarom maatregelen nodig zijn en luister naar feedback.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Stap 6: Bewustwording en training
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Informatiebeveiliging staat of valt met het gedrag van medewerkers. Daarom vraagt ISO 27001 expliciet om bewustwording en training. Zorg dat alle medewerkers begrijpen wat er van hen wordt verwacht en waarom informatiebeveiliging belangrijk is.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Organiseer introductieprogramma's voor nieuwe medewerkers en jaarlijkse opfristrainingen. Bespreek actuele thema's zoals phishing, wachtwoordbeveiliging en omgang met vertrouwelijke informatie. Maak het interactief en praktisch, niet saai of theoretisch.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Stap 7: Interne audit uitvoeren
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Voordat je de externe certificeringsaudit ingaat, is het verstandig om eerst zelf een interne audit uit te voeren. Hiermee controleer je of het ISMS volledig is geïmplementeerd en of alle onderdelen goed werken.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Een interne audit kan worden uitgevoerd door een medewerker die niet betrokken is bij de operationele uitvoering van het ISMS, of door een externe auditor. Zorg dat de auditor bekend is met ISO 27001 en ervaring heeft met audits.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Bevindingen uit de interne audit moeten worden gedocumenteerd en afgehandeld voordat je naar de externe audit gaat. Dit voorkomt onaangename verrassingen en verhoogt de slagingskans.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Stap 8: Management review
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              ISO 27001 vereist dat het management periodiek het ISMS beoordeelt. Dit noemen we een management review. Het doel is om te controleren of het ISMS nog effectief is, of de doelen worden gehaald en of er verbeteringen nodig zijn.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Tijdens een management review worden onderwerpen besproken zoals incidenten, resultaten van audits, wijzigingen in risico's en de effectiviteit van beveiligingsmaatregelen. Het management neemt besluiten over benodigde aanpassingen en stelt resources beschikbaar waar nodig.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Stap 9: Certificeringsaudit
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Als je alle voorgaande stappen hebt doorlopen, ben je klaar voor de externe certificeringsaudit. Deze wordt uitgevoerd door een geaccrediteerde certificatie-instelling en bestaat uit twee fasen.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              In fase 1 controleert de auditor of alle verplichte documentatie aanwezig is en voldoet aan de eisen. Denk aan het informatiebeveiligingsbeleid, de risicoanalyse, de Statement of Applicability en alle procedures. Ook wordt gekeken of de scope duidelijk is en of het management betrokken is.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Fase 2 is de implementatie audit. Hierbij controleert de auditor of de maatregelen daadwerkelijk zijn ingevoerd en effectief werken. Dit gebeurt door interviews met medewerkers, controle van systemen en het opvragen van bewijsmateriaal zoals logbestanden, trainingsregistraties en incidentmeldingen.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Als er tijdens de audit afwijkingen worden geconstateerd, krijg je de kans om deze te herstellen voordat het certificaat wordt afgegeven. Kleine afwijkingen kunnen na de audit worden opgelost, maar grote afwijkingen kunnen leiden tot uitstel van certificering.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Stap 10: Beheer en continue verbetering
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Certificering is niet het eindpunt, maar het begin van structureel informatiebeveiliging. Het certificaat is drie jaar geldig, maar er vinden jaarlijks surveillance audits plaats om te controleren of het ISMS nog up-to-date is.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Blijf investeren in het ISMS door regelmatig risicoanalyses uit te voeren, incidenten te evalueren, audits te houden en trainingen te organiseren. Informatiebeveiliging is een continu proces dat meebeweegt met veranderingen in de organisatie en nieuwe bedreigingen.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Tijdsinvestering en doorlooptijd
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              De doorlooptijd van een ISO 27001 implementatie varieert sterk per organisatie. Factoren die de doorlooptijd beïnvloeden zijn de grootte van de organisatie, de complexiteit van processen, de huidige staat van informatiebeveiliging en de beschikbare capaciteit.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Gemiddeld duurt een implementatietraject tussen de 6 en 12 maanden. Met een ervaren consultant en ondersteunende software kan dit worden verkort. Wil je meer weten over wat het kost? Lees dan ons artikel over <Link href="/kenniscentrum/iso-27001/certificering-kosten" className="text-slate-900 underline hover:text-slate-700">ISO 27001 certificering kosten en traject</Link>.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Hulpmiddelen en ondersteuning
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Je hoeft het wiel niet opnieuw uit te vinden. Er zijn verschillende hulpmiddelen beschikbaar die het implementatieproces vergemakkelijken. Een goed <Link href="/platform" className="text-slate-900 underline hover:text-slate-700">compliance platform</Link> biedt templates, workflows en automatisering voor taken zoals risicomanagement, documentbeheer en audit voorbereiding.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Daarnaast kan externe begeleiding door ervaren consultants waardevol zijn. Zij kennen de valkuilen, hebben best practices en kunnen je organisatie efficiënt door het proces leiden. Bekijk onze <Link href="/pakketten" className="text-slate-900 underline hover:text-slate-700">pakketten</Link> om te zien hoe wij kunnen helpen.
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
              href="/kenniscentrum/iso-27001/wat-is-iso-27001"
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-slate-300 transition-all"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-slate-700">
                Wat is ISO 27001?
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Een complete uitleg over de internationale standaard voor informatiebeveiliging.
              </p>
              <span className="text-slate-900 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Lees meer <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/kenniscentrum/iso-27001/interne-audit"
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-slate-300 transition-all"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-slate-700">
                ISO 27001 interne audit uitleg
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Hoe voer je een effectieve interne audit uit volgens ISO 27001?
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
            Klaar om te beginnen met ISO 27001?
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Wij begeleiden je door elk van deze stappen met praktische ondersteuning en software 
            die het proces vereenvoudigt.
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
