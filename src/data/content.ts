export const personalInfo = {
  name: "Tyler Trinh",
  title: "Software Developer @ SAP",
  email: "tylervtrinh@gmail.com",
  github: "https://github.com/bvtrinh",
  linkedin: "https://linkedin.com/in/bvtrinh",
  resumePath: "/tyler_trinh_resume.pdf",
  logoPath: "/logo.png",
};

export const aboutSections = [
  {
    title: "Current Focus",
    borderColor: "border-emerald-500",
    content:
      "Working as a Software Developer at SAP after completing my Computer Science degree at Simon Fraser University. I specialize in building web applications with modern frameworks, focusing on scalability and maintainability.",
  },
  {
    title: "Technical Interests",
    borderColor: "border-blue-500",
    content:
      "My primary interests lie in full-stack web development, data science applications, and AI. I enjoy exploring how to combine these domains to create intelligent, data-driven user experiences.",
  },
  {
    title: "Beyond Code",
    borderColor: "border-purple-500",
    content:
      "When I'm not coding, you'll find me playing badminton or training for my marathon. I believe in maintaining work-life balance and finding inspiration outside of the screen.",
  },
];

export const projects = [
  {
    id: "tuning",
    title: "Tuning",
    subtitle: "Real-time multiplayer music trivia",
    description:
      "Made for a course in a team environment and went through Agile-like processes. One of my favourite projects that I have made.",
    techStack: ["Node.js", "PostgreSQL", "Socket.io", "Spotify API", "Heroku"],
    codeLink: "https://github.com/bvtrinh/tuning",
    featured: true,
  },
  {
    id: "fabcycle",
    title: "FABCYCLE",
    subtitle: "Fabric entry tool for Shopify store",
    description: "Web app to help Shopify store owners manage fabric inventory and orders.",
    techStack: ["React", "Chakra UI", "Node.js", "SQLite", "k6"],
    featured: false,
  },
  {
    id: "sparklist",
    title: "Sparklist",
    subtitle: "Wishlist sharing platform",
    description:
      "The main idea was derived from myself not knowing what to gifts to get for birthdays and Christmas. Some of the features are inspired by pcpartpicker.com.",
    techStack: ["Express", "MongoDB", "Node.js", "k8s"],
    codeLink: "https://github.com/bvtrinh/sparklist",
    featured: false,
  },
  {
    id: "magic-pantry",
    title: "Magic Pantry",
    subtitle: "Recipe generator from pantry items",
    description: "Track ingredients and create recipes based on available ingredients.",
    techStack: ["Android", "Kotlin", "Google ML Kit"],
    codeLink: "https://github.com/AndyLiuCodes/MagicPantry",
    featured: false,
  },
  {
    id: "rpi-led-show",
    title: "RPI LED Show",
    subtitle: "LED display controller",
    description: "Controlled LED displays using Raspberry Pi and Python for a university project.",
    techStack: ["Python", "RPI"],
    codeLink: "https://github.com/mwiens91/rpi-led-lightshow",
    featured: false,
  },
];

export const footer = {
  year: new Date().getFullYear(),
  text: "Tyler Trinh — Built with Vite",
};
