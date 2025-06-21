
import { useEffect, useRef } from "react";

export const useCaseStudyAnimation = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const direction = index % 2 === 0 ? 'from-left' : 'from-right';
            entry.target.classList.add('animate-slide-in', direction);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) {
      cardsRef.current[index] = el;
    }
  };

  return { setCardRef };
};
