import React, { useState } from "react";
import { getStoredItem } from "../../util/lib";

const ConfirmationModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState("");
  const imageSrc = null; // Replace with actual image path or logic to dynamically set image
  const name = "Michael"
  const user = getStoredItem("user");

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-xl shadow-lg space-y-4 w-100">
        <div className="bg-light-blue-100 p-3 rounded-lg">
          <div  style={{ backgroundColor: "#B3CBE9", paddingLeft: "10px", paddingRight: "10px" }} className="flex items-center gap-3 rounded-xl">
            <div
              className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: "red" }}
            >
              {user?.image ? (
                <img
                  src={user?.image}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-white text-lg">
                  {name.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg">Chika Grace</div>
              <div className="text-sm">Sender</div>
            </div>
            <div className="text-right flex flex-col items-end">
              <div className="flex flex-col items-end">
                <div className="text-sm font-semibold">Order name</div>
                <div>Hand bag</div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-sm font-semibold">Reference ID: 2376677488</div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 pt-2">
          <p className="text-sm mb-8">Kindly type the agreed delivery amount for confirmation:</p>
          <input
            type="number"
            placeholder="N 3500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="rounded p-2 w-full border border-gray-300 shadow-sm "
          />
        </div>
        <button
          onClick={() => onClose()}
          className="w-[360px] ml-2 bg-button text-white rounded-xl py-2 hover:bg-blue-700 mt-4"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
