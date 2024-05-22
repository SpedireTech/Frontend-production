import React from "react";
import { getStoredItem } from "../util/lib";

const DashBoard = () => {
	const user = getStoredItem("user");
	return (
		<div>
			<div className="flex-grow flex flex-col items-center justify-center">
				DashBoard
			</div>
			<div className="flex-grow flex-col items-center justify-center">
				{user.name}
			</div>
		</div>
	);
};

export default DashBoard;
