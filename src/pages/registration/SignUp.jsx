import React, { useState, useEffect } from "react";
import googleIcon from "../../assets/GoogleIcon.svg";
import logo from "../../assets/spedire.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageComponent from "../../components/reusables/Image";
import LoginImage from "../../assets/auth/login.svg";
import Button from "../../components/Button/Button";
import "../../App.css";
import PasswordInput from "../../components/reusables/PasswordInput";
import "../../App.css";
import InputComponent from "../../components/reusables/InputComponent";

const RegistrationForm = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    console.log("Form Data Submitted", formData);

    try {
      const response = await axios.post(
        "http://44.223.68.243:8080/api/v1/user/sign-up",
        {
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const otp = response.data.data.otp;
      const token = response.data.data.token;
      console.log("Registration successful:" + response.data.data);
      localStorage.setItem("userToken", token);
      setIsLoading(false);
      toast.success("Registration successful! OTP Code: " + otp);
      setTimeout(() => {
        window.location.href = "/verify-otp";
      }, 5000);
    } catch (error) {
      console.error("Registration error");
      toast.error("Registration failed");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-stretch bg-blue-100 overflow-hidden ">
      <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* <div className="absolute top-0 left-0 p-4 h-full w-full md:w-[20%]">
        <a href="/" style={{ cursor: "pointer" }}>
          <img src={logo} alt="Company Logo" className="h-15 mt-6 ml-8" />
        </a>
      </div> */}

      <div className="absolute top-0 left-0 p-4">
        <img src={logo} alt="Company Logo" className="h-12" />
      </div>


      <div className="hidden md:flex lg:w-1/2 h-screen bg-[#E7EEF8] items-center justify-center">
        <ImageComponent
          src={LoginImage}
          alt="Login image"
          height={"full"}
          width={"full"}
          fit={"center"}
          style={{ transform: "scale(1)" }}
        />
      </div>

      <div className="flex-1 flex justify-center items-center bg-white p-2">
        <div
          className="absolute top-0 p-4 "
          style={{
            transform: "translateX(-100) translateX(-310px)",
          }}
        ></div>

        <div
          className="p-2 mt-2"
          style={{
            transform: `translateY(50px) ${
              !isMobile ? "translateX(-40px) -translateY(10px)" : "translateX(0)"
            }`,
            width: isMobile ? "90%" : "75%",
            textAlign: "left",
            maxWidth: "550px",
          }}
        >
          <h2
             className="text-xl md:text-3xl font-semibold text-center"
            style={{ textAlign: "left" }}
          >
            Create an account with Spedire
          </h2>

          <div className="w-full my-2 mt-4 input-box justify-center flex items-center">
            <img
              src={googleIcon}
              alt="Continue with Google"
              className="h-full"
              // style={{ marginLeft: "140px", marginRight: "5px" }}
            />
            <p
              style={{ color: "#666666" }}
              className="flex text-base font-semibold ml-1"
            >
              Continue with Google
            </p>
          </div>

          <div className="relative flex py-3 items-center">
            <div
              style={{ color: "#808080" }}
              className="flex-grow border-t"
            ></div>
            <span style={{ color: "#808080" }} className="flex-shrink mx-2">
              or
            </span>
            <div
              style={{ color: "#808080" }}
              className="flex-grow border-t"
            ></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
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
              {/* <input
                type="text"
                name="fullName"
                placeholder="Jane"
                className="input-box"
                onChange={handleInputChange}
                value={formData.fullName}
              /> */}

              <InputComponent
                // label={"Email"}
                placeholder="Jane Doe"
                type="text"
                onChange={handleInputChange}
                value={formData.phoneNumber}
                // info={info}
              />

              <p
                style={{ color: "#808080" }}
                className="font-semibold mt-4 text-left mb-1 text-base"
              >
                Email address
              </p>

              <InputComponent
                // label={"Email"}
                placeholder="example@gmail.com"
                type="email"
                onChange={handleInputChange}
                value={formData.email}
                // info={info}
              />
              {/* <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="input-box"
                onChange={handleInputChange}
                value={formData.email}
              /> */}
              <p
                style={{ color: "#808080" }}
                className="font-semibold text-left mt-4 mb-1 text-base"
              >
                Phone number
              </p>
              {/* <input
                type="tel"
                name="phoneNumber"
                placeholder="234xxxxxxxxx"
                className="input-box"
                onChange={handleInputChange}
                value={formData.phoneNumber}
              /> */}

              <InputComponent
                // label={"Email"}
                placeholder="phone number"
                type="tel"
                onChange={handleInputChange}
                value={formData.phoneNumber}
                // info={info}
              />
              <p
                style={{ color: "#808080" }}
                className="font-semibold text-left mt-4 text-base mb-1"
              >
                Password
              </p>
              <PasswordInput
                placeholder="Enter Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                value={formData.password}
              />
              <div className="mt-6">
                <Button
                  width="100%"
                  height="58px"
                  text="Register"
                  loading={isLoading}
                  loadingText="Registering..."
                />
              </div>
            </div>
          </form>
          <div className="text-center mt-3 mb-20 text-base text-gray-600 font-semibold">
            Already have an account?{" "}
            <a
              href="/login"
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
