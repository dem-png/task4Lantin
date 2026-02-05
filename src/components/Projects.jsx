import { useState } from "react";

export default function Projects() {
  const [selectedImg, setSelectedImg] = useState(null);

  const projectList = [
    { 
      title: "Secured Fund Tracking system for Rotary Club", 
      desc: "Tracking system for Rotary Club", 
      tech: ["PHP", "Hostinger", "MySQL", "NameCheap"], 
      image: "/project1.png" 
    },
    { 
      title: "IT System Inventory Management System for Metro Lipa Water District", 
      desc: "Inventory management system.", 
      tech: ["PHP", "MySQL"], 
      image: "/project2.png" 
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {projectList.map((project, index) => (
            <div key={index} className="w-full sm:w-[350px] group p-6 bg-slate-950 border border-white/5 rounded-2xl hover:border-blue-500/50 transition-all cursor-pointer">
              
              <div 
                className="h-48 bg-slate-800 rounded-xl mb-4 overflow-hidden border border-white/5 relative group/img"
                onClick={() => setSelectedImg(project.image)}
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                   <span className="text-white text-xs font-mono bg-slate-900/80 px-3 py-1 rounded-full">View Full Image</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((skill, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-[10px] uppercase tracking-wider font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded border border-blue-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <button className="absolute -top-10 right-0 text-white text-2xl hover:text-blue-400">✕</button>
            <img 
              src={selectedImg} 
              alt="Full view" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>
      )}
    </section>
  );
}