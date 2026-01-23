# RLink Partners

**Your Gateway to the Next Leadership Stage**

RLink Partners is a modern recruitment platform that connects visionary leaders with breakthrough growth-stage startups in Japan. Our comprehensive suite of services helps companies find the right leaders to drive growth and success.

![RLink Partners Hero](https://img.shields.io/badge/RLink-Partners-1867D1?style=for-the-badge)

## ✨ Project Overview

This is a fully-featured, production-ready React application built with modern web technologies, providing a multi-page recruitment and HR services platform with bilingual support (Japanese/English).

## 🚀 Key Features

### Core Functionality
- **Multi-page Application** - Built with React Router for seamless navigation
- **Internationalization (i18n)** - Full Japanese and English language support with i18next
- **Performance Optimized** - Lazy loading, code splitting, and performance monitoring
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - AOS, Framer Motion, and GSAP for engaging user experience
- **Video Context Management** - Custom video provider for dynamic content
- **SEO Optimized** - Proper meta tags and semantic HTML

### Services Offered
- **Executive Search** - Connecting companies with top leaders and specialists
- **RPO (Recruitment Process Outsourcing)** - End-to-end hiring support
- **Reference Check AI** - AI-powered reference checks for confident hiring
- **Staffing Solutions** - Comprehensive staffing services
- **Recruitment Strategy** - Strategic recruitment planning and execution
- **HR Product Business** - Innovative HR technology solutions

### Job Categories
- **Business Development** - Strategic growth roles
- **Technology & Consulting** - Technical and advisory positions
- **Leadership Roles** - C-level and senior management positions

## 🛠 Tech Stack

### Frontend Framework & Core
- **React** 19.1.1 - Latest React with concurrent features
- **React Router DOM** 7.9.3 - Advanced routing and navigation
- **Vite** 7.1.2 - Lightning-fast build tool
- **i18next** 25.6.3 - Internationalization framework
- **react-i18next** 16.3.5 - React integration for translations

### Styling & UI
- **Tailwind CSS** 4.1.12 - Utility-first CSS framework
- **DaisyUI** 5.0.54 - Tailwind CSS component library
- **Custom Fonts** - Poppins, Inter, Lato

### Animations & Effects
- **AOS (Animate On Scroll)** 2.3.4 - Scroll-triggered animations
- **Framer Motion** 12.23.22 - Advanced React animations
- **GSAP** 3.13.0 - Professional-grade animation library
- **React Fast Marquee** 1.6.5 - Smooth marquee animations
- **OGL** 1.0.11 - WebGL library for 3D effects

### Performance & Quality
- **Web Vitals** 5.1.0 - Performance monitoring
- **ESLint** 9.33.0 - Code quality and linting
- **Performance Monitor** - Custom performance tracking component

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18.0 or higher)
- npm (version 8.0 or higher)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/anthax589/RLink.git
   cd RLink
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Builds the app for production to `dist` folder |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code quality issues |

## 🏗 Project Structure

```
RLink/
├── public/                          # Static assets
├── src/
│   ├── animation/                   # Animation utilities
│   │   └── TypeWriterOnScroll.jsx   # Typewriter effect on scroll
│   ├── assets/                      # Media assets
│   │   ├── fonts/                   # Custom fonts (Poppins, Inter, Lato)
│   │   ├── gif/                     # Animated GIFs
│   │   ├── img/                     # Images and backgrounds
│   │   └── svg/                     # SVG icons and graphics
│   ├── components/
│   │   ├── Landing/                 # Landing page components
│   │   │   ├── Header.jsx           # Navigation header
│   │   │   ├── HeroSection.jsx      # Hero banner with main messaging
│   │   │   ├── AboutSection.jsx     # Company information
│   │   │   ├── ServicesSection.jsx  # Services showcase
│   │   │   ├── JobTitleSection.jsx  # Job categories and strengths
│   │   │   └── ContactSection.jsx   # Contact form and information
│   │   ├── Services/                # Service-specific components
│   │   │   ├── HeroSection.jsx
│   │   │   ├── OurServicesSection.jsx
│   │   │   ├── RecruitmentStrategy/
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── RecruitmentStrategy.jsx
│   │   │   │   └── StrategicApproach.jsx
│   │   │   └── Staffing/
│   │   │       ├── HeroSection.jsx
│   │   │       └── Staffing.jsx
│   │   ├── AboutTheComapny/         # Company information components
│   │   │   ├── CompanyOverview/
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   └── CompanyOverviewContent.jsx
│   │   │   └── CompanyMission/
│   │   │       ├── HeroSection.jsx
│   │   │       └── CompanyMissionContent.jsx
│   │   ├── PerformanceMonitor.jsx   # Performance tracking component
│   │   └── ScrollToTop.jsx          # Scroll restoration utility
│   ├── context/
│   │   ├── VideoProvider.jsx        # Video context provider
│   │   └── useVideoContext.js       # Video context hook
│   ├── hooks/
│   │   └── useTranslations.js       # Custom i18n hook
│   ├── locales/
│   │   └── translations.json        # Japanese & English translations
│   ├── pages/                       # Page components
│   │   ├── LandingPage.jsx          # Main landing page
│   │   ├── ServicesPage.jsx         # Services overview
│   │   ├── CompanyOverview.jsx      # Company profile
│   │   ├── CompanyMission.jsx       # Company mission
│   │   ├── RecruitmentBusiness.jsx  # Recruitment business page
│   │   ├── RecruitmentStrategy.jsx  # Recruitment strategy page
│   │   ├── HrProductBusiness.jsx    # HR product business page
│   │   ├── Staffing.jsx             # Staffing services page
│   │   └── UnderContruction.jsx     # Under construction placeholder
│   ├── shared/                      # Shared components
│   │   ├── Header.jsx               # Global header
│   │   ├── Footer.jsx               # Global footer
│   │   └── ServicesNav.jsx          # Services navigation
│   ├── App.jsx                      # Root component with routing
│   ├── App.css                      # Global styles and Tailwind config
│   ├── i18n.js                      # i18next configuration
│   └── main.jsx                     # Application entry point
├── index.html                       # HTML template
├── package.json                     # Dependencies and scripts
├── vite.config.js                   # Vite configuration
├── eslint.config.js                 # ESLint configuration
└── README.md                        # This file
```

## 🌐 Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | LandingPage | Main landing page with hero, services, and contact |
| `/services` | ServicesPage | Comprehensive services overview |
| `/contact` | ContactForm | Contact form for inquiries |
| `/company-profile` | CompanyProfile | Company overview and information |
| `/company-mission` | CompanyMission | Company mission and values |
| `/recruitment-business` | RecruitmentBusiness | Recruitment business services |
| `/recruitment-strategy` | RecruitmentStrategy | Strategic recruitment approach |
| `/hr-product-business` | HrProductBusiness | HR technology products |
| `/staffing` | Staffing | Staffing solutions and services |

## 🎨 Styling & Design

### Color Scheme
- **Primary Blue**: #1867D1
- **Professional Gradients**: Blue to black transitions
- **Clean Backgrounds**: White, gray-50, and radial gradients

### Typography
- **Headings**: Poppins (400, 500, 600, 700)
- **Body Text**: Inter & Lato families
- **Font Display**: Optimized with font-display: swap

### Design Philosophy
- **Mobile-First**: Responsive design starting from mobile
- **Modern & Clean**: Professional interface optimized for Japanese market
- **Performance**: Hardware acceleration and optimized rendering
- **Accessibility**: Semantic HTML and ARIA labels

## 🚀 Performance Optimizations

### Code Splitting
- Lazy loading for heavy components (About, Services, JobTitle, Contact, Footer)
- Chunk-based loading with webpack naming
- Suspense boundaries with loading spinners

### Rendering Optimizations
- Hardware acceleration with `transform: translateZ(0)`
- Content visibility for images and videos
- Layout containment for sections
- Will-change properties for animations

### Monitoring
- Web Vitals integration for Core Web Vitals tracking
- Custom PerformanceMonitor component (dev mode)
- Real-time performance metrics

## 🌍 Internationalization (i18n)

The application supports both Japanese and English languages:

- **Default Language**: Japanese (ja)
- **Fallback Language**: Japanese (ja)
- **Language Persistence**: Stored in localStorage
- **Translation Files**: Centralized in `src/locales/translations.json`
- **Custom Hook**: `useTranslations()` for easy access

### Switching Languages
Users can toggle between languages using the language switcher in the header.

## 🎬 Context Providers

### VideoProvider
Manages video playback state across the application:
- Controls video ended state
- Provides video context to components
- Used for dynamic content transitions

## 🌐 Deployment

### Production Build

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Deploy directly from the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Traditional Hosting**: Upload `dist` contents to any web server

### Environment Variables
No environment variables required for basic deployment. The app uses relative paths and works out of the box.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and structure
- Use meaningful commit messages
- Test your changes thoroughly on both mobile and desktop
- Ensure all linting passes (`npm run lint`)
- Keep components focused and reusable
- Test both Japanese and English translations
- Verify performance optimizations are maintained
- Check responsiveness on multiple screen sizes

## 🐛 Troubleshooting

### Common Issues

**Issue**: Development server won't start
- **Solution**: Delete `node_modules` and run `npm install` again

**Issue**: Animations not working
- **Solution**: Ensure AOS is initialized in the component with `Aos.init()`

**Issue**: Translations not loading
- **Solution**: Check that `translations.json` exists in `src/locales/`

**Issue**: Build fails
- **Solution**: Clear Vite cache with `rm -rf node_modules/.vite`

## 📦 Dependencies Overview

### Production Dependencies
- **React Ecosystem**: react, react-dom, react-router-dom
- **Internationalization**: i18next, react-i18next
- **Styling**: tailwindcss, daisyui
- **Animations**: aos, motion, gsap, react-fast-marquee, ogl
- **Monitoring**: web-vitals

### Development Dependencies
- **Build Tools**: vite, @vitejs/plugin-react
- **Linting**: eslint, eslint plugins
- **CSS Processing**: postcss, autoprefixer
- **TypeScript Types**: @types/react, @types/react-dom

## 📄 License

This project is proprietary software developed for RLink Partners.

## 📞 Contact

For business inquiries or partnership opportunities, please visit our contact section on the website or reach out through our official channels.

## 🙏 Acknowledgments

- Built with modern React 19 and Vite 7
- Designed for the Japanese recruitment market
- Optimized for performance and user experience
- Fully responsive and accessible

---

**RLink Partners** - Connecting Visionary Leaders with Breakthrough Growth-Stage Startups in Japan 🇯🇵

**Tech Stack**: React 19 • Vite 7 • Tailwind CSS 4 • i18next • Framer Motion • GSAP

**Status**: ✅ Production Ready | 🌍 Bilingual (日本語/English) | 📱 Fully Responsive