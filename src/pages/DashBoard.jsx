import React from "react";
import SideBar from "../components/sidebar/SideBar";
import Cards from "../components/reusables/Cards";
// import { getStoredItem } from "../util/lib";

const DashBoard = () => {
  // const user = getStoredItem("user");
  return (
    <div className="max-w-full relative">
      {/* <div className="flex-grow flex flex-col items-center justify-center">
        DashBoard
      </div> */}
      <div className="flex justify-between w-full">
        <div className="w-[28%] h-full bg-blue-500">
          <SideBar />
        </div>
        <div className="w-[72%] h-screen">
          <Cards />
        </div>
      </div>
      <div className="flex-grow flex-col items-center justify-center">
        {/* {user.name} */}
      </div>
    </div>
  );
};

export default DashBoard;
