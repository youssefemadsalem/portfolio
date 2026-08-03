import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Internships from "./components/sections/Internships";
import Project from "./components/sections/Project";
import Footer from "./components/layout/Footer";
import Contact from "./components/sections/Contact";
import Preloader from "./components/ui/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onLoaded={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen bg-black overflow-x-hidden transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
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
    </>
  );
}

export default App;
