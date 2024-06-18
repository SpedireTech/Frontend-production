import React from "react";
import SideBar from "../components/sidebar/SideBar";
import Card from "../components/reusables/Card";
// import { getStoredItem } from "../util/lib";

const DashBoard = () => {
  // const user = getStoredItem("user");
  return (
    <div className="bg-red-600 max-w-full relative">
      {/* <div className="flex-grow flex flex-col items-center justify-center">
        DashBoard
      </div> */}
      <div className="flex justify-between w-full">
        <div className="w-[28%] h-full bg-blue-500">
          <SideBar />
        </div>
        <div className="bg-yellow-500 w-[72%] h-screen">
          <Card />
        </div>
      </div>
      <div className="flex-grow flex-col items-center justify-center">
        {/* {user.name} */}
      </div>
    </div>
  );
};

export default DashBoard;
