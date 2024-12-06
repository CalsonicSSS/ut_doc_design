import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { findParentIds } from './utils';

export interface NavItem {
  id: string;
  label: string;
  subItems?: NavItem[];
  parentId?: string; // Added to track parent relationship
}

export interface NavSection {
  id: string;
  sectionLabel: string;
  sectionItems: NavItem[];
}

export const sideBarStructure: NavSection[] = [
  {
    id: 'getting-started',
    sectionLabel: 'GETTING STARTED',
    sectionItems: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'acknowledgements', label: 'Acknowledgements' },
      { id: 'suggested-citation', label: 'Suggested Citation' },
      {
        id: 'about-this-resource',
        label: 'About this Resource',
        subItems: [
          {
            id: 'purpose-of-this-resource',
            label: 'Purpose of this Resource',
            parentId: 'about-this-resource',
          },
          {
            id: 'using-this-resource',
            label: 'Using this Resource',
            parentId: 'about-this-resource',
          },
          {
            id: 'development-of-this-resource',
            label: 'Development of this Resource',
            parentId: 'about-this-resource',
          },
        ],
      },
    ],
  },
  {
    id: 'main-content',
    sectionLabel: 'Main Content',
    sectionItems: [
      {
        id: 'e1',
        label: 'Element 1 Organization Transition Policy',
        subItems: [
          {
            id: 'e1.1',
            label: '1.1 Integrated Youth Mental Health Transition...',
            parentId: 'e1',
          },
          {
            id: 'e1.2',
            label: '1.2 Organization- specific transition policy',
            parentId: 'e1',
          },
          {
            id: 'e1.3',
            label: '1.3 Create a developmentally appropriate ...',
            parentId: 'e1',
          },
          {
            id: 'e1.4',
            label: '1.4 Ensure staff have appropriate knowledge',
            parentId: 'e1',
          },
          {
            id: 'e1.5',
            label: '1.5 Determine responsibilities for each role',
            parentId: 'e1',
          },

          {
            id: 'e1.6',
            label: '1.6 Partner with the youth during all stages',
            parentId: 'e1',
          },
          {
            id: 'e1.7',
            label: '1.7 Evaluate the organization’s transition protocol',
            parentId: 'e1',
          },
        ],
      },
    ],
  },
];

export default function DocumentationSidebar({ setIsMobileMenuOpen }: { setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [activeParents, setActiveParents] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);
  const toggleExpanded = (id: string) => {
    setExpandedSections((prevIds) => (prevIds.includes(id) ? prevIds.filter((i) => i !== id) : [...prevIds, id]));
  };

  const [activeNavItem, setActiveNavItem] = useState<string>('introduction');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveNavItem(id);
            // Pass the entire sideBarStructure array
            const parents = findParentIds(sideBarStructure, id);
            if (parents.length > 0) {
              setActiveParents(parents);
              // Ensure parent sections are expanded
              setExpandedSections((prev) => {
                const parentSection = sideBarStructure.find((section) =>
                  section.sectionItems.some((item) => item.id === parents[0] || item.subItems?.some((subItem) => subItem.id === parents[0]))
                );
                if (parentSection && !prev.includes(parentSection.id)) {
                  return [...prev, parentSection.id];
                }
                return prev;
              });
            } else {
              setActiveParents([]);
            }
          }
        });
      },
      { threshold: 0.75 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavItemClick = (item: NavItem) => {
    setActiveNavItem(item.id);
    if (item.parentId) {
      setActiveParents([item.parentId]);
    } else {
      setActiveParents([]);
    }

    if (!item.subItems) {
      setIsMobileMenuOpen(false);
      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderSectionItems = (items: NavItem[], indentationLevel = 1) => {
    return items.map((item) => (
      <div key={item.id} className='relative'>
        <button
          className={`flex items-center py-2 mt-1 px-4  text-start
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
          {/* Add dot for nested items */}
          {item.parentId && <div className='absolute left-10 w-[7px] h-[7px] rounded-full bg-[#A6A6A6]' />}
          {item.label}
        </button>

        {item.subItems && expandedSections.includes(item.id) && (
          <div className='ms-7 relative'>
            {/* Vertical line connecting parent to children */}
            {/* <div className='absolute left-[42px] w-[2px] top-[10px] h-[70px] bg-gray-300' /> */}
            {renderSectionItems(item.subItems, indentationLevel + 1)}
          </div>
        )}
      </div>
    ));
  };

  return sideBarStructure.map((section) => (
    <div key={section.id} className='mb-6 lg:ms-20 '>
      <button onClick={() => toggleExpanded(section.id)} className='flex items-center w-full py-2 px-4 doc-sidebar-nav-section'>
        <span className='mr-2'>{expandedSections.includes(section.id) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}</span>
        {section.sectionLabel}
      </button>

      {expandedSections.includes(section.id) && <div className='mt-2'>{renderSectionItems(section.sectionItems)}</div>}
    </div>
  ));
}
