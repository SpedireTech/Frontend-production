import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import logo from "../../assets/spedire.png";
import BackIcon from "../../assets/BackIcon.svg";
import axios from 'axios';
import Lady from "../../assets/VeryOtp.svg";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
const PhoneVerification = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
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
  const handleChange = (index) => (e) => {
    const newCode = [...code];
    if (e.target.validity.valid) { // Ensures only numeric input
      newCode[index] = e.target.value;
      setCode(newCode);
      // Auto-focus to the next input box
      if (index < code.length - 1 && e.target.value) {
        document.forms[0].elements[index + 1].focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    const token = localStorage.getItem('userToken');
    console.log("Submitted code:", verificationCode);

    try {
      const response = await axios.post('http://54.235.37.244:8080/api/v1/otp/verifyOtp', {
        otp: verificationCode,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('Verification successful:', response.data);
      toast.success('Verification Successful, kindly login');
      setTimeout(() => {
        window.location.href = '/';
      }, 5000); 
     
    } catch (error) {
      console.error('Verification error');
      toast.error('Verification failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-row items-stretch bg-blue-100 overflow-hidden font-hg">
       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      
      <div className="absolute top-0 left-0 p-4">
        <img src={logo} alt="Company Logo" className="h-12" />
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
          className="absolute top-0 p-4"
          style={{
            left: isMobile ? "0" : "900px",
            // transform: isMobile ? 'translateX(0)' : 'translateX(-310px)',
            transform: isMobile ? "translateY(80px)" : "translateY(0)",
          }}
        >
          <a href="/" style={{ cursor: "pointer" }}>
            <img
              src={BackIcon}
              alt="Back Icon"
              className="h-12"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
        </div>

        <div
          className=" p-2"
          style={{
            transform: "translateY(-40px)",
            textAlign: "left",
            width: "100%",
            maxWidth: "550px",
          }}
        >
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
          <form onSubmit={handleSubmit} className="">
            <p
              style={{ textAlign: "left", color: "#808080" }}
              className="font-semibold  mb-4 text-left text-base"
            >
              Enter code
            </p>
            <div className="grid grid-cols-6 gap-0.5">
              {code.map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  pattern="[0-9]*"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "8px",
                    border: "1px solid #b0b0b0",
                    textAlign: "center",
                    fontSize: "24px",
                    marginBottom: "8px",
                  }}
                  onChange={handleChange(index)}
                  value={code[index]}
                />
              ))}
            </div>
            <div className="mt-6">
              <Button width={"100%"} text="Verify" height={"46px"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhoneVerification;
