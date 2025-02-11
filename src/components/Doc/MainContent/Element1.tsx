import React from 'react';
import HighlightTextButton from '../HighlightTextButton';
import DotList from '../DotList';
import Quote from '../Quote';
import { ResourcesContentLinks } from '../ResourcesBulletContent';
import HighlightText from '../HighlightText';
import AuthorReference from '@/components/AuthorReference';

export default function Element1() {
  return (
    <section id='e1' data-section className='py-14 doc-content-text border-b-[1px] lg:px-0 px-5'>
      <h1 className='doc-content-title'>Element 1 Organizational Transition Policy </h1>
      <section id='e1.1' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>1.1 Develop an integrated care pathway that describes the steps that make up the transition process.</h1>
        <div className='flex my-8'>
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

        <ResourcesContentLinks
          resourceClickToId={'resources-lists'}
          contents={[
            {
              title: 'To learn more about transition pathways:',
              linkObjs: [
                {
                  linkText: "NICE, transitions from children's to adults 'services pathway",
                  link: 'https://www.nice.org.uk/guidance/health-and-social-care-delivery/service-transition',
                  tooltip:
                    'The UK’s National Institute for Health and Care Excellence (NICE) provides several relevant guidelines on how to facilitate transitions between children and adult health and social care services in a variety of settings.',
                },
              ],
            },
            {
              title: 'To learn more about integrated care pathways:',
              linkObjs: [
                {
                  linkText: 'Key attributes of integrated community-based youth service hubs for mental health: a scoping review',
                  link: 'https://ijmhs.biomedcentral.com/articles/10.1186/s13033-019-0306-7',
                  tooltip:
                    'This paper provides an overview of the models of care used in several international integrated community-based youth hubs and outlines the common principles and characteristics shared in these models to address youth mental health needs.',
                },
                {
                  linkText: 'Knowledge Institute on Child and Youth Mental Health and Addictions Care Pathways',
                  link: 'https://www.cymha.ca/en/projects/care-pathways.aspx',
                  tooltip:
                    'This resource, developed by the Ontario-based Knowledge Institute, provides a description of care pathways in child and youth mental health with some examples from primary care. ',
                },
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
          . Having organizational care policies publicly available allows patients and/or their supporters to access this tool to support their overall health literacy, navigation
          of the system in which they are accessing care, and gain additional knowledge or understanding about their condition and any interventions they may receive{' '}
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
                },
              ],
            },
            {
              title: 'To learn more about integrated care pathways:',
              linkObjs: [
                {
                  linkText: 'Alberta Health Services, Care Transitions Policy',
                  link: 'https://extranet.ahsnet.ca/teams/policydocuments/1/clp-amh-ahs-care-transitions-amh-13.pdf ',
                },
              ],
            },
          ]}
        />
        <Quote
          author='Clinician'
          quote='[A transition policy] should be built centrally with input from family members/caregivers and shared with service providers to guide principles of transition care and to ensure standardizing of processes.'
        />
      </section>
      <section id='e1.3' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>
          1.3 Develop a youth-centered and developmentally appropriate transition protocol in collaboration with both the child and adolescent mental health services and the adult
          mental health services, that outlines standards for communication and information sharing.
        </h1>
        <div className='flex my-8'>
          <HighlightTextButton clickToId='gt-Y' title='Youth- centred protocol' tooltipDesc='A protocol that is youth-centred is one that meets the needs of the youth involved.' />
          <HighlightTextButton
            clickToId='gt-D'
            title='Developmentally appropriate protocol'
            tooltipDesc='A developmentally appropriate protocol is sensitive to the needs of youth and their particular life circumstances and life goals.'
          />
        </div>
        <p className='mb-6'>
          A <HighlightText content='transition protocol' clickToId='gt-T' /> is individualized to the needs of specific programs, intervention, or patients. It is a written plan
          that specifies procedures to be followed in defined situations and provides detailed description of how all partners will work together to support transitions in care.
        </p>
        <p className='mb-6'>
          A youth-centred and developmentally appropriate protocol ensures that collaborative approaches best address the youth of needs during mental health care transitions. A
          developmentally appropriate approach places focus on development as opposed to chronological age and emphasizes the dynamic nature of adolescence and young adulthood and
          the associated developmental processes, as defining characteristics of care services accessed by these populations{' '}
          <AuthorReference refName='(Farre et al., 2015)' href='https://adc.bmj.com/content/100/2/144' />.
        </p>
        <p className='mb-8'>
          Protocols developed in collaboration with partners across care systems, can better address barriers to <HighlightText content='continuity of care' clickToId='gt-C' /> by
          explicitly outlining the expectations and roles of each partner. Protocols can also change and adapt over time to best reflect the needs, resources, and roles of all
          partners and the youth population they serve.
        </p>
        <ResourcesContentLinks
          resourceClickToId={'resources-lists'}
          contents={[
            {
              title: 'Agreement protocols between child and adult agencies',
              linkObjs: [
                {
                  linkText: 'KFL&A, Youth Transitioning Protocol',
                  link: 'https://www.improvingsystems.ca/projects/youth-transition-protocol-in-kfla',
                },
              ],
            },
            {
              title: 'Resource to support positive mental health servies',
              linkObjs: [
                {
                  linkText: 'Youth Mental Health Transition Protocol Agreement between Ministry for Children and Family Development and Ministry of Health and Health Authorities',
                  link: 'https://www2.gov.bc.ca/assets/gov/health/managing-your-health/mental-health-substance-use/child-teen-mental-health/y2a_protocol.pdf',
                },
              ],
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
          <AuthorReference refName='(Nilsen et al., 2020)' href='https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-020-4999-8' />. Creating a plan to support staff
          learning and engagement with transition resources ensures every staff member understands their role in the transition process as well as the organization&apos;s approach
          to care transitions <AuthorReference refName='(Nilsen et al., 2020)' href='https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-020-4999-8' />. Furthermore,
          a lack of training and education for care providers has been identified as a major barrier of successful youth-to-adult care transition{' '}
          <AuthorReference
            refName='(McDonagh, 2006)'
            href='https://www.swswchd.co.uk/image/Clinical%20information/Transition/DoH%202006%20-%20Growing%20up%20Ready%20for%20Emerging%20Adulthood.pdf'
          />
          .
        </p>
        <p className='mb-8'>
          Skills development and training opportunities in youth mental health transitions should be based on the needs of your organization and staff. In cases where staff have an
          active role in the identification and referral of transitional aged youth, required training on assessing transition needs and understanding transition pathways in the
          organization. may be considered. In cases where staff are less involved in the <HighlightText content='transition process' clickToId='gt-T' />, a regularly updated and
          centrally available list of transition resources may be beneficial. Regardless of the specific learning approach, all staff should regularly review the organizational
          policy.
        </p>

        <ResourcesContentLinks
          resourceClickToId='resources-lists'
          contents={[
            {
              title: 'Evidence based guidelines for interprofessional teams for effective transitions',
              linkObjs: [
                {
                  linkText: 'Registered Nurses Association of Ontario (RNAO), Transitions in Care and Services Clinical Best Practice Guideline',
                  link: 'https://rnao.ca/bpg/guidelines/transitions-in-care',
                },
              ],
            },
            {
              title: 'Educational tools to foster skills for effective transitions',
              linkObjs: [
                {
                  linkText: 'Florida Health and Transition Services',
                  link: 'https://www.floridahats.org',
                },
                {
                  linkText: 'New York State Institute for Health Transition Training, Transition Skills Resources',
                  link: 'https://healthytransitionsny.org/skills/',
                },
              ],
            },
            {
              title: 'Resources to support professionals with preparing youth to complete an effective transition',
              linkObjs: [
                {
                  linkText: 'Florida Keys Area Health Education Center Inc., Health Care Transition Training Program',
                  link: 'https://pediatrics.med.jax.ufl.edu/jaxhats/docs/floridahats_hct4hcp_brochure1.pdf',
                },
                {
                  linkText: 'Florida Health and Transition Services, Florida Youth 2 Adult Transition (FLY2AT) Course',
                  link: 'https://www.floridahats.org/fly2at-course-for-professionals/',
                },
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
          Role clarity is an essential component of positive interprofessional collaboration (
          <AuthorReference refName='IPEC, 2016' href='https://ipec.memberclicks.net/assets/2016-Update.pdf' />
          {'; '}
          <AuthorReference refName='McLaneyet al., 2022' href='https://journals.sagepub.com/doi/10.1177/08404704211063584' />) and a clear organizational framework to indicate who
          has ownership of different aspects of the transition can support teams in successfully planning transition care. At an organizational level,determine who is responsible
          for supporting transitions, including developing a transitions policy,developing capacity and training in care team members, and/or development of{' '}
          <HighlightText content='integrated care pathways' clickToId='gt-I' /> for the organization&apos;s transitions. You might consider what “typical” involvement should look
          like for:
        </p>
        <DotList
          contentList={[
            'Youth making the transition between services',
            <p key={1}>
              <span className='font-bold text-navy-0'>Child and Adolescent Mental Health Services</span> staff
            </p>,
            <p key={2}>
              Community or <span className='font-bold text-navy-0'>Adult Mental Health Services</span> staff
            </p>,
            <p key={3}>
              <span className='font-bold text-navy-0'>Peer support workers</span> (if applicable)
            </p>,
            <p key={4}>
              <span className='font-bold text-navy-0'>Transition Navigators</span> (if applicable)
            </p>,
            <p key={5}>
              <span className='font-bold text-navy-0'>Family members/Caregivers,</span> (if applicable)
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

        <ResourcesContentLinks
          resourceClickToId='resources-lists'
          contents={[
            {
              title: 'Rating tool to assess caregivers  involvement and improve interactions with healthcare providers',
              linkObjs: [
                {
                  linkText: 'The Family Caregiver Activation in Transitions Tool (FCAT)',
                  link: 'https://media.uhfnyc.org/filer_public/95/55/9555ccca-ea5c-4f7b-a524-5356ca0b0924/6_eric_coleman__family_caregiver_activation_in_transitions_fcat_tool.pdf',
                },
              ],
            },
            {
              title: 'Roles and tasks for transition ',
              linkObjs: [
                {
                  linkText: 'Alberta Health Services, Enhancing Concurrent Capability Toolkit Transitions in Care Quick Reference Sheet',
                  link: 'https://www.albertahealthservices.ca/assets/info/amh/if-amh-ecc-what-are-the-roles-in-transitions-of-care.pdf',
                },
              ],
            },
            {
              title: 'Resource for transition support worker',
              linkObjs: [
                {
                  linkText:
                    'Facilitating Effective Transitions from Hospital to Community for Children and Adolescent Mental Health Services: Overview of the Transition Support Worker Role and Function',
                  link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6254258/',
                },
              ],
            },
          ]}
        />

        <Quote
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
        <ResourcesContentLinks
          resourceClickToId='resources-lists'
          contents={[
            {
              title: 'To learn more about youth engagement best practices',
              linkObjs: [
                {
                  linkText: 'Knowledge Institute, Youth Engagement Standards',
                  link: 'https://www.cymha.ca/Modules/ResourceHub/?id=64172b4d-af0d-432a-8d66-880ba2292486',
                },
              ],
            },
            {
              title: 'For tools to support the integration and evaluation of youth and family voice',
              linkObjs: [
                {
                  linkText: 'The Public and Patient Engagement Evaluation Tool (PPEET) Participant Questionnaire',
                  link: 'https://ppe.mcmaster.ca/resources/public-and-patient-engagement-evaluation-tool/',
                },
                {
                  linkText: 'The Core Components of Effective Youth Transitions (CCEYT)',
                  link: 'https://pubmed.ncbi.nlm.nih.gov/34089382/',
                },
              ],
            },
          ]}
        />
      </section>
      <section id='e1.7' data-section className='pt-10'>
        <h1 className='doc-content-sub-title mb-8'>{'1.7 Establish a plan to evaluate the organization’s transition protocol.'}</h1>
        <HighlightTextButton
          title='Transition protocol'
          clickToId='gt-T'
          tooltipDesc='A document established by the hosting organization that outlines all the steps to follow when working with transitions.'
        ></HighlightTextButton>
        <p className='mb-6 mt-8'>
          It is important to identify key indicators for evaluation early in the process of implementing your organization&apos;s transition protocol (see workbook evaluation
          section for a discussion of different indicator types). This will allow you to understand how your transition protocol is impacting or improving transitions in your
          organization. It will also ensure that you are collecting the necessary information to conduct your evaluation from the get-go.
        </p>
        <p className='mb-6'>
          Your evaluation plan will depend on which transition-related outcomes have been identified as priorities for your organization. For example, if you choose to implement
          transition case conferences (or“warm handover” meetings) as part of your organization&apos;s transition protocol, your evaluation plan might include measuring the
          proportion of transitioning youth who receive a <HighlightText content='warm handover' clickToId='gt-W' /> , or assessing clinician-reported barriers and facilitators to
          conducting warm handovers.
        </p>
        <p className='mb-8'>
          When developing an evaluation plan, consider how you can work with patients/ youth and caregivers to identify priority outcomes to evaluate, as well as what evaluation
          methods will most accurately capture their satisfaction with or outcomes from your transition interventions. For example, your organization may have a patient advisory
          council whose expertise you can draw upon, or you may develop the opportunity to conduct focus groups with caregivers
        </p>

        <ResourcesContentLinks
          resourceClickToId='resources-lists'
          contents={[
            {
              title: 'For guidance to develop evaluation strategies',
              linkObjs: [
                {
                  linkText: 'Health Quality Ontario Measurement Guide',
                  link: 'https://www.hqontario.ca/Portals/0/documents/evidence/quality-standards/measurement-guide-en.pdf',
                },
                {
                  linkText: 'NEAT study protocol',
                  link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8245465/',
                },
              ],
            },
            {
              title: 'For example of evaluation measures',
              linkObjs: [
                {
                  linkText: 'Core Components of Effective Youth Transitions (CCEYT)',
                  link: 'https://pubmed.ncbi.nlm.nih.gov/34089382/',
                },
                {
                  linkText: 'Navigation Satisfaction Tool (NAVSAT)',
                  link: 'https://pubmed.ncbi.nlm.nih.gov/29147951/',
                },
              ],
            },
          ]}
        />
      </section>
    </section>
  );
}
