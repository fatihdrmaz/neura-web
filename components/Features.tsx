'use client'

import { Search, Code2, Headphones, Layers, Smartphone, Cloud, Lock, Zap } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Search,
      title: 'Detaylı İhtiyaç Analizi',
      description: 'Kurumsal süreçlerinizi derinlemesine inceler, gereksinimlerinizi ve başarı kriterlerinizi netleştiririz.',
      items: [
        'Süreç haritalama ve iş akışı analizi',
        'Risk & öncelik değerlendirmesi',
        'Yol haritası ve zaman planlaması'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Code2,
      title: 'Özelleştirilmiş Yazılım Geliştirme',
      description: 'Web, mobil ve masaüstü projelerinizi en yeni teknolojilerle geliştirir, ölçeklenebilir mimariler kurarız.',
      items: [
        'React, Angular, Vue.js tabanlı web uygulamaları',
        'Native & cross-platform mobil çözümler',
        'Mikroservisler & bulut entegrasyonları'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Headphones,
      title: '7/24 Destek & Bakım',
      description: 'Proaktif izleme, performans optimizasyonu ve hızlı müdahale ile sistemleriniz her zaman canlı ve güvenli kalır.',
      items: [
        'Proaktif sistem ve güvenlik izleme',
        'Sürekli güncellemeler & hata düzeltmeleri',
        'Acil durum müdahaleleri & SLA garantisi'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    }
  ]

  const techStack = [
    { icon: Layers, name: 'Web Teknolojileri', description: 'React, Next.js, Vue.js, Angular' },
    { icon: Smartphone, name: 'Mobil Geliştirme', description: 'React Native, Flutter, iOS, Android' },
    { icon: Cloud, name: 'Bulut Servisleri', description: 'AWS, Azure, Google Cloud' },
    { icon: Lock, name: 'Güvenlik', description: 'SSL, OAuth, Şifreleme' },
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Özelliklerimiz</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Size Özel <span className="gradient-text">Yazılım Çözümleri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kapsamlı hizmetlerimiz ile işinizi dijital dünyada zirveye taşıyoruz
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl glass-effect hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Items List */}
                  <ul className="space-y-3">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <Zap className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center mt-6 text-primary-600 font-semibold group-hover:gap-2 transition-all"
                  >
                    Detaylı Bilgi
                    <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Kullandığımız Teknolojiler</h3>
            <p className="text-gray-600">En modern ve güvenilir teknolojilerle çalışıyoruz</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon
              return (
                <div
                  key={index}
                  className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-primary-500/50 transition-all">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                    {tech.name}
                  </h4>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

