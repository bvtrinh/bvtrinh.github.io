export interface ProjectProps {
  title: string;
  date: string;
  skills: string[];
  about: string;
  description: string;
  links?: { [key: string]: string };
}

export const PROJECTS: ProjectProps[] = [
  {
    title: "Sparklist",
    date: "Ongoing",
    skills: ["typescript", "nodejs", "mongodb", "react", "chakra", "selenium"],
    about: "A web app to share wishlists with friends and family.",
    description:
      "The main idea was derived from myself not knowing what to gifts to get for birthdays and Christmas. Some of the features are inspired by pcpartpicker.com. It originally started as a class project back in Feb 2020 but it was idea of mine so I’ve picked it back up again in Feb 2021. The next version I plan to use a more modern stack and try to use less API’s since I was using free trials.",
    links: { github: "https://github.com/bvtrinh/sparklist" },
  },
  {
    title: "Tokimons",
    date: "Jan 2021",
    skills: [
      "typescript",
      "nodejs",
      "mongodb",
      "react",
      "bootstrap",
      "heroku",
      "docker",
      "github_actions",
    ],
    about: "A simple CRUD project to practice React and Typescript.",
    description:
      "This project was originally from a course that I took. I thought that it simple project that helped practice and review over some web development fundamentals with new tools. It's deployed live on Heroku through a Docker container.",
    links: {
      github: "https://github.com/bvtrinh/mern-tokimons",
      live: "https://mern-tokimons.herokuapp.com/",
    },
  },
  {
    title: "Reversi MCTS",
    date: "Aug 2020",
    skills: ["cplusplus"],
    about: "A CLI Reversi game implemented with a MCTS AI.",
    description:
      "This was a school project that I did for a class. The objective was to create the best possible AI that you could using the MCTS algorithm. In addition some heuristics were added drive the selection phase. After a long time of not coding in C++, it was refreshing to return to it and get down and dirty with managing memory.",
    links: {
      github: "https://github.com/dchop/Reversi-MCTS",
    },
  },
  {
    title: "Avise",
    date: "Jan 2020",
    skills: ["react", "bootstrap", "html", "css", "gcp"],
    about: "A web app to track the consumption of toxic substances using a Discord bot.",
    description:
      "This app was build for nwHacks2020. I was tasked with designing and implementing the frontend. This was one of my first projects using React which made me realize the power of React. Coming from using jQuery and using AJAX calls, React made it easier to create more dynamic UIs.",
    links: {
      github: "https://github.com/mwiens91/avise",
      showcase: "#",
    },
  },
  {
    title: "Tuning",
    date: "Dec 2019",
    skills: ["nodejs", "bootstrap", "html", "css", "heroku", "postgres", "socketio", "spotify"],
    about: "A song trivia web app with leaderboards and multiplayer.",
    description:
      "This was an app for one of course projects. It was good experience working in a team environment and going through an Agile-like process. One of my favourite projects that I have made.",
    links: {
      github: "https://github.com/bvtrinh/tuning",
      live: "https://tuning-game.herokuapp.com/",
    },
  },
  {
    title: "Song Recommendations",
    date: "Dec 2019",
    skills: ["python"],
    about: "A Jupyter Notebook of song recommendations from the MillionSongDataset.",
    description:
      'This was a final project for one of my courses that was done in pairs. We went for a PCA and Euclidean distance approach to figure out song recommendations give a playlist of songs from the dataset. One thing that I wished the dataset gave was newer songs. Once the recommendations were calculated, it became more of a subjective measure to determine if songs were "similar" to the playlist.',
    links: {
      github: "https://github.com/bvtrinh/song-recommendations",
    },
  },
  {
    title: "RPI LED Lightshow",
    date: "Apr 2018",
    skills: ["python", "rpi"],
    about: "A RPI LED lightshow with Python and Fast Fourier Transforms.",
    description:
      "A small tinker project to work with a RPI and Python. The project made me realize how universal the RPI is a IoT device. I'd like to do some sort of RPI projects involving cameras in the future.",
    links: {
      github: "https://github.com/mwiens91/rpi-led-lightshow",
      showcase: "https://www.youtube.com/watch?v=0hyedCX0OAA",
    },
  },
  /*
  {
    title: "",
    date: "",
    skills: [""],
    about: "",
    description: "",
    links: {
      github: "",
    },
  },
  */
];
