import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const posts: Record<string, {
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  content: { heading?: string; body: string }[]
  related: { slug: string; title: string; excerpt: string }[]
}> = {
  'nis2-deadlines-2025': {
    title: 'NIS2 deadlines 2025: wat moet je wanneer geregeld hebben?',
    category: 'NIS2',
    date: '2 april 2025',
    readTime: '6 min',
    excerpt: 'De NIS2-richtlijn is van kracht. Maar welke deadlines gelden er concreet voor jouw organisatie, en wat zijn de gevolgen als je te laat bent?',
    content: [
      {
        heading: 'Wat is de NIS2-richtlijn?',
        body: 'De Network and Information Security Directive 2 (NIS2) is een Europese richtlijn die de cyberweerbaarheid van organisaties in kritieke sectoren versterkt. Nederland heeft de richtlijn omgezet in nationale wetgeving via de Cyberbeveiligingswet, die per 17 oktober 2024 in werking is getreden.',
      },
      {
        heading: 'Welke organisaties vallen onder NIS2?',
        body: 'NIS2 onderscheidt twee categorieën: essentiële entiteiten en belangrijke entiteiten. Essentiële entiteiten zijn grote organisaties in sectoren als energie, transport, gezondheidszorg, drinkwater en digitale infrastructuur. Belangrijke entiteiten zijn middelgrote organisaties in dezelfde en aanvullende sectoren. De grens ligt globaal bij organisaties met meer dan 50 medewerkers of meer dan 10 miljoen euro omzet.',
      },
      {
        heading: 'Concrete verplichtingen',
        body: 'Als jouw organisatie onder NIS2 valt, ben je verplicht om risicomaatregelen te treffen op het gebied van beveiliging van netwerken en informatiesystemen, incidentbeheer, bedrijfscontinuïteit, beveiliging van de toeleveringsketen, en bewustwordingstraining voor medewerkers. Daarnaast geldt een meldplicht: ernstige incidenten moeten binnen 24 uur gemeld worden bij het Nationaal Cyber Security Centrum (NCSC).',
      },
      {
        heading: 'Wat zijn de gevolgen bij niet-naleving?',
        body: 'Toezichthouders kunnen boetes opleggen tot 10 miljoen euro of 2% van de wereldwijde jaaromzet voor essentiële entiteiten. Voor belangrijke entiteiten gelden lagere maxima. Naast financiële sancties kan er reputatieschade ontstaan en kunnen bestuurders persoonlijk aansprakelijk worden gesteld.',
      },
      {
        heading: 'Hoe pak je dit aan?',
        body: 'Begin met een nulmeting: breng in kaart welke maatregelen er al zijn en waar de gaten zitten. Op basis daarvan stel je een implementatieplan op. Veel organisaties kiezen voor een gefaseerde aanpak: eerst de technische basismaatregelen, dan governance en beleid, en ten slotte toeleveranciersmanagement. Een compliance platform helpt je dit proces te structureren en bij te houden.',
      },
    ],
    related: [
      {
        slug: 'risicoanalyse-stap-voor-stap',
        title: 'Risicoanalyse stap voor stap uitgelegd',
        excerpt: 'Een goede risicoanalyse is de basis van elke compliance-aanpak.',
      },
      {
        slug: 'verschil-iso27001-nen7510',
        title: 'ISO 27001 vs NEN 7510: wat is het verschil?',
        excerpt: 'Beide normen gaan over informatiebeveiliging, maar er zijn wezenlijke verschillen.',
      },
    ],
  },
  'iso-27001-kosten': {
    title: 'Wat kost ISO 27001 certificering echt?',
    category: 'ISO 27001',
    date: '24 maart 2025',
    readTime: '8 min',
    excerpt: 'Van gap-analyse tot externe audit: een eerlijk overzicht van alle kosten die bij een ISO 27001 traject komen kijken.',
    content: [
      {
        heading: 'De kosten van ISO 27001: een eerlijk overzicht',
        body: 'ISO 27001 certificering is een investering. Maar hoeveel precies? Dat hangt af van de grootte van je organisatie, de huidige volwassenheid van je informatiebeveiliging en de keuze voor interne of externe begeleiding. In dit artikel zetten we de belangrijkste kostenposten op een rij.',
      },
      {
        heading: 'Gap-analyse',
        body: 'Voordat je begint, wil je weten waar je staat. Een externe consultant voert doorgaans een gap-analyse uit om de afstand tot de norm te bepalen. Dit kost voor een mkb-organisatie gemiddeld tussen de 2.000 en 6.000 euro, afhankelijk van de complexiteit.',
      },
      {
        heading: 'Implementatietraject',
        body: 'De daadwerkelijke implementatie is de grootste kostenpost. Denk aan het opstellen van beleid en procedures, het uitvoeren van risicoanalyses, het inrichten van een ISMS en het trainen van medewerkers. Bij volledige externe begeleiding liggen de kosten tussen de 15.000 en 50.000 euro. Met een compliance platform en interne capaciteit kun je dit significant terugbrengen.',
      },
      {
        heading: 'Externe audit',
        body: 'De certificeringsaudit zelf kost voor een kleine tot middelgrote organisatie doorgaans tussen de 5.000 en 15.000 euro. Grote organisaties of bedrijven met meerdere locaties betalen meer. Daarna volgen jaarlijkse surveillance-audits van gemiddeld 2.000 tot 5.000 euro.',
      },
      {
        heading: 'Terugkerende kosten',
        body: 'Vergeet ook de jaarlijkse kosten niet: het in stand houden van het ISMS, interne audits, bewustwordingstrainingen en eventuele software-abonnementen. Reken op 10.000 tot 25.000 euro per jaar, afhankelijk van de organisatiegrootte.',
      },
    ],
    related: [
      {
        slug: 'audit-voorbereiding-tips',
        title: '7 tips om je voor te bereiden op een externe audit',
        excerpt: 'Met de juiste voorbereiding hoeft een externe audit niet spannend te zijn.',
      },
      {
        slug: 'risicoanalyse-stap-voor-stap',
        title: 'Risicoanalyse stap voor stap uitgelegd',
        excerpt: 'Een goede risicoanalyse is de basis van elke compliance-aanpak.',
      },
    ],
  },
  'verschil-iso27001-nen7510': {
    title: 'ISO 27001 vs NEN 7510: wat is het verschil?',
    category: 'Frameworks',
    date: '17 maart 2025',
    readTime: '7 min',
    excerpt: 'Beide normen gaan over informatiebeveiliging, maar er zijn wezenlijke verschillen. Welke past het beste bij jouw organisatie?',
    content: [
      {
        heading: 'Twee normen, één doel',
        body: 'Zowel ISO 27001 als NEN 7510 richten zich op het systematisch beveiligen van informatie. Toch zijn er belangrijke verschillen in scope, toepassingsgebied en certificeringsvereisten die bepalen welke norm voor jouw organisatie het meest geschikt is.',
      },
      {
        heading: 'ISO 27001: de internationale standaard',
        body: 'ISO 27001 is een branche-onafhankelijke internationale norm. Het biedt een raamwerk voor het opzetten, implementeren en continu verbeteren van een Information Security Management System (ISMS). De norm is wereldwijd erkend en wordt gebruikt door organisaties in vrijwel alle sectoren.',
      },
      {
        heading: 'NEN 7510: specifiek voor de zorg',
        body: 'NEN 7510 is een Nederlandse norm die voortborduurt op ISO 27001, maar specifiek is ontwikkeld voor de zorgsector. De norm bevat aanvullende eisen die aansluiten op de unieke uitdagingen van zorgorganisaties, zoals de omgang met bijzondere persoonsgegevens (patiëntgegevens) en de interoperabiliteit van zorgsystemen.',
      },
      {
        heading: 'Welke norm kies je?',
        body: 'Als je een zorgorganisatie bent die met patiëntgegevens werkt, is NEN 7510 de aangewezen norm — en in veel gevallen verplicht vanuit wet- en regelgeving. Ben je een IT-dienstverlener, financiële instelling of overheidsorgaan, dan is ISO 27001 doorgaans de betere keuze. Sommige organisaties kiezen voor beide: een ISO 27001-certificaat als internationaal bewijs, aangevuld met NEN 7510 voor de zorgsector.',
      },
    ],
    related: [
      {
        slug: 'nis2-deadlines-2025',
        title: 'NIS2 deadlines 2025: wat moet je wanneer geregeld hebben?',
        excerpt: 'Welke deadlines gelden er concreet voor jouw organisatie?',
      },
      {
        slug: 'iso-27001-kosten',
        title: 'Wat kost ISO 27001 certificering echt?',
        excerpt: 'Een eerlijk overzicht van alle kosten die bij een ISO 27001 traject komen kijken.',
      },
    ],
  },
  'risicoanalyse-stap-voor-stap': {
    title: 'Risicoanalyse stap voor stap uitgelegd',
    category: 'Compliance',
    date: '10 maart 2025',
    readTime: '9 min',
    excerpt: 'Een goede risicoanalyse is de basis van elke compliance-aanpak. Zo pak je het gestructureerd aan — zonder te verdwalen in spreadsheets.',
    content: [
      {
        heading: 'Waarom een risicoanalyse?',
        body: 'Een risicoanalyse helpt je om te bepalen welke informatie kwetsbaar is, welke bedreigingen er bestaan en welke maatregelen nodig zijn. Het is een verplicht onderdeel van ISO 27001, NIS2 en vrijwel elke andere compliance norm. Maar bovenal is het gewoon slim: je investeert je energie daar waar het risico het grootst is.',
      },
      {
        heading: 'Stap 1: Breng je informatieassets in kaart',
        body: 'Begin met een inventarisatie van alle informatie die jouw organisatie verwerkt, opslaat of verstuurt. Denk aan klantgegevens, financiële informatie, intellectueel eigendom en systemen. Geef elk asset een waarde op basis van vertrouwelijkheid, integriteit en beschikbaarheid.',
      },
      {
        heading: 'Stap 2: Identificeer bedreigingen en kwetsbaarheden',
        body: 'Per asset breng je in kaart welke bedreigingen er zijn (bijv. ransomware, menselijke fouten, brand) en welke kwetsbaarheden deze kunnen uitbuiten (bijv. verouderde software, geen toegangsbeleid). Dit hoeft niet perfect te zijn — de combinatie van asset-waarde en bedreiging bepaalt het risico.',
      },
      {
        heading: 'Stap 3: Bepaal de risiconiveaus',
        body: 'Combineer de kans op een incident met de impact als het mis gaat. Gebruik een eenvoudige matrix: laag/middel/hoog voor zowel kans als impact. Dit geeft je een risiconiveau per combinatie van asset en bedreiging.',
      },
      {
        heading: 'Stap 4: Kies je maatregelen',
        body: 'Op basis van de risiconiveaus bepaal je welke maatregelen je neemt. Je kunt risico\'s accepteren, vermijden, overdragen (bijv. via verzekering) of mitigeren. Koppel elke maatregel aan een verantwoordelijke en een deadline.',
      },
      {
        heading: 'Stap 5: Houd het levend',
        body: 'Een risicoanalyse is geen eenmalige exercitie. Herhaal het proces minimaal jaarlijks, of bij grote organisatorische of technische wijzigingen. Een compliance platform helpt je om dit structureel bij te houden en auditproof te documenteren.',
      },
    ],
    related: [
      {
        slug: 'nis2-deadlines-2025',
        title: 'NIS2 deadlines 2025: wat moet je wanneer geregeld hebben?',
        excerpt: 'Welke deadlines gelden er concreet voor jouw organisatie?',
      },
      {
        slug: 'audit-voorbereiding-tips',
        title: '7 tips om je voor te bereiden op een externe audit',
        excerpt: 'Met de juiste voorbereiding hoeft een externe audit niet spannend te zijn.',
      },
    ],
  },
  'ciso-vs-compliance-officer': {
    title: 'CISO of compliance officer: wie is verantwoordelijk?',
    category: 'Organisatie',
    date: '3 maart 2025',
    readTime: '5 min',
    excerpt: 'In veel organisaties is onduidelijk wie de eindverantwoordelijkheid draagt voor compliance. We zetten de rollen naast elkaar.',
    content: [
      {
        heading: 'Twee rollen, één doel',
        body: 'Zowel de CISO (Chief Information Security Officer) als de compliance officer hebben als doel het beheersen van risico\'s. Toch zijn hun verantwoordelijkheden fundamenteel anders. Verwarring over deze rollen leidt in de praktijk tot blinde vlekken in het compliance-programma.',
      },
      {
        heading: 'De CISO: technische beveiliging',
        body: 'De CISO is verantwoordelijk voor de technische en operationele informatiebeveiliging. Denk aan het beheren van firewalls, het opzetten van access management, het reageren op security incidents en het uitvoeren van penetratietests. De CISO werkt primair vanuit een technisch perspectief.',
      },
      {
        heading: 'De compliance officer: naleving en beleid',
        body: 'De compliance officer richt zich op het naleven van wet- en regelgeving, normen en interne beleidsregels. Hij of zij coördineert audits, beheert documentatie, monitort wijzigingen in wet- en regelgeving en rapporteert aan het bestuur. De compliance officer werkt primair vanuit een juridisch en organisatorisch perspectief.',
      },
      {
        heading: 'Wie draagt eindverantwoordelijkheid?',
        body: 'In de meeste organisaties ligt de eindverantwoordelijkheid voor compliance bij de raad van bestuur of directie. Zowel de CISO als de compliance officer rapporteren aan hen. Bij kleinere organisaties zijn de rollen soms gecombineerd — wat prima kan, zolang beide aspecten expliciet worden belegd.',
      },
    ],
    related: [
      {
        slug: 'risicoanalyse-stap-voor-stap',
        title: 'Risicoanalyse stap voor stap uitgelegd',
        excerpt: 'Een goede risicoanalyse is de basis van elke compliance-aanpak.',
      },
      {
        slug: 'iso-27001-kosten',
        title: 'Wat kost ISO 27001 certificering echt?',
        excerpt: 'Een eerlijk overzicht van alle kosten die bij een ISO 27001 traject komen kijken.',
      },
    ],
  },
  'audit-voorbereiding-tips': {
    title: '7 tips om je voor te bereiden op een externe audit',
    category: 'Certificering & Audits',
    date: '24 februari 2025',
    readTime: '6 min',
    excerpt: 'Een externe audit is spannend, maar met de juiste voorbereiding hoeft er niets mis te gaan. Deze tips helpen je op weg.',
    content: [
      {
        body: 'Een externe audit is voor veel organisaties een spannend moment. Maar goede voorbereiding maakt het verschil. Hier zijn zeven tips waarmee je goed beslagen ten ijs komt.',
      },
      {
        heading: '1. Voer een interne pre-audit uit',
        body: 'Loop alle eisen van de norm door alsof je zelf de auditor bent. Noteer elk punt waar je twijfelt of waar documentatie ontbreekt. Dit geeft je een duidelijk beeld van wat er nog gedaan moet worden.',
      },
      {
        heading: '2. Zorg dat documentatie up-to-date is',
        body: 'Auditors willen bewijs zien. Controleer of alle beleidsdocumenten, procedures en registraties actueel zijn en door de juiste personen zijn goedgekeurd. Verouderde documenten zijn een veelvoorkomende tekortkoming.',
      },
      {
        heading: '3. Train je medewerkers',
        body: 'Auditors praten met medewerkers op de werkvloer. Zorg dat iedereen weet wat er van hen verwacht wordt en hoe de belangrijkste processen werken. Een kort bewustwordingssessie voor de audit kan het verschil maken.',
      },
      {
        heading: '4. Controleer je risicoregister',
        body: 'Het risicoregister is een van de eerste dingen die een auditor bekijkt. Zorg dat het actueel is, dat risico\'s zijn beoordeeld en dat er maatregelen aan zijn gekoppeld met verantwoordelijken en statussen.',
      },
      {
        heading: '5. Bereid je op vragen voor',
        body: 'Oefen met veelgestelde auditsvragen. Hoe beschrijft een medewerker het incidentbeheerproces? Wie is de eigenaar van welk informatie-asset? Kennis van de praktijk is minstens zo belangrijk als documentatie.',
      },
      {
        heading: '6. Wijs een contactpersoon aan',
        body: 'Stel één persoon aan als aanspreekpunt voor de auditor. Dit voorkomt verwarring en zorgt voor een gestroomlijnde communicatie tijdens de auditdagen.',
      },
      {
        heading: '7. Wees eerlijk over tekortkomingen',
        body: 'Auditors waarderen openheid. Als er iets niet op orde is, is het beter om dit proactief te benoemen en te laten zien hoe je het aanpakt, dan dat de auditor het zelf ontdekt. Transparantie wekt vertrouwen.',
      },
    ],
    related: [
      {
        slug: 'iso-27001-kosten',
        title: 'Wat kost ISO 27001 certificering echt?',
        excerpt: 'Een eerlijk overzicht van alle kosten die bij een ISO 27001 traject komen kijken.',
      },
      {
        slug: 'risicoanalyse-stap-voor-stap',
        title: 'Risicoanalyse stap voor stap uitgelegd',
        excerpt: 'Een goede risicoanalyse is de basis van elke compliance-aanpak.',
      },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]
  if (!post) notFound()

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      <article className="pt-48 pb-20">
        <div className="max-w-3xl mx-auto px-6">

          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors inline-flex items-center gap-2"
            >
              ← Terug naar blog
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400 border-t border-slate-100 pt-6">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime} leestijd</span>
            </div>
          </header>

          {/* Cover image placeholder */}
          <div className="bg-slate-100 rounded-xl aspect-video mb-12" />

          {/* Content */}
          <div className="space-y-8">
            {post.content.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    {block.heading}
                  </h2>
                )}
                <p className="text-slate-700 leading-relaxed text-lg">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Gerelateerde artikelen
          </h2>
          <div className="grid gap-4">
            {post.related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-slate-300 transition-all"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                  {rel.title}
                </h3>
                <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                  {rel.excerpt}
                </p>
                <span className="text-slate-900 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Lees artikel <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Hulp nodig bij compliance?
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Plan een vrijblijvend gesprek met een van onze consultants om te bespreken
            hoe wij jouw organisatie kunnen helpen.
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
