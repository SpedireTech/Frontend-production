import React from 'react';

const CreatePinModal = ({ isOpen, onPinCreated, onPinChange, pin, confirmPin }) => {
  if (!isOpen) return null;

  const handleCreatePin = () => {
    if (pin === confirmPin) {
      onPinCreated();
    } else {
      alert('Pins do not match, please try again.');
    }
  };

  return (
    <div className="modal">
      <h2>Create PIN</h2>
      <input type="password" placeholder="Create PIN" value={pin} onChange={e => onPinChange(e.target.value, 'pin')} />
      <input type="password" placeholder="Re-enter PIN" value={confirmPin} onChange={e => onPinChange(e.target.value, 'confirmPin')} />
      <button onClick={handleCreatePin}>Confirm</button>
    </div>
  );
};

export default CreatePinModal;
