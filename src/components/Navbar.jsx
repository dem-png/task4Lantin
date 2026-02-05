import { useState } from "react"
import { Menu } from "lucide-react"

export default function Navbar() {
    const[mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    return <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                <div className="flex items-center space-x-1 group cursor-pointer">
                 <div>
                    <img src="/logo.png" 
                    alt="PersonalWebsite"
                     className="h-15 w-15" sm:w-8 sm:h-8
                     />
                    </div>
                    <span className="text-lg sm:text-xl md:text-2xl font-medium">
                    <span className="text-blue-300">My</span>
                    <span className="text-white">Portfolio</span>
                    </span>
                </div>

                {/*Nav Links*/}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    <a href="#about"
                    className="text-gray-300 hover:text-white text-sm lg:text-base">
                        About Me
                    </a>
                    <a href="#projects"
                    className="text-gray-300 hover:text-white text-sm lg:text-base">
                        Projects
                    </a>
                    <a href="#contacts"
                    className="text-gray-300 hover:text-white text-sm lg:text-base">
                        Contacts
                    </a>
                </div>

                 <button className="md:hidden p-2 text-gray-300 hover:text-white" 
                 onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
                    <Menu className="h-5 w-5 sm:w-6 sm:h-6"/>
                </button>

                {mobileMenuIsOpen && (
                <div className="fixed left-0 right-0 top-14 sm:top-20 md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                    <a href="#about"
                    onClick={() => setMobileMenuIsOpen(false)}
                    className="block text-gray-300 hover:text-white text-sm lg:text-base">
                        About Me
                    </a>
                    <a href="#projects"
                    onClick={() => setMobileMenuIsOpen(false)}
                    className="block text-gray-300 hover:text-white text-sm lg:text-base">
                        Projects
                    </a>
                    <a href="#contacts"
                    onClick={() => setMobileMenuIsOpen(false)}
                    className="block text-gray-300 hover:text-white text-sm lg:text-base">
                        Contacts
                    </a>  
                    </div>
                    </div>)}
            </div>
        </div>
    </nav>
    
}