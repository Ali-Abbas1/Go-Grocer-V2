import React from "react";

const Quality = () => {
  return (
    <div className="mx-auto container max-w-[1440px] mt-[104px] border-b border-[#CBCBCB] pb-[120px] xl:px-10 md:px-6 px-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mx-auto ">
        <div className="left-section max-w-full md:max-w-[50%] w-full mt-[170px] px-[30px] md:px-0">
          <img
            src="/assets/images/mobile.png"
            className="w-full h-full md:w-[371px] md:h-[625px]"
          />
        </div>
        <div className="right section max-w-full md:max-w-[50%] w-full">
          <div>
            <h2 className="max-w-full md:max-w-[520px] font-poppins text-center md:text-start font-bold text-[30px] leading-[34px] md:text-[36px] md:leading-[41px] xl:text-[53px] xl:leading-[61px]">
              Premium <span className="text-[#71C90C]">Quality</span> For Your
              Health
            </h2>
            <ol className="mt-16">
              <li className="font-inter text-[11px] leading-[18px] md:text-[14px] md:leading-[21px] xl:text-xl xl:leading-[31px] text-[#676767] list-disc max-w-[547px]">
                Premium quality food is made with ingredients that are packed
                with essential vitamins, minerals.
              </li>
              <li className="font-inter text-[11px] leading-[18px] md:text-[14px] md:leading-[21px] xl:text-xl xl:leading-[31px] text-[#676767] list-disc max-w-[547px] pt-7">
                These foods promote overall wellness by support healthy
                digestion and boosting immunity
              </li>
            </ol>
          </div>
          <div className="relative flex justify-center md:justify-start">
            <div
              role="button"
              className="flex items-center md:space-x-[14px] py-5 pl-[26px] bg-[#71C90C] w-[170px] rounded-[14px] mt-[66px]"
            >
              <p className="font-poppins font-medium text-lg leading-[22px] text-center text-white">
                Download
              </p>
              <svg
                width={28}
                height={28}
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5542 13.5464H22.3583"
                  stroke="white"
                  strokeWidth="2.25773"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.4561 5.64453L22.3581 13.5466L14.4561 21.4487"
                  stroke="white"
                  strokeWidth="2.25773"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <img
              src="/assets/images/arrow.png"
              className="absolute left-0 -rotate-[265deg] top-[180px] md:rotate-0 md:top-28 md:left-[142px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
