import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Project from "./components/sections/Project";
import Footer from "./components/layout/Footer";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
