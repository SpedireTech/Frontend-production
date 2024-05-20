import React, { useState, useEffect } from "react";
import logo from "../../assets/spedire.png";
import Lady from "../../assets/FirstLady.svg";
import Button from "../../components/Button/Button";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify CSS


const VerifyPhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!phoneNumber) {
      toast.error("Please enter a phone number"); // Using toast to show error
      return;
    }

    const apiUrl = "http://18.207.198.7:8080/api/v1/user/verifyPhoneNumber";
    const headers = {
      'Content-Type': 'application/json',
    };
    const body = {
      phoneNumber: phoneNumber
    };

    try {
      const response = await axios.post(apiUrl, body, { headers });
      toast.success("Phone number verified successfully!"); 
    } catch (error) {
      toast.error(`Error during API call: ${error.response?.data?.message || error.message}`); 
     
    }
  };

  return (
    <div className="min-h-screen flex flex-row items-stretch bg-blue-100 ">
      <div className="absolute top-0 left-0 p-4">
        <img src={logo} alt="Company Logo" className="h-12" />{" "}
      </div>
      <div
        className="flex-1 flex justify-center items-center bg-light-blue"
        style={{ display: isMobile ? "none" : "flex" }}
      >
        <img
          src={Lady}
          alt="Person with a thumbs up"
          style={{ maxWidth: "75%", transform: "translateY(60px)" }}
        />
      </div>

      <div className="flex-1 flex justify-center items-center bg-white p-4">
        <div
          className="p-2"
          style={{
            transform: "translateY(-40px)",
            textAlign: "left",
            width: "90%",
            maxWidth: "550px",
          }}
        >
          <div className="text-2xl md:text-3xl text-gray-600 font-semibold">
            Create Account
          </div>
          <div className="text-gray-600 mb-6 font-semibold text-base">
            Fill your information below
          </div>
          <div className="text-2xl md:text-3xl font-semibold">
            Enter Phone number
          </div>
          <div className="text-gray-600 mb-6 font-semibold text-base">
            We are requesting for phone number for verification
          </div>
          <form onSubmit={handleSubmit}>
            <p className="font-semibold text-gray-600 text-left mb-3 text-base">
              Phone number
            </p>
            <input
              type="tel"
              className="w-full p-3 border border-gray-300 rounded-lg text-sm"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className="mt-6">
              <Button width={"100%"} text="Submit" height={"50px"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyPhoneNumber;
