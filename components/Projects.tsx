'use client'

import { useState } from 'react'
import { ExternalLink, Github, ShoppingCart, Building2, Heart, TrendingUp } from 'lucide-react'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'web', name: 'Web Uygulamaları' },
    { id: 'mobile', name: 'Mobil Uygulamalar' },
    { id: 'enterprise', name: 'Kurumsal Çözümler' },
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Ticaret Platformu',
      category: 'web',
      description: 'Tam özellikli, ölçeklenebilir e-ticaret çözümü. Ürün yönetimi, ödeme entegrasyonu ve canlı destek.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      icon: ShoppingCart,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      title: 'Kurumsal ERP Sistemi',
      category: 'enterprise',
      description: 'Muhasebe, stok, insan kaynakları ve satış modüllerini içeren entegre ERP sistemi.',
      tech: ['React', 'Java', 'Oracle', 'Microservices'],
      icon: Building2,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 3,
      title: 'Sağlık Takip Uygulaması',
      category: 'mobile',
      description: 'Kullanıcıların sağlık verilerini takip edebileceği, doktorlarla iletişim kurabileceği mobil uygulama.',
      tech: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
      icon: Heart,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 4,
      title: 'Finans Yönetim Platformu',
      category: 'web',
      description: 'Kişisel ve kurumsal finans yönetimi için gelişmiş analitik ve raporlama araçları.',
      tech: ['Vue.js', 'Python', 'Django', 'Redis'],
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 5,
      title: 'CRM ve Satış Yönetimi',
      category: 'enterprise',
      description: 'Müşteri ilişkileri yönetimi, satış takibi ve pipeline yönetimi için kapsamlı çözüm.',
      tech: ['Angular', '.NET', 'SQL Server', 'Azure'],
      icon: Building2,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 6,
      title: 'Sosyal Medya Dashboard',
      category: 'web',
      description: 'Çoklu sosyal medya hesaplarını tek yerden yönetebilme ve analiz edebilme platformu.',
      tech: ['React', 'GraphQL', 'Node.js', 'MongoDB'],
      icon: TrendingUp,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50'
    },
  ]

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Projelerimiz</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Başarılı <span className="gradient-text">Projelerimizden Örnekler</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neoura ile hayata geçirdiğimiz kurumsal yazılım projelerinden seçkin örnekler
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-3xl glass-effect hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${project.color} opacity-5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500`}></div>
                
                {/* Top Section with Icon */}
                <div className={`${project.bgColor} p-8 relative flex items-center justify-center`}>
                  <div className={`w-20 h-20 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm">
                      <ExternalLink className="w-4 h-4" />
                      Detaylar
                    </button>
                    <button className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-all">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-primary-300 rounded-3xl transition-all duration-300 pointer-events-none`}></div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block glass-effect rounded-3xl p-8 md:p-12 max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">Projeniz İçin Hazır mısınız?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Bizimle iletişime geçin ve projenizi hayata geçirelim
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Hemen Başlayalım
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

