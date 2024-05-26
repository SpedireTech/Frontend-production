import React from "react";
import OurTeam from "../../assets/OurTeam.svg";

import Footer from "../../components/Footer/Footer.jsx";

const StoryValues = () => {
  return (
    <div>
      <div className="flex px-10 flex-col items-center">
        <div className="w-full rounded-lg bg-button shadow-lg">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full h-full md:w-1/2 flex justify-center md:justify-start">
              <img
                src={OurTeam}
                alt="Our Story"
                className="shadow-lg w-full h-full md:w-4/4"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 mt-8 md:mt-0 md:ml-8 text-left text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white">Our Story</h2>
              </div>
              <p className="text-lg leading-relaxed">
                It all started at Semicolon, where we were united not just by
                our friendship. Our capstone project was looming, and we were
                determined to make it something meaningful, something that could
                address a pain point we all experienced, the chaotic,
                unreliable, and costly nature of traditional delivery services
                in Lagos. The turning point came one morning, fueled by the
                shared frustration of missing packages and the delays. This
                wasn't just our problem; it was a collective pain for countless
                residents and businesses. That's when the question that changed
                everything was posed: "What if deliveries could be made by
                people who are already on their way?"
              </p>
            </div>
          </div>
        </div>
        <div className="my-10"></div>
        <div className="relative flex flex-col items-center w-full p-8">
          <h2 className="text-3xl font-bold text-#121212 text-center mb-4">
            The Values we live by
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            We are committed to relentlessly exceed customer’s expectation
            through innovative technology solutions for logistics
          </p>
          <div className="flex flex-col h-[446px] w-[976px] rounded-lg bg-button pt-8 pb-8  md:flex-row justify-center"></div>
          <div className="w-full absolute top-44 flex pt-8 pb-8  md:flex-row justify-between">
            <div className="bg-white shadow-lg p-6 rounded-lg w-full md:w-80 h-auto md:h-80">
              <h3 className="text-xl font-semibold text-center text-#041E40 mt-5 mb-10">
                Innovation
              </h3>
              <p className="text-gray-700 text-center">
                Our solutions are customizable and stress free. We provide
                competitive transaction and processing fees
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg w-full md:w-80 h-auto md:h-80">
              <h3 className="text-xl text-center font-semibold text-#041E40 mt-5 mb-10">
                Growth & <br /> Excellence
              </h3>
              <p className="text-gray-700 text-center">
                Our solutions are customizable and stress free. We provide
                competitive transaction and processing fees
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg w-full md:w-80 h-auto md:h-80">
              <h3 className="text-xl font-semibold text-center text-#041E40 mt-5 mb-10">
                Teamwork
              </h3>
              <p className="text-gray-700 text-center">
                Our solutions are customizable and stress free. We provide
                competitive transaction and processing fees
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StoryValues;
