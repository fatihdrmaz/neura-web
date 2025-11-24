'use client'

import { Facebook, Twitter, Linkedin, Instagram, Github, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    company: [
      { name: 'Hakkımızda', href: '#about' },
      { name: 'Özellikler', href: '#features' },
      { name: 'Projelerimiz', href: '#projects' },
      { name: 'İletişim', href: '#contact' },
    ],
    services: [
      { name: 'Web Geliştirme', href: '#features' },
      { name: 'Mobil Uygulama', href: '#features' },
      { name: 'Kurumsal Çözümler', href: '#features' },
      { name: 'Danışmanlık', href: '#features' },
    ],
    support: [
      { name: '7/24 Destek', href: '#contact' },
      { name: 'Dokümantasyon', href: '#' },
      { name: 'SSS', href: '#' },
      { name: 'Gizlilik Politikası', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Github, href: '#', color: 'hover:text-gray-900' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary-500/50 transition-all duration-300">
                <Image 
                  src="/logo.png" 
                  alt="Neoura Logo" 
                  width={32}
                  height={32}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-3xl font-bold gradient-text">Neoura</span>
            </a>
            
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Kurumsal yazılım çözümlerinde güvenilir ortağınız. Analizden entegrasyona, 
              uçtan uca hizmet ve 7/24 destekle işinizi geleceğe taşıyoruz.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+905321366936" className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+90 532 136 69 36</span>
              </a>
              <a href="mailto:info@neoura.com" className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@neoura.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>İzmir, Türkiye</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Şirket</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hizmetler</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Destek</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-white">Neoura</span>. Tüm hakları saklıdır.</p>
            <p className="mt-1">Designed by <span className="gradient-text font-semibold">Neoura</span></p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all transform hover:scale-110 hover:-translate-y-1`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 group"
        aria-label="Yukarı çık"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  )
}

export default Footer

