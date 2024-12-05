import Dot from '@/components/Dot';
import React from 'react';

export default function AboutThisResource() {
  return (
    <section id='about-this-resource' data-section className='py-12 doc-content-text border-b-[1px]'>
      <h1 className='doc-content-title'>About this Resource</h1>
      <section id='purpose-of-this-resource' data-section className='py-8'>
        <h1 className='doc-content-sub-title mb-8'>Purpose of this Resource</h1>
        <p className='mb-6'>
          The purpose of the Unite Core Components Guidebook is to support the uptake and implementation of the core components of successful mental health transitions in youth
          mental health care settings.
        </p>
        <p className='mb-6'>
          This resource is not meant to be prescriptive. Transition policies and practices vary based on a number of factors. This Guidebook is meant to be used as a starting place
          to guide further discussion and development of transition policies and interventions that are fitting for your community.
        </p>
        <p className='mb-6'>
          Further support for the implementation of these core components can be found in the <span className='font-bold'>Unite Implementation Workbook.</span> These two resources
          are intended to be used together.
        </p>
      </section>

      <section id='using-this-resource' data-section className='py-8'>
        <h1 className='doc-content-sub-title mb-8'>Using this Resource</h1>
        <p>
          Core components are divided into six categories, or “elements”, intended to support thinking of the transition process from beginning to end. Each core component includes
          a brief description of the component as well as other resources to support your understanding where relevant.
        </p>
        <p>This might include:</p>
        <ul className='ps-3'>
          <li className='flex items-center'>
            <Dot /> Definitions of keywords
          </li>
          <li className='flex items-center'>
            <Dot />
            Linked citations
          </li>
          <li className='flex items-center'>
            <Dot />
            References to sections of the Implementation Workbook
          </li>
          <li className='flex items-center'>
            <Dot />
            Quotes or notes from expert knowledge users
          </li>
        </ul>
        <p>
          In many of the components, we describe and link to external resources. These resources provide further learning opportunities and implementation support in alignment with
          that core component. Resources can include:
        </p>
        <ul className='ps-3'>
          <li className='flex items-center'>
            <Dot /> Example Programs
          </li>
          <li className='flex items-center'>
            <Dot />
            Interactive Trainings
          </li>
          <li className='flex items-center'>
            <Dot />
            Academic Publications
          </li>
          <li className='flex items-center'>
            <Dot />
            Example Guidelines or Policies
          </li>
          <li className='flex items-center'>
            <Dot />
            Measurement Tools
          </li>
        </ul>
      </section>

      <section id='development-of-this-resource' data-section className='py-8'>
        <h1 className='doc-content-sub-title mb-8'>Development of this Resource</h1>
        <p className='mb-6'>This resource has been developed through extensive community collaborations, research partnerships, and literature review. </p>
        <p className='mb-6'>
          Definitions in the Core Component Guidebook, unless otherwise cited, were developed in consultation with an Expert Advisory Committee that included researchers,
          clinicians, youth, and family members and caregivers from across Canada.
        </p>
        <p className='mb-6'>
          Quotes and “Notes from a Navigator” in this guidebook are sourced from research studies conducted by our research team, including a{' '}
          <span className='underline'>pan-Canadian Delphi study that developed core components</span> and{' '}
          <span className='underline'>the Navigator Evaluation Advancing Transitions (NEAT) Study.</span>
        </p>
        <p className='font-bold'>All “Notes from a Navigator” quotes are attributed to a manuscript in preparation and should not be copied/reproduced:</p>
        <div className='flex items-center ps-3'>
          <Dot /> Cleverley K et al. (2023) Understanding the scope and impact of the youth mental health transition
        </div>
        <p className='ps-6'>navigator role:</p>
        <div className='flex items-center ps-20'>
          <Dot /> perspectives of navigators and clinicians. [manuscript in preparation].
        </div>
        <p className='mb-6'>This manuscript will be open access and linked through our website upon publication.</p>
        <p className='font-bold'>Remaining quotes from clinicians, administrators, youth, and caregivers are attributed to the following study:</p>
        <div className='flex items-center ps-3'>
          <Dot /> Cleverley K, McCann E, O'Brien D, Davies J, Bennett K, Brennenstuhl S, Courey L, Henderson J, Jeffs L, Miller
        </div>
        <p className='ps-6'>J, Pignatiello T, Rong J, Rowland E, Stevens K, & Szatmari P. (2021).</p>
        <div className='flex items-center ps-3'>
          <Dot /> Prioritizing core components of successful transitions from child to adult mental health care:
        </div>
        <div className='flex items-center ps-20'>
          <Dot /> A national Delphi survey with youth, caregivers, and health professionals. European Child &
        </div>
        <p className='ps-24'> Adolescent Psychiatry. https://doi.org/10.1007/s00787-021-01806-6</p>
      </section>
    </section>
  );
}
