'use client'

import { Users, Target, Shield, Clock } from 'lucide-react'

const About = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Uzman Ekip',
      description: 'Kurumsal yazılımda 10+ yıllık deneyime sahip geliştiricilerimiz, projenizi en iyi şekilde analiz eder ve hayata geçirir.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Ölçeklenebilir Mimari',
      description: 'Geliştirdiğimiz çözümler, artan kullanıcı taleplerine ve iş büyümenize sorunsuz uyum sağlar.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Güvenlik & Kararlılık',
      description: 'Verileriniz endüstri standartlarında korunur; yüksek performans ve kesintisiz hizmet sağlanır.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Clock,
      title: '7/24 Destek & Bakım',
      description: 'Proaktif monitoring ve hızlı müdahale süreçleriyle, sistemleriniz her zaman güncel ve güvenli kalır.',
      color: 'from-orange-500 to-orange-600'
    },
  ]

  const services = [
    'Analiz & Danışmanlık',
    'Özelleştirilmiş Geliştirme',
    'Güvenlik & Kararlılık',
    '7/24 Destek'
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Hakkımızda</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Kurumsal Yazılımda <span className="gradient-text">Uzman Yaklaşım</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neoura, analitik bakış açısı ve yenilikçi metodolojilerle kurumsal firmalara uçtan uca yazılım çözümleri sunan deneyimli ekibinizdir.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Description */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold mb-6">Neden Neoura&apos;yı Seçmelisiniz?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              İhtiyaç analizi, tasarım, geliştirme ve 7/24 destek süreçlerini sizinle birlikte yönetiyoruz. 
              Her projede müşteri memnuniyetini ön planda tutarak, işinizi geleceğe taşıyacak çözümler üretiyoruz.
            </p>
            
            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:scale-150 transition-transform"></div>
                  <span className="text-gray-700 font-medium group-hover:text-primary-600 transition-colors">{service}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Daha Fazla Bilgi
            </a>
          </div>

          {/* Right - Image/Visual */}
          <div className="relative animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-6 flex items-center justify-center transform hover:scale-105 transition-transform">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                    <div className="text-gray-700 font-medium">Proje</div>
                  </div>
                </div>
                <div className="h-64 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl p-6 flex items-center justify-center transform hover:scale-105 transition-transform">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                    <div className="text-gray-700 font-medium">Yıl Tecrübe</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-64 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 flex items-center justify-center transform hover:scale-105 transition-transform">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                    <div className="text-gray-700 font-medium">Müşteri</div>
                  </div>
                </div>
                <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-6 flex items-center justify-center transform hover:scale-105 transition-transform">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">7/24</div>
                    <div className="text-gray-700 font-medium">Destek</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl glass-effect hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About

