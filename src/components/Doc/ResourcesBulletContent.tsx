import { LogOut } from 'lucide-react';
import React from 'react';

type TitleAndContent = {
  title: string;
  contents: string[];
};

type TitleAndContents = TitleAndContent[];

export default function ResourcesBulletContent({ titleAndContents }: { titleAndContents: TitleAndContents }) {
  return (
    <div>
      <button className='flex items-center mb-4'>
        <p className='font-bold text-[18px] leading-[32px] mr-2'>Resources</p>
        <LogOut size={15} strokeWidth={1} />
      </button>
      {titleAndContents.map((titleAndContent, index) => (
        <div key={index} className={`doc-content-text flex items-start mb-${index !== titleAndContents.length - 1 && 4}`}>
          <div className='text-[#FFB652] font-bold text-xs px-3 rounded-full bg-[#FFF8EE] mr-5'>{index + 1}</div>
          <div>
            <p className='lead-[32px] tracking-[0.14px]'>{titleAndContent.title}</p>
            {titleAndContent.contents.map((content, index) => (
              <p key={index} className='tracking-[0.13px] font-medium leading-[32px] underline text-[#63B1E5]'>
                {content}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
