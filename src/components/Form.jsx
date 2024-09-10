import React, { useState } from "react";

const Form = () => {
  const category = [
    "Medical Assistance",
    "Security",
    "Cleanliness",
    "Food",
    "Others",
  ];

  const [visible, setVisible] = useState(false);

  return (
    <div
      id="form"
      className="flex justify-center items-center min-h-screen0 p-4"
    >
      <div
        id="form-content"
        className="bg-blue-400 rounded-lg w-full max-w-4xl p-6 sm:p-10"
      >
        <h1 className="text-blue-800 text-3xl sm:text-4xl font-bold text-center mb-6">
          Complaint Details
        </h1>
        <form
          action=""
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
                className="rounded-md px-4 py-2 border-none outline-blue-500"
              />
              <button
                className="bg-blue-500 hover:bg-blue-800 hover:text-white px-6 py-2 mt-2 rounded-md ml-2"
                onClick={(e) => {
                  e.preventDefault();
                  setVisible(true);
                }}
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
                    className="rounded-md px-4 py-2 border-none outline-blue-500"
                  />
                  <button
                    className="bg-blue-500 hover:bg-blue-800 hover:text-white px-6 py-2 mt-2 rounded-md ml-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setVisible(false);
                    }}
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
                className="rounded-md px-4 py-2 border-none outline-blue-500"
              />
            </div>

            <div id="category-container">
              <div id="category" className="">
                <label htmlFor="type" className="text-lg flex">
                  Type <span className="text-red-700">*</span>
                </label>
                <select
                  id="type"
                  className="rounded-md px-4 py-2 border-none outline-blue-500"
                >
                  {category.map((item) => (
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
                  className="rounded-md px-4 py-2 border-none outline-blue-500"
                >
                  {category.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div id="incident" className="">
              <label htmlFor="incident-date" className="text-lg flex">
                Incident Date <span className="text-red-700">*</span>
              </label>
              <input
                type="datetime-local"
                id="incident-date"
                className="px-4 py-2 rounded-md w-full"
              />
              <label htmlFor="file-upload" className="text-lg flex mt-4">
                Upload File
              </label>
              <div className="bg-white rounded-md">
                <input
                  type="file"
                  id="file-upload"
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
                className="rounded-md px-4 py-2 resize-none w-full"
              ></textarea>
            </div>

            <div id="submit" className="flex space-x-4">
              <button
                className="bg-blue-500 hover:bg-blue-800 hover:text-white px-6 py-2 rounded-md"
                onClick={(e) => e.preventDefault()}
              >
                Submit
              </button>
              <button
                type="reset"
                className="bg-blue-500 hover:bg-red-800 hover:text-white px-6 py-2 rounded-md"
                onClick={(e) => e.preventDefault()}
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
