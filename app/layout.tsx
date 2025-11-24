import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neoura - Kurumsal Yazılım Çözümleri | Web & Mobil Uygulama Geliştirme',
  description: 'Kurumsal yazılım geliştirme, web uygulamaları, mobil uygulama ve ERP sistemleri. 10+ yıl deneyim ile İzmir merkezli yazılım şirketi. 7/24 destek ve profesyonel çözümler.',
  keywords: [
    'kurumsal yazılım',
    'web geliştirme',
    'mobil uygulama',
    'yazılım danışmanlığı',
    'ERP sistemi',
    'e-ticaret çözümleri',
    'React',
    'Next.js',
    'Node.js',
    'yazılım firması izmir',
    'kurumsal yazılım şirketi',
    'özel yazılım geliştirme'
  ],
  authors: [{ name: 'Neoura', url: 'https://neoura.com' }],
  creator: 'Neoura',
  publisher: 'Neoura',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://neoura.com',
    siteName: 'Neoura',
    title: 'Neoura - Kurumsal Yazılım Çözümleri',
    description: 'Kurumsal yazılım geliştirme, web uygulamaları, mobil uygulama ve ERP sistemleri. 10+ yıl deneyim ile profesyonel çözümler.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Neoura - Kurumsal Yazılım',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neoura - Kurumsal Yazılım Çözümleri',
    description: 'Kurumsal yazılım geliştirme, web uygulamaları, mobil uygulama ve ERP sistemleri.',
    images: ['/logo.png'],
    creator: '@neoura',
  },
  alternates: {
    canonical: 'https://neoura.com',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

