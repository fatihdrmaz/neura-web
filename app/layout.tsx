import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neoura - Kurumsal Yazılım Çözümleri',
  description: 'Tüm yazılım dillerinde uzman ekibimizle, ihtiyaçlarınıza özel web, mobil ve entegrasyon çözümleri sunuyoruz.',
  keywords: 'kurumsal yazılım, web geliştirme, mobil uygulama, yazılım danışmanlığı',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

