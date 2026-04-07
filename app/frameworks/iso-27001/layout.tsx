import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ISO 27001 Certificering | Informatiebeveiliging | De Compliance Afdeling',
  description:
    'Behaal je ISO 27001 certificaat met DCA. Complete begeleiding van gap analyse tot certificering. Voldoe aan ISO/IEC 27001:2022 met ons ISMS platform. Start vandaag met de gratis ISO 27001 checklist.',
  keywords:
    'ISO 27001, ISO 27001 certificering, informatiebeveiliging, ISMS, Information Security Management System, ISO 27001 consultant, ISO 27001 checklist, cybersecurity certificering',
  openGraph: {
    title: 'ISO 27001 Certificering - Informatiebeveiliging op orde',
    description:
      'Van gap analyse tot certificaat. DCA begeleidt je volledig naar ISO 27001 certificering met bewezen aanpak en compliance platform.',
    type: 'website',
  },
}

export default function ISO27001Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
