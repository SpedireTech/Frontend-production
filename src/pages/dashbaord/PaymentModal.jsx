import React, { useState } from "react";

const PaymentModal = ({ isOpen, onClose, amount }) => {
  const [inputAmount, setInputAmount] = useState(amount || ""); // Initialize with passed amount or empty

  if (!isOpen) {
    return null;
  }

  const handleAmountChange = (e) => {
    setInputAmount(e.target.value); // Update state on input change
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-xl shadow-lg space-y-4 w-98">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Confirm and make payment</h2>
          <button onClick={onClose} className="text-lg font-bold">
            ✕
          </button>
        </div>
        <p className="text-sm">
          Kindly confirm agreed price, and proceed in making payment
        </p>
        <div className="text-3xl font-bold py-2">
          <input
            type="text"
            placeholder="N 3500"
            className="text-center w-full font-bold bg-transparent border-none focus:outline-none"
            value={inputAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <button className="flex flex-col items-start bg-button text-white py-3 px-4 rounded-lg hover:bg-blue-600 space-y-1">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 2H6a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2V4a2 2 0 00-2-2z"></path>
                <path d="M15 8h2a2 2 0 012 2v2a2 2 0 01-2 2h-2.5"></path>
              </svg>
              <span>Pay via wallet</span>
            </div>
            <span className="text-sm opacity-75">
              Make payment via your Spedire account.
            </span>
          </button>
          <button className="flex flex-col items-start bg-button text-white py-3 px-4 rounded-lg hover:bg-blue-600 space-y-1">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect width="18" height="12" x="3" y="6" rx="2" ry="2"></rect>
                <path d="M2 10h20"></path>
              </svg>
              <span>Pay via card</span>
            </div>
            <span className="text-sm opacity-75">
              Make payment via your card.
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
