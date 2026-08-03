import React from "react";
import { Skill } from "../../data/skills";
import { Sparkles } from "lucide-react"; 
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const Skills = () => {
  // Groups your data array items by matching their exact name strings
  const SkillCategories = {
    "Frontend Development": [
      Skill.find((s) => s.name === "Angular"),
      Skill.find((s) => s.name === "React.js"),
      Skill.find((s) => s.name === "JavaScript"),
      Skill.find((s) => s.name === "TypeScript"),
      Skill.find((s) => s.name === "Next.js"),
      Skill.find((s) => s.name === "Tailwind CSS"),
      Skill.find((s) => s.name === "HTML5 & CSS3"),
    ].filter(Boolean),

    "Backend & APIs": [
      Skill.find((s) => s.name === "Node.js"),
      Skill.find((s) => s.name === "MongoDB"),
    ].filter(Boolean),

    "Tools & Others": [
      Skill.find((s) => s.name === "Git & GitHub"),
      Skill.find((s) => s.name === "Bootstrap"),
      Skill.find((s) => s.name === "npm"),
      Skill.find((s) => s.name === "Jest"),
    ].filter(Boolean),
  };

  // Maps the 5 custom levels to specific progress bar percentages
  const GetProficiencyLevel = (level) => {
    const levels = {
      Expert: 95,
      Advanced: 85,
      Competent: 72,     // Calibrated below Advanced for Git
      Intermediate: 58,  // Calibrated mid-range for React & TS
      Emerging: 45,      // Calibrated upper-beginner for Node & Mongo
    };
    return levels[level] || 50;
  };

  // Assigns distinct glassmorphism badge colors based on your skill tier
  const GetLevelColor = (level) => {
    const colors = {
      Expert: "text-[#8DFF69] bg-[#8DFF69]/10 border-[#8DFF69]/20",
      Advanced: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      Competent: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      Intermediate: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      Emerging: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    };
    return colors[level] || "text-gray-400 bg-gray-500/10 border-gray-500/20";
  };

  return (
    <section id="skills" className="relative py-20 bg-black overflow-hidden">
      <RadialGradientBackground variant="skills" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                My Expertise
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Here are some of the technologies and tools I've worked with across my engineering track:
            </p>
          </div>
        </FadeIn>

        {/* Categories Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SkillCategories).map(
            ([category, categorySkills], categoryIndex) => (
              <FadeIn key={category} delay={categoryIndex * 100}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-2">
                      {category}
                    </h3>

                    <div className="space-y-6">
                      {categorySkills.map((skill) => {
                        const IconComponent = skill.icon;
                        const proficiency = GetProficiencyLevel(skill.level);

                        return (
                          <div key={skill.id} className="space-y-2">
                            {/* Skill Main Details Row */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/5 rounded-lg flex items-center justify-center">
                                  {IconComponent && (
                                    <IconComponent className="w-5 h-5 text-primary" />
                                  )}
                                </div>
                                <div>
                                  <div className="text-white font-medium text-sm sm:text-base">
                                    {skill.name}
                                  </div>
                                  <div className="text-xs text-white/40">
                                    {skill.experience}
                                  </div>
                                </div>
                              </div>
                              {/* Custom Tier Badge */}
                              <span
                                className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${GetLevelColor(skill.level)}`}
                              >
                                {skill.level}
                              </span>
                            </div>

                            {/* Dynamic Percentage Progress Bar */}
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary transition-all duration-1000 ease-out"
                                style={{ width: `${proficiency}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;