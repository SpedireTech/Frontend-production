import React, { useState } from "react";
import PasswordImage from "../../assets/auth/reset.svg";
import logo from "../../assets/spedire.png";
import PasswordInput from "../../components/reusables/PasswordInput";
import ImageComponent from "../../components/reusables/Image";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../util/http";

export default function ResetPassword() {
	const { token } = useParams();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		password: "",
		confirmPassword: "",
	});
	async function resetHandler() {
		const currentToastId = toast.loading("Loading...");
		if (formData.password !== formData.confirmPassword) {
			toast.error("Password does not match", {
				id: currentToastId,
				position: "top-left",
				duration: 9000,
			});
			return;
		}

		const data = {
			newPassword: formData.password,
			confirmPassword: formData.confirmPassword,
			token: token,
		};

		try {
			const response = await resetPassword(data);
			if (response.success === true) {
				toast.success(`Password reset successful`, {
					id: currentToastId,
					duration: 3000,
					position: "top-right",
				});
				navigate("/login");
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
		<div className="flex h-screen">
			<div className="hidden md:flex md:w-1/2 h-screen bg-[#E7EEF8] items-center justify-center ">
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
			<div className="flex-grow flex flex-col items-center  justify-center h-screen ">
				<div className="flex flex-col w-4/5 lg:w-[505px] gap-5 md:gap-8 ">
					<div className="flex flex-col md:w-full md:h-[63px] items-start gap-1 md:gap-0 ">
						<h2 className="text-[20px] md:text-[30px] font-semibold text-neutral-850 text-center">
							Reset Password
						</h2>

						<h4 className="text-base text-[#4b4b4b] font-normal text-neutral-850 text-center">
							Kindly input your password
						</h4>
					</div>
					<div className="flex flex-col md:h-[298px] items-start md:gap-7 text-base">
						<PasswordInput
							label="Password"
							placeholder="Enter Password"
							onChange={(e) =>
								setFormData({ ...formData, password: e.target.value })
							}
							value={formData.password}
						/>
						<PasswordInput
							label="Confirm Password"
							placeholder="Re-enter Password"
							onChange={(e) =>
								setFormData({ ...formData, confirmPassword: e.target.value })
							}
							value={formData.confirmPassword}
						/>

						<button
							type="submit"
							className="mt-4 md:mt-0 w-full h-[54px] font-semibold py-4.5 px-2.5 rounded-[16px] font-hk bg-[#08418A] text-base text-white hover:bg-opacity-80 shadow-sm"
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
