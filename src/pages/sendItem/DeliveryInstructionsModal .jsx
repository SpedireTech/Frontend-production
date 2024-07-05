import React from "react";

const DeliveryInstructionsModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl w-11/12 max-w-4xl mx-auto">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Delivery instructions</h2>
          <p className="mb-4 text-gray-600">
            Remember to share delivery details with your recipient and ensure your package meets the following requirements:
          </p>
          <ul className="mb-6 text-gray-700">
            <li className="flex items-start mb-2">
              <span className="text-green-500 mr-2">✔</span>
              Handed over to the courier in person by the roadside.
            </li>
            <li className="flex items-start mb-2">
              <span className="text-green-500 mr-2">✔</span>
              Collected by the recipient by the roadside.
            </li>
            <li className="flex items-start mb-2">
              <span className="text-green-500 mr-2">✔</span>
              Packed into a box, bag, or envelope.
            </li>
            <li className="flex items-start mb-2">
              <span className="text-green-500 mr-2">✔</span>
              Fits easily in the vehicle without causing damage.
            </li>
            <li className="flex items-start mb-2">
              <span className="text-green-500 mr-2">✔</span>
              Weighs less than 5kg.
            </li>
            <li className="flex items-start mb-2">
              <span className="text-green-500 mr-2">✔</span>
              Contains no prohibited items and does not exceed the local regulations' permitted goods value.
            </li>
          </ul>
          <p className="mb-4 text-gray-600 text-sm">
            By using Spedire, you agree to our <a href="#" className="text-blue-500">terms</a> and local <a href="#" className="text-blue-500">regulations</a>.
          </p>
          <div className="flex justify-center">
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInstructionsModal;
