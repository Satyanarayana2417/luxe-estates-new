# Luxe Real Estates - Prime Vista Homes

A premium real estate web application built with React, TypeScript, and Firebase, featuring advanced UI interactivity and real-time data management.

## 🏗️ Built by SHIVA - Dream Team Services

## 🚀 Features

- **Modern UI/UX**: Advanced animations, hover effects, and responsive design
- **Real-time Data**: Firebase Firestore integration for live property updates
- **Authentication**: Secure user authentication with Firebase Auth
- **Property Management**: Complete CRUD operations for property listings
- **Image Upload**: Cloudinary integration for optimized image handling
- **Mobile-First**: Responsive design with touch-friendly interactions
- **Search & Filter**: Advanced property search and filtering capabilities
- **Admin Dashboard**: Comprehensive admin panel for property management

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Firebase (Auth, Firestore)
- **Build Tool**: Vite
- **UI Components**: Radix UI, Lucide React
- **Animations**: Custom CSS animations and transitions
- **State Management**: React Context, TanStack Query
- **Routing**: React Router v7
- **Forms**: React Hook Form with Zod validation

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd prime-vista-homes-58
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore
   - Update environment variables with your Firebase config

5. Start the development server:
```bash
npm run dev
```

## 🌐 Deployment

### Vercel Deployment

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

### Manual Deployment

1. Build for production:
```bash
npm run build
```

2. The `dist` folder contains the production build ready for deployment.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, inputs, etc.)
│   └── ...             # Feature-specific components
├── contexts/           # React contexts for state management
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── pages/              # Page components
└── ...
```

## 🔧 Configuration Files

- `vercel.json`: Vercel deployment configuration
- `vite.config.ts`: Vite build configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration

## 🎨 Styling

The application uses Tailwind CSS with custom components and animations:

- **Custom CSS Variables**: Defined in `src/index.css`
- **Component Styling**: Tailwind classes with custom utilities
- **Animations**: CSS animations for enhanced user experience
- **Responsive Design**: Mobile-first approach with breakpoint-specific styles

## 🔥 Firebase Configuration

The app uses Firebase for:
- **Authentication**: User registration and login
- **Firestore**: Property data storage and real-time updates
- **Security Rules**: Configured for secure data access

## 📱 Mobile Features

- Touch-friendly interactions
- Responsive navigation
- Optimized images and lazy loading
- Mobile-specific UI components

## 🚀 Performance Optimizations

- Code splitting with manual chunks
- Lazy loading of components
- Optimized bundle sizes
- Image optimization with Cloudinary

## 🔒 Security

- Firebase Security Rules
- Environment variable protection
- Input validation with Zod
- CORS configuration

## 📊 Analytics

Google Analytics integration for tracking user interactions and property views.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is proprietary software developed by SHIVA - Dream Team Services.

## 🆘 Support

For support and inquiries, contact the development team at Dream Team Services.

---

**Developed with ❤️ by SHIVA - Dream Team Services**
