# ChefFest Project

A modern restaurant website built with React and Vite. The project is a single-page application (SPA) featuring restaurant information, menu, reviews, and contact details.

## 🚀 Technologies

### Frontend
- **React 19.2.0** - library for building user interfaces
- **React Router 7.13.0** - application routing
- **React Icons 5.5.0** - icon collection for React

### Styling
- **SASS/SCSS** - CSS preprocessor for convenient styling
- Modular style architecture using BEM methodology

### Development Tools
- **Vite 7.3.1** - modern bundler and dev server
- **ESLint** - code quality linter
- **@vitejs/plugin-react** - React plugin for Vite

## 📋 Project Structure

```
cheffest-project/
├── src/
│   ├── assets/          # Images, icons, SVG
│   ├── components/      # Reusable components
│   │   ├── Header/      # Site header
│   │   ├── Navbar/      # Navigation menu
│   │   ├── Footer/      # Site footer
│   │   ├── Button/      # Buttons
│   │   ├── Card/        # Menu cards
│   │   └── ReviewsCard/ # Review cards
│   ├── pages/           # Application pages/sections
│   │   ├── Home/        # Home page
│   │   ├── Hero/        # Hero section
│   │   ├── About/       # About restaurant
│   │   ├── BestMenu/    # Restaurant menu
│   │   ├── Achievements/# Achievements
│   │   ├── Franchisee/  # Franchise information
│   │   ├── Reviews/     # Customer reviews
│   │   ├── Support/     # Support
│   │   └── FindUs/      # Contacts and location
│   ├── styles/          # Global styles
│   │   └── blocks/      # Style blocks (variables, fonts, normalization)
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Entry point
├── dist/                # Production build
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🎨 Features

- **Responsive design** - correct display on all devices
- **Modular architecture** - each component is isolated with its own styles
- **Interactive menu** - dish categories with tabs and counters
- **Reviews section** - customer reviews display
- **Franchise information** - opportunities for partners
- **Contact information** - contact methods and location

## 🛠️ Installation and Running

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for production

```bash
npm run build
```

Built files will be located in the `dist/` folder

### Preview production build

```bash
npm run preview
```

### Code linting

```bash
npm run lint
```

### Watch SASS changes

```bash
npm run sass-watch
```

## 📦 Deployment

The project is configured for deployment on **Netlify** with base path `./` (see `vite.config.js`).

### Deploy to Netlify

1. Connect the repository to Netlify
2. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Netlify will automatically build and publish the project

## 🎯 Menu Components

The project includes an interactive menu with categories:
- Burgers
- Sandwiches
- Rolls
- Donuts
- Pastries
- Cakes
- Cookies

Each menu card contains:
- Dish image
- Name
- Price
- Quantity counter
- Add to cart button

## 🔧 Configuration

### Vite
The project uses Vite with React plugin and base path `./` for correct operation on Netlify.

### ESLint
Configured for React code checking using modern rules and plugins.

## 👨‍💻 Author

**Bohdan Moskovchenko**

## 📄 License

The project is private (private: true in package.json)

---

**Version:** 0.0.0  
**Last updated:** May 2026
