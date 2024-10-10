import React, { useState } from "react";
import WifiIcon from "../../assets/wifiicon.svg";
import plusIcon from "../../assets/plusicon.svg";
import sendIcon from "../../assets/sendIcon.svg";
import copyIcon from "../../assets/copyIcon.svg";
import PaymentMethodComponent from "./PaymentMethodComponent";
import BankTransferModal from "./BankTransferModal";
import TransactionManager from "./TransactionModals";
import PaymentForm from "./PaymentFor";
import TransactionHistory from "./TransactionHistory";
import SendFundMethod from "./SendFundMethod";

const WalletComponent = () => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [showSendFundMethod, setShowSendFundMethod] = useState(false);
	const [isPaymentMethodVisible, setPaymentMethodVisible] = useState(false);
	const [isTransactionManagerActive, setTransactionManagerActive] =
		useState(false);

	const handleSendFundsClick = () => {
		setShowSendFundMethod(true);
		setPaymentMethodVisible(true); // Assume user can click "Continue" in PaymentMethodComponent
	};

	const handleContinueFromPaymentMethod = () => {
		// Simulate user clicking "Continue" in the PaymentMethodComponent
		setPaymentMethodVisible(false);
		setTransactionManagerActive(true); // Activate the TransactionManager
	};

	return (
		<>
			<div className="flex flex-col">
				<div
					className="m-5 text-white p-8 rounded-lg shadow-lg"
					style={{
						width: "961px",
						height: "326px",
						backgroundColor: "#08418A",
					}}
				>
					<div className="flex justify-between items-start">
						<div className="text-xl font-semibold mb-2 flex items-center">
							Total amount
						</div>
						<div>
							<img src={WifiIcon} alt="Wi-Fi Icon" className="w-6 h-6" />
						</div>
					</div>
					<div className="flex justify-center text-6xl font-bold mt-10">
						₦0.00
					</div>

					<div className="flex  mt-20 justify-between items-start mb-5">
						<div className="flex space-x-4">
							<button
								className="py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 font-semibold flex items-center"
								style={{ backgroundColor: "#B3CBE9", color: "#1E3A8A" }}
								onClick={() => setModalOpen(true)}
							>
								<img src={plusIcon} alt="Plus Icon" className="mr-2 w-4 h-4" />
								Fund Wallet
							</button>
							<button
								className="py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 font-semibold flex items-center"
								style={{ backgroundColor: "#B3CBE9", color: "#1E3A8A" }}
								onClick={handleSendFundsClick}
							>
								<img src={sendIcon} alt="Send Icon" className="mr-2 w-4 h-4" />
								Send Funds
							</button>
						</div>
						<div className="flex text-sm">
							<div>
								Total funded
								<br />₦ 1,650,299.00
							</div>
							<div className="ml-5">
								Total spent
								<br />₦ 1,400,299.00
							</div>
						</div>
					</div>
				</div>
				<div>
					{showSendFundMethod ? (
						<SendFundMethod onClose={() => setShowSendFundMethod(false)} /> // Show SendFundMethod component when state is true
					) : (
						<TransactionHistory /> // Show TransactionHistory by default
					)}
				</div>
			</div>

			<BankTransferModal
				isOpen={isModalOpen}
				onClose={() => setModalOpen(false)}
			/>
		</>
	);
};

export default WalletComponent;
