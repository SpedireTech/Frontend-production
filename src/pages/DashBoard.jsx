import React from "react";
import { getStoredItem } from "../util/lib";
import Map from "../components/dashboard/Map";
import RecentDeliveries from "../components/dashboard/RecentDeliveries";
import TransactionHistory from "../components/wallet/TransactionHistory";

const DashBoard = () => {
	const user = getStoredItem("user");
	return (
		<div className="">
			<div className="flex-grow flex flex-col items-center justify-center">
				DashBoard
			</div>
			<div className="flex flex-col md:flex-row w-full gap-2">
				<TransactionHistory />
				{/* <Map /> */}
			</div>
		</div>
	);
};

export default DashBoard;
