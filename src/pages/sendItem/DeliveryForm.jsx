import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SenderForm from "../sendItem/SenderForm";
import ReceiverForm from "../sendItem/RecieverForm";
import ConfirmationModal from "../sendItem/ConfirmationModal";
import SideBar from "../../components/sidebar/SideBar";
import { getStoredItem } from "../../util/lib";
import DeliveryInstructionsModal from "../sendItem/DeliveryInstructionsModal ";

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
    pickUpNote: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeliveryInstructionsModalOpen, setIsDeliveryInstructionsModalOpen] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://spedire-app-backend-service.onrender.com/api/v1/order/createOrder",
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
          pickUpNote: formData.pickUpNote,
          dropOffNote: formData.dropOffNote,
          picture: "", 
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResponseData(response.data);
      setIsModalOpen(true);
      toast.success("Order created successfully!");
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("Failed to create order.", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full h-screen">
      <ToastContainer />
      <div className="w-[20%] bg-blue-500">
        <SideBar />
      </div>
      <div className="fixed top-4 right-8 flex justify-end mb-4">
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
      <div className="w-full max-w-2xl p-4 ml-32">
        <div className="mt-4 flex space-x-4 top-4 mb-4">
          <span className={`text-lg font-semibold ${step === 1 ? 'text-blue-500' : 'text-gray-500'}`}>
            Sender
          </span>
          <p>-</p>
          <span className={`text-lg font-semibold ${step === 2 ? 'text-blue-500' : 'text-gray-500'}`}>
            Receiver
          </span>
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
            isLoading={isLoading}
          />
        )}
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        responseData={responseData}
      />
      <DeliveryInstructionsModal
        isOpen={isDeliveryInstructionsModalOpen}
        closeModal={() => setIsDeliveryInstructionsModalOpen(false)}
      />
    </div>
  );
};

export default DeliveryForm;
