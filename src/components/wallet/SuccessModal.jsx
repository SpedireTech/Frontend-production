import React from 'react';

const SuccessModal = ({ isOpen, onReset }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <h2>Congratulations, transaction successful.</h2>
      <button onClick={onReset}>Start Over</button>
    </div>
  );
};

export default SuccessModal;
