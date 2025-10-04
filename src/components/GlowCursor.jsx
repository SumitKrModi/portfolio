import { useEffect, useRef } from "react";

const GlowCursor = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const moveGlow = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed w-40 h-40 rounded-full pointer-events-none 
                 bg-blue-300/30 blur-3xl 
                 border border-blue-400/50
                 transform -translate-x-1/2 -translate-y-1/2
                 z-50 transition-all duration-1"
    ></div>
  );
};

export default GlowCursor;
