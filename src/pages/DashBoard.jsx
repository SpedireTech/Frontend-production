import React from "react";
import { getStoredItem } from "../util/lib";
import Map from "../components/dashboard/Map";
import RecentDeliveries from "../components/dashboard/RecentDeliveries";

const DashBoard = () => {
	const user = getStoredItem("user");
	return (
		<div className="">
			<div className="flex-grow flex flex-col items-center justify-center">
				DashBoard
			</div>
			<div className="flex flex-row w-full gap-2">
				<RecentDeliveries />
				<Map />
			</div>
		</div>
	);
};

export default DashBoard;
