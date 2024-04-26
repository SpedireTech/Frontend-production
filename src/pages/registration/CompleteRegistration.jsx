import React, { useState, useEffect } from "react";
import googleIcon from "../../assets/GoogleIcon.svg";
import logo from "../../assets/spedire.png";
import Lady from "../../assets/CompleteReg.svg";
import Button from "../../components/Button/Button";

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
    <div className="min-h-screen flex flex-row items-stretch bg-blue-100 overflow-hidden font-hg">
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

      <div className="flex-1 flex justify-center items-center bg-white p-2">
        <div
          className="p-2 mt-10"
          style={{
            transform: "translateY(50px)",
            textAlign: "left",
            width: "90%",
            maxWidth: "550px",
          }}
        >
          <h2
            className="text-2xl md:text-3xl font-bold text-center"
            style={{ textAlign: "left" }}
          >
            Create an Account with Spedire
          </h2>

          <div className="my-2">
            <button className="flex items-center justify-center w-full p-4 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm">
              <img
                src={googleIcon}
                alt="Continue with Google"
                className="mr-2 h-6 text-gray-600 font-semibold"
              />
              Continue with Google
            </button>
          </div>
          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-2 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6 mt-4">
              <p className="font-semibold text-left mt-3 text-gray-600 text-base">Full name</p>
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                onChange={handleInputChange}
                value={formData.fullName}
              />
              <p className=" font-semibold text-left mt-4 text-gray-600 text-base">
                Email Address
              </p>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                onChange={handleInputChange}
                value={formData.email}
              />
              <p className=" font-semibold text-left mt-4 text-base text-gray-600">
                Home Address
              </p>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                onChange={handleInputChange}
                value={formData.location}
              />
              <p className=" font-semibold text-left mt-4 text-base text-gray-600">Password</p>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg text-base"
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
              <div className="mt-10">
                <Button width={"100%"} text="Register" height={"50px"} />
              </div>
            </div>
          </form>
          <div className="text-center mt-3 mb-20 text-base  text-gray-600 font-semibold" >
            Already have an account? {" "}
            <a href="#login" className="text-blue-600 hover:underline text-base">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
