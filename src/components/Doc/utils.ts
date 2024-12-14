import { NavItem, NavSection } from './SideBar/SideBarStructure';

export const findParentIds = (sections: NavSection[], targetId: string): string[] => {
  // Helper function to search through items
  const searchItems = (items: NavItem[], targetId: string, parentIds: string[] = []): string[] => {
    for (const item of items) {
      if (item.id === targetId) {
        return parentIds;
      }
      if (item.subItems) {
        const found = searchItems(item.subItems, targetId, [...parentIds, item.id]);
        if (found.length > 0) return found;
      }
    }
    return [];
  };

  // Search through all sections
  for (const section of sections) {
    const found = searchItems(section.sectionItems, targetId);
    if (found.length > 0) return found;
  }

  return [];
};

// --------------------------------------------------------------------------------

type VisibilityCallback = (id: string) => void;

export class ScrollManager {
  private static lastScrollPosition: number = 0;
  private static currentVisibleElement: string | null = null;
  private static observer: IntersectionObserver | null = null;
  private static isInitialized: boolean = false;
  private static visibilityCallbacks: Set<VisibilityCallback> = new Set();

  static subscribeToVisibilityChanges(callback: VisibilityCallback) {
    this.visibilityCallbacks.add(callback);
    return () => this.visibilityCallbacks.delete(callback);
  }

  private static notifyVisibilityCallbacks(id: string) {
    this.visibilityCallbacks.forEach((callback) => callback(id));
  }

  static scrollToElement(elementId: string, shouldPushState: boolean = true) {
    if (typeof window === 'undefined') return;

    this.lastScrollPosition = window.scrollY;

    const element = document.getElementById(elementId);
    if (element) {
      if (shouldPushState) {
        const newUrl = `${window.location.pathname}${window.location.search}#${elementId}`;
        const state = {
          current: elementId,
          previous: this.currentVisibleElement,
          scrollPos: this.lastScrollPosition,
        };
        window.history.pushState(state, '', newUrl);
      }

      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  static initIntersectionObserver() {
    if (typeof window === 'undefined' || this.isInitialized) return;

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -80% 0px',
      threshold: [0, 0.1, 0.5, 1.0],
    };

    this.observer = new IntersectionObserver((entries) => {
      // Sort entries by intersection ratio in descending order
      const sortedEntries = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (sortedEntries.length > 0) {
        const mostVisible = sortedEntries[0];
        const id = mostVisible.target.id;

        // Only update if it's a different section
        if (id !== this.currentVisibleElement) {
          this.currentVisibleElement = id;

          // Update URL and history state
          const newUrl = `${window.location.pathname}${window.location.search}#${id}`;
          const state = {
            current: id,
            scrollPos: window.scrollY,
          };

          window.history.pushState(state, '', newUrl);
          this.notifyVisibilityCallbacks(id);
        }
      }
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => {
      if (this.observer && section.id) {
        this.observer.observe(section);
      }
    });

    this.isInitialized = true;
  }

  static cleanup() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.visibilityCallbacks.clear();
    this.isInitialized = false;
  }
}
