import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch, FaLocationArrow } from "react-icons/fa";
import AddressInput from "./AddressInput.jsx";

const SenderForm = ({ formData, handleChange, nextStep, handleDateChange }) => {
  const [currentLocation, setCurrentLocation] = useState(
    formData.senderAddress || []
  );
  const [senderAutoDetectLocation, setSenderAutoDetectLocation] = useState("");
  const [nearbyLocations, setNearbyLocations] = useState([]);
  const [error, setError] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const getLocation = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      const { latitude, longitude } = position.coords;
      fetchNearbyLocations(latitude, longitude);
    } catch (err) {
      setError("Unable to retrieve your location");
      console.error(err);
    }
  };

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
      setShowDropdown(true);
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

  const handleSelectLocation = (location) => {
    const newLocation = [...currentLocation, location].slice(0, 3);
    setCurrentLocation(newLocation);
    handleChange({ target: { name: "senderAddress", value: newLocation } });
    setShowDropdown(false);
  };

  const handleIconClick = () => {
    setInfoMessage(
      "Select up to 3 locations that best describe where you are at."
    );
    getLocation();
  };

  const handleAddressSelect = async (address) => {
    setInfoMessage(
      "Select up to 3 locations that best describe where you are at."
    );
    setSenderAutoDetectLocation(address);
  };

  useEffect(() => {
    if (senderAutoDetectLocation) {
      fetchAddressLocation(senderAutoDetectLocation);
    }
  }, [senderAutoDetectLocation]);

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
          <div className="relative w-full">
            <AddressInput
              value={currentLocation}
              onChange={handleSelectLocation}
            />
            <FaLocationArrow
              onClick={handleIconClick}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
              style={{ cursor: "pointer", color: "#ccc" }}
              title="Auto detect your location"
            />
            {showDropdown && (
              <div ref={dropdownRef} style={styles.dropdownContainer}>
                <p style={styles.infoMessage}>{infoMessage}</p>
                <ul style={styles.dropdown}>
                  {nearbyLocations.map((location, index) => (
                    <li
                      key={index}
                      onClick={() => handleSelectLocation(location)}
                      style={{
                        ...styles.dropdownItem,
                        backgroundColor: currentLocation.includes(location)
                          ? "#d3d3d3"
                          : "#fff",
                      }}
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
        <div className="mb-4 flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-3">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
            <label className="block text-base font-semibold text-[#4B4B4B]">
              Due Date
            </label>
            <DatePicker
              selected={formData.dueDate}
              onChange={(date) => handleDateChange(date, "dueDate")}
              placeholderText="MM/dd/yyyy"
              className="input-box mt-1 block w-full md:w-[280px] h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            />
          </div>
          <div className="w-full sm:w-1/2 relative">
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
            {!formData.dueTime && (
              <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                HH:MM
              </span>
            )}
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

const styles = {
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

export default SenderForm;
