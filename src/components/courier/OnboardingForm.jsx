import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UploadImage from "../../assets/UploadImageIcon.svg";
import spedire from "../../assets/spedire.png";
import InputComponent from "../reusables/InputComponent";
import { upgradeCourier } from "../../util/http";

const OnboardingForm = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		picture: "",
		idVerification: "",
		nin: "",
		bvn: "",
		accountNumber: "",
		accountName: "",
		bankName: "",
	});

	const handleChangeImg = (e, fieldName) => {
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onloadend = () => {
			setFormData({ ...formData, [fieldName]: reader.result });
		};
	};
	async function submitHandler() {
		const currentToastId = toast.loading("Loading...");
		if (
			!formData.picture ||
			!formData.idVerification ||
			!formData.nin ||
			!formData.bvn ||
			!formData.accountNumber ||
			!formData.accountName ||
			!formData.bankName
		) {
			toast.error("Kindly fill out all fields", {
				id: currentToastId,
				position: "top-right",
				duration: 9000,
			});
			return;
		}

		const data = {
			picture: formData.picture,
			idVerification: formData.idVerification,
			nin: formData.nin,
			bvn: formData.bvn,
			accountNumber: formData.accountNumber,
			accountName: formData.accountName,
			bankName: formData.bankName,
		};

		try {
			const res = await upgradeCourier(data);
			if (res?.success) {
				toast.success(`${res?.message || "Successfully Upgraded"}`, {
					id: currentToastId,
					duration: 3000,
					position: "top-right",
				});
				navigate(-1);
			} else {
				toast.error(`${res?.message || "something went wrong"}`, {
					id: currentToastId,
					duration: 5000,
					position: "top-right",
				});
				navigate("/dashboard");
			}
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
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<img
				src={spedire}
				alt="Spedire"
				className="top-4 left-4 absolute md:fixed "
			/>
			<div className="bg-white p-6 rounded-lg shadow-lg w-full lg:max-w-[42rem] max-w-md md:w-full mt-16">
				<header className="mb-6 text-start">
					<h1 className="text-2xl mb-2 text-[#121212] font-semibold">
						Account Information
					</h1>
					<p className="text-[#4b4b4b]">
						Let's get started. Fill in the information so our team can verify
						your account.
					</p>
				</header>
				<form onSubmit={submitHandler}>
					<div className="mb-6">
						<h2 className="text-xl font-semibold mb-2">Profile picture</h2>
						<p className="text-[#4B4B4B] mb-2">
							Upload your best photo so customers can recognize you
						</p>
						<div className="flex items-start justify-start w-full ">
							{formData.picture ? (
								<img
									src={formData.picture}
									alt="Uploaded Picture"
									className="w-[400px] h-[200px] border border-[#ccc] rounded-lg"
								/>
							) : (
								<label className="input-box flex flex-col mt-2 items-center justify-center w-[400px] h-[200px] border border-[#ccc]  rounded-lg cursor-pointer bg-[#F2F2F2] hover:bg-[#d3d2d2]">
									<div className="flex flex-col items-center justify-center pt-5 pb-6">
										<img
											src={formData.picture ? formData.picture : UploadImage}
											alt="Upload"
											className="w-12 h-12 mb-3"
										/>
										<p className="mb-2 text-sm font-light text-[ #606060]">
											Upload
										</p>
										<p className="text-xs font-light text-[ #606060]">
											png/jpeg/pdf formats
										</p>
									</div>
									<input
										type="file"
										onChange={(e) => handleChangeImg(e, "picture")}
										className="hidden"
										name="itemImage"
										accept="image/png, image/jpeg, application/pdf"
									/>
								</label>
							)}
						</div>
					</div>
					<div className="mb-6">
						<h2 className="text-xl font-semibold mb-2">ID identification</h2>
						<p className="text-[#4B4B4B] mb-2">
							To validate your courier profile we need to make sure it's really
							you
						</p>
						<div className="flex items-start justify-start w-full ">
							{formData.idVerification ? (
								<img
									src={formData.idVerification}
									alt="Uploaded"
									className="w-[400px] h-[200px] border border-[#ccc] rounded-lg"
								/>
							) : (
								<label className="input-box flex flex-col mt-2 items-center justify-center w-[400px] h-[200px] border border-[#ccc] rounded-lg cursor-pointer bg-[#F2F2F2] hover:bg-[#d3d2d2]">
									<div className="flex flex-col items-center justify-center pt-5 pb-6">
										<img
											src={UploadImage}
											alt="Upload"
											className="w-12 h-12 mb-3"
										/>
										<p className="mb-2 text-sm font-light text-[ #606060]">
											Upload
										</p>
										<p className="text-xs font-light text-[ #606060]">
											png/jpeg/pdf formats
										</p>
									</div>
									<input
										type="file"
										onChange={(e) => handleChangeImg(e, "idVerification")}
										className="hidden"
										name="itemImage"
										accept="image/png, image/jpeg, application/pdf"
									/>
								</label>
							)}
						</div>
						<p className="text-[#4B4B4B] mb-2">
							Valid Voter's card, international passport or Driver's license
						</p>
					</div>

					<div className="mb-6">
						<h2 className="text-xl font-semibold mb-2">About you</h2>
						<p className="text-[#4B4B4B] mb-6">
							A few details that will help us build your profile and get you on
							the road quickly.
						</p>

						<div className="mb-6 ">
							<InputComponent
								label="National Identification Number"
								type="number"
								onChange={(e) =>
									setFormData({ ...formData, nin: e.target.value })
								}
								value={formData.nin}
							/>
						</div>
						<div className="mb-6 ">
							<InputComponent
								label="BVN Number"
								type="text"
								onChange={(e) =>
									setFormData({ ...formData, bvn: e.target.value })
								}
								value={formData.bvn}
							/>
						</div>
					</div>
					<div className="mb-6">
						<h2 className="text-xl font-semibold mb-2">Invoice details</h2>
						<p className="text-[#4B4B4B] mb-6">
							This is how you will receive your earnings, kindly fill properly
							as bank account name must tally with account name.
						</p>
						<div className="mb-6 ">
							<InputComponent
								label="Bank account number"
								type="text"
								onChange={(e) =>
									setFormData({ ...formData, accountNumber: e.target.value })
								}
								value={formData.accountNumber}
							/>
						</div>
						<div className="mb-6 ">
							<InputComponent
								label="Account Name"
								type="text"
								onChange={(e) =>
									setFormData({ ...formData, accountName: e.target.value })
								}
								value={formData.accountName}
							/>
						</div>
						<div className="mb-6 ">
							<InputComponent
								label="Bank Name"
								type="text"
								onChange={(e) =>
									setFormData({ ...formData, bankName: e.target.value })
								}
								value={formData.bankName}
							/>
						</div>
					</div>
					<button
						type="submit"
						className="w-full bg-[#08418A] text-white px-2.5 py-3.5 rounded-[14px] hover:bg-opacity-80 transition duration-300"
						onClick={submitHandler}
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default OnboardingForm;
