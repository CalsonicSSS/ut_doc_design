import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { findParentIds } from '../utils';
import { NavItem, sideBarStructure } from './SideBarStructure';

export default function DocumentationSidebar({ setIsMobileMenuOpen }: { setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [activeParents, setActiveParents] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started', 'main-content', 'others']);
  const [activeNavItem, setActiveNavItem] = useState<string>('introduction');

  const toggleExpanded = (id: string) => {
    setExpandedSections((prevIds) => (prevIds.includes(id) ? prevIds.filter((i) => i !== id) : [...prevIds, id]));
  };

  useEffect(() => {
    // Create intersection observer with options
    const observerOptions = {
      root: null, // use viewport
      rootMargin: '-10% 0px -80% 0px', // Adjust these values to control when sections are considered "active"
      threshold: 0, // trigger as soon as even 1px is visible
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;

          // Find which section this ID belongs to
          let foundInSection = false;
          for (const section of sideBarStructure) {
            const isInSection = section.sectionItems.some((item) => {
              if (item.id === id) {
                foundInSection = true;
                return true;
              }
              if (item.subItems?.some((subItem) => subItem.id === id)) {
                foundInSection = true;
                return true;
              }
              return false;
            });

            if (isInSection && !expandedSections.includes(section.id)) {
              setExpandedSections((prev) => [...prev, section.id]);
            }
          }

          if (foundInSection) {
            setActiveNavItem(id);
            const parents = findParentIds(sideBarStructure, id);
            if (parents.length > 0) {
              setActiveParents(parents);
              // Expand all parent sections and items
              setExpandedSections((prev) => {
                const newExpanded = [...prev];
                parents.forEach((parentId) => {
                  if (!newExpanded.includes(parentId)) {
                    newExpanded.push(parentId);
                  }
                });
                return newExpanded;
              });
            } else {
              setActiveParents([]);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [expandedSections]); // Add expandedSections as dependency

  const handleNavItemClick = (item: NavItem) => {
    setActiveNavItem(item.id);

    // Find and set all parent IDs
    const parents = findParentIds(sideBarStructure, item.id);
    if (parents.length > 0) {
      setActiveParents(parents);
      // Ensure all parent sections are expanded
      setExpandedSections((prev) => {
        const newExpanded = [...prev];
        parents.forEach((parentId) => {
          if (!newExpanded.includes(parentId)) {
            newExpanded.push(parentId);
          }
        });
        return newExpanded;
      });
    } else {
      setActiveParents([]);
    }

    if (!item.subItems) {
      setIsMobileMenuOpen(false);
      // Smooth scroll to the section
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const renderSectionItems = (items: NavItem[], indentationLevel = 1) => {
    return items.map((item) => (
      <div key={item.id} className='relative'>
        <button
          className={`flex items-center py-2 mt-1 px-4 text-start
            ${item.subItems ? 'ms-6' : 'ms-12'}
            ${activeNavItem === item.id || activeParents.includes(item.id) ? 'text-[#63B1E5]' : 'text-[#454545]'}
            ${indentationLevel === 1 ? 'doc-sidebar-nav-item' : 'doc-sidebar-nav-sub-item'}`}
          onClick={() => {
            if (item.subItems) {
              toggleExpanded(item.id);
            }
            handleNavItemClick(item);
          }}
        >
          {item.subItems && <span className='mr-2'>{expandedSections.includes(item.id) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}</span>}
          {item.parentId && <div className='absolute left-10 w-[7px] h-[7px] rounded-full bg-[#A6A6A6]' />}
          {item.label}
        </button>

        {item.subItems && expandedSections.includes(item.id) && <div className='ms-7 relative'>{renderSectionItems(item.subItems, indentationLevel + 1)}</div>}
      </div>
    ));
  };

  return sideBarStructure.map((section) => (
    <div key={section.id} className='mb-6 lg:ms-20'>
      <button onClick={() => toggleExpanded(section.id)} className='flex items-center w-full py-2 px-4 doc-sidebar-nav-section'>
        <span className='mr-2'>{expandedSections.includes(section.id) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}</span>
        {section.sectionLabel}
      </button>

      {expandedSections.includes(section.id) && <div className='mt-2'>{renderSectionItems(section.sectionItems)}</div>}
    </div>
  ));
}
