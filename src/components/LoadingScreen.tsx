
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
            src="/lovable-uploads/c52c89e6-f227-419d-84fd-fc1b2490c5bf.png"
            alt="Luxe Real Estates Logo"
            className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px] object-contain relative z-10 animate-gentle-float"
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
