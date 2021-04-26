import {TimelineItem} from './models/timelineItem';
import {Book} from './models/book';

// All these should probably go into various services that fetches the relevant data. But that's kind of a pain since this is a simple
// static webapp hosted on github pages with no backend. While it's probably the proper thing to do in an actual project, scattering all
// those pieces of data is a pain to manage. I'll need to think more deeply on it, but for now, it's nice to be able to configure the
// entire github site from one file.

const WORK_EXPERIENCE: TimelineItem[] = [
  {
    heading: 'Google',
    startDate: 'May 2021',
    endDate: 'Present',
    subItems: [
      {
        heading: 'Software Engineer',
        startDate: 'May 2021',
        endDate: 'Present',
        descriptions: []
      }
    ]
  },
  {
    heading: 'Workday',
    startDate: 'Aug. 2015',
    endDate: 'Apr. 2021',
    subItems: [
      {
        heading: 'Senior Software Development Engineer',
        startDate: 'May 2019',
        endDate: 'Apr. 2021',
        descriptions: [
          'Provided architectural guidance for scaling out Workday\'s chatbot system.',
          'Developed a new platform enabling app developers to build their own chatbot skills.',
          'Mentored 5 individuals in becoming the next leaders through 1-1s and challenges.',
          'Scaled out internal microservice framework to be used by 18 teams across 5 organizations.'
        ]
      },
      {
        heading: 'Software Development Engineer III',
        startDate: 'May 2018',
        endDate: 'Apr. 2019',
        descriptions: [
          'Led the effort to automate the ability to identify and prevent account takeovers in cross organization initiative.',
          'Collaborated with Duo Security to integrate Duo\'s MFA with Workday\'s corporate wide native login.',
          'Delivered 6 tech talks on authentication architecture and on testing/microservices.'
        ]
      },
      {
        heading: 'Software Development Engineer II',
        startDate: 'May 2017',
        endDate: 'Apr. 2018',
        descriptions: [
          'Released the first microservice on Workday\'s private cloud while helping refine the deployment process.',
          'Redesign an internal testing framework used by multiple teams reducing build times by 27%.',
          'Created a Spring-based microservice framework to bootstrap Workday integrations, speeding up new service development.'
        ]
      },
      {
        heading: 'Software Development Engineer I',
        startDate: 'Aug. 2015',
        endDate: 'Apr. 2017',
        descriptions: [
          'Broke out all authentication features from monolith into a microservice running on 128 MB heap.',
          'Introduced WebSockets for inbox notifications eliminating short poll traffic.',
        ]
      }
    ]
  },
  {
    heading: 'Workday',
    startDate: 'Jun. 2014',
    endDate: 'Sept. 2014',
    subItems: [
      {
        heading: 'Software Development Engineering Intern',
        startDate: 'Jun. 2014',
        endDate: 'Sept. 2014',
        descriptions: [
          'Interned on UI-Server; a backend for frontend service that processes majority of user interaction requests.',
          'Implemented "tiny URL" for large passthrough metadata reducing size of responses received by the client.'
        ]
      }
    ]
  },
  {
    heading: 'University of California, Davis',
    startDate: 'Nov. 2013',
    endDate: 'Apr. 2014',
    subItems: [
      {
        heading: 'Student Assistant IV',
        startDate: 'Nov. 2013',
        endDate: 'Apr. 2014',
        descriptions: []
      }
    ]
  }
];

const OTHER_EXPERIENCE: TimelineItem[] = [
  {
    heading: 'Davis Computer Science Club',
    startDate: 'Apr. 2013',
    endDate: 'Jun. 2015',
    subItems: [
      {
        heading: 'President',
        startDate: 'Jun. 2014',
        endDate: 'Jun. 2015',
        descriptions: [
          'Headed a board of 21 officers with the club mission of cultivating professional development and augmenting education with ' +
          'practical skills while providing a fun and supportive community.',
          'Started the Bit/Byte mentorship program providing academic support and career preparations.',
          'Achieved record number of free tutors and review sessions - 14 hours of free office hours every day.',
        ]
      },
      {
        heading: 'Tutoring Committee Member',
        startDate: 'Apr. 2013',
        endDate: 'Jun. 2015',
        descriptions: [
          'Elevated student understanding of computer science through office hours and review sessions.',
          'Personally hosted a total of 26 review sessions and wrote two study guides.',
          'Worked with professors in providing feedback & statistics on topics that students are struggling with.'
        ]
      }
    ]
  },
  {
    heading: 'Dougherty Valley High School Badminton',
    startDate: 'Sept. 2007',
    endDate: 'Jun. 2011',
    subItems: [
      {
        heading: 'Founder & Student Coach',
        startDate: 'Sept. 2007',
        endDate: 'Jun. 2011',
        descriptions: [
          'Founded the badminton club in Fall 2007 and the team in Spring 2009.',
          'Contributed 4-5 hours per day in teaching others the sport and sharing my passion.'
        ]
      }
    ]
  }
];

const EDUCATION: TimelineItem[] = [
  {
    heading: 'University of California, Davis',
    startDate: 'Sept. 2011',
    endDate: 'Jun. 2015',
    subItems: []
  },
  {
    heading: 'Dougherty Valley High School',
    startDate: 'Sept. 2007',
    endDate: 'Jun. 2011',
    subItems: []
  }
];

const CONTACT_INFO = [
  {
    url: 'mailto:tktong@ucdavis.edu',
    icon: 'fas fa-envelope',
  },
  {
    url: 'https://www.linkedin.com/in/tktong/',
    icon: 'fab fa-linkedin-in',
  },
  {
    url: 'https://github.com/tktong',
    icon: 'fab fa-github',
  },
  {
    url: 'https://stackoverflow.com/users/5818270/tim-tong?tab=profile',
    icon: 'fab fa-stack-overflow',
  }
];

const READINGS = new Map<number, Book[]>([
  [2021,
    [
      {
        title: 'The Reason for God',
        author: 'Timothy Keller',
        url: 'https://www.google.com/books/edition/The_Reason_for_God/-eUbFMEY49QC?hl=en&gbpv=0',
        current: true
      },
      {
        title: 'Irrational Exuberance',
        author: 'Robert Shiller',
        url: 'https://www.google.com/books/edition/_/_2-YDwAAQBAJ?hl=en',
        current: true
      },
      {
        title: 'The Infinite Game',
        author: 'Simon Sinek',
        url: 'https://www.google.com/books/edition/_/GwQotAEACAAJ?hl=en',
        current: false
      },
    ]
  ],
  [2020,
    [
      {
        title: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
        url: 'https://www.google.com/books/edition/Designing_Data_Intensive_Applications/zFheDgAAQBAJ?hl=en&gbpv=0',
        current: false
      },
      {
        title: '30 Days to Understanding the Bible',
        author: 'Max Anders',
        url: 'https://www.google.com/books/edition/30_Days_to_Understanding_the_Bible_30th/VzBQDwAAQBAJ?hl=en',
        current: false
      },
      {
        title: 'The Defining Decade',
        author: 'Meg Jay',
        url: 'https://www.google.com/books/edition/The_Defining_Decade/Gm6ujNFLDCUC?hl=en',
        current: false
      },
      {
        title: 'The Power of Habit',
        author: 'Charles Duhigg',
        url: 'https://www.google.com/books/edition/The_Power_of_Habit/xQ1_z5_kj6sC?hl=en',
        current: false
      },
      {
        title: 'Managing Up',
        author: 'Mary Abbjay',
        url: 'ttps://www.google.com/books/edition/The_Power_of_Habit/xQ1_z5_kj6sC?hl=en',
        current: false
      }
    ]
  ],
  [2019,
    [
      {
        title: 'The Little Book on Common Sense Investing',
        author: 'John C. Bogle',
        url: 'https://www.google.com/books/edition/The_Little_Book_of_Common_Sense_Investin/eCZKUy1ckTMC?hl=en',
        current: false
      },
      {
        title: 'Modern Romance: An Investigation',
        author: 'Aziz Ansari & Eric Klinenberg',
        url: 'https://www.google.com/books/edition/Modern_Romance/qmMqDAAAQBAJ?hl=en&gbpv=0',
        current: false
      },
      {
        title: 'Letters from a Skeptic',
        author: 'Gregory A. Boyd & Edward K. Boyd',
        url: 'https://www.google.com/books/edition/Letters_from_a_Skeptic/9rNZft1sVfoC?hl=en',
        current: false
      },
      {
        title: 'Garden City: Work, Rest, and the Art of Being Human',
        author: 'John Mark Comer',
        url: 'https://www.google.com/books/edition/Garden_City/zJ4pBQAAQBAJ?hl=en&gbpv=0',
        current: false
      }
    ]
  ],
  [2018,
    [
      {
        title: 'Quiet',
        author: 'Susan Cain',
        url: 'https://www.google.com/books/edition/Quiet/uNMjeFMorPgC?hl=en',
        current: false
      },
      {
        title: 'Practical Monitoring',
        author: 'Mike Julian',
        url: 'https://www.google.com/books/edition/Practical_Monitoring/Mak7DwAAQBAJ?hl=en&gbpv=0',
        current: false
      },
      {
        title: 'Jesus Among Other Gods',
        author: 'Ravi Zacharias',
        url: 'https://www.google.com/books/edition/Jesus_Among_Other_Gods/HWgHk2fVDbwC?hl=en&gbpv=0',
        current: false
      },
      {
        title: 'The Man in the Mirror',
        author: 'Patrick Morley & R.C. Sproul',
        url: 'https://www.google.com/books/edition/The_Man_in_the_Mirror/0Qh0AwAAQBAJ?hl=en&gbpv=1&dq=man+in+the+mirror&printsec=frontcover',
        current: false
      },
      {
        title: 'Radical',
        author: 'David Platt',
        url: 'https://www.google.com/books/edition/Radical/HOWJoAEACAAJ?hl=en',
        current: false
      },
      {
        title: 'Crazy Love',
        author: 'Francis Chan',
        url: 'https://www.google.com/books/edition/Crazy_Love/102lZa2nM1EC?hl=en',
        current: false
      },
      {
        title: 'Blue Like Jazz',
        author: 'Donald Miller',
        url: 'https://www.google.com/books/edition/Blue_Like_Jazz_Movie_Edition/eg8lkuT0vV4C?hl=en',
        current: false
      }
    ]
  ],
  [2017,
    [
      {
        title: 'Leadership Patterns for Software and Technology Professionals',
        author: 'Matt Mcbride',
        url: 'https://www.google.com/books/edition/Leadership_Patterns_for_Software_and_Tec/YgLtsgEACAAJ?hl=en',
        current: false
      },
      {
        title: 'The Fine Art of Small Talk',
        author: 'Debra Fine',
        url: 'https://www.google.com/books/edition/The_Fine_Art_of_Small_Talk/kSGZAAAAQBAJ?hl=en&gbpv=0',
        current: false
      },
      {
        title: 'How to Win Friends and Influence People',
        author: 'Dale Carnegie',
        url: 'https://www.google.com/books/edition/How_To_Win_Friends_and_Influence_People/1rW-QpIAs8UC?hl=en&gbpv=0',
        current: false
      },
      {
        title: 'The Talent Code',
        author: 'Daniel Coyle',
        url: 'https://www.google.com/books/edition/The_Talent_Code/gIHSN-ht0xQC?hl=en&gbpv=0',
        current: false
      },
      {
        title: 'The Art of Mental Training',
        author: 'D.C. Gonzalez',
        url: 'https://www.google.com/books/edition/The_Art_of_Mental_Training/IqS1DAEACAAJ?hl=en',
        current: false
      },
      {
        title: 'The Art of War',
        author: 'Sun Tzu',
        url: 'https://www.google.com/books/edition/The_Art_of_War/p4eRDwAAQBAJ?hl=en',
        current: false
      },
      {
        title: 'The Champion\'s Mind',
        author: 'Jim Afremow',
        url: 'https://www.google.com/books/edition/The_Champion_s_Mind/5aAiAgAAQBAJ?hl=en',
        current: false
      }
    ]
  ],
  [
    2015,
    [
      {
        title: 'The Intelligent Investor',
        author: 'Benjamin Graham & Warren Buffett',
        url: 'https://www.google.com/books/edition/The_Intelligent_Investor/779fQgAACAAJ?hl=en',
        current: false
      },
      {
        title: 'The Neatest Little Guide to Stock Market Investing',
        author: 'Jason Kelly',
        url: 'https://www.google.com/books/edition/The_Neatest_Little_Guide_to_Stock_Market/9TtEYz9Lw4kC?hl=en&gbpv=0',
        current: false
      }
    ]
  ]
]);

export const PERSONAL_DATA = {
  firstName: 'Tim',
  lastName: 'Tong',
  profilePictureUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQGZ_RlHsfJZeg/profile-displayphoto-shrink_200_200/0/1561952727334?e=1624492800&v=beta&t=fv8Hmzj5jMOb1Gfvm-shFj8T85GFnj77cbEmjuk2RTQ',
  contact: CONTACT_INFO,
  workExperience: WORK_EXPERIENCE,
  otherExperience: OTHER_EXPERIENCE,
  education: EDUCATION,
  readings: READINGS,
};
