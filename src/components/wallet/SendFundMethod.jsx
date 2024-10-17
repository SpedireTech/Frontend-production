import React, { useState } from "react";
import FundWallet from "./FundWallet";
import SendFund from "./SendFund";
import cancel from "../../assets/blue-cancel.svg";

const SendFundMethod = ({ onClose }) => {
	const [activeTab, setActiveTab] = useState("wallet");

	return (
		<div className="mx-auto flex flex-col mt-1 ml-2 pl-8 flex-grow bg-transparent relative">
			<h2 className="text-2xl font-semibold mb-2">Select a payment method</h2>
			<button className="absolute top-2 right-6" onClick={onClose}>
				<img
					src={cancel}
					alt="close"
					className="w-5 h-5 rounded-full hover:bg-blue-950"
				/>
			</button>
			<div className="flex  w-1/2 justify-between mb-4">
				<button
					className={`flex px-2 text-start ${
						activeTab === "wallet"
							? "border-b-2 border-blue-500 text-blue-600"
							: "text-gray-600"
					}`}
					onClick={() => setActiveTab("wallet")}
				>
					Wallet
				</button>
				<button
					className={`flex px-2 text-center ${
						activeTab === "bank"
							? "border-b-2 border-blue-500 text-blue-600"
							: "text-gray-600"
					}`}
					onClick={() => setActiveTab("bank")}
				>
					Bank Transfer
				</button>
			</div>

			{activeTab === "wallet" && <FundWallet />}

			{activeTab === "bank" && <SendFund />}
		</div>
	);
};

export default SendFundMethod;
