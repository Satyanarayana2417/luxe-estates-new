
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyImageGalleryProps {
  images: string[];
  title: string;
}

const PropertyImageGallery: React.FC<PropertyImageGalleryProps> = ({ images, title }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Get valid images with fallback
  const getValidImages = () => {
    const defaultImage = 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=500';
    
    if (!images || !Array.isArray(images) || images.length === 0) {
      return [defaultImage];
    }
    
    const validImages = images.filter(img => {
      if (!img || typeof img !== 'string' || img.trim() === '') return false;
      if (img.startsWith('blob:')) return false;
      return img.startsWith('data:image/') || img.startsWith('https://');
    });
    
    return validImages.length > 0 ? validImages : [defaultImage];
  };

  const validImages = getValidImages();

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % validImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="space-y-3">
      {/* Main Image - Reduced height for better proportion */}
      <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-gray-100 group cursor-pointer">
        <img
          src={validImages[selectedImageIndex]}
          alt={`${title} - Main image`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onClick={() => openLightbox(selectedImageIndex)}
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=500';
          }}
        />
        
        {/* Navigation Arrows */}
        {validImages.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/40"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/40"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </>
        )}

        {/* View Full Gallery Button */}
        <button
          onClick={() => openLightbox(selectedImageIndex)}
          className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Maximize2 className="w-3 h-3" />
          Gallery
        </button>

        {/* Image Counter */}
        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs">
          {selectedImageIndex + 1} / {validImages.length}
        </div>
      </div>

      {/* Compact Thumbnail Strip */}
      {validImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {validImages.slice(0, 6).map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                index === selectedImageIndex 
                  ? 'border-blue-500 ring-1 ring-blue-200' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <img
                src={image}
                alt={`${title} - Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=500';
                }}
              />
            </button>
          ))}
          {validImages.length > 6 && (
            <button
              onClick={() => openLightbox(0)}
              className="flex-shrink-0 w-16 h-12 rounded-md bg-gray-100 border-2 border-gray-200 hover:border-blue-300 flex items-center justify-center text-gray-600 text-xs"
            >
              +{validImages.length - 6}
            </button>
          )}
        </div>
      )}

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            <img
              src={validImages[selectedImageIndex]}
              alt={`${title} - Full size`}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=500';
              }}
            />
            
            {/* Close Button */}
            <Button
              onClick={closeLightbox}
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/40"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation in Lightbox */}
            {validImages.length > 1 && (
              <>
                <Button
                  onClick={prevImage}
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/40"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  onClick={nextImage}
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/40"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </>
            )}

            {/* Image Counter in Lightbox */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm">
              {selectedImageIndex + 1} of {validImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyImageGallery;
