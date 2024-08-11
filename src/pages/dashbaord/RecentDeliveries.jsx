import React, { useState } from "react";

const RecentDeliveries = () => {
  const [currentTab, setCurrentTab] = useState("All");
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const deliveries = [
    {
      customer: "David Moreeeeeeeeeee",
      orderId: "#6774758580",
      pickup: "Agege",
      destination: "Lekki",
      date: "1/5/2022",
      amount: "N3000",
      weight: "10kg",
      status: "Successful",
    },
    {
      customer: "David More",
      orderId: "#6774758581",
      pickup: "Agege",
      destination: "Lekki",
      date: "1/5/2022",
      amount: "N3000",
      weight: "10kg",
      status: "Pending",
    },
    {
      customer: "David More",
      orderId: "#6774758582",
      pickup: "Agege",
      destination: "Lekki",
      date: "1/5/2022",
      amount: "N3000",
      weight: "10kg",
      status: "Failed",
    },
    {
      customer: "David More",
      orderId: "#6774758583",
      pickup: "Agege",
      destination: "Lekki",
      date: "1/5/2022",
      amount: "N3000",
      weight: "10kg",
      status: "Successful",
    },
    {
      customer: "David More",
      orderId: "#6774758584",
      pickup: "Agege",
      destination: "Lekki",
      date: "1/5/2022",
      amount: "N3000",
      weight: "10kg",
      status: "Pending",
    },
    {
      customer: "David More",
      orderId: "#6774758585",
      pickup: "Agege",
      destination: "Lekki",
      date: "1/5/2022",
      amount: "N3000",
      weight: "10kg",
      status: "Failed",
    },
    {
      customer: "David Ikenna",
      orderId: "#6774758586",
      pickup: "Agege",
      destination: "Lekki",
      date: "1/5/2022",
      amount: "N3000",
      weight: "10kg",
      status: "Failed",
    },
    {
      customer: "David More",
      orderId: "#6774758587",
      pickup: "Agege",
      destination: "Lekki",
      date: "1/5/2022",
      amount: "N3000",
      weight: "10kg",
      status: "Pending",
    },
    {
      customer: "Anjola More",
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
      orderId: "#6774758589",
      pickup: "Agege",
      destination: "Lekki",
      date: "1/5/2022",
      amount: "N3000",
      weight: "10kg",
      status: "Successful",
    },
    {
      customer: "David More",
      orderId: "#6774758590",
      pickup: "Agege",
      destination: "Lekki",
      date: "1/5/2022",
      amount: "N3000",
      weight: "10kg",
      status: "Successful",
    },
    {
      customer: "David More",
      orderId: "#6774758591",
      pickup: "Agege",
      destination: "Lekki",
      date: "1/5/2022",
      amount: "N3000",
      weight: "10kg",
      status: "Successful",
    },
    {
      customer: "David More",
      orderId: "#6774758592",
      pickup: "Agege",
      destination: "Lekki",
      date: "1/5/2022",
      amount: "N3000",
      weight: "10kg",
      status: "Successful",
    },
    {
      customer: "David More",
      orderId: "#6774758593",
      pickup: "Agege",
      destination: "Lekki",
      date: "1/5/2022",
      amount: "N3000",
      weight: "10kg",
      status: "Successful",
    },
    {
      customer: "David More",
      orderId: "#6774758594",
      pickup: "Agege",
      destination: "Lekki",
      date: "1/5/2022",
      amount: "N3000",
      weight: "10kg",
      status: "Successful",
    },
    {
      customer: "David More",
      orderId: "#6774758595",
      pickup: "Agege",
      destination: "Lekki",
      date: "1/5/2022",
      amount: "N3000",
      weight: "10kg",
      status: "Successful",
    },
    {
      customer: "David More",
      orderId: "#6774758596",
      pickup: "Agege",
      destination: "Lekki",
      date: "1/5/2022",
      amount: "N3000",
      weight: "10kg",
      status: "Successful",
    },
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
  const toggleDropdown = (orderId) => {
    if (dropdownVisible === orderId) {
      setDropdownVisible(null);
    } else {
      setDropdownVisible(orderId);
    }
  };
  const textAdjustment = (text) => {
    return text
      ? text.slice(0, 10).padEnd(text.length > 10 ? 12 : text.length, ".")
      : "";
  };
  return (
    <div className="max-w-[70%] mx-auto p-4 rounded-lg  border border-[#ccc] h-[50%] overflow-hidden shadow">
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
          Successful (
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
          Pending (
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
      <div className="overflow-auto md:max-h-[22rem]">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-zinc-400">Customer</th>
              <th className="py-2 px-4 border-b border-zinc-400">Order ID</th>
              <th className="py-2 px-4 border-b border-zinc-400 whitespace-nowrap">
                Pick Up
              </th>
              <th className="py-2 px-4 border-b border-zinc-400">
                Destination
              </th>
              <th className="py-2 px-4 border-b border-zinc-400">Date</th>
              <th className="py-2 px-4 border-b border-zinc-400">Amount</th>
              <th className="py-2 px-4 border-b border-zinc-400">Weight</th>
              <th className="py-2 px-4 border-b border-zinc-400">Status</th>
              <th className="py-2 px-4 border-b border-zinc-400">Action</th>
            </tr>
          </thead>
          <tbody>
            {getFilteredDeliveries().map((delivery) => (
              <tr key={delivery.orderId} className="text-center">
                <td className="py-2 px-4 border-b border-zinc-400 whitespace-nowrap">
                  {textAdjustment(delivery?.customer)}
                </td>
                <td className="py-2 px-4 border-b border-zinc-400">
                  {delivery?.orderId}
                </td>
                <td className="py-2 px-4 border-b border-zinc-400">
                  {delivery.pickup}
                </td>
                <td className="py-2 px-4 border-b border-zinc-400">
                  {delivery.destination}
                </td>
                <td className="py-2 px-4 border-b border-zinc-400">
                  {delivery.date}
                </td>
                <td className="py-2 px-4 border-b border-zinc-400">
                  {delivery.amount}
                </td>
                <td className="py-2 px-4 border-b border-zinc-400">
                  {delivery.weight}
                </td>
                <td className="py-2 px-4 border-b border-zinc-400">
                  <div
                    className={`w-full h-full py-1 px-1 rounded-lg ${getStatusClasses(
                      delivery.status
                    )}`}
                  >
                    {delivery.status}
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-zinc-400 relative">
                  <button
                    className="focus:outline-none"
                    onClick={() => toggleDropdown(delivery.orderId)}
                  >
                    <div className="flex flex-col space-y-1">
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                    </div>
                  </button>
                  {dropdownVisible === delivery.orderId && (
                    <div className="absolute top-0 right-0 mt-8 w-32 bg-white shadow-lg rounded-lg">
                      <div className="py-2 px-4 cursor-pointer border-b border-[#ccc] hover:bg-[#F9F9F9]">
                        Hide
                      </div>
                      <div className="py-2 px-4 cursor-pointer border-b border-[#ccc] hover:bg-[#F9F9F9]">
                        Maximize
                      </div>
                      <div className="py-2 px-4 cursor-pointer border-b border-[#ccc] hover:bg-[#F9F9F9]">
                        Delete
                      </div>
                    </div>
                  )}
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
