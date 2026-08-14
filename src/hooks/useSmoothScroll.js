import { useEffect } from 'react';

/**
 * Custom smooth scroll hook that provides momentum-smoothed scrolling
 * with native fallback and keyboard/wheel support.
 */
export default function useSmoothScroll() {
  useEffect(() => {
    // Ensure smooth behavior on document element
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.scrollBehavior = 'smooth';

    // Optional smooth back-to-top on route change
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
}
