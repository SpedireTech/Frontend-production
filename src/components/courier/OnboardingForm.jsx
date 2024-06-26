import React from "react";
import spedire from "../../assets/spedire.png";

const OnboardingForm = () => {
	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<img src={spedire} alt="Spedire" className="top-4 left-4 fixed" />
			<div className="bg-white p-6 rounded-lg shadow-lg w-full lg:max-w-[42rem] max-w-md md:w-full md:mt-16">
				<header className="mb-6 text-start">
					<h1 className="text-2xl mb-2 text-[#121212] font-semibold">
						Account Information
					</h1>
					<p className="text-[#4b4b4b]">
						Let's get started. Fill in the information so our team can verify
						your account.
					</p>
				</header>
				<form>
					<div className="mb-6">
						<h2 className="text-xl font-semibold mb-2">Profile picture</h2>
						<p className="text-gray-600 mb-2">
							Upload your best photo so customers can recognize you
						</p>
						<input
							type="file"
							accept="image/png, image/jpeg, application/pdf"
							className="w-full p-2 border rounded"
						/>
					</div>
					<div className="mb-6">
						<h2 className="text-xl font-semibold mb-2">ID identification</h2>
						<p className="text-gray-600 mb-2">
							To validate your courier profile we need to make sure it's really
							you
						</p>
						<input
							type="file"
							accept="image/png, image/jpeg, application/pdf"
							className="w-full p-2 border rounded"
						/>
						<p className="text-gray-600 mt-2">
							Valid Voter's card, international passport or Driver's license
						</p>
					</div>
					<div className="mb-6">
						<h2 className="text-xl font-semibold mb-2">About you</h2>
						<p className="text-gray-600 mb-2">
							A few details that will help us build your profile and get you on
							the road quickly.
						</p>
						<input
							type="text"
							placeholder="National Identification Number (NIN)"
							className="w-full p-2 mb-2 border rounded"
						/>
						<input
							type="text"
							placeholder="BVN Number"
							className="w-full p-2 mb-2 border rounded"
						/>
					</div>
					<div className="mb-6">
						<h2 className="text-xl font-semibold mb-2">Invoice details</h2>
						<p className="text-gray-600 mb-2">
							This is how you will receive your earnings, kindly fill properly
							as bank account name must tally with account name.
						</p>
						<input
							type="text"
							placeholder="Bank account number"
							className="w-full p-2 mb-2 border rounded"
						/>
						<input
							type="text"
							placeholder="Account Name"
							className="w-full p-2 mb-2 border rounded"
						/>
						<input
							type="text"
							placeholder="Bank name"
							className="w-full p-2 mb-2 border rounded"
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default OnboardingForm;
