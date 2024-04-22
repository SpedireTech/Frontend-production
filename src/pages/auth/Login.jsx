import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../../assets/auth/login.svg";
import { FaGoogle } from "react-icons/fa";
import InputComponent from "../../components/reusables/InputComponent";
import PasswordInput from "../../components/reusables/PasswordInput";
import ImageComponent from "../../components/reusables/Image";

export default function Login() {
	// const toast = useToast();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [info, setInfo] = useState("");
	async function loginHandler() {
		if (!formData.email || !formData.password) {
			setInfo("Fill out all fields to login");
			return;
		}

		const data = {
			email: formData.email,
			password: formData.password,
		};

		try {
			const response = await signin(data);
			if (response.status === "false") {
				storeItem("token", response.token, 86400000);
				navigate("/verify-number");
				return;
			}
			await initializeUser(response.token);
			login(response.token);
			setUser(response?.data?.user?.id);
			storeItem("token", response.token, 86400000);
			storeItem(
				"user",
				{
					id: response?.data?.user?.id,
					name: `${response?.data?.user?.firstName} ${response?.data?.user?.lastName}`,
					role: response?.data?.user?.role,
				},
				86400000
			);
			// toast({
			// 	title: `Login Successful`,
			// 	description: ``,
			// 	status: "success",
			// 	duration: 3000,
			// 	isClosable: true,
			// 	position: "top-right",
			// });
			navigate("/");
		} catch (error) {
			// toast({
			// 	title: `${error?.response?.data.message || "something went wrong"}`,
			// 	description: ``,
			// 	status: "error",
			// 	duration: 3000,
			// 	isClosable: true,
			// 	position: "top-right",
			// });
		}
	}
	return (
		<div className="flex h-screen">
			<div className="hidden md:flex lg:flex lg:w-1/2 h-screen items-center justify-center ">
				{/* <img
					src={LoginImage}
					alt="Login image"
					className="h-full w-full object-cover"
				/> */}
				<ImageComponent
					src={LoginImage}
					alt="Login image"
					height={"full"}
					width={"full"}
				/>
			</div>
			<div className="flex-grow flex flex-col items-center justify-center">
				<div className="flex flex-col items-start  w-full md:w-4/5 lg:w-3/5 ">
					<h2 className="text-xl font-semibold text-neutral-850">
						Welcome back
					</h2>
					<div className="mt-4 w-full bg-[#F9F9F9] hover:bg-gray-200 rounded-lg text-sm">
						<button className="flex items-center w-full justify-center  p-3 ">
							<FaGoogle className="mr-2" /> Continue with Google
						</button>
					</div>
					<div className="relative flex items-center mb-4 w-full ">
						<div className="flex-grow border-t border-gray-300"></div>
						<span className="flex-shrink mx-4 text-gray-400">or</span>
						<div className="flex-grow border-t border-gray-300"></div>
					</div>
					<InputComponent
						label={"Email"}
						placeholder="example@gmail.com"
						type="email"
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
						value={formData.email}
					/>

					<PasswordInput
						label="Password"
						onChange={(e) =>
							setFormData({ ...formData, password: e.target.value })
						}
						value={formData.password}
					/>
					<div className="flex w-full justify-end items-end">
						<Link
							href="/forgot-password"
							className="text-[#4B4B4B] text-xs font-normal"
						>
							Forgot Password?
						</Link>
					</div>
					<button
						type="submit"
						className="w-full mt-8 py-2 px-8 font-[18px] font-hg rounded-lg bg-button text-white hover:bg-opacity-80 shadow-sm"
						onClick={loginHandler}
					>
						Login
					</button>

					<div className="flex w-full justify-center items-center mt-8 ">
						<span className="text-[#4B4B4B] text-xs">
							Don't have an account?{" "}
							<Link href="/signup" className="text-gray-700">
								Register
							</Link>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
