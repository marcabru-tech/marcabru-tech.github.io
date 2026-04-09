# Guilherme Machado — Portfolio · Marcabru Tech

> Personal portfolio website for **Guilherme Machado**, CEO & Tech Leader at [Marcabru Tech](https://marcabru-tech.github.io), hosted on GitHub Pages.

[![GitHub Pages](https://img.shields.io/badge/Live%20Site-marcabru--tech.github.io-00f5ff?style=flat-square&logo=github)](https://marcabru-tech.github.io)
[![License](https://img.shields.io/badge/License-MIT-7c3aed?style=flat-square)](LICENSE)

---

## 👤 About Guilherme Machado

Guilherme Machado is the **CEO and Tech Leader at Marcabru Tech**, passionate about technology, automation, and innovation. He specialises in turning complex challenges into efficient, scalable solutions through intelligent automation, artificial intelligence, and robust technology infrastructure management.

> *"Acredito firmemente no poder da tecnologia para capacitar indivíduos e organizações."*

---

## 🚀 Features

| Feature | Description |
|---|---|
| **Dark + Neon Theme** | Deep `#050816` base with cyan (`#00f5ff`) / blue (`#0080ff`) / purple (`#7c3aed`) neon accents |
| **Particle Animation** | Interactive particle-connection canvas drawn with the Canvas 2D API |
| **Typing Effect** | Animated rotating role phrases in the hero section |
| **Scroll Reveal** | `IntersectionObserver`-driven fade-in-up animations for every section |
| **Animated Counters** | Ease-out quadratic counter animation on stats cards |
| **Skill Progress Bars** | Animated CSS progress bars triggered on viewport entry |
| **Tech Stack Badges** | Visual pill badges for every tool/technology |
| **Responsive Nav** | Sticky glass-morphism navbar with active-section highlighting and mobile hamburger menu |
| **Contact Form** | Client-side validation with live feedback and submit simulation |
| **Social Links** | LinkedIn, GitHub, Facebook with hover animations |

---

## 🛠️ Skills & Expertise

### Core Competencies
- **Automação** (92%) — Workflow automation to increase operational efficiency
- **Inteligência Artificial** (88%) — AI agents (e.g. Manus), LLM integration, decision optimisation
- **Integração de Ferramentas** (85%) — Zoho Mail, Slack, GitHub, n8n, Make (Integromat)
- **Gestão de Infraestrutura Tech** (90%) — Scalability, security and performance optimisation

### Tech Stack

```
GitHub · Slack · Zoho Mail · n8n · Make (Integromat) · OpenAI API
Python · JavaScript · Linux · Docker · Notion · Tailwind CSS
HTML5 / CSS3 · REST APIs · Webhooks · CI/CD
```

---

## 📁 Project Structure

```
marcabru-tech.github.io/
├── index.html      # Main page (Tailwind CSS + semantic HTML)
├── style.css       # Custom keyframes, component classes, utilities
├── script.js       # JS: particles, typing, scroll-reveal, counters, form
├── CNAME           # Custom domain config (GitHub Pages)
└── README.md       # This file
```

---

## 🌐 Featured Projects

### Marcabru Tech
Leadership and development of innovative technology solutions across multiple sectors, integrating automation and AI at the core of the business.

🔗 [marcabru-tech.github.io](https://marcabru-tech.github.io)

---

## 📬 Contact & Social

| Platform | Link |
|---|---|
| 💼 LinkedIn | [guilhermegoncalvesmachado](https://www.linkedin.com/in/guilhermegoncalvesmachado) |
| 🐙 GitHub | [marcabru-tech](https://github.com/marcabru-tech) |
| 📘 Facebook | [guilhermemachadodonorte](https://www.facebook.com/guilhermemachadodonorte) |

---

## ⚙️ Technologies Used

- **HTML5** — Semantic markup
- **Tailwind CSS** (CDN v3) — Utility-first styling with custom theme config
- **Vanilla JavaScript** (ES2020+) — No framework dependencies
  - `IntersectionObserver` API — scroll-reveal & counter/bar triggers
  - `requestAnimationFrame` — smooth particle & counter animations
  - `Canvas 2D` API — particle/connection background
- **Google Fonts** — Inter + JetBrains Mono
- **GitHub Pages** — Hosting

---

## 🎨 Customisation Guide

### Changing colours
Open `index.html` and edit the `tailwind.config` block inside the `<script>` tag:

```js
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'neon-cyan':  '#00f5ff',  // ← change accent
                'neon-blue':  '#0080ff',
                'neon-purple':'#7c3aed',
                'dark-base':  '#050816',  // ← change background
            },
        }
    }
}
```

### Adding a project
Inside the `#projects` section in `index.html`, duplicate a `.project-card` block and fill in your project details.

### Updating skill levels
Find the `.skill-bar` element for the skill you want to adjust and change `data-width` (0–100):

```html
<div class="skill-bar" data-width="92"></div>
```

### Adding tech-stack badges
In the `#stack` section, add a new `<span>` element:

```html
<span class="tech-badge">YourTech</span>
```

### Updating typing phrases
Open `script.js` and edit the `phrases` array in `initTyping()`:

```js
const phrases = [
    'automação inteligente',
    'integração de sistemas',
    // ← add your own
];
```

---

## 🏃 Running Locally

No build step required — this is a pure static site.

```bash
# Clone the repo
git clone https://github.com/marcabru-tech/marcabru-tech.github.io.git
cd marcabru-tech.github.io

# Serve with any static server, e.g.:
npx serve .
# or
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

---

## 📄 License

© 2026 Guilherme Machado · Marcabru Tech. All rights reserved.

This project is released under the [MIT License](LICENSE) — you are free to use, modify, and distribute it with attribution.
