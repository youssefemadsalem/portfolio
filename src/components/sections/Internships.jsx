import React from "react";
import { Briefcase, MapPin, Calendar, CheckCircle, ChevronRight } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const internshipsData = [
  {
    id: 1,
    title: "Front-End Developer Intern",
    company: "CIB Bank",
    date: "05/2023 – 08/2023",
    location: "Cairo, EG",
    points: [
      "Built responsive web interfaces using HTML5, CSS3, and JavaScript integrated into enterprise banking workflows.",
      "Developed and maintained reusable React components, improving UI consistency across the banking platform.",
      "Applied Bootstrap 5 to deliver mobile-first, cross-browser compatible layouts."
    ]
  },
  {
    id: 2,
    title: "AI / ML Intern",
    company: "Initiative of 10K AI Developers",
    date: "08/2023 – 09/2023",
    location: "Cairo, EG",
    points: [
      "Built and trained supervised ML classification models using Python and scikit-learn.",
      "Applied NLP techniques: text classification, sentiment analysis, and named-entity recognition.",
      "Developed computer vision pipelines with OpenCV and TensorFlow/Keras; visualised results in Jupyter Notebook."
    ]
  }
];

const Internships = () => {
  return (
    <section id="internships" className="relative py-24 bg-black overflow-hidden">
      <RadialGradientBackground variant="internships" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn delay={100}>
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-full mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]">
              <Briefcase className="w-4 h-4 text-primary animate-bounce" style={{ animationDuration: '3s' }} />
              <span className="text-sm text-primary font-medium tracking-wide uppercase">
                Professional Experience
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-light text-white mb-6 tracking-tight">
              My <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Internships</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full"></div>
          </div>
        </FadeIn>

        {/* Creative Timeline Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Vertical Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/10 to-transparent transform lg:-translate-x-1/2"></div>

          <div className="space-y-16 lg:space-y-24">
            {internshipsData.map((internship, index) => {
              const isEven = index % 2 === 0;
              return (
                <FadeIn key={internship.id} delay={index * 150}>
                  <div className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 group ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Center Node (Timeline Dot) */}
                    <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 mt-10 lg:mt-0 w-5 h-5 rounded-full bg-black border-2 border-primary z-20 group-hover:scale-125 group-hover:bg-primary transition-all duration-500 shadow-[0_0_15px_rgba(var(--primary-rgb),0.6)] group-hover:shadow-[0_0_25px_rgba(var(--primary-rgb),1)] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full lg:w-1/2 pl-12 lg:pl-0 ${isEven ? 'lg:pl-16' : 'lg:pr-16'}`}>
                      <div className="relative p-[1px] rounded-3xl overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                        {/* Animated Gradient Border using absolute positioning */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-primary/20 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative h-full bg-gradient-to-b from-[#111]/90 to-black/90 backdrop-blur-xl p-6 lg:p-10 rounded-3xl border border-white/10 flex flex-col overflow-hidden z-10 shadow-2xl group-hover:shadow-primary/10 transition-shadow duration-500">
                          
                          {/* Inner Decorative Glow */}
                          <div className={`absolute -top-20 ${isEven ? '-left-20' : '-right-20'} w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/20 transition-all duration-700`}></div>

                          {/* Header / Date */}
                          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300 shadow-inner shrink-0">
                                <Briefcase className="w-5 h-5 lg:w-6 lg:h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                              </div>
                              <div>
                                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                                  {internship.title}
                                </h3>
                                <p className="text-base lg:text-lg text-white/60 font-medium">
                                  {internship.company}
                                </p>
                              </div>
                            </div>
                            
                            <span className="px-4 py-2 bg-black/50 rounded-full text-xs font-semibold text-primary/80 border border-primary/20 backdrop-blur-md flex items-center gap-2 self-start">
                              <Calendar className="w-3.5 h-3.5 shrink-0" />
                              {internship.date}
                            </span>
                          </div>

                          {/* Details List */}
                          <ul className="space-y-4 mb-8">
                            {internship.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-3 group/item">
                                <ChevronRight className="w-5 h-5 text-primary/50 flex-shrink-0 mt-0.5 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all duration-300" />
                                <span className="text-white/70 text-sm md:text-base leading-relaxed group-hover/item:text-white/90 transition-colors">
                                  {point}
                                </span>
                              </li>
                            ))}
                          </ul>

                          {/* Footer Location */}
                          <div className="mt-auto pt-6 border-t border-white/10 flex items-center text-sm text-white/40">
                            <MapPin className="w-4 h-4 mr-2 text-primary/70 shrink-0" />
                            {internship.location}
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

export default Internships;
