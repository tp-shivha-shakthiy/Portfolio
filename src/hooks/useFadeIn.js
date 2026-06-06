import { useState, useEffect, useRef } from "react";

export function useFadeIn(delay = 0) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVis(true);
          ob.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return [
    ref,
    {
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : "translateY(24px)",
      transition: `opacity .6s ease ${delay}s, transform .6s ease ${delay}s`,
    },
  ];
}