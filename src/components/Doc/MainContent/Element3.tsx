import React from 'react';
import { ResourcesContentLinks } from '../ResourcesBulletContent';
import Quote from '../Quote';
import HighlightTextButton from '../HighlightTextButton';
import Link from 'next/link';
import { LogOut } from 'lucide-react';
import { ScrollManager } from '../utils';
import AuthorReference from '@/components/AuthorReference';
import HighlightText from '../HighlightText';

export default function Element3() {
  return (
    <section id='e3' data-section className='py-14 doc-content-text border-b-[1px] lg:px-0 px-5'>
      <h1 className='doc-content-title'>Element 3 Organizational Transition Policy </h1>
      <section id='e3.1' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>
          {
            ' 3.1 Conduct regular transition readiness assessments, and in collaboration with youth (and family members/caregivers, if appropriate) identify youths’ needs and goals,update regularly.'
          }
        </h1>
        <p className='mb-6'>
          Transition readiness refers to the level of ability to self-manage illness (with tasks in domains such as managing prescriptions, making appointments, and communicating
          with care providers, etc.) and navigate to the adult mental health care system.
        </p>
        <p className='mb-8'>
          Assessing transition readiness early (i.e. at least 6 months prior to planned transitions in care) and regularly throughout the period leading to the transfer of care can
          help to prioritize learning areas youth need support developing (i.e. self-management of prescriptions) before transitioning out of child and youth mental health
          services. Regular transition readiness re-assessment (i.e. every 6 months, or every third appointment) can help to assess progress in different areas of need and to work
          with youth to identify their evolving transition and care goals throughout the process.
        </p>
        <ResourcesContentLinks
          resourceClickToId='resources-lists'
          contents={[
            {
              linkObjs: [
                {
                  linkText: 'The Transition Readiness Assessment Questionnaire (TRAQ 6.0)',
                  link: 'https://www.etsu.edu/com/pediatrics/traq/',
                  tooltip:
                    'The TRAQ is an assessment tool that clinicians can use to help assess youths’ readiness to navigate different aspects of the adult health care system and helps identify areas for focused interventions.',
                },
                {
                  linkText: 'Validation of the Transition Readiness Assessment Questionnaire (TRAQ) 5.0 for use among youth in mental health services',
                  link: 'https://onlinelibrary.wiley.com/doi/10.1111/cch.13035',
                  tooltip:
                    'This paper describes a recent study which tested the TRAQ in a sample of youth with mental health care needs to ensure it is an appropriate tool to use for youth with mental health needs.',
                },
              ],
            },
          ]}
        />
        <Quote
          title='NOTES FROM A NAVIGATOR'
          quote="In that [readiness] assessment, I'm looking for information about [the youth]… is the parent supported...It could also be about school... We also assess for sexuality, for suicidality, to see if they have a crisis plan in place. Also talk about medication…From that assessment, I have a pretty good idea of this family's gonna need a weekly call…or the youth feels that they're confident enough to handle some of the transition pieces on their own. "
        />
      </section>
      <section id='e3.2' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>
          3.2 Provide youth (and their family members/caregivers, if appropriate) information about what to expect from adult mental health services.
        </h1>

        <p className='mt-8 mb-6'>
          Youth transitioning from child to adult mental health services are in a crucial period of life where they are experiencing many developmental milestones as well as new
          life experiences <AuthorReference refName='(Borah et al., 2021)' href='https://www.tandfonline.com/doi/full/10.1080/15332985.2021.1894629' />. The combination of these
          changes may further complicate healthcare transitions.
        </p>
        <p className='mb-6'>
          Youth identified several different factors that make transitions difficult including: a shifting awareness of the meaning of transition as well as the appropriate age for
          transition, a lack of transition readiness, limited involvement in the transition process, confusion over roles and responsibilities in the{' '}
          <HighlightText content='transition process' clickToId='gt-T' /> and concerns over transition gaps leading to poor mental health outcomes{' '}
          <AuthorReference refName='(Cleverley et al., 2020)' href='https://bmcpsychiatry.biomedcentral.com/articles/10.1186/s12888-020-02516-0' />.
        </p>
        <p className='mb-8'>
          One of the most significant changes include system differences between <HighlightText content='child and adolescent mental health services' clickToId='gt-C' /> and{' '}
          <HighlightText content='adult mental health services' clickToId='gt-A' />. Youth have identified a decreased support in adult mental health services and lack of
          information sharing between child and adult health services as major differences. Child and adolescent mental health services are often described as nurturing and
          prioritize a family unit while adult mental health services consider youth as autonomous adults and often have limited family involvement{' '}
          <AuthorReference refName='(Borah et al., 2021)' href='https://www.tandfonline.com/doi/full/10.1080/15332985.2021.1894629' />. This distinct difference between the two
          services can lead to a sharp change in type and level of care and increases the risk of care disengagement{' '}
          <AuthorReference refName='(Borah et al., 2021)' href='https://www.tandfonline.com/doi/full/10.1080/15332985.2021.1894629' />. Youth have reported feeling underprepared
          for the transition process, specifically not having enough information about their options{' '}
          <AuthorReference refName='(Cleverley et al., 2020)' href='https://bmcpsychiatry.biomedcentral.com/articles/10.1186/s12888-020-02516-0' />. As such, youth have identified
          having the opportunity to be partners in the planning process and ensuring information about the process be clearly communicated as a priority of transitions in care{' '}
          <AuthorReference refName='(Cleverley et al., 2020)' href='https://bmcpsychiatry.biomedcentral.com/articles/10.1186/s12888-020-02516-0' />.
        </p>
        <ResourcesContentLinks
          resourceClickToId='resources-lists'
          contents={[
            {
              title: 'For more information on adult mental health systems',
              linkObjs: [
                {
                  linkText: 'CMHA, Transitioning from Youth to Adult Mental Health Services',
                  link: 'https://ontario.cmha.ca/documents/transitioning-from-youth-to-adult-mental-health-services/',
                  tooltip:
                    'The Canadian Mental Health Association highlights some important steps to consider when transitioning from youth to adult mental health services, including information on what to expect in the adult system as well as some common challenges that occur during transition. ',
                },
                {
                  linkText: 'EMPOWER',
                  link: 'https://empower.ca/en/static/ontario-mental-health-navigation-tool',
                  tooltip: 'EMPOWER Health provides an overview of Ontario’s mental health system and the different points of access for health care and mental health services.',
                },
              ],
            },
          ]}
        />
      </section>
      <section id='e3.3' data-section className='pt-10'>
        <h1 className='doc-content-sub-title mb-8'>
          3.3 Develop individualized transition plan in collaboration with youth (and their family members/caregivers, if appropriate) a minimum of 6-months before planned
          transition, or as early as possible.{' '}
        </h1>
        <HighlightTextButton
          title='Transition plan'
          tooltipDesc='A living document which outlines the goals of transition, individual care needs, and interventions throughout the transition process.'
          clickToId='gt-T'
        />
        <p className='mt-8 mb-6'>
          The transition plan, which is a living document that outlines the plan of care throughout the <HighlightText content='transition process' clickToId='gt-T' />, should be
          co-created with youth and their identified care team. This document includes goals for transition and planned interventions which will be informed by ongoing transition{' '}
          <HighlightText content='readiness assessment' clickToId='gt-R' /> and youth priorities for transition care.
        </p>
        <p className='mb-8'>
          This plan should be continuously updated throughout the pre-transition and transition period and should include documented progress through identified tasks. The care
          team member responsible for each task should be clearly identified in this document and the plan should be shared with the full care team. This document should be sent to
          the receiving clinical team along with all the other relevant care documentation at the time of care transfer.
        </p>
        <ResourcesContentLinks
          resourceClickToId='resources-lists'
          contents={[
            {
              title: 'To learn more about transition template:',
              linkObjs: [
                {
                  linkText: 'Got Transition, Transition Care Plan Template',
                  link: 'https://www.gottransition.org/6ce/?leaving-plan-care',
                  tooltip:
                    'This sample Transition Care Plan template is intended to be used jointly with youth and their parent/caregiver, if appropriate, to set goals and outline a plan of action that combines health and personal goals.',
                },
              ],
            },
            {
              title: 'To learn more about service transition plan:',
              linkObjs: [
                {
                  linkText: 'Mindyourmind, Service Transition Plan',
                  link: 'https://mindyourmind.ca/games-tools/personal-growth/service-transition-plan/',
                  tooltip:
                    'This transition tool is specific to mental health transitions and includes checklists of tasks at different stages in the transition process which can be incorporated into a transition plan and used to identify key tasks, milestones, and responsible persons.',
                },
              ],
            },
          ]}
        />
        <Quote
          title='NOTES FROM A NAVIGATOR'
          quote="As they become adults, and they have to navigate on their own, I do believe that that's where our role really makes a big difference in terms of meeting the youth where they are at, and talking to them and finding out what their needs are…And working collaboratively with them on creating a transition plan and then with the transition plan, we then work strategically to check everything off the list."
        />
      </section>
    </section>
  );
}
