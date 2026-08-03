import React from "react";
import { BookOpen, GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const educationData = [
  {
    id: 1,
    title: "Web & UI Track Scholarship",
    institution: "Information Technology Institute (ITI)",
    date: "10/2025 – In Progress",
    location: "Ismailia, EG",
    description: "Promoted to Track Leader due to exceptional performance and leadership skills.",
    highlight: true,
  },
  {
    id: 2,
    title: "Front-End Development Diploma",
    institution: "Route Academy",
    date: "09/2024 – 02/2025",
    location: "Cairo, EG",
    description: "Intensive training in modern front-end technologies and web development best practices.",
    highlight: false,
  },
  {
    id: 3,
    title: "B.Sc. Computer Science",
    institution: "Modern Academy",
    date: "09/2020 – 06/2024",
    location: "Cairo, EG",
    description: "Graduated with Honors. GPA 3.36 – Very Good (B+).",
    highlight: false,
  }
];

const Education = () => {
  return (
    <section id="education" className="relative py-24 bg-black overflow-hidden">
      <RadialGradientBackground variant="education" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn delay={100}>
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-full mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]">
              <BookOpen className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-primary font-medium tracking-wide uppercase">
                Academic Journey
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-light text-white mb-6 tracking-tight">
              My <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full"></div>
          </div>
        </FadeIn>

        {/* Creative Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <FadeIn key={edu.id} delay={index * 150}>
                  <div className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 group ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Center Node (Timeline Dot) */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 mt-8 md:mt-0 w-4 h-4 rounded-full bg-black border-2 border-primary z-20 group-hover:scale-150 group-hover:bg-primary transition-all duration-500 shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)] group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)]"></div>

                    {/* Content Card */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                      <div className="relative p-[1px] rounded-3xl overflow-hidden group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] transition-all duration-500">
                        {/* Animated Gradient Border using absolute positioning */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-primary/10 to-white/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 animate-pulse transition-opacity duration-700"></div>
                        
                        <div className="relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col justify-center overflow-hidden z-10">
                          
                          {/* Inner Decorative Glow */}
                          <div className={`absolute top-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] pointer-events-none transition-all duration-500 ${isEven ? '-left-10' : '-right-10'} group-hover:bg-primary/40`}></div>

                          {/* Card Header */}
                          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/20 shadow-inner">
                              {edu.highlight ? <Award className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />}
                            </div>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-white/50 border border-white/10 backdrop-blur-md flex items-center gap-1.5 self-start">
                              <Calendar className="w-3 h-3" />
                              {edu.date}
                            </span>
                          </div>

                          {/* Typography */}
                          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                            {edu.title}
                          </h3>
                          <p className="text-base md:text-lg text-white/70 font-medium mb-4 flex items-center gap-2">
                            {edu.institution}
                          </p>

                          {/* Footer Details */}
                          <div className="mt-auto pt-4 border-t border-white/5">
                            <div className="flex items-center gap-2 text-sm text-white/40 mb-3">
                              <MapPin className="w-4 h-4 text-primary/70" />
                              {edu.location}
                            </div>
                            {edu.description && (
                              <p className="text-sm text-white/60 leading-relaxed font-light">
                                {edu.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
