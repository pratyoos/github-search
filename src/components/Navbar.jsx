import { FaGithub } from "react-icons/fa";
import "../index.css"


function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FaGithub className="text-3xl text-black" />
          <span className="text-xl font-semibold text-gray-800">GitHub Search</span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
