import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import VerifyPhoneNumber from "../src/pages/registration/VerifyPhoneNumber";
import PhoneVerification from "../src/pages/registration/VerifyOTP";
import RegistrationForm from "./pages/registration/SignUp";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import LandingPage from "./pages/landing/LandingPage";
import ResetPassword from "./pages/auth/ResetPassword";
import DashBoard from "./pages/DashBoard";
import CompleteRegistration from "./pages/registration/CompleteRegistration"
import SendItem from "./pages/backend/SendItem";
import DeliverItem from "./pages/backend/DeliverItem";

function App() {
	return (
		<div className="App">
			<Toaster position="top-center" />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/verify-number" element={<VerifyPhoneNumber />} />
					<Route path="/verify-otp" element={<PhoneVerification />} />
					<Route path="/signup" element={<RegistrationForm />} />
					<Route path="/login" element={<Login />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/reset-password" element={<ResetPassword />} />
					<Route path="/dashboard" element={<DashBoard />} />
					<Route path="/dashboard" element={<DashBoard />} />
					<Route path="/complete-registration" element={<CompleteRegistration />} />
					<Route path="/send" element={<SendItem />} />
					<Route path="/deliver" element={<DeliverItem />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
