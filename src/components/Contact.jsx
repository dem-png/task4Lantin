import { Github, Linkedin, Facebook, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  const myEmail = "lantinroshandrei.hs@gmail.com";
  
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=Collaboration Inquiry&body=Hi Rosh,`;

  const socials = [
    { name: "GitHub", icon: <Github size={20} />, link: "https://github.com/dem-png", color: "hover:text-white" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/rosh-andrei-lantin-994a16383/", color: "hover:text-blue-400" },
    { name: "Facebook", icon: <Facebook size={20} />, link: "https://web.facebook.com/roshirunning21", color: "hover:text-blue-600" },
  ];

  return (
    <section id="contacts" className="py-20 bg-slate-950 text-white px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-blue-400 font-mono mb-4 italic">What's Next?</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h3>
        <p className="text-gray-400 mb-10 text-lg">
          I'm currently looking for new opportunities! Click the button below to send me a direct message via Gmail.
        </p>
        
        <a 
          href={gmailLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-all active:scale-95 shadow-lg shadow-blue-500/10"
        >
          <Mail size={20} />
          Send via Gmail
        </a>

        <div className="mt-12">
          <p className="text-gray-500 font-mono text-sm mb-6 uppercase tracking-widest">Connect with me</p>
          <div className="flex justify-center gap-8">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-32 text-gray-600 text-xs font-mono border-t border-white/5 pt-8">
          Designed & Built by <span className="text-blue-400/80">Rosh Andrei Lantin</span>
        </div>
      </div>
    </section>
  );
}