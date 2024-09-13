import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminComponent = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/complaints"
        ); // Adjust the URL based on your backend setup
        console.log(response);

        setComplaints(response.data);

        setLoading(false); // Data loaded
      } catch (error) {
        console.error("Error fetching complaints:", error);
        setError("Error fetching complaints.");
        setLoading(false); // Loading complete, but with error
      }
    };

    fetchComplaints();
  }, []);

  // If loading, show a loading message
  if (loading) {
    return <p>Loading complaints...</p>;
  }

  // If there's an error, show an error message
  if (error) {
    return <p>{error}</p>;
  }

  // If no complaints found, show a message
  if (complaints.length === 0) {
    return <p>No complaints found.</p>;
  }

  // Display the complaints list
  return (
    <div className="bg-blue-400 h-screen ">
      <div>
        <h1 className="text-5xl text-center p-4 font-bold text-blue-900">
          Complaints
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {complaints.map((complaint) => (
          <div
            key={complaint._id}
            className="bg-white m-4 p-4 rounded-lg shadow-lg w-96"
          >
            <strong className="text-blue-500">Reference ID:</strong>{" "}
            <span className="text-red-600">{complaint.referenceId}</span> <br />
            <strong className="text-blue-500">PNR:</strong> {complaint.pnr}{" "}
            <br />
            <strong className="text-blue-500">Type:</strong> {complaint.type}{" "}
            <br />
            <strong className="text-blue-500">Subtype:</strong>{" "}
            {complaint.subtype} <br />
            <strong className="text-blue-500">Description:</strong>{" "}
            {complaint.description} <br />
            <strong className="text-blue-500">Status:</strong>{" "}
            {complaint.status || "Pending"} <br />
            <strong className="text-blue-500">Incident Date:</strong>{" "}
            {new Date(complaint.incidentDate).toLocaleDateString()} <br />
            <strong className="text-blue-500">File:</strong>{" "}
            {complaint.file ? (
              <a
                href={complaint.file}
                target="_blank"
                rel="noopener noreferrer"
              >
                View File
              </a>
            ) : (
              "No file attached"
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminComponent;
