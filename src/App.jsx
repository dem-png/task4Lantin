import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"

function App() {
  return <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
  </div>
    
}

export default App
