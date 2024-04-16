import React, { useState } from "react";
import InputComponent from "../../components/reusables/InputComponent";

export default function ForgotPassword() {
	const [formData, setFormData] = useState({
		email: "",
	});
	async function resetHandler() {
		if (!formData.email) {
			// toast({
			//     title: "Fill out your email to reset password",
			//     description: "",
			//     status: "warning",
			//     position: "top-left",
			//     duration: 9000,
			//     isClosable: true,
			// });
			return;
		}

		const data = {
			email: formData.email,
		};

		try {
			await forgotPassword(data);
			// toast({
			//     title: `Password reset link sent to your mail`,
			//     description: ``,
			//     status: "success",
			//     duration: 3000,
			//     isClosable: true,
			//     position: "top-right",
			// });
			navigate("/verify-reset");
		} catch (error) {
			// toast({
			//     title: `${
			//         error?.response?.data.message || "something went wrong"
			//     }`,
			//     description: ``,
			//     status: "error",
			//     duration: 3000,
			//     isClosable: true,
			//     position: "top-right",
			// });
		}
	}
	return (
		<div className="flex-grow flex flex-col items-center justify-center h-screen ">
			<div className="flex flex-col items-start w-full md:w-4/5 lg:w-2/5 gap-4 border-blue-500 border-2">
				<h2 className="text-xl border-red-500 border-2 font-semibold text-neutral-850 text-center">
					Forgot Password
				</h2>

				<h4 className="text-xs font-semibold text-neutral-850 text-center">
					Kindly check your email, a code has been sent to your email
				</h4>
				<InputComponent
					label="Email address"
					placeholder="example@gmail.com"
					type="email"
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
					value={formData.email}
				/>

				<button
					type="submit"
					className="w-full mt-4 py-2 px-8 rounded-lg border-red-500 border-2 bg-[#08418A] text-white hover:bg-opacity-80 shadow-sm"
					onClick={resetHandler}
				>
					Verify
				</button>
			</div>
		</div>
	);
}
