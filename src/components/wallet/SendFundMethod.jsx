import React, { useState } from "react";
import FundWallet from "./FundWallet";
import SendFund from "./SendFund";

const SendFundMethod = () => {
	const [activeTab, setActiveTab] = useState("wallet");

	return (
		<div className="mx-auto flex flex-col mt-5 ml-2 pl-8 flex-grow bg-transparent">
			<h2 className="text-2xl font-semibold mb-4">Select a payment method</h2>
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
