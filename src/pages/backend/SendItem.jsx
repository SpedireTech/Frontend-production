import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import AddressInput from './AddressInput';
import { LoadScript } from '@react-google-maps/api';
import { FaLocationArrow } from 'react-icons/fa';

const SendItem = () => {
  const [senderLocation, setSenderLocation] = useState([]);
  const [senderAutoDetectLocation, setSenderAutoDetectLocation] = useState('');
  const [receiverLocation, setReceiverLocation] = useState('');
  const [nearbyLocations, setNearbyLocations] = useState([]);
  const [error, setError] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
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
      setError('Unable to retrieve your location');
      console.error(err);
    }
  };

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
    if (senderLocation.includes(location)) {
      setSenderLocation(senderLocation.filter((loc) => loc !== location));
    } else if (senderLocation.length < 3) {
      setSenderLocation([...senderLocation, location]);
    } else {
      setError('You can only select up to 3 locations');
    }
  };


  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      senderName: 'Zainab Wilfred',
      senderId: 'Why do we have senderId',
      senderLocation,
      senderPhoneNumber: '09087655443',
      receiverName: 'Kudirat Jamiu',
      receiverPhoneNumber: '07087544331',
      receiverLocation,
      itemDescription: 'Bag of Clothes',
      price: '89,000',
      dueDate: '24/09/2024',
      dueTime: '07:00AM',
      picture: 'null',
    };

    console.log("Payload == ", payload);
  };

  const handleIconClick = () => {
    setInfoMessage('Select up to 3 locations that best describe where you are at.');
    getLocation();
  };

  const handleAddressSelect = async (address) => {
    setInfoMessage('Select up to 3 locations that best describe where you are at.');
    setSenderAutoDetectLocation(address);
  };

  useEffect(() => {
    if (senderAutoDetectLocation) {
      fetchAddressLocation(senderAutoDetectLocation);
    }
  }, [senderAutoDetectLocation]);


  const handleReceiverLocationChange = (value) => {
    setReceiverLocation(value);
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
          <h2 style={styles.title}>Send a Package</h2>
          <div style={styles.inputGroup}>
            <label>Sender Location:</label>
            <div ref={inputRef} style={styles.inputWrapper}>
              <div style={styles.iconWrapper}>
                <FaLocationArrow onClick={handleIconClick} style={styles.icon} title="Detect my Location" />
              </div>
              <AddressInput value={senderAutoDetectLocation} onChange={handleAddressSelect} />
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
                          backgroundColor: senderLocation.includes(location) ? '#d3d3d3' : '#fff',
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
          <div style={styles.inputGroup}>
            <label>Receiver Location:</label>
            <AddressInput value={receiverLocation} onChange={handleReceiverLocationChange} />
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
  iconWrapper: {
    marginRight: '10px',
  },
  icon: {
    cursor: 'pointer',
    border: 'solid 1px black',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: '#D3D3D3',
    width: '40px',
    height: '20px',
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


export default SendItem;
