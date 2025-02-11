import React from 'react';
import LinkList from '../LinkList';

export default function ResourcesLists() {
  return (
    <section id='resources-lists' data-section className='py-14 doc-content-text border-b-[1px] lg:px-0 px-5'>
      <h1 className='doc-content-title'>Resource List</h1>
      <h1 className='doc-content-sub-title mt-10 mb-8'>Element 1</h1>
      <LinkList
        linkContents={[
          { href: '#element-1', text: "1.1 NICE, transitions from children's to adults 'services pathway" },
          { href: '#element-2', text: '1.1 Key attributes of integrated community-based youth service hubs for mental health: a scoping review' },
          { href: '#element-3', text: '1.1 Knowledge Institute on Child and Youth Mental Health and Addictions Care Pathways' },
          { href: '#element-4', text: '1.2 GotTransition, Sample Transition and Care Policies/Guides' },
          { href: '#element-5', text: '1.2 Alberta Health Services: Care Transitions Policy' },
          { href: '#element-6', text: '1.3 KFL&A, Youth Transitioning Protocol' },
          {
            href: '#element-7',
            text: '1.3 Youth Mental Health Transition Protocol Agreement between Ministry for Children and Family Development and Ministry of Health and Health Authorities',
          },
          { href: '#element-8', text: '1.4 Registered Nurses Association of Ontario (RNAO), Transitions in Care and Services Clinical Best Practice Guideline' },
          { href: '#element-9', text: '1.4 Florida Health and Transition Services' },
          { href: '#element-10', text: '1.4 New York State Institute for Health Transition Training, Transition Skills Resources' },
          { href: '#element-11', text: '1.4 Florida Keys Area Health Education Center Inc., Health Care Transition Training Program,' },
          { href: '#element-12', text: '1.4 Florida Health and Transition Services, Florida Youth 2 Adult Transition (FLY2AT) Course' },
          { href: '#element-13', text: '1.5 The Family Caregiver Activation in Transitions Tool (FCAT)' },
          { href: '#element-14', text: '1.5 Alberta Health Services, Enhancing Concurrent Capability Toolkit Transitions in Care Quick Reference Sheet' },
          {
            href: '#element-15',
            text: '1.5 Facilitating Effective Transitions from Hospital to Community for Children and Adolescent Mental Health Services: Overview of the Transition Support Worker Role and Function',
          },
          { href: '#element-16', text: '1.6 Knowledge Institute, Youth Engagement Standards' },
          { href: '#element-17', text: '1.6 The Public and Patient Engagement Evaluation Tool (PPEET) Participant Questionnaire' },
          { href: '#element-18', text: '1.6 The Core Components of Effective Youth Transitions (CCEYT)' },
          { href: '#element-19', text: '1.7 Health Quality Ontario Measurement Guide' },
          { href: '#element-20', text: '1.7 NEAT study protocol' },
          { href: '#element-21', text: '1.7 Core Components of Effective Youth Transitions (CCEYT)' },
          { href: '#element-22', text: '1.7 Navigation Satisfaction Tool (NAVSAT)' },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8'>Element 2</h1>
      <LinkList
        linkContents={[
          {
            href: '#element-1',
            text: '2.1 The Ministries of Community & Social Services and Children and Youth Services, Provincial Transition Planning Framework for Young People With Developmental Disabilities',
          },
          { href: '#element-2', text: '2.1 Complex Care for Kids Ontario Youth Transition to Adult Care Toolkit- Caregiver and Youth Checklist & Transition Resource Guide' },
          { href: '#element-3', text: '2.2 NEAT Study Clinical Tracking Database' },
          { href: '#element-4', text: '2.2 GotTransition, Sample Individual Transition Flow Sheet ' },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8'>Element 3</h1>
      <LinkList
        linkContents={[
          {
            href: '#element-1',
            text: '3.1 The Transition Readiness Assessment Questionnaire (TRAQ 6.0)',
          },
          { href: '#element-2', text: '3.1 Validation of the Transition Readiness Assessment Questionnaire (TRAQ) 5.0 for use among youth in mental health services' },
          { href: '#element-3', text: '3.2 CMHA, Transitioning from Youth to Adult Mental Health Services' },
          { href: '#element-4', text: '3.3 Got Transition, Transition Care Plan Template' },
          { href: '#element-4', text: '3.3 Mindyourmind, Service Transition Plan' },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8'>Element 4</h1>
      <LinkList
        linkContents={[
          {
            href: '#element-1',
            text: '4.1 Facilitating Effective Transitions from Hospital to Community for Children and Adolescent Mental Health Services: Overview of the Transition Support Worker Role and Function',
          },
          { href: '#element-2', text: '4.1 The Sunnybrook Family Navigation  Project' },
          { href: '#element-3', text: '4.1 Michael Garron Transitional Youth Program' },
          { href: '#element-4', text: '4.3 Niagara Region Adult and Youth Mental Health Services' },
          { href: '#element-4', text: '4.7 Association of Primary Care Continuity With Outcomes Following Transition to Adult Care for Adolescents With Severe Mental Illness' },
          { href: '#element-4', text: '4.7 CAMH Mental Health and Primary Care Policy Framework' },
          { href: '#element-4', text: '4.8 Youth Wellness Hubs Ontario' },
          { href: '#element-4', text: '4.8 Foundry (British Columbia) ' },
          { href: '#element-4', text: '4.8 Kickstand (Alberta)' },
          { href: '#element-4', text: '4.8 Aire Ouverte (Quebec)' },
          { href: '#element-4', text: '4.8 Access Open Minds (partnership with Esakoni First Nation, Nova Scotia)' },
          { href: '#element-4', text: '4.9 Mental Health Commission of Canada, Guidelines for the Practice and Training of Peer Support' },
          { href: '#element-4', text: '4.9 Knowledge Institute on Child and Youth Mental Health and Addictions, Peer Support Introduction' },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8'>Element 5</h1>
      <LinkList
        linkContents={[
          { href: '#element-2', text: '5.1 Alberta Health Services, Warm Handoffs' },
          { href: '#element-3', text: '5.2 Nova Scotia Health, Information Transfer at Care Transitions Policy' },
          { href: '#element-4', text: '5.2 Women’s College Hospital, INFORMATION TRANSFER AT CARE TRANSITIONS ' },
          { href: '#element-4', text: '5.2 RNAO My Transitional Care Plan©' },
        ]}
      />
    </section>
  );
}
