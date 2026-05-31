# ChefFest Project

Nowoczesna strona internetowa restauracji zbudowana przy użyciu React i Vite. Projekt to aplikacja jednostronicowa (SPA) z informacjami o restauracji, menu, opiniami i danymi kontaktowymi.

## 🚀 Technologie

### Frontend
- **React 19.2.0** - biblioteka do tworzenia interfejsów użytkownika
- **React Router 7.13.0** - routing w aplikacji
- **React Icons 5.5.0** - kolekcja ikon dla React

### Stylizacja
- **SASS/SCSS** - preprocesor CSS do wygodnej pracy ze stylami
- Modularna architektura stylów z wykorzystaniem metodologii BEM

### Narzędzia deweloperskie
- **Vite 7.3.1** - nowoczesny bundler i serwer deweloperski
- **ESLint** - linter do sprawdzania jakości kodu
- **@vitejs/plugin-react** - wtyczka React dla Vite

## 📋 Struktura projektu

```
cheffest-project/
├── src/
│   ├── assets/          # Obrazy, ikony, SVG
│   ├── components/      # Komponenty wielokrotnego użytku
│   │   ├── Header/      # Nagłówek strony
│   │   ├── Navbar/      # Menu nawigacyjne
│   │   ├── Footer/      # Stopka strony
│   │   ├── Button/      # Przyciski
│   │   ├── Card/        # Karty menu
│   │   └── ReviewsCard/ # Karty opinii
│   ├── pages/           # Strony/sekcje aplikacji
│   │   ├── Home/        # Strona główna
│   │   ├── Hero/        # Sekcja hero
│   │   ├── About/       # O restauracji
│   │   ├── BestMenu/    # Menu restauracji
│   │   ├── Achievements/# Osiągnięcia
│   │   ├── Franchisee/  # Informacje o franczyzie
│   │   ├── Reviews/     # Opinie klientów
│   │   ├── Support/     # Wsparcie
│   │   └── FindUs/      # Kontakt i lokalizacja
│   ├── styles/          # Style globalne
│   │   └── blocks/      # Bloki stylów (zmienne, czcionki, normalizacja)
│   ├── App.jsx          # Główny komponent aplikacji
│   └── main.jsx         # Punkt wejścia
├── dist/                # Wersja produkcyjna
├── package.json         # Zależności i skrypty
└── vite.config.js       # Konfiguracja Vite
```

## 🎨 Funkcje

- **Responsywny design** - poprawne wyświetlanie na wszystkich urządzeniach
- **Modularna architektura** - każdy komponent jest izolowany z własnymi stylami
- **Interaktywne menu** - kategorie dań z zakładkami i licznikami
- **Sekcja opinii** - wyświetlanie opinii klientów
- **Informacje o franczyzie** - możliwości dla partnerów
- **Informacje kontaktowe** - sposoby kontaktu i lokalizacja

## 🛠️ Instalacja i uruchomienie

### Wymagania wstępne
- Node.js (wersja 16 lub wyższa)
- npm lub yarn

### Instalacja zależności

```bash
npm install
```

### Uruchomienie w trybie deweloperskim

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:5173`

### Budowanie wersji produkcyjnej

```bash
npm run build
```

Zbudowane pliki będą znajdować się w folderze `dist/`

### Podgląd wersji produkcyjnej

```bash
npm run preview
```

### Linting kodu

```bash
npm run lint
```

### Śledzenie zmian SASS

```bash
npm run sass-watch
```

## 📦 Wdrożenie

Projekt jest skonfigurowany do wdrożenia na **Netlify** ze ścieżką bazową `./` (zobacz `vite.config.js`).

### Wdrożenie na Netlify

1. Połącz repozytorium z Netlify
2. Ustawienia budowania:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Netlify automatycznie zbuduje i opublikuje projekt

## 🎯 Komponenty menu

Projekt zawiera interaktywne menu z kategoriami:
- Burgery
- Kanapki
- Rolki
- Pączki
- Wypieki
- Torty
- Ciasteczka

Każda karta menu zawiera:
- Zdjęcie dania
- Nazwę
- Cenę
- Licznik ilości
- Przycisk dodania do koszyka

## 🔧 Konfiguracja

### Vite
Projekt używa Vite z wtyczką React i ścieżką bazową `./` dla poprawnego działania na Netlify.

### ESLint
Skonfigurowany do sprawdzania kodu React z wykorzystaniem nowoczesnych reguł i wtyczek.

## 👨‍💻 Autor

**Bohdan Moskovchenko**

## 📄 Licencja

Projekt jest prywatny (private: true w package.json)

---

**Wersja:** 0.0.0  
**Ostatnia aktualizacja:** Maj 2026
