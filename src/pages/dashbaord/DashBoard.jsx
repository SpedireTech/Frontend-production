import React from "react";
import Navbar from "./Navbar";
import TotalAmountCard from "./TotalAmountCard";

const DashBoard = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex flex-col md:flex-row items-start p-4 md:p-8">
                <TotalAmountCard className="w-full md:w-auto" />
              
            </div>
        </div>
    );
};

export default DashBoard;
