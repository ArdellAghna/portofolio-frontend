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
    id: "bi",
    year: "2026",
    period: "Jun 2026 - Aug 2026",
    title: "Data Scientist Intern",
    organization: "Central Bank of Indonesia",
    description:
      "Researched and benchmarked forecasting models to determine the best-performing approach for foreign exchange (valas) supply-demand prediction. Built an AI-powered Summarizer tool for chapters in Annual Assessment books, streamlining internal review and reporting processes using Azure AI services. Conducted User Acceptance Testing (UAT) for Bank Indonesia's Internal Data Portal application to ensure functionality and data accuracy prior to deployment.",
    tech: ["Forecasting Models", "Azure AI Services", "UAT", "Data Analysis"],
    type: "work",
  },
  {
    id: "oskm",
    year: "2026",
    period: "May 2026 – Aug 2026",
    title: "Frontend Developer",
    organization: "OSKM ITB",
    description:
      "Designed and developed responsive, high-performance front-end user interfaces and interactive onboarding components for the official OSKM e-commerce platform using Next.js, TypeScript, React, and Bun. Collaborated with cross-functional UI/UX and backend teams to deliver a robust, scalable web platform for university orientation.",
    tech: ["Next.js", "TypeScript", "React", "Bun", "UI/UX"],
    type: "work",
  },
  {
    id: "purwadhika",
    year: "2026",
    period: "Oct 2025 – Jan 2026",
    title: "Data Analytics Trainee",
    organization: "PURWADHIKA DIGITAL TECHNOLOGY SCHOOL",
    description:
      "Executed end-to-end data analysis workflows, including advanced data cleansing, transformation, and Exploratory Data Analysis (EDA) using Python (Pandas, NumPy) and SQL. Applied inferential statistical methods, including Hypothesis Testing (A/B Testing, t-test, ANOVA) and correlation analysis. Developed interactive Business Intelligence dashboards using Tableau and Python visualization libraries. Synthesized complex analytical findings into compelling Data Stories.",
    tech: ["Python", "Pandas", "NumPy", "SQL", "Tableau", "A/B Testing", "EDA", "Data Storytelling"],
    type: "work",
  },
  {
    id: "hmif-itb",
    year: "2024",
    period: "Sep 2024 – Present",
    title: "Media & Information Division",
    organization: "HIMPUNAN MAHASISWA INFORMATIKA (HMIF) ITB",
    description:
      "Managing digital content strategy and community communication for ITB Informatics students. Led visual publication and documentation for major milestones: PEMILU HMIF 2025, SPARTA 2024 (Orientation), and the October Graduation 2024. Collaborated with cross-functional teams to produce high-quality multimedia assets for 1,000+ union members.",
    tech: ["Content Strategy", "Digital Media", "Event Documentation", "Multimedia Production"],
    type: "work",
  },
  {
    id: "pakansuper",
    year: "2023",
    period: "Aug 2023 – Dec 2023",
    title: "Web Designer & Creative Strategist",
    organization: "PAKANSUPER MARKETPLACE",
    description:
      "Developed an innovative web-based marketplace for farmers and breeders, successfully selected as the only project to represent ITB at the campus fair. Oversaw all stages of project execution, strategic planning, team motivation, product design, and marketing. Spearheaded the UI/UX design and technical deployment of a digital marketplace, managing domain and hosting. Conceptualized the platform’s brand identity and created all visual marketing assets.",
    tech: ["UI/UX Design", "Web Deployment", "Brand Identity", "Team Leadership", "Strategic Planning"],
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
