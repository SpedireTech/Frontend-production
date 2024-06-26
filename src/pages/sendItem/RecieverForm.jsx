import React from "react";
import UploadImage from "../../assets/UploadImageIcon.svg";
import flag from "../../assets/NIGIcon.svg";

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
        <h2 className="text-2xl font-semibold mb-4">Add Receiver</h2>
        <div className="mb-4">
          <label className="block text-base font-semibold text-[#4B4B4B]">Name</label>
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
          <label className="block text-base font-semibold text-[#4B4B4B]">Drop Off Address</label>
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
          <label className="block text-base font-semibold text-[#4B4B4B]">Phone Number</label>
          <div className="relative mt-1">
            <img src={flag} alt="Nigerian Flag" className="absolute top-1/2 transform -translate-y-1/2 left-3 w-6 h-6" />
            {/* <span className="absolute top-1/2 transform -translate-y-1/2 left-12">+234</span> */}
            <input
              type="text"
              name="senderPhoneNumber"
              value={formData.senderPhoneNumber}
              onChange={handleChange}
              className="input-box pl-20 block w-full h-[58px] border border-gray-300 shadow-sm sm:text-sm rounded-2xl"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-base font-semibold text-[#4B4B4B]">Item Name</label>
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
          <label className="block text-base font-semibold text-[#4B4B4B]">Description</label>
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
          <label className="block text-base font-semibold text-[#4B4B4B]">Item Value</label>
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
          <label className="block text-base font-semibold text-[#4B4B4B]">Package Weight (kg)</label>
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
          <label className="block text-base font-semibold text-[#4B4B4B] mb-4">
            Upload a clear item picture (Optional)
          </label>
          <div className="flex items-center justify-center w-full ">
            <label
              className="input-box flex flex-col items-center justify-center w-[400px] h-[200px]  rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              style={{ border: "1px solid #ccc" }}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <img
                  src={UploadImage}
                  alt="Upload"
                  className="w-15 h-15 mb-3"
                />
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
          <label className="block text-base font-semibold text-[#4B4B4B]">Drop Off Note</label>
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
