// import React, { useState, useRef, useEffect } from 'react';

// const AddressInput = ({ value, onChange }) => {
//   const [predictions, setPredictions] = useState([]);
//   const autocompleteService = useRef(null);
//   const inputRef = useRef(null);
//   const [inputValue, setInputValue] = useState('');


//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     onChange(value);

//     if (value) {
//       if (!autocompleteService.current) {
//         autocompleteService.current = new window.google.maps.places.AutocompleteService();
//       }
//       autocompleteService.current.getPlacePredictions(
//         {
//           input: value,
//           componentRestrictions: { country: "NG" },
//         },
//         (predictions, status) => {
//           if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//             const filteredPredictions = predictions.filter((prediction) =>
//               prediction.description.includes("Lagos")
//             );
//             setPredictions(filteredPredictions);
//           } else {
//             setPredictions([]);
//           }
//         }
//       );
//     } else {
//       setPredictions([]);
//     }
//   };

//   const handlePredictionClick = (prediction) => {
//     onChange(prediction.description);
//     setPredictions([]);
//   };

//   return (
//     <div>
//       <input
//         ref={inputRef}
//         type="text"
//         placeholder="Location"
//         className="w-full p-3 border border-gray-300 rounded-lg text-sm"
//         onChange={handleInputChange}
//         value={value}
//       />
//       {predictions.length > 0 && (
//         <ul className="border border-gray-300 rounded-lg">
//           {predictions.map((prediction) => (
//             <li
//               key={prediction.place_id}
//               className="p-2 cursor-pointer hover:bg-gray-200"
//               onClick={() => handlePredictionClick(prediction)}
//             >
//               {prediction.description}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default AddressInput;




import React, { useState, useRef } from 'react';

const AddressInput = ({ value, onChange }) => {
  const [predictions, setPredictions] = useState([]);
  const [inputValue, setInputValue] = useState(value);
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
    setInputValue(prediction.description);
    onChange(prediction.description);
    setPredictions([]);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Location"
        className="w-80 p-3 border border-gray-300 rounded-lg text-sm"
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
