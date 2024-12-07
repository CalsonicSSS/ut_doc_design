import React from 'react';
import HighlightTextButton from '../HighlightTextButton';
import DotList from '../DotList';
import Quote from '../Quote';
import ResourcesBulletContent from '../ResourcesBulletContent';

export default function Element1() {
  return (
    <section id='e1' data-section className='py-14 doc-content-text border-b-[1px]'>
      <h1 className='doc-content-title'>Element 1 Organizational Transition Policy </h1>
      <section id='e1.1' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>1.1 Develop an integrated care pathway that describes the steps that make up the transition process.</h1>
        <div className='flex my-8'>
          <HighlightTextButton>Integrated care pathway</HighlightTextButton>
          <HighlightTextButton>Transition process</HighlightTextButton>
        </div>
        <p className='mb-6'>
          Integrated care pathways are an important aspect of ensuring <span className='font-bold'>continuity of care</span> for youth navigating a transition in their mental
          health care. These pathways create transparency in process and provide a shared understanding of important steps and concepts for everyone involved in the care
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

        <ResourcesBulletContent
          titleAndContents={[
            { title: 'To learn more about transition pathways:', contents: ["Nice, transitions from children's to adults 'services pathway"] },
            {
              title: 'To learn more about integrated care pathways:',
              contents: [
                'Key attributes of integrated community-based youth service hubs for mental health: a scoping review',
                'Knowledge Institute on Child and Youth Mental Health and Addictions Care Pathways',
              ],
            },
          ]}
        />
      </section>
      <section id='e1.2' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>
          1.2 Develop an organization-specific transition policy with youth (with input from family members/caregivers) that describes the organization&apos;s approach to mental
          health care transitions, and make it publicly available.
        </h1>
        <HighlightTextButton>Family members/caregivers</HighlightTextButton>
        <p className='mt-8 mb-6'>
          An organization-specific transition policy serves to outline all major decisions and actions, and all activities that take place during the{' '}
          <span className='font-bold'>transition process </span> including roles and responsibilities of all individuals involved in the transition. A policy is set by the
          organization and overviews the organizational approach to care transitions that might be put into action through specific protocols or procedures.
        </p>
        <p className='mb-8'>
          Making transition policies publicly available facilitates patient empowerment by addressing the barriers that patients may face when accessing care. Patients often have
          little to no ability to influence the systems in which they access care for their own needs. Typically, services are designed, altered, and negotiated by funders and care
          providers, as opposed to those who access care, or their advocates <span className='text-navy-0 underline'>(Lau, 2019).</span> Having organizational care policies
          publicly available allows patients and/or their supporters to access this tool to support their overall health literacy, navigation of the system in which they are
          accessing care, and gain additional knowledge or understanding about their condition and any interventions they may receive{' '}
          <span className='text-navy-0 underline'>(Lau, 2019).</span> This will also allow for informed, empowered decision making within care processes.
        </p>
        <ResourcesBulletContent
          titleAndContents={[
            { title: 'For examples of transition policies', contents: ['GotTransition, Sample TRansition and Care Policies/Guides'] },
            {
              title: 'To learn more about integrated care pathways:',
              contents: ['Alberta Health Services: Care Transitions Policy'],
            },
          ]}
        />
        <Quote
          mt={14}
          position='justify-center'
          author='Clinician'
          quote='[A transition policy] should be built centrally with input from family members/caregivers and shared with service providers to guide principles of transition care and to ensure standardizing of processes.
'
        />
      </section>
      <section id='e1.3' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>
          1.3 Develop a youth-centered and developmentally appropriate transition protocol in collaboration with both the child and adolescent mental health services and the adult
          mental health services, that outlines standards for communication and information sharing.
        </h1>
        <div className='flex my-8'>
          <HighlightTextButton>Youth- centered protocol</HighlightTextButton>
          <HighlightTextButton>Developmentally appropriate protocol</HighlightTextButton>
        </div>
        <p className='mb-6'>
          A <span className='font-bold'>transition protocol</span> is individualized to the needs of specific programs, intervention, or patients. It is a written plan that
          specifies procedures to be followed in defined situations and provides detailed description of how all partners will work together to support transitions in care.
        </p>
        <p className='mb-6'>
          A youth-centred and developmentally appropriate protocol ensures that collaborative approaches best address the youth of needs during mental health care transitions. A
          developmentally appropriate approach places focus on development as opposed to chronological age and emphasizes the dynamic nature of adolescence and young adulthood and
          the associated developmental processes, as defining characteristics of care services accessed by these populations{' '}
          <span className='text-navy-0 underline'>(Farre et al., 2015).</span>
        </p>
        <p className='mb-8'>
          Protocols developed in collaboration with partners across care systems, can better address barriers to <span className='font-bold'>continuity of care</span> by explicitly
          outlining the expectations and roles of each partner. Protocols can also change and adapt over time to best reflect the needs, resources, and roles of all partners and
          the youth population they serve.
        </p>
        <ResourcesBulletContent
          titleAndContents={[
            { title: 'Agreement protocols between child and adult agencies', contents: ['KFL&A, Youth Transitioning Protocol'] },
            {
              title: 'Resource to support positive mental health servies',
              contents: ['Youth Mental Health Transition Protocol Agreement between Ministry for', 'Children and Family Development and Ministry of Health and Health Authorities'],
            },
          ]}
        />
      </section>
      <section id='e1.4' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>
          1.4 Ensure that all staff have the knowledge, skills and training to effectively support the agency/services approach to transitions.
        </h1>
        <p className='mb-6'>
          Whole-team approaches are more successful in ensuring the adaptation and ongoing support for new policies in health care. Providing proactive, accessible, and integrated
          education about youth mental health care transitions can create important opportunities for professional and organizational development{' '}
          <span className='text-navy-0'>(Nilsen et al., 2020).</span> Creating a plan to support staff learning and engagement with transition resources ensures every staff member
          understands their role in the transition process as well as the organization&apos;s approach to care transitions{' '}
          <span className='text-navy-0'>(Nilsen et al., 2020).</span> Furthermore, a lack of training and education for care providers has been identified as a major barrier of
          successful youth-to-adult care transition <span className='text-navy-0'>(McDonagh, 2006).</span>
        </p>
        <p className='mb-8'>
          Skills development and training opportunities in youth mental health transitions should be based on the needs of your organization and staff. In cases where staff have an
          active role in the identification and referral of transitional aged youth, required training on assessing transition needs and understanding transition pathways in the
          organization. may be considered. In cases where staff are less involved in the transition process, a regularly updated and centrally available list of transition
          resources may be beneficial. Regardless of the specific learning approach, all staff should regularly review the organizational policy.
        </p>
        <ResourcesBulletContent
          titleAndContents={[
            {
              title: 'Evidence based guidelines for interprofessional teams for effective transitions',
              contents: ['Registered Nurses Association of Ontario (RNAO), Transitions in Care and Services Clinical Best Practice Guideline'],
            },
            {
              title: 'Educational tools to foster skills for effective transitions',
              contents: ['Florida Health and Transition Services', 'New York State Institute for Health Transition Training, Transition Skills Resources'],
            },
            {
              title: 'Resources to support professionals with preparing youth to complete an effective transition',
              contents: [
                'Florida Keys Area Health Education Center Inc., Health Care Transition Training Program, ',
                'Florida Health and Transition Servrvices, Florida Youth 2 Adult Transition (FLY2AT) Course',
              ],
            },
          ]}
        />
      </section>
      <section id='e1.5' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>
          1.5 Determine clear responsibilities for all roles within the organization involved in the transition of care, to be further informed by the needs of each youth.
        </h1>
        <p className='mb-8'>
          Role clarity is an essential component of positive interprofessional collaboration <span className='text-navy-0 underline'>(IPEC, 2016; McLaneyet al., 2022)</span> and a
          clear organizational framework to indicate who has ownership of different aspects of the transition can support teams in successfully planning transition care. At an
          organizational level,determine who is responsible for supporting transitions, including developing a transitions policy,developing capacity and training in care team
          members, and/or development of integrated care pathways for the organization&apos;s transitions. You might consider what “typical” involvement should look like for:
        </p>
        <DotList
          contentList={[
            'Youth making the transition between services',
            <p key={1}>
              <span className='font-bold'>Child and Adolescent Mental Health Services</span> staff
            </p>,
            <p key={2}>
              Community or <span className='font-bold'>Adult Mental Health Services</span> staff
            </p>,
            <p key={3}>
              <span className='font-bold'>Peer support workers</span> (if applicable)
            </p>,
            <p key={4}>
              <span className='font-bold'>Transition Navigators</span> (if applicable)
            </p>,
            <p key={5}>
              <span className='font-bold'>Family members/Caregivers,</span> (if applicable)
            </p>,
          ]}
          ms={[0, 0, 0, 0, 0]}
        />
        <p className='mt-8'>When defining roles and responsibilities, considerations should include:</p>
        <DotList
          contentList={[
            'Who is responsible for transitions at a management or leadership level within the organization? Who is responsible for transitions within the circle of care?',
            'How will youth (and caregivers if appropriate) be involved in the determination of who makes up their transition support team and the process for adapting the care team responsibilities, where possible, to reflect the needs of each individual youth?',
            'How will this process can be incorporated into daily clinical practice (for example, use of clinical rounds to providing ongoing touch points to ensure continued role clarity)?',
          ]}
          ms={[0, 0, 0]}
        />
        <p className='my-8'>The above considerations may be written into the organizational policy discussed in component 1.2</p>
        <ResourcesBulletContent
          titleAndContents={[
            {
              title: 'Rating tool to assess caregivers  involvement and improve interactions with healthcare providers',
              contents: ['The Family Caregiver Activation in Transitions Tool (FCAT)'],
            },
            {
              title: 'Roles and tasks for transition',
              contents: ['Alberta Health Services, Enhancing Concurrent Capability Toolkit Transitions in Care Quick Reference Sheet'],
            },
            {
              title: 'Resource for transition support worker',
              contents: [
                'Facilitating Effective Transitions from Hospital to Community for Children and Adolescent Mental',
                'Health Services: Overview of the Transition Support Worker Role and Function',
              ],
            },
          ]}
        />
        <Quote
          mt={14}
          position='justify-end'
          author='Clinician'
          quote="Speaking from experience, a roadmap and game book as a parent would have been incredibly valuable... I needed to adjust and adapt as my daughter progressed through the recovery lifecycle of her condition. I also needed to learn new skills in order to effectively communicate, respond to 'crisis' situations and problem solve. It would have been valuable to learn this right from the start"
        />
      </section>
      <section id='e1.6' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>1.6 Partner with the youth (and family members/caregivers, if appropriate) at all phases of transition and decision-making</h1>
        <p className='mb-6'>
          Patient or <span className='font-bold'>youth engagement</span> is about working with young people as important partners in their own care. Through partnering with youth
          and their families, if appropriate, care providers can better understand the experiences, needs, and priorities of the individual and work with them to tailor their care.
          During a transition in care, that can include working with youth to understand what resources and transition pathways are most important to them, and supporting them in
          developing the skills to advocate for themselves.
        </p>
        <p className='mb-8'>
          Youth and family engagement can also be important at the organizational or program level.Organizations can partner with youth and families to better understand their
          experiences leading up to or during the transition process. This can help to ensure the transition pathways and policies that are developed are more transparent,
          credible, and responsive.
        </p>
        <ResourcesBulletContent
          titleAndContents={[
            {
              title: 'To learn more about youth engagement best practices',
              contents: ['Knowledge Institute, Youth Engagement Standards'],
            },
            {
              title: 'For tools to support the integration and evaluation of youth and family voice',
              contents: ['The Public and Patient Engagement Evaluation Tool (PPEET) Participant Questionnaire', 'The Core Components of Effefective Youth Transitions (CCEYT)'],
            },
          ]}
        />
      </section>
      <section id='e1.7' data-section className='pt-10'>
        <h1 className='doc-content-sub-title mb-8'>{'1.7 Establish a plan to evaluate the organization’s transition protocol.'}</h1>
        <HighlightTextButton>Transition protocol</HighlightTextButton>
        <p className='mb-6 mt-8'>
          It is important to identify key indicators for evaluation early in the process of implementing your organization&apos;s transition protocol (see workbook evaluation
          section for a discussion of different indicator types). This will allow you to understand how your transition protocol is impacting or improving transitions in your
          organization. It will also ensure that you are collecting the necessary information to conduct your evaluation from the get-go.
        </p>
        <p className='mb-6'>
          Your evaluation plan will depend on which transition-related outcomes have been identified as priorities for your organization. For example, if you choose to implement
          transition case conferences (or“warm handover” meetings) as part of your organization&apos;s transition protocol, your evaluation plan might include measuring the
          proportion of transitioning youth who receive a <span className='font-bold'>warm handover</span> , or assessing clinician-reported barriers and facilitators to conducting
          warm handovers.
        </p>
        <p className='mb-8'>
          When developing an evaluation plan, consider how you can work with patients/ youth and caregivers to identify priority outcomes to evaluate, as well as what evaluation
          methods will most accurately capture their satisfaction with or outcomes from your transition interventions. For example, your organization may have a patient advisory
          council whose expertise you can draw upon, or you may develop the opportunity to conduct focus groups with caregivers
        </p>
        <ResourcesBulletContent
          titleAndContents={[
            {
              title: 'For guidance to develop evaluation strategies',
              contents: ['Health Quality Ontario Measurement Guide', 'NEAT study protocol'],
            },
            {
              title: 'For example of evaluation measures',
              contents: ['Core Components of Effective Youth Transitions (CCEYT)', 'Navigation Satisfaction Tool (NAVAVSAT)'],
            },
          ]}
        />
      </section>
    </section>
  );
}
