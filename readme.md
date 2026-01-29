## Frontend Assessment Submission
This repository contains my submission for the frontend assessment.  
The project demonstrates component structure, responsive UI patterns, and reusable styling using Vue.js.

---

## Live Demo

- **exercise1**: https://vinhtran-8ec.pages.dev/exercise1
- **exercise2**: https://vinhtran-8ec.pages.dev/exercise2

---

## Exercises Overview

### Exercise 1

A responsive, content-focused page implementation featuring a hero banner and card-based layout.

**Features:**
- ✅ Responsive layout for desktop and mobile
- ✅ Structured SASS/SCSS architecture
- ✅ BEM naming convention for custom styles
- ✅ Reusable UI components
- ✅ Subtle entrance animations for improved UX

---

### Exercise 2

Dynamic content rendering with responsive behavior using a shared data source.

**Features:**
- ✅ Tabs interface on desktop
- ✅ Accordion interface on mobile
- ✅ Single active tab/accordion at a time
- ✅ First item opens on initial load
- ✅ Toggle behavior (close when active item is selected)
- ✅ Smooth animations and transitions

---

## Installation & Setup

### Prerequisites
- Node.js 20.19+ or 22.12+
- npm or yarn

---

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

### Tech Stack

- Framework: Vue.js 3
- Routing: Vue Router
- Styling: Tailwind CSS + SCSS (BEM methodology)
- Build Tool: Vite
- Deployment: Cloudflare Pages
---

### Key Features

- Responsive Design: Mobile-first approach with breakpoint optimization
- Component Architecture: Modular, reusable Vue components
- Smooth Animations: CSS transitions and Vue transitions
- Accessibility: Semantic HTML and keyboard navigation

---

### Bonus Point

**Question:** Why `('b' + 'a' + + 'a' + 'a').toLowerCase()` results in `"banana"`

**Answer:** This is a classic example of JavaScript type coercion:

    `'b' + 'a'` -> `'ba'` (string concatenation)
    `+ 'a'` -> `NaN` (unary plus attempts to convert 'a' to a number)
    `'ba' + NaN` -> `'baNaN'` (NaN is converted to string 'NaN')
    `'baNaN' + 'a'` -> `'baNaNa'` (string concatenation)
    `'baNaNa'.toLowerCase()` -> `'banana'` (converts to lowercase)

The key point is the unary plus operator (+), which forces numeric conversion and results in `NaN`.