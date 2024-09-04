import React, { useEffect, useState } from "react";
import wifiImage from "../../assets/wifi.svg";
import plusImage from "../../assets/plus.svg";

const TotalAmountCard = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const wifiStyle = isDesktop
    ? { width: "46px", height: "32px" }
    : { width: "24px", height: "24px" };

  const plusStyle = isDesktop
    ? { width: "30px", height: "30px" }
    : { width: "23px", height: "23px" };

  return (
    <div className="bg-blue-800 text-white rounded-lg shadow-md p-2 flex flex-col justify-between w-full h-80 md:w-120 md:h-80 px-6">
      <div className="flex justify-between items-start mt-5">
        <div className="text-sm font-semibold">Total amount</div>
        <img src={wifiImage} alt="WiFi" style={wifiStyle} />
      </div>
      <div className="flex justify-center items-center flex-grow">
        <span className="text-5xl font-bold">₦ 0.00</span>
      </div>
      <div className="flex justify-end items-center space-x-1 mb-5">
        <span className="text-sm font-semibold mr-2">Top-Up</span>
        <button className="bg-white text-blue-800 rounded-full p-1 mr-4">
          <img src={plusImage} alt="Plus" style={plusStyle} />
        </button>
      </div>
    </div>
  );
};

export default TotalAmountCard;
