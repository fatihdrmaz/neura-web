import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
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

    // Burada gerçek email gönderme servisi entegre edilebilir
    // Örnek: SendGrid, Resend, Nodemailer, AWS SES, etc.
    
    console.log('📧 Yeni İletişim Formu Mesajı:')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('👤 İsim:', name)
    console.log('📧 Email:', email)
    console.log('📱 Telefon:', phone || 'Belirtilmedi')
    console.log('📋 Konu:', subject)
    console.log('💬 Mesaj:', message)
    console.log('🕐 Tarih:', new Date().toLocaleString('tr-TR'))
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

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

