import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';

const DetectLocationButton = ({ onClick }) => {
  return (
    <div style={styles.iconContainer} onClick={onClick} title="Detect my location">
      <FaLocationArrow style={styles.icon} />
    </div>
  );
};

const styles = {
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  icon: {
    fontSize: '1.2em',
    color: '#007BFF',
  },
};

export default DetectLocationButton;
