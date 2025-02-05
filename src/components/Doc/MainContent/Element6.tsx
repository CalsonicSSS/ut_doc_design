import React from 'react';
import Quote from '../Quote';
import HighlightTextButton from '../HighlightTextButton';

export default function Element6() {
  return (
    <section id='e6' data-section className='py-14 doc-content-text border-b-[1px] lg:px-0 px-5'>
      <h1 className='doc-content-title'>Element 6 Transfer Completion</h1>
      <section id='e6.1' data-section className='pt-10 '>
        <h1 className='doc-content-sub-title mb-8'>
          6.1 The person most responsible for the transition, contacts the youth(and fafamily members/caregivers, if appropriate) 3 to 6 months aftfterlast child and adolescent
          mental health service visit, or sooner ifnecessary, to confirm transfer to adult mental health services.
        </h1>
        <HighlightTextButton
          clickToId='gt-M'
          title='Most responsible person'
          desc='The primary contact person who acts as the coordinator of the transition process and ensures continuity of care. This person can vary and may or may not be the same individual as the traditional “most responsible provider”.'
        />
        <p className='mt-8 mb-6'>
          Long-term follow-up with youth and family members/caregivers to ensure a smooth and successful transfer to adult services has occurred is an important part of the care{' '}
          <span className='font-bold'>transition process</span> . This follow up point can also be an important evaluation metric for your program or institution, and can elucidate
          processes that might require change. It is important to implement accessible, youth-friendly follow-up methods which young people would be more likely to engage with
          (i.e., texting)
        </p>
        <Quote
          author='Youth'
          quote='I definitely liked having the option of text, email or call, and I feel like many people would benefit from that, as many people could be in the same situation as me, where they just prefer text or email because they get very busy or some may even have social anxiety, like talking over the phone to book appointments or anything like that '
        />
      </section>
    </section>
  );
}
