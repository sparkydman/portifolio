module.exports = {
  email: "gozieugwuede@gmail.com",

  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/sparkydman",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/chigozie-ugwuede",
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Projects",
      url: "/#projects",
    },
    {
      name: "Experience",
      url: "/#jobs",
    },
    {
      name: "Education",
      url: "/#educations",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],

  colors: {
    green: "#64ffda",
    navy: "#0a192f",
    darkNavy: "#020c1b",
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),

  seo: {
    title: "Chigozie Ugwuede's Portfolio",
    description:
      "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
    og: {
      title: "Temitope Babalola Portfolio",
      type: "website",
      url: "https://portifolio-psi-sable.vercel.app",
      image: "https://portifolio-psi-sable.vercel.app/imgs/chigo.jpg",
    },
    image: "https://portifolio-psi-sable.vercel.app/imgs/chigo.jpg",
    twitter: "gozie_rep",
  },

  projects: [
    {
      name: "Vtunation Platform",
      description:
        "Fin-tech platform where customers buy airtime, data, send money, send bulk sms",
      stacks: "Next.js, Material UI, Styled Components, LESS, Redux",
      external: "https://vtunation-app.vercel.app/",
    },
    {
      name: "WhichRide Platform",
      description: "WhichRide is an online ride booking landing page",
      stacks: "Next.js, GSAP animation",
      link: "https://github.com/sparkydman/whichride",
      external: "https://whichride-ten.vercel.app/",
    },
    {
      name: "Bootcamp API",
      description:
        "The Bootcamp API is a service that allows users to search for coding bootcamps based on various criteria, such as location, program type, pricing, and more.",
      stacks: "Golang,Gin,mongodb",
      link: "https://github.com/sparkydman/bootcamp",
    },
    {
      name: "User Product API",
      description:
        "A simple user product api that allows users to create account and products",
      stacks: "Node.js,Typescript,Nest.js,Postgresql",
      link: "https://github.com/sparkydman/user-product",
    },
    {
      name: "File grep",
      description: "Grep words in files, can search within subfolder files",
      stacks: "Golang",
      link: "https://github.com/sparkydman/filegrep",
    },
  ],

  jobs: [
    {
      title: "Software Engineer",
      employer: "@Zone Payment Network, Lagos, Nigeria",
      description:
        "Contributed heavily to engineering data-driven distributed systems by developing a Golang package that integrated Kafka for messaging, Besu for blockchain operations, OpenTelemetry for comprehensive monitoring, database connections, Redis for caching, and Vault for secure secrets management. The package has become the backbone for multiple services within the company, significantly improving developer productivity and system reliability.",
      duration: "Dec. 2021 - Present",
    },
    {
      title: "Frontend Developer",
      employer: "@Vtunation, Enugu, Nigeria",
      description:
        " Played a pivotal role in the development of a cutting-edge Fintech platform that provided users with a secure and convenient way to pay bills, purchase data and mobile top-ups, and send money. Collaborated closely with the backend team to deliver a seamless user experience.",
      duration: "Sept. 2021 - May. 2022",
    },
    {
      title: "Co-founder and CTO",
      employer: "@Ucontex Ltd, Port Harcourt, Nigeria",
      description:
        "Led the end-to-end development of the company’s online contest application, an innovative platform designed to allow users to effortlessly host and participate in contests. My leadership and technical acumen were pivotal in delivering a secure, user-friendly application that met the evolving needs of a transparent contest platform.",
      duration: "Sept. 2019 - May. 2022",
    },
    {
      title: "Web Developer",
      employer: "@Eloti Designs, Port Harcourt, Nigeria",
      description:
        "Worked alongside a talented team to develop cutting-edge mobile and web applications for a diverse range of clients, delivering high-quality digital solutions that met and exceeded client expectations.",
      duration: "Jun. 2018 - Aug. 2019",
    },
  ],

  educations: [
    {
      course: "Computer Engineering",
      school: "@Enugu State University of Science and Technology",
      duration: "2017",
    },
  ],
};
