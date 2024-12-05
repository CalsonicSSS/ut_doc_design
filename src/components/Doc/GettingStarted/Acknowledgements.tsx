import Dot from '@/components/Dot';
import React from 'react';

export default function Acknowledgements() {
  return (
    <section id='acknowledgements' data-section className='py-12 doc-content-text border-b-[1px]'>
      <h1 className='doc-content-title mb-8'>Acknowledgements</h1>
      <p className='font-bold'>The following people contributed to the development of this resource:</p>
      <ul className='mb-8 ps-3'>
        <li className='flex items-center'>
          <Dot /> Kristin Cleverley
        </li>
        <li className='flex items-center'>
          <Dot /> Julia Davies
        </li>
        <li className='flex items-center'>
          <Dot /> Emma McGann Celeste Ayrad
        </li>
        <li className='flex items-center'>
          <Dot /> Sonya Edward
        </li>
        <li className='flex items-center'>
          <Dot /> Shabeena Pirmohamed
        </li>
        <li className='flex items-center'>
          <Dot /> Sarah Saltzman
        </li>
      </ul>
      <p className='mb-8'>
        We would also like to acknowledge the Transition Navigator Community of Practice, consisting of navigators practising in health care organizations across the Greater
        Toronto Area, who contributed several resources and shared their expertise throughout the development of this toolkit.
      </p>
      <p className='font-bold'>This resource was developed with the support of grant funding</p>
      <p>Period of Funding: 2023-2024.</p>
      <p className='ps-10'>
        Cleverley K (NPI), Barbic S (Co-PI), Iyer S (Co-PI), Henderson J (Co-PI), Bagnell A, Dimitropoulos G, Goyette M, Mushquash C, Toulany A, Hay K, Hutt-MacLeod D, Mathias S,
        Tee K. Transitions in Practice: Implementing National Youth Mental Health Transition Standards Across Canada (TIPS). Funding Agency: CIHR Catalyst Grant.
      </p>
      <p>Funding: 2022-2023.</p>
      <p className='ps-10 mb-8'>
        Cleverley K (NPI), Bartha C (Co-PI), Davies J (Co-PI), Barbic S, Dimitropoulos G, Henderson J, McCann E. The UNITE Toolkit: A guide to implementing the core components of
        successful transitions from child and adolescent mental health services. CIHR Planning and Dissemination Grant.
      </p>
      <p className='font-bold'>Affiliations </p>
      <p>University of Toronto 1</p>
      <p>Centre for Addiction and Mental Health 2</p>
    </section>
  );
}
