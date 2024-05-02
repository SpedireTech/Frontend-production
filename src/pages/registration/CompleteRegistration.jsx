import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa'; // You'll need to install react-icons using npm or yarn
import Man from "../../assets/Man.svg"
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    location: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const GoogleAuthLogin = () => {
		window.location.href = `http://localhost:8080/login/oauth2/autorcode/google`
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted', formData);

    const requestBody = {
        email: formData.email,
        fullName: formData.fullName,
        password: formData.password,
        location: formData.location
    };

    fetch('http://localhost:8080/api/v1/user/sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to register user');
        }
        return response.json();
    })
    .then(data => {
        const token = data.token;
        window.location.href = `http://localhost:5173/verify-number?token=${token}&oauth=false`;
    })
    .catch(error => {
        console.error('Registration failed', error);
    });
};


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form Data Submitted', formData);
  //   // Add logic to handle form submission, such as sending data to an API.
  // };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-blue-100 p-4">
 
      <div className="mt-4 text-gray-600">
              <img
                src={Man}
                alt="Make Money"
                className="full"
              />
            </div>

      <div className="bg-white rounded-lg shadow-md p-8 w-full lg:max-w-md">
        <h2 className="text-xl font-semibold text-center">Create an Account with Spediree</h2>
        <div className="my-4">
          <button className="flex items-center justify-center w-full p-3 rounded-lg bg-gray-100 hover:bg-gray-200" onClick={GoogleAuthLogin}>
            <FaGoogle className="mr-2" /> Continue with Google
          </button>
        </div>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={handleInputChange}
              value={formData.fullName}
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={handleInputChange}
              value={formData.email}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={handleInputChange}
              value={formData.location}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={handleInputChange}
              value={formData.password}
            />
            <button
              type="submit"
              className="w-full p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          Already have an account? <a href="#login" className="text-blue-600 hover:underline">Login</a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
