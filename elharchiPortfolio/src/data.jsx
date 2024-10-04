import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';



import {
  SiReact,
  SiLaravel,
  SiGit,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiWordpress,
  SiJquery,
  SiJira  
} from 'react-icons/si';


import { FiFileText, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/ecomShop.png';
import ecomShop from './assets/ecomShop.mp4';


import Work2 from './assets/WeatherApp.jpeg';
import weatherApp from './assets/weatherApp.mp4';

import Work3 from './assets/YoutubeApp.jpeg';
import YoutubeApp from './assets/youtubeApp.mp4';

import Work4 from './assets/react_laravel.png';


import Work5 from './assets/school.png';
import school from './assets/school.mp4';


import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';


export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Mohamed',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'El harchi',
  },

  {
    id: 3,
    title: 'Born in : ',
    description: '2001',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Moroccan',
  },

  

  {
    id: 6,
    title: 'Address Currently : ',
    description: 'Morocco, Nador',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+212696326025',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'elharchi2023@gmail.com',
  },

  {
    id: 9,
    title: 'hobbies : ',
    description: 'Coding, Beat Making, ...',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Arabic, English, French',
  },
  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },
];

export const stats = [
  {
    id: 1,
    no: '6+',
    title: 'month of <br /> Experience',
  },

  {
    id: 2,
    no: '4+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '3+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '∞',
    title: 'Passion for <br /> Learning',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024',
    title: 'Web Developer (training) <span> Moulay Ismail High School </span>',
    desc: "During my internal training as a Web Developer at Moulay Ismail High School, I developed a comprehensive website that serves as an introduction to the school. The site features a control panel for tracking student attendance and allows students to easily request school certificates online. This project enhanced my skills in web development while contributing to the school's administrative efficiency.",
  },

  // {
  //   id: 2,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2013 - 2018',
  //   title: 'UI/UX Designer <span> Themeforest </span>',
  //   desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  // },

  // {
  //   id: 3,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2005 - 2013',
  //   title: 'Consultant <span> Videohive </span>',
  //   desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  // },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019-2020',
    title: 'Bachelor Degree <span> Moulay Ismail High School </span>',
    desc: "In 2020, I earned my Bachelor's degree from Moulay Ismail High School, gaining essential knowledge for my future endeavors",
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020-2022',
    title: 'Self-learning &<span> Multidisciplinary Faculty of Nador </span>',
    desc: 'I studied philosophy at university while simultaneously self-learning programming at home. This combination of formal education and independent learning allowed me to develop critical thinking skills and technical expertise, creating a well-rounded foundation for my future work in technology.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022-2024',
    title: 'Digital Development <span> Specialized Institute of Applied Technology Driouch </span>',
    desc: 'I studied Digital Development at the Specialized Institute of Applied Technology Driouch, where I gained a solid foundation in programming and technology.Simultaneously, I worked on various self-learning projects to grow my skills and build practical experience.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '100',
    icon: SiHtml5
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '100',
    icon: SiJavascript 
  },
  {
    id: 3,
    title: 'Css',
    percentage: '100',
    icon: SiCss3 
  },
  {
    id: 4,
    title: 'Php',
    percentage: '100',
    icon: SiPhp
  },
  {
    id: 5,
    title: 'Laravel',
    percentage: '100',
    icon: SiLaravel 
  },
  {
    id: 6,
    title: 'Tailwind',
    percentage: '100',
    icon: SiTailwindcss 
  },
  {
    id: 7,
    title: 'Mysql',
    percentage: '100',
    icon: SiMysql 
  },
  {
    id: 8,
    title: 'React',
    percentage: '100',
    icon: SiReact 
  },
  {
    id: 9,
    title: 'Mongodb',
    percentage: '100',
    icon: SiMongodb 
  },
  {
    id: 10,
    title: 'Git',
    percentage: '100',
    icon: SiGit 
  },
  {
    id: 11,
    title: 'Bootstrap',
    percentage: '100',
    icon: SiBootstrap 
  },
  {
    id: 12,
    title: 'Express',
    percentage: '100',
    icon: SiExpress 
  },
  {
    id: 13,
    title: 'NodeJs',
    percentage: '100',
    icon: SiNodedotjs 
  },
  {
    id: 14,
    title: 'Wordpress',
    percentage: '100',
    icon: SiWordpress 
  },
  {
    id: 16,
    title: 'Jira  ',
    percentage: '100',
    icon: SiJira   
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    video: ecomShop,
    title: 'Shoses E-Shop',
    details: [
      {
        icon: <FiFileText />,
        title: 'Status : ',
        desc: 'Not Completed',
      },
      {
        icon: <FaCode />,
        title: 'Front End : ',
        desc: 'JavaScript, AJAX',
      },
      {
        icon: <FaCode />,
        title: 'Back End : ',
        desc: 'PHP, REST APIs (PayPal)',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://github.com/mohamed-elharchi/ShosesE-Shop',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    video: weatherApp,
    title: 'Weather App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Status : ',
        desc: 'Completed',
      },
      {
        icon: <FaCode />,
        title: 'Front End : ',
        desc: 'JavaScript, Html, Css',
      },
      {
        icon: <FaCode />,
        title: 'Back End : ',
        desc: 'REST APIs ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://github.com/mohamed-elharchi/weatherApp',
      },
    ],
  },
  {
    id: 3,
    img: Work3,
    video: YoutubeApp,
    title: 'Youtube App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Status : ',
        desc: 'Completed',
      },
      {
        icon: <FaCode />,
        title: 'Front End : ',
        desc: 'JavaScript, Html, Css',
      },
      {
        icon: <FaCode />,
        title: 'Back End : ',
        desc: 'REST APIs ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://github.com/mohamed-elharchi/youtubeApp/',
      },
    ],
  },


  {
    id: 4,
    img: Work4,
    video: '',
    title: 'Multimart',
    details: [
      {
        icon: <FiFileText />,
        title: 'Status : ',
        desc: 'Completed',
      },
      {
        icon: <FaCode />,
        title: 'Front End : ',
        desc: 'ReactJs',
      },
      {
        icon: <FaCode />,
        title: 'Back End : ',
        desc: 'Laravel',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://github.com/mohamed-elharchi',
      },
    ],
  },


  {
    id: 5,
    img: Work5,
    video: school,
    title: 'Moulay Ismail High School',
    details: [
      {
        icon: <FiFileText />,
        title: 'Status : ',
        desc: 'Completed',
      },
      {
        icon: <FaCode />,
        title: 'Front End : ',
        desc: 'Laravel, Bootstrap, Css',
      },
      {
        icon: <FaCode />,
        title: 'Back End : ',
        desc: 'Laravel, MySql',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://github.com/mohamed-elharchi/Moulay-Ismail-High-School',
      },
    ],
  },


  

];

export const themes = [
  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },
  
];
