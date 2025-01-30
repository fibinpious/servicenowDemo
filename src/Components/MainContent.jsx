const InfoBox = ({ title, children, extraClass = '' }) => {
    return (
      <div className={`bg-white p-4 shadow rounded ${extraClass}`}>
        <h3 className="text-lg font-semibold">{title}</h3>
        {children}
      </div>
    );
  };
   
  const MainContent = () => {
    return (
      <main className="max-w-6xl mx-auto my-6 grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {/* Left Column */}
        <InfoBox title="Current Status">
          <div className="bg-green-100 text-green-700 p-2 mt-2 rounded">
            No system is reporting an issue
          </div>
          <a href="#" className="text-blue-600 text-sm block mt-2">More information...</a>
        </InfoBox>
        
        <InfoBox title="Top Rated Articles" >
          <ul className="text-blue-600 text-sm space-y-1">
            <li>Getting Around in Windows ⭐⭐⭐⭐⭐</li>
            <li>How to configure VPNs for Apple Devices ⭐⭐⭐⭐⭐</li>
          </ul>
        </InfoBox>
   
        {/* Middle Column */}
        <InfoBox title="Popular Questions">
          <p className="text-gray-600 text-sm">No questions have been asked yet</p>
          <button className="mt-2 bg-gray-200 px-4 py-1 text-sm rounded">Ask a Question</button>
        </InfoBox>
   
        <InfoBox title="Announcements" extraClass="mt-6">
          <p className="text-gray-600 text-sm">No information available</p>
        </InfoBox>
   
        {/* Right Column */}
        <InfoBox title="My Approvals" extraClass="mt-6">
          <p className="text-gray-600 text-sm">You have no pending approvals</p>
        </InfoBox>
   
        <InfoBox title="My Open Incidents" extraClass="mt-6">
          <ul className="text-blue-600 text-sm space-y-1">
            <li>Rain is leaking on mass DNS Server</li>
            <li>JavaScript error on hiring page</li>
            <li>Can't launch Windows 7 virtual machine</li>
            <li>Sales forecast spreadsheet is READ ONLY</li>
            <li>Unable to post content on a Wiki page</li>
          </ul>
        </InfoBox>
      </main>
    );
  };
   
  export default MainContent;