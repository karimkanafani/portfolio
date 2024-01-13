import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {FaDatabase, FaGamepad, FaReact} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nftlImg from "../../public/NFTLeaguez.png"
import rushImg from "../../public/RushApp.png"
import moneyMattersImg from "../../public/MoneyMatters.png"
import {FaMobile} from "react-icons/fa6";
import {IoTicket} from "react-icons/io5";

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
        title: "Data Analyst Intern",
        location: "Beirut, Lebanon",
        description:
            "As a data analyst at the American University of Beirut Medical Center, I helped Doctors and Scientists compile and analyze data.",
        icon: React.createElement(FaDatabase),
        date: "2018",
    },
    {
        title: "Software Developer Intern",
        location: "Dubai, UAE",
        description:
            "At Hafla, I worked as a back-end developer within a team and built an API for their newsletter that performs CRUD operations.",
        icon: React.createElement(FaDatabase),
        date: "2022",
    },
    {
        title: "Mobile Developer Intern",
        location: "Dubai, UAE",
        description:
            "At Chalhoub group, I was responsible of building tablet ports for their brand applications using React Native and TypeScript.",
        icon: React.createElement(FaMobile),
        date: "2023",
    },
    {
        title: "Freelance Game Developer",
        location: "Australia",
        description:
            "I developed a multiplayer simulation basketball game for WebGL using the Unity game engine. It utilizes the blockchain to access information for STADIO's player base.",
        icon: React.createElement(FaGamepad),
        date: "2023",
    },
    {
        title: "Co-Founder",
        location: "Montreal, QC, Canada",
        description:
            "I work as a full-stack developer at RUSH, a ticketing app that leverages the blockchain to distribute tickets.",
        icon: React.createElement(IoTicket),
        date: "2022 - Present",
    },
] as const;

export const projectsData = [
    {
        title: "Rush App",
        description:
            "A Web 3.0 ticketing app that aims to decentralize the ticketing industry. This is a startup I founded with four of my peers at McGill University.",
        tags: ["React Native", "JavaScript", "MongoDB", "Solidity", "Expo", "Figma", "Mobile Development"],
        imageUrl: rushImg,
    },
    {
        title: "MoneyMatters Finance Tracker",
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