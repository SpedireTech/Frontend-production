import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyPhoneNumber from "../src/pages/registration/VerifyPhoneNumber";
import PhoneVerification from "../src/pages/registration/VerifyOTP";
import RegistrationForm from "../src/pages/registration/CompleteRegistration";
import LandingPage from "./pages/landing/LandingPage";
import Footer from "./components/Footer/Footer";
import widget from "./assets/widget.png";
import cancel from "./assets/cancel.png";
import { useEffect, useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

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
            <div className="absolute bottom-20">
              <a href="https://wa.me/+2348102661150">
                <AiOutlineWhatsApp className="cursor-pointer w-[40px] h-[40px]" />
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
          <Route path="/complete-registration" element={<RegistrationForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
