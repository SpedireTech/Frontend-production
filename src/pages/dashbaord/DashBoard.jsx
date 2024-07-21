import React, { useState, useEffect } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavBarMobile from "./NavbarMobile";
import TotalAmountCard from "./TotalAmountCard";
import SideBar from "../../components/sidebar/SideBar";
import Cards from "../../components/reusables/Cards";
import Map from "./Map";
import RecentDeliveries from "./RecentDeliveries";

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
    <div className="w-full flex flex-col h-screen px-4">
      {isDesktop ? <NavbarDesktop /> : <NavBarMobile />}
      <div className="w-full gap-8 flex flex-col">
        <div className="flex w-full justify-between gap-x-2 items-center">
          <div>
            <TotalAmountCard />
          </div>
          <div className="flex flex-wrap">
            <Cards />
          </div>
        </div>
        <div className="max-w-full flex flex-col md:flex-row w-full gap-2">
          {/* <RecentDeliveries />
          <Map /> */}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
