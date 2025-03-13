'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarSections = [
  { name: 'Getting Started', path: '/doc/getting-started' },
  { name: 'About this Resource', path: '/doc/about-this-resource' },
  { name: 'Main Contents', path: '/doc/main-contents' },
  { name: 'Resources Lists', path: '/doc/resources-list' },
  {
    name: 'Appendices',
    path: '/doc/glossary',
    subItems: [
      { name: 'Glossary', path: '/doc/glossary' },
      { name: 'Citation', path: '/doc/citation' },
    ],
  },
];

export default function DocSidebar() {
  const pathname = usePathname();

  return (
    <nav className='space-y-5'>
      {sidebarSections.map((section) => {
        const isMainActive = pathname === section.path || (section.subItems && section.subItems.some((subItem) => subItem.path === pathname));
        const hasSubItems = section.subItems && section.subItems.length > 0;

        return (
          <div key={section.path}>
            <Link href={section.path} className={`block px-5 py-[6px] doc-sidebar-item border-l-[6px] border-[#FD5045] ${isMainActive ? 'bg-[#D837371A] ' : ' hover:bg-gray-100'}`}>
              {section.name}
            </Link>

            {/* Render sub-items if they exist */}
            {hasSubItems && (
              <div className='mt-2 space-y-2'>
                {section.subItems.map((subItem) => {
                  const isSubActive = pathname === subItem.path;

                  return (
                    <Link key={subItem.path} href={subItem.path} className={`block ml-4 px-2 py-2 doc-sidebar-sub-item  ${isSubActive ? 'bg-[#D837371A]' : ' hover:bg-gray-100'}`}>
                      {subItem.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
