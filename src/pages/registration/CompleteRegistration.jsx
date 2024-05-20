// import React, { useState } from 'react';
// import { FaGoogle } from 'react-icons/fa'; 
// import Man from "../../assets/Man.svg"
// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     location: '',
//     password: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const GoogleAuthLogin = () => {
// 		window.location.href = `http://localhost:8080/login/oauth2/autorcode/google`
//   }


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data Submitted', formData);

//     const requestBody = {
//         email: formData.email,
//         fullName: formData.fullName,
//         password: formData.password,
//         location: formData.location
//     };

//     fetch('http://localhost:8080/api/v1/user/sign-up', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestBody),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Failed to register user');
//         }
//         return response.json();
//     })
//     .then(data => {
//         const token = data.token;
//         window.location.href = `http://localhost:5173/verify-number?token=${token}&oauth=false`;
//     })
//     .catch(error => {
//         console.error('Registration failed', error);
//     });
// };


//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log('Form Data Submitted', formData);
//   //   // Add logic to handle form submission, such as sending data to an API.
//   // };

//   return (
//     <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-blue-100 p-4">
 
//       <div className="mt-4 text-gray-600">
//               <img
//                 src={Man}
//                 alt="Make Money"
//                 className="full"
//               />
//             </div>

//       <div className="bg-white rounded-lg shadow-md p-8 w-full lg:max-w-md">
//         <h2 className="text-xl font-semibold text-center">Create an Account with Spediree</h2>
//         <div className="my-4">
//           <button className="flex items-center justify-center w-full p-3 rounded-lg bg-gray-100 hover:bg-gray-200" onClick={GoogleAuthLogin}>
//             <FaGoogle className="mr-2" /> Continue with Google
//           </button>
//         </div>
//         <div className="relative flex py-5 items-center">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="flex-shrink mx-4 text-gray-400">or</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full name"
//               className="w-full p-3 border border-gray-300 rounded-lg"
//               onChange={handleInputChange}
//               value={formData.fullName}
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email address"
//               className="w-full p-3 border border-gray-300 rounded-lg"
//               onChange={handleInputChange}
//               value={formData.email}
//             />
//             <input
//               type="text"
//               name="location"
//               placeholder="Location"
//               className="w-full p-3 border border-gray-300 rounded-lg"
//               onChange={handleInputChange}
//               value={formData.location}
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="w-full p-3 border border-gray-300 rounded-lg"
//               onChange={handleInputChange}
//               value={formData.password}
//             />
//             <button
//               type="submit"
//               className="w-full p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//         <div className="text-center mt-4">
//           Already have an account? <a href="#login" className="text-blue-600 hover:underline">Login</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;




import React, { useState, useEffect, useRef } from "react";
import { LoadScript } from "@react-google-maps/api";
import googleIcon from "../../assets/GoogleIcon.svg";
import logo from "../../assets/spedire.png";
import Lady from "../../assets/CompleteReg.svg";
import Button from "../../components/Button/Button";

const libraries = ["places"];

const RegistrationForm = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    location: "",
    password: "",
  });
  const [predictions, setPredictions] = useState([]);
  const autocompleteService = useRef(null);
  const inputRef = useRef(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "location" && value) {
      if (!autocompleteService.current) {
        autocompleteService.current = new window.google.maps.places.AutocompleteService();
      }
      autocompleteService.current.getPlacePredictions(
        {
          input: value,
          componentRestrictions: { country: "NG" },
        },
        (predictions, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            const filteredPredictions = predictions.filter((prediction) =>
              prediction.description.includes("Lagos")
            );
            setPredictions(filteredPredictions);
          } else {
            setPredictions([]);
          }
        }
      );
    }
  };

  const handlePredictionClick = (prediction) => {
    setFormData((prevData) => ({
      ...prevData,
      location: prediction.description,
    }));
    setPredictions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAGHpgeiFAzUQqrosmbd2G531zmD9zgiI8" libraries={libraries}>
      <div className="min-h-screen flex flex-row items-stretch bg-blue-100 overflow-hidden">
        <div className="absolute top-0 left-0 p-4">
          <img src={logo} alt="Company Logo" className="h-12" />
        </div>
        <div className="flex-1 flex justify-center items-center bg-light-blue" style={{ display: isMobile ? "none" : "flex" }}>
          <img src={Lady} alt="Person with a thumbs up" style={{ maxWidth: "75%", transform: "translateY(60px)" }} />
        </div>

        <div className="flex-1 flex justify-center items-center bg-white p-2">
          <div className="p-2 mt-10" style={{ transform: "translateY(20px)", textAlign: "left", width: "70%", maxWidth: "550px" }}>
            <h2 className="text-sm md:text-xl lg:text-2xl font-bold text-center" style={{ textAlign: "left" }}>
              Create an Account with Spediree
            </h2>

            <div className="my-2">
              <button className="flex items-center justify-center w-full p-4 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm">
                <img src={googleIcon} alt="Continue with Google" className="mr-2 h-6" />
                Continue with Google
              </button>
            </div>
            <div className="relative flex py-3 items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-2 text-gray-400">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-3 mt-4">
                <p className="font-semibold text-left mt-3 text-sm">Full name</p>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                  onChange={handleInputChange}
                  value={formData.fullName}
                />
                <p className="font-semibold text-left mt-3 text-sm">Email Address</p>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                  onChange={handleInputChange}
                  value={formData.email}
                />
                <p className="font-semibold text-left mt-3 text-sm">Home Address</p>
                <input
                  ref={inputRef}
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                  onChange={handleInputChange}
                  value={formData.location}
                />
                {predictions.length > 0 && (
                  <ul className="border border-gray-300 rounded-lg">
                    {predictions.map((prediction) => (
                      <li
                        key={prediction.place_id}
                        className="p-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handlePredictionClick(prediction)}
                      >
                        {prediction.description}
                      </li>
                    ))}
                  </ul>
                )}
                <p className="font-semibold text-left mt-3 text-sm">Password</p>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                  onChange={handleInputChange}
                  value={formData.password}
                />
                <p className="font-semibold text-left mt-3 text-sm">Confirm password</p>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                  onChange={handleInputChange}
                  value={formData.password}
                />
                <div className="mt-6">
                  <Button width={"100%"} text="Register" height={"50px"} />
                </div>
              </div>
            </form>
            <div className="text-center mt-3 mb-6 text-lg">
              Already have an account?
              <a href="#login" className="text-blue-600 hover:underline">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </LoadScript>
  );
};

export default RegistrationForm;
