import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight, BookOpen, FileText, Shield, AlertCircle, Award, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { label: 'Artikelen', value: '50+' },
  { label: 'Onderwerpen', value: '6' },
  { label: 'Frameworks', value: '5' },
  { label: 'Minuten gemiddeld', value: '8' },
]

const featured = {
  title: 'Waarom moet je organisatie compliant zijn?',
  category: 'Compliance',
  excerpt:
    'Boetes, reputatieschade en verlies van klanten: de gevolgen van niet-naleving zijn concreet. Ontdek waarom compliance geen keuze meer is — en wat het oplevert als je het wél serieus neemt.',
  readTime: '7 min',
  href: '/kenniscentrum/compliance/waarom-compliance',
}

const categories = [
  {
    name: 'ISO 27001',
    slug: 'iso-27001',
    icon: Shield,
    description:
      'Van gap-analyse tot certificering: alles over de internationale standaard voor informatiebeveiliging.',
    articles: [
      { title: 'Wat is ISO 27001?', slug: 'wat-is-iso-27001' },
      { title: 'Stappenplan implementatie', slug: 'stappenplan' },
      { title: 'Kosten en traject', slug: 'certificering-kosten' },
    ],
    articleCount: 5,
    color: 'bg-blue-50 border-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    name: 'NIS2',
    slug: 'nis2',
    icon: AlertCircle,
    description:
      'De Europese cybersecurity richtlijn die in 2024 van kracht werd. Ben jij verplicht — en wat moet je doen?',
    articles: [
      { title: 'NIS2: ben jij verplicht?', slug: 'nis2-verplichtingen' },
      { title: 'NIS2 deadlines 2025', slug: 'deadlines' },
      { title: 'Meldplicht incidenten', slug: 'meldplicht' },
    ],
    articleCount: 4,
    color: 'bg-orange-50 border-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    name: 'NEN 7510',
    slug: 'nen-7510',
    icon: FileText,
    description:
      'De Nederlandse norm voor informatiebeveiliging in de zorgsector. Wat verwacht de norm van uw organisatie?',
    articles: [
      { title: 'Wat is NEN 7510?', slug: 'wat-is-nen-7510' },
      { title: 'NEN 7510 vs ISO 27001', slug: 'verschil-iso-27001' },
    ],
    articleCount: 2,
    color: 'bg-green-50 border-green-100',
    iconColor: 'text-green-600',
  },
  {
    name: 'Compliance',
    slug: 'compliance',
    icon: BookOpen,
    description:
      'Wat is compliance precies, waarom is het verplicht en hoe pak je het gestructureerd aan?',
    articles: [
      { title: 'Waarom compliant zijn?', slug: 'waarom-compliance' },
      { title: 'Wat is compliance?', slug: 'wat-is-compliance' },
    ],
    articleCount: 4,
    color: 'bg-slate-50 border-slate-200',
    iconColor: 'text-slate-600',
  },
  {
    name: 'Certificering & Audits',
    slug: 'certificering',
    icon: Award,
    description:
      'Hoe verloopt een externe audit? Wat kost certificering? Praktische antwoorden op de meest gestelde vragen.',
    articles: [
      { title: 'Voorbereiding externe audit', slug: 'voorbereiding-externe-audit' },
      { title: 'Interne audit uitvoeren', slug: 'interne-audit' },
    ],
    articleCount: 3,
    color: 'bg-purple-50 border-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    name: 'ISO 42001 & AI',
    slug: 'ai',
    icon: Brain,
    description:
      'Hoe beheer je AI-risico\'s aantoonbaar? De opkomende norm voor verantwoorde AI en de EU AI Act uitgelegd.',
    articles: [
      { title: 'Wat is ISO 42001?', slug: 'wat-is-iso-42001' },
      { title: 'ISO 42001 en de EU AI Act', slug: 'eu-ai-act' },
    ],
    articleCount: 2,
    color: 'bg-amber-50 border-amber-100',
    iconColor: 'text-amber-600',
  },
]

const recentArticles = [
  {
    title: 'ISO 27001 stappenplan',
    category: 'ISO 27001',
    excerpt:
      'Van management commitment tot certificeringsaudit: een praktisch stappenplan voor de volledige implementatie.',
    readTime: '10 min',
    href: '/kenniscentrum/iso-27001/stappenplan',
  },
  {
    title: 'Wat is ISO 27001?',
    category: 'ISO 27001',
    excerpt:
      'Een complete uitleg over de internationale standaard voor informatiebeveiliging en de opzet van een ISMS.',
    readTime: '8 min',
    href: '/kenniscentrum/iso-27001/wat-is-iso-27001',
  },
  {
    title: 'Verschil ISO 27001 en NEN 7510',
    category: 'ISO 27001',
    excerpt:
      'Beide normen richten zich op informatiebeveiliging, maar voor andere doelgroepen. Welke geldt voor jou?',
    readTime: '7 min',
    href: '/kenniscentrum/iso-27001/verschil-iso-27001-nen-7510',
  },
]

export default function KenniscentrumPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-48 pb-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-5 block">
              Kenniscentrum
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Alles wat je moet weten over compliance
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              Diepgaande artikelen over ISO 27001, NIS2, NEN 7510 en meer — geschreven door onze consultants.
              Geen jargon, wel bruikbare kennis die je direct kunt toepassen.
            </p>
            <div className="flex flex-wrap gap-3">
              {categories.slice(0, 4).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/kenniscentrum/${cat.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-full transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
              <Link
                href="/kenniscentrum/ai"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 text-sm font-medium rounded-full transition-colors border border-amber-200"
              >
                ISO 42001 & AI
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full">
                  Nieuw
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-slate-200">
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 first:pl-0">
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured article */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
              Uitgelicht artikel
            </h2>
          </div>
          <Link href={featured.href} className="group block">
            <div className="grid lg:grid-cols-5 gap-0 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all">
              <div className="lg:col-span-2 bg-slate-900 min-h-[280px] flex items-center justify-center p-10">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-brand-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-3 p-10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                    {featured.category} · {featured.readTime} leestijd
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-slate-700 transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="mt-8">
                  <span className="inline-flex items-center gap-2 text-slate-900 font-semibold group-hover:gap-3 transition-all">
                    Lees artikel <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Blader per onderwerp</h2>
            <p className="text-slate-600">
              Kies een onderwerp om alle artikelen binnen dat thema te bekijken.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <Link
                  key={cat.slug}
                  href={`/kenniscentrum/${cat.slug}`}
                  className="group bg-white border border-slate-200 rounded-xl p-7 hover:shadow-lg hover:border-slate-300 transition-all flex flex-col"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${cat.color}`}>
                      <Icon className={`w-5 h-5 ${cat.iconColor}`} />
                    </div>
                    <span className="text-xs text-slate-400 font-medium">{cat.articleCount} artikelen</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
                    {cat.description}
                  </p>
                  <div className="border-t border-slate-100 pt-4 space-y-2">
                    {cat.articles.slice(0, 2).map((a) => (
                      <div key={a.slug} className="flex items-center gap-2 text-xs text-slate-400">
                        <div className="w-1 h-1 rounded-full bg-slate-300 flex-shrink-0" />
                        {a.title}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-slate-700 group-hover:gap-2 transition-all">
                    Bekijk alle artikelen <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent articles */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-14">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Recente artikelen</h2>
              <p className="text-slate-600">De meest recent gepubliceerde content.</p>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 hover:gap-3 transition-all"
            >
              Bekijk blog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <Link key={article.href} href={article.href} className="group">
                <article className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all h-full flex flex-col">
                  <div className="bg-slate-100 aspect-video flex-shrink-0" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
                      {article.category}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-slate-700 transition-colors flex-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm mt-auto">
                      <span className="text-slate-400">{article.readTime} leestijd</span>
                      <span className="font-semibold text-slate-900 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Lees meer <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What is the kenniscentrum — uitleg blok */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4 block">
                Over het kenniscentrum
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Compliance begrijpen begint met de juiste kennis
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Het kenniscentrum is dé gratis kennisbron voor compliance professionals, IT-managers en
                directeuren die willen begrijpen wat compliance betekent — en hoe je het structureel aanpakt.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Alle artikelen worden geschreven en gereviewed door onze consultants, die dagelijks werken
                met organisaties die ISO 27001, NIS2 of NEN 7510 implementeren. De kennis is praktisch,
                actueel en gebaseerd op echte trajecten.
              </p>
              <div className="space-y-3">
                {[
                  'Gratis toegankelijk, geen registratie vereist',
                  'Geschreven door gecertificeerde compliance consultants',
                  'Regelmatig bijgewerkt met nieuwe wet- en regelgeving',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'ISO 27001', count: '5 artikelen', href: '/kenniscentrum/iso-27001' },
                { label: 'NIS2', count: '4 artikelen', href: '/kenniscentrum/nis2' },
                { label: 'NEN 7510', count: '2 artikelen', href: '/kenniscentrum/nen-7510' },
                { label: 'Compliance', count: '4 artikelen', href: '/kenniscentrum/compliance' },
                { label: 'Certificering', count: '3 artikelen', href: '/kenniscentrum/certificering' },
                { label: 'ISO 42001 & AI', count: '2 artikelen', href: '/kenniscentrum/ai' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-slate-300 transition-all"
                >
                  <div className="text-sm font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-400">{item.count}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-5">
            Klaar voor de volgende stap?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Kennis is het begin. Ons platform en onze consultants helpen je om compliance ook daadwerkelijk
            te implementeren — van gap-analyse tot certificaat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 h-14"
            >
              <Link href="/#demo">Demo aanvragen</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 h-14"
            >
              <Link href="/pakketten">Bekijk pakketten</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
