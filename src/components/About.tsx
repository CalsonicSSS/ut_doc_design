import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

export default function About(): ReactNode {
  return (
    <div className='w-full'>
      <div className='w-full bg-[#EFF7FC] h-[426px] px-[80px] flex justify-center items-center'>
        <div className='w-[900px]'>
          <p className='section-title text-center'>About</p>
          <p className='main-title text-center'>Purpose of this Resource</p>
          <p className=' mt-11 base-text-content text-center'>
            The purpose of the Unite Core Components Guidebook is to support the uptake and implementation of the core components of successful mental health transitions in youth
            mental health care settings.
          </p>
          <p className='text-center mt-11 base-text-content '>
            This resource is not meant to be prescriptive. Transition policies and practices vary based on a number of factors. This Guidebook is meant to be used as a starting
            place to guide further discussion and development of transition policies and interventions that are fitting for your community.
          </p>
        </div>
      </div>
      <div className='w-full h-[364px] flex justify-center items-center bg-[#EFF7FC] bg-opacity-43'>
        <div className='w-[1217px] h-[157px] border-dashed border-2 border-[#8E98A8] rounded-3xl flex justify-between items-center px-[80px]'>
          <p className='w-[635px] h-[96px] base-text-content text-xl'>
            Further support for the implementation of these core components can be found in the <span className='text-navy-1 font-semibold'>Unite Implementation Workbook.</span>{' '}
            These two resources are intended to be used together.
          </p>
          <button className='button-fill pr-4'>
            Learn more
            <ArrowRight size={20} className='ms-3' />
          </button>
        </div>
      </div>
    </div>
  );
}
