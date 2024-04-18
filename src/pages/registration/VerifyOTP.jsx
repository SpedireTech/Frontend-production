import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import logo from "../../assets/spedire.png";
import Lady from "../../assets/VeryOtp.svg";
const PhoneVerification = () => {
  const [code, setCode] = useState(["", "", "", ""]);
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
    newCode[index] = e.target.value;
    setCode(newCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const verificationCode = code.join("");
    console.log("Submitted code:", verificationCode);
    
  };

  return (
    <div className="min-h-screen flex flex-row items-stretch bg-blue-100 overflow-hidden">
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
          className=" p-2"
          style={{
            transform: "translateY(-100px)",
            textAlign: "left",
            width: "70%",
            maxWidth: "550px",
          }}
          
        >
          <h1  style={{ textAlign: 'left' }} className="text-xl font-semibold text-center mb-6">
            Phone number Verification
          </h1>
          <p  style={{ textAlign: 'left' }} className="text-gray-600 text-center mb-6">
          Kindly check your email code has been sent to your email
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
          <p className="font-semibold text-left mt-3 text-sm">Enter code</p>
            <div className="grid grid-cols-4 gap-4">
           
              {code.map((_, index) => (
                
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-full h-12 border border-gray-300 rounded-lg text-center text-xl"
                  onChange={handleChange(index)}
                  value={code[index]}
                />
              ))}
            </div>
            <div className="mt-6">
                <Button width={"100%"} text="Register" height={"50px"} />
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhoneVerification;
