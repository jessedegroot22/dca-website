const reviews = [
  {
    quote:
      'Dankzij DCA hebben we ons ISO 27001-certificaat binnen 9 maanden gehaald. De combinatie van platform en consultancy werkt echt — je weet altijd precies waar je staat.',
    name: 'Martijn van der Berg',
    role: 'CISO',
    company: 'Solvinity',
    initials: 'MB',
  },
  {
    quote:
      'Voorheen deden we alles in spreadsheets. Het DCA-platform heeft dat volledig vervangen. Audit-ready documentatie was vroeger weken werk, nu is het altijd up-to-date.',
    name: 'Lisa Terpstra',
    role: 'Compliance Officer',
    company: 'RST Group',
    initials: 'LT',
  },
  {
    quote:
      'Als gemeente waren we verplicht te voldoen aan de BIO. Met DCA als partner hadden we binnen drie maanden de gap-analyse én een helder implementatieplan. Sterk team.',
    name: 'Erik Hofman',
    role: 'Manager Informatiebeveiliging',
    company: 'Gemeente Schiedam',
    initials: 'EH',
  },
  {
    quote:
      'De consultants denken echt mee. Ze vertalen normen naar praktische stappen die passen bij hoe onze organisatie werkt. Geen standaard aanpak, maar maatwerk.',
    name: 'Naomi Jansen',
    role: 'Directeur Operations',
    company: 'Emerce',
    initials: 'NJ',
  },
  {
    quote:
      'We liepen al een tijdje achter op NIS2-compliance. DCA heeft ons in korte tijd op het juiste spoor gezet — prioriteiten helder, documentatie geregeld, audit geslaagd.',
    name: 'Thomas Klaassen',
    role: 'IT Manager',
    company: 'SoftwareHuis B.V.',
    initials: 'TK',
  },
  {
    quote:
      'Als zorgorganisatie zijn we gebonden aan NEN 7510. DCA kent de sector door en door. De samenwerking verloopt soepel en resultaatgericht.',
    name: 'Sandra Meijer',
    role: 'Hoofd ICT',
    company: 'Zorggroep Noord',
    initials: 'SM',
  },
]

function StarRating({ score = 5 }: { score?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= score ? 'text-amber-400' : 'text-slate-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section className="py-32 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-3 gap-16 mb-16 items-end">
          <div className="lg:col-span-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4 block">
              Klantbeoordelingen
            </span>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              Wat onze klanten zeggen
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-2">
            <div className="flex items-end gap-3">
              <span className="text-6xl font-bold text-slate-900 leading-none">4.9</span>
              <div className="mb-1.5">
                <StarRating score={5} />
                <p className="text-sm text-slate-500 mt-1">op basis van 80+ beoordelingen</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white border border-slate-200 rounded-xl p-7 flex flex-col gap-5 hover:shadow-md hover:border-slate-300 transition-all"
            >
              <StarRating />
              <blockquote className="text-slate-700 leading-relaxed text-sm flex-1">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{review.initials}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{review.name}</div>
                  <div className="text-xs text-slate-500">
                    {review.role} · {review.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
