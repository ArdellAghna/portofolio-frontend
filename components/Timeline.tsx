"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineItemData {
  id: string;
  year: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  tech: string[];
  type: "education" | "work" | "project" | "achievement";
}

const timelineData: TimelineItemData[] = [
  {
    id: "purwadhika",
    year: "2026",
    period: "Oct 2025 – Jan 2026",
    title: "Data Analytics Trainee",
    organization: "Purwadhika Digital Technology School",
    description:
      "Executed end-to-end data analysis workflows, including advanced data cleansing, transformation, and Exploratory Data Analysis (EDA) using Python (Pandas, NumPy) and SQL. Applied inferential statistical methods including Hypothesis Testing (A/B Testing, t-test, ANOVA) and correlation analysis. Developed interactive BI dashboards using Tableau and Python visualization libraries to monitor KPIs and identify market trends. Final Exam: 85/100 | Final Project: 91.3/100.",
    tech: ["Python", "Pandas", "NumPy", "SQL", "Tableau", "A/B Testing", "EDA", "Data Storytelling"],
    type: "work",
  },
  {
    id: "hmif-itb",
    year: "2025",
    period: "Sep 2024 – Present",
    title: "Media & Information Division Staff",
    organization: "Himpunan Mahasiswa Informatika (HMIF) ITB",
    description:
      "Managing digital content strategy and community communication for ITB Informatics students. Led visual publication and documentation for major milestones including PEMILU HMIF 2025, SPARTA 2024 (Orientation), and the October Graduation 2024. Collaborated with cross-functional teams to produce high-quality multimedia assets for 1,000+ union members.",
    tech: ["Content Strategy", "Digital Media", "Event Documentation", "Canva", "Community Management"],
    type: "work",
  },
  {
    id: "unit-golf",
    year: "2025",
    period: "Feb 2025 – Present",
    title: "Internal Department Staff",
    organization: "Unit Golf Ganesha ITB",
    description:
      "Coordinating internal operations and supporting member activities specifically for the Jatinangor campus division. Managing scheduling, logistics, and internal communications.",
    tech: ["Operations Coordination", "Member Support", "Event Management"],
    type: "work",
  },
  {
    id: "arkavidia",
    year: "2025",
    period: "Nov 2024 – May 2025",
    title: "Staff of Documentation",
    organization: "ARKAVIDIA – ITB IT Festival",
    description:
      "Captured and managed visual data for one of Indonesia's most prestigious student-led IT competitions and festivals. Responsible for photography, visual documentation, and post-event media production across multiple event days.",
    tech: ["Visual Documentation", "Photography", "Event Management", "Media Production"],
    type: "work",
  },
  {
    id: "pakansuper",
    year: "2023",
    period: "Aug 2023 – Dec 2023",
    title: "Web Designer & Creative Strategist",
    organization: "Pakansuper Marketplace",
    description:
      "Developed an innovative web-based marketplace for farmers and breeders, successfully selected as the only project to represent ITB at the campus fair. Oversaw all stages of project execution, strategic planning, team motivation, product design, and marketing. Spearheaded the UI/UX design and technical deployment, managing domain and hosting. Won Best Team award among 9 teams.",
    tech: ["WordPress", "UI/UX Design", "Web Deployment", "Brand Identity", "Team Leadership", "Go-to-Market"],
    type: "work",
  },
];

const TimelineItem = ({
  item,
  index,
}: {
  item: TimelineItemData;
  index: number;
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex gap-4">
        {/* Left column - Time period */}
        <div className="w-32 flex-shrink-0 text-sm text-gray-400 font-ubuntu pt-1">
          {item.period}
        </div>

        {/* Right column - Job details */}
        <div className="flex-1">
          {/* Title */}
          <h3 className="text-lg font-semibold text-black mb-1 font-ubuntu">
            {item.title}
          </h3>

          {/* Organization */}
          <p className="text-base text-gray-600 mb-3 font-ubuntu">
            {item.organization}
          </p>

          {/* Description */}
          <p className="text-sm text-black leading-relaxed mb-4 font-ubuntu">
            {item.description}
          </p>

          {/* Tech tags */}
          <div className="text-sm text-gray-500 font-ubuntu">
            {item.tech.join(" · ")}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Timeline = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-3">
      {timelineData.map((item, index) => (
        <TimelineItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};
