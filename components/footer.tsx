import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="De Compliance Afdeling"
              width={160}
              height={50}
              className="h-8 w-auto mb-6"
            />
            <p className="text-slate-600 text-sm leading-relaxed">
              Compliance software en advies voor organisaties die serieus zijn over informatiebeveiliging.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/platform" className="text-sm text-slate-600 hover:text-slate-900">
                  Platform
                </Link>
              </li>
              <li>
                <Link href="/frameworks/iso-27001" className="text-sm text-slate-600 hover:text-slate-900">
                  ISO 27001
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-600">
                +31 10 360 28 29
              </li>
              <li>
                <a href="mailto:info@dca.nl" className="text-sm text-slate-600 hover:text-slate-900">
                  info@dca.nl
                </a>
              </li>
              <li className="text-sm text-slate-600">
                Amsterdam, Nederland
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} De Compliance Afdeling. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  )
}
