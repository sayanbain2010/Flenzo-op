# Overview

This is a full-stack web application built with Express.js and React that creates a landing page for "Flenzo," a Discord multipurpose bot. The application features a modern, responsive design showcasing the bot's capabilities including moderation, music streaming, games, utilities, and more. The project uses a monorepo structure with shared TypeScript schema definitions between the frontend and backend.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React and uses Vite as the build tool and development server. It implements a component-based architecture with:

- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming, supporting dark mode
- **Form Handling**: React Hook Form with Zod validation

The application follows a single-page application (SPA) pattern with smooth scrolling navigation and intersection observer-based animations for enhanced user experience.

## Backend Architecture
The backend uses Express.js with TypeScript and implements:

- **Storage Interface**: Abstract storage interface with in-memory implementation, designed to easily switch to database persistence
- **Route Organization**: Modular route registration system with API prefix structure
- **Development Setup**: Vite middleware integration for hot module replacement in development
- **Error Handling**: Centralized error handling middleware with structured error responses

## Data Storage Solution
Currently implements an in-memory storage system using Maps for user data. The storage interface is designed with database migration in mind:

- **Abstract Interface**: IStorage interface defines CRUD operations for easy backend switching
- **Schema Definition**: Shared Drizzle ORM schema with PostgreSQL configuration ready for production
- **Type Safety**: Full TypeScript integration with Zod validation for data integrity

## Styling and Theming
The application uses a sophisticated design system:

- **Design Tokens**: CSS custom properties for consistent theming
- **Component Variants**: Class Variance Authority for systematic component styling
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Dark Theme**: Built-in dark mode support with system preference detection

## Build and Deployment
The build system supports both development and production environments:

- **Development**: Vite dev server with HMR and Express middleware integration
- **Production**: Optimized builds with code splitting and static asset handling
- **Bundling**: ESBuild for server-side bundling with external package handling