# Bistroblis Restaurant Website

[🇵🇱 Wersja polska](#wersja-polska) | [🇬🇧 English version](#english-version)

---

## English Version

### 📖 About the Project

Bistroblis is a modern, responsive restaurant website built with React. The project showcases a complete restaurant web presence with multiple pages including home, about, menu, gallery, and contact sections. The website features a clean, elegant design focused on providing an exceptional user experience for restaurant visitors.

### ✨ Key Features

- **Multi-page Navigation**: Home, About, Menu, Gallery (Pages), and Contact sections
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI Components**: 
  - Hero sections with engaging visuals
  - Browse menu categories
  - Healthy food information sections
  - Special offers display
  - Customer testimonials
  - Featured articles/blog
  - Partner/brand showcase
  - Interactive contact forms
- **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- **Clean Architecture**: Component-based structure for maintainability and scalability

### 🛠️ Technologies Used

#### Core Technologies
- **React 19.2.4** - Modern UI library with latest features
- **React Router DOM 7.14.0** - Client-side routing and navigation
- **Vite 8.0.1** - Next-generation frontend build tool
- **Sass 1.99.0** - Advanced CSS preprocessing

#### Development Tools
- **ESLint** - Code quality and consistency
- **@vitejs/plugin-react** - React Fast Refresh support
- **React Hooks ESLint Plugin** - Best practices for React Hooks

### 📁 Project Structure

```
bistobliis-project/
├── src/
│   ├── assets/          # Images, icons, and static files
│   ├── components/      # Reusable UI components
│   │   ├── header/      # Navigation header
│   │   ├── footer/      # Footer component
│   │   └── healthyfood/ # Healthy food section component
│   ├── pages/           # Page-level components
│   │   ├── home/        # Home page
│   │   ├── about/       # About page
│   │   ├── menu/        # Menu page
│   │   ├── page/        # Gallery/Pages
│   │   └── contact/     # Contact page
│   ├── section/         # Page sections
│   │   ├── hero/        # Hero sections
│   │   ├── browsesection/
│   │   ├── offerssection/
│   │   ├── testimonialssection/
│   │   ├── features/
│   │   ├── articles/
│   │   └── partners/
│   ├── style/           # Global styles and mixins
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── package.json
└── vite.config.js
```

### 🚀 Getting Started

#### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

#### Installation

1. Clone the repository:
```bash
git clone https://github.com/BogdanMosok/portfolio.git
cd portfolio/bistroblis
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready application
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

### 🌐 Pages Overview

- **Home** (`/`) - Main landing page with hero section, browse categories, healthy food info, offers, features, testimonials, and articles
- **About** (`/about`) - Restaurant story and information
- **Menu** (`/Menu`) - Full restaurant menu with categories
- **Gallery** (`/pages`) - Photo gallery and visual content
- **Contact** (`/contact`) - Contact information and inquiry form



### 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

### 📝 License

This project is private and proprietary.

---

## Wersja Polska

### 📖 O Projekcie

Bistroblis to nowoczesna, responsywna strona internetowa restauracji zbudowana w React. Projekt prezentuje kompletną obecność restauracji w sieci z wieloma stronami, w tym sekcjami główną, o nas, menu, galerią i kontaktem. Strona charakteryzuje się czystym, eleganckim designem skupionym na zapewnieniu wyjątkowego doświadczenia użytkownika dla gości restauracji.

### ✨ Główne Funkcje

- **Nawigacja Wielostronicowa**: Strony główna, O nas, Menu, Galeria i Kontakt
- **Responsywny Design**: W pełni zoptymalizowany dla komputerów, tabletów i urządzeń mobilnych
- **Nowoczesne Komponenty UI**:
  - Sekcje hero z angażującymi wizualizacjami
  - Przeglądanie kategorii menu
  - Sekcje informacji o zdrowej żywności
  - Wyświetlanie specjalnych ofert
  - Opinie klientów
  - Wyróżnione artykuły/blog
  - Prezentacja partnerów/marek
  - Interaktywne formularze kontaktowe
- **Wysoka Wydajność**: Zbudowany z Vite dla błyskawicznie szybkiego rozwoju i zoptymalizowanych buildów produkcyjnych
- **Czysta Architektura**: Struktura oparta na komponentach dla łatwości utrzymania i skalowalności

### 🛠️ Wykorzystane Technologie

#### Technologie Podstawowe
- **React 19.2.4** - Nowoczesna biblioteka UI z najnowszymi funkcjami
- **React Router DOM 7.14.0** - Routing i nawigacja po stronie klienta
- **Vite 8.0.1** - Narzędzie do budowania frontendu nowej generacji
- **Sass 1.99.0** - Zaawansowane przetwarzanie CSS

#### Narzędzia Deweloperskie
- **ESLint** - Jakość i spójność kodu
- **@vitejs/plugin-react** - Wsparcie React Fast Refresh
- **React Hooks ESLint Plugin** - Najlepsze praktyki dla React Hooks

### 📁 Struktura Projektu

```
bistobliis-project/
├── src/
│   ├── assets/          # Obrazy, ikony i pliki statyczne
│   ├── components/      # Komponenty UI wielokrotnego użytku
│   │   ├── header/      # Nagłówek nawigacyjny
│   │   ├── footer/      # Komponent stopki
│   │   └── healthyfood/ # Komponent sekcji zdrowej żywności
│   ├── pages/           # Komponenty na poziomie strony
│   │   ├── home/        # Strona główna
│   │   ├── about/       # Strona O nas
│   │   ├── menu/        # Strona Menu
│   │   ├── page/        # Galeria/Strony
│   │   └── contact/     # Strona Kontakt
│   ├── section/         # Sekcje stron
│   │   ├── hero/        # Sekcje hero
│   │   ├── browsesection/
│   │   ├── offerssection/
│   │   ├── testimonialssection/
│   │   ├── features/
│   │   ├── articles/
│   │   └── partners/
│   ├── style/           # Style globalne i mixiny
│   ├── App.jsx          # Główny komponent aplikacji
│   └── main.jsx         # Punkt wejścia aplikacji
├── package.json
└── vite.config.js
```

### 🚀 Rozpoczęcie Pracy

#### Wymagania Wstępne
- Node.js (wersja 16 lub wyższa)
- Menedżer pakietów npm lub yarn

#### Instalacja

1. Sklonuj repozytorium:
```bash
git clone https://github.com/BogdanMosok/portfolio.git
cd portfolio/bistroblis
```

2. Zainstaluj zależności:
```bash
npm install
```

3. Uruchom serwer deweloperski:
```bash
npm run dev
```

4. Otwórz przeglądarkę i przejdź do `http://localhost:5173`

### 📜 Dostępne Skrypty

- `npm run dev` - Uruchom serwer deweloperski z hot reload
- `npm run build` - Zbuduj aplikację gotową do produkcji
- `npm run preview` - Podgląd buildu produkcyjnego lokalnie
- `npm run lint` - Uruchom ESLint aby sprawdzić jakość kodu

### 🌐 Przegląd Stron

- **Strona Główna** (`/`) - Główna strona lądowania z sekcją hero, kategoriami, informacjami o zdrowej żywności, ofertami, funkcjami, opiniami i artykułami
- **O Nas** (`/about`) - Historia i informacje o restauracji
- **Menu** (`/Menu`) - Pełne menu restauracji z kategoriami
- **Galeria** (`/pages`) - Galeria zdjęć i treści wizualnych
- **Kontakt** (`/contact`) - Informacje kontaktowe i formularz zapytań



### 🤝 Współpraca

Wkłady, problemy i prośby o nowe funkcje są mile widziane! Sprawdź stronę z problemami.

### 📝 Licencja

Ten projekt jest prywatny i zastrzeżony.

---

**Made with ❤️ for food lovers**
