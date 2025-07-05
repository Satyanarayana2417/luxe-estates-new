
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, Heart, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useIsMobile } from '@/hooks/use-mobile';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();
  const isMobile = useIsMobile();

  // Only show on mobile
  if (!isMobile) return null;

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      const heroSection = document.querySelector('#hero');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
    }
  };

  const handleSearchClick = () => {
    if (location.pathname === '/') {
      // Already on home page, scroll to hero section and focus search input
      const heroSection = document.querySelector('#hero');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          // Target the mobile search input first (since this is mobile navigation)
          const mobileSearchInput = document.getElementById('search-anything-input-mobile') as HTMLInputElement;
          const desktopSearchInput = document.getElementById('search-anything-input') as HTMLInputElement;
          
          // Use mobile input if available, otherwise fallback to desktop
          const searchInput = mobileSearchInput || desktopSearchInput;
          
          if (searchInput) {
            searchInput.focus();
            searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Trigger a click event to ensure any click handlers are fired
            searchInput.click();
          } else {
            // Fallback using placeholder text
            const fallbackInput = document.querySelector('input[placeholder*="Enter anything related to properties"]') as HTMLInputElement;
            if (fallbackInput) {
              fallbackInput.focus();
              fallbackInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
              fallbackInput.click();
            }
          }
        }, 800);
      }
    } else {
      // Navigate to home page first
      navigate('/');
      setTimeout(() => {
        const heroSection = document.querySelector('#hero');
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            // Target the mobile search input first (since this is mobile navigation)
            const mobileSearchInput = document.getElementById('search-anything-input-mobile') as HTMLInputElement;
            const desktopSearchInput = document.getElementById('search-anything-input') as HTMLInputElement;
            
            // Use mobile input if available, otherwise fallback to desktop
            const searchInput = mobileSearchInput || desktopSearchInput;
            
            if (searchInput) {
              searchInput.focus();
              searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
              // Trigger a click event to ensure any click handlers are fired
              searchInput.click();
            } else {
              // Fallback using placeholder text
              const fallbackInput = document.querySelector('input[placeholder*="Enter anything related to properties"]') as HTMLInputElement;
              if (fallbackInput) {
                fallbackInput.focus();
                fallbackInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                fallbackInput.click();
              }
            }
          }, 800);
        }
      }, 300);
    }
  };

  const handleShortlistClick = () => {
    if (currentUser) {
      navigate('/shortlist');
      // Ensure page scrolls to top after navigation
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    } else {
      navigate('/login');
    }
  };

  const handleProfileClick = () => {
    if (currentUser) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg z-40 md:hidden">
      <div className="flex items-center justify-around py-2 px-4">
        <button
          onClick={handleHomeClick}
          className={`flex flex-col items-center justify-center p-2 rounded-lg btn-mobile transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation ${
            isActive('/') 
              ? 'text-red-600 bg-red-50 nav-icon-active scale-105' 
              : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
          }`}
          style={{ touchAction: 'manipulation' }}
        >
          <Home className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Home</span>
        </button>

        <button
          onClick={handleSearchClick}
          className="flex flex-col items-center justify-center p-2 rounded-lg btn-mobile transition-all duration-300 transform hover:scale-105 active:scale-95 text-gray-600 hover:text-red-600 hover:bg-gray-50 pulse-glow touch-manipulation"
          style={{ touchAction: 'manipulation' }}
        >
          <Search className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Search</span>
        </button>

        <button
          onClick={handleShortlistClick}
          className={`flex flex-col items-center justify-center p-2 rounded-lg btn-mobile transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation ${
            isActive('/shortlist') 
              ? 'text-red-600 bg-red-50 nav-icon-active scale-105' 
              : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
          }`}
          style={{ touchAction: 'manipulation' }}
        >
          <Heart className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Shortlist</span>
        </button>

        <button
          onClick={handleProfileClick}
          className={`flex flex-col items-center justify-center p-2 rounded-lg btn-mobile transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation ${
            isActive('/profile') 
              ? 'text-red-600 bg-red-50 nav-icon-active scale-105' 
              : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
          }`}
          style={{ touchAction: 'manipulation' }}
        >
          <User className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
