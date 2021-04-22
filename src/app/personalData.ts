import {TimelineItem} from './models/timelineItem';

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
          'Achieved record number of free tutors and review sessions - 14 hours of free office hours every day.'
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

export const PERSONAL_DATA = {
  firstName: 'Tim',
  lastName: 'Tong',
  profilePictureUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQGZ_RlHsfJZeg/profile-displayphoto-shrink_200_200/0/1561952727334?e=1624492800&v=beta&t=fv8Hmzj5jMOb1Gfvm-shFj8T85GFnj77cbEmjuk2RTQ',
  contact: [
    {
      url: 'https://www.linkedin.com/in/tktong/',
      icon: 'fa-linkedin-in',
    },
    {
      url: 'https://github.com/tktong',
      icon: 'fa-github',
    },
    {
      url: 'https://stackoverflow.com/users/5818270/tim-tong?tab=profile',
      icon: 'fa-stack-overflow',
    }
  ],
  workExperience: WORK_EXPERIENCE,
  otherExperience: OTHER_EXPERIENCE,
  education: EDUCATION,
};
