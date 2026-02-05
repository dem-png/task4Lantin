import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen bg-slate-950 flex items-center justify-center px-4 overflow-hidden">
      
      {/* Mouse glow layer - Lowered z-index slightly to stay behind text if needed */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(59, 130, 246, 0.15),
            transparent 80%
          )`,
        }}
      />

      {/* Ambient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content Container - Increased Z-index to be above the glow */}
      <div className="relative z-20 w-full max-w-xl">
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/10">
          <div className="bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/40 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5">
            
            {/* IDE header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs sm:text-sm text-gray-300">Hello To You!</span>
            </div>

            {/* IDE Body - Added some height and text so you can see it */}
            <div className="p-6 h-[200px] lg:h-[300px] flex items-center justify-center">
              <code className="flex items-center justify-centertext-blue-400 text-lg">console.log("Welcome! This is my personal website. Please enjoy as you explore it!");</code>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}