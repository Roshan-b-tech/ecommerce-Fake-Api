import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ShoppingBag } from 'lucide-react';

interface LoadingTransitionProps {
  onComplete: () => void;
}

const LoadingTransition = ({ onComplete }: LoadingTransitionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set([textRef.current, iconRef.current], {
        opacity: 0,
        y: 50,
      });

      // Animation sequence
      const tl = gsap.timeline({
        onComplete: () => {
          // Keep the elements visible
          gsap.set([iconRef.current, textRef.current], {
            opacity: 1,
            y: 0,
          });
        },
      });

      tl.to(iconRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.4')
        .to([iconRef.current, textRef.current], {
          scale: 1.1,
          duration: 0.3,
          ease: 'power2.inOut',
        })
        .to([iconRef.current, textRef.current], {
          scale: 1,
          duration: 0.3,
          ease: 'power2.inOut',
        });

      // Add a subtle floating animation
      gsap.to([iconRef.current, textRef.current], {
        y: -10,
        duration: 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="text-center">
        <div
          ref={iconRef}
          className="mb-8 flex justify-center"
        >
          <ShoppingBag className="h-16 w-16 text-primary" />
        </div>
        <div
          ref={textRef}
          className="space-y-2"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Entering the Fashion Era
          </h2>
          <p className="text-lg text-gray-600">
            Welcome to your premium shopping experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingTransition; 