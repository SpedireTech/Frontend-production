import React, { useState } from "react";
import SideBarData from "./SideBarData";

const SideBar = () => {
  return (
    <div className="w-full flex justify-center bg-hero h-screen xl:h-[854px]">
      <SideBarData />
    </div>
  );
};

export default SideBar;
