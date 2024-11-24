import React, { ReactElement } from 'react';

export default function ChooseContent(): ReactElement {
  return (
    <div className='font-open-sans mb-32'>
      <div className='ps-[14%] mb-5'>
        <p className='font-bold text-xl text-blue-1'>Content</p>
        <p className='font-bold text-5xl mt-11'>
          Choose the one <br /> you feel interested
        </p>
      </div>
      <div>
        <div className='flex ps-[38%]'>
          <div>
            <div className='flex items-center mr-36'>
              <p className='text-content-bullet text-special font-bold mr-5'>01</p>
              <div className='w-[211px]'>
                <p className='font-bold text-sm text-content-color mb-1'>Organizational Transition Policy</p>
                <p className='text-xs text-content-color font-light'>Develop a transition policy and provide staff training on facilitating transitions.</p>
              </div>
            </div>
            <div className='flex items-center mr-36'>
              <p className='text-content-bullet text-special font-bold mr-5'>02</p>
              <div>
                <p className='font-bold text-sm text-content-color mb-1 w-[234px]'>Transition tracking and monitoring</p>
                <p className='text-xs text-content-color font-light w-[211px]'>Establish a protocol for tracking and monitoring transition steps.</p>
              </div>
            </div>
            <div className='flex items-center mr-36'>
              <p className='text-content-bullet text-special font-bold mr-5'>03</p>
              <div className='w-[219px]'>
                <p className='font-bold text-sm text-content-color mb-1'>Transition readiness</p>
                <p className='text-xs text-content-color font-light w-[219px]'>Identify youth’s transition-related needs and goals then co-create a transition plan with youth.</p>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------------------------------------------- */}
          <div>
            <div className='flex items-center'>
              <p className='text-content-bullet text-special font-bold mr-5'>04</p>
              <div>
                <p className='font-bold text-sm text-content-color mb-1'>Transition planning</p>
                <p className='text-xs text-content-color font-light w-[219px]'>
                  Implement the transition plan, including identifying and collaborating with the adult MH services.
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <p className='text-content-bullet text-special font-bold mr-5'>05</p>
              <div>
                <p className='font-bold text-sm text-content-color mb-1'>Transfer of care</p>
                <p className='text-xs text-content-color font-light w-[219px]'>Prepare a transfer package and hold a transfer meeting between child and adult MH services.</p>
              </div>
            </div>
            <div className='flex items-center'>
              <p className='text-content-bullet text-special font-bold mr-5'>06</p>
              <div>
                <p className='font-bold text-sm text-content-color mb-1'>Transfer completion</p>
                <p className='text-xs text-content-color font-light w-[219px]'>Follow up with youth post-transition to ensure they have connected with adult services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
