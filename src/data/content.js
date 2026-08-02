// Single source of truth for all resume-driven content on the site.
// Updating the resume should only require editing this file.

export const profile = {
  name: 'Baruf Kosgei',
  title: 'Software Engineer (Cloud & Backend)',
  email: 'barufkosgei@gmail.com',
  phone: '+1 415-340-5550',
  phoneHref: 'tel:+14153405550',
  location: 'Austin, TX',
  website: 'https://www.barufkosgei.com',
  yearsOfExperience: '5+',
  resumeUrl: '/Baruf_Kosgei_Resume.pdf',
  // Rotating titles in the hero
  roles: ['Software Engineer', 'Cloud & Backend Engineer', 'Full-Stack Developer'],
  summary:
    'Software Engineer with 5+ years of experience delivering across full-stack, backend, and cloud infrastructure. Hands-on expertise in Microsoft Azure, DevSecOps practices, enterprise application development, and legacy system modernization.',
  about:
    'I build and modernize enterprise software — from cloud-native microservices on Azure to the APIs and interfaces that sit on top of them. Today I am a Senior Software Developer I at Emerson, working on regulated life sciences applications, where I focus on Azure Kubernetes Service, CI/CD, and embedding security into every stage of the SDLC.',
  aboutSecondary:
    'Over the past five years I have shipped healthcare platforms, agency-wide forms systems, and customer-facing web apps. I am Microsoft Azure certified (AZ-204, AZ-900) and enjoy the work most when it involves untangling legacy systems and leaving them measurably more secure and maintainable.',
};

export const experience = [
  {
    role: 'Senior Software Developer I',
    company: 'Emerson',
    location: 'Austin, TX',
    start: '09/2023',
    end: 'Present',
    period: 'Sep 2023 – Present',
    current: true,
    highlights: [
      'Designed and deployed cloud-native microservices on Microsoft Azure using AKS and CI/CD pipelines, enabling scalable enterprise applications in regulated life sciences environments.',
      'Developed full-stack features end-to-end across enterprise applications, implementing solutions across database, backend APIs, and frontend layers with automated unit testing.',
      'Built and integrated a DevSecOps pipeline including automated vulnerability scanning (Black Duck, Coverity), SBOM generation, and threat modeling, establishing a repeatable security and compliance process across the SDLC.',
      'Modernized legacy VB services to C# and REST APIs, eliminating TLS 1.0 dependencies and improving security across multiple production modules.',
    ],
    tags: ['Azure', 'AKS', 'C#', 'DevSecOps', 'CI/CD'],
  },
  {
    role: 'Software/Forms Developer',
    company: 'Texas Family Initiative',
    location: 'Irving, TX',
    start: '03/2023',
    end: '09/2023',
    period: 'Mar 2023 – Sep 2023',
    current: false,
    highlights: [
      'Built and maintained enterprise forms applications using C#, ASP.NET, SQL Server, and TypeScript, serving agency-wide operational workflows.',
      'Collaborated with stakeholders to translate business requirements into technical solutions, ensuring software compatibility with agency processes.',
    ],
    tags: ['C#', 'ASP.NET', 'SQL Server', 'TypeScript'],
  },
  {
    role: 'Software Developer',
    company: 'Change Healthcare',
    location: 'Lombard, IL',
    start: '11/2021',
    end: '03/2023',
    period: 'Nov 2021 – Mar 2023',
    current: false,
    highlights: [
      'Built healthcare web applications using C#, .NET Core, React, and GraphQL, improving user satisfaction by 20%.',
      'Configured CI/CD pipelines to automate build and deployment, reducing manual effort and improving release reliability.',
      'Developed scalable APIs and frontend components supporting core healthcare workflows.',
    ],
    tags: ['.NET Core', 'React', 'GraphQL', 'CI/CD'],
  },
  {
    role: 'Front-End Engineer',
    company: 'Autobahn Limo',
    location: 'Chicago, IL',
    start: '06/2019',
    end: '09/2021',
    period: 'Jun 2019 – Sep 2021',
    current: false,
    highlights: [
      'Developed responsive web interfaces using React, JavaScript, HTML5, and CSS3.',
      'Contributed to CI/CD adoption and backend integrations using Python and REST APIs.',
    ],
    tags: ['React', 'JavaScript', 'Python', 'REST'],
  },
];

export const skillGroups = [
  {
    label: 'Languages',
    items: ['C#', 'JavaScript (ES6+)', 'TypeScript', 'Python'],
  },
  {
    label: 'Frameworks & UI',
    items: ['.NET Core', 'ASP.NET Core', 'React', 'Vue', 'Node.js', 'GraphQL', 'HTML5', 'CSS / Sass'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['Microsoft Azure (AKS)', 'Kubernetes', 'Docker', 'Azure DevOps', 'CI/CD Pipelines'],
  },
  {
    label: 'Databases',
    items: ['SQL Server', 'Azure Cosmos DB', 'MongoDB'],
  },
];

export const education = [
  {
    institute: 'University of Illinois at Chicago',
    degree: 'Bachelor of Science',
    field: 'Health Science',
  },
];

export const certifications = [
  {
    name: 'Microsoft Azure Developer Associate',
    code: 'AZ-204',
  },
  {
    name: 'Microsoft Azure Fundamentals',
    code: 'AZ-900',
  },
];

export const projects = [
  {
    title: 'NaiRobi',
    description:
      'Professional e-commerce web application built with React and Next.js. Stores user data in MongoDB, handles authentication with NextAuth, and processes payments through Stripe.',
    image: 'img/portfolio/nairobi1.png',
    liveUrl: 'https://nairobi1.vercel.app/',
    codeUrl: 'https://github.com/KBaruf/NaiRobi',
    tags: ['Next.js', 'MongoDB', 'NextAuth', 'Stripe'],
  },
  {
    title: 'Omnifood',
    description:
      'Highly responsive food delivery web application built with modern JavaScript, HTML, and CSS. Stores data and handles authentication using Firebase.',
    image: 'img/portfolio/omnifood.png',
    liveUrl: 'https://omni-food-smoky.vercel.app/',
    codeUrl: 'https://github.com/KBaruf/OmniFood',
    tags: ['JavaScript', 'CSS', 'Firebase'],
  },
  {
    title: 'Sound Studio',
    description:
      'E-commerce application written in TypeScript and styled with Tailwind CSS. Integrated with the Sanity CMS and accepts payments through Stripe.',
    image: 'img/portfolio/soundstudio.png',
    liveUrl: 'https://sound-studio-kbaruf.vercel.app/',
    codeUrl: 'https://github.com/KBaruf/Sound-Studio-Client',
    tags: ['TypeScript', 'Tailwind', 'Sanity', 'Stripe'],
  },
  {
    title: 'FitWork',
    description:
      'Fitness application that fetches exercise data, then searches, filters, and displays it by targeted body part — alongside related videos, similar exercises, and equipment-based suggestions.',
    image: 'img/portfolio/fitwork.png',
    liveUrl: 'https://fitwork.netlify.app/',
    codeUrl: 'https://github.com/KBaruf/fitwork',
    tags: ['React', 'REST API', 'Material UI'],
  },
  {
    title: 'Mapty',
    description:
      'Workout tracker that uses the OpenStreetMap API to plot running and cycling sessions, pinning each workout and its stats to its location on the map.',
    image: 'img/portfolio/mapty.png',
    liveUrl: 'https://mapty-kohl.vercel.app/',
    codeUrl: 'https://github.com/KBaruf/Mapty',
    tags: ['JavaScript', 'Leaflet', 'Geolocation'],
  },
  {
    title: 'Apply & Track',
    description:
      'Job application tracker built with React. Authenticates users and visualizes application stats as either an area chart or a bar chart.',
    image: 'img/portfolio/applyandtrack.png',
    liveUrl: 'https://applyandtrack.vercel.app/',
    codeUrl: 'https://github.com/KBaruf?tab=repositories',
    tags: ['React', 'Node.js', 'Recharts'],
  },
];

export const socials = [
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/KBaruf',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/baruf-kosgei-09a543259/',
  },
  {
    name: 'Email',
    icon: 'mail',
    link: 'mailto:barufkosgei@gmail.com',
  },
];
