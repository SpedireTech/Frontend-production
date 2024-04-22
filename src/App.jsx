import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyPhoneNumber from "../src/pages/registration/VerifyPhoneNumber";
import PhoneVerification from "../src/pages/registration/VerifyOTP";
import RegistrationForm from "../src/pages/registration/CompleteRegistration";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import LandingPage from "./pages/landing/LandingPage";
import Nav from "./components/Header/Nav";
import ResetPassword from "./pages/auth/ResetPassword";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/verify-number" element={<VerifyPhoneNumber />} />
					<Route path="/verify-otp" element={<PhoneVerification />} />
					<Route path="/complete-registration" element={<RegistrationForm />} />
					<Route path="/login" element={<Login />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/reset-password" element={<ResetPassword />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
