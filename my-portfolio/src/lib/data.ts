import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nftlImg from "../../public/NFTLeaguez.png"
import moneyMattersImg from "../../public/MoneyMatters.png"
import rmtdevImg from "../../public/rmtdev.png";

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
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Rush App",
        description:
            "A Web 3.0 ticketing app that aims to decentralize the ticketing industry. This is a startup I founded with four of my peers at McGill University.",
        tags: ["React Native", "JavaScript", "MongoDB", "Solidity", "Expo", "Figma", "Mobile Development"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Finance Tracker",
        description:
            "I worked as a full-stack developer on this mobile application for my Software Engineering in Practice class.",
        tags: ["React Native", "PostgreSQL", "JavaScript", "Expo", "Mobile Development"],
        imageUrl: moneyMattersImg,
    },
    {
        title: "NFTLeaguez Web Game",
        description:
            "As a freelance developer for STADIO, I built a WebGL multiplayer simulation basketball game from the ground up that utilizes the Solana Blockchain.",
        tags: ["Unity", "C#", "API", "WebGL", "Canva", "Figma", "Game Development"],
        imageUrl: nftlImg,
    },
] as const;

export const skillsData = [
    "Java",
    "C",
    "C++",
    "C#",
    "Python",
    "Umple",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "PostgreSQL",
    "Spring",
    "Unity",
    "Unreal Engine",
    "Solidity",
    "Bash",
    "Assembly ARM",
] as const;