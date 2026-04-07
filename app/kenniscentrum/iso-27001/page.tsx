import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    title: 'Wat is ISO 27001?',
    slug: 'wat-is-iso-27001',
    excerpt: 'Een complete uitleg over de internationale standaard voor informatiebeveiliging en waarom deze belangrijk is.',
    readTime: '8 min'
  },
  {
    title: 'ISO 27001 stappenplan',
    slug: 'stappenplan',
    excerpt: 'Een praktisch stappenplan om ISO 27001 te implementeren, van gap-analyse tot certificering.',
    readTime: '10 min'
  },
  {
    title: 'ISO 27001 certificering: kosten en traject',
    slug: 'certificering-kosten',
    excerpt: 'Wat kost ISO 27001 certificering en hoe ziet het traject eruit? Een transparant overzicht.',
    readTime: '9 min'
  },
  {
    title: 'Verschil ISO 27001 en NEN 7510',
    slug: 'verschil-iso-27001-nen-7510',
    excerpt: 'Beide normen richten zich op informatiebeveiliging, maar er zijn belangrijke verschillen.',
    readTime: '7 min'
  },
  {
    title: 'ISO 27001 interne audit uitleg',
    slug: 'interne-audit',
    excerpt: 'Hoe voer je een effectieve interne audit uit volgens ISO 27001 en waar moet je op letten?',
    readTime: '8 min'
  }
]

export default function ISO27001CategoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-48 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-6">
            <Link
              href="/kenniscentrum"
              className="text-sm text-slate-600 hover:text-slate-900 inline-flex items-center gap-2"
            >
              ← Terug naar kenniscentrum
            </Link>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">
            ISO 27001
          </h1>
          <div className="prose prose-lg text-slate-700 leading-relaxed">
            <p className="mb-4">
              ISO 27001 is de internationale standaard voor informatiebeveiliging. De norm biedt een systematische aanpak voor het beheren van bedrijfskritische informatie zodat deze veilig blijft. Het omvat mensen, processen en IT-systemen door een risicomanagementsysteem toe te passen.
            </p>
            <p className="mb-4">
              Voor veel organisaties is ISO 27001 certificering een belangrijke stap om aan te tonen dat informatiebeveiliging structureel is geregeld. Dit wordt steeds vaker gevraagd door klanten, partners en toezichthouders. Bovendien helpt de norm om risico's beter te beheersen en de bedrijfscontinuïteit te waarborgen.
            </p>
            <p className="mb-4">
              De implementatie van ISO 27001 vraagt om een grondige aanpak. Van het uitvoeren van een risicoanalyse tot het opstellen van beleid en procedures. Veel organisaties kiezen ervoor om dit traject te doorlopen met ondersteuning van specialisten en software die het proces vereenvoudigt.
            </p>
            <p>
              In deze categorie vind je diepgaande artikelen over alle aspecten van ISO 27001: van de basis tot implementatie, certificering en onderhoud van het managementsysteem.
            </p>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
            Gerelateerde pagina's
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/frameworks/iso-27001"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 hover:border-slate-300 hover:shadow-sm transition-all"
            >
              ISO 27001 Framework <ArrowRight className="w-3 h-3" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 hover:border-slate-300 hover:shadow-sm transition-all"
            >
              Compliance Platform <ArrowRight className="w-3 h-3" />
            </Link>
            <Link
              href="/pakketten"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 hover:border-slate-300 hover:shadow-sm transition-all"
            >
              Pakketten <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-12">
            Alle artikelen over ISO 27001
          </h2>
          <div className="space-y-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/kenniscentrum/iso-27001/${article.slug}`}
                className="group block"
              >
                <article className="border-b border-slate-200 pb-8 hover:border-slate-300 transition-colors">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">{article.readTime} leestijd</span>
                    <span className="text-slate-900 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Lees artikel <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
