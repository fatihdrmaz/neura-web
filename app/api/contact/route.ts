import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Basit rate limiting (memory-based)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = 3 // 10 dakikada maksimum 3 mesaj
  const window = 10 * 60 * 1000 // 10 dakika

  const record = rateLimitMap.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + window })
    return true
  }
  
  if (record.count >= limit) {
    return false
  }
  
  record.count++
  return true
}

export async function POST(request: Request) {
  try {
    // IP bazlı rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown'
    
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Çok fazla istek gönderdiniz. Lütfen 10 dakika sonra tekrar deneyin.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Form validasyonu
    if (!name || !email || !message || !subject) {
      return NextResponse.json(
        { error: 'Lütfen tüm zorunlu alanları doldurun.' },
        { status: 400 }
      )
    }

    // Email validasyonu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir email adresi girin.' },
        { status: 400 }
      )
    }

    // Mesaj uzunluğu kontrolü
    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Mesaj 10-5000 karakter arasında olmalıdır.' },
        { status: 400 }
      )
    }

    // Spam kelimeleri kontrolü
    const spamWords = ['viagra', 'casino', 'lottery', 'prize', 'winner']
    const lowerMessage = message.toLowerCase()
    if (spamWords.some(word => lowerMessage.includes(word))) {
      console.log('🚫 Spam keyword detected')
      return NextResponse.json(
        { error: 'Mesajınız spam içerik içeriyor.' },
        { status: 400 }
      )
    }

    // Console'a logla
    console.log('📧 Yeni İletişim Formu Mesajı:')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('👤 İsim:', name)
    console.log('📧 Email:', email)
    console.log('📱 Telefon:', phone || 'Belirtilmedi')
    console.log('📋 Konu:', subject)
    console.log('💬 Mesaj:', message)
    console.log('🕐 Tarih:', new Date().toLocaleString('tr-TR'))
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

    // Resend ile email gönder (eğer API key varsa)
    if (resend) {
      try {
        const { data, error } = await resend.emails.send({
        from: 'Neoura İletişim <onboarding@resend.dev>',
        to: ['fdurmaz@gmail.com'],
        subject: `Yeni İletişim Mesajı: ${subject}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #0ea5e9 0%, #a855f7 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
                .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                .field { margin-bottom: 20px; }
                .label { font-weight: bold; color: #0ea5e9; margin-bottom: 5px; }
                .value { background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #0ea5e9; }
                .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">🎉 Yeni İletişim Formu Mesajı</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">Neoura Web Sitesi</p>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">👤 İsim Soyisim</div>
                    <div class="value">${name}</div>
                  </div>
                  
                  <div class="field">
                    <div class="label">📧 Email Adresi</div>
                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                  </div>
                  
                  ${phone ? `
                  <div class="field">
                    <div class="label">📱 Telefon</div>
                    <div class="value"><a href="tel:${phone}">${phone}</a></div>
                  </div>
                  ` : ''}
                  
                  <div class="field">
                    <div class="label">📋 Konu</div>
                    <div class="value">${subject}</div>
                  </div>
                  
                  <div class="field">
                    <div class="label">💬 Mesaj</div>
                    <div class="value">${message.replace(/\n/g, '<br>')}</div>
                  </div>
                  
                  <div class="field">
                    <div class="label">🕐 Tarih</div>
                    <div class="value">${new Date().toLocaleString('tr-TR', { 
                      dateStyle: 'full', 
                      timeStyle: 'long',
                      timeZone: 'Europe/Istanbul'
                    })}</div>
                  </div>
                </div>
                <div class="footer">
                  <p>Bu email Neoura web sitesi iletişim formu üzerinden gönderilmiştir.</p>
                  <p>© ${new Date().getFullYear()} Neoura. Tüm hakları saklıdır.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      })

      if (error) {
        console.error('❌ Resend email gönderme hatası:', error)
        // Email gönderilemese bile başarılı yanıt dön (kullanıcı deneyimi için)
        } else {
          console.log('✅ Email başarıyla gönderildi! ID:', data?.id)
        }
      } catch (emailError) {
        console.error('❌ Email servis hatası:', emailError)
        // Email hatası olsa bile formu başarılı say
      }
    } else {
      console.log('⚠️ Resend API key bulunamadı, email gönderilemedi.')
    }

    // Başarılı yanıt
    return NextResponse.json(
      { 
        success: true, 
        message: 'Mesajınız başarıyla alındı! En kısa sürede size dönüş yapacağız.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ İletişim formu hatası:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.' },
      { status: 500 }
    )
  }
}

