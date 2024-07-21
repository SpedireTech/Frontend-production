import React from 'react';

const Dropdown = ({ locations, onSelect, infoMessage, error, dropdownRef }) => (
  <div ref={dropdownRef} style={styles.dropdownContainer}>
    <p style={styles.infoMessage}>{infoMessage}</p>
    <ul style={styles.dropdown}>
      {locations.map((location, index) => (
        <li
          key={index}
          onClick={() => onSelect(location)}
          style={styles.dropdownItem}
        >
          {location}
        </li>
      ))}
    </ul>
    {error && <p style={styles.error}>{error}</p>}
  </div>
);

const styles = {
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
  infoMessage: {
    color: "#666",
    marginBottom: "10px",
  },
  error: {
    color: "red",
  },
};

export default Dropdown;
