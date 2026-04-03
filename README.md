# Testing Suite

_ **Live App Demo**: https://testing-suite-delta.vercel.app/
- **Live Storybook**: https://storybook-static-mauve-seven.vercel.app/?path=/story/components-button--playground 

A high-fidelity, interactive Next.js app that doubles as a component design system. It showcases premium UI components (Button, Input, Card), documents them in Storybook, and includes a full automated testing setup with Jest + React Testing Library.

## What the app does
- **Landing / Playground**: A single-page UI that previews components in a tabbed playground.
- **Design System**: Components are built as reusable, typed React components.
- **Storybook**: Component stories provide interactive documentation and visual testing.
- **Testing**: Unit and integration tests validate behavior and UI states.

## Tech stack
- **Next.js 15** with the App Router
- **React 19 + TypeScript**
- **Tailwind CSS v4** (global styles) + inline styles for component polish
- **Storybook 8.6** for component documentation
- **Jest + React Testing Library** for tests

## Project structure (high level)
- `app/` - Next.js app routes (main landing page)
- `src/components/` - UI components (Button, Input, Card)
- `src/globals.css` - global CSS + font
- `.storybook/` - Storybook configuration
- `__tests__/` (if present) - Jest tests

## Getting started
### Prerequisites
- Node.js 20+

### Install
```
npm install
```

### Run the app
```
npm run dev
```
Open `http://localhost:3000`

### Run Storybook
```
npm run storybook
```
Open `http://localhost:6006`

## Storybook Details & Checklist
- **Setup**: Storybook 9 is integrated with `@storybook/nextjs-vite` (`npx storybook@latest init`).
- **The Library**: Constructed premium "Stories" for our 3 core components: Button, Input, and Card.
- **The Goal**: View, interact, and test components independently in the isolated Storybook UI dashboard (`npm run storybook`) without running the main Next.js app.
- **Variants (Args)**: Components heavily utilize args to dictate variants, sizing, options, and logic live.
- **Button Story Toggle**: Switch dynamically between `Primary`, `Secondary`, and `Disabled` states directly via the Storybook control panel.
- **Dark/Light Mode**: Full semantic `.dark` class support. Preview Dark Mode precisely via Storybook's toolbar toggles (`@storybook/addon-themes`).
- **Deployment**: Configured to build a production static web application via `npm run build-storybook`.

### Run tests
```bash
npm run test:coverage
```

## Environment variables
To enable the Storybook button on the landing page, set:
```
NEXT_PUBLIC_STORYBOOK_URL=https://your-storybook-domain
```



## Button click behavior (FAQ)

- **Demo buttons** are presentational and not wired to backend logic.
- **Card buttons** call `onAction` and are currently used only to update the on-page status message.
- **Storybook buttons** are disabled unless `NEXT_PUBLIC_STORYBOOK_URL` is set.

