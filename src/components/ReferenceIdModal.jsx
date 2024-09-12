import React from "react";

const ReferenceIdModal = ({ isOpen, referenceId, onClose }) => {
  if (!isOpen) return null; // Don't render if modal is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white text-black p-6 rounded-md shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Complaint Submitted</h2>
        <p>Your complaint reference ID is:</p>
        <p className="text-lg font-bold mt-2 mb-6">{referenceId}</p>
        <button
          onClick={onClose}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ReferenceIdModal;
