import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Man from "../../assets/Man.svg";
import Button from "../../components/Button/Button";
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    location: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-blue-100 p-4">
      <div className="mt-4 text-gray-600">
        <img src={Man} alt="Make Money" className="full" />
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 w-full lg:max-w-md">
        <h2 className="text-xl font-semibold text-center">
          Create an Account with Spediree
        </h2>
        <div className="my-4">
          <button className="flex items-center justify-center w-full p-3 rounded-lg bg-gray-100 hover:bg-gray-200">
            <FaGoogle className="mr-2" /> Continue with Google
          </button>
        </div>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <text className="text-sm font-semibold text-center ">
          {" "}
          Kindly fill in the right details to get started with spediree
        </text>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mt-8">
            {/* <text className="text-l text-center "> Full name</text> */}
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={handleInputChange}
              value={formData.fullName}
            />
            {/* <text className="text-l text-center "> Email address</text> */}
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={handleInputChange}
              value={formData.email}
            />
            {/* <text className="text-l text-center "> Home address</text> */}
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={handleInputChange}
              value={formData.location}
            />
            {/* <text className="text-l text-center "> Password</text> */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={handleInputChange}
              value={formData.password}
            />
            <div className="mt-4">
              <Button width={"385px"} text="Register" height={"64px"} />
            </div>
          </div>
        </form>
        <div className="text-center mt-4">
          Already have an account?{" "}
          <a href="#login" className="text-blue-600 hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
