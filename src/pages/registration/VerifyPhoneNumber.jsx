import React, { useState } from "react";
import Lady from "../../assets/FirstLady.svg";
import Button from "../../components/Button/Button";

const VerifyPhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    if (!phoneNumber) {
      alert("Please enter a phone number");
      return;
    }
    try {
      const response = await fetch("https://your-endpoint.com/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: phoneNumber }),
      });
      const data = await response.json();
      // Handle response data
      console.log(data);
      alert("Verification is sent!");
    } catch (error) {
      console.error("Error during verification:", error);
      alert("Failed to verify. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden md:flex">
        {/* Left side with image and text */}
        <div className="md:w-1/2 flex items-center bg-blue-200">
          <div className="p-8">
            <div className="mt-4 text-gray-600">
              <img src={Lady} alt="Make Money" className="full" />
            </div>
          </div>
        </div>

        {/* Right side with form */}
        <div className="md:w-1/2 flex flex-col">
          <div className="p-8">
            <div className="text-lg font-semibold mb-4">Enter Phone number</div>
            <div className="text-gray-600 mb-8">
              We are requesting for phone number for verification
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="tel"
                className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
                <div className="mt-4">
                <Button width={"385px"} text="Submit" height={"64px"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPhoneNumber;
