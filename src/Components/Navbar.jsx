import { useState } from "react";


const Navbar = () => {
  const [isDropdownOpen, SetIsDeopdownOpen] = useState(false);

  const toggleDropdown = () => {
    SetIsDeopdownOpen(!isDropdownOpen);
  }
  return (
    <nav className="bg-blue-900 text-white py-3 px-6 flex justify-between items-center shadow-md fixed top-0 w-full z-50">
      <div className="text-xl font-bold">servicenow</div>
      <div className="flex items-center space-x-6">
        <a href="#" className="text-sm">My Tasks <span className="text-red-500">●</span></a>
        <a href="#" className="text-sm">My Requests</a>
        <div className="relative">
          <button
            className="text-sm"
            onClick={toggleDropdown}
          > More ▾
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200"> Catalogue</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Cart</a>
            </div>
          )}

        </div>

        <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
      </div>
    </nav>
  );
};
export default Navbar;
