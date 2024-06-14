import React, { useState } from "react";

const RecentDeliveries = () => {
	const [currentTab, setCurrentTab] = useState("All");
	const deliveries = [
		{
			customer: "David More",
			orderId: "#6774758588",
			pickup: "Agege",
			destination: "Lekki",
			date: "1/5/2022",
			amount: "N3000",
			weight: "10kg",
			status: "Successful",
		},
		{
			customer: "David More",
			orderId: "#6774758588",
			pickup: "Agege",
			destination: "Lekki",
			date: "1/5/2022",
			amount: "N3000",
			weight: "10kg",
			status: "Pending",
		},
		{
			customer: "David More",
			orderId: "#6774758588",
			pickup: "Agege",
			destination: "Lekki",
			date: "1/5/2022",
			amount: "N3000",
			weight: "10kg",
			status: "Failed",
		},
		{
			customer: "David More",
			orderId: "#6774758588",
			pickup: "Agege",
			destination: "Lekki",
			date: "1/5/2022",
			amount: "N3000",
			weight: "10kg",
			status: "Successful",
		},
		// Add more deliveries as needed
	];

	const getFilteredDeliveries = () => {
		if (currentTab === "All") return deliveries;
		return deliveries.filter((delivery) => delivery.status === currentTab);
	};

	const getStatusClasses = (status) => {
		switch (status) {
			case "Successful":
				return "bg-green-100 text-green-600";
			case "Pending":
				return "bg-blue-100 text-blue-800";
			case "Failed":
				return "bg-red-100 text-red-600";
			default:
				return "";
		}
	};

	return (
		<div className="max-w-[70%] mx-auto p-4  border-2 border-slate-500 rounded-md">
			<div className="flex justify-between items-center">
				<h2 className="text-xl font-bold">Recent Deliveries</h2>
				<button className="text-blue-600">See All</button>
			</div>
			<div className="flex gap-4 my-4">
				<button
					className={`py-2 px-4 ${
						currentTab === "All"
							? "text-blue-600 border-b-2 border-blue-600"
							: "text-gray-600"
					}`}
					onClick={() => setCurrentTab("All")}
				>
					All ({deliveries.length})
				</button>
				<button
					className={`py-2 px-4 ${
						currentTab === "Successful"
							? "text-blue-600 border-b-2 border-blue-600"
							: "text-gray-600"
					}`}
					onClick={() => setCurrentTab("Successful")}
				>
					Successful ({" "}
					{
						deliveries.filter((delivery) => delivery.status === "Successful")
							.length
					}
					)
				</button>
				<button
					className={`py-2 px-4 ${
						currentTab === "Pending"
							? "text-blue-600 border-b-2 border-blue-600"
							: "text-gray-600"
					}`}
					onClick={() => setCurrentTab("Pending")}
				>
					Pending ({" "}
					{
						deliveries.filter((delivery) => delivery.status === "Pending")
							.length
					}
					)
				</button>
				<button
					className={`py-2 px-4 ${
						currentTab === "Failed"
							? "text-blue-600 border-b-2 border-blue-600"
							: "text-gray-600"
					}`}
					onClick={() => setCurrentTab("Failed")}
				>
					Failed (
					{deliveries.filter((delivery) => delivery.status === "Failed").length}
					)
				</button>
			</div>
			<div className="overflow-x-auto">
				<table className="min-w-full bg-white">
					<thead>
						<tr>
							<th className="py-2 px-4 border-b">Customer</th>
							<th className="py-2 px-4 border-b">Order ID</th>
							<th className="py-2 px-4 border-b whitespace-nowrap">Pick Up</th>
							<th className="py-2 px-4 border-b">Destination</th>
							<th className="py-2 px-4 border-b">Date</th>
							<th className="py-2 px-4 border-b">Amount</th>
							<th className="py-2 px-4 border-b">Weight</th>
							<th className="py-2 px-4 border-b">Status</th>
							<th className="py-2 px-4 border-b">Action</th>
						</tr>
					</thead>
					<tbody>
						{getFilteredDeliveries().map((delivery) => (
							<tr key={delivery.orderId} className="text-center">
								<td className="py-2 px-4 border-b">{delivery.customer}</td>
								<td className="py-2 px-4 border-b">{delivery.orderId}</td>
								<td className="py-2 px-4 border-b">{delivery.pickup}</td>
								<td className="py-2 px-4 border-b">{delivery.destination}</td>
								<td className="py-2 px-4 border-b">{delivery.date}</td>
								<td className="py-2 px-4 border-b">{delivery.amount}</td>
								<td className="py-2 px-4 border-b">{delivery.weight}</td>
								<td
									className={`py-2 px-4 border-b ${getStatusClasses(
										delivery.status
									)}`}
								>
									{delivery.status}
								</td>
								<td className="py-2 px-4 border-b relative group">
									<button className="focus:outline-none">
										<div className="flex flex-col space-y-1">
											<div className="w-1 h-1 bg-gray-600 rounded-full"></div>
											<div className="w-1 h-1 bg-gray-600 rounded-full"></div>
											<div className="w-1 h-1 bg-gray-600 rounded-full"></div>
										</div>
									</button>
									<div className="absolute top-0 right-0 mt-8 w-32 bg-white shadow-lg rounded-lg hidden group-focus:block group-hover:block">
										<div className="py-2 px-4 cursor-pointer hover:bg-gray-100">
											Hide
										</div>
										<div className="py-2 px-4 cursor-pointer hover:bg-gray-100">
											Maximize
										</div>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RecentDeliveries;
