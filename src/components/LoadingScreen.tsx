
import React from 'react';

interface LoadingScreenProps {
  isVisible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8">
        {/* Logo Container - Increased Size */}
        <div className={`relative mb-8 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-90 translate-y-8'
        }`}>
          {/* Subtle background pulse */}
          <div className="absolute inset-0 -m-12 bg-gradient-to-r from-purple-100/30 to-blue-100/30 rounded-full animate-pulse opacity-60"></div>
          
          {/* Logo - Significantly Larger */}
          <img 
            src="https://i.ibb.co/rf1FXcgd/IMG-20250705-105006-1.webp"
            alt="Luxe Real Estates Logo"
            className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px] object-contain relative z-10 animate-gentle-float"
            onError={(e) => {
              // Fallback to a default image if logo fails to load
              const target = e.target as HTMLImageElement;
              target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiByeD0iMjAiIGZpbGw9InVybCgjZ3JhZGllbnQwXzEpIi8+CjxwYXRoIGQ9Ik01MCA1MEgxNTBWMTUwSDUwVjUwWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Ik03MCA3MEgxMzBWMTMwSDcwVjcwWiIgZmlsbD0id2hpdGUiLz4KPHRleHQgeD0iMTAwIiB5PSIxNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkx1eGU8L3RleHQ+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50MF8xIiB4MT0iMCIgeTE9IjAiIHgyPSIyMDAiIHkyPSIyMDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzgzNTVGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0RjQ2RTUiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K";
            }}
          />
        </div>

        {/* Brand Name - Increased Spacing */}
        <div className={`text-center transition-all duration-1000 ease-out delay-300 ${
          isVisible 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4'
        }`}>
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 tracking-wide font-inter mb-3">
            Luxe Real Estates
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto animate-gentle-pulse"></div>
        </div>

        {/* Loading indicator dots - Increased Spacing */}
        <div className={`flex items-center justify-center mt-10 space-x-2 transition-all duration-1000 delay-500 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms', animationDuration: '1.4s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '200ms', animationDuration: '1.4s' }}></div>
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '400ms', animationDuration: '1.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
