import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyPhoneNumber from "../src/pages/registration/VerifyPhoneNumber";
import PhoneVerification from "../src/pages/registration/VerifyOTP";
import RegistrationForm from "../src/pages/registration/CompleteRegistration";
<<<<<<< HEAD
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/verify-number" element={<VerifyPhoneNumber />} />
					<Route path="/verify-otp" element={<PhoneVerification />} />
					<Route path="/complete-registration" element={<RegistrationForm />} />
					<Route path="/login" element={<Login />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
=======
import LandingPage from "./pages/landing/LandingPage";
import Nav from "./components/Header/Nav";

function App() {
  return (
    <div className="App">
      <Nav />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/verify-number" element={<VerifyPhoneNumber />} />
          <Route path="/verify-otp" element={<PhoneVerification />} />
          <Route path="/complete-registration" element={<RegistrationForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
>>>>>>> 05d050ebc0b318c76060aef496a10d65d0d2e4d8
}

export default App;
