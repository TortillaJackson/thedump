
import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'center';
  className?: string;
}

export const ScrollAnimation = ({ children, direction = 'center', className = '' }: ScrollAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'left':
          return 'opacity-0 transform -translate-x-12';
        case 'right':
          return 'opacity-0 transform translate-x-12';
        default:
          return 'opacity-0 transform translate-y-8';
      }
    }
    return 'opacity-100 transform translate-x-0 translate-y-0';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};
