import React, { useState, useEffect } from "react";
import logo from "../../assets/spedire.png";
import Lady from "../../assets/FirstLady.svg";
import Button from "../../components/Button/Button";

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
      alert("Please enter a phone number");
      return;
    }
  
  };

  return (
    <div className="min-h-screen flex flex-row items-stretch bg-blue-100">
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
            transform: "translateY(-100px)",
            textAlign: "left",
            width: "70%",
            maxWidth: "550px",
          }}
        >
          <div className="text-lg font-semibold mb-4">Enter Phone number</div>
          <div className="text-gray-600 mb-8">
            We are requesting for phone number for verification
          </div>
          <form onSubmit={handleSubmit}>
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
