import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MoveLeft } from 'lucide-react';

interface SubSection {
  id: string;
  title: string;
}

interface ElementSidebarProps {
  subsections: SubSection[];
  activeSubsection: string;
  elementTitle: string;
  onSubsectionChange: (id: string) => void;
}

export default function ElementSidebar({ elementTitle, subsections, activeSubsection, onSubsectionChange }: ElementSidebarProps) {
  return (
    <>
      <h3 className='font-lato text-[#63B1E5] text-[14px] font-semibold leading-[16px] mb-4'>{elementTitle}</h3>

      <ul className='space-y-2'>
        {subsections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                onSubsectionChange(section.id);
              }}
              className={`block ml-1 py-2 px-3 text-[12px] ${activeSubsection === section.id ? 'bg-[#D837371A] border-l-4 border-[#FD5045] text-[#63B1E5]' : 'hover:bg-gray-100'}`}
            >
              <span>
                {section.id} {section.title.length > 40 ? `${section.title.substring(0, 40)}...` : section.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className='mt-8 ml-1'>
        <Link href='/doc/main-contents' className='flex items-center text-[#193E72] hover:opacity-70 font-medium text-sm'>
          <ArrowLeft size={20} className='mr-2 h-4' />
          <span>Return to Guidebook</span>
        </Link>
      </div>
    </>
  );
}
