import React, { useState, useRef, useEffect, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch } from "react-icons/fa";
import AddressInput from "./AddressInput";
import axios from "axios";
import { format, parse, isValid } from "date-fns";

// Custom input component for time picker with placeholder
const CustomTimeInput = forwardRef(({ value, onClick, onChange }, ref) => (
  <input
    value={value}
    onClick={onClick}
    onChange={onChange}
    ref={ref}
    placeholder="HH:MM"
    className="input-box mt-1 block w-full md:w-[270px] h-[58px] focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
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
    if (senderAutoDetectLocation) {
      fetchAddressLocation(senderAutoDetectLocation);
    }
  }, [senderAutoDetectLocation]);

  const handleAddressSelect = async (address) => {
    setInfoMessage("Select a location that best describes where you are at.");
    setSenderAutoDetectLocation(address);
    handleChange({ target: { name: "senderAddress", value: address } });
  };

  const handleSelectLocation = (location) => {
    setSenderAutoDetectLocation(location);
    setShowDropdown(false);
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

  const handleSaveAddressChange = (event) => {
    handleChange({
      target: { name: "saveSenderAddress", value: event.target.checked },
    });
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
          <div ref={inputRef} style={styles.inputWrapper}>
            <AddressInput
              value={senderAutoDetectLocation}
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
            onChange={handleSaveAddressChange}
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
