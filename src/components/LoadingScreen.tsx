
import React, { useEffect } from 'react';

interface LoadingScreenProps {
  isVisible: boolean;
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible, onLoadingComplete }) => {
  useEffect(() => {
    if (!isVisible && onLoadingComplete) {
      // Trigger page shine sweep after loading screen disappears
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 100); // Small delay to ensure loading screen is fully hidden
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onLoadingComplete]);
  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8">
        {/* Logo Container - With Shine Sweep Animation */}
        <div className={`relative mb-8 mt-8 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-90 translate-y-8'
        }`}>
          {/* Subtle background pulse */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-blue-100/30 rounded-full animate-pulse opacity-60 flex items-center justify-center w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>
          
          {/* Logo with Shine Sweep Effect */}
          <div className="flex items-center justify-center ml-4 relative overflow-hidden">
            <img 
              src="https://i.ibb.co/qMWvqVpB/1000130460-removebg-preview.webp"
              alt="Luxe Real Estates Logo"
              className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px] object-contain relative z-10 animate-gentle-float logo-shine"
            />
            {/* Shine Sweep Overlay */}
            <div className="absolute inset-0 z-20 shine-sweep"></div>
          </div>
        </div>

        {/* Brand Name - Increased Spacing */}
        <div className={`text-center transition-all duration-1000 ease-out delay-300 ${
          isVisible 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4'
        }`}>
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 tracking-wide font-inter mb-3">
            
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
