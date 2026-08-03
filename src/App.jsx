import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Internships from "./components/sections/Internships";
import Project from "./components/sections/Project";
import Footer from "./components/layout/Footer";
import Contact from "./components/sections/Contact";

function App() {
  return (
    // 'overflow-x-hidden' ensures no horizontal scrollbar 
    // when the large radial gradients bleed out of the side
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Internships />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
