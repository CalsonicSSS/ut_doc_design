import React from 'react';
import HighlightTextButton from '@/components/Doc/HighlightTextButton';
import HighlightText from '@/components/Doc/HighlightText';
import AuthorReference from '@/components/Doc/AuthorReference';
import { ResourcesContentLinks } from '@/components/Doc/ResourcesBulletContent';
import Quote from '@/components/Doc/Quote';

export default function SubSection1_2() {
  return (
    <div className='doc-content-text'>
      <HighlightTextButton
        clickToId='gt-F'
        title='Family members/caregivers'
        tooltipDesc='Family members/caregivers comprises anyone that the youth identifies they want to be involved in their care. Family members/caregivers for youth could include biological and chosen family members, caregivers and guardians, partners, siblings, and/or adult allies.'
      ></HighlightTextButton>
      <p className='mt-8 mb-6'>
        An organization-specific transition policy serves to outline all major decisions and actions, and all activities that take place during the{' '}
        <HighlightText content='transition process' clickToId='gt-T' /> including roles and responsibilities of all individuals involved in the transition. A policy is set by the
        organization and overviews the organizational approach to care transitions that might be put into action through specific protocols or procedures.
      </p>
      <p className='mb-8'>
        Making transition policies publicly available facilitates patient empowerment by addressing the barriers that patients may face when accessing care. Patients often have
        little to no ability to influence the systems in which they access care for their own needs. Typically, services are designed, altered, and negotiated by funders and care
        providers, as opposed to those who access care, or their advocates{' '}
        <AuthorReference
          refName='(Lau, 2019)'
          href='https://ebooks.iospress.nl/volume/improving-usability-safety-and-patient-outcomes-with-health-information-technology-from-research-to-practice'
        />
        . Having organizational care policies publicly available allows patients and/or their supporters to access this tool to support their overall health literacy, navigation of
        the system in which they are accessing care, and gain additional knowledge or understanding about their condition and any interventions they may receive{' '}
        <AuthorReference
          refName='(Lau, 2019)'
          href='https://ebooks.iospress.nl/volume/improving-usability-safety-and-patient-outcomes-with-health-information-technology-from-research-to-practice'
        />
        . This will also allow for informed, empowered decision making within care processes.
      </p>
      <ResourcesContentLinks
        resourceClickToId={'resources-lists'}
        contents={[
          {
            title: 'For examples of transition policies',
            linkObjs: [
              {
                linkText: 'GotTransition, Sample Transition and Care Policies/Guides',
                link: 'https://www.gottransition.org/6ce/?leaving-ImplGuide-policy-examples',
                tooltip: 'As part of the GotTransition Implementation Guide, this resource directs to a number of example transition policies for youth physical health care.',
              },
            ],
          },
          {
            title: 'To learn more about integrated care pathways:',
            linkObjs: [
              {
                linkText: 'Alberta Health Services, Care Transitions Policy',
                link: 'https://extranet.ahsnet.ca/teams/policydocuments/1/clp-amh-ahs-care-transitions-amh-13.pdf ',
                tooltip:
                  'This example policy overviews the province’s approach to mental health transitions in care, including scope, principles, and key definitions. Note that this example is not specific to child-toadult care transitions.',
              },
            ],
          },
        ]}
      />
      <Quote
        author='Clinician'
        quote='[A transition policy] should be built centrally with input from family members/caregivers and shared with service providers to guide principles of transition care and to ensure standardizing of processes.'
      />
    </div>
  );
}
