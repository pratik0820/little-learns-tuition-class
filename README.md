# Tuition Classes Website

A modern, responsive website for tuition classes targeting primary school students (Class 1-5). Built with React and Vite.

## Features

- Mobile-first responsive design
- Multi-page application with React Router
- Student registration form with EmailJS integration
- WhatsApp integration for instant enquiries
- Contact form with validation
- Testimonials and FAQ sections
- SEO-friendly and accessible
- Google Analytics 4 visitor tracking

## 📚 Documentation

Comprehensive documentation is available in the [`docs/`](./docs/) folder:

- **Setup Guides**: Analytics, EmailJS, Registration Form
- **Component Documentation**: All reusable components
- **Deployment**: Step-by-step deployment guide
- **Testing**: Testing strategies and validation
- **Performance**: Optimization techniques

See [docs/README.md](./docs/README.md) for the complete documentation index.

## Project Structure

```
tuition-website/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components (Home, About, Classes, etc.)
│   ├── styles/         # CSS files
│   ├── assets/         # Images, icons, fonts
│   ├── utils/          # Utility functions
│   ├── services/       # Email and API services
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── public/             # Static assets
├── docs/               # Documentation files
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── .eslintrc.cjs       # ESLint configuration
├── .prettierrc         # Prettier configuration
└── package.json        # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v14.18+ or v16+)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env and add your configuration:
# - Google Analytics Measurement ID
# - EmailJS Service ID, Template ID, and Public Key
```
See [docs/ANALYTICS_SETUP_GUIDE.md](./docs/ANALYTICS_SETUP_GUIDE.md) and [docs/REGISTRATION_FORM_SETUP.md](./docs/REGISTRATION_FORM_SETUP.md) for detailed instructions.

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- React 18
- React Router DOM
- Vite
- EmailJS (for registration form emails)
- Google Analytics 4
- ESLint
- Prettier

## Key Features

### Student Registration Form
- Comprehensive form collecting student and parent information
- Automated email notifications via EmailJS
- Real-time validation and error handling
- Mobile-responsive design

### WhatsApp Integration
- Direct WhatsApp links from multiple pages
- Context-aware pre-filled messages
- Updated contact number: +91 83903 39784

### Smooth Navigation
- "Enroll Now" buttons scroll directly to registration form
- Smooth scrolling between sections
- Mobile-friendly navigation

## Design System

The website follows a consistent design system with:
- Primary Color: Soft Blue (#3B82F6)
- Secondary Color: Warm Yellow (#FACC15)
- Accent Color: Soft Green (#22C55E)
- Background: Off White (#F9FAFB)
- Text: Dark Gray (#1F2937)

## License

Private project for tuition classes.
