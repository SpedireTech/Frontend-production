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
		if (formData.password !== formData.confirmPassword) {
			toast.error("Password does not match", {
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
					duration: 3000,
					position: "top-right",
				});
				navigate("/login");
			}
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
			<div className="flex-grow flex flex-col items-center  justify-center h-screen ">
				<div className="flex flex-col  lg:ml-[-10rem] w-4/5 lg:w-3/5 gap-1 ">
					<div className="flex flex-col md:w-full md:h-[63px] items-start gap-1">
						<h2 className="md:text-2xl font-semibold text-neutral-850 text-center">
							Reset Password
						</h2>

						<h4 className="text-[14px] sm:text-[10px] text-[#4b4b4b] font-normal text-neutral-850 text-center">
							Kindly input your password
						</h4>
					</div>
					<div className="flex flex-col md:h-[298px] items-start md:gap-7">
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
