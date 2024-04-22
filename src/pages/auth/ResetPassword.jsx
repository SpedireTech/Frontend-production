import React, { useState } from "react";
import PasswordImage from "../../assets/auth/PasswordImage.png";
import PasswordInput from "../../components/reusables/PasswordInput";
import ImageComponent from "../../components/reusables/Image";

export default function ResetPassword() {
	const [formData, setFormData] = useState({
		password: "",
		confirmPassword: "",
	});
	async function resetHandler() {
		if (formData.password !== formData.confirmPassword) {
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
			password: formData.password,
		};

		try {
			await resetPassword(data);
			// toast({
			//     title: `Password reset link sent to your mail`,
			//     description: ``,
			//     status: "success",
			//     duration: 3000,
			//     isClosable: true,
			//     position: "top-right",
			// });
			navigate("/dashboard");
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
		<div className="flex h-screen">
			<div className="hidden md:flex lg:flex md:w-1/2 h-screen items-center justify-center ">
				<ImageComponent
					src={PasswordImage}
					alt="Password image"
					height={"full"}
					width={"full"}
				/>
			</div>
			<div className="flex-grow flex flex-col items-center  justify-center h-screen ">
				<div className="flex flex-col md:w-[505px] md:h-[390px]">
					<div className="flex flex-col md:w-full md:h-[63px] items-start">
						<h2 className="md:text-2xl font-semibold text-neutral-850 text-center">
							Reset Password
						</h2>

						<h4 className="text-[14px] sm:text-[10px] text-[#4b4b4b] font-semibold text-neutral-850 text-center">
							Kindly fill in the right details to continue with Spedire
						</h4>
					</div>
					<div className="flex flex-col md:h-[298px] items-start md:gap-7">
						<PasswordInput
							label="Password"
							onChange={(e) =>
								setFormData({ ...formData, password: e.target.value })
							}
							value={formData.password}
						/>
						<PasswordInput
							label="Confirm Password"
							onChange={(e) =>
								setFormData({ ...formData, confirmPassword: e.target.value })
							}
							value={formData.confirmPassword}
						/>

						<button
							type="submit"
							className="w-full h-[54px] font-[18px] py-4.5 px-2.5 rounded-[16px] font-hk bg-[#08418A] text-white hover:bg-opacity-80 shadow-sm"
							onClick={resetHandler}
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
