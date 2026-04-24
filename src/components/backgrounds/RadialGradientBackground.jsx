import React from "react";

const RadialGradientBackground = ({ variant = "hero", gradients = [] }) => {
  const variants = {
    hero: [
      {
        position: "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
        size: "w-[1480px] h-[1480px]",
        colors: [
          { color: "rgba(141, 255, 105, 0.25)", stop: "40%" },
          { color: "rgba(141, 255, 105, 0.5)", stop: "50%" },
          { color: "rgba(141, 255, 105, 0.25)", stop: "60%" },
        ],
        blur: "80px",
        opacity: 0.5,
      },
      {
        position: "bottom-0 right-0 translate-x-1/4 translate-y-1/4",
        size: "w-[1480px] h-[1480px]",
        colors: [
          { color: "rgba(141, 255, 105, 0.25)", stop: "40%" },
          { color: "rgba(141, 255, 105, 0.5)", stop: "50%" },
        ],
        blur: "100px",
        opacity: 0.5,
      },
    ],
    about: [
      {
        position: "bottom-0 left-[75%]",
        size: "w-[700px] h-[700px]",
        colors: [{ color: "rgba(141, 255, 105, 0.5)", stop: "50%" }],
        blur: "60px",
        opacity: 0.5,
      },
    ],
  };

  const activeGradients =
    variant === "custom" ? gradients : variants[variant] || variants.hero;

const generateGradient = (colors) => {
  const colorStops = colors
    .map(({ color, stop }) => `${color} ${stop}`) 
    .join(", ");
    
  return `radial-gradient(circle at center, transparent 0%, ${colorStops}, transparent 100%)`;
};

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {activeGradients.map((gradient, index) => (
        <div
          key={index}
          className={`absolute rounded-full ${gradient.position} ${gradient.size}`}
          style={{
            background: generateGradient(gradient.colors),
            filter: `blur(${gradient.blur})`,
            opacity: gradient.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default RadialGradientBackground;
