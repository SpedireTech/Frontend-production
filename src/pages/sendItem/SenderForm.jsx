import React, { useState, useRef, useEffect, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch } from "react-icons/fa";
import AddressInput from "./AddressInput";
import axios from "axios";
import { format, parse } from "date-fns";
import Spinner from "../sendItem/reusables/Spinner"; 
import townsInLagos from "../sendItem/reusables/towns"; 

const CustomTimeInput = forwardRef(({ value, onClick, onChange }, ref) => (
  <input
    value={value}
    onClick={onClick}
    onChange={onChange}
    ref={ref}
    placeholder="HH:MM"
    className="input-box mt-1 block w-full md:w-[270px] h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
    required
  />
));

const SenderForm = ({
  formData,
  handleChange,
  nextStep,
  handleDateChange,
  handleTimeChange,
}) => {
  const [senderAutoDetectLocation, setSenderAutoDetectLocation] = useState(
    formData.senderAddress || ""
  );
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isFetchingSavedAddresses, setIsFetchingSavedAddresses] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const fetchSavedAddresses = async () => {
    setIsFetchingSavedAddresses(true);
    try {
      const token = JSON.parse(localStorage.getItem("token")).value;
      const response = await axios.get(
        "https://spedire-app-backend-service.onrender.com/api/v1/address/sender",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSavedAddresses(response.data.data || []);
    } catch (error) {
      console.error("Error fetching saved addresses:", error);
    } finally {
      setIsFetchingSavedAddresses(false);
    }
  };

  const handleAddressSelect = async (address) => {
    setSenderAutoDetectLocation(address);
    handleChange({ target: { name: "senderAddress", value: address } });
    setShowDropdown(false);
  };

  const handleSelectLocation = (location) => {
    handleAddressSelect(location);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    nextStep();
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      inputRef.current &&
      !inputRef.current.contains(event.target)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (address) => {
    setSenderAutoDetectLocation(address);
    if (address) {
      setShowDropdown(true);
      setPredictions([]);
      fetchPredictions(address);
    } else {
      setPredictions([]);
      fetchSavedAddresses();
    }
  };

  const fetchPredictions = (value) => {
    const autocompleteService = new window.google.maps.places.AutocompleteService();
    autocompleteService.getPlacePredictions(
      {
        input: value,
        componentRestrictions: { country: 'NG' },
      },
      (predictions, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const filteredPredictions = predictions.filter((prediction) =>
            prediction.description.includes('Lagos')
          );
          setPredictions(filteredPredictions);
        } else {
          setPredictions([]);
        }
      }
    );
  };

  const handlePredictionClick = (prediction) => {
    handleAddressSelect(prediction.description);
  };

  const handleAddressClick = () => {
    fetchSavedAddresses();
    setShowDropdown(true);
  };

  return (
    <div className="p-10 bg-white rounded-md" style={{ border: "1px solid #ccc" }}>
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
            ref={inputRef}
            type="text"
            name="senderAddress"
            value={senderAutoDetectLocation}
            onClick={handleAddressClick}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Select or input address"
            className="input-box pl-10 mt-1 block w-full h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
          />
          {showDropdown && (
            <div ref={dropdownRef} style={styles.dropdownContainer}>
              {predictions.length === 0 && (
                <div>
                  <p className="text-sm text-gray-500 px-4 py-2">
                    {savedAddresses.length === 0 ? 'You have no saved address yet, add new ones' : 'Your saved addresse(s)'}
                  </p>
                  <ul style={styles.dropdown}>
                    {savedAddresses.map((address, index) => (
                      <li
                        key={index}
                        onClick={() => handleSelectLocation(address)}
                        style={styles.dropdownItem}
                      >
                        {address}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {predictions.length > 0 && (
                <ul style={styles.dropdown}>
                  {predictions.map((prediction) => (
                    <li
                      key={prediction.place_id}
                      className="p-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => handlePredictionClick(prediction)}
                      style={styles.dropdownItem}
                    >
                      {prediction.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {isFetchingSavedAddresses && <Spinner />}
        </div>
        <div className="mb-4">
          <label className="block text-base font-semibold text-[#4B4B4B]">
            Town in Lagos
          </label>
          <select
            name="senderTown"
            value={formData.senderTown}
            onChange={handleChange}
            className="input-box mt-1 block w-full h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            required
          >
            <option value="" disabled>Select town</option>
            {townsInLagos.map((town, index) => (
              <option key={index} value={town}>
                {town}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4 flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-3">
          <div className="w-full mb-4 sm:mb-0">
            <label className="block text-base font-semibold text-[#4B4B4B]">
              Due Date
            </label>
            <DatePicker
              selected={formData.dueDate}
              onChange={(date) => handleDateChange(date, "dueDate")}
              placeholderText="MM/dd/yyyy"
              className="input-box mt-1 block w-full md:w-[280px] h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
              required
            />
          </div>
          <div className="w-full relative">
            <label className="block text-base  font-semibold text-[#4B4B4B]">
              Due Time
            </label>
            <DatePicker
              selected={
                formData.dueTime
                  ? parse(formData.dueTime, "hh:mm a", new Date())
                  : null
              }
              onChange={(time) =>
                handleTimeChange(format(time, "hh:mm a"), "dueTime")
              }
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={1}
              timeCaption="Time"
              dateFormat="h:mm aa"
              className="input-box mt-1 block w-full md:w-[300px] h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
              customInput={<CustomTimeInput />}
              required
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
            required
          />
        </div>
        <div className="flex items-center mb-8">
          <input
            type="checkbox"
            name="saveAddress"
            id="saveAddress"
            className="input-box h-4 w-4 text-blue-600 focus:outline-none focus:ring-1 focus:ring-[#ccc] border-gray-300 rounded"
            onChange={(event) =>
              handleChange({
                target: { name: "saveSenderAddress", value: event.target.checked },
              })
            }
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

const styles = {
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  dropdownContainer: {
    position: "absolute",
    top: "100%",
    left: "0",
    width: "100%",
    backgroundColor: "#fff",
    zIndex: "1000",
    maxHeight: "200px",
    overflowY: "auto",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  dropdown: {
    listStyleType: "none",
    margin: "0",
    padding: "0",
  },
  dropdownItem: {
    padding: "10px",
    cursor: "pointer",
  },
};

export default SenderForm;
