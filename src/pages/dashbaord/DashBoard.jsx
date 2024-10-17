import React, { useState, useEffect } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavBarMobile from "./NavbarMobile";
import TotalAmountCard from "./TotalAmountCard";
import SideBar from "../../components/sidebar/SideBar";
import Cards from "../../components/reusables/Cards";
import Map from "./Map";
import RecentDeliveries from "./RecentDeliveries";
import BottomNavigation from "./BottomNavigation";
import ConfirmationModal from "./ConfirmAmountModal";
import PaymentModal from "./PaymentModal";

const DashBoard = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [modalOpen, setModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = () => setModalOpen(true);
  const openPaymentModal = () => setPaymentModalOpen(true);

  return (
    <div className="w-full flex flex-col gap-y-6 h-screen lg:px-4">
      {isDesktop ? <NavbarDesktop /> : <NavBarMobile />}
      <div className="relative w-full flex flex-col items-center px-4">
        <div className="flex flex-col w-full max-w-screen-lg items-center">
          <div className="w-full flex justify-center items-center">
            <TotalAmountCard />
          </div>
          <div className="w-full flex flex-wrap justify-center items-center mt-4">
            <Cards />
          </div>
        </div>
        <div className="w-full max-w-screen-lg flex flex-col md:flex-row justify-center items-center mt-4">
          <RecentDeliveries />
          <Map />
        </div>
      </div>

      <div className="w-screen lg:hidden">
        <BottomNavigation />
      </div>
      <p
        className="cursor-pointer text-blue-500 hover:text-blue-700"
        onClick={openModal}
      >
        Test aggreed
      </p>
      <p
        className="cursor-pointer text-blue-500 hover:text-blue-700"
        onClick={openPaymentModal}
      >
        Test payment
      </p>
      <ConfirmationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <PaymentModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
      />
    </div>
  );
};

export default DashBoard;
