"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __revealFallback?: ReturnType<typeof setTimeout>;
  }
}

/**
 * Drives reveal-on-enter for every [data-reveal] element.
 *
 * The pre-paint head script (layout.tsx) has already hidden the elements when
 * motion is allowed; here we reveal each as it intersects the viewport. Elements
 * already in view fire on the observer's initial callback, so the load entrance
 * and the scroll reveals share one code path. See index.css for the SSR-safe
 * contract.
 */
export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;

    // The page booted fine — cancel the "force-show everything" safety net.
    if (window.__revealFallback) {
      clearTimeout(window.__revealFallback);
      window.__revealFallback = undefined;
    }

    // Nothing was hidden (no-JS path passed, or reduced motion): nothing to do.
    if (!root.classList.contains("reveal-enabled")) return;

    if (!("IntersectionObserver" in window)) {
      root.classList.add("reveal-fallback");
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("reveal-in");
          obs.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );
    for (const el of elements) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return null;
}
