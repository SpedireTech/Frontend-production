import React, { useState, useEffect } from "react";
import BankTransferModal from "./BankTransferModal";

const PaymentForm = () => {
  const [isBankTransferOpen, setIsBankTransferOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expDate: "",
    ccv: "",
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    container: {
      maxWidth: windowWidth < 768 ? "100%" : "700px",
      padding: "5px",
      margin: "5",
      marginTop: "-15px",
      marginLeft: "30px",
    },
    inputStyle: {
      width: "100%",
      padding: "10px",
      marginTop: "4px",
      backgroundColor: "#F9F9F9",
    },
    inputGroupStyle: {
      marginBottom: "15px",
      display: "flex",
      flexDirection: "column",
    },
    halfInputGroupStyle: {
      display: "flex",
      flexDirection: windowWidth < 768 ? "column" : "row",
      marginBottom: "15px",
    },
    halfInputStyle: {
      width: windowWidth < 768 ? "100%" : "330px",
    },
    buttonStyle: {
      width: "100%",
      padding: "12px",
      marginTop: "10px",
      backgroundColor: "#08418A",
      color: "white",
      border: "none",
      cursor: "pointer",
    },
    tabsStyle: {
      width: "300px",
      display: "flex",
      marginBottom: "20px",
    },
    tabStyle: {
      flex: 1,
      padding: "10px",
      textAlign: "center",
      cursor: "pointer",
      borderBottom: "3px solid transparent",
    },
    activeTabStyle: {
      borderBottom: "3px solid #08418A",
    },
    linkStyle: {
      cursor: "pointer",
      textAlign: "left",
      marginTop: "-25px",
      fontSize: "16px",
    },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={styles.container}>
      <h2 className="mt-20px text-xl font-medium mb-4">Select a funding method</h2>
      <div style={styles.tabsStyle}>
        <button
          style={{
            ...styles.tabStyle,
            ...(isBankTransferOpen ? {} : styles.activeTabStyle),
          }}
          onClick={() => setIsBankTransferOpen(false)}
        >
          Card
        </button>
        <button
          style={{
            ...styles.tabStyle,
            ...(isBankTransferOpen ? styles.activeTabStyle : {}),
          }}
          onClick={() => setIsBankTransferOpen(true)}
        >
          Bank Transfer
        </button>
      </div>

      {!isBankTransferOpen ? (
        <form>
          <div style={styles.inputGroupStyle}>
            <label className="text-[#4B4B4B] text-xs md:text-base font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-2.5 py-3.5 bg-[#F9F9F9] text-xs md:text-base border border-[#ccc] text-[#4B4B4B] focus:outline-none focus:ring-1 focus:ring-[#ccc] rounded-[14px]"
            />
          </div>
          <div style={styles.inputGroupStyle}>
            <label className="text-[#4B4B4B] text-xs md:text-base font-semibold">
              Card number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full px-2.5 py-3.5 bg-[#F9F9F9] text-xs md:text-base border border-[#ccc] text-[#4B4B4B] focus:outline-none focus:ring-1 focus:ring-[#ccc] rounded-[14px]"
            />
          </div>
          <div style={styles.halfInputGroupStyle}>
            <div style={styles.inputGroupStyle}>
              <label className="text-[#4B4B4B] text-xs md:text-base font-semibold">
                Expiring date
              </label>
              <input
                type="text"
                name="expDate"
                value={formData.expDate}
                onChange={handleChange}
                style={styles.halfInputStyle}
                className="w-full px-2.5 py-3.5 bg-[#F9F9F9] text-xs md:text-base border border-[#ccc] text-[#4B4B4B] focus:outline-none focus:ring-1 focus:ring-[#ccc] rounded-[14px]"
              />
            </div>
            <div className="ml-8" style={styles.inputGroupStyle}>
              <label className="text-[#4B4B4B] text-xs md:text-base font-semibold">
                CCV
              </label>
              <input
                type="text"
                name="ccv"
                value={formData.ccv}
                onChange={handleChange}
                style={styles.halfInputStyle}
                className="w-full px-2.5 py-3.5 bg-[#F9F9F9] text-xs md:text-base border border-[#ccc] text-[#4B4B4B] focus:outline-none focus:ring-1 focus:ring-[#ccc] rounded-[14px]"
              />
            </div>
          </div>
          <div style={styles.inputGroupStyle}>
            <span
              className="text-[#4B4B4B] text-xs md:text-base font-semibold"
              style={styles.linkStyle}
              onClick={() =>
                alert("Add new card functionality not implemented.")
              }
            >
              Add New Card
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-[#08418A] text-white px-2.5 py-3.5 rounded-[14px] hover:bg-opacity-80 transition duration-300"
          >
            Top-Up
          </button>
        </form>
      ) : (
        <BankTransferModal
          isOpen={isBankTransferOpen}
          onClose={() => setIsBankTransferOpen(false)}
        />
      )}
    </div>
  );
};

export default PaymentForm;
