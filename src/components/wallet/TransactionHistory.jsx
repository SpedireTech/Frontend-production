import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { filterByMostRecentDate } from "../../util/lib";

const initialTransactions = [
	// {
	// 	id: 1,
	// 	referenceId: "5148646548465",
	// 	accountName: "Jane Cooper",
	// 	date: "2/19/21",
	// 	status: "Successful",
	// 	amount: "₦500.00",
	// },
	// {
	// 	id: 2,
	// 	referenceId: "5467319467348",
	// 	accountName: "Wade Warren",
	// 	date: "5/7/16",
	// 	status: "Pending",
	// 	amount: "₦300.00",
	// },
	// {
	// 	id: 3,
	// 	referenceId: "134570945446",
	// 	accountName: "Esther Howard",
	// 	date: "9/18/16",
	// 	status: "Failed",
	// 	amount: "₦600.00",
	// },
	// {
	// 	id: 4,
	// 	referenceId: "5440754979777",
	// 	accountName: "Cameron Williamson",
	// 	date: "2/11/12",
	// 	status: "Failed",
	// 	amount: "₦550.00",
	// },
	// {
	// 	id: 5,
	// 	referenceId: "1243467984543",
	// 	accountName: "Brooklyn Simmons",
	// 	date: "9/18/16",
	// 	status: "Successful",
	// 	amount: "₦800.00",
	// },
	// {
	// 	id: 6,
	// 	referenceId: "8454314649707",
	// 	accountName: "Leslie Alexander",
	// 	date: "1/28/17",
	// 	status: "Pending",
	// 	amount: "₦400.00",
	// },
	// {
	// 	id: 7,
	// 	referenceId: "9832642837482",
	// 	accountName: "John Doe",
	// 	date: "3/25/21",
	// 	status: "Pending",
	// 	amount: "₦2,500.00",
	// },
	// {
	// 	id: 8,
	// 	referenceId: "482347234898",
	// 	accountName: "Alicia Keys",
	// 	date: "11/14/19",
	// 	status: "Successful",
	// 	amount: "₦3,000.00",
	// },
	// {
	// 	id: 9,
	// 	referenceId: "82374623478",
	// 	accountName: "Michael Ross",
	// 	date: "7/19/22",
	// 	status: "Failed",
	// 	amount: "₦4,800.00",
	// },
	// {
	// 	id: 10,
	// 	referenceId: "982374629847",
	// 	accountName: "David Beckham",
	// 	date: "5/6/18",
	// 	status: "Pending",
	// 	amount: "₦600.00",
	// },
	// {
	// 	id: 11,
	// 	referenceId: "2348923748293",
	// 	accountName: "Jessica Smith",
	// 	date: "1/8/23",
	// 	status: "Successful",
	// 	amount: "₦10,000.00",
	// },
	// {
	// 	id: 12,
	// 	referenceId: "872342342347",
	// 	accountName: "Chris Evans",
	// 	date: "2/17/17",
	// 	status: "Pending",
	// 	amount: "₦700.00",
	// },
	// {
	// 	id: 13,
	// 	referenceId: "329832742983",
	// 	accountName: "Emma Watson",
	// 	date: "8/22/20",
	// 	status: "Failed",
	// 	amount: "₦2,300.00",
	// },
	// {
	// 	id: 14,
	// 	referenceId: "823482347234",
	// 	accountName: "Ryan Reynolds",
	// 	date: "9/30/21",
	// 	status: "Successful",
	// 	amount: "₦5,400.00",
	// },
	// {
	// 	id: 15,
	// 	referenceId: "298347293847",
	// 	accountName: "Mia Khalifa",
	// 	date: "4/4/18",
	// 	status: "Failed",
	// 	amount: "₦1,750.00",
	// },
	// {
	// 	id: 16,
	// 	referenceId: "827364287342",
	// 	accountName: "Jennifer Lawrence",
	// 	date: "6/10/22",
	// 	status: "Pending",
	// 	amount: "₦850.00",
	// },
	// {
	// 	id: 17,
	// 	referenceId: "982374293847",
	// 	accountName: "Elon Musk",
	// 	date: "12/1/23",
	// 	status: "Successful",
	// 	amount: "₦9,999.00",
	// },
	// {
	// 	id: 18,
	// 	referenceId: "349287329847",
	// 	accountName: "Tom Holland",
	// 	date: "11/18/19",
	// 	status: "Failed",
	// 	amount: "₦2,500.00",
	// },
	// {
	// 	id: 19,
	// 	referenceId: "2348723874223",
	// 	accountName: "Serena Williams",
	// 	date: "7/12/20",
	// 	status: "Successful",
	// 	amount: "₦6,300.00",
	// },
	// {
	// 	id: 20,
	// 	referenceId: "8234732487234",
	// 	accountName: "Scarlett Johansson",
	// 	date: "8/5/18",
	// 	status: "Pending",
	// 	amount: "₦1,500.00",
	// },
	// {
	// 	id: 21,
	// 	referenceId: "1283498237423",
	// 	accountName: "Taylor Swift",
	// 	date: "3/14/23",
	// 	status: "Successful",
	// 	amount: "₦2,400.00",
	// },
	// {
	// 	id: 22,
	// 	referenceId: "8723498273423",
	// 	accountName: "Dwayne Johnson",
	// 	date: "10/7/16",
	// 	status: "Pending",
	// 	amount: "₦750.00",
	// },
	// {
	// 	id: 23,
	// 	referenceId: "238472384723",
	// 	accountName: "Zendaya Coleman",
	// 	date: "5/16/21",
	// 	status: "Failed",
	// 	amount: "₦3,200.00",
	// },
	// {
	// 	id: 24,
	// 	referenceId: "7238497238947",
	// 	accountName: "Bill Gates",
	// 	date: "12/26/22",
	// 	status: "Successful",
	// 	amount: "₦7,800.00",
	// },
];
const TransactionHistory = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [transactions, setTransactions] = useState(initialTransactions);

	const handleSearch = (e) => {
		const term = e.target.value;
		setSearchTerm(term);
		const dateFiltered = filterByMostRecentDate(transactions);
		const filtered = dateFiltered.filter(
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
	useEffect(() => {
		const dateFiltered = filterByMostRecentDate(transactions);
		setTransactions(dateFiltered);
	}, []);
	return (
		<div className="mx-auto p-4 mt-8 ml-2 flex flex-col flex-grow overflow-hidden">
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
