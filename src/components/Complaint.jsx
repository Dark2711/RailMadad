import React from "react";

const Complaint = () => {
  return (
    <div className="flex bg-white w-fit rounded-xl">
      <ul className="m-4 text-2xl">
        {complaints.map((complaint) => (
          <li key={complaint._id}>
            <strong>Reference ID:</strong> {complaint.referenceId} <br />
            <strong>PNR:</strong> {complaint.pnr} <br />
            <strong>Type:</strong> {complaint.type} <br />
            <strong>Subtype:</strong> {complaint.subtype} <br />
            <strong>Description:</strong> {complaint.description} <br />
            <strong>Status:</strong> {complaint.status || "Pending"} <br />
            <strong>Incident Date:</strong>{" "}
            {new Date(complaint.incidentDate).toLocaleDateString()} <br />
            <strong>File:</strong>{" "}
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Complaint;
