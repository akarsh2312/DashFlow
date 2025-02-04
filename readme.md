# DashFlow

DashFlow is a modern, feature-rich dashboard application built with React, TypeScript, and Redux. It combines powerful data visualization, user management, and interactive features in a beautiful, responsive interface.

![DashFlow Dashboard]

## Features

- 📊 **Interactive Dashboard**
  - Real-time counter visualization
  - User statistics
  - Trend analysis with dynamic charts
  
- 🔐 **User Authentication**
  - Secure login system
  - Protected routes
  - User session management
  
- 📝 **Rich Text Editor**
  - Full-featured text editing
  - Real-time preview
  - Format controls
  
- 👥 **User Management**
  - User profile creation
  - Data persistence
  - Form validation
  
- 🎨 **Modern UI/UX**
  - Responsive design
  - Smooth animations
  - Dark/light mode support

## Tech Stack

- React 18
- TypeScript
- Redux Toolkit
- React Router
- Chakra UI
- React Spring
- Recharts
- TipTap Editor
- Vite

## Prerequisites

Before running the project, make sure you have the following installed:
- Node.js (v16 or higher)
- npm (v7 or higher)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dashflow.git
   cd dashflow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```
5. Enter any dummy email id and password to login.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/        # React components
├── store/            # Redux store and slices
├── types/            # TypeScript types
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

## Authentication

For development purposes, the application uses mock authentication:
- Any valid email format will work
- Any password will be accepted
- User data is stored in Redux state

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
