import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

export default function About(): ReactNode {
  return (
    <div className='w-full'>
      <div className='w-full bg-[#EFF7FC]   h-[426px] px-[80px] flex justify-center items-center'>
        <div className='w-[900px]'>
          <p className='text-xl font-bold text-center text-navy2 tracking-[1px] font-roboto'>About</p>
          <p className='text-center font-bold text-5xl font-open-sans'>Purpose of this Resource</p>
          <p className='text-center text-lg mt-11 text-base-color font-open-sans'>
            The purpose of the Unite Core Components Guidebook is to support the uptake and implementation of the core components of successful mental health transitions in youth
            mental health care settings.
          </p>
          <p className='text-center text-lg mt-11 text-base-color font-open-sans'>
            This resource is not meant to be prescriptive. Transition policies and practices vary based on a number of factors. This Guidebook is meant to be used as a starting
            place to guide further discussion and development of transition policies and interventions that are fitting for your community.
          </p>
        </div>
      </div>
      <div className='w-full bg-[#EFF7FC] bg-opacity-43 h-[364px] px-[80px] flex justify-center items-center'>
        <div className='w-[1217px] h-[157px] border-dashed border-2 border-[#8E98A8] rounded-3xl flex justify-between items-center px-[80px]'>
          <p className='w-[635px] h-[96px] text-start text-base-color text-xl font-open-sans'>
            Further support for the implementation of these core components can be found in the Unite Implementation Workbook. These two resources are intended to be used together.
          </p>
          <button className='bg-navy rounded-3xl text-white ps-6 pr-3 py-2 hover:bg-navy/90 tracking-[0.5px] flex items-center justify-between font-roboto font-medium text-xl'>
            Learn more
            <ArrowRight size={20} className='ms-3' />
          </button>
        </div>
      </div>
    </div>
  );
}
