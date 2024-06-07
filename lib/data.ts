import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const words = ["Hello", "Olá", "Bonjour", "Ciao", "Hola"];

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
    name: "Experience",
    hash: "#experience",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const paragraph =
  "After earning a degree in Electrical Engineering in Venezuela, I moved to Buenos Aires, Argentina, to pursue my passion for programming. I trained in full-stack web development with a focus on React, React Native, Next.js, TypeScript, Node.js, MongoDB, MySQL, and PostgreSQL. I'm continuously learning new technologies, currently exploring backend development and AWS Cloud Computing. I am seeking a frontend/full-time software developer position.";

export const experiencesData = [
  {
    title: "Frontend web developer",
    company: "Jumpweb",
    description: [
      "Create an interactive user interface with React.js, Next.js and Redux.",
      "Build custom WordPress plugins from scratch utilizing the latest industry standards of coding practices.",
      "Develop a responsive website using HTML, CSS and JavaScript.",
      "Learn new front-end programming languages and methodologies to perform tasks.",
      "Test websites across multiple browsers, platforms, and devices for optimal performance results.",
      "Translate flat design files to clean, accessible and interactive user experiences.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - Jun 2024",
  },
  {
    title: "UX/UI Developer",
    company: "Making Sense",
    description: [
      "Developing and maintaining web applications using React.js/Typescript and components with Storybook.",
      "Collaborating with cross-functional teams including designers, product managers and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Testing the application in different environments and devices to ensure the quality of the product.",
      "Deploying features to production using pipelines already created by the DevOps team.",
      "Working on a ecommerce platform for a client using basic web technologies like HTML, CSS, SASS, JS, jQuery, XSL and other related technologies.",
      "Participating in the development of a new Design System for the clients.",
      "Working with the QA team to ensure the quality of the product.",
      "Demoing developed features for the clients at the end of the sprints.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2021 - Jul 2023",
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    id: 2,
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    id: 3,
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
