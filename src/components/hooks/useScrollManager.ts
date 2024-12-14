import { useEffect } from 'react';
import { ScrollManager } from '../Doc/utils';

export function useScrollManager() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize intersection observer
    ScrollManager.initIntersectionObserver();

    // Handle back/forward browser navigation
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state;

      if (state?.current) {
        const element = document.getElementById(state.current);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (state.scrollPos !== undefined) {
          window.scrollTo({
            top: state.scrollPos,
            behavior: 'smooth',
          });
        }
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Handle initial hash if present
    if (window.location.hash) {
      const elementId = window.location.hash.slice(1);
      setTimeout(() => {
        ScrollManager.scrollToElement(elementId, false);
      }, 100);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
      ScrollManager.cleanup();
    };
  }, []);
}
