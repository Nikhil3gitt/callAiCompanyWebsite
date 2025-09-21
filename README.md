# callAI - AI Services Website

A production-ready website for callAI, an AI services company. Built with Next.js (App Router), TypeScript, Tailwind CSS, and modern web technologies.

## 🚀 Features

- **Modern Design**: Clean, elegant, conversion-focused design with subtle animations
- **Interactive Demos**: 6 mini interactive demos showcasing AI capabilities
- **Responsive**: Mobile-first design that works on all devices
- **Accessibility**: WCAG AA compliant with proper semantic HTML
- **Performance**: Optimized for Lighthouse scores ≥ 95
- **SEO Ready**: Complete metadata, sitemap, and structured data
- **Dark/Light Mode**: Elegant theme switching with system preference detection
- **TypeScript**: Full type safety throughout the application

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Forms**: React Hook Form with Zod validation
- **Theme**: next-themes

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── insights/          # Blog/insights pages
│   ├── process/           # Process page
│   ├── projects/          # Projects showcase
│   └── [slug]/           # Dynamic project detail pages
├── components/            # Reusable components
│   ├── demos/            # Interactive demo components
│   ├── ui/               # Base UI components
│   └── ...               # Page-specific components
├── lib/                  # Utilities and configurations
└── types/                # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd callai
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- **Primary**: #4F46E5 (Indigo)
- **Accent**: #06B6D4 (Cyan)
- **Surface Dark**: #0B0F14
- **Surface Light**: #F8FAFC

### Typography
- **Headings**: Sora (Google Fonts)
- **Body**: Inter (Google Fonts)

### Components
All components are built with Radix UI primitives and styled with Tailwind CSS for consistency and accessibility.

## 🎯 Interactive Demos

The website includes 6 interactive demos:

1. **Smart Support Bot** - NLP-powered customer support
2. **Invoice Automation** - OCR and data extraction
3. **Demand Forecasting** - Time series analysis with charts
4. **Email Summarizer** - AI-powered text summarization
5. **Pricing Optimizer** - Dynamic pricing calculations
6. **Ops Anomaly Detection** - Real-time monitoring alerts

All demos are client-side only with mocked data for demonstration purposes.

## 📱 Pages

- **Home** - Hero, value props, featured projects, process, testimonials
- **Projects** - Filterable project showcase with interactive demos
- **Project Detail** - Individual project pages with full demos
- **About** - Company story, mission, vision, values, timeline
- **Process** - 5-stage engagement methodology
- **Contact** - Lead form with validation and calendar booking
- **Insights** - Blog with featured articles and filtering
- **Legal** - Privacy policy and terms of service

## 🔧 Customization

### Adding New Projects

1. Add project data to `src/lib/projects.ts`
2. Create demo component in `src/components/demos/`
3. Update project card component to include new demo

### Adding New Blog Posts

1. Add post data to the blog posts array in `src/app/insights/page.tsx`
2. Create individual post page in `src/app/insights/[slug]/page.tsx`

### Styling

The design system is built on Tailwind CSS with custom design tokens defined in `tailwind.config.js`. All components use the `cn()` utility for consistent class merging.

## 🚀 Deployment

The project is ready for deployment on Vercel:

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

For other platforms, run `npm run build` and deploy the `out` directory.

## 📊 Performance

The website is optimized for:
- **Lighthouse Performance**: ≥ 95
- **Lighthouse Accessibility**: ≥ 95
- **Lighthouse Best Practices**: ≥ 95
- **Lighthouse SEO**: ≥ 95

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

For questions or support, contact us at hello@callai.com
