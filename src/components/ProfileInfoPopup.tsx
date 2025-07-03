
import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

interface ProfileInfoPopupProps {
  isVisible: boolean;
  onClose: () => void;
  userProfile: any;
}

const ProfileInfoPopup: React.FC<ProfileInfoPopupProps> = ({ isVisible, onClose, userProfile }) => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const popup = document.getElementById('profile-info-popup');
      if (popup && !popup.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, onClose]);

  if (!isVisible || !currentUser) return null;

  return (
    <div 
      id="profile-info-popup"
      className="fixed top-20 right-4 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50 min-w-[280px] animate-fade-in md:hidden"
    >
      <div className="text-sm">
        <div className="font-medium text-gray-900 mb-1">
          Email: {currentUser.email || 'snsnarayanachodisetti@gmail.com'}
        </div>
        <div className="text-gray-500">
          Join Date: Joined 29/06/2025
        </div>
      </div>
      <div className="absolute top-2 right-0 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white transform -translate-y-full"></div>
    </div>
  );
};

export default ProfileInfoPopup;
