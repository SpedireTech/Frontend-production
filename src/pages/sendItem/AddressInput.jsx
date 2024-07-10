import React, { useState, useRef } from 'react';

const AddressInput = ({ value, onChange }) => {
  const [predictions, setPredictions] = useState([]);
  const [inputValue, setInputValue] = useState(value.join(", "));
  const autocompleteService = useRef(null);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setPredictions([]);

    if (value) {
      if (!autocompleteService.current) {
        autocompleteService.current = new window.google.maps.places.AutocompleteService();
      }
      autocompleteService.current.getPlacePredictions(
        {
          input: value,
          componentRestrictions: { country: "NG" },
        },
        (predictions, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            const filteredPredictions = predictions.filter((prediction) =>
              prediction.description.includes("Lagos")
            );
            setPredictions(filteredPredictions);
          } else {
            setPredictions([]);
          }
        }
      );
    }
  };

  const handlePredictionClick = (prediction) => {
    const newValue = [...value, prediction.description].slice(0, 3);
    setInputValue(newValue.join(", "));
    onChange(newValue);
    setPredictions([]);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Location"
        className="input-box w-full p-3 focus:outline-none focus:ring-1 focus:ring-[#ccc] border border-gray-300 text-sm rounded-2xl"
        onChange={handleInputChange}
        value={inputValue}
      />
      {predictions.length > 0 && (
        <ul className="border border-gray-300 rounded-lg">
          {predictions.map((prediction) => (
            <li
              key={prediction.place_id}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handlePredictionClick(prediction)}
            >
              {prediction.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressInput;
