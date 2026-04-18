"use client";
import { useEffect, useState } from "react";

export function useInView(options = {}) {
  const [ref, setRef] = useState(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.once) observer.unobserve(ref);
        } else if (!options.once) setIsInView(false);
      },
      { threshold: options.threshold || 0.1, rootMargin: options.margin || "-50px" }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options.once, options.threshold, options.margin]);
  
  return [setRef, isInView];
}