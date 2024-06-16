import {
  express,
  mobile,
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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  Bankist,
  carrent,
  jobit,
  tripguide,
  threejs,
  HairCutter,
  Tyler,
  Selo,
  Forkify,
  Portfolio,
  Portfolio_3D,
  eTrade,
  TODO,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "Express",
    icon: express,
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
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
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "HairCutter - Barber Shop",
    description:
      "HairCutter - Barber Shop represents a meticulously crafted design concept. This innovative and visually captivating web-based platform showcases a modern and user-friendly interface.",

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
      {
        name: "wow",
        color: "pink-text-gradient",
      },
      {
        name: "jQuery",
        color: "pink-text-gradient",
      },
    ],
    image: HairCutter,
    source_code_link: "https://github.com/mohitdudhat/Barber",
  },
  ,
  {
    name: "Tyler - Tailor & Clothing",
    description:
      "Tyler - Tailor & Clothing embodies an artful design concept that redefines the world of tailoring and fashion. This visually compelling web-based platform showcases an elegant and intuitive interface.",
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
      {
        name: "wow",
        color: "pink-text-gradient",
      },
      {
        name: "jQuery",
        color: "pink-text-gradient",
      },
    ],
    image: Tyler,
    source_code_link: "https://github.com/mohitdudhat/Tailor",
  },
  ,
  {
    name: "Portfolio",
    description:
      "Explore this portfolio, It represents experiments in web development and design. These projects reflect a commitment to learning and growing in the field.",

    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap 5",
        color: "green-text-gradient",
      },
      {
        name: "jQuery",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "WoW",
        color: "pink-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/mohitdudhat/Potfolio",
  },
  {
    name: "SEO - Selo",
    description:
      "SEO - Selo is a web design concept that leverages the power of design and user experience to optimize online visibility. The design is prioritizing user engagement and search engine optimization.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap 5",
        color: "green-text-gradient",
      },
      {
        name: "jQuery",
        color: "pink-text-gradient",
      },
    ],
    image: Selo,
    source_code_link: "https://github.com/mohitdudhat/SEO",
  },
  {
    name: "Forkify",
    description:
      "Forkify is a delightful web application that brings the world of culinary inspiration to your fingertips.Experience the joy of cooking and discover new flavors with this user-friendly recipe app.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: Forkify,
    source_code_link: "https://github.com/mohitdudhat/Forkify",
  },
  {
    name: "3D-Portfolio",
    description:
      "Welcome to my 3D portfolio, a visual journey into the realm of three-dimensional artistry. Explore a collection of my captivating 3D creations that span various styles and subjects.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: Portfolio_3D,
    source_code_link: "https://github.com/mohitdudhat/3D-Portfolio",
  },

  {
    name: "ToDo List",
    description:
      "Simplify your daily tasks with our intuitive ToDo List app. Effortlessly organize, track, and complete your to-dos, making productivity a breeze.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: TODO,
    source_code_link: "https://github.com/mohitdudhat/Node-Todo-List",
  },
  {
    name: "Bankist",
    description:
      "Your secure and convenient banking app. Manage your accounts, transactions, and finances with confidence. Experience modern banking at your fingertips with Bankist.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: Bankist,
    source_code_link: "https://github.com/mohitdudhat/Bankist",
  },
  {
    name: "eTrade",
    description:
      "Your ultimate online shopping destination. Discover a world of products, seamless transactions, and unparalleled convenience. Shop with confidence, explore endless choices, and experience the future of e-commerce.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "JSON Server",
        color: "green-text-gradient",
      },
    ],
    image: eTrade,
    source_code_link: "https://github.com/mohitdudhat/Node-Todo-List",
  },
];

export { services, technologies, experiences, testimonials, projects };
