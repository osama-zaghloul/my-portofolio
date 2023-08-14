import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // php,
  laravel,
  ibdaa,
  eltamiuz,
  mondia,
  freelance,
  carhub,
  realtystate,
  vidzphere,
  musclusion,
  gpt3,
  socialbook,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "php",
  //   icon: php,
  // },
  {
    name: "laravel",
    icon: laravel,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Ibdaa-Tech",
    icon: ibdaa,
    iconBg: "#383E56",
    date: "October 2019 - December 2019",
    points: [
      "Developing and maintaining web applications using PHP , Laravel and other related technologies.",
      "Collaborating with cross-functional team including designer, product manager, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Eltamiuz",
    icon: eltamiuz,
    iconBg: "#E6DEDD",
    date: "December 2019 - July 2022",
    points: [
      "Developing and maintaining web applications using PHP , Laravel , Node.js , React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Mondia",
    icon: mondia,
    iconBg: "#383E56",
    date: "July 2022 - December 2022",
    points: [
      "Developing and maintaining web applications using React.js , vue.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelancer",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js ,Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "carhub",
    description:
      "Web-based platform that allows users to search, book, and rent cars , providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: carhub,
    source_code_link: "https://car-f3j1trt67-osama-zaghloul.vercel.app/",
  },
  {
    name: "Realtystate",
    description:
      "Web application that enables users to search for Apartments, builder floors, villas and more.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "pink-text-gradient",
      },
    ],
    image: realtystate,
    source_code_link: "https://realtystate-eiig.vercel.app/",
  },
  {
    name: "vidzphere",
    description:
      "Web application that enables users to watch and search for videos.providing a convenient and efficient way for watching videos.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "rapid-api",
        color: "pink-text-gradient",
      },
    ],
    image: vidzphere,
    source_code_link: "https://vidzphere.netlify.app/",
  },
  {
    name: "musclusion",
    description:
      "Web application that enables users to Check out the most effective exercises personalized to them.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "rapid-api",
        color: "pink-text-gradient",
      },
    ],
    image: musclusion,
    source_code_link: "https://musclusion.netlify.app/",
    source_code_link: "https://musclusion.netlify.app/",
  },
  {
    name: "gpt3",
    description:
      "gpt3 landing page is a fully Responsive Modern UI/UX Website built with react.js and pure css .",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link: "https://gpt3-net.netlify.app/",
  },
  {
    name: "socialbook",
    description:
      "A fully responsive facebook clone with light and dark mode  .",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: socialbook,
    source_code_link: "https://social-book-application.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
