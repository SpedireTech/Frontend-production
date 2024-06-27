import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch } from "react-icons/fa";
import flag from "../../assets/NIGIcon.svg";

const SenderForm = ({ formData, handleChange, nextStep, handleDateChange }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    nextStep();
  };

  return (
    <div
      className="p-10 bg-white rounded-md"
      style={{ border: "1px solid #ccc" }}
    >
      
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Sender</h2>
          <p className="text-xm text-[#4B4B4B]">
            Search from your saved addresses or create a new one
          </p>
        </div>
        <div className="relative mb-4">
          <FaSearch
            className="absolute top-4 left-3 text-gray-500 mt-2"
            style={{ color: "#ccc" }}
          />
          <input
            type="text"
            name="searchDetails"
            placeholder="Search saved details"
            className="input-box pl-10 mt-1 block w-full h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-semibold text-[#4B4B4B]">
            Address
          </label>
          <input
            type="text"
            name="senderAddress"
            value={formData.senderAddress}
            onChange={handleChange}
            className="input-box mt-1 block w-full h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
          />
        </div>
        <div className="mb-4 flex space-x-3">
          <div className="w-1/2">
            <label className="block text-base font-semibold text-[#4B4B4B]">
              Due Date
            </label>
            <DatePicker
              selected={formData.dueDate}
              onChange={(date) => handleDateChange(date, "dueDate")}
              className="input-box mt-1 block w-[270px] h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-base font-semibold text-[#4B4B4B]">
              Due Time
            </label>
            <input
              type="time"
              name="dueTime"
              value={formData.dueTime}
              onChange={handleChange}
              className="input-box mt-1 block w-full h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-base font-semibold text-[#4B4B4B]">
            Pick Up Note
          </label>
          <input
            type="text"
            name="pickUpNote"
            value={formData.pickUpNote}
            onChange={handleChange}
            className="input-box mt-1 block w-full h-[96px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
          />
        </div>
        <div className="flex items-center mb-8">
          <input
            type="checkbox"
            name="saveAddress"
            id="saveAddress"
            className="input-box h-4 w-4 text-blue-600 focus:outline-none focus:ring-1 focus:ring-[#ccc] border-gray-300 rounded"
          />
          <label
            htmlFor="saveAddress"
            className="ml-2 block text-sm font-semibold text-[#4B4B4B]"
          >
            Save this address
          </label>
        </div>
        <button
          type="submit"
          className="w-full h-[58px] bg-button text-white rounded-xl"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default SenderForm;
