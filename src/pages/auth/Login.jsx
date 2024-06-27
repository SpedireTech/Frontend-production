import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { login, initializeUser } from "../../util/http";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../../assets/auth/login.svg";
import googleIcon from "../../assets/GoogleIcon.svg";
import logo from "../../assets/spedire.png";
import { storeItem } from "../../util/lib";
import InputComponent from "../../components/reusables/InputComponent";
import PasswordInput from "../../components/reusables/PasswordInput";
import ImageComponent from "../../components/reusables/Image";

export default function Login() {
	const navigate = useNavigate();
	const [user, setUser] = useState({});
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	const handleResize = () => {
		setIsMobile(window.innerWidth < 768);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const googleAuthLogin = () => {
		window.location.href =
			"http://localhost:8080/login/oauth2/autorcode/google";
	};

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [info, setInfo] = useState("");
	async function loginHandler() {
		const currentToastId = toast.loading("Loading...");
		if (!formData.email || !formData.password) {
			toast.error("Fill out all fields to login", {
				id: currentToastId,
				duration: 3000,
				position: "top-center",
			});
			setInfo("Fill out all fields to login");
			return;
		}

		const data = {
			email: formData.email,
			password: formData.password,
		};

		try {
			const response = await login(data);
			if (response.success === "false") {
				navigate("/verify-number");
				return;
			}
			console.log(response?.access_token);
			const res = await initializeUser(response?.access_token);
			console.log("res: " + res);
			setUser(res?.data);
			storeItem("token", response?.access_token, 86400000);
			storeItem(
				"user",
				{
					name: res?.data?.fullName,
					email: res?.data?.email,
					phoneNumber: res?.data?.phoneNumber,
					profileImage: res?.data?.profileImage,
				},
				86400000
			);
			toast.success(`Login Successful`, {
				id: currentToastId,
				duration: 3000,
				position: "top-right",
			});
			navigate("/dashboard");
		} catch (error) {
			toast.error(
				`${error?.response?.data.message || "something went wrong"}`,
				{
					id: currentToastId,
					duration: 3000,
					position: "top-center",
				}
			);
		}
	}
	return (
		<div className="flex h-screen">
			<div
				className="flex lg:w-1/2 h-screen bg-[#E7EEF8] items-center justify-center "
				style={{ display: isMobile ? "none" : "flex" }}
			>
				<div className="absolute top-0 left-0 p-4">
					<img src={logo} alt="Company Logo" className="h-12" />
				</div>
				<ImageComponent
					src={LoginImage}
					alt="Login image"
					height={"full"}
					width={"full"}
					fit={"center"}
					style={{ transform: "scale(1)" }}
				/>
			</div>
			<div className="flex-grow flex flex-col items-center justify-center">
				<div className="flex flex-col items-start  w-4/5 lg:w-[505px] ">
					<h2 className="text-[20px] md:text-[30px] font-semibold text-neutral-850">
						Welcome back
					</h2>
					<div className="mt-4 w-full bg-[#F9F9F9] hover:bg-gray-200 rounded-lg text-base">
						<button
							className="flex items-center w-full justify-center  p-3 "
							onClick={googleAuthLogin}
						>
							<img
								src={googleIcon}
								alt="Continue with Google"
								className="mr-2 h-6"
							/>{" "}
							Continue with Google
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
						info={info}
					/>

					<PasswordInput
						label="Password"
						placeholder="Enter Password"
						onChange={(e) =>
							setFormData({ ...formData, password: e.target.value })
						}
						value={formData.password}
					/>
					<div className="flex w-full justify-end items-end">
						<Link
							to="/forgot-password"
							className="text-button text-base font-normal"
						>
							Forgot Password?
						</Link>
					</div>
					<button
						type="submit"
						className=" w-full h-[54px] mt-4 py-2 px-8 font-semibold rounded-lg bg-button text-white text-base hover:bg-opacity-80 shadow-sm"
						onClick={loginHandler}
					>
						Login
					</button>

					<div className="flex w-full justify-center items-center mt-8 ">
						<span className="text-[#4B4B4B] text-base">
							Don't have an account?{" "}
							<Link to="/signup" className="text-button">
								Register
							</Link>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
