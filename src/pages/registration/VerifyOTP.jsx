import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import logo from "../../assets/spedire.png";
import axios from "axios";
import Lady from "../../assets/VeryOtp.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const PhoneVerification = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (index) => (e) => {
    const newCode = [...code];
    if (e.target.validity.valid) {
      newCode[index] = e.target.value;
      setCode(newCode);
      if (index < code.length - 1 && e.target.value) {
        document.forms[0].elements[index + 1].focus();
      }
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);
    const token = localStorage.getItem("userToken");
    try {
      const response = await axios.get(
        "http://44.223.68.243:8080/api/v1/otp/resendOtp",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setIsResending(false);
      toast.success("Code Resent Successfully");
    } catch (error) {
      console.error("Error resending code:", error);
      setIsResending(false);
      toast.error("Failed to resend code");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const verificationCode = code.join("");
    const token = localStorage.getItem("userToken");
    console.log("Submitted code:", verificationCode);

    try {
      const response = await axios.post(
        "http://44.223.68.243:8080/api/v1/otp/verifyOtp",
        {
          verificationCode: verificationCode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Verification successful:", response.data);
      setIsLoading(false);
      toast.success("Verification Successful, kindly login");
      setTimeout(() => {
        window.location.href = "/login";
      }, 5000);
    } catch (error) {
      console.error("Verification error");
      setIsLoading(false);
      toast.error("Verification failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-stretch bg-blue-100 overflow-hidden font-hg">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="absolute top-0 left-0 p-4">
        <img src={logo} alt="Company Logo" className="h-12" />
      </div>

      <div className="hidden md:flex flex-1 justify-center items-center bg-light-blue">
        <img
          src={Lady}
          alt="Person with a thumbs up"
          className="max-w-[75%] transform translate-y-12"
        />
      </div>

      <div className="flex-1 flex justify-center items-center bg-white p-4">
        <div className="p-2 w-full max-w-lg transform -translate-y-10 text-left">
          <h1
            style={{ textAlign: "left" }}
            className="text-2xl md:text-3xl font-semibold text-center"
          >
            Phone number verification
          </h1>

          <p
            style={{ textAlign: "left", color: "#808080" }}
            className="text-gray-600 text-center mb-4 mt-4 text-base"
          >
            Kindly check your phone for a code has been sent to you
          </p>

          <form onSubmit={handleSubmit}>
            <p
              style={{ textAlign: "left", color: "#808080" }}
              className="font-semibold  mb-4 text-left text-base"
            >
              Enter code
            </p>
            <div className="grid grid-cols-6 gap-2 md:gap-10">
              {code.map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  pattern="[0-9]*"
                  className="w-12 h-12 md:w-20 md:h-20 rounded-lg border border-gray-300 text-center text-2xl mb-2"
                  onChange={handleChange(index)}
                  value={code[index]}
                />
              ))}
            </div>
            <p style={{ textAlign: "center", color: "black", cursor: "pointer", fontSize: "14px" }}
               onClick={!isResending ? handleResendCode : undefined}>
              Didn't receive a code?
              {isResending ? <FontAwesomeIcon icon={faSpinner} spin style={{ marginLeft: '5px' }} /> : " Resend code"}
            </p>
            <div className="mt-6">
              <Button
               width="100%"
               height="58px"
              
                textAlign="center"
                fontSize="24px"
                text="Verify"
                loading={isLoading}
                loadingText="Verifying..."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhoneVerification;
