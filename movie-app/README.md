# Star Wars Movie Application

A modern, responsive React application that displays Star Wars movies with detailed information, built with Redux Toolkit, TypeScript, and Tailwind CSS.

## 🌟 Features

### Core Functionality
- **Movie List**: Display all Star Wars movies in a sortable table
- **Movie Details**: Comprehensive view of individual movies with character and planet information
- **Sortable Columns**: Sort by Episode, Title, Release Date, and Director
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### Technical Features
- **Redux State Management**: Centralized state management with Redux Toolkit
- **TypeScript**: Full type safety throughout the application
- **Error Handling**: Comprehensive error boundaries and user-friendly error messages
- **Loading States**: Beautiful loading animations and spinners
- **API Integration**: Robust integration with the Star Wars API
- **Containerization**: Docker support for easy deployment

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ErrorBoundary.tsx
│   ├── LoadingSpinner.tsx
│   ├── MovieDetail.tsx
│   ├── MovieList.tsx
│   └── SortableTable.tsx
├── services/           # API and external service integrations
│   └── api.ts
├── store/             # Redux store configuration
│   ├── movieSlice.ts
│   └── store.ts
├── types/             # TypeScript type definitions
│   └── movie.ts
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind CSS
```

## 🎨 Design Choices & Architecture

### 1. **Project Structure and Packaging**
- **Modular Architecture**: Clear separation of concerns with dedicated folders for components, services, store, and types
- **Component-Based Design**: Reusable components that can be easily tested and maintained
- **Type Safety**: Comprehensive TypeScript interfaces for all data structures
- **Modern Build Tools**: Vite for fast development and optimized production builds

### 2. **Containerization**
- **Multi-stage Docker Build**: Optimized production image with nginx serving static files
- **Security Headers**: Comprehensive security headers in nginx configuration
- **Gzip Compression**: Optimized file serving with compression
- **Cache Strategy**: Proper caching for static assets

### 3. **Code Organization**
- **Redux Toolkit**: Modern Redux with simplified boilerplate and async thunks
- **Service Layer**: Centralized API calls with proper error handling
- **Custom Hooks**: Reusable logic for common operations
- **Constants**: Centralized configuration and constants

### 4. **Error Handling**
- **Error Boundaries**: React error boundaries for graceful error handling
- **API Error Handling**: Comprehensive error handling for network requests
- **User-Friendly Messages**: Clear, actionable error messages
- **Retry Mechanisms**: Ability to retry failed operations

### 5. **Reusable Components**
- **SortableTable**: Generic table component with sorting capabilities
- **LoadingSpinner**: Customizable loading component with animations
- **ErrorBoundary**: Reusable error boundary with fallback UI
- **Consistent Styling**: Tailwind CSS utility classes for consistent design

### 6. **Code Quality**
- **TypeScript**: Full type safety and better developer experience
- **ESLint**: Code quality enforcement
- **Consistent Naming**: Clear, descriptive variable and function names
- **Documentation**: Comprehensive JSDoc comments

### 7. **Front-end Flare**
- **Modern UI**: Clean, modern design with gradients and shadows
- **Animations**: Smooth transitions and loading animations
- **Icons**: React Icons for consistent iconography
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd star-wars-movie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Docker Deployment

1. **Build the Docker image**
   ```bash
   npm run docker:build
   ```

2. **Run the container**
   ```bash
   npm run docker:run
   ```

3. **Access the application**
   Navigate to `http://localhost:3000`

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run Docker container

## 🔧 Configuration

### Environment Variables
The application uses the Star Wars API at `https://swapi.info/api`. No API keys are required.

### Tailwind CSS
Custom Tailwind configuration with:
- Custom color palette
- Responsive breakpoints
- Custom animations
- Utility classes

## 🧪 Testing

The application is structured to be easily testable:
- Component isolation
- Redux store testing
- API service mocking
- Error boundary testing

## 📊 Performance Optimizations

- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Optimized static assets
- **Caching**: Proper HTTP caching headers
- **Bundle Optimization**: Tree shaking and minification

## 🔒 Security Features

- **Content Security Policy**: Comprehensive CSP headers
- **XSS Protection**: Built-in XSS protection
- **HTTPS Only**: Secure cookie settings
- **Input Validation**: TypeScript type checking

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📈 Future Enhancements

- **Pagination**: For large datasets
- **Search Functionality**: Filter movies by title or director
- **Favorites**: Save favorite movies
- **Offline Support**: Service worker for offline functionality
- **Dark Mode**: Toggle between light and dark themes
- **Internationalization**: Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Star Wars API](https://swapi.info/) for providing the data
- [React](https://reactjs.org/) for the UI framework
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for the build tool

---

**Note**: This application demonstrates modern React development practices with a focus on user experience, performance, and maintainability. The design choices reflect industry best practices and showcase the developer's understanding of scalable front-end architecture.
