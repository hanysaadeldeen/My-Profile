import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import canva from "@/assets/canva.jpg";
import Hook from "@/assets/hook.jpg";
import coffie from "@/assets/coffie.jpg";
import nike from "@/assets/nike.jpg";

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
    tags: ["React", "Redux-Toolkit", "Css", "Tailwind", "Figma"],
    imageUrl: Hook,
  },
  {
    title: "Canva",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["JavaScript", "Css", "Html"],
    imageUrl: canva,
  },
  {
    title: "Nike",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Tailwind", "Figma"],
    imageUrl: nike,
  },
  {
    title: "coffie",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Html", "Css", "Javascript"],
    imageUrl: coffie,
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
