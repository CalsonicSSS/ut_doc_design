import React from 'react';
import Link from 'next/link';

interface SubSection {
  id: string;
  title: string;
}

interface ElementSidebarProps {
  subsections: SubSection[];
  activeSubsection: string;
  onSubsectionChange: (id: string) => void;
}

export default function ElementSidebar({ subsections, activeSubsection, onSubsectionChange }: ElementSidebarProps) {
  return (
    <div>
      <h3 className='font-lato text-[#193E72] text-[19px] font-bold mb-4'>Element 1: Organization Transition Policy</h3>

      <ul className='space-y-2'>
        {subsections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                onSubsectionChange(section.id);
              }}
              className={`block py-2 px-3 rounded text-sm ${activeSubsection === section.id ? 'bg-[#D837371A] border-l-4 border-[#FD5045] font-medium' : 'hover:bg-gray-100'}`}
            >
              <span className={activeSubsection === section.id ? 'font-semibold' : ''}>
                {section.id} {section.title.length > 40 ? `${section.title.substring(0, 40)}...` : section.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className='mt-8'>
        <Link href='/doc/main-contents' className='flex items-center text-[#193E72] hover:underline font-medium text-sm'>
          ← Return to Guidebook
        </Link>
      </div>
    </div>
  );
}
