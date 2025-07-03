
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
      const heroSection = document.querySelector('#hero');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const searchInput = document.querySelector('input[placeholder*="location"]') as HTMLInputElement;
          if (searchInput) {
            searchInput.focus();
          }
        }, 500);
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const heroSection = document.querySelector('#hero');
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            const searchInput = document.querySelector('input[placeholder*="location"]') as HTMLInputElement;
            if (searchInput) {
              searchInput.focus();
            }
          }, 300);
        }
      }, 100);
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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 md:hidden">
      <div className="flex items-center justify-around py-2 px-4">
        <button
          onClick={handleHomeClick}
          className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 ${
            isActive('/') 
              ? 'text-red-600 bg-red-50' 
              : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
          }`}
        >
          <Home className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Home</span>
        </button>

        <button
          onClick={handleSearchClick}
          className="flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 text-gray-600 hover:text-red-600 hover:bg-gray-50"
        >
          <Search className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Search</span>
        </button>

        <button
          onClick={handleShortlistClick}
          className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 ${
            isActive('/shortlist') 
              ? 'text-red-600 bg-red-50' 
              : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
          }`}
        >
          <Heart className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Shortlist</span>
        </button>

        <button
          onClick={handleProfileClick}
          className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 ${
            isActive('/profile') 
              ? 'text-red-600 bg-red-50' 
              : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
          }`}
        >
          <User className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
