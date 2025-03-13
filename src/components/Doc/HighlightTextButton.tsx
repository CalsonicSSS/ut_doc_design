'use client';

import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { assetPathMode } from '@/utils';

export default function HighlightTextButton({ title, clickToId, tooltipDesc }: { title: string; clickToId?: string; tooltipDesc: string }) {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger className='text-sm font-semibold text-[#FFAE00] leading-[16px] px-4 py-2 rounded-2xl bg-[#FFF8EE] mr-5'>{title}</TooltipTrigger>
        <TooltipContent side='bottom' className={`bg-white w-[228px] p-5  ${clickToId ? 'hover: cursor-pointer' : ''}`} onClick={() => {}}>
          {/* <p className='text-[#FFAE00] text-sm font-urbanist font-semibold mb-5'>{title}</p> */}
          <p className='text-[#828282] text-[13px] font-urbanist font-medium leading-[20px]'>{tooltipDesc}</p>
          {clickToId && (
            <div className='flex items-center mt-5'>
              <button className='text-[#00B6EF] text-[12px] font-urbanist font-semibold mr-1'>Go to definition lists</button>
              <Image src={`${assetPathMode === 'PROD' ? '/unite-guidebook' : ''}/arrow_right.svg`} width={16} height={16} alt='arrow-right' />
            </div>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
