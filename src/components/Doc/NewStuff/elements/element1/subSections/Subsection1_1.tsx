import React from 'react';
import HighlightTextButton from '@/components/Doc/HighlightTextButton';
import HighlightText from '@/components/Doc/HighlightText';

export default function SubSection1_1() {
  return (
    <div className='doc-content-text'>
      <div className='flex mb-8'>
        <HighlightTextButton
          clickToId={'gt-icp'}
          title='Integrated care pathway'
          tooltipDesc='Integrated care pathways are structured; multipurpose care plans which outline the steps involved in the care of patients with a specific clinical problem.'
        />
        <HighlightTextButton
          clickToId={'gt-tp'}
          title='Transition process'
          tooltipDesc='The transition process is a series of action steps that are followed to complete the care transition.'
        />
      </div>
      <p className='mb-6'>
        Integrated care pathways are an important aspect of ensuring <HighlightText content='continuity of care' clickToId='gt-C' /> for youth navigating a transition in their
        mental health care. These pathways create transparency in process and provide a shared understanding of important steps and concepts for everyone involved in the care
        transition.
      </p>
      <p className='mb-6'>
        For organizations, outlining the steps in transitioning between services and/or programs can help service providers and administrators better understand how youth
        experience transitions and where further supports might be needed to ensure continuity of care.
      </p>
      <p className='mb-8'>
        For youth, providing clarity around the expected steps or process ensures patients have the right information to support their decision-making and engagement in their own
        care.
      </p>
    </div>
  );
}
