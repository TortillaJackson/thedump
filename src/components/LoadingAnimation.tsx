
import { useEffect, useState } from 'react';

export const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for images and components
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      <div className="relative">
        {/* Single minimalistic ring */}
        <div className="w-16 h-16 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
      </div>
    </div>
  );
};
