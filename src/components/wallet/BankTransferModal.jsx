import React, { useState } from "react";
import copyIcon from "../../assets/copyIcon.svg";

const BankTransferModal = ({ isOpen, onClose }) => {
  const [copyText, setCopyText] = useState("Copy");

  if (!isOpen) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText("7678485776");
    setCopyText("Copied");
    setTimeout(() => {
      setCopyText("Copy");
    }, 1000); // Resets the copy text after 1 second
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md mx-4">
        <h2 style={{ color: "#0B56B8" }} className="text-lg font-semibold mb-4">
          Bank Transfer
        </h2>
        <p style={{ color: "#667085" }}>
          Kindly find your Spedire account number thank you.
        </p>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "5px",
            borderRadius: "15px",
            backgroundColor: "#F9F9F9",
          }}
          className=" my-4 flex justify-between"
        >
          <label
            style={{ color: "#A0A0A0" }}
            className=" p-2 text-sm font-semibold"
          >
            Bank
          </label>
          <div
            style={{ color: "#101828" }}
            className="p-2 bg-gray-200 rounded font-semibold"
          >
            WEMA BANK
          </div>
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "5px",
            borderRadius: "15px",
            backgroundColor: "#F9F9F9",
          }}
          className="my-4 flex justify-between"
        >
          <label
            style={{ color: "#A0A0A0" }}
            className=" p-2 text-sm font-semibold"
          >
            Account Name
          </label>
          <div
            style={{ color: "#101828" }}
            className="p-2 bg-gray-200 font-semibold rounded"
          >
            JOHN JOE
          </div>
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "5px",
            borderRadius: "15px",
            backgroundColor: "#F9F9F9",
          }}
          className=" my-4 flex justify-between items-center"
        >
          <label
            style={{ color: "#A0A0A0" }}
            className="p-2 text-sm font-semibold"
          >
            Account Number
          </label>
          <div
            style={{ color: "#0B56B8" }}
            className="flex items-center p-2 bg-gray-200 rounded font-semibold"
          >
            7678485776
            <div></div>
            <span style={{ color: "#0B56B8" }} className="ml-2 text-sm">
              {copyText}
            </span>
            <img
              src={copyIcon}
              alt="Copy Icon"
              className="ml-1 w-4 h-4 cursor-pointer"
              onClick={handleCopy}
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={onClose}
            style={{
              borderRadius: "15px",
              width: "325px",
              height: "56px",
              backgroundColor: "#0B56B8",
            }}
            className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankTransferModal;
