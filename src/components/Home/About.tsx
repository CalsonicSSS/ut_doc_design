import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

export default function About(): ReactNode {
  return (
    <div className='w-full'>
      {/* First section */}
      <div className='w-full bg-[#EFF7FC] min-h-[426px] px-4 sm:px-8 lg:px-[80px] py-12 lg:py-0 flex justify-center items-center'>
        <div className='w-full lg:w-[900px]'>
          <p className='section-title text-center'>About</p>
          <p className='main-title text-center sm:text-3xl lg:text-5xl'>Purpose of this Resource</p>
          <p className='mt-6 lg:mt-11 base-text-content text-center text-size-base lg:text-lg'>
            The purpose of the Unite Core Components Guidebook is to support the uptake and implementation of the core components of successful mental health transitions in youth
            mental health care settings.
          </p>
          <p className='text-center mt-6 lg:mt-11 base-text-content text-size-base lg:text-lg'>
            This resource is not meant to be prescriptive. Transition policies and practices vary based on a number of factors. This Guidebook is meant to be used as a starting
            place to guide further discussion and development of transition policies and interventions that are fitting for your community.
          </p>
        </div>
      </div>

      {/* Second section */}
      <div className='w-full min-h-[364px] flex justify-center items-center bg-[#EFF7FC] bg-opacity-43 px-4 sm:px-8 lg:px-0 py-12 lg:py-0'>
        <div className='w-full lg:w-[1217px] border-dashed border-2 border-[#8E98A8] rounded-3xl flex flex-col lg:flex-row justify-between items-center p-6 lg:px-[80px] lg:h-[157px]'>
          <p className='w-full lg:w-[635px] base-text-content text-size-base lg:text-xl text-center lg:text-left mb-6 lg:mb-0'>
            Further support for the implementation of these core components can be found in the <span className='text-navy-1 font-semibold'>Unite Implementation Workbook.</span>{' '}
            These two resources are intended to be used together.
          </p>
          <button className='button-fill pr-4 w-full sm:w-auto'>
            Learn more
            <ArrowRight size={20} className='ms-3' />
          </button>
        </div>
      </div>
    </div>
  );
}
