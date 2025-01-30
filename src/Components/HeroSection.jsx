import "@fortawesome/fontawesome-free/css/all.min.css";

const HeroSection = () => {
    return (
      <header className="bg-gradient-to-r from-blue-200 to-blue-400 text-white text-center py-16 shadow-md">
        <h1 className="text-3xl font-semibold text-grey-100">How can we help?</h1>
        <div className="mt-4 flex justify-center">
          <input 
            type="text" 
            placeholder="How can we help?" 
            className="w-96 px-4 py-2 rounded-l-md text-black bg-white border-none shadow-md outline-none" 
            />
          <button className="bg-gray-200 px-4 py-2 rounded-r-md hover:bg-gray-300 transition">
             <i className="fas fa-search text-green-600"></i>
          </button>
        </div>
      </header>
    );
  };
  export default HeroSection;
  