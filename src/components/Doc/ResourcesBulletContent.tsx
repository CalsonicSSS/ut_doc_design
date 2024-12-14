'use client';

import { LogOut } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { ScrollManager } from './utils';

type TitleAndLinks = {
  title: string;
  links: { linkText: string; link: string }[];
};

type TitlesAndLinks = TitleAndLinks[];

export function ResourcesContentLinks({ titlesAndLinks, resourceClickToId }: { titlesAndLinks: TitlesAndLinks; resourceClickToId: string }) {
  return (
    <div>
      <button onClick={() => ScrollManager.scrollToElement(resourceClickToId)} className='flex items-center mb-4'>
        <p className='font-bold text-[18px] leading-[32px] mr-2'>Resources</p>
        <LogOut size={15} strokeWidth={1} />
      </button>
      {titlesAndLinks.map((titleAndLinks, index) => (
        <div key={index} className={`doc-content-text flex items-start mb-${index !== titlesAndLinks.length - 1 && 4}`}>
          <div className='text-[#FFB652] font-bold text-xs px-3 rounded-full bg-[#FFF8EE] mr-5'>{index + 1}</div>
          <div>
            <p className='lead-[32px] tracking-[0.14px]'>{titleAndLinks.title}</p>
            {titleAndLinks.links.map((each, index) => (
              <Link
                key={index}
                href={`${each.link}`}
                target='_blank'
                rel='noopener noreferrer'
                className='block tracking-[0.13px] font-medium leading-[32px] underline text-[#63B1E5]'
              >
                {each.linkText}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
