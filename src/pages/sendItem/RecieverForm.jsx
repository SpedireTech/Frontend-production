import React from 'react';

const ReceiverForm = ({ formData, handleChange, prevStep, handleSubmit }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Add Receiver</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" name="receiverName" value={formData.receiverName} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm rounded-md" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Drop Off Address</label>
        <input type="text" name="receiverAddress" value={formData.receiverAddress} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm rounded-md" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input type="text" name="receiverPhoneNumber" value={formData.receiverPhoneNumber} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm rounded-md" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Item Name</label>
        <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm rounded-md" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm rounded-md" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Item Value</label>
        <input type="text" name="itemValue" value={formData.itemValue} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm rounded-md" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Package Weight (kg)</label>
        <input type="text" name="packageWeight" value={formData.packageWeight} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm rounded-md" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Drop Off Note</label>
        <input type="text" name="dropOffNote" value={formData.dropOffNote} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm rounded-md" />
      </div>
      <div className="flex justify-between">
        <button onClick={prevStep} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
          Back
        </button>
        <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReceiverForm;
