import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faWifi } from "@fortawesome/free-solid-svg-icons";

const TotalAmountCard = () => {
    return (
        <div className="bg-blue-800 text-white rounded-lg shadow-md p-2 flex flex-col justify-between w-64 h-56 md:h-64 m-2">
            <div className="flex justify-between items-start">
                <div className="text-xs">Total amount</div>
                <FontAwesomeIcon icon={faWifi} className="w-3 h-3" />
            </div>
            <div className="flex justify-center items-center flex-grow">
                <span className="text-5xl font-bold">₦ 0.00</span>
            </div>
            <div className="flex justify-end items-center space-x-1">
                <span className="text-xs">Top-Up</span>
                <button className="bg-white text-blue-800 rounded-full p-1">
                    <FontAwesomeIcon icon={faPlus} className="w-3 h-3" />
                </button>
            </div>
        </div>
    );
};

export default TotalAmountCard;
