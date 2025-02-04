import React from 'react';
import { ResourcesContentLinks } from '../ResourcesBulletContent';
import Quote from '../Quote';
import HighlightTextButton from '../HighlightTextButton';

export default function Element5() {
  return (
    <section id='e5' data-section className='py-14 doc-content-text border-b-[1px] lg:px-0 px-5'>
      <h1 className='doc-content-title'>Element 5 Transfer of Care</h1>
      <section id='e5.1' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>5.1 A specific meeting or case conference should be held witheveryone involved in the transition to handover care.</h1>

        <div className='flex'>
          <HighlightTextButton clickToId='gt-C' title='Case Conference' desc='' />
          <HighlightTextButton clickToId='gt-W' title='Warm Handover' desc='' />
        </div>

        <p className='mb-6 mt-8'>
          The purpose of the meeting should be to develop a shared understanding of the young person&apos;s care up to this point, and their continuing care needs. The meeting can
          be used to identify the roles of everyone involved in the handover of care, based on the previously established care plan. The handover meetings may include everyone
          previously identified as being part of the care transition (i.e. youth, <span className='font-bold'>child and adolescent mental health services</span> and{' '}
          <span className='font-bold'>adult mental health services</span> clinician, <span className='font-bold'>transition navigators</span> , and{' '}
          <span className='font-bold'>family members/caregivers</span> if appropriate) is often organized and led by the{' '}
          <span className='font-bold'>most responsible provider</span> at that point in time. It is important to ensure youth understand the purpose and goals of the meeting,and
          that they can choose how they would like to be involved. For more information about who should be involved in this meeting, reference the discussion in component 4.1 and
          4.2.
        </p>
        <p className='mb-8'>“Parallel Care” and “Joint Working Meetings” may also be relevant for this component. Please seeComponent 4.6 for definitions.</p>
        <ResourcesContentLinks
          resourceClickToId='resources-lists'
          titlesAndLinks={[
            {
              title: 'To learn how to ensure an effective warm handover',
              links: [
                {
                  linkText: 'Alberta Health Services, Warm Handoffs',
                  link: 'https://www.albertahealthservices.ca/assets/info/amh/if-amh-ecc-warm-handoffs.pdf',
                },
              ],
            },
          ]}
        />
        <Quote
          author='Youth'
          quote='For me, it was probably getting all of my care team together, and speaking to me instead of just kind of talking amongst themselves, or actually it was the opposite - what was really helpful was getting all of them into a single room and discussing things in front of me.'
        />
      </section>
      <section id='e5.2' data-section className='pt-10'>
        <h1 className='doc-content-sub-title mb-8'>
          5.2 In collaboration with youth, complete all documents in transfer package (e.g. referral letter, individualized transition plan, clinical records). With youth&apos;s
          consent send to adult mental health services and/or primary care provider, and confirm receipt.{' '}
        </h1>
        <div className='flex'>
          <HighlightTextButton clickToId='gt-R' title='Referral Letter' desc='' />
          <HighlightTextButton clickToId='gt-T' title='Transition Plan' desc='' />
          <HighlightTextButton clickToId='gt-C' title='Clinical Records' desc='' />
        </div>

        <p className='mt-8 mb-6'>
          The transfer package should include general information about the young person and their treatment history, as well as any documentation specific to the receiving agency.
          A complete transfer package should support seamless transitions in care and limit the amount of follow up required post-care transition. A complete transfer package can
          also reduce the burden on youth to reshare their story with a new care provider.
        </p>
        <p className='mb-6'>
          Where possible, youth should also maintain a copy of their transfer package. This is particularly relevant when a young person only requires episodic care or may be
          likely to see a different provider in the future.
        </p>

        <ResourcesContentLinks
          resourceClickToId='resources-lists'
          titlesAndLinks={[
            {
              title: 'Policy and procedures for transfer of care',
              links: [
                {
                  linkText: 'Nova Scotia Health, Information Transfer at Care Transitions Policy',
                  link: 'https://policy.nshealth.ca/Site_Published/NSHA/document_render.aspx?documentRender.IdType=6&documentRender.GenericField=&documentRender.Id=98152',
                },
              ],
            },
            {
              title: 'For a guideline on care transitions and communicating the information',
              links: [
                {
                  linkText: 'Women’s College Hospital, INFORMATION TRANSFER AT CARE TRANSITIONS',
                  link: 'https://www.womenscollegehospital.ca/accreditation-q-tip-information-transfer-at-care-transitions/',
                },
              ],
            },
            {
              title: 'Information to be included in the transition',
              links: [
                {
                  linkText: 'RNAO My Transitional Care Plan©',
                  link: 'https://rnao.ca/bpg/guidelines/transitions-in-care',
                },
              ],
            },
          ]}
        />
        <Quote
          author='Youth'
          quote="And then on the back [of a transfer document] there's just some general kind of mental health information, if they've ever had depression or anxiety or if they've ever had a suicide attempt or if they're on medications... But I would say the most important information is kind of reasons for referral, who's referring and then contact information and what the client is consenting to in terms of that contact. "
        />
      </section>
    </section>
  );
}
