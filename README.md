# Mingduo Zhao - Academic Website

A modern, responsive academic website built with Next.js, TypeScript, and Tailwind CSS for Mingduo Zhao, PhD Candidate in Marketing at UC Berkeley Haas School of Business.

## Features

- **Modern Design**: Clean, professional layout inspired by academic websites
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **SEO Optimized**: Proper meta tags and structured content
- **Accessible**: WCAG compliant design with proper semantic HTML

## Sections

### 🏠 Hero Section
- Professional headshot with parallax background
- Name in both English and Chinese (赵鸣铎)
- Academic title and institution

### 👨‍🎓 About
- Research interests and background
- Focus areas: Quantitative Marketing, Digital Platforms, Consumer Behavior
- Visual cards highlighting expertise areas

### 📚 Research
- Job market paper with detailed abstract
- Work in progress papers
- Research methodology showcase
- Tagged keywords for easy categorization

### 🎓 Teaching Experience
- Course listings with descriptions
- Teaching philosophy
- Student feedback and ratings
- Skill tags for each course

### 📱 Interactive Features
- Smooth scrolling navigation
- Fixed sidebar with active section highlighting
- Mobile-responsive hamburger menu
- Hover effects and transitions

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Source Sans Pro, Noto Serif SC)
- **Images**: Next.js Image optimization
- **Icons**: Heroicons (SVG)

## Project Structure

```
mingduo_website/
├── public/
│   ├── picture/           # Image assets
│   └── CV (4).pdf        # CV document
├── src/
│   ├── app/
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   └── components/
│       ├── Sidebar.tsx
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ResearchSection.tsx
│       └── TeachingSection.tsx
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd mingduo_website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- **Primary**: #2c3e50 (Dark blue-gray)
- **Secondary**: #3498db (Blue)
- **Accent**: #e74c3c (Red)

### Content
To update content, edit the respective component files in `src/components/`:
- Personal information: `HeroSection.tsx`, `AboutSection.tsx`
- Research papers: `ResearchSection.tsx`
- Teaching experience: `TeachingSection.tsx`
- Contact information: `Sidebar.tsx`

### Images
Replace images in the `public/picture/` directory:
- `WechatIMG5527.jpg` - Profile photo
- `bg252.png` - Hero background image

## Performance Features

- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: Google Fonts with font-display: swap
- **Code Splitting**: Automatic code splitting with Next.js
- **Static Generation**: Pre-rendered pages for fast loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The website can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on every push

## License

This project is for academic use by Mingduo Zhao.

## Contact

For questions about this website:
- Email: mingduo@berkeley.edu
- Institution: UC Berkeley Haas School of Business 