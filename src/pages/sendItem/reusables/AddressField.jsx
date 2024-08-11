import React, { useState, useRef, useEffect } from 'react';
import AddressInput from './../AddressInput';
import axios from 'axios';
import Dropdown from './../reusables/Dropdown';

const AddressField = ({ value, onChange, name, apiKey, onLocationSelect }) => {
  const [locations, setLocations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [error, setError] = useState(null);
  const [dropdownDisplayCount, setDropdownDisplayCount] = useState(0);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const fetchNearbyLocations = async (latitude, longitude) => {
    try {
      const response = await axios.post(
        'https://places.googleapis.com/v1/places:searchNearby',
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
            'X-Goog-Api-Key': apiKey,
            'X-Goog-FieldMask': 'places.displayName',
          },
        }
      );
      const places = response.data.places.map(place => place.displayName.text);
      setLocations(places);
      if (dropdownDisplayCount < 2) {
        setShowDropdown(true);
        setDropdownDisplayCount(dropdownDisplayCount + 1);
      }
    } catch (error) {
      setError('Error fetching nearby locations');
      console.error(error);
    }
  };

  const fetchAddressLocation = async (address) => {
    try {
      const response = await axios.post(
        'https://places.googleapis.com/v1/places:searchText',
        { textQuery: address },
        {
          headers: {
            'X-Goog-Api-Key': apiKey,
            'X-Goog-FieldMask': '*',
          },
        }
      );
      if (response.data.places && response.data.places.length > 0) {
        const place = response.data.places[0];
        const { latitude, longitude } = place.location;
        fetchNearbyLocations(latitude, longitude);
      } else {
        setError('No places found');
      }
    } catch (error) {
      setError('Error fetching address location');
      console.error(error);
    }
  };

  useEffect(() => {
    if (value) {
      fetchAddressLocation(value);
    }
  }, [value]);

  const handleAddressSelect = (address) => {
    setInfoMessage('Select a location that best describes where you are at.');
    onChange({ target: { name, value: address } });
    onLocationSelect(address);
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
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={inputRef} style={styles.inputWrapper}>
      <AddressInput
        value={value}
        onChange={(e) => handleAddressSelect(e.target.value)}
      />
      {showDropdown && (
        <Dropdown
          locations={locations}
          onSelect={handleAddressSelect}
          infoMessage={infoMessage}
          error={error}
          dropdownRef={dropdownRef}
        />
      )}
    </div>
  );
};

const styles = {
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
};

export default AddressField;
