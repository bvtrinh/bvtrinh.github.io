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
      "Software Developer at SAP specializing in backend development and microservices architecture. My work centers on building resilient services with clear separation of concerns, optimized performance under load, and maintainable codebases that teams can evolve confidently.",
  },
  {
    title: "Technical Interests",
    borderColor: "border-blue-500",
    content:
      "My primary interests lie in full-stack web development and AI. I'm constantly experimenting with new AI tools to see how they can sharpen my development skills and streamline my workflow. My aim is to combine these interests into something practical: building applications that make a real difference in how people work and live.",
  },
  {
    title: "Beyond Code",
    borderColor: "border-purple-500",
    content:
      "Outside of work, you'll find me on the badminton court, training for my next marathon, or exploring a new corner of the world. I believe in being more than just a developer. Staying active, exploring new places, and pursuing diverse interests makes me better at what I do and keeps life interesting.",
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
