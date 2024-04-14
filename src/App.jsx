import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyPhoneNumber from "../src/pages/registration/VerifyPhoneNumber";
import PhoneVerification from "../src/pages/registration/VerifyOTP";
import RegistrationForm from "../src/pages/registration/CompleteRegistration";
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
}

export default App;
