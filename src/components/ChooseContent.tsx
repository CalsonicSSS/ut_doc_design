import React, { ReactElement } from 'react';

export default function ChooseContent(): ReactElement {
  return (
    <div className='font-open-sans pb-32 pt-20 flex bg-[#F8FCFE]'>
      <div className='ps-[14%] mb-5'>
        <p className='section-title font-open-sans'>Content</p>
        <p className='main-title mt-12'>
          Choose the one <br /> you feel interested
        </p>
      </div>
      <div className='flex mt-10 ms-32'>
        <div>
          <button className='flex items-center group'>
            <p className='text-[#C9CBC7] text-special font-bold mr-5 group-hover:text-[#43CDC1]'>01</p>
            <div>
              <p className='w-[224px] font-bold text-sm text-[#454545] mb-2 text-start'>Organizational Transition Policy</p>
              <p className='w-[224px] text-xs text-[#454545] font-light text-start'>Develop a transition policy and provide staff training on facilitating transitions.</p>
            </div>
          </button>
          <button className='flex items-center group'>
            <p className='text-[#C9CBC7] text-special font-bold mr-5 group-hover:text-[#43CDC1]'>02</p>
            <div>
              <p className='font-bold text-sm text-[#454545] mb-2 text-start'>Transition tracking and monitoring</p>
              <p className='w-[224px] text-xs text-[#454545] font-light text-start'>Establish a protocol for tracking and monitoring transition steps.</p>
            </div>
          </button>
          <button className='flex items-center group'>
            <p className='text-[#C9CBC7] text-special font-bold mr-5 group-hover:text-[#43CDC1]'>03</p>
            <div>
              <p className='font-bold text-sm text-[#454545] mb-2 text-start'>Transition readiness</p>
              <p className='w-[250px] text-xs text-[#454545] font-light text-start'>
                Identify youth’s transition-related needs and goals then co-create a transition plan with youth.
              </p>
            </div>
          </button>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------- */}
        <div className='ms-32'>
          <button className='flex items-center group'>
            <p className='text-[#C9CBC7] text-special font-bold mr-5 group-hover:text-[#43CDC1]'>04</p>
            <div>
              <p className='font-bold text-sm text-[#454545] mb-2 text-start'>Transition planning</p>
              <p className='w-[230px] text-xs text-[#454545] font-light text-start'>
                Implement the transition plan, including identifying and collaborating with the adult MH services.
              </p>
            </div>
          </button>
          <button className='flex items-center group'>
            <p className='text-[#C9CBC7] text-special font-bold mr-5 group-hover:text-[#43CDC1]'>05</p>
            <div>
              <p className='font-bold text-sm text-[#454545] mb-2 text-start'>Transfer of care</p>
              <p className='w-[230px] text-xs text-[#454545] font-light text-start'>Prepare a transfer package and hold a transfer meeting between child and adult MH services.</p>
            </div>
          </button>
          <button className='flex items-center group'>
            <p className='text-[#C9CBC7] text-special font-bold mr-5 group-hover:text-[#43CDC1]'>06</p>
            <div>
              <p className='font-bold text-sm text-[#454545] mb-2 text-start'>Transfer completion</p>
              <p className='w-[230px] text-xs text-[#454545] font-light text-start'>Follow up with youth post-transition to ensure they have connected with adult services.</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
