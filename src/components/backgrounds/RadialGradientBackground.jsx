import React, { useEffect, useRef } from "react";

// ----------------------------------------------------------------------
// 1. CONSTANTS & CONFIGURATION
// ----------------------------------------------------------------------
const EDGE_FADE_MASK = "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)";

const GRADIENT_VARIANTS = {
  hero: [
    {
      // Pushed to the extreme top-left corner to cast light downwards diagonally
      position: "top-0 left-0 -translate-x-1/3 -translate-y-1/4",
      size: "w-[1200px] h-[1200px]",
      colors: [
        { color: "rgba(141, 255, 105, 0.40)", stop: "0%" },
        { color: "rgba(141, 255, 105, 0.20)", stop: "40%" },
        { color: "rgba(141, 255, 105, 0.05)", stop: "75%" },
        { color: "rgba(141, 255, 105, 0)", stop: "100%" },
      ],
      blur: "130px",
      opacity: 0.9,
      speed: 0.2, 
    },
    {
      // Pushed to the far right edge, acting as a soft secondary fill light
      position: "top-[20%] right-0 translate-x-1/2",
      size: "w-[1000px] h-[1000px]",
      colors: [
        { color: "rgba(141, 255, 105, 0.30)", stop: "0%" },
        { color: "rgba(141, 255, 105, 0.12)", stop: "45%" },
        { color: "rgba(141, 255, 105, 0)", stop: "100%" },
      ],
      blur: "150px",
      opacity: 0.8,
      speed: -0.1,
    },
  ],
  about: [
    {
      position: "bottom-0 left-[75%] translate-x-1/4 translate-y-1/4",
      size: "w-[900px] h-[900px]",
      colors: [
        { color: "rgba(141, 255, 105, 0.40)", stop: "0%" },
        { color: "rgba(141, 255, 105, 0.20)", stop: "40%" },
        { color: "rgba(141, 255, 105, 0)", stop: "100%" },
      ],
      blur: "120px",
      opacity: 0.9,
      speed: 0.2,
    },
    {
      position: "-top-40 left-1/2 -translate-x-1/2",
      size: "w-[800px] h-[800px]",
      colors: [
        { color: "rgba(141, 255, 105, 0.30)", stop: "0%" },
        { color: "rgba(141, 255, 105, 0.12)", stop: "50%" },
        { color: "rgba(141, 255, 105, 0)", stop: "100%" },
      ],
      blur: "110px",
      opacity: 0.8,
      speed: -0.25,
    },
  ],
  skills: [
    {
      position: "top-1/4 left-0 -translate-x-1/4",
      size: "w-[900px] h-[900px]",
      colors: [
        { color: "rgba(141, 255, 105, 0.35)", stop: "0%" },
        { color: "rgba(141, 255, 105, 0.15)", stop: "40%" },
        { color: "rgba(141, 255, 105, 0)", stop: "100%" },
      ],
      blur: "130px",
      opacity: 0.8,
      speed: 0.2,
    },
    {
      position: "bottom-1/4 right-0 translate-x-1/4",
      size: "w-[800px] h-[800px]",
      colors: [
        { color: "rgba(141, 255, 105, 0.30)", stop: "0%" },
        { color: "rgba(141, 255, 105, 0.12)", stop: "50%" },
        { color: "rgba(141, 255, 105, 0)", stop: "100%" },
      ],
      blur: "140px",
      opacity: 0.7,
      speed: -0.15,
    },
  ],
  education: [
    {
      position: "top-0 right-[10%] translate-x-1/4 -translate-y-1/4",
      size: "w-[800px] h-[800px]",
      colors: [
        { color: "rgba(141, 255, 105, 0.30)", stop: "0%" },
        { color: "rgba(141, 255, 105, 0.12)", stop: "40%" },
        { color: "rgba(141, 255, 105, 0)", stop: "100%" },
      ],
      blur: "140px",
      opacity: 0.8,
      speed: -0.2,
    },
    {
      position: "bottom-0 left-[10%] -translate-x-1/4 translate-y-1/4",
      size: "w-[900px] h-[900px]",
      colors: [
        { color: "rgba(141, 255, 105, 0.35)", stop: "0%" },
        { color: "rgba(141, 255, 105, 0.15)", stop: "50%" },
        { color: "rgba(141, 255, 105, 0)", stop: "100%" },
      ],
      blur: "120px",
      opacity: 0.9,
      speed: 0.25,
    },
  ],
  internships: [
    {
      position: "top-[20%] left-[-10%] -translate-x-1/4",
      size: "w-[1000px] h-[1000px]",
      colors: [
        { color: "rgba(141, 255, 105, 0.25)", stop: "0%" },
        { color: "rgba(141, 255, 105, 0.10)", stop: "40%" },
        { color: "rgba(141, 255, 105, 0)", stop: "100%" },
      ],
      blur: "150px",
      opacity: 0.8,
      speed: 0.15,
    },
    {
      position: "bottom-[10%] right-[-10%] translate-x-1/4",
      size: "w-[900px] h-[900px]",
      colors: [
        { color: "rgba(141, 255, 105, 0.30)", stop: "0%" },
        { color: "rgba(141, 255, 105, 0.12)", stop: "50%" },
        { color: "rgba(141, 255, 105, 0)", stop: "100%" },
      ],
      blur: "130px",
      opacity: 0.85,
      speed: -0.2,
    },
  ],
  footer: [
    {
      // "Horizon Line" effect: A single, massive, ultra-wide light sitting dead center.
      // Pushed 50% down (translate-y-1/2) so only the soft crest peeks up from the absolute bottom.
      position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
      size: "w-[1800px] h-[800px]",
      colors: [
        { color: "rgba(141, 255, 105, 0.25)", stop: "0%" },
        { color: "rgba(141, 255, 105, 0.08)", stop: "35%" },
        { color: "rgba(141, 255, 105, 0)", stop: "100%" },
      ],
      blur: "150px",
      opacity: 1, // Full opacity but the colors inside are subtle
      speed: 0.05, // Moves very little on scroll, feels physically "grounded" to the floor
    },
  ],
};

// ----------------------------------------------------------------------
// 2. HELPER FUNCTIONS
// ----------------------------------------------------------------------
const buildRadialGradient = (colors) => {
  const colorStops = colors.map(({ color, stop }) => `${color} ${stop}`).join(", ");
  return `radial-gradient(ellipse at center, ${colorStops})`; // Changed to ellipse to stretch it naturally
};

// ----------------------------------------------------------------------
// 3. MAIN COMPONENT
// ----------------------------------------------------------------------
const RadialGradientBackground = ({ variant = "hero", gradients = [] }) => {
  const containerRef = useRef(null);
  const glowRefs = useRef([]); 

  const activeGradients = variant === "custom" ? gradients : GRADIENT_VARIANTS[variant] || GRADIENT_VARIANTS.hero;

  useEffect(() => {
    let animationFrameId;

    const updateParallax = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        // Make scroll distance more sensitive by adding an offset 
        const scrollDistance = (window.innerHeight - rect.top);

        glowRefs.current.forEach((node, index) => {
          if (node) {
            const speed = activeGradients[index].speed ?? 0.1;
            // Boosted the speed significantly for clear, noticeable movement
            const yOffset = scrollDistance * speed * 2;
            node.style.transform = `translate3d(0px, ${yOffset}px, 0px)`;
          }
        });
      }
    };

    const handleScroll = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    updateParallax(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [activeGradients]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 select-none mix-blend-screen overflow-hidden"
      style={{
        WebkitMaskImage: EDGE_FADE_MASK,
        maskImage: EDGE_FADE_MASK,
      }}
    >
      {activeGradients.map((gradient, index) => {
        // Alternate float directions for a more organic lava-lamp feel
        const floatClass = index % 2 === 0 ? "animate-float-blob" : "animate-float-blob-reverse";
        
        return (
          <div key={index} className={`absolute ${gradient.position} ${floatClass}`}>
            <div
              ref={(el) => (glowRefs.current[index] = el)}
              className={`${gradient.size} will-change-transform`}
              style={{
                background: buildRadialGradient(gradient.colors),
                filter: `blur(${gradient.blur})`,
                opacity: gradient.opacity,
                transform: "translate3d(0px, 0px, 0px)", 
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RadialGradientBackground;