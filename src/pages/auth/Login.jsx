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

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [info, setInfo] = useState("");
	async function loginHandler() {
		if (!formData.email || !formData.password) {
			toast.error("Fill out all fields to login", {
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
			const res = await initializeUser(response?.accessToken);
			console.log("res: " + res);
			setUser(res?.data?.user?.id);
			storeItem("token", response?.accessToken, 86400000);
			storeItem(
				"user",
				{
					id: response?.data?.user?.id,
					name: response?.data?.user?.fullName,
					role: response?.data?.user?.role,
				},
				86400000
			);
			toast.success(`Login Successful`, {
				duration: 3000,
				position: "top-right",
			});
			navigate("/");
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
				<div className="flex flex-col items-start lg:ml-[-10rem] w-4/5 lg:w-3/5 ">
					<h2 className="text-xl font-semibold text-neutral-850">
						Welcome back
					</h2>
					<div className="mt-4 w-full bg-[#F9F9F9] hover:bg-gray-200 rounded-lg text-sm">
						<button className="flex items-center w-full justify-center  p-3 ">
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
							className="text-button text-xs font-normal"
						>
							Forgot Password?
						</Link>
					</div>
					<button
						type="submit"
						className=" w-full h-[54px] mt-4 py-2 px-8 font-[18px] font-hg rounded-lg bg-button text-white hover:bg-opacity-80 shadow-sm"
						onClick={loginHandler}
					>
						Login
					</button>

					<div className="flex w-full justify-center items-center mt-8 ">
						<span className="text-[#4B4B4B] text-xs">
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
