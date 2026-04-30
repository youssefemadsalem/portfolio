import React from "react";
import { Skill } from "../../data/skills";
import * as Icons from "lucide-react";
import FadeIn from "../animations/FadeIn";

const Skills = () => {
  const SkillCategories = {
    "Frontend Development": [
      Skill.find((s) => s.name === "Angular"),
      Skill.find((s) => s.name === "JavaScript"),
      Skill.find((s) => s.name === "TypeScript"),
      Skill.find((s) => s.name === "Next.js"),
      Skill.find((s) => s.name === "Tailwind CSS"),
      Skill.find((s) => s.name === "html5"),
      Skill.find((s) => s.name === "css3"),
    ].filter(Boolean),

    "Backend & APIs": [Skill.find((s) => s.name === "mongodb")].filter(Boolean),

    "Tools & Others": [
      Skill.find((s) => s.name === "git and github"),
      Skill.find((s) => s.name === "bootstrap"),
      Skill.find((s) => s.name === "npm"),
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

  const GetLevelColor = (level) => {
    const colors = {
      Expert: "text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30",
      Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
      Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
    };
    return colors[level] || "text-gray-400 bg-gray-500/20 border-gray-500/30";
  };

  return (
    <section id="skills" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Icons.Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                My Expertise
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Here are some of the technologies and tools I've worked with:
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SkillCategories).map(
            ([category, categorySkills], categoryIndex) => (
              <FadeIn key={category} delay={categoryIndex * 100}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-2">
                    {category}
                  </h3>

                  <div className="space-y-6">
                    {categorySkills.map((skill) => {
                      // CRITICAL FIX: Ensure the icon exists, otherwise use a fallback
                      const IconComponent = Icons[skill.icon] || Icons.Code2;
                      const proficiency = GetProficiencyLevel(skill.level);

                      return (
                        <div key={skill.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-white/5 rounded-lg">
                                <IconComponent className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <div className="text-white font-medium">
                                  {skill.name}
                                </div>
                                <div className="text-xs text-white/40">
                                  {skill.experience}
                                </div>
                              </div>
                            </div>
                            <span
                              className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${GetLevelColor(skill.level)}`}
                            >
                              {skill.level}
                            </span>
                          </div>

                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary transition-all duration-1000"
                              style={{ width: `${proficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
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
