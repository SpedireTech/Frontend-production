import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const initialTransactions = [
	{
		id: 1,
		referenceId: "5148646548465",
		accountName: "Jane Cooper",
		date: "2/19/21",
		status: "Successful",
		amount: "$500.00",
	},
	{
		id: 2,
		referenceId: "5467319467348",
		accountName: "Wade Warren",
		date: "5/7/16",
		status: "Pending",
		amount: "$300.00",
	},
	{
		id: 3,
		referenceId: "134570945446",
		accountName: "Esther Howard",
		date: "9/18/16",
		status: "Failed",
		amount: "$600.00",
	},
	{
		id: 4,
		referenceId: "5440754979777",
		accountName: "Cameron Williamson",
		date: "2/11/12",
		status: "Failed",
		amount: "$550.00",
	},
	{
		id: 5,
		referenceId: "1243467984543",
		accountName: "Brooklyn Simmons",
		date: "9/18/16",
		status: "Successful",
		amount: "$800.00",
	},
	{
		id: 6,
		referenceId: "8454314649707",
		accountName: "Leslie Alexander",
		date: "1/28/17",
		status: "Pending",
		amount: "$400.00",
	},
];
const TransactionHistory = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [transactions, setTransactions] = useState(initialTransactions);

	const handleSearch = (e) => {
		const term = e.target.value;
		setSearchTerm(term);
		const filtered = initialTransactions.filter(
			(transaction) =>
				transaction.referenceId.includes(term) ||
				transaction.accountName.toLowerCase().includes(term.toLowerCase()) ||
				transaction.status.toLowerCase().includes(term.toLowerCase()) ||
				transaction.amount.includes(term) ||
				transaction.date.includes(term)
		);
		setTransactions(filtered);
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
		<div className="mx-auto p-4 flex flex-col flex-grow overflow-hidden">
			<div className="relative">
				<input
					type="text"
					placeholder="Search..."
					value={searchTerm}
					onChange={handleSearch}
					className="bg-[#F2F2F2] border-[#ccc] text-[#4B4B4B] p-1 w-full pl-8 pr-4 rounded-md border focus:outline-none text-gray-700"
				/>
				<FontAwesomeIcon
					icon={faSearch}
					className=" absolute left-2 top-1.5 m-1"
					style={{ color: "#ccc" }}
				/>
			</div>

			<h1 className="text-2xl mt-4 text-[#4B4B4B] font-semibold mb-4">
				Transaction History
			</h1>
			<div className="overflow-auto md:max-h-[22rem]">
				<table className="min-w-full text-[#4B4B4B] bg-white rounded-lg">
					<thead>
						<tr>
							<th className="py-2 px-4 border-b whitespace-nowrap border-zinc-400 text-left">
								Reference ID
							</th>
							<th className="py-2 px-4 border-b whitespace-nowrap border-zinc-400 text-left">
								Account name
							</th>
							<th className="py-2 px-4 border-b  border-zinc-400 text-left">
								Date
							</th>
							<th className="py-2 px-4 border-b  border-zinc-400 text-left">
								STATUS
							</th>
							<th className="py-2 px-4 border-b  border-zinc-400 text-left">
								AMOUNT
							</th>
						</tr>
					</thead>
					{transactions.length > 0 ? (
						<tbody>
							{transactions.map((transaction) => (
								<tr key={transaction.id} className="">
									<td className="py-2 px-4 border-b whitespace-nowrap border-zinc-400 justify-between">
										<input type="checkbox" className="mr-1" />
										{transaction.referenceId}
									</td>
									<td className="py-2 px-4 border-b whitespace-nowrap border-zinc-400">
										{transaction.accountName}
									</td>
									<td className="py-2 px-4 border-b border-zinc-400">
										{transaction.date}
									</td>
									<td className="py-2 px-4 border-b border-zinc-400">
										<div
											className={`w-3/4 h-full py-1 px-1 text-center rounded-lg ${getStatusClasses(
												transaction.status
											)}`}
										>
											{transaction.status}
										</div>
									</td>
									<td className="py-2 px-4 border-b border-zinc-400">
										{transaction.amount}
									</td>
								</tr>
							))}
						</tbody>
					) : (
						<tr>
							<td colSpan="6" className="py-16 text-center">
								<div className="flex items-center w-full justify-center whitespace-nowrap">
									<p> No transactions history</p>
								</div>
							</td>
						</tr>
					)}
				</table>
			</div>
		</div>
	);
};

export default TransactionHistory;
