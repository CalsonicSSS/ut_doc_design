import React from 'react';
import GlossaryTermList from '../GlossaryTermList';

export default function Appendices() {
  return (
    <section id='resources-lists' data-section className='py-14 doc-content-text border-b-[1px]'>
      <section id='glossary-of-terms' data-section className='pb-10 border-b-[1px]'>
        <h1 className='doc-content-title'>Glossary of Terms</h1>
        <h1 className='doc-content-sub-title mt-10 mb-8'>A</h1>
        <GlossaryTermList
          termList={[
            {
              title: 'Adult Mental Health Services:',
              text: 'Typically, these services are offered to people aged 18 and over, but some are youth-specific and serve young adults between the ages of 16 and 29. This can include substance use services',
            },
          ]}
        />
        <h1 className='doc-content-sub-title mt-10 mb-8'>C</h1>
        <GlossaryTermList
          termList={[
            {
              title: 'Case Conference:',
              text: 'A meeting between care providers within and between organizations to ensure coordination and integration of care .',
            },
            {
              title: 'Child and Adolescent Mental Health Services: ',
              text: 'Typically, these services are offered to youth up to the age of 18, depending on the service. This can include substance use services.',
            },
            {
              title: 'Clinical Summary:',
              text: 'A summation of pertinent patient information that can be used to convey the condition and journey of a patient. A clinical summary can include relevant diagnoses or problems, treatments, medication history and important contact information.',
            },
            {
              title: 'Clinical records:',
              text: 'Clinical records include any communication or records relating to the diagnosis, evaluation, or treatment of the young person during their care.',
            },
            {
              title: 'Community mental health/community supports: ',
              text: 'This would include resources in your local context that are accessible to youth living in your organization’s community, such as: phone lines, walk-in services, school-based services, community health centre counselling services, relevant community social services, and others.',
            },
            {
              title: 'Continuity of care: ',
              text: 'The process of ensuring ongoing, coordinated care management with the goal of achieving quality health care.',
            },
            {
              title: 'Crisis plan: ',
              text: 'A predetermined plan that outlines means of support for youth who may experience a mental health crisis.',
            },
          ]}
        />
        <h1 className='doc-content-sub-title mt-10 mb-8'>D</h1>
        <GlossaryTermList
          termList={[
            {
              title: 'Developmentally appropriate protocol:',
              text: 'A developmentally appropriate protocol is sensitive to the needs of youth and their particular life circumstances and life goals.',
            },
            {
              title: 'Developmentally appropriate care: ',
              text: 'Care that is sensitive to the needs of youth and their particular life circumstances and life goals. Eligibility criteria: These are a list of requirements for program-entry which may include age, diagnosis, and area of residence.',
            },
          ]}
        />
        <h1 className='doc-content-sub-title mt-10 mb-8'>F</h1>
        <GlossaryTermList
          termList={[
            {
              title: 'Family members/caregivers: ',
              text: 'Family members/caregivers comprises anyone that the youth identifies they want to be involved in their care. Family members/caregivers for youth could include biological and chosen family members, caregivers and guardians, partners, siblings, and/or adult allies.',
            },
          ]}
        />
        <h1 className='doc-content-sub-title mt-10 mb-8'>I</h1>
        <GlossaryTermList
          termList={[
            {
              title: 'Integrated care pathway: ',
              text: 'Integrated care pathways are structured; multipurpose care plans which outline the steps involved in the care of patients with a specific clinical problem.',
            },
          ]}
        />
        <h1 className='doc-content-sub-title mt-10 mb-8'>M</h1>
        <GlossaryTermList
          termList={[
            {
              title: 'Most responsible person: ',
              text: 'The primary contact person who acts as the coordinator of the transition process and ensures continuity of care. This person can vary and may or may not be the same individual as the traditional “most responsible provider”.',
            },
          ]}
        />
        <h1 className='doc-content-sub-title mt-10 mb-8'>O</h1>
        <GlossaryTermList
          termList={[
            {
              title: 'Optimal timing of transfer: ',
              text: 'Optimal timing of transfer refers for the best possible time for the youth to transfer to adult services, based on the youth’s needs and access to other supports/services.',
            },
          ]}
        />
        <h1 className='doc-content-sub-title mt-10 mb-8'>P</h1>
        <GlossaryTermList
          termList={[
            {
              title: 'Parallel Care: ',
              text: 'A period of time where a young person may be connected to both youth-oriented and adult-oriented mental health care services.',
            },
            {
              title: 'Peer support: ',
              text: 'Peer support is an emotional and practical relationship between the youth and a trained peer support worker who has lived through a similar experience such as mental health illness/addictions.',
            },
            {
              title: 'Primary care provider: ',
              text: 'The principal care provider providing health care services for ongoing health conditions and non-emergency health concerns, which may include physical or mental health.',
            },
          ]}
        />
        <h1 className='doc-content-sub-title mt-10 mb-8'>S</h1>
        <GlossaryTermList
          termList={[
            {
              title: 'Self-care: ',
              text: 'Caring for one’s whole self; anything involved with managing the care required for one’s physical, emotional, mental and/or spiritual needs.',
            },
            {
              title: 'Self-management: ',
              text: 'The ability to engage in self-management entails empowering youth to feel comfortable taking an active role in recognizing and managing their own mental health concerns, care and well-being, including being involved in the choices made concerning their care.',
            },
          ]}
        />
        <h1 className='doc-content-sub-title mt-10 mb-8'>T</h1>
        <GlossaryTermList
          termList={[
            {
              title: 'Transition plan: ',
              text: 'A living document which outlines the goals of transition, individual care needs, and interventions throughout the transition process.',
            },
            {
              title: 'Transition process: ',
              text: 'A document established by the hosting organization that outlines all the steps to follow when working with transitions.',
            },
            {
              title: 'Transition Navigator: ',
              text: 'Trained staff who offer support during care transition to ensure an optimal transition.',
            },
          ]}
        />
        <h1 className='doc-content-sub-title mt-10 mb-8'>W</h1>
        <GlossaryTermList
          termList={[
            {
              title: 'Warm Handover: ',
              text: 'A conversation between a care provider and patient to identify and introduce transfer of care to another provider or organization.',
            },
          ]}
        />
        <h1 className='doc-content-sub-title mt-10 mb-8'>Y</h1>
        <GlossaryTermList
          termList={[
            {
              title: 'Youth-centred protocol: ',
              text: 'A protocol that is youth-centred is one that meets the needs of the youth involved.',
            },
          ]}
        />
      </section>
      <section id='reference' data-section className='pt-10'>
        <h1 className='doc-content-title mb-8'>References</h1>
        <p className='mb-6'>
          Hendrickx, G., De Roeck, V., Maras, A., Dieleman, G., Gerritsen, S., Purper-Ouakil, D., Russet, F., Schepker, R., Signorini, G., Singh, S. P., Street, C., Tuomainen, H.,
          & Tremmery, S. (2020). Challenges during the transition from child and adolescent mental health services to adult mental health services. BJPsych Bulletin, 44(4), 163–
          168.
        </p>
        <p className='mb-6'>
          Bauer, A. M., Azzone, V., Goldman, H. H., Sujanander, L., Unützer, J., & Coleman-Beattie, B. (2013). Implementation of collaborative depression management at
          communitybased primary care clinics: an evaluation. Psychiatric Services, 64(12), 1242–1248.
        </p>
        <p className='mb-6'>
          Borah, E., Cohen, D., Bearman, S. K., Platz, M., & Londoño, T. (2021). Comparison of child and adult clinicians’ perceptions of barriers and facilitators to effective
          care transition. Social Work in Mental Health, 19(2), 166–185.
        </p>

        <p className='mb-6'>
          Broad, K. L., Sandhu, V. K., Sunderji, N., & Charach, A. (2017). Youth experiences of transition from child mental health services to adult mental health services: A
          qualitative thematic synthesis. BMC Psychiatry, 17(1).
        </p>

        <p className='mb-6'>
          Cleverley, K., Lenters, L. & McCann, E. (2020). “Objectively terrifying”: a qualitative study of youth’s experiences of transitions out of child and adolescent mental
          health services at age 18. BMC Psychiatry 20, 147.
        </p>

        <p className='mb-6'>
          College of Physicians and Surgeons of Ontario, and Citizen Advisory Group. Continuity of Care: Guide for Patients and Caregivers. from:
          https://www.cpso.on.ca/admin/CPSO/media/Documents /public/public-information/coc-guide/coc-guide-patientscaregivers.pdf
        </p>

        <p className='mb-6'>
          Farre, A., Wood, V., Rapley, T., Parr, J. R., Reape, D., & McDonagh, J. E. (2015). Developmentally appropriate healthcare for young people: a scoping study. Archives of
          disease in childhood, 100(2), 144-151.
        </p>

        <p className='mb-6'>
          Interprofessional Education Collaborative. (2016). Core competencies for interprofessional collaborative practice: 2016 update. Washington, DC: Interprofessional
          Education Collaborative. Adapted with permission.
        </p>

        <p className='mb-6'>
          Lau, F. (2019). Patient empowerment: the role of technology. Improving Usability, Safety and Patient Outcomes with Health Information Technology: From Research to
          Practice, 257, 70.
        </p>

        <p className='mb-6'>
          McDonagh, J. E. (2006). Growing up ready for emerging adulthood. An evidence base for professionals involved in transitional care for young people with chronic illness
          and/or disabilities.
        </p>

        <p className='mb-6'>
          McGorry, P. D., Mei, C., Chanen, A., Hodges, C., Alvarez‐ Jimenez, M., & Killackey, E. (2022). Designing and scaling up integrated youth mental health care. World
          Psychiatry, 21(1), 61-76.
        </p>
        <p className='mb-6'>
          McGorry, P. D., Goldstone, S. D., Parker, A. G., Rickwood, D. J., & Hickie, I. B. (2014). Cultures for mental health care of young people: an Australian blueprint for
          reform. The Lancet Psychiatry, 1(7), 559-568.
        </p>
        <p className='mb-6'>
          McLaney, E., Morassaei, S., Hughes, L., Davies, R., Campbell, M., & Di Prospero, L. (2022, March). A framework for interprofessional team collaboration in a hospital
          setting: Advancing team competencies and behaviours. In Healthcare Management Forum (Vol. 35, No. 2, pp. 112-117). Sage CA: Los Angeles, CA: SAGE Publications.
        </p>

        <p className='mb-6'>
          Nilsen, P., Seing, I., Ericsson, C., Birken, S. A., & Schildmeijer, K. (2020). Characteristics of successful changes in health care organizations: An interview study with
          physicians, registered nurses and assistant nurses. BMC Health Services Research, 20(1).
        </p>

        <p className='mb-6'>
          O&apos;Hara, L., Holme, I., Tah, P., Franic, T., Vrljičak Davidović, N., Paul, M., ... & Wohner, A. (2020). A cross‐cultural qualitative study of the ethical aspects in
          the transition from child mental health services to adult mental health services. Child and Adolescent Mental Health, 25(3), 143- 149.
        </p>

        <p className='mb-6'>Peer Support Canada. (2023). About Peer Support Canada. https://peersupportcanada.ca/</p>
        <p className='mb-6'>
          Toulany, A., Stukel, T. A., Kurdyak, P., Fu, L., & Guttmann, A. (2019). Association of Primary Care continuity with outcomes following transition to adult care for
          adolescents with severe mental illness. JAMA Network Open, 2(8).
        </p>

        <p>
          Toulany, A., Willem Gorter, J., & Harrison, M. (2022). A call for action: recommendations to improve transition to adult care for youth with complex health care needs.
          Paediatrics & Child Health, 27(5), 297-302.
        </p>
      </section>
    </section>
  );
}
