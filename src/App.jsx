import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import VerifyPhoneNumber from "../src/pages/registration/VerifyPhoneNumber";
import PhoneVerification from "../src/pages/registration/VerifyOTP";
import RegistrationForm from "./pages/registration/SignUp";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import LandingPage from "./pages/landing/LandingPage";
import ResetPassword from "./pages/auth/ResetPassword";
import AboutPage from "./pages/About";
import widget from "./assets/widget.png";
import cancel from "./assets/cancel.png";
import { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import DashBoard from "./pages/dashbaord/DashBoard";
import About from "./pages/About";
import DeliveryForm from "./pages/sendItem/DeliveryForm"

function App() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((previous) => !previous);
  };

  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <div className="App">
      <Toaster position="top-center" />
      <div className="" onClick={handleToggle}>
        {open ? (
          <div className="fixed bottom-10 z-50 right-1 w-[80px] h-[80px] pb-4 flex justify-center items-end">
            <img
              src={widget}
              alt="widget"
              className="cursor-pointer w-[40px] h-[40px]"
            />
          </div>
        ) : (
          <div className="fixed bottom-10 right-1 z-50 w-[80px] h-[80px] pb-4 flex justify-center items-end">
            <div className="absolute bottom-20 flex flex-col gap-y-6">
              <a href="https://wa.me/+2348102661150">
                <AiOutlineWhatsApp className="cursor-pointer w-[40px] h-[40px] text-green-500" />
              </a>
              <a href="mailto:enubiakjoseph@gmail.com">
                <AiOutlineMail className="cursor-pointer w-[40px] h-[40px] text-red-500" />
              </a>
            </div>
            <img
              src={cancel}
              alt="cancel"
              className="cursor-pointer w-[40px] h-[40px]"
            />
          </div>
        )}
      </div>
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
          <Route path="/about" element={<About />} />
          <Route path="/deliver-item" element={<DeliveryForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
