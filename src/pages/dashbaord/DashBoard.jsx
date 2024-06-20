import React, { useState, useEffect } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavBarMobile from "./NavbarMobile";
import TotalAmountCard from "./TotalAmountCard";

import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {isDesktop ? <NavbarDesktop /> : <NavBarMobile />}
      <div className="flex-grow flex flex-col md:flex-row items-start p-4 md:p-1">
        <TotalAmountCard />
      </div>
      <div className="flex-grow flex flex-col md:flex-row items-start p-4 md:p-1">
        <button
          onClick={() => navigate("/deliver-item")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Open Delivery Form
        </button>
      </div>
    </div>
  );
};

export default DashBoard;
