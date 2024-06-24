import React from "react";
import map from "../../assets/Map.svg";

const Map = () => {
	return (
		<div className="w-4/5 lg:w-2/5">
			<img src={map} alt="No deliveries ongoing" />
		</div>
	);
};

export default Map;
