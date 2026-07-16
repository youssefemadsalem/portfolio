import React, { useState } from "react";
import { FiFolder, FiGrid, FiCode, FiCpu, FiTerminal } from "react-icons/fi";
import { projects, categories } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  // FIXED: Mapped to match your actual data categories array cleanly
  const getCategoryIcon = (category) => {
    switch (category) {
      case "All": return <FiFolder className="w-4 h-4" />;
      case "Angular": return <FiGrid className="w-4 h-4" />;
      case "React / Next.js": return <FiCode className="w-4 h-4" />;
      case "Vanilla": return <FiTerminal className="w-4 h-4" />;
      case "Backend": return <FiCpu className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-black overflow-hidden">
      <RadialGradientBackground variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/20 bg-primary/10 rounded-full mb-4">
              <FiFolder className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">My Work</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-5xl font-normal text-white mb-4 tracking-tight">
              Featured Projects
            </h2>
          </FadeIn>

          <FadeIn delay={150}>
            <p className="text-sm text-white/50 max-w-md">
              Showcasing my best work and achievements
            </p>
          </FadeIn>
        </div>

        {/* Categories Menu Tabs */}
        <FadeIn delay={200}>
          <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
            {categories.map((category, index) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 relative ${
                    isActive
                      ? "bg-primary/10 border-primary/40 text-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)]"
                      : "bg-[#111111]/60 border-white/5 text-white/60 hover:text-white hover:border-white/10"
                  }`}
                >
                  {getCategoryIcon(category)}
                  <span>{category}</span>
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-primary/5 blur-md -z-10 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Projects Cards Grid Frame */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={100 * (index % 3)}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        {/* Empty State Handler */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl bg-[#111111]/20">
            <p className="text-white/40 text-sm">No items found under this criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;