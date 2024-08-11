import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import AddressInput from './AddressInput';
import { LoadScript } from '@react-google-maps/api';

const TestLocation = () => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [senderAutoDetectLocation, setSenderAutoDetectLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [nearbyLocations, setNearbyLocations] = useState([]);
  const [error, setError] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
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
            'X-Goog-Api-Key': 'AIzaSyAGHpgeiFAzUQqrosmbd2G531zmD9zgiI8',
            'X-Goog-FieldMask': 'places.displayName',
          },
        }
      );
      const places = response.data.places.map((place) => place.displayName.text);
      setNearbyLocations(places);
      setShowDropdown(true);
    } catch (error) {
      console.error('Error fetching nearby locations:', error);
    }
  };

  const fetchAddressLocation = async (address) => {
    try {
      const response = await axios.post(
        'https://places.googleapis.com/v1/places:searchText',
        {
          textQuery: address,
        },
        {
          headers: {
            'X-Goog-Api-Key': 'AIzaSyAGHpgeiFAzUQqrosmbd2G531zmD9zgiI8',
            'X-Goog-FieldMask': '*',
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
        console.error('No places found in the response.');
      }
    } catch (error) {
      console.error('Error fetching address location:', error);
    }
  };

  const handleSelectLocation = (location) => {
    setCurrentLocation(location);
    setShowDropdown(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      destination,
      currentLocation,
      token: 'token_for_test',
    };

    console.log('Payload == ', payload);

    try {
      const response = await axios.get('http://localhost:8080/api/v1/order/matchOrder', payload);
      console.log('Order created successfully:', response.data);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  const handleAddressSelect = async (address) => {
    setInfoMessage('Select a location that best describes where you are at.');
    setSenderAutoDetectLocation(address);
  };

  useEffect(() => {
    if (senderAutoDetectLocation) {
      fetchAddressLocation(senderAutoDetectLocation);
    }
  }, [senderAutoDetectLocation]);

  const handleReceiverLocationChange = (value) => {
    setDestination(value);
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
    <LoadScript googleMapsApiKey="AIzaSyAGHpgeiFAzUQqrosmbd2G531zmD9zgiI8" libraries={['places']}>
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.title}>Deliver a Package</h2>
          <div style={styles.inputGroup}>
            <label>Current Location:</label>
            <div ref={inputRef} style={styles.inputWrapper}>
              <AddressInput value={senderAutoDetectLocation} onChange={handleAddressSelect} />
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
          <div style={styles.inputGroup}>
            <label>Destination:</label>
            <AddressInput value={destination} onChange={handleReceiverLocationChange} />
          </div>
          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
      </div>
    </LoadScript>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f2f2f2',
  },
  form: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    width: '60%',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  infoMessage: {
    color: '#666',
    marginBottom: '10px',
  },
  dropdownContainer: {
    position: 'absolute',
    top: '100%',
    left: '0',
    width: '100%',
    backgroundColor: '#fff',
    zIndex: '1000',
    maxHeight: '200px',
    overflowY: 'auto',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  dropdown: {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
  },
  dropdownItem: {
    padding: '10px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  },
};

export default TestLocation;
