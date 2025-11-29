# 🚀 Next-Gen Portfolio — Robert Johnson  
**AI-Powered Developer Portfolio built with Next.js 16, React 19, OpenAI AgentKit, and Sanity CMS**

🔗 **Live Site:** https://robertjohnsonportfolio.com  
📦 **Repository:** https://github.com/johnsonr84/nextgen-robertjohnsonportfolio

---

# 📸 Screenshots

> **Order:** Profile → About → Testimonials → Experience → Projects → Skills → Contact

| Section | Screenshot |
|--------|------------|
| 🧑‍💻 Profile | ![Profile](./public/screenshots/Profile.png) |
| 📄 About | ![About](./public/screenshots/About.png) |
| ⭐ Testimonials | ![Testimonials](./public/screenshots/Testimonials.png) |
| 🧭 Experience | ![Experience](./public/screenshots/Experience.png) |
| 🧱 Projects | ![Projects](./public/screenshots/Projects.png) |
| 🛠 Skills | ![Skills](./public/screenshots/Skills.png) |
| ✉️ Contact | ![Contact](./public/screenshots/Contact.png) |

---

# 🏗️ Tech Stack Overview

| Category | Technologies |
|---------|--------------|
| **Frontend / Framework** | Next.js 16, React 19, App Router, Turbopack, Server Components |
| **AI & LLMs** | OpenAI AgentKit, OpenAI ChatKit, AI Twin Chat (Crisp, Clear, Chatty) |
| **CMS** | Sanity CMS, Sanity Studio v3, Visual Editing, GROQ, Vision Tool |
| **Auth** | Clerk Authentication, Theming, Middleware |
| **Styling** | Tailwind CSS v4, Framer Motion, Aceternity UI |
| **Tooling** | TypeScript, Biome, Lucide Icons, Tabler Icons |

---

# 💻 Core Features

### 🧠 AI Twin Chat (OpenAI ChatKit)
- 3 personality modes: **Crisp**, **Clear**, **Chatty**
- Live streaming responses
- Typing simulation & context memory

### 🧩 Dual-App Architecture
- Public-facing Next.js portfolio  
- Fully integrated **Sanity Studio** within the same codebase

### ✏️ Visual Content Editing
- Real-time preview via **Sanity Presentation Tool**
- Draft Mode for pre-publication previews  
- Live updates with no redeploy needed

### 🦸 Dynamic Hero Section
- Animated rotating headlines  
- Floating gradient elements  
- Smooth Framer Motion micro-interactions

### 📊 Comprehensive Portfolio Sections
- About  
- Experience Timeline  
- Skills visualized with Recharts  
- Projects  
- Testimonials  
- Achievements  
- Contact Form  
- Optional Blog

### 🧭 macOS-Style Floating Dock
- Glassmorphic UI  
- Hover magnification  
- Section-aware navigation  

---

# 🛠️ Advanced Concepts

| Feature | Description |
|--------|-------------|
| **OpenAI AgentKit Integration** | AI agent with extendable actions & contextual reasoning |
| **Sanity Visual Editing** | Side-by-side editing, live preview, Vision GROQ playground |
| **Next.js 16 Server Actions** | Server-first form handling (Contact form) |
| **Type Safety** | Full TypeScript, auto-generated schema types |
| **Accessibility First** | Radix UI primitives, semantic structure, WCAG-friendly styling |

---

# 🚀 Deployment Pipeline

### 🏭 Hosting & Deployment
- **Vercel** for frontend deployment  
- **Sanity** for Studio + dataset hosting  
- Automatic image optimization  
- Fast CI/CD with instant previews  

### 📦 Content & Data
- 61 sample CMS documents auto-imported  
- CMS-powered sections: Skills, Experience, Testimonials, Hero, Projects  

### 🧩 Custom Components
- Testimonial carousel  
- Interactive world map  
- Recharts-based skills  
- Aceternity UI effects (glows, ripples, comet animations)

### 🧰 Tooling & Optimization
- **Biome** for ultra-fast linting/formatting  
- **Lucide** + **Tabler** icon packs  
- SEO metadata configuration  
- Image optimization & Server Components for performance  

---

# 🧑‍💻 Local Development

```bash
git clone https://github.com/johnsonr84/nextgen-robertjohnsonportfolio
cd nextgen-robertjohnsonportfolio

npm install
npm run dev
```

---

| App               | URL                                                          |
| ----------------- | ------------------------------------------------------------ |
| **Next.js App**   | [http://localhost:3000](http://localhost:3000)               |
| **Sanity Studio** | [http://localhost:3000/studio](http://localhost:3000/studio) |


```plaintext
nextgen-robertjohnsonportfolio/
│
├── app/                     # Next.js 16 App Router
│   ├── (site)/              # Portfolio pages
│   ├── studio/              # Sanity Studio
│   └── api/                 # Server Actions + API routes
│
├── sanity/                  # Schemas, config, GROQ helpers
│   ├── schemaTypes/
│   └── utils/
│
├── components/              # Reusable UI components
│   ├── ai/
│   ├── charts/
│   ├── testimonials/
│   └── ui/
│
├── public/
│   └── screenshots/         # README images
│
└── tailwind.config.js
```

---

#👤 Author
## Robert Johnson
- Full-Stack Software Engineer • AI Builder
- 🔗 https://robertjohnsonportfolio.com