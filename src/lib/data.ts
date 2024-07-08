import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import canva from "@/assets/canva.jpg";
import Hook from "@/assets/hook.jpg";
import coffie from "@/assets/coffie.jpg";
import dashborad from "@/assets/dashborad.png";
import nike from "@/assets/nike.jpg";
import game from "@/assets/game.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "computer science and artificial intelligence",
    location: "Damietta, Egypt",
    description:
      "I'm pursuing a degree in Computer Science and Artificial Intelligence at Damietta University, I'll be graduating in 2025,",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
  },
  {
    title: "Front-End Developer",
    location: "Udemy and Youtube",
    description:
      "I've gained skills in front-end development through courses on Udemy and tutorials on YouTube. This includes expertise in HTML, CSS, JavaScript, and frameworks like React and Next",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Hook Store",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: [
      "React",
      "Redux-Toolkit",
      "React-Hooks",
      "Axois",
      "Css",
      "Tailwind",
      "Figma",
    ],
    imageUrl: Hook,
    link: "https://master--melodious-starship-c29078.netlify.app/#/",
  },
  {
    title: "Canva",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["JavaScript", "Css", "Html"],
    imageUrl: canva,
    link: "https://canva-design-ruby.vercel.app/",
  },
  {
    title: "Nike",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Tailwind", "Figma"],
    imageUrl: nike,
    link: "https://master--gorgeous-mousse-f49e18.netlify.app/",
  },
  {
    title: "Coffie",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Html", "Css", "Javascript"],
    imageUrl: coffie,
    link: "https://hanysaadeldeen.github.io/CoffeeShop/",
  },
  {
    title: "Dashboard",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Html", "Css", "Bootstrap"],
    imageUrl: dashborad,
    link: "https://hanysaadeldeen.github.io/Dashboard/",
  },
  {
    title: "Game Website",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Html", "Css"],
    link: "https://hanysaadeldeen.github.io/gaming-website/",

    imageUrl: game,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Redux",
  "Redux-Toolkit",
  "Tailwind",
  "Sass",
  "Bootstrap",
  "Material-Ui",
  "Git",
  "GitHup",
  "Postman",
  "Figma",
  "Framer Motion",
] as const;
