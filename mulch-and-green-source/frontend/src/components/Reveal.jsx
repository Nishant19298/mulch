import { useEffect } from "react";

/**
 * Reveals elements with `.reveal` class as they enter the viewport.
 * Mount once in the app root.
 */
export default function Reveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const refresh = () => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => observer.observe(el));
    };

    refresh();
    const interval = setInterval(refresh, 600);
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);
  return null;
}
