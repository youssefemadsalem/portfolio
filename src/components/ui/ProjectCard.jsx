import React from "react";
import { FiExternalLink, FiGithub, FiLock } from "react-icons/fi";
import { LuTrendingUp } from "react-icons/lu";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative group bg-[#111111]/40 border border-white/5 rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 hover:border-primary/30 hover:bg-[#111111]/70">
      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-radial-to-br from-primary/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Project Image Container */}
        <div className="relative aspect-16/10 rounded-2xl overflow-hidden mb-6 bg-black border border-white/5 group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
          />
          {/* Category Tag Overlay */}
          <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs text-white/90">
            {project.category}
          </div>
          
          {/* Action Links or Private/Dev Status Badges */}
          <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
            {project.isPrivate || project.inDevelopment ? (
              <div className="flex gap-1.5 items-center">
                {project.isPrivate && (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-500/10 text-red-400 border border-red-500/20 backdrop-blur-md text-[11px] font-medium rounded-xl shadow-lg">
                    <FiLock className="w-3 h-3" />
                    Private
                  </span>
                )}
                {project.inDevelopment && (
                  <span className="px-3 py-1.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 backdrop-blur-md text-[11px] font-medium rounded-xl shadow-lg">
                    In Development
                  </span>
                )}
              </div>
            ) : (
              <>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-black/60 backdrop-blur-md border border-white/10 hover:border-white/30 text-white rounded-xl transition-all duration-200"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-black/60 backdrop-blur-md border border-white/10 hover:border-white/30 text-white rounded-xl transition-all duration-200"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                )}
              </>
            )}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-medium text-white mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-white/60 line-clamp-2 leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-xs text-primary font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metric Label */}
        {project.metrics && (
          <div className="flex items-center gap-2 border-t border-white/5 pt-4 text-xs font-medium text-primary font-mono tracking-wide">
            <LuTrendingUp className="w-3.5 h-3.5 animate-pulse" />
            <span>{project.metrics.toUpperCase()}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;