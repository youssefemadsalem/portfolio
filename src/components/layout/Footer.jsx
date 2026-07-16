import React from "react";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiGlobe } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";
import { PERSONAL_INFO } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];


  return (
    <footer id="footer" className="relative bg-black border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Subtle background gradient to match the design style */}
      <RadialGradientBackground variant="footer" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Left Column: Branding & Contact Info Capsules */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-medium text-primary mb-4 tracking-tight">
                {PERSONAL_INFO?.name || "Youssef"}
              </h2>
              <p className="text-sm text-white/50 max-w-sm leading-relaxed">
                Crafting seamless digital experiences with modern web technologies.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full max-w-md">
              {/* Email Capsule */}
              <div className="flex items-center gap-3 bg-[#111111]/40 border border-white/5 rounded-2xl px-5 py-4 hover:border-primary/20 transition-colors duration-300">
                <div className="p-2.5 bg-primary/5 border border-primary/10 rounded-xl text-primary">
                  <FiMail className="w-4 h-4" />
                </div>
                <span className="text-sm text-white/70 font-medium tracking-wide truncate">
                  {PERSONAL_INFO?.email || "alex@timetoprogram.com"}
                </span>
              </div>

              {/* Location Capsule */}
              <div className="flex items-center gap-3 bg-[#111111]/40 border border-white/5 rounded-2xl px-5 py-4 hover:border-primary/20 transition-colors duration-300">
                <div className="p-2.5 bg-primary/5 border border-primary/10 rounded-xl text-primary">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <span className="text-sm text-white/70 font-medium tracking-wide">
                  {PERSONAL_INFO?.location || "Cairo, Egypt"}
                </span>
              </div>
            </div>
          </div>

          {/* Middle Column: Quick Navigation Links */}
          <div className="md:col-span-3 md:pl-8">
            <h3 className="text-white text-base font-semibold mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3.5">
              {quickLinks.map((link, index) => (
                <li key={index} className="flex items-center gap-2.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors duration-300" />
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-medium text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Social Profiles */}
<div className="md:col-span-4 flex flex-col gap-6">
            <div>
              <h3 className="text-white text-base font-semibold mb-3 tracking-wide">
                Current Focus
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                Advancing enterprise full-stack engineering at ITI  while actively seeking junior developer opportunities.
              </p>
            </div>

            {/* Active Status Badge */}
            <div className="flex items-center gap-2.5 self-start px-4 py-2 bg-primary/10 border border-primary/20 rounded-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8DFF69] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8DFF69]"></span>
              </span>
              <span className="text-xs text-white/80 font-medium tracking-wide">
                Available for Roles
              </span>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-white/40 tracking-wider font-mono">
          <div>
            © {currentYear} {PERSONAL_INFO?.name || "Youssef"}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with</span>
            <FaHeart className="w-3 h-3 text-primary animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;