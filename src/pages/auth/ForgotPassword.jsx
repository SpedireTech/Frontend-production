import React, { useState } from "react";
import InputComponent from "../../components/reusables/InputComponent";
import PasswordImage from "../../assets/auth/forgot.svg";
import logo from "../../assets/spedire.png";
import ImageComponent from "../../components/reusables/Image";
import { forgotPassword } from "../../util/http";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ForgotPassword() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
	});
	async function resetHandler() {
		if (!formData.email) {
			toast.error("Fill out your email to reset password", {
				position: "top-left",
				duration: 9000,
			});
			return;
		}

		const data = {
			email: formData.email,
		};

		try {
			await forgotPassword(data);
			toast.success(`Password reset link sent to your mail`, {
				duration: 3000,
				position: "top-right",
			});
			navigate("/verify-reset");
		} catch (error) {
			toast.error(
				`${error?.response?.data.message || "something went wrong"}`,
				{
					duration: 3000,
					position: "top-right",
				}
			);
		}
	}
	return (
		<div className="flex h-screen">
			<div className="hidden md:flex lg:flex md:w-1/2 h-screen bg-[#E7EEF8] items-center justify-center ">
				<div className="absolute top-0 left-0 p-4">
					<img src={logo} alt="Company Logo" className="h-12" />
				</div>
				<ImageComponent
					src={PasswordImage}
					alt="Password image"
					height={"full"}
					width={"full"}
					fit={"center"}
				/>
			</div>
			<div className="flex-grow flex flex-col items-center justify-center h-screen ">
				<div className="flex flex-col lg:ml-[-10rem] w-4/5 lg:w-3/5 gap-6 md:gap-1">
					<div className="flex flex-col md:w-full md:h-[63px] items-start md:gap-1">
						<h2 className="md:text-2xl font-semibold text-neutral-850 text-center">
							Forgot Password
						</h2>

						<h4 className="text-[10px] text-[#4b4b4b] font-normal text-neutral-850">
							Kindly input your email address
						</h4>
					</div>
					<div className="flex flex-col md:h-[191px] items-start gap-8 ">
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
							className=" w-full h-[54px] font-[18px] py-4.5 px-2.5 rounded-[16px] font-hk bg-[#08418A] text-white hover:bg-opacity-80 shadow-sm"
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
