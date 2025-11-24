'use client'

import { ArrowRight, Code, Smartphone, Globe, Zap, Star, Heart, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Kurumsal Yazılım Çözümleri
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Kurumsal Yazılımda
              <span className="gradient-text block mt-2">Güvenilir Ortağınız</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Tüm yazılım dillerinde uzman ekibimizle, ihtiyaçlarınıza özel web, mobil ve entegrasyon çözümleri sunuyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Projelerimize Göz At
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Bize Ulaşın
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-gray-600 text-sm">Yıl Deneyim</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">100+</div>
                <div className="text-gray-600 text-sm">Tamamlanan Proje</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-gray-600 text-sm">Mutlu Müşteri</div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute top-0 right-0 w-72 h-80 glass-effect rounded-2xl p-6 shadow-xl animate-float">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 shadow-md p-2">
                <Image 
                  src="/logo.png" 
                  alt="Neoura" 
                  width={32} 
                  height={32} 
                  className="object-contain brightness-0 invert"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Web Geliştirme</h3>
              <p className="text-gray-600">Modern ve ölçeklenebilir web uygulamaları</p>
              <div className="mt-4 space-y-2">
                <div className="h-2 bg-primary-100 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
                </div>
                <div className="h-2 bg-primary-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="absolute top-32 left-0 w-64 h-72 glass-effect rounded-2xl p-6 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobil Uygulama</h3>
              <p className="text-gray-600 mb-4">iOS ve Android için native çözümler</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer">
                  <Smartphone className="w-6 h-6 text-white mb-1" />
                  <span className="text-white text-xs font-semibold">iOS</span>
                </div>
                <div className="h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer">
                  <Zap className="w-6 h-6 text-white mb-1" />
                  <span className="text-white text-xs font-semibold">Fast</span>
                </div>
                <div className="h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer">
                  <Star className="w-6 h-6 text-white mb-1" />
                  <span className="text-white text-xs font-semibold">Quality</span>
                </div>
                <div className="h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer">
                  <TrendingUp className="w-6 h-6 text-white mb-1" />
                  <span className="text-white text-xs font-semibold">Scale</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-16 w-56 h-56 glass-effect rounded-2xl p-6 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Entegrasyon</h3>
              <p className="text-gray-600">API ve sistem entegrasyonları</p>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary-500"></div>
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                <div className="w-8 h-8 rounded-full bg-secondary-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

