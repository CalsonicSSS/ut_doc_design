'use client';
import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import Introduction from '@/components/Doc/GettingStarted/Introduction';
import Acknowledgements from '@/components/Doc/GettingStarted/Acknowledgements';
import SuggestedCitation from '@/components/Doc/GettingStarted/SuggestedCitation';
import AboutThisResource from '@/components/Doc/GettingStarted/AboutThisResource';

interface NavItem {
  id: string;
  label: string;
  subItems?: NavItem[];
  parentId?: string; // Added to track parent relationship
}

interface NavSection {
  id: string;
  sectionLabel: string;
  sectionItems: NavItem[];
}

// Helper function to find parent IDs
const findParentIds = (items: NavItem[], targetId: string, parentIds: string[] = []): string[] => {
  for (const item of items) {
    if (item.id === targetId) {
      return parentIds;
    }
    if (item.subItems) {
      const found = findParentIds(item.subItems, targetId, [...parentIds, item.id]);
      if (found.length > 0) return found;
    }
  }
  return [];
};

const sideBarStructure: NavSection[] = [
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
];

export default function DocumentationPage() {
  const [activeNavItem, setActiveNavItem] = useState<string>('introduction');
  const [activeParents, setActiveParents] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleExpanded = (id: string) => {
    setExpandedSections((prevIds) => (prevIds.includes(id) ? prevIds.filter((i) => i !== id) : [...prevIds, id]));
  };

  const handleNavItemClick = (item: NavItem) => {
    setActiveNavItem(item.id);
    if (item.parentId) {
      setActiveParents([item.parentId]);
    } else {
      setActiveParents([]);
    }
    setIsMobileMenuOpen(false); // Close mobile menu when clicking a nav item
    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveNavItem(id);
            const parents = findParentIds(sideBarStructure[0].sectionItems, id);
            setActiveParents(parents);
          }
        });
      },
      { threshold: 0.8 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const renderSectionItems = (items: NavItem[], indentationLevel = 1) => {
    return items.map((item) => (
      <div key={item.id} className='relative'>
        <button
          onClick={() => {
            if (item.subItems) {
              toggleExpanded(item.id);
            }
            handleNavItemClick(item);
          }}
          className={`flex items-center py-2 mt-1 px-4 
            ${item.subItems ? 'ms-6' : 'ms-12'}
            ${activeNavItem === item.id || activeParents.includes(item.id) ? 'text-[#63B1E5]' : 'text-[#454545]'}
            ${indentationLevel === 1 ? 'doc-sidebar-nav-item' : 'doc-sidebar-nav-sub-item'}`}
        >
          {item.subItems && <span className='mr-2'>{expandedSections.includes(item.id) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}</span>}
          {/* Add dot for nested items */}
          {item.parentId && <div className='absolute left-10 w-[7px] h-[7px] rounded-full bg-current' />}
          {item.label}
        </button>

        {item.subItems && expandedSections.includes(item.id) && (
          <div className='ms-7 relative'>
            {/* Vertical line connecting parent to children */}
            <div className='absolute left-[42px] w-[2px] top-[10px] h-[70px] bg-gray-300' />
            {renderSectionItems(item.subItems, indentationLevel + 1)}
          </div>
        )}
      </div>
    ));
  };

  const renderSidebarBySection = () => {
    return sideBarStructure.map((section) => (
      <div key={section.id} className='mb-6 lg:ms-20 '>
        <button onClick={() => toggleExpanded(section.id)} className='flex items-center w-full py-2 px-4 doc-sidebar-nav-section'>
          <span className='mr-2'>{expandedSections.includes(section.id) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}</span>
          {section.sectionLabel}
        </button>

        {expandedSections.includes(section.id) && <div className='mt-2'>{renderSectionItems(section.sectionItems)}</div>}
      </div>
    ));
  };

  return (
    <div className='flex flex-col lg:flex-row relative'>
      {/* Mobile Menu Button */}
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='lg:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-md shadow-md'>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:static
        top-0 left-0
        h-full lg:w-[30%] md:w-[50%] sm:w-[65%]
        bg-white
        overflow-y-auto overflow-x-hidden
        transition-transform duration-300
        pt-20
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        z-40 lg:z-auto
      `}
      >
        {renderSidebarBySection()}
      </aside>

      {/* Main Content */}
      <main className='w-full overflow-y-auto lg:ms-20 px-4 lg:px-0 py-14 h-screen'>
        <div className='max-w-[800px] border-t-2 pb-10'>
          <Introduction />
          <Acknowledgements />
          <SuggestedCitation />
          <AboutThisResource />
        </div>
      </main>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className='lg:hidden fixed inset-0 bg-black/50 z-30' onClick={() => setIsMobileMenuOpen(false)} />}
    </div>
  );
}
