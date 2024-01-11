"use client";

import React, {useEffect, useRef} from 'react';
import SectionHeading from "@/components/section-heading";
import {projectsData} from "@/lib/data";
import Project from "@/components/project";
import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/context/active-section-context";
import {useSectionInView} from "@/lib/hooks";

export default function Projects() {

  const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} id="projects" className="scroll-mt-28">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project}/>
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}

