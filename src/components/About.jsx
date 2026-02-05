export default function About() {
  const skills = ["React", "Tailwind CSS", "JavaScript", "Node.js", "Git", "HTML/CSS", "MySQL", "C++", "PHP"];

  return (
    <section id="about" className="py-20 bg-slate-950 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-blue-400">About</span> Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-gray-400 leading-relaxed">
            {/* Logo Box */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-900 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
               <img src="/profile.png" className="w-full h-full object-cover" alt="Profile" />
            </div>
            <p>
              Hello! I'm a student of BSIT from De La Salle Lipa. I chose BSIT because growing up, I was always fascinated by how technology works and how it can be used to solve real-world problems. I love the idea of building digital experiences that live on the internet.
            </p>
            <p>
              One of my favorite hobbies is taking random pictures of nature and the city.
            </p>
            <div className="pt-4">
              <h3 className="text-white font-medium mb-3">Technologies I work with:</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative group mx-auto space-y-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-900 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
               <img src="/pic1.png" className="w-full h-full object-cover" alt="Nature 1" />
            </div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-900 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
               <img src="/pic2.png" className="w-full h-full object-cover" alt="Nature 2" />
            </div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-900 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
               <img src="/pic3.png" className="w-full h-full object-cover" alt="Nature 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}