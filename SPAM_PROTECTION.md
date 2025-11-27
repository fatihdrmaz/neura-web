# 🛡️ Spam Koruma Sistemi

İletişim formumuz çok katmanlı spam koruması ile güvenli hale getirilmiştir.

## 🔒 Koruma Katmanları

### 1. **Honeypot Tuzağı** 🍯
- Gizli bir form alanı (botlar göremez)
- Botlar bu alanı doldurur → otomatik reddedilir
- İnsan kullanıcılar göremez ve etkilenmez

### 2. **Zaman Bazlı Kontrol** ⏱️
- Minimum form doldurma süresi: **3 saniye**
- Çok hızlı gönderilen formlar reddedilir
- Bot saldırılarını engeller

### 3. **Rate Limiting** 🚦
- **Aynı IP'den** maksimum **3 mesaj / 10 dakika**
- Spam bombardımanı engeller
- Memory-based (sunucu yeniden başlatılınca sıfırlanır)

### 4. **İçerik Validasyonu** ✅
- **Mesaj uzunluğu**: 10-5000 karakter
- **Email formatı**: RFC standardı
- **Zorunlu alanlar**: İsim, email, konu, mesaj

### 5. **Spam Kelime Filtresi** 🚫
Yasaklı kelimeler:
- viagra
- casino
- lottery
- prize
- winner

(Daha fazla eklenebilir)

## 📊 Nasıl Çalışır?

### Frontend (Client-Side)
```typescript
1. Honeypot alanı boş mu? → ✅ Devam / ❌ Reddet
2. Form 3 saniyeden fazla sürdü mü? → ✅ Devam / ❌ Reddet
3. Mesaj en az 10 karakter mi? → ✅ Devam / ❌ Reddet
4. API'ye gönder
```

### Backend (Server-Side)
```typescript
1. IP rate limit kontrolü → ✅ Devam / ❌ 429 Error
2. Zorunlu alanlar dolu mu? → ✅ Devam / ❌ 400 Error
3. Email formatı geçerli mi? → ✅ Devam / ❌ 400 Error
4. Mesaj uzunluğu uygun mu? → ✅ Devam / ❌ 400 Error
5. Spam kelime var mı? → ✅ Devam / ❌ 400 Error
6. Email gönder → ✅ 200 Success
```

## 🎯 Avantajlar

✅ **Kullanıcı Dostu**: Gerçek kullanıcılar CAPTCHA görmez  
✅ **Etkili**: Çoğu bot otomatik engellenir  
✅ **Hızlı**: Ekstra loading yok  
✅ **Ücretsiz**: Harici servis gerekmez  
✅ **Privacy**: Kullanıcı verisi 3. tarafa gitmez  

## 🚀 Gelişmiş Koruma (İsteğe Bağlı)

İhtiyaç halinde eklenebilir:

### 1. Cloudflare Turnstile
```bash
npm install @cloudflare/turnstile
```
- Ücretsiz
- CAPTCHA benzeri ama daha akıllı
- Google reCAPTCHA'ya alternatif

### 2. Database Rate Limiting
```typescript
// Vercel KV veya Redis kullanarak
import { kv } from '@vercel/kv'
```
- Daha güvenilir rate limiting
- Sunucu yeniden başlatılsa bile hatırlar

### 3. IP Geolocation
```typescript
// Şüpheli ülkelerden gelen istekleri engelle
```

### 4. Email Verification
```typescript
// Disposable email servislerini engelle
```

## 📈 İstatistikler

Koruma aktif olduktan sonra:
- Bot trafiği: ~95% azalma beklenir
- Spam email: ~90% azalma beklenir
- Gerçek kullanıcı etkilenmez

## 🔧 Yapılandırma

### Rate Limit Ayarları
```typescript
// app/api/contact/route.ts
const limit = 3 // Maksimum istek sayısı
const window = 10 * 60 * 1000 // Zaman penceresi (ms)
```

### Minimum Form Süresi
```typescript
// components/Contact.tsx
if (timeSpent < 3) { // 3 saniye
```

### Spam Kelimeleri
```typescript
// app/api/contact/route.ts
const spamWords = ['viagra', 'casino', 'lottery']
```

## 🧪 Test Etme

### Honeypot Testi
1. Developer Console'u açın
2. Gizli alanı bulun: `input[name="honeypot"]`
3. Değer girin → Form reddedilecek

### Rate Limit Testi
1. 3 mesaj gönderin
2. 4. mesaj → "Çok fazla istek" hatası

### Spam Kelime Testi
1. Mesaja "viagra" yazın
2. Form → "Spam içerik" hatası

## 📝 Notlar

- Honeypot alanı CSS ile gizli (`hidden` class)
- Rate limit memory-based (geliştirme için yeterli)
- Production'da database-based rate limit önerilir
- Spam kelimeleri Türkçe'ye göre güncellenebilir

## ✅ Sonuç

İletişim formunuz artık:
- 🛡️ Bot korumalı
- 🚦 Rate limit'li
- ✅ Validasyonlu
- 🚫 Spam filtreleme
- 📧 Email doğrulamalı

**Güvenli mesajlaşma!** 🎉

