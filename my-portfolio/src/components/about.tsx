"use client";

import React, {useEffect} from 'react';
import {motion} from 'framer-motion';
import SectionHeading from "@/components/section-heading";
import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/context/active-section-context";
import {useSectionInView} from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section ref={ref} className="mb-28 max-w-[45rem] text-center sm:text-2xl leading-8 sm:mb-40 scroll-mt-28"
        initial={{opacity: 0, y: 100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.175}}
        id="about">
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                I am in my {" "}
                <span className="font-medium">fourth year</span> at McGill University studying Software Engineering. My love for video games sparked my passion for development.
                I started building basic games using no-code game engines like Buildbox until I finally started to learn about the basics of programming!{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. I am always looking to
                learn new technologies. I am currently looking for an{" "}
                <span className="font-medium">internship position for Summer 2024</span> as a software
                developer.
            </p>

            <p>
                <span className="italic">In my free time</span>, I enjoy playing
                video games, watching TV shows, and playing basketball. I also co-founded a startup called {" "}
                <span className="font-medium">RUSH</span> which also keeps me busy!
            </p>
        </motion.section>
    )
}