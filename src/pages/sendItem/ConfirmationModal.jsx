import React, { useEffect, useRef } from "react";
import Mark from "../../assets/blueMark.svg";
import { FaTimes } from "react-icons/fa";

const ConfirmationModal = ({ isOpen, closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-85 backdrop-filter border border-gray-300 backdrop-blur-sm"></div>
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg w-full max-w-3xl relative z-10"
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={closeModal}
        >
          <FaTimes size={24} />
        </button>
        <div className="text-center">
          <img
            src={Mark}
            alt="Confirmation Mark"
            className="mx-auto mb-4"
            style={{ width: "292px", height: "292px" }}
          />
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            Congratulations, your order has been submitted.
          </h3>
          <p>You will be notified when a matching order is found for you.</p>
        </div>
        <div className="mt-4"></div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
