# Testing Suite 🧪

A high-fidelity, interactive Next.js application designed to showcase enterprise-level **Automated Testing** methodologies using **Jest** and **React Testing Library**.

## Link to vercel 

 " https://testing-suite-delta.vercel.app/"

## ✨ Features
- Comprehensive Unit & Integration Testing setup.
- 100% Code Coverage across components.
- Modern React 19 & Next.js 16 architecture.
- Styled elegantly with Tailwind CSS v4.
- API Mocking capabilities for offline and robust testing.

## Tech Stack
- Next.js 16
- Tailwind CSS v4
- Jest + React Testing Library
- TypeScript + React 19

## 🚀 Getting Started

### Prerequisites
    install Node.js (v20+) 

### Installation
1. Clone the repository.
   ```bash
   git clone "https://github.com/GarimaAvasthi/Testing-Suite.git"
   ```
2. Install the dependencies.
   ```bash
   npm install
   ```

### Running the Application
To start the development server, run:
```bash
npm run dev
```
Then, open [http://localhost:3000]in your browser.

### Running the Test Suite

```bash
npm run test:coverage
```
*Note: Tests run in-band (`--runInBand`) by default to prevent worker spawn issues on certain environments (e.g., Windows).*

## 🏗 Testing Architecture
This project demonstrates various testing methodologies and scenarios:

- **Static Rendering:** Ensures components render without crashing based on specific props. 
- **Interaction Testing:** Validates internal React state changes triggered by user interactions using `@testing-library/user-event`. 
- **Mock APIs:** Simulates HTTP requests to test data fetching components without relying on live endpoints, utilizing `jest.fn()`. 
  

## 🔗 APIs Used
- [JSONPlaceholder Users API](https://jsonplaceholder.typicode.com/users) - For mock user data.
- [DiceBear Avatars API](https://api.dicebear.com/9.x/avataaars/svg) - For generating dynamic user avatars.

---
*Built with ❤️ using Next.js, Tailwind CSS, Jest, and React Testing Library.*
