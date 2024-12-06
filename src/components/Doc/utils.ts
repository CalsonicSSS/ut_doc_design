import { NavItem, NavSection } from './Sidebar';

export const findParentIds = (sections: NavSection[], targetId: string, parentIds: string[] = []): string[] => {
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
