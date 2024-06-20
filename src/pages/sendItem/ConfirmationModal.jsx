import React from 'react';

const ConfirmationModal = ({ isOpen, closeModal, responseData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">Congratulations, your order has been submitted.</h3>
          <p className="mt-2 text-sm text-gray-600">{responseData ? JSON.stringify(responseData, null, 2) : ''}</p>
        </div>
        <div className="mt-4">
          <button onClick={closeModal} className="px-4 py-2 bg-blue-500 text-white rounded-md">Close</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
