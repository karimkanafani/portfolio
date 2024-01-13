"use client";

import React from 'react';
import {motion} from 'framer-motion';
import {useSectionInView} from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {experiencesData} from "@/lib/data";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
      <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
        <SectionHeading>My experience</SectionHeading>
        <Timeline position="alternate">
          {
            experiencesData.map((item, index) => (
                <React.Fragment key={index}>
                  <TimelineItem>
                    <TimelineOppositeContent>
                      {item.date}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector/>
                      <TimelineDot className="text-2xl font-semibold" variant="outlined">
                        {item.icon}
                      </TimelineDot>
                      <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent className="text-xl">
                      <h3 className="font-semibold capitalize">{item.title}</h3>
                      <p className="font-normal !mt-0">{item.location}</p>
                      <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>
                    </TimelineContent>
                  </TimelineItem>
                </React.Fragment>

            ))
          }
        </Timeline>
      </section>
  )
}