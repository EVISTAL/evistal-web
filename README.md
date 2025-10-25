# EVISTAL - Akıllı Nemlendirici Cihazı Web Sitesi

Modern React.js tabanlı, EVISTAL akıllı nemlendirici cihazı için tanıtım web sitesi.

## 🎨 Özellikler

- ✅ React.js + Vite ile geliştirildi
- ✅ Logoya uygun özel renk paleti (#7A878F, #355251, #5A6A72)
- ✅ Tam responsive tasarım (mobil, tablet, desktop)
- ✅ Modern ve minimalist arayüz
- ✅ Local network desteği (aynı ağdaki tüm cihazlar erişebilir)
- ✅ PWA (Progressive Web App) desteği
- ✅ SEO optimize edilmiş
- ✅ Font Awesome ikonları
- ✅ Smooth scroll ve animasyonlar

## 🚀 Kurulum

### Bağımlılıkları Yükle
```bash
npm install
```

### Geliştirme Sunucusunu Başlat
```bash
npm run dev
```

Site `http://localhost:3000` adresinde çalışacaktır.
Aynı ağdaki diğer cihazlar bilgisayarınızın IP adresiyle erişebilir (örn: `http://192.168.1.100:3000`)

### Production Build
```bash
npm run build
```

### Production Preview
```bash
npm run preview
```

## 📁 Proje Yapısı

```
EVISTAL_WEB/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigasyon bileşeni
│   │   ├── Hero.jsx           # Ana hero bölümü
│   │   ├── Features.jsx       # Özellikler bölümü
│   │   ├── Product.jsx        # Ürün detay bölümü
│   │   ├── About.jsx          # Hakkımızda bölümü
│   │   ├── Store.jsx          # Mağaza bölümü
│   │   ├── Contact.jsx        # İletişim formu
│   │   └── Footer.jsx         # Footer bileşeni
│   ├── App.jsx                # Ana uygulama bileşeni
│   ├── main.jsx               # Giriş noktası
│   ├── index.css              # Global stiller
│   └── App.css                # Uygulama stilleri
├── images/
│   └── evistal_logo.png       # EVISTAL logosu
├── index.html                 # Ana HTML dosyası
├── vite.config.js             # Vite yapılandırması
└── package.json               # Proje bağımlılıkları
```

## 🎨 Renk Paleti

- **Ana Renk (Logo Gri):** `#7A878F`
- **Koyu Ton (Logo Yazı):** `#355251`
- **Vurgu Rengi:** `#5A6A72`
- **Arka Plan:** `#F5F6F8`
- **Açık Gri:** `#E8EBED`

## 🌐 Local Network Erişimi

Projeyi başlattığınızda, aynı WiFi/yerel ağa bağlı tüm cihazlar siteye erişebilir:

1. Bilgisayarınızın IP adresini öğrenin:
   ```bash
   # Linux/Mac
   ip addr show
   # veya
   ifconfig
   
   # Windows
   ipconfig
   ```

2. Diğer cihazlardan tarayıcıda şu adresi açın:
   ```
   http://[BILGISAYAR_IP]:3000
   ```
   Örnek: `http://192.168.1.100:3000`

## 📱 Bölümler

1. **Ana Sayfa (Hero)** - Logo, başlık ve CTA butonları
2. **Özellikler** - 6 ana özellik kartı
3. **Ürün** - Detaylı ürün bilgileri ve teknik özellikler
4. **Hakkımızda** - Şirket bilgileri ve istatistikler
5. **Mağaza** - E-posta bildirimi formu
6. **İletişim** - İletişim formu ve bilgileri
7. **Footer** - Linkler ve sosyal medya

## 🛠️ Teknolojiler

- React 18.2
- Vite 5.0
- CSS3 (Custom Properties, Flexbox, Grid)
- Font Awesome 6.0
- Google Fonts (Inter)

## 📝 Notlar

- Logo dosyası `/images/evistal_logo.png` konumunda bulunmalıdır
- Tüm renkler logonun renk paletine göre özelleştirilmiştir
- Responsive tasarım 3 breakpoint destekler: mobile (480px), tablet (768px), desktop (1200px+)

## 📄 Lisans

© 2024 EVISTAL. Tüm hakları saklıdır.
