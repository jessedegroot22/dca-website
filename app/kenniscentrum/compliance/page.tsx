import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    title: 'Waarom moet je organisatie compliant zijn?',
    slug: 'compliance/waarom-compliance',
    excerpt: 'Boetes, reputatieschade en verlies van klanten: de gevolgen van niet-naleving zijn concreet. Ontdek waarom compliance geen optie meer is.',
    readTime: '7 min',
  },
  {
    title: 'Wat betekent compliance voor jouw organisatie?',
    slug: 'compliance/wat-is-compliance',
    excerpt: 'Compliance gaat verder dan alleen aan regels voldoen. Ontdek wat het echt betekent en waarom het strategisch belangrijk is.',
    readTime: '8 min',
  },
]

export default function ComplianceCategoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />

      <section className="pt-48 pb-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/kenniscentrum"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors mb-10"
          >
            ← Kenniscentrum
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4 block">Categorie</span>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">Compliance</h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            Wat is compliance, waarom is het verplicht en wat zijn de gevolgen als je het negeert? Alles wat je moet weten.
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/kenniscentrum/${article.slug}`}
                className="group flex items-start justify-between gap-8 bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:border-slate-300 transition-all"
              >
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm mb-3">{article.excerpt}</p>
                  <span className="text-xs text-slate-400">{article.readTime} leestijd</span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
