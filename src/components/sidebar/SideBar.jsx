import React, { useState } from "react";
import SideBarData from "./SideBarData";

const SideBar = () => {
  return (
    <div className="w-full flex justify-center bg-hero h-full xl:h-[920px] 2xl:h-[1200px]">
      <SideBarData />
    </div>
  );
};

export default SideBar;
