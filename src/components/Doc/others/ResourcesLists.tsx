import React from 'react';
import LinkList from '../LinkList';

export default function ResourcesLists() {
  return (
    <section id='resources-lists' data-section className='py-14 doc-content-text border-b-[1px] lg:px-0 px-5'>
      <h1 className='doc-content-title'>Resource List</h1>
      <h1 className='doc-content-sub-title mt-10 mb-8'>Element 1</h1>
      <LinkList
        linkContents={[
          { href: '', text: "1.1 NICE, transitions from children's to adults 'services pathway" },
          { href: '', text: '1.1 Key attributes of integrated community-based youth service hubs for mental health: a scoping review' },
          { href: '', text: '1.1 Knowledge Institute on Child and Youth Mental Health and Addictions Care Pathways' },
          { href: '', text: '1.2 GotTransition, Sample Transition and Care Policies/Guides' },
          { href: '', text: '1.2 Alberta Health Services: Care Transitions Policy' },
          { href: '', text: '1.3 KFL&A, Youth Transitioning Protocol' },
          {
            href: '',
            text: '1.3 Youth Mental Health Transition Protocol Agreement between Ministry for Children and Family Development and Ministry of Health and Health Authorities',
          },
          { href: '', text: '1.4 Registered Nurses Association of Ontario (RNAO), Transitions in Care and Services Clinical Best Practice Guideline' },
          { href: '', text: '1.4 Florida Health and Transition Services' },
          { href: '', text: '1.4 New York State Institute for Health Transition Training, Transition Skills Resources' },
          { href: '', text: '1.4 Florida Keys Area Health Education Center Inc., Health Care Transition Training Program,' },
          { href: '', text: '1.4 Florida Health and Transition Services, Florida Youth 2 Adult Transition (FLY2AT) Course' },
          { href: '', text: '1.5 The Family Caregiver Activation in Transitions Tool (FCAT)' },
          { href: '', text: '1.5 Alberta Health Services, Enhancing Concurrent Capability Toolkit Transitions in Care Quick Reference Sheet' },
          {
            href: '',
            text: '1.5 Facilitating Effective Transitions from Hospital to Community for Children and Adolescent Mental Health Services: Overview of the Transition Support Worker Role and Function',
          },
          { href: '', text: '1.6 Knowledge Institute, Youth Engagement Standards' },
          { href: '', text: '1.6 The Public and Patient Engagement Evaluation Tool (PPEET) Participant Questionnaire' },
          { href: '', text: '1.6 The Core Components of Effective Youth Transitions (CCEYT)' },
          { href: '', text: '1.7 Health Quality Ontario Measurement Guide' },
          { href: '', text: '1.7 NEAT study protocol' },
          { href: '', text: '1.7 Core Components of Effective Youth Transitions (CCEYT)' },
          { href: '', text: '1.7 Navigation Satisfaction Tool (NAVSAT)' },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8'>Element 2</h1>
      <LinkList
        linkContents={[
          {
            href: '',
            text: '2.1 Complex Care for Kids Ontario Youth Transition to Adult Care Toolkit- Caregiver and Youth Checklist & Transition Resource Guide',
          },
          {
            href: '',
            text: '2.1 The Ministries of Community & Social Services and Children and Youth Services, Provincial Transition Planning Framework for Young People With Developmental Disabilities',
          },
          {
            href: '',
            text: '2.2 NEAT Study Clinical Tracking Database',
          },
          {
            href: '',
            text: '2.2 GotTransition, Sample Individual Transition Flow Sheet',
          },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8'>Element 3</h1>
      <LinkList
        linkContents={[
          {
            href: '',
            text: '3.1 The Transition Readiness Assessment Questionnaire (TRAQ 6.0)',
          },
          { href: '', text: '3.1 Validation of the Transition Readiness Assessment Questionnaire (TRAQ) 5.0 for use among youth in mental health services' },
          { href: '', text: '3.2 CMHA, Transitioning from Youth to Adult Mental Health Services' },
          { href: '', text: '3.2 EMPOWER' },
          { href: '', text: '3.3 Got Transition, Transition Care Plan Template' },
          { href: '', text: '3.3 Mindyourmind, Service Transition Plan' },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8'>Element 4</h1>
      <LinkList
        linkContents={[
          {
            href: '',
            text: '4.1 Facilitating Effective Transitions from Hospital to Community for Children and Adolescent Mental Health Services: Overview of the Transition Support Worker Role and Function',
          },
          { href: '', text: '4.1 The Sunnybrook Family Navigation  Project' },
          { href: '', text: '4.1 Michael Garron Transitional Youth Program' },
          { href: '', text: '4.3 Niagara Region Adult and Youth Mental Health Services' },
          { href: '', text: '4.7 Association of Primary Care Continuity With Outcomes Following Transition to Adult Care for Adolescents With Severe Mental Illness' },
          { href: '', text: '4.7 CAMH Mental Health and Primary Care Policy Framework' },
          { href: '', text: '4.8 Youth Wellness Hubs Ontario ' },
          { href: '', text: '4.8 Foundry (British Columbia) ' },
          { href: '', text: '4.8 Kickstand (Alberta) ' },
          { href: '', text: '4.8 Aire Ouverte (Quebec) ' },
          { href: '', text: '4.8 Access Open Minds (partnership with Esakoni First Nation, Nova Scotia)' },
          { href: '', text: '4.9 Mental Health Commission of Canada, Guidelines for the Practice and Training of Peer Support' },
          { href: '', text: '4.9 Knowledge Institute on Child and Youth Mental Health and Addictions, Peer Support Introduction' },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8'>Element 5</h1>
      <LinkList
        linkContents={[
          { href: '', text: '5.1 Alberta Health Services, Warm Handoffs' },
          { href: '', text: '5.2 Nova Scotia Health, Information Transfer at Care Transitions Policy' },
          { href: '', text: '5.2 Women’s College Hospital, INFORMATION TRANSFER AT CARE TRANSITIONS' },
          { href: '', text: '5.2 RNAO My Transitional Care Plan©' },
        ]}
      />
    </section>
  );
}
