const Navbar = () => {
    return (
      <nav className="bg-[#005f7a] text-white py-3 px-6 flex justify-between items-center shadow-md fixed top-0 w-full z-50">
        <div className="text-xl font-bold">servicenow</div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-sm">My Tasks <span className="text-red-500">●</span></a>
          <a href="#" className="text-sm">My Requests</a>
          <a href="#" className="text-sm">More ▾</a>
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
        </div>
      </nav>
    );
  };
  export default Navbar;
  