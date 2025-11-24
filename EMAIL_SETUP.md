# Email Gönderimi Kurulumu

İletişim formu şu an mesajları **server console'a** yazıyor. Gerçek email gönderimi için aşağıdaki seçeneklerden birini uygulayabilirsiniz:

## 🚀 Hızlı Kurulum Seçenekleri

### Seçenek 1: Resend (Önerilen) ⭐

**En kolay ve modern çözüm!**

```bash
npm install resend
```

`.env.local` dosyası oluşturun:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

`app/api/contact/route.ts` dosyasını güncelleyin:
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  // ... validation code ...

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'info@neoura.com',
    subject: `Yeni İletişim: ${subject}`,
    html: `
      <h2>Yeni İletişim Formu Mesajı</h2>
      <p><strong>İsim:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone || 'Belirtilmedi'}</p>
      <p><strong>Konu:</strong> ${subject}</p>
      <p><strong>Mesaj:</strong></p>
      <p>${message}</p>
    `,
  })

  return NextResponse.json({ success: true })
}
```

**API Key Alma:**
1. https://resend.com adresine gidin
2. Ücretsiz hesap oluşturun (100 email/ay ücretsiz)
3. API key oluşturun
4. `.env.local` dosyasına ekleyin

---

### Seçenek 2: SendGrid

```bash
npm install @sendgrid/mail
```

`.env.local`:
```env
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
```

`app/api/contact/route.ts`:
```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: Request) {
  // ... validation ...

  await sgMail.send({
    to: 'info@neoura.com',
    from: 'noreply@neoura.com',
    subject: `İletişim: ${subject}`,
    text: message,
    html: `<strong>${name}</strong> adlı kişiden mesaj: ${message}`,
  })

  return NextResponse.json({ success: true })
}
```

---

### Seçenek 3: Nodemailer (SMTP)

```bash
npm install nodemailer
```

`.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

`app/api/contact/route.ts`:
```typescript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: Request) {
  // ... validation ...

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: 'info@neoura.com',
    subject: `İletişim: ${subject}`,
    html: `
      <h3>Yeni Mesaj</h3>
      <p><strong>İsim:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mesaj:</strong> ${message}</p>
    `,
  })

  return NextResponse.json({ success: true })
}
```

---

### Seçenek 4: EmailJS (Frontend Only)

```bash
npm install @emailjs/browser
```

`components/Contact.tsx`:
```typescript
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
    )
    setIsSubmitted(true)
  } catch (error) {
    alert('Hata oluştu!')
  }
  setIsSubmitting(false)
}
```

---

## 📋 Şu Anki Durum

✅ Form çalışıyor  
✅ Validasyon yapılıyor  
✅ API route hazır  
⏳ Email servisi bekleniyor  

**Şu an mesajlar:**
- ✅ Server console'a yazılıyor (terminal'de görülebilir)
- ✅ Browser console'a loglaniyor
- ❌ Email olarak gönderilmiyor (yukarıdaki seçeneklerden birini uygulayın)

---

## 🔐 Güvenlik Notları

1. **Hiçbir zaman** API keylerini Git'e commit etmeyin
2. `.env.local` dosyası `.gitignore`'da olmalı
3. Production'da environment variables kullanın
4. Rate limiting ekleyin (spam koruması)

---

## 🧪 Test Etme

1. Formu doldurun
2. Terminal'i kontrol edin (console loglar görünecek)
3. Email servisi entegre ettikten sonra inbox'ı kontrol edin

---

## 💡 Tavsiye

**Resend** en kolay ve modern çözüm. Önerilen yöntem budur! 🚀

