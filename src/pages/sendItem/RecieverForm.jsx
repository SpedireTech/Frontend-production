import React, { useState, useRef, useEffect } from "react";
import UploadImage from "../../assets/UploadImageIcon.svg";
import flag from "../../assets/NIGIcon.svg";
import { FaSearch } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa"; 
import axios from "axios";
import AddressInput from "./AddressInput";
import Spinner from "../sendItem/reusables/Spinner"; 
import townsInLagos from "../sendItem/reusables/towns"; 

const ReceiverForm = ({
  formData,
  handleChange,
  prevStep,
  handleSubmit,
  handleImageChange,
  isLoading, 
}) => {
  const [receiverAutoDetectLocation, setReceiverAutoDetectLocation] = useState(
    formData.receiverAddress || ""
  );
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [isFetchingSavedAddresses, setIsFetchingSavedAddresses] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const fetchSavedAddresses = async () => {
    setIsFetchingSavedAddresses(true);
    try {
      const token = JSON.parse(localStorage.getItem("token")).value;
      const response = await axios.get(
        "https://spedire-app-backend-service.onrender.com/api/v1/address/receiver",
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
    setReceiverAutoDetectLocation(address);
    handleChange({ target: { name: "receiverAddress", value: address } });
    setShowDropdown(false);
  };

  const handleSelectLocation = (location) => {
    handleAddressSelect(location);
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
    setReceiverAutoDetectLocation(address);
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

  const handleSaveAddressChange = (event) => {
    handleChange({
      target: { name: "saveReceiverAddress", value: event.target.checked },
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <div
      className="w-full p-10 bg-white rounded-md"
      style={{
        border: "1px solid #ccc",
        maxHeight: "calc(140vh - 50px)",
        overflowY: "scroll",
      }}
    >
      <form onSubmit={onSubmit} className="max-w-4xl mx-auto">
      <div className="mb-4">
          <h2 className="text-2xl font-semibold">Add Receiver</h2>
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
            name="receiverAddress"
            value={receiverAutoDetectLocation}
            onClick={handleAddressClick}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Select or input address"
            className="input-box pl-10 mt-1 block w-full md:w-[543px] h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
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
            name="receiverTown"
            value={formData.receiverTown}
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
        <div className="mb-4">
          <label className="block text-base font-semibold text-[#4B4B4B]">
            Name
          </label>
          <input
            type="text"
            name="receiverName"
            value={formData.receiverName}
            onChange={handleChange}
            className="input-box mt-1 block w-full h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            style={{ borderColor: "#ccc" }}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-semibold text-[#4B4B4B]">
            Phone Number
          </label>
          <div className="relative mt-1">
            <img
              src={flag}
              alt="Nigerian Flag"
              className="absolute top-1/2 transform -translate-y-1/2 left-3 w-6 h-6"
            />
            <input
              type="text"
              name="receiverPhoneNumber"
              value={formData.receiverPhoneNumber}
              onChange={handleChange}
              className="input-box pl-20 block w-full h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-base font-semibold text-[#4B4B4B]">
            Item Name
          </label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            className="input-box mt-1 block w-full h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            style={{ borderColor: "#ccc" }}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-semibold text-[#4B4B4B]">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="input-box mt-1 focus:outline-none focus:ring-1 focus:ring-[#ccc] block w-full h-[58px] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            style={{ borderColor: "#ccc" }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-semibold text-[#4B4B4B]">
            Item Value
          </label>
          <input
            type="text"
            name="itemValue"
            value={formData.itemValue}
            onChange={handleChange}
            className="input-box mt-1 block w-full h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            style={{ borderColor: "#ccc" }}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-semibold text-[#4B4B4B] mb-4">
            Upload a clear item picture (Optional)
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              className="input-box flex flex-col hover:bg-[#d3d2d2] items-center justify-center w-[200px] h-[200px] rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              style={{ border: "1px solid #ccc" }}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <img
                  src={UploadImage}
                  alt="Upload"
                  className="w-15 h-15 mb-3"
                />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Upload</span>
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG, PDF (MAX. 800x400px)
                </p>
              </div>
              <input
                type="file"
                className="hidden"
                name="itemImage"
                accept="image/png, image/jpeg, application/pdf"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-base font-semibold text-[#4B4B4B]">
            Drop Off Note
          </label>
          <input
            type="text"
            name="dropOffNote"
            value={formData.dropOffNote}
            onChange={handleChange}
            className="input-box mt-1 block w-full h-[96px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            style={{ borderColor: "#ccc" }}
            required
          />
        </div>
        <div className="flex items-center mb-8">
          <input
            type="checkbox"
            name="saveAddress"
            id="saveAddress"
            className="input-box h-4 w-4 text-blue-600 focus:outline-none focus:ring-1 focus:ring-[#ccc] border-gray-300 rounded"
            onChange={handleSaveAddressChange}
          />
          <label
            htmlFor="saveAddress"
            className="ml-2 block text-sm font-semibold text-[#4B4B4B]"
          >
            Save this address
          </label>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="w-[48%] h-[58px] bg-button text-white rounded-xl"
          >
            Back
          </button>
          <button
            type="submit"
            className="w-[48%] h-[58px] bg-button text-white rounded-xl flex items-center justify-center"
          >
            {isLoading ? <FaSpinner className="animate-spin" /> : "Submit"}
          </button>
        </div>
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
  error: {
    color: "red",
  },
};

export default ReceiverForm;
