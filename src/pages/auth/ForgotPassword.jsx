import React, { useState } from "react";
import InputComponent from "../../components/reusables/InputComponent";
import PasswordImage from "../../assets/auth/PasswordImage.png";
import ImageComponent from "../../components/reusables/Image";

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
		<div className="flex h-screen">
			<div className="hidden md:flex lg:flex md:w-1/2 h-screen items-center justify-center ">
				<ImageComponent
					src={PasswordImage}
					alt="Password image"
					height={"full"}
					width={"full"}
				/>
			</div>
			<div className="flex-grow flex flex-col items-center justify-center h-screen ">
				<div className="flex flex-col md:w-[505px] md:h-[283px] md:gap-[29px]">
					<div className="flex flex-col md:w-[228px] md:h-[63px] items-start">
						<h2 className="md:text-2xl font-semibold text-neutral-850 text-center">
							Forgot Password
						</h2>

						<h4 className="text-[12px] text-[#4b4b4b] font-semibold text-neutral-850">
							Kindly input your email
						</h4>
					</div>
					<div className="flex flex-col md:h-[191px] items-start md:gap-7">
						<InputComponent
							label="Email address"
							placeholder="example@gmail.com"
							type="email"
							onChange={(e) =>
								setFormData({ ...formData, email: e.target.value })
							}
							value={formData.email}
						/>

						<button
							type="submit"
							className="w-full h-[54px] font-[18px] py-4.5 px-2.5 rounded-[16px] font-hk bg-[#08418A] text-white hover:bg-opacity-80 shadow-sm"
							onClick={resetHandler}
						>
							Verify
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
