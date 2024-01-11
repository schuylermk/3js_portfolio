import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  angular,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  sketch,
  docker,
  meta,
  bluevolt,
  philips,
  jams,
  omni,
  carrent,
  jobit,
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
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Angular",
    icon: angular,
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
    name: "Sketch",
    icon: sketch,
  },
  {
    name: "docker",
    icon: docker,
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
      "Leveraged Angular 9, 10, and 11, TypeScript, material design, NgRx (RxJS/redux) to create new components revamping existing ~20 year old SaaS learning management system. A modernization that majorly improved user experience resulting in higher customer contract renewals and led to attracting dozens of new contracts each month.",
      "Engineered net-new Angular single-page application modules and features, including an 'Automation Suite' that drastically streamlined university admin tasks, and the 'Sharing Center’ – an environment where customers were now equipped to make connections with one another, and share educational content and resources, etc., thus reducing costs, and expediting education, licensing, and certification of their students.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
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
