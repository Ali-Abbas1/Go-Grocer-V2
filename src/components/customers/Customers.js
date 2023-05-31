import React from "react";

const Customers = () => {
  return (
    <div
      className={`mx-auto container max-w-[1440px] mt-[84px] bg-customers object-cover bg-no-repeat bg-cover xl:px-10 md:px-6 px-4`}
    >
      <div className="mx-auto max-w-[942px] flex flex-col space-y-[120px] md:space-y-0 md:flex-row justify-between items-center py-[100px] md:py-[50px]">
        <div>
          <h2 className="font-public font-bold text-[43px] leading-[54px] md:text-[30px] md:leading-[38px] xl:text-[42px] xl:leading-[54px] text-white text-center">
            10K+
          </h2>
          <p className="font-inter font-medium text-[14px] leading-[22px] md:text-[10px] md:leading-[15px] xl:text-sm text-center max-w-[200px] text-white">
            Satisfied Costumers All Great Over The World{" "}
          </p>
        </div>
        <div>
          <h2 className="font-public font-bold text-[43px] leading-[54px] md:text-[30px] md:leading-[38px] xl:text-[42px] xl:leading-[54px] text-white text-center">
            4M
          </h2>
          <p className="font-inter font-medium text-[14px] leading-[22px] md:text-[10px] md:leading-[15px] xl:text-sm text-center max-w-[200px] text-white">
            Healthy Dishes Sold Including Milk Shakes Smooth
          </p>
        </div>
        <div>
          <h2 className="font-public font-bold text-[43px] leading-[54px] md:text-[32px] md:leading-[38px] xl:text-[42px] xl:leading-[54px] text-white text-center">
            99.99%
          </h2>
          <p className="font-inter font-medium text-[14px] leading-[22px] md:text-[10px] md:leading-[15px] xl:text-sm text-center max-w-[250px] text-white">
            Reliable Customer Support. We Provide Great Experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
