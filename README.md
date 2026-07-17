# MD. Sazzad Hossain Adib - Portfolio

A professional research and developer portfolio built with Next.js 15+, TypeScript, and Tailwind CSS.

🔗 **Live Demo:** [Portfolio Website](https://sazzadadib.vercel.app)

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Component-Based Architecture**: Reusable, maintainable components
- **Multiple Pages**: Home, About, Projects, Publications, Research, Contact
- **Responsive Design**: Mobile-first approach with beautiful UI
- **SEO Optimized**: Proper metadata and semantic HTML
- **Performance**: Optimized images, lazy loading, and fast page loads
- **Accessibility**: WCAG compliant with proper ARIA labels

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout with Navbar & Footer
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About page
│   ├── projects/page.tsx       # Projects showcase
│   ├── publications/page.tsx   # Research publications
│   ├── research/page.tsx       # Research interests
│   ├── contact/page.tsx        # Contact information
│   └── globals.css             # Global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Footer.tsx          # Footer component
│   │   └── Hero.tsx            # Hero section
│   ├── ui/
│   │   ├── Button.tsx          # Button component
│   │   ├── Card.tsx            # Card components
│   │   ├── Badge.tsx           # Badge component
│   │   └── Section.tsx         # Section wrapper
│   ├── projects/
│   │   └── ProjectCard.tsx     # Project card component
│   └── publications/
│       └── PublicationCard.tsx # Publication card
├── lib/
│   ├── data/
│   │   ├── profile.ts          # Profile & education data
│   │   ├── projects.ts         # Projects data
│   │   ├── publications.ts     # Publications data
│   │   └── skills.ts           # Skills data
│   └── types.ts                # TypeScript types
├── public/                     # Static assets
└── package.json
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Create a new Next.js project**:
```bash
npx create-next-app@latest portfolio --typescript --tailwind --app
cd portfolio
```

2. **Install dependencies**:
```bash
npm install lucide-react
```

3. **Copy the files**:
   - Copy all files from the artifacts above into their respective locations
   - Ensure the folder structure matches the project structure above

4. **Update `tsconfig.json`** to include path aliases:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

5. **Update `tailwind.config.ts`**:
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
}
export default config
```

6. **Run the development server**:
```bash
npm run dev
```

7. **Open your browser**:
   Navigate to `http://localhost:3000`

## 📝 Customization

### Update Personal Data

1. **Profile Information**: Edit `lib/data/profile.ts`
2. **Projects**: Edit `lib/data/projects.ts`
3. **Publications**: Edit `lib/data/publications.ts`
4. **Skills**: Edit `lib/data/skills.ts`

### Styling

- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Component styles: Use Tailwind utility classes

### Adding New Pages

1. Create a new folder in `app/` directory
2. Add a `page.tsx` file
3. The route will be automatically generated

Example:
```
app/blog/page.tsx → /blog
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy with one click

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Design Principles

- **Clean & Professional**: Academic-focused design
- **Responsive**: Works on all devices
- **Accessible**: WCAG 2.1 AA compliant
- **Performance**: Fast loading times
- **SEO**: Optimized for search engines

## 🔧 Technologies Used

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📄 License

This portfolio template is open source and available for personal use.

## 🤝 Contact

- **Email**: sazzad.adib@northsouth.edu
- **GitHub**: github.com/sazzadadib
- **LinkedIn**: linkedin.com/in/sazzadadib