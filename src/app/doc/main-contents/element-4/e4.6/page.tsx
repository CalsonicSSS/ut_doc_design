import HighlightText from '@/components/Doc/elementSupportComponents/HighlightText';
import HighlightTextButton from '@/components/Doc/elementSupportComponents/HighlightTextButton';
import Quote from '@/components/Doc/elementSupportComponents/Quote';
import React from 'react';

export default function SubSection4_6() {
  return (
    <div className='doc-content-text'>
      <div className='flex'>
        <HighlightTextButton
          clickToId='gt-pc'
          title='Parallel care'
          tooltipDesc='A period of time where a young person may be connected to both youth-oriented and adult-oriented mental health services.'
        />
        <HighlightTextButton
          clickToId='gt-jwm'
          title='Joint working meetings'
          tooltipDesc='A meeting (in person or remote) where the youth (and their family members/caregivers, if appropriate), child and adolescent mental health clinician (or team), and receiving adult mental health clinician (or team) meet to discuss the youth’s current treatment plan and transfer of care.'
        />
      </div>

      <p className='mt-8 mb-6'>
        A period of joint or parallel care can ease the <HighlightText content='transition process' clickToId='gt-tprocess' /> for service providers and the youth and their family
        members. The success of the individual&apos;s transition planning process may be dependent on the infrastructure created as part of the organizational policy on
        transitions. Well established partnerships with <HighlightText content='adult mental health services' clickToId='gt-amhs' /> enable opportunities for parallel care and
        collaboration.
      </p>
      <p className='mb-6'>
        Youth involvement in meetings can be an important confidence- and skills-building opportunity for young people. In advance of meetings involving youth and both care teams,
        work with the young person to identify and understand their role, what to expect during the meeting, and how involved they will be in the process moving forward. This
        process is likely to be informed by the readiness and developmental needs of each individual youth.
      </p>
      <p className='mb-8'>
        While six months is the suggested length of time, the organization&apos;s timing for initiating the transition planning process may be dependent on the service design or
        program length. Standards for this initiation point should be set in the organization&apos;s policy {'–'} refer to Components 2.1 and 2.2 for more information on this
        topic.
      </p>
      <Quote
        title='NOTES FROM A NAVIGATOR'
        quote="Well, really, it's scheduling that first appointment or encounter with the person at the receiving agency…I have an appointment with the client after that, ask them how it went…If they're unsure or they're kind of on the fence about it, sometimes it's about clarifying what that agency is going to provide them with... Sometimes, a warm handover happens over a few weeks or a couple appointments "
      />
    </div>
  );
}
