export interface NavItem {
  id: string;
  label: string;
  subItems?: NavItem[];
  parentId?: string; // Added to track parent relationship
}

export interface NavSection {
  id: string;
  sectionLabel: string;
  sectionItems: NavItem[];
}

export const sideBarStructure: NavSection[] = [
  {
    id: 'getting-started',
    sectionLabel: 'GETTING STARTED',
    sectionItems: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'acknowledgements', label: 'Acknowledgements' },
      { id: 'suggested-citation', label: 'Suggested Citation' },
      {
        id: 'about-this-resource',
        label: 'About this Resource',
        subItems: [
          {
            id: 'purpose-of-this-resource',
            label: 'Purpose of this Resource',
            parentId: 'about-this-resource',
          },
          {
            id: 'using-this-resource',
            label: 'Using this Resource',
            parentId: 'about-this-resource',
          },
          {
            id: 'development-of-this-resource',
            label: 'Development of this Resource',
            parentId: 'about-this-resource',
          },
        ],
      },
    ],
  },
  {
    id: 'main-content',
    sectionLabel: 'Main Content',
    sectionItems: [
      {
        id: 'e1',
        label: 'Element 1 Organization Transition Policy',
        subItems: [
          {
            id: 'e1.1',
            label: '1.1 Integrated Youth Mental Health Transition...',
            parentId: 'e1',
          },
          {
            id: 'e1.2',
            label: '1.2 Organization- specific transition policy',
            parentId: 'e1',
          },
          {
            id: 'e1.3',
            label: '1.3 Create a developmentally appropriate...',
            parentId: 'e1',
          },
          {
            id: 'e1.4',
            label: '1.4 Ensure staff have appropriate knowledge',
            parentId: 'e1',
          },
          {
            id: 'e1.5',
            label: '1.5 Determine responsibilities for each role',
            parentId: 'e1',
          },

          {
            id: 'e1.6',
            label: '1.6 Partner with the youth during all stages',
            parentId: 'e1',
          },
          {
            id: 'e1.7',
            label: '1.7 Evaluate the organization’s transition protocol',
            parentId: 'e1',
          },
        ],
      },
      {
        id: 'e2',
        label: 'Element 2 Transition Tracking and Monitoring',
        subItems: [
          {
            id: 'e2.1',
            label: '2.1 Identifying youth transitioning out...',
            parentId: 'e2',
          },
          {
            id: 'e2.2',
            label: '2.2 Tracking transition out of mental health services',
            parentId: 'e2',
          },
        ],
      },
      {
        id: 'e3',
        label: 'Element 3 Transition Readiness',
        subItems: [
          {
            id: 'e3.1',
            label: '3.1 Conduct regular transition readiness...',
            parentId: 'e3',
          },
          {
            id: 'e3.2',
            label: '3.2 Provide youth (and their family members...',
            parentId: 'e3',
          },
          {
            id: 'e3.3',
            label: '3.3 Develop individualized transition plan in ...',
            parentId: 'e3',
          },
        ],
      },
      {
        id: 'e4',
        label: 'Element 4 Transition Planning',
        subItems: [
          {
            id: 'e4.1',
            label: '4.1 Identify the most responsible person ...',
            parentId: 'e4',
          },
          {
            id: 'e4.2',
            label: '4.2 Identify everyone else involved in ...',
            parentId: 'e4',
          },
          {
            id: 'e4.3',
            label: '4.3 Collaborate with youth (and family ...',
            parentId: 'e4',
          },
          {
            id: 'e4.4',
            label: '4.4 Discuss the optimal timing of transfer ...',
            parentId: 'e4',
          },
          {
            id: 'e4.5',
            label: '4.5 In collaboration with youth (and their ...',
            parentId: 'e4',
          },
          {
            id: 'e4.6',
            label: '4.6 At least 6-months prior to transfer ...',
            parentId: 'e4',
          },
          {
            id: 'e4.7',
            label: '4.7 With youth’s consent, communicate ...',
            parentId: 'e4',
          },
          {
            id: 'e4.8',
            label: '4.8 Provide youth (and their family ...',
            parentId: 'e4',
          },
          {
            id: 'e4.9',
            label: '4.9 If desired by youth, facilitate connections ...',
            parentId: 'e4',
          },
        ],
      },
      {
        id: 'e5',
        label: 'Element 5 Transfer of Care',
        subItems: [
          {
            id: 'e5.1',
            label: '5.1 Handover meeting',
            parentId: 'e5',
          },
          {
            id: 'e5.2',
            label: '5.2 Complete and send documents',
            parentId: 'e5',
          },
        ],
      },
      {
        id: 'e6',
        label: 'Element 6 Transfer Completion',
        subItems: [
          {
            id: 'e6.1',
            label: '6.1 Follow up call and confirmation',
            parentId: 'e6',
          },
        ],
      },
    ],
  },
];
