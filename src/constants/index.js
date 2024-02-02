import {
  creator,
  webdev,
  javascript,
  angulardev,
  angular,
  typescript,
  html,
  css,
  reactdev,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  sketch,
  etc,
  meta,
  bluevolt,
  philips,
  jams,
  omni,
  portfolio,
  evogym,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "About",
    title: "About",
  },
  {
    id: "Work",
    title: "Work",
  },
  {
    id: "Contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: webdev,
  },
  {
    title: "Angular Developer",
    icon: angulardev,
  },
  {
    title: "React Developer",
    icon: reactdev,
  },
  {
    title: "Content Creator & Manager",
    icon: creator,
  },
  {
    title: "Collab & Communicator",
    icon: etc,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "Sketch",
    icon: sketch,
  },
];

const experiences = [
  {
    title: "Frontend Software Engineer",
    company_name: "BlueVolt",
    icon: bluevolt,
    iconBg: "#383E56",
    date: "September 2020 - March 2023",
    points: [
      "Leveraged TypeScript, Angular (+ Material Design), and NgRx to revamp existing ~20 year old SaaS learning management system. This modernization majorly improved user experience resulting in higher customer contract renewals and led to attracting dozens of new contracts each month.",
      "Engineered net-new Angular single-page app modules / features, including: 'Automation Suite' enabling university admins to conditionally 'program' a number of previously uber-repetetive tasks; 'Sharing Center’ – platform where universities were now equipped to make connections with one another, choose to share educational content, resources, etc. thus reducing costs and increasing productivity, and expediting their students path to education, licensing, and certification.",
      "Represented Engineering team on the company-wide ‘Product Council’.",
      "Collaborated with Product and Customer Service teams for clarity in performing bug fixes, functionality enhancements, copy edits, etc. to the existing C#/.NET legacy code",
      "Set up Python/FastAPI endpoints linking existing platform and new NoSQL Couchbase and Apache Kafka which improved data-synchronization and event-driven responsiveness.",
    ],
  },
  {
    title: "Web Developer/Designer & CRM Specialist",
    company_name: "Philips Electronics",
    icon: philips,
    iconBg: "#E6DEDD",
    date: "Sep 2019 - Sep 2020",
    iconMarginTop: true,
    points: [
      "Performed web and email content creation, development for subscription-based digital marketing initiative of Philips Domestic Appliances.",
      "Utilized Adobe Experience Manager, Oracle Eloqua, HTML, CSS, JavaScript, and Philips Digital Campaign Creator (proprietary email design and development).",
    ],
  },
  {
    title: "Web Developer",
    company_name: "JAMS Alternative Dispute Resolution",
    icon: jams,
    iconBg: "#E6DEDD",
    date: "Sep 2019 - Sep 2020",
    points: [
      "HTML, CSS (scss/Sass), vanilla JavaScript and jQuery development for legacy website overhaul within Crownpeak content management system, with Github for version control.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "OmniUpdate",
    icon: omni,
    iconBg: "#383E56",
    date: "Sep 2019 - Sep 2020",
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
  {
    name: "This Here Website",
    description:
      "This, my personal website. Built using React, Three.js, Tailwind CSS, Framer Motion and hosted on Vercel. There's kind a lot going on here, so feel free to ask me about anything.",
    tags: [
      {
        name: "react",
        color: "text-[#087ea4]",
      },
      {
        name: "framer-motion",
        color: "framerblue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-purple-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/schuylermk/3js_portfolio",
  },
  {
    name: "EvoGym",
    description:
      "Sample fitness center website built in React and TypeScript, Next.js, and Tailwind. Desktop and mobile-friendly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: evogym,
    source_code_link: "https://github.com/schuylermk/gym-typescript/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
