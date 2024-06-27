import React from "react";
import map from "../../assets/Map.svg";

const Map = () => {
	return (
		<div className="w-4/5 md:max-w-[30%] mx-auto p-4 md:p-0 rounded-lg">
			<img src={map} alt="No deliveries ongoing" />
		</div>
	);
};

export default Map;
