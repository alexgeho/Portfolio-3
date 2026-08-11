import type { Metadata } from 'next'
import { LANGS, DEFAULT_LANG, getDict, type Lang } from '@/i18n/dictionaries'
import '@/styles/main.scss'

const SITE_URL = 'https://alexgeho.dev'

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const lang = (await params).lang as Lang
  const dict = getDict(lang)
  const ogLocale = lang === 'sv' ? 'sv_SE' : 'en_US'

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    authors: [{ name: 'Alexander Gerhard' }],
    alternates: {
      canonical: `/${lang}/`,
      languages: {
        sv: '/sv/',
        en: '/en/',
        'x-default': `/${DEFAULT_LANG}/`,
      },
    },
    icons: {
      icon: '/favicon.jpg',
      apple: '/apple-touch-icon.png',
    },
    openGraph: {
      type: 'website',
      siteName: 'Alexander Gerhard',
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${lang}/`,
      locale: ogLocale,
      alternateLocale: lang === 'sv' ? 'en_US' : 'sv_SE',
      images: [{ url: '/og-image.jpg', alt: 'Alexander Gerhard' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/og-image.jpg'],
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const lang = (await params).lang as Lang

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alexander Gerhard',
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    jobTitle: 'Full-Stack Developer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Stockholm',
      addressCountry: 'SE',
    },
    knowsAbout: ['React', 'TypeScript', 'Node.js', 'NestJS', 'Web Development'],
    sameAs: [
      'https://github.com/alexgeho',
      'https://www.linkedin.com/in/alexandergerhard/',
    ],
  }

  return (
    <html lang={lang}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  )
}
