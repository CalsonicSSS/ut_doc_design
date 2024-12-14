import React from 'react';
import HighlightTextButton from '../HighlightTextButton';
import { ResourcesContentLinks } from '../ResourcesBulletContent';
import Quote from '../Quote';

export default function Element2() {
  return (
    <section id='e2' data-section className='py-14 doc-content-text border-b-[1px]'>
      <h1 className='doc-content-title'>Element 2 Transition Tracking and Monitoring</h1>
      <section id='e2.1' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>
          2.1 Establish organization-specific criteria and process for identifying youth who will be transitioning out of child and adolescent mental health services.
        </h1>
        <HighlightTextButton clickToId='gt-I'>Integrated care pathway</HighlightTextButton>
        <HighlightTextButton clickToId='gt-T'>Transition process</HighlightTextButton>
        <p className='mt-8 mb-6'>
          When preparing youth to transition out of child and adolescent mental <span className='font-bold'>health services</span> , there are several factors that need to be
          considered. For many organizations, this transition out of child mental health services is an age-dependent criteria, for example, when a child turns eighteen years old.
          Other organizations may specify additional criteria for transitions, such as completing a set number of sessions before transitioning and/or receiving a specific
          psychiatric diagnosis (i.e. psychosis).
        </p>
        <p className='mb-8'>
          Where possible, the transition identification process should begin at least six months prior to the planned transition or earlier. It should include the transition
          navigator (when available), <span className='font-bold'>primary care provider, family/caregiver (if appropriate),</span> youth, and any other significant care provider. A
          transition plan should also be established during the initiation of the transition process. See Component 3.3 formore information on developing{' '}
          <span className='font-bold'>a transition plan</span>
        </p>
        <ResourcesContentLinks
          resourceClickToId='resources-lists'
          titlesAndLinks={[
            {
              title: 'To learn more about holistic transitions and avoiding unforseen circumstances',
              links: [
                {
                  linkText: 'Complex Care for Kids Ontario Youth Transition to Adult Care Toolkit- Caregiver and Youth Checklist & Transition Resource ',
                  link: 'https://www.pcmch.on.ca/wp-content/uploads/2022/05/CCKO-Youth-Transition-Caregiver_Youth-Checklist_-Final_Feb222022-Fillable.pdf',
                },
              ],
            },
            {
              title: 'To learn more about integrated care pathways:',
              links: [
                {
                  linkText:
                    'The Ministries of Community & Social Services and Children and Youth Services, Provincial Transition Planning Framework for Young People With Developmental Disabilities',
                  link: 'https://coordinatedaccess.ca/wp-content/uploads/2015/07/Transition-Planning-Framework-Final-English.pdf',
                },
              ],
            },
          ]}
        />

        <Quote
          mt={14}
          position='justify-center'
          title='NOTES FROM A NAVIGATOR'
          quote="My role as a navigator is to connect with families and individuals, patients, who are aging out of [site A], so who are in that transition period…I connect with the family, connect with the youth, to support them in terms of making sure that they're prepared, or they have the tools that they need to have a successful transition when they leave. "
        />
      </section>
      <section id='e2.2' data-section className='pt-10'>
        <h1 className='doc-content-sub-title mb-8'>
          2.2 Establish a transition flow sheet or log book that tracks the completion of important steps as youth transition out of child and adolescent mental health services.
        </h1>
        <p className='mb-6'>
          A transition flow sheet or logbook should be established and consistently updated to track all important steps completed to facilitate the youth’s transition, such as
          confirming the timing of transfer,conducting a <span className='font-bold'>readiness assessment</span> , or identifying stakeholders involved in the youth’s{' '}
          <span className='font-bold'>transition process</span>. A transition flow sheet or logbook supports transition navigators (or the most responsible clinician) track and
          monitor the ongoing transition process of the youth. These logbooks can support clinical decision-making, such as determining the next steps in the youth’s transition
          journey. Tracking also enables transition navigators to observe youth retention within the program. Data collected within the flow sheet or logbook can also be used to:
          1) track a youth’s progress through the transition plan,including when and who discussed each component with youth; and 2) evaluate transition outcomes, at both the
          individual (i.e. change in transition readiness) and program-level (i.e. total number of youth supported within the program annually.).
        </p>
        <p className='mb-8'>
          Transition flow sheets or logbooks can be developed and managed on shared drives (i.e., OneDrive)and/or on electronic platforms (i.e., REDCap) so they can be easily
          accessed by transition navigators and/or the clinician most responsible for transitions.
        </p>
        <ResourcesContentLinks
          resourceClickToId='resources-lists'
          titlesAndLinks={[
            {
              title: 'For a database to track transition stages',
              links: [
                {
                  linkText: 'NEAT Study Clinical Tracking Database',
                  link: '',
                },
              ],
            },
            {
              title: 'For an overview of the transition process',
              links: [
                {
                  linkText: 'GotTransition, Sample Individual Transition Flow Sheet',
                  link: 'https://gottransition.org/6ce/?leaving-flow-sheet',
                },
              ],
            },
          ]}
        />
        <Quote
          author='Youth'
          mt={14}
          position='justify-end'
          quote='This holds youth and support staff responsible for the transition and also logs any errors or miss-steps that could happen during the transition. It could help you all figure out at what points the transition is smooth and when it is not.'
        />
        <Quote
          author='Clinician'
          mt={14}
          position='justify-end'
          quote='In my experience any one clinician transitions few youth in a one year time frame so not likely to remember all tasks necessary to maximize the potential for success. '
        />
      </section>
    </section>
  );
}
