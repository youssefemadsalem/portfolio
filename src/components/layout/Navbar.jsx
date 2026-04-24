import React, { useState, useEffect } from "react";
import { Code, Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants";
import { scrollToSection, useScrollSpy } from "../../hooks/useScrollSpy";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.href));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg " : "bg-transparent"
      }`}
    >
      <div className="max-w-330 mx-auto px-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Code className="w-6 h-6 text-primary" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-bold bg-linear-to-r from-primary via-primary/50 to-primary/30 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              {PERSONAL_INFO.name.split(" ")[0]}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors font-medium ${
                  activeSection === link.href
                    ? "text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions Area */}
          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <button
              onClick={() => handleNavClick("contact")}
              className="hidden md:flex px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] hover:bg-white/90 transition-all"
            >
              Hire Me
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? " opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/95 backdrop-blur-lg border border-white/10 px-5 py-6 space-y-4 rounded-2xl">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                  activeSection === link.href
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full mt-4 px-7 py-3.5 bg-white text-[#212121] font-bold rounded-[17px]"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
