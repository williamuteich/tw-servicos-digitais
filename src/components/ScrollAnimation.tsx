import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up" | "slide-in-left" | "slide-in-right" | "zoom-in";
  delay?: number;
  duration?: number;
  threshold?: number;
}

const ScrollAnimation = ({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
}: ScrollAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
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
  }, [threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in":
        return "animate-fade-in";
      case "fade-in-up":
        return "animate-fade-in-up";
      default:
        return "animate-fade-in-up";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        isVisible ? getAnimationClass() : "opacity-0 translate-y-4",
        className
      )}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
