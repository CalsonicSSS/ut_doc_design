import React from 'react';
import { ResourcesContentLinks } from '../ResourcesBulletContent';
import Quote from '../Quote';
import HighlightTextButton from '../HighlightTextButton';
import Link from 'next/link';
import { ScrollManager } from '../utils';
import { LogOut } from 'lucide-react';
import AuthorReference from '@/components/AuthorReference';
import HighlightText from '../HighlightText';

export default function Element4() {
  return (
    <section id='e4' data-section className='py-14 doc-content-text border-b-[1px] lg:px-0 px-5'>
      <h1 className='doc-content-title'>Element 4 Transition Planning</h1>
      <section id='e4.1' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>
          {' 4.1 Identify the most responsible person to coordinate the transition process, act as the main contact, and ensure continuity in the youth’s care.'}
        </h1>
        <div className='flex'>
          <HighlightTextButton
            title='Most responsible person'
            tooltipDesc='The primary contact person who acts as the coordinator of the transition process and ensures continuity of care. This person can vary and may or may not be the same individual as the traditional “most responsible provider”.'
            clickToId='gt-M'
          />
          <HighlightTextButton
            clickToId='gt-C'
            title='Continuity of care'
            tooltipDesc='The process of ensuring ongoing, coordinated care management with the goal of achieving quality health care.'
          />
        </div>

        <p className='mt-8 mb-6'>
          A designated &apos;most responsible clinician&apos; who is the primary contact person throughout the transition, ensures{' '}
          <HighlightText content='continuity of care' clickToId='gt-C' />, and acts as the coordinator of the transition in care. This person may or may not be the same individual
          as the traditional “most responsible provider”, who is the physician or other registered health professional who is responsible for overseeing the treatment and care of
          the patient or client while they are receiving care within your organization. This person may be the youth&apos;s{' '}
          <HighlightText content='child and adolescent mental health services' clickToId='gt-C' /> clinician or the organization&apos;s{' '}
          <HighlightText content='transition navigator' clickToId='gt-T' />.
        </p>
        <p className='mb-8'>
          A transition navigator is a registered health professional who has expertise in transition coordination and case management who provides short term support (often 1-6
          months) during the transition period <AuthorReference refName='(Cleverley et al., 2018)' href='https://pmc.ncbi.nlm.nih.gov/articles/PMC6254258/' />. They work with youth
          (family member/caregivers, if appropriate) and members of the clinical team to identify needs post-discharge as well as goals for transfer of care. They have a strong
          understanding of community programs and resources and are able to work with youth to identify and connect with appropriate services, and continue to provide support and
          are a point of contact for the youth post-discharge and throughout the referral or access process to adult or other appropriate services. They may also provide
          psychoeducation and some short-term bridging therapeutic support while the youth is between services.
        </p>
        <ResourcesContentLinks
          resourceClickToId='resources-lists'
          contents={[
            {
              title: 'For more information about the transition navigator role, and examples of its implementation:',
              linkObjs: [
                {
                  linkText:
                    'Facilitating Effective Transitions from Hospital to Community for Children and Adolescent Mental Health Services: Overview of the Transition Support Worker Role and Function',
                  link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6254258/',
                },
                {
                  linkText: 'The Sunnybrook Family Navigation  Project',
                  link: 'https://sunnybrook.ca/content/?page=family-navigation-project-what-we-do',
                },
                {
                  linkText: 'Michael Garron Transitional Youth Program',
                  link: 'https://www.tehn.ca/programs-services/mental-health-addiction/transitional-youth-program',
                },
              ],
            },
          ]}
        />
        <Quote
          title='NOTES FROM A NAVIGATOR'
          quote='I think the transition role is so crucial to the work that we do here. And collectively, as a multidisciplinary team, it is very essential to making sure that youth are connected after, after they leave '
        />
      </section>
      <section id='e4.2' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>
          4.2 Identify everyone else involved in the transition and their specific role in supporting the transition process (e.g. child and adolescent mental health services,
          adult mental health services, youth and family members/caregivers, transition navigator, primary care practitioners, etc.).{' '}
        </h1>
        <p className='mb-6'>
          Work with youth (and their caregiver, if appropriate) to identify the clinicians and other individuals they consider to be a part of their transition care team and
          support network. This may include specific <HighlightText content='transition navigators' clickToId='gt-T' /> but may also include{' '}
          <HighlightText content='primary care providers' clickToId='gt-P' />, school-based services, peer support workers, among others. This conversation and the identification
          of transition team members will also be informed by your organization&apos;s framework or policy for responsibilities related to transition within care teams (see{' '}
          <span className='underline hover: cursor-pointer text-navy-0' onClick={() => ScrollManager.scrollToElement('e1.5')}>
            Component 1.5
          </span>{' '}
          ).
        </p>
        <p className='mb-6'>
          When defining roles, consider at what point in the <HighlightText content='transition process' clickToId='gt-T' /> each team member will be engaged and in what capacity.
          This is also an opportunity to identify current gaps in care or support which may require additional attention ahead of the transition.
        </p>
        <p className='mb-8'>
          The specific roles and responsibilities of each team member should be captured and regularly updated in the transition plan. For more information, refer to the{' '}
          <HighlightText content='transition plan ' clickToId='gt-T' />
          document resources in{' '}
          <span className='underline hover: cursor-pointer text-navy-0' onClick={() => ScrollManager.scrollToElement('e3.3')}>
            Component 3.3
          </span>{' '}
        </p>
        <Quote
          title='NOTES FROM A NAVIGATOR'
          quote='[This] would be collaborative process, and the transition plan would be created with the young person, with their families and with the Multi-Disciplinary team, so we all know what to expect upon discharge.'
        />
      </section>
      <section id='e4.3' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>
          4.3 Collaborate with youth (and family members/caregivers, if invited by youth) to identify adult services that are an appropriate fit, and confirm the adult mental
          health service eligibility criteria.
        </h1>
        <HighlightTextButton
          title='Eligibility criteria'
          tooltipDesc='These are a list of requirements for program-entry which may include age, diagnosis, and area of residence.'
        />
        <p className='mt-8 mb-6'>
          Work with the young person to identify adult services based on program alignment with clinical needs, what they prioritize the youth prioritizes for service needs, and
          what their treatment goals are. Engaging young people in the transition process can help ensure that their needs and preferences are considered, and can increase levels
          of trust between providers and youth <AuthorReference refName="(O'Hara et al., 2020)" href='https://acamh.onlinelibrary.wiley.com/doi/10.1111/camh.12377' />.
        </p>
        <p className='mb-6'>
          <span className='font-bold'>Transition navigator partners have shared some key elements to identifying adult services: </span>
          <br />
          1. Assessing the young person&apos;s acuity in terms of severity of current mental health symptom presentation
          <br />
          2. Outlining any cost-related issues or financial barriers to accessing care, services, or treatment
          <br />
          3. Identifying services with easy access, timeliness and responsiveness (i.e., wait time considerations)
        </p>
        <p className='mb-8'>
          It is important to confirm the youth&apos;s eligibility with the agency before completing the transition process, often having a pre-existing relationship with the agency
          can help expediate contact and confirmation of eligibility.
        </p>
        <div className='mb-8'>
          <button onClick={() => ScrollManager.scrollToElement('resources-lists')} className='flex items-center mb-4'>
            <p className='font-bold text-[18px] leading-[32px] mr-2'>Resources</p>
            <LogOut size={15} strokeWidth={1} />
          </button>
          <div className='flex items-start'>
            <p className='font-bold text-[#FFB652] text-xs px-3 rounded-full bg-[#FFF8EE] mr-5 mt-1'>1</p>
            <div>
              <Link
                className='tracking-[0.13px] font-medium leading-[32px] underline text-[#63B1E5] block'
                href={
                  'https://www.niagararegion.ca/health/professionals/mental/mental-health-service.aspx#:~:text=Eligibility%20criteria&text=Experience%20ongoing%20illness%20that%20impacts,in%20their%20home%20or%20community'
                }
                target='_blank'
                rel='noopener noreferrer'
              >
                Niagara Region Adult and Youth Mental Health Services
              </Link>
            </div>
          </div>
        </div>

        <Quote
          title='NOTES FROM A NAVIGATOR'
          quote={
            <span>
              Honestly I think it depends on… [the youth&apos;s service] catchment area. It&apos;s based on their postal code, and a lot of places may have better services, but
              they don&apos;t accept someone with that postal code area, so you have to look at what&apos;s available within their region. <br /> <br /> And then just
              appropriateness [of potential services]. What&apos;s their identity? What would they benefit from... what kind of counsellor is going to be the most beneficial for
              them, and finding those appropriate resources for them is important.
              <br /> <br /> And then looking at wait times, this might be appropriate, but it&apos;s a one-and-a-half year wait, so what&apos;s something in the meantime that we
              can get you connected to, that is maybe a shorter wait, and then in the future you get connected to this resource.
            </span>
          }
        />
      </section>
      <section id='e4.4' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>
          4.4 Identify the most responsible person to coordinate the transition process, act as the main contact, and ensure continuity in the youth&apos;s care.
        </h1>
        <HighlightTextButton
          clickToId='gt-O'
          title='Optimal timing of transfer'
          tooltipDesc='Optimal timing of transfer refers for the best possible time for the youth to transfer to adult services, based on the youth’s needs and access to other supports/services.'
        />
        <p className='mt-8 mb-6'>
          It is important to connect with youth well in advance to identify and prepare for a transfer in care. Optimal timing means the individuals clinical needs are taken into
          account, in particular if may be that transitioning to a specialized service (i.e. early intervention in psychosis service) at a time earlier or later than age 18.
          Discussion with the youth (and family members/caregivers, if appropriate) to educate them on the reason for the timing of transfer of care is critical to ensure they
          understand the clinical and/or service rationale. Work with the young person to identify what resources or skills they need to be ready for the agreed upon transition
          time.
        </p>
      </section>
      <section id='e4.5' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>
          4.5 In collaboration with youth (and their family members/caregivers, if appropriate), complete an individualized transition plan and keep it up-to-date.
        </h1>
        <p>
          An individualized transition plan outlines the specific transition goals, support needs and actions required to help youth transition into adult mental health services.
          It acts as a reference for navigators and clinicians to support youth through the transition process and ensure all their needs are met (see Component 3.3). Developing an
          individualized transition plan requires strong collaboration with youth and youth should be aware of this transition plan as they undergo changes in the care they
          receive. As youth progress through the transition process, it is important to update this transition plan as goals and needs may continue to change.{' '}
          <span className='font-bold'>The transition plan might include:</span>
        </p>
        <p className='mb-6'>
          1. Transition goals and prioritized actions
          <br />
          2. <HighlightText content='Readiness assessment' clickToId='gt-R' />: A process of determining if youth are prepared to begin the transition process into adult mental
          health services.
          <br />
          3. <HighlightText content='Clinical Summary' clickToId='gt-C' />: A summation of pertinent patient information that can be used to convey the condition and journey of a
          patient, including relevant diagnoses or problems, treatments, medication history and important contact information.
          <br />
          4. <HighlightText content='Crisis plan' clickToId='gt-C' />: A predetermined plan that outlines means of support for youth who may experience a mental health crisis.
        </p>
        <p className='mb-8'>
          Given the challenges that may arise during the transition process, including a crisis plan as a part of the transition plan is of importance. A crisis plan represents a
          predetermined set of steps that can be taken to help youth during a moment of crisis. It outlines helpful information pertaining to the individual and can include warning
          signs, coping strategies, emergency contacts and support system as well as interventions to help the individual feel safe. Should youth find themselves in between
          transitions without access to resources, a crisis plan can be helpful to determine where they can access services
        </p>
        <Quote
          author='Youth'
          quote="But I actually found that [the navigation program] was really helpful in making sure that I felt comfortable in being able to speak to other care - regarding my other teams…And then when it came to discussing my treatments elsewhere regarding my mental health, it was helpful to have them kinda give me the understanding of how care looks like when you're no longer a child, because the care you receive in peds is very different from the care you're going to receive throughout [adulthood]. "
        />
      </section>
      <section id='e4.6' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>
          4.6 At least 6-months prior to transfer of care child and adolescent mental health services clinician initiate transition planning with the adult mental health services
          provider, which may include joint working meetings or a period of parallel care; include youth (and their family members/caregivers, if appropriate) in meetings.
        </h1>
        <div className='flex'>
          <HighlightTextButton
            clickToId='gt-P'
            title='Parallel care'
            tooltipDesc='A period of time where a young person may be connected to both youth-oriented and adult-oriented mental health care services.'
          />
          <HighlightTextButton
            title='Joint working meetings'
            tooltipDesc='A meeting (in person or remote) where the youth (their family members/caregivers, if appropriate), child mental health services clinician (or team) and receiving adult mental health services clinician (or team) meet to discuss the youths current treatment plan and transfer of care.'
          />
        </div>

        <p className='mt-8 mb-6'>
          A period of joint or parallel care can ease the <HighlightText content='transition process' clickToId='gt-T' /> for service providers and the youth and their family
          members. The success of the individual&apos;s transition planning process may be dependent on the infrastructure created as part of the organizational policy on
          transitions. Well established partnerships with <HighlightText content='adult mental health services' clickToId='gt-A' /> enable opportunities for parallel care and
          collaboration.
        </p>
        <p className='mb-6'>
          Youth involvement in meetings can be an important confidence and skills-building opportunity for young people. In advance of meetings involving youth and both care teams,
          work with the young person to identify and understand their role, what to expect during the meeting, and how involved they will be in the process moving forward. This
          process is likely to be informed by the readiness and developmental needs of each individual youth.
        </p>
        <p className='mb-8'>
          While six months is the suggested length of time, the organization&apos;s timing for initiating the transition planning process may be dependent on the service design or
          program length. Standards for this initiation point should be set in the organization&apos;s policy - refer to Components 2.1 and 2.2 for more information on this topic.
        </p>
        <Quote
          title='NOTES FROM A NAVIGATOR'
          quote="Well, really, it's scheduling that first appointment or encounter with the person at the receiving agency…I have an appointment with the client after that, ask them how it went…If they're unsure or they're kind of on the fence about it, sometimes it's about clarifying what that agency is going to provide them with... Sometimes, a warm handover happens over a few weeks or a couple appointments "
        />
      </section>
      <section id='e4.7' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>
          4.7 With youth&apos;s consent, communicate processes with primary care provider (i.e. family physician, nurse practitioner, or pharmacist) to ensure they have consistent
          up-to-date medication and treatment information.
        </h1>
        <HighlightTextButton
          clickToId='gt-P'
          title='Primary care provider'
          tooltipDesc='The principal care provider providing health care services for ongoing health conditions and non-emergency health concerns, which may include physical or mental health.'
        />
        <p className='mt-8 mb-6'>
          Youth facing mental health challenges are often treated within a primary care setting. Active engagement of a primary care provider is closely linked to improved health
          outcomes as youth transition in adult mental health services{' '}
          <AuthorReference refName='(Toulany et al., 2022)' href='https://academic.oup.com/pch/article/27/5/297/6673170' />. This continued involvement in care contributes to
          positive long-term health outcomes for youth{' '}
          <AuthorReference refName='(Toulany et al., 2019)' href='https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2740785' />. Continuity of care refers to the
          ongoing, coordinated care management with the goal of achieving quality health care <AuthorReference refName='(CPSO, 2021)' />. This can involve including all care
          providers in care management early to facilitate better communication and handover as well as identifying any missing information that is important to care.
        </p>
        <div className='mb-8'>
          <button onClick={() => ScrollManager.scrollToElement('resources-lists')} className='flex items-center mb-4'>
            <p className='font-bold text-[18px] leading-[32px] mr-2'>Resources</p>
            <LogOut size={15} strokeWidth={1} />
          </button>
          <div className='flex items-start'>
            <p className='font-bold text-[#FFB652] text-xs px-3 rounded-full bg-[#FFF8EE] mr-5 mt-1'>1</p>
            <div>
              <Link
                className='tracking-[0.13px] font-medium leading-[32px] underline text-[#63B1E5] block'
                href={'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2740785'}
                target='_blank'
                rel='noopener noreferrer'
              >
                Association of Primary Care Continuity With Outcomes Following Transition to Adult Care for Adolescents With Severe Mental Illness
              </Link>
              <Link
                href={'https://www.camh.ca/-/media/files/pdfs---public-policy-submissions/primarycarepolicyframework_march2016-pdf.pdf'}
                className='tracking-[0.13px] font-medium leading-[32px] underline text-[#63B1E5] block'
                target='_blank'
                rel='noopener noreferrer'
              >
                CAMH Mental Health and Primary Care Policy Framework{' '}
              </Link>
            </div>
          </div>
        </div>
        <Quote
          author='Clinician'
          quote='I recommend engaging pharmacists in the process when it comes to up-to-date medication information. Ensuring a process is in place for continuous up to date medication reconciliation for outpatients will go a long way towards making this process relatively painless.'
        />
      </section>
      <section id='e4.8' data-section className='py-10 border-b-[1px]'>
        <h1 className='doc-content-sub-title mb-8'>
          4.8 Provide youth (and their family members/caregivers, if appropriate) with up-to-date contact information for developmentally appropriate self-care management
          resources, community supports, and community mental health resources.
        </h1>

        <div className='hidden lg:block'>
          <div className='flex gap-4 items-center mb-6'>
            <HighlightTextButton
              clickToId='gt-D'
              title='Developmentally appropriate care'
              tooltipDesc='Care that is sensitive to the needs of youth and their particular life circumstances and life goals. Eligibility criteria: These are a list of requirements for program-entry which may include age, diagnosis, and area of residence.'
            />
            <HighlightTextButton
              clickToId='gt-S'
              title='Self-management'
              tooltipDesc='The ability to engage in self-management entails empowering youth to feel comfortable taking an active role in recognizing and managing their own mental health concerns, care and well-being, including being involved in the choices made concerning their care.'
            />
            <HighlightTextButton
              clickToId='gt-S'
              title='Self-care'
              tooltipDesc="Caring for one's whole self; anything involved with managing the care required for one's physical, emotional, mental and/or spiritual needs."
            />
          </div>
          <div>
            <HighlightTextButton
              clickToId='gt-C'
              title='Community mental health/community supports'
              tooltipDesc="This would include resources in your local context that are accessible to youth living in your organization's community, such as: phone lines, walk-in services, school-based services, community health centre counselling services, relevant community social services, and others."
            />
          </div>
        </div>

        <div className='lg:hidden'>
          <div className='flex gap-4 items-center mb-6'>
            <HighlightTextButton
              clickToId='gt-D'
              title='Developmentally appropriate care'
              tooltipDesc='Care that is sensitive to the needs of youth and their particular life circumstances and life goals. Eligibility criteria: These are a list of requirements for program-entry which may include age, diagnosis, and area of residence.'
            />
            <HighlightTextButton
              clickToId='gt-S'
              title='Self-management'
              tooltipDesc='The ability to engage in self-management entails empowering youth to feel comfortable taking an active role in recognizing and managing their own mental health concerns, care and well-being, including being involved in the choices made concerning their care.'
            />
          </div>
          <div className='flex gap-4 items-center'>
            <HighlightTextButton
              clickToId='gt-C'
              title='Community mental health/community supports'
              tooltipDesc="This would include resources in your local context that are accessible to youth living in your organization's community, such as: phone lines, walk-in services, school-based services, community health centre counselling services, relevant community social services, and others."
            />
            <HighlightTextButton
              clickToId='gt-S'
              title='Self-care'
              tooltipDesc="Caring for one's whole self; anything involved with managing the care required for one's physical, emotional, mental and/or spiritual needs."
            />
          </div>
        </div>

        <p className='mt-8 mb-6'>
          Ensure the young person (and <HighlightText content='family members/caregivers' clickToId='gt-F' />, where appropriate) are aware of community mental health services
          around available to them, the purposes they serve, and how they can be accessed (i.e., walk-in services, phone lines), and include this in the individualized transition
          plan (see core component 4.5). Note that the appropriate mental health and community supports to recommend will depend upon the unique needs of the individual youth as
          well as the specific resources available in their geographic area.
        </p>
        <p className='mb-8'>
          Due to the complex and varying biopsychosocial issues, shifting symptom patterns and presentations, and comorbid diagnoses seen in youth populations, transition pathways
          may look different from person to person{' '}
          <AuthorReference refName='(McGorry et al., 2014)' href='https://www.thelancet.com/journals/lanpsy/article/PIIS2215-0366(14)00082-0/abstract' />. Not every young person
          will need to transition to adult-oriented mental health services, or may not require a high intensity transition intervention. Examples can include ensuring that young
          people have access to youth-oriented integrated primary mental health care, establishing “soft entry” by minimizing stigma and other barriers to accessing services, and
          organizing digital support where possible <AuthorReference refName='(McGorry et al., 2022)' href='https://onlinelibrary.wiley.com/doi/10.1002/wps.20938' />. Providing
          youth with ways to access to developmentally appropriate community and health services will ensure they have resources available in the event that youth do not transition
          to adult mental health services, withdraw from adult mental health services, or only desire episodic contact with adult mental health services.
        </p>
        <ResourcesContentLinks
          resourceClickToId='resources-lists'
          contents={[
            {
              title:
                'Integrated Youth Service networks across Canada aim to offer centralized access to equitable, youth and family centered, in-person and virtual, mental and physical health care and support for transition-aged youth and their families. They can typically be accessed on a walk-in or call-in basis and may be able to provide interim support to youth who are between services',
              linkObjs: [
                {
                  linkText: '1.Youth Wellness Hubs Ontario ',
                  link: 'https://youthhubs.ca/',
                },
                {
                  linkText: '2.Foundry (British Columbia)',
                  link: 'https://foundrybc.ca/',
                },
                {
                  linkText: '3.Kickstand (Alberta)',
                  link: 'https://mykickstand.ca/',
                },
                {
                  linkText: '4.Aire Ouverte (Quebec)',
                  link: 'https://www.quebec.ca/sante/trouver-une-ressource/aire-ouverte',
                },
                {
                  linkText: '5.Access Open Minds (partnership with Esakoni First Nation, Nova Scotia)',
                  link: 'https://accessopenminds.ca/our_site/eskasoni-first-nation-ns-2/',
                },
              ],
            },
          ]}
        />
        <Quote
          title='NOTES FROM A NAVIGATOR'
          quote="..An individual came in short-term, and really just had challenges surrounding mental health, where psychiatrists feel like a general physician would be able to just provide on-going, that medical piece… then with that we might make recommendations that they access their GP…Really it just depends on the diagnosis and the needs that we're looking at, what would be the community mental health that would be best suited for them "
        />
        <Quote
          author='Youth'
          quote='Giving youth the right information and resources would really help them really understand what is available if they do decide against continuing their treatment. They may change their mind and want to transition later on and then they will have the info they need to do so.'
        />
      </section>
      <section id='e4.9' data-section className='pt-10'>
        <h1 className='doc-content-sub-title mb-8'>4.9 If desired by youth, facilitate connections to peer support during the transition process.</h1>
        <HighlightTextButton
          clickToId='gt-P'
          title='Peer support'
          tooltipDesc='Peer support is an emotional and practical relationship between the youth and a trained peer support worker who has lived through a similar experience such as mental health illness/addictions.'
        />
        <p className='mt-8 mb-6'>
          The transition experience can often be a point of fear or anxiety for youth due to the uncertainty of the process and not knowing what to expect. During this time, youth
          can benefit from connecting with a trained peer support worker who has the skills and shared lived experience to offer emotional support to the youth. Peer support
          workers can offer helpful coping strategies and conduct support meetings to assist youth with challenges they may be facing during their transition process.
        </p>
        <div>
          <button onClick={() => ScrollManager.scrollToElement('resources-lists')} className='flex items-center mb-4'>
            <p className='font-bold text-[18px] leading-[32px] mr-2'>Resources</p>
            <LogOut size={15} strokeWidth={1} />
          </button>
          <div className='flex items-start'>
            <p className='font-bold text-[#FFB652] text-xs px-3 rounded-full bg-[#FFF8EE] mr-5 mt-1'>1</p>
            <div>
              <Link
                href={'https://peersupportcanada.ca/wp-content/uploads/2019/06/MHCC_Peer_Support_Guidelines_2016-ENG.pdf'}
                className='tracking-[0.13px] font-medium leading-[32px] underline text-[#63B1E5] block'
                target='_blank'
                rel='noopener noreferrer'
              >
                Mental Health Commission of Canada, Guidelines for the Practice and Training of Peer Support{' '}
              </Link>
              <Link
                href={'https://www.cymha.ca/en/projects/youth-peer-support.aspx'}
                className='tracking-[0.13px] font-medium leading-[32px] underline text-[#63B1E5] block'
                target='_blank'
                rel='noopener noreferrer'
              >
                Knowledge Institute on Child and Youth Mental Health and Addictions, Peer Support Introduction
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
