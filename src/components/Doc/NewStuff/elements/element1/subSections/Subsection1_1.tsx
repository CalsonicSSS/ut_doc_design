// src/components/Doc/Elements/Element1/SubSections/SubSection1_1.tsx
import React from 'react';
import Link from 'next/link';

export default function SubSection1_1() {
  return (
    <div className='max-w-3xl font-urbanist'>
      <div className='mb-8'>
        <div className='flex mb-6'>
          <Link href='#' className='text-blue-500 hover:underline mr-6'>
            Element 1: Organization Transition Policy
          </Link>
          <Link href='#' className='text-blue-500 hover:underline mr-6'>
            Integrated care pathway
          </Link>
          <Link href='#' className='text-blue-500 hover:underline'>
            Transition process
          </Link>
        </div>

        <p className='mb-4 text-[16px] leading-[28px]'>
          Integrated care pathways are an important aspect of ensuring <span className='text-blue-500 hover:underline cursor-pointer'>continuity of care</span> for youth navigating
          a transition in their mental health care. These pathways create transparency in process and provide a shared understanding of important steps and concepts for everyone
          involved in the care transition.
        </p>

        <p className='mb-4 text-[16px] leading-[28px]'>
          For organizations, outlining the steps in transitioning between services and/or programs can help service providers and administrators better understand how youth
          experience transitions and where further supports might be needed to ensure continuity of care.
        </p>

        <p className='mb-4 text-[16px] leading-[28px]'>
          For youth, providing clarity around the expected steps or process ensures patients have the right information to support their decision-making and engagement in their own
          care.
        </p>
      </div>

      {/* Resources section */}
      <div className='mt-12 mb-40'>
        <h3 className='font-bold text-xl mb-4 flex items-center'>
          Resources
          <svg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className='ml-2'>
            <circle cx='12' cy='12' r='10' stroke='#CBD5E0' strokeWidth='2' />
            <path d='M12 7V12M12 16V16.01' stroke='#718096' strokeWidth='2' strokeLinecap='round' />
          </svg>
        </h3>

        <div className='space-y-6'>
          {/* Resource 1 */}
          <div className='flex items-start'>
            <div className='flex-shrink-0 bg-yellow-200 rounded-full w-6 h-6 flex items-center justify-center mr-3'>
              <span className='text-yellow-800 font-bold'>1</span>
            </div>
            <div>
              <p className='text-sm font-medium'>To learn more about transition pathways:</p>
              <Link href='#' className='text-blue-500 hover:underline text-sm flex items-center'>
                NICE: transitions from children to adults services pathway
                <svg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className='ml-1'>
                  <path d='M7 17L17 7M17 7H7M17 7V17' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </Link>
            </div>
          </div>

          {/* Resource 2 */}
          <div className='flex items-start'>
            <div className='flex-shrink-0 bg-yellow-200 rounded-full w-6 h-6 flex items-center justify-center mr-3'>
              <span className='text-yellow-800 font-bold'>2</span>
            </div>
            <div>
              <p className='text-sm font-medium'>To learn more about integrated care pathways:</p>
              <Link href='#' className='text-blue-500 hover:underline text-sm flex items-center'>
                Key attributes of integrated community-based youth one-stop hubs for mental health: a scoping review
                <svg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className='ml-1'>
                  <path d='M7 17L17 7M17 7H7M17 7V17' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </Link>
              <Link href='#' className='text-blue-500 hover:underline text-sm flex items-center mt-1'>
                Knowledge Institute on Child and Youth Mental Health and Addictions Care Pathways
                <svg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className='ml-1'>
                  <path d='M7 17L17 7M17 7H7M17 7V17' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons are handled by the parent component */}
    </div>
  );
}
