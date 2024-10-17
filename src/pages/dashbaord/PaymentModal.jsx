import React, { useState } from "react";
import axios from "axios";

const PaymentModal = ({ isOpen, onClose, amount, orderIdNumber }) => {
  const [inputAmount, setInputAmount] = useState(amount || "");

  if (!isOpen) {
    return null;
  }

  const handleAmountChange = (e) => {
    setInputAmount(e.target.value);
  };

  const handleCardPayment = async () => {
    const token = localStorage.getItem('userToken');  
    const data = {
      amount: inputAmount,
      orderId: orderIdNumber
    };

    try {
      const response = await axios.post("http://localhost:8080/api/v1/carrier/service-charge", data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      });
      if (response.data && response.data.data && response.data.data.authorizationUrl) {
        window.open(response.data.data.authorizationUrl, "_blank");  // Open Paystack payment page in a new tab
      }
      console.log("Payment initialization successful:", response.data);
    } catch (error) {
      console.error("Payment Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 50,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "90%",
          maxWidth: "400px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{ textAlign: "center", flexGrow: 1, margin: 0 }}
            className="text-lg font-semibold"
          >
            Confirm and make payment
          </h2>
          <button
            onClick={onClose}
            style={{ fontSize: "1.5rem", border: "none", background: "none" }}
          >
            ✕
          </button>
        </div>
        <p
          className="text-sm text-center"
          style={{ fontSize: "13px", opacity: 0.75 }}
        >
          Kindly confirm the agreed price, and proceed with making payment
        </p>
        <div className="text-3xl font-bold py-2">
          <input
            type="text"
            placeholder="N 3500"
            className="text-center w-full font-bold bg-transparent border-none focus:outline-none"
            value={inputAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* <button
            className="bg-button"
            style={{
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              cursor: "pointer",
            }}
          >
            <div style={{ textAlign: "left", display: "flex" }}>
              
              <span>Pay via wallet</span>
            </div>
            <span
              style={{ textAlign: "left", fontSize: "12px", opacity: 0.75 }}
            >
              Make payment via your Spedire account.
            </span>
          </button> */}
          <button
            className="bg-button"
            style={{
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              cursor: "pointer",
            }}
          >
            <div
             onClick={handleCardPayment}
              style={{
                textAlign: "left",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* SVG Icon would go here */}
              <span>Pay via card</span>
            </div>
            <span
              style={{ textAlign: "left", fontSize: "12px", opacity: 0.75 }}
            >
              Make payment via your card.
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
