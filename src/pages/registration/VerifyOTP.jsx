import React, { useState } from 'react';

const PhoneVerification = () => {
  const [code, setCode] = useState(['', '', '', '']);

  const handleChange = (index) => (e) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here. This would involve
    // concatenating the code array to a single string and sending it to a backend.
    const verificationCode = code.join('');
    console.log('Submitted code:', verificationCode);
    // Submit code
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-xl font-semibold text-center mb-6">Phone number Verification</h1>
        <p className="text-gray-600 text-center mb-6">
          Kindly enter the code sent to your phone number 
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
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
          <button
            type="submit"
            className="w-full h-12 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhoneVerification;
