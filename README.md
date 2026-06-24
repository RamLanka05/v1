# ⚡ Sathvik Ram Lanka - Personal Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://lankasathvik.vercel.app)

My personal portfolio website, which is a record of everything I've done so far, and everything else I'm working on in my career journey. 

---

## 🚀 About This Project

This repository contains the codebase for my personal portfolio website. It serves as a digital playground and professional showcase, highlighting my journey thus far as a CS & Statistics student at UIUC and my projects spanning Full Stack Engineering, Virtual Reality, and various other interests.

Unlike a static resume, this site offers interactive demos, a highly customized user interface, and a deeper dive into my technical journey.

---

## ✨ Key Features & UI/UX

* **Independent Column Architecture:** A locked left-hand navigation pane paired with an independently scrolling content column for a native, app-like feel.
* **Semantic Theming:** A fully integrated Light/Dark mode system utilizing CSS variables seamlessly mapped to Tailwind classes.
* **Custom Interactive Cursor:** A buttery-smooth, 60fps dual-element pointer (dot and glowing concentric ring) built from scratch using React `useRef` and `requestAnimationFrame`.
* **Glassmorphism Cards:** Translucent, frosted-glass project and experience cards that react dynamically to user hover states.

---

## ⚙️ Built With

I built this site using a modern React stack to ensure speed, type safety, and seamless deployment:

- **React 19.2.0** - Modern UI framework
- **TypeScript 5.9.3** - Type-safe JavaScript
- **Vite 7.2.4** - Lightning-fast build tool
- **Tailwind CSS 4.1.17** - Utility-first CSS framework via the new `@tailwindcss/vite` engine
- **@vercel/analytics** - Privacy-first, cookie-free web analytics
- **ESLint + typescript-eslint** - Code quality and linting
- **Particles.js 2.0.0** - Interactive background animations

---

## 📁 Project Structure

```text
./
├── src/                    # React source code
│   ├── components/         # Reusable React components (Hero, CustomCursor, etc.)
│   ├── data/               # Static data (work experiences, etc.)
│   ├── assets/             # Images, icons, and other media
│   ├── App.tsx             # Main App component & layout architecture
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles and semantic theme variables
├── public/                 # Static assets served as-is
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── eslint.config.js        # ESLint configuration
```

---

## 🛠️ Development

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install
```

### Running Development Server

```bash
# Start the dev server (hot reload enabled)
npm run dev
```

The website will be running on 'http://localhost:5173/'

### Building for Production

```bash
# Build optimized production bundle
npm run build
```

The compiled assets will be in the `dist/` directory.

### Linting & Type Checking

```bash
# Run ESLint
npm run lint

# Type check with TypeScript
npx tsc --noEmit
```

---

## 📝 License

This project is open source and available under the MIT License.

