export interface ProjectProps {
  title: string;
  date: string;
  skills: string[];
  about: string;
  description: string;
  link?: string;
}

export const PROJECTS: ProjectProps[] = [
  {
    title: "Sparklist",
    date: "Ongoing",
    skills: ["typescript", "nodejs", "mongodb", "react", "chakra", "selenium"],
    about: "A web app to share wishlists with friends and family.",
    description:
      "The main idea was derived from myself not knowing what to gifts to get for birthdays and Christmas. Some of the features are inspired by pcpartpicker.com. It originally started as a class project back in Feb 2020 but it was idea of mine so I’ve picked it back up again in Feb 2021. The next version I plan to use a more modern stack and try to use less API’s since I was using free trials.",
    link: "https://github.com/bvtrinh/sparklist",
  },
];
