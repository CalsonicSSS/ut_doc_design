'use client';

import { LogOut } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { ScrollManager } from './utils';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type TitleWithLinksAndTooltips = {
  title: string;
  linkObjs: { linkText: string; link: string; tooltip?: string }[];
};

export function ResourcesContentLinks({ contents, resourceClickToId }: { contents: TitleWithLinksAndTooltips[]; resourceClickToId: string }) {
  return (
    <div>
      <button onClick={() => ScrollManager.scrollToElement(resourceClickToId)} className='flex items-center mb-4'>
        <p className='font-bold text-[18px] leading-[32px] mr-2'>Resources</p>
        <LogOut size={15} strokeWidth={1} />
      </button>
      {contents.map((eachContent, index) => (
        <div key={index} className={`doc-content-text flex items-start mb-${index !== contents.length - 1 && 4}`}>
          <div className='text-[#FFB652] font-bold text-xs px-3 rounded-full bg-[#FFF8EE] mr-5'>{index + 1}</div>
          <div>
            <p className='lead-[32px] tracking-[0.14px]'>{eachContent.title}</p>
            {eachContent.linkObjs.map((linkObj, index) => (
              <div className='flex items-center' key={index}>
                <Link
                  href={`${linkObj.link}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`block tracking-[0.13px] font-medium leading-[32px] ${linkObj.link && 'underline'} text-[#63B1E5]`}
                >
                  {linkObj.linkText}
                </Link>
                {linkObj.tooltip && (
                  <TooltipProvider delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger>
                        <Image src='/info.svg' alt='info' className='ms-1 flex-shrink-0 min-w-[17px] min-h-[17px] w-[17px] h-[17px]' height={17} width={17} />
                      </TooltipTrigger>
                      <TooltipContent side='bottom' className='bg-white w-[300px] p-5 hover:cursor-pointer'>
                        {linkObj.tooltip}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
