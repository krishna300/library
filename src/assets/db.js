import { design, development, kickoff, launch,  } from ".";

export const featured = [
    {
      id: '1',
      title: 'NASA Announces Artemis II Moon Mission Crew',
      desc: 'NASA has revealed the astronauts selected for the Artemis II mission, aiming to return humans to the Moon by 2025.',
      featured: true,
      trending: false,
    },
    {
      id: '2',
      title: 'Global AI Summit Highlights Future Innovations',
      desc: 'Industry leaders and researchers gathered to discuss the ethical use and advancements in artificial intelligence technologies.',
      featured: true,
      trending: false,
    },
    {
      id: '3',
      title: 'Breakthrough in Cancer Research Announced',
      desc: 'Scientists have developed a new therapy that shows promise in significantly improving treatment outcomes for certain cancers.',
      featured: true,
      trending: false,
    },
    {
      id: '4',
      title: 'World Cup Final Draws Record Viewership',
      desc: 'The World Cup final saw an unprecedented global audience, with millions tuning in to watch the thrilling showdown.',
      featured: false,
      trending: true,
    },
    {
      id: '5',
      title: 'Electric Vehicles Outpace Gas Cars in Europe',
      desc: 'Electric vehicle sales have surpassed traditional gas-powered cars in key European markets, signaling a major shift in consumer preferences.',
      featured: true,
      trending: false,
    },
    {
      id: '6',
      title: 'Tech Giant Unveils Foldable Phone with AI Features',
      desc: 'A leading tech company launched its latest foldable smartphone, featuring advanced AI capabilities and improved battery life.',
      featured: true,
      trending: false,
    },
    {
      id: '7',
      title: 'Researchers Find Microplastics in Deep Ocean',
      desc: 'A new study reveals the alarming spread of microplastics in some of the deepest parts of the ocean, highlighting a growing environmental issue.',
      featured: false,
      trending: true,
    },
    {
      id: '8',
      title: 'Global Markets Rally Amid Economic Optimism',
      desc: 'Stock markets around the world surged after positive economic data and strong corporate earnings reports.',
      featured: true,
      trending: false,
    },
    {
      id: '9',
      title: 'Historic Agreement Reached at COP Climate Conference',
      desc: 'Countries agreed to a landmark deal aimed at reducing greenhouse gas emissions and investing in renewable energy.',
      featured: true,
      trending: false,
    },
    {
      id: '10',
      title: 'Astronomers Capture First Image of a Distant Exoplanet',
      desc: 'Using advanced telescopes, astronomers have captured the first-ever image of a planet orbiting a distant star, opening new doors in space exploration.',
      featured: false,
      trending: true,
    },
  ];
  

// export const storyBoards = [
//     {
//         id:'1',
//         title:'Job 1 | Remote | 5+ YOE',
//         desc:'This is with reference to your profile for the role of Frontend Support Developer.',
//     },
//     {
//         id:'2',
//         title:'Job 2 | WFO | Bangalore',
//         desc:'This is with reference to your profile for the role of Backend Support Developer.',
//     },
//     {
//         id:'3',
//         title:'Job 3 | Remote | 3+ YOE',
//         desc:'This is with reference to your profile for the role of Full stack Support Developer.',
//     },
//     {
//         id:'4',
//         title:'Job 4 | Hybrid | Hyderabad',
//         desc:'This is with reference to your profile for the role of Devops Support Developer.',
//     },
// ]

export const storyboardData = [
    { id: 1, title: "Project Kickoff", date: "2024-11-01", description: "Initial meeting with stakeholders.", image: kickoff },
    { id: 2, title: "Design Phase", date: "2024-11-10", description: "Completed wireframes and prototypes.", image: design },
    { id: 3, title: "Development", date: "2024-12-01", description: "Backend and frontend development started.", image: development },
    { id: 4, title: "Testing & Launch", date: "2025-01-15", description: "QA completed; app launched successfully.", image: launch }
];

export const layoutsData = [
  {
    id: '1',
    layoutType: 'Dashboard Layout',
    pagesCreated: 12,
    kpis: [
      { name: 'Total Visits', value: '25,000' },
      { name: 'Load Time', value: '1.2s' },
      { name: 'Bounce Rate', value: '15%' },
    ],
  },
  {
    id: '2',
    layoutType: 'Landing Page',
    pagesCreated: 8,
    kpis: [
      { name: 'Total Visits', value: '50,000' },
      { name: 'Conversion Rate', value: '25%' },
      { name: 'Load Time', value: '2.0s' },
    ],
  },
  {
    id: '3',
    layoutType: 'Blog Page',
    pagesCreated: 20,
    kpis: [
      { name: 'Total Visits', value: '15,000' },
      { name: 'Average Reading Time', value: '5m 20s' },
      { name: 'Load Time', value: '1.8s' },
    ],
  },
];
