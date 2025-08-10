import { FaGithub } from "react-icons/fa";

function Navbar(){
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <FaGithub
            className="text-3xl text-black"
            aria-label="GitHub Logo"
          />
          <span className="text-xl font-semibold text-gray-800">
            GitHub Search
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;