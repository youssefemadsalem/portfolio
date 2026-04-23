import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <div className=" bg-black">
      <Navbar />
      <main>
        <Hero></Hero>
      </main>
    </div>
  );
}

export default App;
