import React, { useState, useEffect } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavBarMobile from "./NavbarMobile";
import TotalAmountCard from "./TotalAmountCard";
import SideBar from "../../components/sidebar/SideBar";
import Cards from "../../components/reusables/Cards";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex w-full h-screen">
      <div className="w-[20%] bg-blue-500">
        <SideBar />
      </div>
      <div className="w-[80%] flex flex-col">
        {isDesktop ? <NavbarDesktop /> : <NavBarMobile />}
        <div className="p-4 w-full gap-8 flex flex-col">
          <div className="flex w-full justify-between items-center">
            <div>
              <TotalAmountCard />
            </div>
            <div className="  flex flex-wrap">
              <Cards />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
