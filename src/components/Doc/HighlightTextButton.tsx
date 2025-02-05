'use client';

import Image from 'next/image';
import { ScrollManager } from './utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function HighlightTextButton({ title, clickToId, desc }: { title: string; clickToId?: string; desc: string }) {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger className='flex justify-start '>
          <button className='text-sm font-semibold text-[#FFAE00] leading-[16px] px-4 py-2 rounded-2xl bg-[#FFF8EE] mr-5'>{title}</button>
        </TooltipTrigger>
        <TooltipContent
          side='bottom'
          className='bg-white w-[228px] p-5 hover: cursor-pointer'
          onClick={() => {
            if (clickToId) {
              ScrollManager.scrollToElement(clickToId);
            }
          }}
        >
          {/* <p className='text-[#FFAE00] text-sm font-urbanist font-semibold mb-5'>{title}</p> */}
          <p className='text-[#828282] text-[13px] font-urbanist font-medium mb-8 leading-[20px]'>{desc}</p>
          <div className='flex items-center '>
            <button className='text-[#00B6EF] text-[12px] font-urbanist font-semibold mr-1'>Go to definition lists</button>
            <Image src='/arrow_right.svg' width={16} height={16} alt='arrow-right' />
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
