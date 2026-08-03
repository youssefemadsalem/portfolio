import React, { useEffect, useState } from "react";

const Preloader = ({ onLoaded }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Disable scrolling while loader is active
    document.body.style.overflow = 'hidden';
    
    // Hold the loader for a creative dramatic effect
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      // Wait for the fade out transition to finish before unmounting
      setTimeout(() => {
        document.body.style.overflow = '';
        onLoaded();
      }, 800); 
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [onLoaded]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isFadingOut ? "opacity-0 -translate-y-8 pointer-events-none" : "opacity-100"
      }`}
    >
       {/* Glowing Ambient Background Behind Logo */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center">
         <div className="w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-primary/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '3s' }}></div>
       </div>

       {/* Logo Animation */}
       <div className="relative w-28 h-28 md:w-36 md:h-36 mb-10 drop-shadow-[0_0_25px_rgba(141,255,105,0.4)]">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full relative z-10">
            {/* Dark Background Base */}
            <rect width="512" height="512" rx="128" fill="#080808" />
            
            {/* Subtle Border */}
            <rect width="508" height="508" x="2" y="2" rx="126" fill="none" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="4" />
            
            {/* Isometric 'Y' Box */}
            <g stroke="#080808" strokeWidth="28" strokeLinejoin="round">
              <path d="M 256 80 L 412 170 L 256 260 L 100 170 Z" fill="#8dff69" className="animate-pulse" style={{ animationDuration: '1.5s', animationDelay: '0s' }} />
              <path d="M 256 260 L 412 170 L 412 350 L 256 440 Z" fill="#ffffff" className="animate-pulse" style={{ animationDuration: '1.5s', animationDelay: '0.2s' }} />
              <path d="M 256 260 L 256 440 L 100 350 L 100 170 Z" fill="#222222" className="animate-pulse" style={{ animationDuration: '1.5s', animationDelay: '0.4s' }} />
            </g>
          </svg>
       </div>

       {/* Text & Loading Bar */}
       <div className="flex flex-col items-center gap-4 relative z-10">
         <h1 className="text-white text-xl md:text-2xl font-light tracking-[0.3em] uppercase ml-2">
           Youssef <span className="text-primary font-semibold">Emad</span>
         </h1>
         
         <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative mt-2">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-right"></div>
         </div>
       </div>

    </div>
  );
};

export default Preloader;
