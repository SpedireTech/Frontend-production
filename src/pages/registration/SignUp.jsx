import React, { useState, useEffect } from "react";
import googleIcon from "../../assets/GoogleIcon.svg";
import logo from "../../assets/spedire.png";
import Lady from "../../assets/FirstLady.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageComponent from "../../components/reusables/Image";
import BackIcon from "../../assets/BackIcon.svg";
import Button from "../../components/Button/Button";
import "../../App.css";
import PasswordInput from "../../components/reusables/PasswordInput";
import "../../App.css";

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
    setIsLoading(true); 

    console.log("Form Data Submitted", formData);

    try {
      const response = await axios.post(
        "http://54.235.37.244:8080/api/v1/user/sign-up",
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

      const otp = response.data.otp;
      const token = response.data.token;
      console.log("Registration successful:" + response.data);
      toast.success("Registration successful! OTP Code: " + otp);

      if (token) {
        localStorage.setItem("userToken", token);
        console.log("Token stored:", token);

        setTimeout(() => {
          window.location.href = "/verify-otp";
        }, 5000);
        setIsLoading(false); // Reset loading to false when the process is complete
      } else {
        console.log("No token received from the API");
        setIsLoading(false); // Reset loading to false when the process is complete
      }
    } catch (error) {
      console.error("Registration error");
      // const errorMessage = error.response && error.response.data && error.response.data.error ? error.response.data.error : 'Unknown error';
      toast.error("Registration failed");
      setIsLoading(false); // Reset loading to false when the process is complete
    }
  };

  return (
    <div className="min-h-screen flex flex-row items-stretch bg-blue-100 overflow-hidden font-hg">
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
      <div className="absolute top-0 left-0 p-4 h-full w-[20%]">
        <a href="/" style={{ cursor: "pointer" }}>
          <img src={logo} alt="Company Logo" className="h-15 mt-6 ml-8" />
        </a>
      </div>

      <div
        className="flex lg:w-1/2 h-screen bg-[#E7EEF8] items-center justify-center "
        style={{ display: isMobile ? "none" : "flex" }}
      >
        {/* <div className="absolute top-0 left-0 p-4">
					<img src={logo} alt="Company Logo" className="h-12" />
				</div>
			 */}
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
          {/* <a href="/" style={{ cursor: "pointer" }}>
            <img
              src={BackIcon}
              alt="Back Icon"
              className="h-12"
              style={{ width: "24px", height: "24px" }}
            />
          </a> */}
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

              <p
                style={{ color: "#808080" }}
                className=" font-semibold text-left mt-4 text-base mb-1"
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
                  width="480px"
                  height="58px"
                  text="Register"
                  loading={isLoading}
                  loadingText="Registering..."
                />
              </div>
            </div>
          </form>
          <div className="text-center mt-3 mb-20 text-base  text-gray-600 font-semibold">
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
