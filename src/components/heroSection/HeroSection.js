import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto container xl:px-10 md:px-6 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mt-[50px]">
        <div className="left-section mt-[57px] md:mt-[120px] md:max-w-[50%]">
          <div className="flex items-center w-full justify-center md:justify-start">
            <hr className="w-[54px] h-[2px] bg-black md:bg-[#201F1F] md:opacity-20" />
            <p className="text-black md:text-[#201f1f33] ml-5 font-poppins font-semibold tracking-[2px]">
              OVER 1000 USERS
            </p>
          </div>
          <div className="max-w-[500px]">
            <h2 className="font-poppins font-semibold text-[46px] leading-[55px] text-center md:text-start md:text-[53px] md:leading-[64px] xl:text-[75px] 2xl:leading-[90px] max-w-[590px] flex-wrap break-words mt-[18px]">
              Enjoy Foods All Over The{" "}
              <span className="text-[#71C90C]">World</span>
            </h2>
            <p className="font-inter font-medium text-center md:text-start text-xs xl:text-lg text-[#676767] opacity-70 mt-4">
              GoGrocer help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a <span className="text-[#71C90C]">$20 bonus.</span>
            </p>
          </div>
          <div className="flex justify-between items-center mt-[53px] mx-auto md:mx-0 max-w-[284px]">
            <button className="text-white font-poppins font-medium text-base py-[18px] px-7 bg-[#71C90C] rounded-xl ">
              Get Started
            </button>
            <button className="font-poppins font-medium text-base px-7 py-[18px] border-2 border-[#71C90C] text-[#71C90C] rounded-xl">
              Go Pro
            </button>
          </div>
          <div className="flex justify-between max-w-[301px] mt-[26px] md:mt-8">
            <div className="flex items-end space-x-1">
              <img
                src="/assets/images/star.png"
                className="w-[28px] h-[28px]"
              />
              <img
                src="/assets/images/Vector.png"
                className="w-[90px] h-[20px]"
                alt="TrustPilot"
              />
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/assets/images/rating.png"
                className="w-[95px] h-[15px]"
              />
              <p className="font-jakarta font-medium text-base text-[#334155] opacity-70">
                4900+
              </p>
            </div>
          </div>
        </div>
        <div className="right-section max-w-full md:max-w-[50%] mt-[47px] md:mt-0">
          <img
            src="/assets/images/Hero.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
