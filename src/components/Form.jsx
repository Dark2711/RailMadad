import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const categories = {
    "Medical Assistance": ["Medical Assistance"],
    Security: [
      "Eve-teasing/Misbehaviour with lady passengers/Rape",
      "Theft of Passengers Belongings/Snatching",
      "Unauthorized person in Ladies/Disabled Coach/SLR/Reserve Coach",
      "Harassment/Extortion by Security Personnel/Railway personnel",
      "Nuisance by Hawkers/Beggar/Eunuch",
      "Luggage Left Behind/Unclaimed/Suspected Articles",
      "Passenger Missing/Not responding call",
      "Smoking/Drinking Alcohol/Narcotics",
      "Dacoity/Robbery/Murder/Riots",
      "Quarrelling/Hooliganism",
      "Passenger fallen down",
      "Nuisance by passenger",
      "Misbehaviour",
      "Others ",
    ],
    "Divyangjan Facilities": [
      "Divyangjan coach unavailability",
      "Divyangjan toilet /washbasin",
      "Braille signage in coach",
      "Others",
    ],
    "Facilities for Women with Special Needs": ["Baby Food"],
    "Electrical Equipment": [
      "Air Conditioner",
      "Fans",
      "Lights",
      "Charging Points",
      "Others",
    ],
    "Coach - Cleanliness": [
      "Toilet",
      "WashBasin",
      "Cockroach / Rodents",
      "Coach Interior",
      "Coach Exterior",
      "Others",
    ],
    Punctuality: ["NTES APP", "Late Running", "Others"],
    "Water Availability": [
      "Packaged Drinking Water / Rail Neer",
      "Toilet",
      "Washbasin",
      "Others",
    ],
    "Coach - Maintenance": [
      "Window/Seat Broken",
      "Window/Door locking problem",
      "Tap leaking/Tap not working",
      "Broken/Missing Toilet Fittings",
      "Jerks/Abnormal Sound",
      "Others",
    ],
    "Catering and Vending Services": [
      "Overcharging ",
      "Service Quality & Hygiene",
      "Food Quality & Quantity",
      "E-Catering",
      "Food & Water Not Available",
      "Others",
    ],
    "Staff Behaviour": ["Misbehaviour", "Corruption/ Bribery", "Others"],
    "Corruption/ Bribery": ["Ticket Checking Staff", "TTE", "Others"],
    "Bed Rolls": ["Bed Roll not provided", "Dirty Bed Roll", "Others"],
    Others: ["Others"],
  };

  const [visible, setVisible] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [formEnabled, setFormEnabled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [pnr, setPnr] = useState("");
  const [incidentDate, setIncidentDate] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleGetOtp = async (e) => {
    e.preventDefault();
    if (mobile) {
      // Simulate OTP generation (In a real scenario, this would be handled by the backend)
      setVisible(true);
    }
  };

  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    if (otp) {
      // Simulate OTP verification (In a real scenario, this would be handled by the backend)
      setFormEnabled(true);
      setVisible(false); // Hide OTP box after submission
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSubcategories(categories[category] || []);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("mobile", mobile);
    formData.append("otp", otp);
    formData.append("pnr", pnr);
    formData.append("type", selectedCategory);
    formData.append("subtype", e.target["sub-type"].value);
    formData.append("incidentDate", incidentDate);
    formData.append("description", description);
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/complaints/submit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
      // Optionally clear the form or handle success
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div
      id="form"
      className="flex justify-center items-center min-h-screen p-4"
    >
      <div
        id="form-content"
        className="bg-blue-400 rounded-lg w-full max-w-4xl p-6 sm:p-10"
      >
        <h1 className="text-blue-800 text-3xl sm:text-4xl font-bold text-center mb-6">
          Complaint Details
        </h1>
        <form
          onSubmit={handleSubmitForm}
          action=""
          method="POST"
          encType="multipart/form-data" // Add this attribute
          className="flex flex-col sm:flex-row justify-evenly font-medium text-gray-600 font-poppins space-y-6 sm:space-y-0 sm:space-x-6"
        >
          <div id="left" className="flex flex-col space-y-6">
            <div id="mobile">
              <label htmlFor="mobile-num" className="text-lg flex flex-col">
                Mobile No.
              </label>
              <input
                type="text"
                id="mobile-num"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                className="rounded-md px-4 py-2 border-none outline-blue-500"
              />
              <button
                className="bg-blue-500 hover:bg-blue-800 hover:text-white px-6 py-2 mt-2 rounded-md ml-2"
                onClick={handleGetOtp}
              >
                Get OTP
              </button>
              {visible && (
                <div id="otp" className="mt-4">
                  <label htmlFor="otp" className="text-lg flex flex-col">
                    OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="rounded-md px-4 py-2 border-none outline-blue-500"
                  />
                  <button
                    className="bg-blue-500 hover:bg-blue-800 hover:text-white px-6 py-2 mt-2 rounded-md ml-2"
                    onClick={handleSubmitOtp}
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>

            <div id="pnr">
              <label htmlFor="PNR-num" className="text-lg flex">
                PNR No. <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="PNR-num"
                value={pnr}
                onChange={(e) => setPnr(e.target.value)}
                disabled={!formEnabled}
                className="rounded-md px-4 py-2 border-none outline-blue-500"
              />
            </div>

            <div id="category-container">
              <div id="category">
                <label htmlFor="type" className="text-lg flex">
                  Type <span className="text-red-700">*</span>
                </label>
                <select
                  id="type"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  disabled={!formEnabled}
                  className="rounded-md px-4 py-2 border-none outline-blue-500"
                >
                  <option value="">Select a category</option>
                  {Object.keys(categories).map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <label htmlFor="sub-type" className="text-lg flex mt-4">
                  Sub Type <span className="text-red-700">*</span>
                </label>
                <select
                  id="sub-type"
                  disabled={!formEnabled}
                  className="rounded-md px-4 py-2 border-none outline-blue-500"
                >
                  <option value="">Select a subcategory</option>
                  {subcategories.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div id="incident">
              <label htmlFor="incident-date" className="text-lg flex">
                Incident Date <span className="text-red-700">*</span>
              </label>
              <input
                type="datetime-local"
                id="incident-date"
                value={incidentDate}
                onChange={(e) => setIncidentDate(e.target.value)}
                disabled={!formEnabled}
                className="px-4 py-2 rounded-md w-full"
              />
              <label htmlFor="file-upload" className="text-lg flex mt-4">
                Upload File
              </label>
              <div className="bg-white rounded-md">
                <input
                  type="file"
                  id="file-upload"
                  onChange={handleFileChange}
                  disabled={!formEnabled}
                  className="px-4 py-2 w-full"
                />
              </div>
            </div>
          </div>

          <div id="right" className="flex flex-col space-y-6">
            <div id="description">
              <label htmlFor="description" className="text-lg flex">
                Description <span className="text-red-700">*</span>
              </label>
              <textarea
                id="description"
                cols="40"
                rows="10"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={!formEnabled}
                className="rounded-md px-4 py-2 resize-none w-full"
              ></textarea>
            </div>

            <div id="submit" className="flex space-x-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-800 hover:text-white px-6 py-2 rounded-md"
              >
                Submit
              </button>
              <button
                type="reset"
                className="bg-blue-500 hover:bg-red-800 hover:text-white px-6 py-2 rounded-md"
                onClick={() => {
                  setMobile("");
                  setOtp("");
                  setPnr("");
                  setSelectedCategory("");
                  setSubcategories([]);
                  setIncidentDate("");
                  setDescription("");
                  setFile(null);
                  setVisible(false);
                  setFormEnabled(false);
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
