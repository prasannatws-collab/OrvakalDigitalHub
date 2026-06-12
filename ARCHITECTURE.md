# Orvakal Digital Hub - Architecture & Coding Standards

This document establishes the architecture, folder structure, and coding patterns to ensure that the codebase remains clean, maintainable, and adheres to **SOLID** principles.

---

## 1. Folder Structure

The project follows a modular, feature-based design:

```text
src/
├── core/                  # Shared core infrastructure (Contexts, Base/Common UI)
│   ├── components/        # Base components (Modal.tsx, Card.tsx, Badge.tsx)
│   └── context/           # Global Context Providers (Language, Theme, DomainData)
├── features/              # Feature modules (isolated directories containing feature-specific logic)
│   ├── dashboard/         # Landing view, weather/clock widget, persona selector, quick links
│   ├── directory/         # Government officials, banks, schools, postal, schemes, grievances
│   ├── farmer/            # Mandi prices, agricultural contacts, feeder timings, reservoirs
│   ├── hospitality/       # Hotel bookings, banquet halls catalog
│   ├── jobs/              # Employment opportunities, business/commerce directories
│   └── notice-board/      # Notices, local bulletins
├── data/                  # Static schemas and database mock setups
└── types/                 # Centralized TypeScript interface definitions
```

---

## 2. SOLID Design Guidelines

Whenever making code modifications, check that your implementation adheres to these principles:

### Single Responsibility Principle (SRP)
* **Rule**: A component or file should have exactly one reason to change.
* **In Practice**: 
  * Keep rendering (JSX) separate from heavy business logic. Use custom React hooks (e.g., `useWeatherClock`, `useGrievances`) to encapsulate logic.
  * Do not combine multiple distinct views/desks in a single file. Each desk (e.g. `MandiPrices.tsx`, `FeederTimings.tsx`) lives in its own file.

### Open/Closed Principle (OCP)
* **Rule**: Software entities should be open for extension, but closed for modification.
* **In Practice**:
  * Keep data sets (e.g., schemes, notices, attractions) structured as static data files in `src/data/` or `src/features/*/data/`. Extending the app (e.g., adding a new bank scheme) should just require editing the data arrays, without changing components.
  * Use CSS variables in `src/index.css` to enable extensions to the design system (like adding new themes) without editing core styles.

### Liskov Substitution Principle (LSP)
* **Rule**: Subtypes must be substitutable for their base types.
* **In Practice**:
  * React prop interfaces should extend standard HTML elements where appropriate (e.g., custom button props extending `React.ButtonHTMLAttributes<HTMLButtonElement>`).
  * Ensure custom mocked types conform strictly to definitions in `src/types/index.ts`.

### Interface Segregation Principle (ISP)
* **Rule**: Components should not depend on interface definitions they do not use.
* **In Practice**:
  * Do not pass a whole monolithic state model when a component only needs a single field or a couple of properties.
  * Keep props interfaces focused. Avoid optional fields if they can be split into separate specific component variants.

### Dependency Inversion Principle (DIP)
* **Rule**: Depend upon abstractions, not concretions.
* **In Practice**:
  * Use custom Context Providers (`useLanguage`, `useDomainData`, `useTheme`) to inject global state, rather than hardcoding global mutable singletons or importing direct mutations.
  * Keep components decoupled from backend/local storage services by utilizing wrapper adapter hooks.

---

## 3. Best Practices Checklist
* **Aesthetics & Styling**: Use the centralized HSL variables in `src/index.css` for styling. Use glassmorphic `.glass-panel` designs for premium cards.
* **Semantic HTML**: Use proper tags (`<section>`, `<article>`, `<header>`, `<footer>`) instead of generic nested `<div>` blocks.
* **TypeScript**: Never use `any`. Always fully type prop arguments, contexts, and hook states.
