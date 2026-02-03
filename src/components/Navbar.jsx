export default function Navbar() {
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
                    <span className="text-white">Website</span>
                    </span>
                </div>

                {/*Nav Links*/}
                <div className="flex items-center space-x-6 lg:space-x-8">
                    <a href="#home"
                    className="text-gray-300 hover:text-white text-sm lg:text-base">
                        Home
                    </a>
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

                <button>
                    
                </button>
            </div>
        </div>
    </nav>
    
}