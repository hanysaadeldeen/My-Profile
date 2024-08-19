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
import Lms from "@/assets/lms.jpg";

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
      "I am studying Computer Science and Artificial Intelligence in the Computer Science department. I am passionate about developing innovative solutions through coding and AI technologies",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
  },
  {
    title: "Front-End InternShip ",
    location: "Baianat, New Damietta",
    description:
      "Worked as a front-end intern at Baianat, utilizing TypeScript and Vue.js to develop dynamic and responsive web applications.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
  {
    title: "Front-End Developer",
    location: "Udemy and Youtube",
    description:
      "I've gained skills in front-end development through courses on Udemy and tutorials on YouTube. This includes expertise in HTML, CSS, JavaScript, and frameworks like React and Next",
    icon: React.createElement(FaReact),
    date: "2021 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Hook Store",
    description:
      "is a comprehensive web and mobile e-commerce platform offering seamless user management, dynamic UI with React, secure payments via Stripe, and advanced shopping features .",
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
    title: "Learning Management System",
    description:
      "LMS is designed to provide a seamless educational experience for both students and teachers. Built with the latest technologies, this platform offers a variety of features to facilitate course creation, management, and consumption.",
    tags: [
      "Next.js 14",
      "React",
      "Stripe",
      "Mux",
      "Prisma",
      "Tailwind",
      "MongoDB",
      "Clerk",
    ],
    imageUrl: Lms,
    link: "https://master--melodious-starship-c29078.netlify.app/#/",
  },
  {
    title: "Canva",
    description:
      "An elegant and modern clothing store website designed with HTML, CSS, and JavaScript, enhanced by Font Awesome for a stylish touch. It offers a seamless shopping experience with dynamic interactions.",
    tags: ["JavaScript", "Css", "Html"],
    imageUrl: canva,
    link: "https://canva-design-ruby.vercel.app/",
  },
  {
    title: "Nike",
    description:
      "A modern athletic shoe store website designed with HTML5, CSS3, and Tailwind CSS, offering a sleek and flexible shopping experience across all devices. The site features intuitive navigation and visually appealing displays to attract and engage sports and sneaker enthusiasts.",
    tags: ["React", "Tailwind", "Figma"],
    imageUrl: nike,
    link: "https://master--gorgeous-mousse-f49e18.netlify.app/",
  },
  {
    title: "Coffie",
    description:
      "A stylish coffee sales website crafted with HTML and CSS, featuring elegant Font Awesome icons. The site offers an exceptional user experience with intuitive navigation, visual appeal, and compatibility across all devices.",
    tags: ["Html", "Css", "Javascript"],
    imageUrl: coffie,
    link: "https://hanysaadeldeen.github.io/CoffeeShop/",
  },
  {
    title: "Dashboard",
    description:
      "A cutting-edge dashboard for freelancers built with HTML5, CSS3, and Bootstrap, offering clear project pricing, modern responsive design, and exceptional quality for efficient project management across all devices.",
    tags: ["Html", "Css", "Bootstrap"],
    imageUrl: dashborad,
    link: "https://hanysaadeldeen.github.io/Dashboard/",
  },
  {
    title: "Game Website",
    description:
      "A game showcase website designed with HTML5 and CSS3, offering a responsive, visually appealing experience across all devices. Crafted without frameworks, it highlights original web design skills and creativity in the digital gaming world.",
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
  "Jira",
] as const;
