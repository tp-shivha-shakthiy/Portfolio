import { useState, useEffect, useRef } from "react";

const REDUCE_QUERY = "(prefers-reduced-motion: reduce)";

const getReducedMotion = () =>
  typeof window !== "undefined" && !!window.matchMedia?.(REDUCE_QUERY).matches;

// Tracks the OS/browser reduced-motion setting, including changes while the page is open
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(getReducedMotion);

  useEffect(() => {
    const mq = window.matchMedia?.(REDUCE_QUERY);
    if (!mq) return;
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function useFadeIn(delay = 0) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    // Reduced motion: no observer, no hidden state — content is always rendered in place
    if (reduced || seen) return;
    const el = ref.current;
    if (!el) return;

    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          ob.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    ob.observe(el);
    return () => ob.disconnect();
  }, [reduced, seen]);

  // With reduced motion, return no opacity/transform/transition at all, so visibility
  // never depends on an observer firing or an animation completing.
  if (reduced) return [ref, {}];

  return [
    ref,
    {
      opacity: seen ? 1 : 0,
      transform: seen ? "none" : "translateY(24px)",
      transition: `opacity .6s ease ${delay}s, transform .6s ease ${delay}s`,
    },
  ];
}
