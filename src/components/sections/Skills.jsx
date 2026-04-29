import React from "react";
import { Skill } from "../../data/skills";
import * as Icons from "lucide-react";
import FadeIn from "../animations/FadeIn";

// Categorize skills
const SkillCategories = {
  "Frontend Development": [
    Skill.find((s) => s.name === "React.js"),
    Skill.find((s) => s.name === "JavaScript"),
    Skill.find((s) => s.name === "TypeScript"),
    Skill.find((s) => s.name === "Next.js"),
    Skill.find((s) => s.name === "Tailwind CSS"),
    Skill.find((s) => s.name === "Redux"),
  ].filter(Boolean),
  "Backend & APIs": [
    Skill.find((s) => s.name === "Node.js"),
    Skill.find((s) => s.name === "REST APIs"),
  ].filter(Boolean),
  "Tools & Others": [
    Skill.find((s) => s.name === "Git & GitHub"),
    Skill.find((s) => s.name === "Responsive Design"),
    Skill.find((s) => s.name === "Figma"),
    Skill.find((s) => s.name === "Vite"),
    Skill.find((s) => s.name === "Jest"),
  ].filter(Boolean),
};

const GetProficiencyLevel = (level) => {
  const levels = {
    Expert: 95,
    Advanced: 80,
    Intermediate: 65,
  };
  return levels[level] || 50;
};

// Get level color
const GetLevelColor = (level) => {
  const colors = {
    Expert: "text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30",
    Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
    Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
  };

  return colors[level] || "text-gray-400 bg-gray-500/20 border-gray-500/30";
};

const Skills = () => {
  return <div></div>;
};

export default Skills;
