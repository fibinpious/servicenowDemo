import { useEffect, useState } from "react";

const InfoBox = ({ title, children, extraClass = '' }) => {
  return (
    <div className={`bg-white p-4 shadow rounded ${extraClass}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      {children}
    </div>
  );
};

const MainContent = () => {
  const [showModal, setShowModal] = useState(false);
  const [question, setQuestion] = useState("");
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts"); 
        const data = await response.json(); 

        console.log("data",data);
  
        if (Array.isArray(data)) {
          const slicedData = data.slice(0, 2); 
          setAnnouncements(slicedData); 
        } else {
          setAnnouncements([]);
        }
      } catch (error) {
        console.error("Error fetching announcements:", error);
        setAnnouncements([]); 
      }
    };
  
    fetchAnnouncements();
  }, []);

  const handleSubmit = () => {
    alert(`Question Submitted: ${question}`);
    setShowModal(false);
    setQuestion(""); // Clear input after submitting
  };

  return (
    <main className="max-w-6xl mx-auto my-6 grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
      
        <InfoBox title="Current Status">
          <div className="bg-green-100 text-green-700 p-2 mt-2 rounded">
            No system is reporting an issue
          </div>
          <a href="#" className="text-blue-600 text-sm block mt-2">More information...</a>
        </InfoBox>

        <InfoBox title ="My Approvals">
          <p className="text-gray-600 text-sm">You have no pending approvals</p>
        </InfoBox>

        <InfoBox title="Announcements" >
          {announcements.length > 0 ? (
          <ul className="text-grey-600 text-sm space-y-2">
            {announcements.map(announcement =>(
              <li key={announcement.id} className="border-b pb-2">
                <p>{announcement.title}</p>
              </li>
            ))}
          </ul>) : (
            <p className="text-grey-600 text-sm">No announcement avilable</p>
          )}
        </InfoBox>

        <InfoBox title="Top Rated Articles" extraClass="mt-6">
          <ul className="text-blue-600 text-sm space-y-1">
            <li>Getting Around in Windows ⭐⭐⭐⭐⭐</li>
            <li>How to configure VPNs for Apple Devices ⭐⭐⭐⭐⭐</li>
          </ul>
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

        <InfoBox title="Popular Questions" extraClass="mt-6">
          <p className="text-gray-600 text-sm">No questions have been asked yet</p>
          <button 
            className="mt-2 bg-gray-200 px-4 py-1 text-sm rounded hover:bg-gray-300"
            onClick={() => setShowModal(true)}
          >
            Ask a Question
          </button>
        </InfoBox>

      {/* Pop-up Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-2">Ask a Question</h2>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Type your question here..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            ></textarea>
            <div className="flex justify-end mt-4 space-x-2">
              <button 
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button 
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MainContent;
