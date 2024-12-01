import React, { ReactNode } from 'react';

export default function ChooseContent(): ReactNode {
  const contentItems = [
    {
      number: '01',
      title: 'Organizational Transition Policy',
      description: 'Develop a transition policy and provide staff training on facilitating transitions.',
      width: '224px',
    },
    {
      number: '02',
      title: 'Transition tracking and monitoring',
      description: 'Establish a protocol for tracking and monitoring transition steps.',
      width: '224px',
    },
    {
      number: '03',
      title: 'Transition readiness',
      description: "Identify youth's transition-related needs and goals then co-create a transition plan with youth.",
      width: '250px',
    },
    {
      number: '04',
      title: 'Transition planning',
      description: 'Implement the transition plan, including identifying and collaborating with the adult MH services.',
      width: '230px',
    },
    {
      number: '05',
      title: 'Transfer of care',
      description: 'Prepare a transfer package and hold a transfer meeting between child and adult MH services.',
      width: '230px',
    },
    {
      number: '06',
      title: 'Transfer completion',
      description: 'Follow up with youth post-transition to ensure they have connected with adult services.',
      width: '230px',
    },
  ];

  return (
    <div className='font-open-sans pb-16 sm:pb-20 lg:pb-32 pt-12 sm:pt-16 lg:pt-20 bg-[#F8FCFE]'>
      {/* Flex container that changes to column on mobile */}
      <div className='flex flex-col lg:flex-row px-4 sm:px-8 lg:px-0'>
        {/* Title section */}
        <div className='lg:ps-[14%] mb-8 lg:mb-5 text-center lg:text-left'>
          <p className='section-title font-open-sans'>Content</p>
          <p className='main-title mt-6 lg:mt-12 text-3xl sm:text-4xl lg:text-5xl'>
            Choose the one <br className='hidden lg:block' /> you feel interested
          </p>
        </div>

        {/* Content grid that becomes single column on mobile */}
        <div className='lg:mt-10 lg:ms-32 w-full lg:w-auto'>
          {/* Grid container for all items */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-32'>
            {contentItems.map((item, index) => (
              <button key={index} className='flex items-center group'>
                <p className='text-[#C9CBC7] text-4xl sm:text-6xl lg:text-special font-bold mr-3 sm:mr-5 group-hover:text-[#43CDC1] leading-none mt-1'>{item.number}</p>
                <div>
                  <p className='font-bold text-sm text-[#454545] mb-2 text-start'>{item.title}</p>
                  <p className='text-xs text-[#454545] font-light text-start w-full sm:w-[224px] lg:w-[230px]'>{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
