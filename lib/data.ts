import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import ProductManager from "@/public/images/products-manager.png";
import UpTask from "@/public/images/uptask.png";
import MedicalAppointments from "@/public/images/medical-appointments.png";

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
    title: "Products manager",
    description:
      "A Vite Project made with Reactjs, TypeScript, Valibot for validating schemas, TailwindCSS and Flowbite for styling, Axios for handling requests and React Router DOM.",
    tags: [
      "React",
      "Tailwind",
      "TypeScript",
      "PostgreSQL",
      "Nodejs",
      "Express",
      "Sequelize",
      "Swagger",
      "SuperTest",
      "Jest",
    ],
    imageUrl: ProductManager,
  },
  {
    id: 2,
    title: "UpTask MERN",
    description:
      "A project and task management application created using the MERN stack, Socket.io, and styled with Tailwind CSS, DaisyUI, and HeadlessUI.",
    tags: [
      "React",
      "Cypress",
      "HeadlessUI",
      "DaisyUI",
      "Tailwind",
      "ContextAPI",
      "MongoDB",
      "Nodejs",
      "Express",
      "JWT",
      "Socket.io",
    ],
    imageUrl: UpTask,
  },
  {
    id: 3,
    title: "Medical appointments app",
    description:
      "A medical appointments app for pets, developed with React Native CLI, Typescript and Async Storage for persisting data.",
    tags: ["React Native", "TypeScript", "Async Storage"],
    imageUrl: MedicalAppointments,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Prisma",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Framer Motion",
  "Threejs",
] as const;
