import React from 'react';

const ConfirmTransactionModal = ({ isOpen, onConfirm, transactionAmount, recipient }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <h2>Confirm Transaction</h2>
      <p>You are about to transfer ₦{transactionAmount} to {recipient}</p>
      <input type="password" placeholder="Enter PIN to confirm" />
      <button onClick={onConfirm}>Confirm</button>
    </div>
  );
};

export default ConfirmTransactionModal;
