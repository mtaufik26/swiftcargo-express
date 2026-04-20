# SwiftCargo Express

> **Company Profile Website** — Solusi logistik modern dengan pengiriman cepat, aman, dan terpercaya untuk bisnis dan personal di seluruh Indonesia.

![alt text](?raw=true)

---

## 📋 Tentang Proyek

**SwiftCargo Express** adalah website company profile yang dibangun dengan **Next.js 16** untuk mempresentasikan layanan logistik profesional. Website ini dirancang dengan fokus pada:

- 🎨 **Desain Modern & Profesional** — UI/UX yang clean, konsisten, dan mudah dinavigasi
- ⚡ **Performa Optimal** — Loading cepat, animasi smooth, dan lazy loading images
- 📱 **Fully Responsive** — Tampilan sempurna di mobile, tablet, dan desktop
- ♿ **Aksesibilitas** — Semantic HTML, focus states, dan ARIA labels
- 🔧 **Maintainable Code** — Struktur modular dengan separation of concerns

### 🎯 Fitur Utama

| Section | Deskripsi |
|---------|-----------|
| **Hero** | Headline menarik dengan CTA jelas dan stats perusahaan |
| **About** | Profil perusahaan, fitur unggulan, dan social proof |
| **Services** | 6 layanan logistik dengan accordion interaktif |
| **Advantages** | 6 keunggulan kompetitif dengan interactive card switcher |
| **Portfolio** | 6 studi kasus proyek dengan image hover effects |
| **Testimonials** | 6 testimoni klien dengan smooth carousel transition |
| **FAQ** | 8 pertanyaan umum dengan accordion expand/collapse |
| **Contact** | Form kontak validasi + info kontak + Google Maps embed |
| **Footer** | CTA section, navigation links, social media, dan legal links |

---

## 🛠️ Tech Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org) | 16.2.4 | React framework dengan App Router |
| [React](https://react.dev) | 19.x | UI library |
| [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | ES2024+ | Programming language |

### Styling & Animation
| Library | Purpose |
|---------|---------|
| [Tailwind CSS](https://tailwindcss.com) | Utility-first CSS framework |
| [Framer Motion](https://www.framer.com/motion) | Animasi smooth dan interaktif |
| [Lucide React](https://lucide.dev) | Ikon UI yang konsisten |
| [React Icons](https://react-icons.github.io/react-icons) | Ikon brand sosial media (Fa6) |

### Development Tools
| Tool | Purpose |
|------|---------|
| Turbopack | Fast bundler untuk development |
| ESLint | Code quality dan linting |
| PostCSS | CSS processing untuk Tailwind |

---

## 📁 Struktur Proyek

```
swiftcargo-express/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Navbar.constants.js
│   │   │   │   └── index.js
│   │   │   └── Footer/
│   │   │       ├── Footer.jsx
│   │   │       ├── Footer.constants.js
│   │   │       ├── Footer.animations.js
│   │   │       └── index.js
│   │   ├── sections/
│   │   │   ├── Hero/
│   │   │   ├── About/
│   │   │   ├── Services/
│   │   │   ├── Advantages/
│   │   │   ├── Portfolio/
│   │   │   ├── Testimonials/
│   │   │   ├── FAQ/
│   │   │   └── Contact/
│   │   │       └── (setiap folder: .jsx, .constants.js, .animations.js, index.js)
│   │   ├── ui/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   └── Section/
│   │   └── index.js
│   ├── lib/
│   │   ├── animations/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── constants/
│   │   └── index.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── animations.css
│   ├── layout.js
│   └── page.js
├── public/
├── jsconfig.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 atau lebih baru
- npm / yarn / pnpm / bun

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/yourusername/swiftcargo-express.git
   cd swiftcargo-express
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server dengan Turbopack |
| `npm run build` | Build untuk production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint untuk code quality check |

---

## ⚙️ Configuration

### Path Aliases (`jsconfig.json`)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["app/*"],
      "@/components/*": ["app/components/*"],
      "@/lib/*": ["app/lib/*"],
      "@/styles/*": ["app/styles/*"]
    }
  }
}
```

**Usage:**
```js
import { Hero } from "@/components";
import { springSmooth } from "@/lib/animations";
import { SITE } from "@/lib/constants";
```

---

## 🎨 Customization

### Mengubah Konten
Edit file `.constants.js` di masing-masing section:
```js
// app/components/sections/Hero/Hero.constants.js
export const HERO_CONTENT = {
  headline: "Pengiriman Cepat & Aman", // ← Ubah di sini
  subheadline: "untuk Bisnis dan Personal",
  description: "Layanan logistik modern...",
};
```

### Mengubah Animasi
Edit file `.animations.js`:
```js
// app/components/sections/Hero/Hero.animations.js
export const headline = {
  visible: {
    transition: { duration: 0.8, delay: 0.3, ...springSmooth },
  },
};
```

---

## 🌐 Deployment

### Deploy ke Vercel (Recommended) ⭐

1. **Push ke GitHub**
   ```bash
   git add .
   git commit -m "feat: initial commit"
   git push origin main
   ```

2. **Deploy via Vercel**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

3. **Atau via Dashboard**: [vercel.com/new](https://vercel.com/new)

### Platform Lain
| Platform | Docs |
|----------|------|
| Netlify | [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/) |
| Cloudflare | [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/) |

---

## ♿ Accessibility & Best Practices

- ✅ Semantic HTML (`<section>`, `<nav>`, `<footer>`)
- ✅ ARIA labels untuk icon-only buttons
- ✅ Visible focus states untuk keyboard navigation
- ✅ Color contrast WCAG AA compliant
- ✅ Lazy loading images untuk performa
- ✅ SEO optimized dengan meta tags

---

## 🤝 Contributing

1. Fork repository
2. Buat feature branch: `git checkout -b feature/amazing-feature`
3. Commit: `git commit -m "feat: add amazing feature"`
4. Push: `git push origin feature/amazing-feature`
5. Buka Pull Request

---

## 📄 License

Distributed under the **MIT License**.

```
MIT License

Copyright (c) 2024 SwiftCargo Express

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contact

**SwiftCargo Express**  
📍 Jakarta, Indonesia  
📧 info@swiftcargo.com  
📞 0800-123-4567  

---

> 💡 **Tips**:  
> - Gunakan `npm run dev` untuk development dengan hot reload  
> - Gunakan `viewport={{ once: true }}` untuk animasi scroll yang efisien  
> - Pisahkan data ke `.constants.js` agar mudah di-update  
> - Test animasi di Chrome DevTools → Performance tab  

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion** 🚀✨