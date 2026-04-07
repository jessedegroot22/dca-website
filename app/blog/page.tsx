import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    slug: 'nis2-deadlines-2025',
    title: 'NIS2 deadlines 2025: wat moet je wanneer geregeld hebben?',
    category: 'NIS2',
    excerpt: 'De NIS2-richtlijn is van kracht. Maar welke deadlines gelden er concreet voor jouw organisatie, en wat zijn de gevolgen als je te laat bent?',
    date: '2 april 2025',
    readTime: '6 min',
    featured: true,
  },
  {
    slug: 'iso-27001-kosten',
    title: 'Wat kost ISO 27001 certificering echt?',
    category: 'ISO 27001',
    excerpt: 'Van gap-analyse tot externe audit: een eerlijk overzicht van alle kosten die bij een ISO 27001 traject komen kijken.',
    date: '24 maart 2025',
    readTime: '8 min',
    featured: false,
  },
  {
    slug: 'verschil-iso27001-nen7510',
    title: 'ISO 27001 vs NEN 7510: wat is het verschil?',
    category: 'Frameworks',
    excerpt: 'Beide normen gaan over informatiebeveiliging, maar er zijn wezenlijke verschillen. Welke past het beste bij jouw organisatie?',
    date: '17 maart 2025',
    readTime: '7 min',
    featured: false,
  },
  {
    slug: 'risicoanalyse-stap-voor-stap',
    title: 'Risicoanalyse stap voor stap uitgelegd',
    category: 'Compliance',
    excerpt: 'Een goede risicoanalyse is de basis van elke compliance-aanpak. Zo pak je het gestructureerd aan — zonder te verdwalen in spreadsheets.',
    date: '10 maart 2025',
    readTime: '9 min',
    featured: false,
  },
  {
    slug: 'ciso-vs-compliance-officer',
    title: 'CISO of compliance officer: wie is verantwoordelijk?',
    category: 'Organisatie',
    excerpt: 'In veel organisaties is onduidelijk wie de eindverantwoordelijkheid draagt voor compliance. We zetten de rollen naast elkaar.',
    date: '3 maart 2025',
    readTime: '5 min',
    featured: false,
  },
  {
    slug: 'audit-voorbereiding-tips',
    title: '7 tips om je voor te bereiden op een externe audit',
    category: 'Certificering & Audits',
    excerpt: 'Een externe audit is spannend, maar met de juiste voorbereiding hoeft er niets mis te gaan. Deze tips helpen je op weg.',
    date: '24 februari 2025',
    readTime: '6 min',
    featured: false,
  },
]

const categories = ['Alle', 'ISO 27001', 'NIS2', 'Frameworks', 'Compliance', 'Organisatie', 'Certificering & Audits']

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-48 pb-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Blog</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Inzichten over compliance
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Praktische artikelen over ISO 27001, NIS2, audits en alles wat daarbij komt kijken.
              Geen jargon, wel bruikbare kennis.
            </p>
          </div>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <article className="grid lg:grid-cols-2 gap-12 items-center border border-slate-200 rounded-2xl p-10 hover:shadow-xl hover:border-slate-300 transition-all bg-white">
                <div className="bg-slate-100 rounded-xl aspect-video" />
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                    {featured.category}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-slate-700 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">{featured.date} · {featured.readTime} leestijd</span>
                    <span className="text-slate-900 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Lees artikel <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Category filter — decorative, not functional for demo */}
      <section className="py-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
                  i === 0
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all h-full flex flex-col">
                  <div className="bg-slate-100 aspect-video flex-shrink-0" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-snug group-hover:text-slate-700 transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm mt-auto">
                      <span className="text-slate-400">{post.readTime} leestijd</span>
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

      {/* Newsletter CTA */}
      <section className="py-32 bg-white border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Blijf op de hoogte
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Ontvang nieuwe artikelen direct in je inbox. Geen spam, alleen relevante inzichten over compliance.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="jouw@bedrijf.nl"
              className="flex-1 border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
            />
            <button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
              Aanmelden
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
