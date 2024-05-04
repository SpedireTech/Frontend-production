import React, { useState, useEffect } from "react";
import googleIcon from "../../assets/GoogleIcon.svg";
import logo from "../../assets/spedire.png";
import Lady from "../../assets/transparent_man.png";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

import BackIcon from "../../assets/BackIcon.svg";
import Button from "../../components/Button/Button";
import "../../App.css";

const RegistrationForm = () => {
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

  const [formData, setFormData] = useState({
    fullName: "",
    // lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);
  
    try {
      const response = await axios.post('http://54.235.37.244:8080/api/v1/user/sign-up', {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const { token, otp } = response.data;
      console.log('Registration successful:');
      toast.success('Registration successful! OTP Code: ' + otp);
  
     
      if (token) {
        localStorage.setItem('userToken', token); 
        console.log('Token stored:', token);

        setTimeout(() => {
          window.location.href = '/verify-otp';
        }, 5000); 

      } else {
        console.log('No token received from the API');
      }
    } catch (error) {
      console.error('Registration error');
      // const errorMessage = error.response && error.response.data && error.response.data.error ? error.response.data.error : 'Unknown error';
      toast.error('Registration failed');
    }
  };
  
  return (
    <div className="min-h-screen flex flex-row items-stretch bg-blue-100 overflow-hidden font-hg">
       <ToastContainer position="top-right" autoClose={10000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="absolute top-0 left-0 p-4 h-full w-[20%]">
        <img src={logo} alt="Company Logo" className="h-15 mt-6 ml-8" />
      </div>
      <div
        className="flex-1 flex flex-col justify-center items-center bg-light-blue"
        style={{ display: isMobile ? "none" : "flex",  transform: "translateY(-30px)", }}
      >
        {/* <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
          Make Money While <br /> Your move
        </h1>
        <img
          src={Lady}
          alt="Person with a thumbs up"
          style={{
            maxWidth: "75%",
            transform: "translateY(20px)",
            borderRadius: "30px",
          }} 
        /> */}
      </div>

      <div className="flex-1 flex justify-center items-center bg-white p-2">
        <div
          className="absolute top-0 p-4 "
          style={{
            transform: "translateX(-100) translateX(-310px)",
          }}
          // style={{
          //   transform: isMobile ? "translateX(0)" : "translateX(-310px)",
          // }}
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
          className="p-2 mt-2"
          style={{
            transform: `translateY(50px) ${
              !isMobile ? "translateX(-40px)" : "translateX(0)"
            }`,
            width: isMobile ? "90%" : "75%",

            textAlign: "left",

            maxWidth: "550px",
          }}
        >
          <h2
            className="text-xl md:text-3xl font-bold text-center"
            style={{ textAlign: "left" }}
          >
            Create an account with Spedire
          </h2>

          <div className="my-2 mt-4 input-box flex items-center">
            <img
              src={googleIcon}
              alt="Continue with Google"
              className="h-full"
              style={{ marginLeft: "140px", marginRight: "5px" }}
            />
            <p
              style={{ color: "#666666" }}
              className="flex-grow text-base font-semibold"
            >
              Continue with Google
            </p>
          </div>

          <div className="relative flex py-3 items-center">
            <div
              style={{ color: "#808080" }}
              className="flex-grow border-t "
            ></div>
            <span style={{ color: "#808080" }} className="flex-shrink mx-2 ">
              or
            </span>
            <div
              style={{ color: "#808080" }}
              className="flex-grow border-t "
            ></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className=" mt-3">
              <p
                style={{ color: "#808080" }}
                className="font-semibold text-left mt-3 text-base"
              >
                Kindly fill in the right details to get started with spedire
              </p>
              <p
                style={{ color: "#808080" }}
                className="font-semibold text-left mt-3 mb-1 text-base"
              >
                Full name
              </p>
              <input
                type="text"
                name="fullName"
                placeholder="Jane"
                className="input-box"
                onChange={handleInputChange}
                value={formData.fullName}
              />
               {/* <p
                style={{ color: "#808080" }}
                className="font-semibold text-left mt-4 mb-1 text-base"
              >
                Last name
              </p>
              <input
                type="text"
                name="lastName"
                placeholder="Deo"
                className="input-box"
                onChange={handleInputChange}
                value={formData.lastName}
              /> */}
              <p
                style={{ color: "#808080" }}
                className=" font-semibold mt-4 text-left mb-1 text-base"
              >
                Email address
              </p>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com "
                className="input-box"
                onChange={handleInputChange}
                value={formData.email}
              />
              <p
                style={{ color: "#808080" }}
                className=" font-semibold text-left mt-4 mb-1 text-base"
              >
                Phone number
              </p>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="234xxxxxxxxx"
                className="input-box"
                onChange={handleInputChange}
                value={formData.phoneNumber}
              />
              {/* <p className=" font-semibold text-left mt-4 text-base text-gray-600">
                Home Address
              </p>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-sm"
                onChange={handleInputChange}
                value={formData.location}
              /> */}
              <p
                style={{ color: "#808080" }}
                className=" font-semibold text-left mt-4 text-base mb-1"
              >
                Password
              </p>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input-box"
                onChange={handleInputChange}
                value={formData.password}
              />{" "}
              {/* <p className=" font-semibold text-left mt-3 text-sm">
                Confirm password
              </p>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                onChange={handleInputChange}
                value={formData.password}
              /> */}
              <div className="mt-8">
                <Button width={"499px"} text="Register" height={"59px"} />
              </div>
            </div>
          </form>
          <div className="text-center mt-3 mb-20 text-base  text-gray-600 font-semibold">
            Already have an account?{" "}
            <a
              href="#login"
              className="text-blue-600 hover:underline text-base"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
