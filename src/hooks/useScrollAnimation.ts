import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) {
                setHasTriggered(true);
              }
            }, delay);
          } else {
            setIsVisible(true);
            if (triggerOnce) {
              setHasTriggered(true);
            }
          }
        } else if (!triggerOnce && !hasTriggered) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasTriggered]);

  return { ref, isVisible };
};

// Utility function to add scroll animation classes
export const addScrollAnimationClass = (element: HTMLElement | null, animationClass: string) => {
  if (!element) return;
  
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('animate');
        observer.unobserve(element);
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  observer.observe(element);
};

// Utility function to initialize scroll animations on mount
export const initializeScrollAnimations = () => {
  const elements = document.querySelectorAll<HTMLElement>('[data-scroll-animation]');
  
  elements.forEach((element) => {
    const animationType = element.getAttribute('data-scroll-animation');
    if (animationType) {
      element.classList.add(animationType);
      addScrollAnimationClass(element, animationType);
    }
  });
};

// Custom hook for staggered animations
export const useStaggeredAnimation = <T extends HTMLElement = HTMLDivElement>(count: number, delay: number = 100) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;
          const interval = setInterval(() => {
            if (current < count) {
              setVisibleCount(current + 1);
              current++;
            } else {
              clearInterval(interval);
            }
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [count, delay]);

  return { ref, visibleCount };
};
