import React, { useState, useEffect } from "react";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../components/reusables/InputComponent";
import { fundWallet } from "../../util/http";
const FundWallet = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		walletId: "",
		amount: "",
		saveWallet: false,
	});

	async function submitHandler() {
		console.log(formData);
		const currentToastId = toast.loading("Loading...");
		if (!formData.name || !formData.walletId || formData.amount) {
			toast.error("Kindly fill out all fields", {
				id: currentToastId,
				position: "top-right",
				duration: 9000,
			});
			return;
		}

		const data = {
			name: formData.name,
			walletId: formData.walletId,
			amount: formData.amount,
		};

		try {
			const res = await fundWallet(data);
			toast.success(`${res?.message || "Successfully Paired"}`, {
				id: currentToastId,
				duration: 3000,
				position: "top-right",
			});
			navigate("/");
		} catch (error) {
			toast.error(
				`${error?.response?.data.message || "something went wrong"}`,
				{
					id: currentToastId,
					duration: 3000,
					position: "top-right",
				}
			);
		}
	}

	return (
		<div className="flex flex-grow justify-start">
			<div className=" bg-transparent w-full">
				{/* <h2 className="text-2xl font-medium mb-4">Wallet to wallet</h2> */}

				<form>
					<div className="mb-4">
						<InputComponent
							label="Name"
							type="text"
							onChange={(e) =>
								setFormData({ ...formData, name: e.target.value })
							}
							value={formData.name}
						/>
					</div>
					<div className="mb-4">
						<InputComponent
							label="Wallet ID"
							type="text"
							onChange={(e) =>
								setFormData({ ...formData, walletId: e.target.value })
							}
							value={formData.walletId}
						/>
					</div>
					<div className="mb-2 relative">
						<span class="absolute top-[2.4rem] md:top-12 left-3 text-xs md:text-base">
							₦
						</span>
						<InputComponent
							label="Amount"
							type="number"
							step="0.01"
							pattern="[0-9]+([.][0-9]{1,2})?"
							placeholder="    Amount in Naira (NGN)"
							required="true"
							onChange={(e) =>
								setFormData({ ...formData, amount: e.target.value })
							}
							value={formData.amount}
						/>
					</div>
					<label class="inline-flex items-center mb-4 ml-2">
						<input
							type="checkbox"
							style={{ accentColor: "#0B56B8" }}
							id="myCheckbox"
						/>
						<span class="ml-2 text-xs md:text-base">Save wallet ID</span>
					</label>

					<button
						type="submit"
						onClick={submitHandler}
						className="w-full bg-[#08418A] text-white px-2.5 py-3.5 rounded-[14px] hover:bg-opacity-80 transition duration-300"
					>
						Continue
					</button>
				</form>
			</div>
		</div>
	);
};

export default FundWallet;
