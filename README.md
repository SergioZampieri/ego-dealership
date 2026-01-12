# EGO Design - Toyota Models Challenge

## Description

 Web application showcasing part of the EGO frontend challenge. The application features a vehicle catalog with filtering and sorting features.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - With Server and Client Components
- **TypeScript** - Typing
- **CSS Modules** - Component-scoped styling

## Setup Instructions

### Prerequisites

- **Node.js** 20.9.0 or higher
- **npm** package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Deploy


## Project Structure

```
ego-challenge/
├── src/
│   ├── app/                            # Next.js App Router
│   │   ├── page.tsx                    # Home page (vehicle listing)
│   │   ├── layout.tsx                  # Root layout with Navigation & Footer
│   │   ├── globals.css                 # Global styles and CSS variables
│   │   ├── loading.tsx                 # Loading state UI
│   │   ├── error.tsx                   # Error state UI
│   │   └── models/
│   │       └── [id]/
│   │           └── page.tsx            # Dynamic vehicle detail pages
│   ├── components/
│   │   ├── Navigation/                 # Navigation bar with hamburger menu
│   │   ├── Footer/                     # Footer component
│   │   ├── VehicleCard/                # Vehicle card for catalog view
│   │   ├── FilterBar/                  # Category filters and sort dropdown
│   │   ├── VehiclesView/               # Main vehicle listing container
│   │   └── VehicleDetailView/          # Detail page components
│   │       ├── VehicleHero.tsx         # Hero section with image & info
│   │       ├── VehicleFeatures.tsx     # Horizontal scroll features
│   │       └── VehicleHighlights.tsx   # Alternating image highlights
│   ├── hooks/
│   │   └── useDropdown.ts              # Dropdown state management hook
│   ├── services/
│   │   └── api.ts                      # API for vehicle data
│   ├── types/
│   │   ├── vehicle.ts                  # Vehicle type definitions
│   │   └── filters.ts                  # Filter and sort types
│   ├── utils/
│   │   ├── filterUtils.ts              # Filter and sort logic
│   │   └── formatters.ts               # Price and date formatting
│   └── constants/
│       ├── config.ts                   # API configuration & dimensions
│       └── navigation.ts               # Navigation text constants
├── public/                             # Static assets
└── README.md                           # This file
```

## API Reference

The application consumes data from the EGO Design challenge API:

**Base URL**: `https://challenge.egodesign.dev/api/`

### Endpoints

- `GET /models/` - Retrieve all vehicle models
- `GET /models/{id}/` - Retrieve detailed information for a specific vehicle

## Implementation Details

### Filtering Logic
- **Todos**: Displays all vehicles
- **Autos**: Shows vehicles with segment "Sedan" or "Hatchback"
- **Pickups y Comerciales**: Shows vehicles with segment "Pickups y Comerciales"
- **SUVs y Crossovers**: Shows vehicles with segment "SUVs"

### Sorting Options
- **Nada**: Default API order (no sorting)
- **De menor a mayor precio**: Price ascending
- **De mayor a menor precio**: Price descending
- **Más nuevos primero**: Year descending (newest first)
- **Más viejos primero**: Year ascending (oldest first)

### Responsive Breakpoints
- **Mobile**: < 768px (1 column grid)
- **Tablet**: 768px - 1024px (2 column grid)
- **Desktop**: > 1024px (3 column grid)

## Design Reference

The UI design is based on the provided Figma mockups.

## Development Notes

- Server Components for data fetching
- Client Components for interactive features
- CSS Modules for scoped, maintainable styles
- TypeScript for type safety across the codebase
- Custom hooks for reusable logic
