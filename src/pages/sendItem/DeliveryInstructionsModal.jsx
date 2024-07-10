import React from "react";
import GreenMark from "../../assets/greenMark.svg";

const DeliveryInstructionsModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg md:max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Delivery instructions</h2>
        </div>
        <p className="text-gray-500 mb-4 text-center md:text-left">
          Remember to share delivery details with your recipient and ensure your
          package meets the following requirements:
        </p>
        <ul className="list-none pl-0 mb-4">
          {[
            "Handed over to the courier in person by the roadside.",
            "Collected by the recipient by the roadside.",
            "Packed into a box, bag, or envelope.",
            "Fits easily in the vehicle without causing damage.",
            "Weighs less than 5kg.",
            "Contains no prohibited items and does not exceed the local regulations' permitted goods value.",
          ].map((instruction, index) => (
            <React.Fragment key={index}>
              <li className="flex items-start mb-2">
                <div className="flex-shrink-0">
                  <img
                    src={GreenMark}
                    alt="Check Mark"
                    className="w-6 h-6"
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
                <span className="ml-2">{instruction}</span>
              </li>
              {index < 5 && (
                <div
                  className="border-b my-2 w-full"
                  style={{ borderColor: "#ccc" }}
                ></div>
              )}
            </React.Fragment>
          ))}
        </ul>
        <div className="text-sm text-center text-gray-500">
          By using Spedire, you agree to our{" "}
          <a href="/terms" className="text-blue-500">
            terms
          </a>{" "}
          and{" "}
          <a href="/regulations" className="text-blue-500">
            local regulations
          </a>
          .
        </div>
        <button
          className="w-full mt-4 bg-button text-white py-2 rounded-lg"
          onClick={closeModal}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default DeliveryInstructionsModal;
