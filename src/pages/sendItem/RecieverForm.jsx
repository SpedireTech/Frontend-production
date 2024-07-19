import React, { useState, useRef, useEffect } from "react";
import UploadImage from "../../assets/UploadImageIcon.svg";
import flag from "../../assets/NIGIcon.svg";
import { FaSearch } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa"; // Import the spinner icon
import axios from "axios";
import AddressInput from "./AddressInput";

const ReceiverForm = ({
  formData,
  handleChange,
  prevStep,
  handleSubmit,
  handleImageChange,
  isLoading, // Add this prop to get loading state
}) => {
  const [receiverAutoDetectLocation, setReceiverAutoDetectLocation] = useState(
    formData.receiverAddress || ""
  );
  const [nearbyLocations, setNearbyLocations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  const [error, setError] = useState(null);
  const [dropdownDisplayCount, setDropdownDisplayCount] = useState(0);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const fetchNearbyLocations = async (latitude, longitude) => {
    try {
      const response = await axios.post(
        "https://places.googleapis.com/v1/places:searchNearby",
        {
          maxResultCount: 10,
          locationRestriction: {
            circle: {
              center: { latitude, longitude },
              radius: 1500.0,
            },
          },
        },
        {
          headers: {
            "X-Goog-Api-Key": "AIzaSyAGHpgeiFAzUQqrosmbd2G531zmD9zgiI8",
            "X-Goog-FieldMask": "places.displayName",
          },
        }
      );
      const places = response.data.places.map(
        (place) => place.displayName.text
      );
      setNearbyLocations(places);
      if (dropdownDisplayCount < 2) {
        setShowDropdown(true);
        setDropdownDisplayCount(dropdownDisplayCount + 1);
      }
    } catch (error) {
      console.error("Error fetching nearby locations:", error);
    }
  };

  const fetchAddressLocation = async (address) => {
    try {
      const response = await axios.post(
        "https://places.googleapis.com/v1/places:searchText",
        {
          textQuery: address,
        },
        {
          headers: {
            "X-Goog-Api-Key": "AIzaSyAGHpgeiFAzUQqrosmbd2G531zmD9zgiI8",
            "X-Goog-FieldMask": "*",
          },
        }
      );
      if (response.data.places && response.data.places.length > 0) {
        const place = response.data.places[0];
        const location = place.location;
        const latitude = location.latitude;
        const longitude = location.longitude;
        fetchNearbyLocations(latitude, longitude);
      } else {
        console.error("No places found in the response.");
      }
    } catch (error) {
      console.error("Error fetching address location:", error);
    }
  };

  useEffect(() => {
    if (receiverAutoDetectLocation) {
      fetchAddressLocation(receiverAutoDetectLocation);
    }
  }, [receiverAutoDetectLocation]);

  const handleAddressSelect = async (address) => {
    setInfoMessage("Select a location that best describes where you are at.");
    setReceiverAutoDetectLocation(address);
    handleChange({ target: { name: "receiverAddress", value: address } });
  };

  const handleSelectLocation = (location) => {
    setReceiverAutoDetectLocation(location);
    setShowDropdown(false);
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
      className="p-10 bg-white rounded-md"
      style={{
        border: "1px solid #ccc",
        maxHeight: "calc(100vh - 50px)",
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
            type="text"
            name="searchDetails"
            placeholder="Search saved details"
            className="input-box pl-10 mt-1 block w-full h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-semibold text-[#4B4B4B]">
            Drop Off Address
          </label>
          <div ref={inputRef} style={styles.inputWrapper}>
            <AddressInput
              value={receiverAutoDetectLocation}
              onChange={handleAddressSelect}
            />
            {showDropdown && (
              <div ref={dropdownRef} style={styles.dropdownContainer}>
                <p style={styles.infoMessage}>{infoMessage}</p>
                <ul style={styles.dropdown}>
                  {nearbyLocations.map((location, index) => (
                    <li
                      key={index}
                      onClick={() => handleSelectLocation(location)}
                      style={styles.dropdownItem}
                    >
                      {location}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {error && <p style={styles.error}>{error}</p>}
          </div>
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
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-semibold text-[#4B4B4B] mb-4">
            Upload a clear item picture (Optional)
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              className="input-box flex flex-col hover:bg-[#d3d2d2] items-center justify-center w-[400px] h-[200px] rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
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
  infoMessage: {
    color: "#666",
    marginBottom: "10px",
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