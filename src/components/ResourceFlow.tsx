import Image from 'next/image';
import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ResourceFlow(): ReactNode {
  return (
    <div className='w-full pb-20'>
      <div className='flex items-center'>
        <Image src='/flow_1.svg' alt='flow_1 illustration' className='object-contain' height={682} width={599} />
        <div className='w-[663px] ms-[8%]'>
          <p className='main-title mb-12'>Using this Resource</p>
          <p className='base-text-content mb-8'>
            Core components are divided into six categories, or “elements”, intended to support thinking of the transition process from beginning to end. Each core component
            includes a brief description of the component as well as other resources to support your understanding where relevant. <br />
            This might include:
          </p>
          <div>
            <ul className='ps-5'>
              <li className='flex items-center mb-2'>
                <div className='rounded-full w-[15px] h-[15px] bg-[#FFDBA8]' />
                <p className='font-bold ms-4 base-text-content'>Definitions of keywords</p>
              </li>
              <li className='flex items-center mb-2'>
                <div className='rounded-full w-[15px] h-[15px] bg-[#FFDBA8]' />
                <p className='font-bold ms-4 base-text-content'>Linked citations</p>
              </li>
              <li className='flex items-center mb-2'>
                <div className='rounded-full w-[15px] h-[15px] bg-[#FFDBA8]' />
                <p className='font-bold ms-4 base-text-content'>References to sections of the Implementation Workbook</p>
              </li>
              <li className='flex items-center mb-2'>
                <div className='rounded-full w-[15px] h-[15px] bg-[#FFDBA8]' />
                <p className='font-bold ms-4 base-text-content'>Quotes or notes from expert knowledge users</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------ */}
      <div className='flex justify-between mt-28'>
        <div className='pt-24 ps-[14%]'>
          <p className='w-[618px] h-[116px] base-text-content'>
            In many of the components, we describe and link to external resources. These resources provide further learning opportunities and implementation support in alignment
            with that core component. Resources can include:
          </p>
          <Image src='/tools.svg' alt='tools_illustration' className='object-contain mt-14' height={111} width={618} />
          <button className='button-fill pr-4 mt-24'>
            Resource lists
            <ArrowRight size={20} className='ms-3' />
          </button>
        </div>

        <Image src='/flow_2.svg' alt='flow_2_illustration' className='object-contain' height={752} width={732} />
      </div>
    </div>
  );
}
