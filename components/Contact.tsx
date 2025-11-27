'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    honeypot: '', // Bot tuzağı
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formStartTime, setFormStartTime] = useState<number>(Date.now())

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Spam Kontrolü 1: Honeypot (gizli alan bot tuzağı)
      if (formData.honeypot) {
        console.log('🤖 Bot detected via honeypot')
        setIsSubmitting(false)
        return
      }

      // Spam Kontrolü 2: Form çok hızlı gönderildi mi? (minimum 3 saniye)
      const timeSpent = (Date.now() - formStartTime) / 1000
      if (timeSpent < 3) {
        alert('Lütfen formu daha dikkatli doldurun.')
        setIsSubmitting(false)
        return
      }

      // Spam Kontrolü 3: Mesaj uzunluğu kontrolü
      if (formData.message.length < 10) {
        alert('Lütfen daha detaylı bir mesaj yazın (en az 10 karakter).')
        setIsSubmitting(false)
        return
      }

      // Honeypot alanını gönderme
      const { honeypot, ...dataToSend } = formData

      // API'ye form verilerini gönder
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', honeypot: '' })
        setFormStartTime(Date.now()) // Zamanlayıcıyı sıfırla
        
        // 5 saniye sonra başarı mesajını gizle
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        alert(data.error || 'Bir hata oluştu. Lütfen tekrar deneyin.')
      }
    } catch (error) {
      console.error('Form gönderim hatası:', error)
      alert('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adres',
      content: 'İzmir, Türkiye',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@neoura.com',
      link: 'mailto:info@neoura.com',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">İletişim</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Bizimle <span className="gradient-text">İletişime Geçin</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projeleriniz, iş birliği veya sorularınız için formu doldurun, size en kısa sürede dönüş yapalım!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-3xl font-bold mb-6">İletişim Bilgileri</h3>
              <p className="text-gray-600 text-lg mb-8">
                Kurumsal yazılım çözümlerinde güvenilir ortağınız. Analizden entegrasyona, 
                uçtan uca hizmet ve 7/24 destekle işinizi geleceğe taşıyoruz.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div
                    key={index}
                    className="group flex items-start space-x-4 p-6 rounded-2xl glass-effect hover:shadow-lg transition-all duration-300 transform hover:-translate-x-2"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-primary-600" />
                <p className="text-gray-700 font-semibold">İzmir, Türkiye</p>
                <p className="text-gray-600 text-sm mt-2">Ofis ziyareti için randevu alabilirsiniz</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Mesaj Gönderin</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3 animate-fade-in">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <p className="text-green-700 font-medium">Mesajınız başarıyla gönderildi! Teşekkürler!</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot - Bot tuzağı (görünmez) */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="[email protected]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="+90 5XX XXX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Konu *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                  >
                    <option value="">Bir konu seçin</option>
                    <option value="web">Web Uygulama Geliştirme</option>
                    <option value="mobile">Mobil Uygulama Geliştirme</option>
                    <option value="enterprise">Kurumsal Yazılım Çözümleri</option>
                    <option value="consultation">Danışmanlık</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none"
                    placeholder="Projeniz hakkında detayları paylaşın..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Mesajı Gönder
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

