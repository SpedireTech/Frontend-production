import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SenderForm from "../sendItem/SenderForm";
import ReceiverForm from "../sendItem/RecieverForm";
import ConfirmationModal from "../sendItem/ConfirmationModal";

import { getStoredItem } from "../../util/lib";

const DeliveryForm = () => {
  const [step, setStep] = useState(1);
  const user = getStoredItem("user");
  const [formData, setFormData] = useState({
    ...user,
    receiverName: "",
    receiverAddress: "",
    receiverPhoneNumber: "",
    itemName: "",
    description: "",
    itemValue: "",
    packageWeight: "",
    dropOffNote: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date, field) => {
    setFormData({ ...formData, [field]: date });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    const token = JSON.parse(localStorage.getItem("token")).value;
    try {
      const response = await axios.post(
        "http://44.223.68.243:8080/api/v1/order/createOrder",
        {
          senderId: user.senderId,
          senderName: `${formData.senderFirstName} ${formData.senderLastName}`,
          senderLocation: formData.senderAddress,
          senderPhoneNumber: formData.senderPhoneNumber,
          receiverName: formData.receiverName,
          receiverLocation: formData.receiverAddress,
          receiverPhoneNumber: formData.receiverPhoneNumber,
          itemDescription: formData.description,
          price: formData.itemValue,
          dueDate: formData.dueDate,
          dueTime: formData.dueTime,
          picture: "", // Add picture if needed
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResponseData(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-2xl p-4">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {step === 1 && (
          <SenderForm
            formData={formData}
            handleChange={handleChange}
            handleDateChange={handleDateChange}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <ReceiverForm
            formData={formData}
            handleChange={handleChange}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        responseData={responseData}
      />
    </div>
  );
};

export default DeliveryForm;
