# Neoura Web Sitesi - Kurulum ve Çalıştırma Kılavuzu

## 🚀 Hızlı Başlangıç

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

### 2. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcınızda http://localhost:3000 adresini açın.

### 3. Production Build

```bash
# Build oluştur
npm run build

# Production sunucusunu başlat
npm start
```

## 📋 Proje Özellikleri

✅ **Modern Teknolojiler**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion animasyonlar
- Lucide React ikonları

✅ **Tam Responsive**
- Mobil, tablet ve desktop için optimize
- Touch-friendly navigasyon

✅ **Modern UI/UX**
- Glassmorphism efektleri
- Smooth animasyonlar
- Gradient tasarımlar
- Hover efektleri

✅ **SEO Optimize**
- Meta tags
- Semantic HTML
- Sitemap hazır

✅ **Performans**
- Lazy loading
- Optimized images
- Fast page loads

## 📂 Proje Yapısı

```
neoura/
├── app/
│   ├── layout.tsx          # Ana layout
│   ├── page.tsx            # Ana sayfa
│   └── globals.css         # Global stiller
├── components/
│   ├── Header.tsx          # Sticky navigasyon
│   ├── Hero.tsx            # Ana banner
│   ├── About.tsx           # Hakkımızda
│   ├── Features.tsx        # Özellikler
│   ├── Projects.tsx        # Projeler galerisi
│   ├── Contact.tsx         # İletişim formu
│   └── Footer.tsx          # Footer
├── public/                 # Statik dosyalar
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## 🎨 Özelleştirme

### Renkleri Değiştirme

`tailwind.config.ts` dosyasında renk paletini özelleştirebilirsiniz:

```typescript
colors: {
  primary: { ... },
  secondary: { ... }
}
```

### İçerik Güncelleme

Her bileşen kendi dosyasında düzenlenebilir:
- `components/Hero.tsx` - Ana sayfa içeriği
- `components/About.tsx` - Hakkımızda metinleri
- `components/Features.tsx` - Özellikler listesi
- `components/Projects.tsx` - Proje örnekleri
- `components/Contact.tsx` - İletişim bilgileri

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Geliştirici Komutları

```bash
# Geliştirme modu
npm run dev

# Production build
npm run build

# Build'i çalıştır
npm start

# Lint kontrolü
npm run lint
```

## 🌐 Deployment

### Vercel (Önerilen)

1. GitHub'a push edin
2. [Vercel](https://vercel.com) hesabınıza giriş yapın
3. Projeyi import edin
4. Otomatik deploy olacaktır

### Diğer Platformlar

- Netlify
- AWS Amplify
- Digital Ocean
- Heroku

## 📧 Destek

Sorularınız için: [email protected]

## 📄 Lisans

© 2025 Neoura. Tüm hakları saklıdır.

