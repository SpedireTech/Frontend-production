import React from "react";
import map from "../../assets/map.png";

const NewTask = () => {
  return (
    <div className="w-full h-full bg-blue-500 mx-auto px-4 bg-#F2F2F2">
      <div className="w-full flex flex-col bg-red-500 items-center justify-center">
        <img src={map} className="w-full object-cover" alt="maps" />
      </div>
      <div className="w-full bg-white ">
        <p>Order name </p>
        <h3>Hand bag</h3>
      </div>
    </div>
  );
};

export default NewTask;
