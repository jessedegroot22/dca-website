import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = [
  {
    name: 'ISO 27001',
    slug: 'iso-27001',
    description: 'Alles over de internationale standaard voor informatiebeveiliging',
    articleCount: 5
  },
  {
    name: 'NIS2',
    slug: 'nis2',
    description: 'De nieuwe Europese cybersecurity richtlijn uitgelegd',
    articleCount: 3
  },
  {
    name: 'NEN 7510',
    slug: 'nen-7510',
    description: 'Informatiebeveiliging specifiek voor de zorgsector',
    articleCount: 2
  },
  {
    name: 'Compliance',
    slug: 'compliance',
    description: 'Algemene vraagstukken rondom compliance en regelgeving',
    articleCount: 2
  },
  {
    name: 'Certificering & Audits',
    slug: 'certificering',
    description: 'Praktische tips voor audits en certificeringsprocessen',
    articleCount: 2
  }
]

const recentArticles = [
  {
    title: 'Waarom moet je organisatie compliant zijn?',
    category: 'Compliance',
    slug: 'compliance/waarom-compliance',
    excerpt: 'Boetes, reputatieschade en verlies van klanten: de gevolgen van niet-naleving zijn concreet. Ontdek waarom compliance geen optie meer is.',
    readTime: '7 min'
  },
  {
    title: 'Wat is ISO 27001?',
    category: 'ISO 27001',
    slug: 'iso-27001/wat-is-iso-27001',
    excerpt: 'Een complete uitleg over de internationale standaard voor informatiebeveiliging en waarom deze belangrijk is voor jouw organisatie.',
    readTime: '8 min'
  },
  {
    title: 'NIS2: Ben jij verplicht?',
    category: 'NIS2',
    slug: 'nis2/nis2-verplichtingen',
    excerpt: 'De NIS2-richtlijn brengt nieuwe verplichtingen voor veel organisaties. Check of dit voor jou geldt en wat je moet doen.',
    readTime: '6 min'
  },
  {
    title: 'ISO 27001 stappenplan',
    category: 'ISO 27001',
    slug: 'iso-27001/stappenplan',
    excerpt: 'Een praktisch stappenplan om ISO 27001 te implementeren in jouw organisatie, van gap-analyse tot certificering.',
    readTime: '10 min'
  },
  {
    title: 'Verschil ISO 27001 en NEN 7510',
    category: 'ISO 27001',
    slug: 'iso-27001/verschil-iso-27001-nen-7510',
    excerpt: 'Beide normen richten zich op informatiebeveiliging, maar er zijn belangrijke verschillen. Ontdek welke het beste bij jou past.',
    readTime: '7 min'
  },
  {
    title: 'Hoe bereid je je voor op een externe audit?',
    category: 'Certificering & Audits',
    slug: 'certificering/voorbereiding-externe-audit',
    excerpt: 'Praktische tips om je audit succesvol te laten verlopen en veel voorkomende valkuilen te vermijden.',
    readTime: '9 min'
  },
  {
    title: 'Wat betekent compliance voor jouw organisatie?',
    category: 'Compliance',
    slug: 'compliance/wat-is-compliance',
    excerpt: 'Compliance gaat verder dan alleen aan regels voldoen. Ontdek wat het echt betekent en waarom het strategisch belangrijk is.',
    readTime: '8 min'
  }
]

export default function KenniscentrumPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-48 pb-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Kennis en inzichten over compliance
          </h1>
          <p className="text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Diepgaande artikelen over ISO 27001, NIS2 en andere compliance frameworks. 
            Geschreven door experts, zonder jargon.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-40 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">
            Categorieën
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/kenniscentrum/${category.slug}`}
                className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:border-slate-300 transition-all group"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  {category.name}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                  {category.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">{category.articleCount} artikelen</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-40 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">
            Nieuwste artikelen
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/kenniscentrum/${article.slug}`}
                className="group"
              >
                <article className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all">
                  <div className="bg-slate-100 aspect-video"></div>
                  <div className="p-6">
                    <div className="text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">
                      {article.category}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">{article.readTime} leestijd</span>
                      <span className="text-slate-900 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
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

      {/* CTA */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Vragen over compliance?
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
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
