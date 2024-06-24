import React from "react";

const ReceiverForm = ({
  formData,
  handleChange,
  prevStep,
  handleSubmit,
  handleImageChange,
}) => {
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <div
      className="p-10 bg-white rounded-md"
      style={{ border: "1px solid #ccc" }}
    >
      <form onSubmit={onSubmit} className="max-w-4xl mx-auto">
        <h2 className="text-xl mb-4">Add Receiver</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="receiverName"
            value={formData.receiverName}
            onChange={handleChange}
            className="input-box mt-1 block w-full h-[58px] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            style={{ borderColor: "#ccc" }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Drop Off Address</label>
          <input
            type="text"
            name="receiverAddress"
            value={formData.receiverAddress}
            onChange={handleChange}
            className="input-box mt-1 block w-full h-[58px] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            style={{ borderColor: "#ccc" }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            name="receiverPhoneNumber"
            value={formData.receiverPhoneNumber}
            onChange={handleChange}
            className="input-box mt-1 block w-full h-[58px] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            style={{ borderColor: "#ccc" }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Item Name</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            className="input-box mt-1 block w-full h-[58px] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            style={{ borderColor: "#ccc" }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="input-box mt-1 block w-full h-[58px] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            style={{ borderColor: "#ccc" }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Item Value</label>
          <input
            type="text"
            name="itemValue"
            value={formData.itemValue}
            onChange={handleChange}
            className="input-box mt-1 block w-full h-[58px] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            style={{ borderColor: "#ccc" }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Package Weight (kg)</label>
          <input
            type="text"
            name="packageWeight"
            value={formData.packageWeight}
            onChange={handleChange}
            className="input-box mt-1 block w-full h-[58px] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            style={{ borderColor: "#ccc" }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-4">
            Upload a clear item picture (Optional)
          </label>
          <div className="flex items-center justify-center w-full ">
            <label
              className="input-box flex flex-col items-center justify-center w-[400px] h-[200px]  rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              style={{ border: "1px solid #ccc" }}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16V6a1 1 0 011-1h8a1 1 0 011 1v10m-4 4h-4a1 1 0 01-1-1v-4h6v4a1 1 0 01-1 1z"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Upload</span>
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG, PDF (MAX. 800x400px)
                </p>
              </div>
              <input
                type="file"
                className="hidden"
                name="itemImage"
                accept="image/png, image/jpeg, application/pdf"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Drop Off Note</label>
          <input
            type="text"
            name="dropOffNote"
            value={formData.dropOffNote}
            onChange={handleChange}
            className="input-box mt-1 block w-full h-[96px] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            style={{ borderColor: "#ccc" }}
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="w-[48%] h-[58px] bg-button text-white rounded-xl"
          >
            Back
          </button>
          <button
            type="submit"
            className="w-[48%] h-[58px] bg-button text-white rounded-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReceiverForm;
