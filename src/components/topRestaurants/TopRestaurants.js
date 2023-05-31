import React from "react";

const TopRestaurants = () => {
  return (
    <div className="mx-auto container max-w-[1440px] mt-[100px] border-b border-[#CBCBCB] pb-[120px] xl:px-10 md:px-6 px-4">
      <div>
        <h2 className="font-poppins font-semibold text-[30px] leading-[120%] md:text-[45px] md:leading-[25px] text-center">
          Our Top <span className="text-[#71C90C]">Restaurants</span>
        </h2>
      </div>
      <div className="cards pt-[85px] flex flex-col space-y-[40px] md:space-y-0 md:flex-row justify-between items-center">
        <div className="card1 rounded-[30px] border border-[#F4F4F6] card-shadow max-w-[395px] pb-[18px] cursor-pointer">
          <div className=" ">
            <img src="/assets/images/card1.png" className="rounded-t-[30px]" />
          </div>
          <div className="px-[32px]">
            <h2 className="font-poppins text-xs leading-[13px] text-[#DAA31A] px-2 py-[3px] bg-[#F7EDD0] rounded-[6px] w-[65px] text-center mt-[10px]">
              Healthy
            </h2>
            <h2 className="font-poppins font-semibold md:text-[18px] md:leading-[30px] xl:text-[25px] xL:leading-[42px]">
              The Chicken King
            </h2>
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-between items-center w-[55%]">
                <p className="text-[#8E97A6] font-manrope md:text-xs xl:text-[19px] xl:leading-[25px]">24min •</p>
                <svg
                  width={18}
                  height={19}
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9993 17.687C13.7033 18.6197 15.2019 17.4893 14.876 15.511L14.2909 11.9589L16.7696 9.44334C18.1482 8.04428 17.5786 6.21108 15.6708 5.92245L12.2453 5.40421L10.7209 2.18842C9.86699 0.387088 8.01299 0.367713 7.1575 2.17244L5.62554 5.40421L2.19999 5.92245C0.294844 6.21067 -0.279337 8.0423 1.10119 9.44334L3.57994 11.9589L2.99479 15.511C2.66935 17.4865 4.16507 18.621 5.87149 17.687L8.9354 16.01L11.9993 17.687Z"
                    fill="#71C90C"
                  />
                </svg>
                <p className="font-manrope text-lg leading-[25px] text-[#8E97A6]">
                  4.8
                </p>
              </div>
              <div className="">
                <div className="w-[40px] h-[40px] rounded-full bg-[#DBD9EE] flex justify-center items-center">
                  <svg
                    width={16}
                    height={21}
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6171 0.884848C9.71556 0.39841 6.73762 0.39841 3.83606 0.884848C2.77602 1.06256 1.93183 1.87636 1.71928 2.93154C0.745572 7.76554 0.692444 12.7398 1.56268 17.5935L1.91699 19.5696C2.02624 20.179 2.76908 20.4225 3.21789 19.9961L7.49455 15.9333C7.90477 15.5436 8.54841 15.5436 8.95864 15.9333L13.2353 19.9961C13.6841 20.4225 14.4269 20.179 14.5362 19.5696L14.8905 17.5935C15.7607 12.7398 15.7076 7.76554 14.7339 2.93154C14.5214 1.87636 13.6772 1.06256 12.6171 0.884848Z"
                      fill="#71C90C"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card2 rounded-[30px] border border-[#F4F4F6] card-shadow max-w-[395px] pb-[18px] cursor-pointer">
          <div className=" ">
            <img src="/assets/images/card2.png" className="rounded-t-[30px]" />
          </div>
          <div className="px-[32px]">
            <h2 className="font-poppins text-xs leading-[13px] text-[#FB471D] px-2 py-[3px] bg-[#F7C5BA] rounded-[6px] w-[65px] text-center mt-[10px]">
              Trending
            </h2>
            <h2 className="font-poppins font-semibold md:text-[18px] md:leading-[30px] xl:text-[25px] xl:leading-[42px]">
              The Burger King
            </h2>
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-between items-center w-[55%]">
                <p className="text-[#8E97A6] font-manrope md:text-xs xl:text-[19px] xl:leading-[25px]">24min •</p>
                <svg
                  width={18}
                  height={19}
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9993 17.687C13.7033 18.6197 15.2019 17.4893 14.876 15.511L14.2909 11.9589L16.7696 9.44334C18.1482 8.04428 17.5786 6.21108 15.6708 5.92245L12.2453 5.40421L10.7209 2.18842C9.86699 0.387088 8.01299 0.367713 7.1575 2.17244L5.62554 5.40421L2.19999 5.92245C0.294844 6.21067 -0.279337 8.0423 1.10119 9.44334L3.57994 11.9589L2.99479 15.511C2.66935 17.4865 4.16507 18.621 5.87149 17.687L8.9354 16.01L11.9993 17.687Z"
                    fill="#71C90C"
                  />
                </svg>
                <p className="font-manrope text-lg leading-[25px] text-[#8E97A6]">
                  4.9
                </p>
              </div>
              <div className="">
                <div className="w-[40px] h-[40px] rounded-full bg-[#DBD9EE] flex justify-center items-center">
                  <svg
                    width={16}
                    height={21}
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6171 0.884848C9.71556 0.39841 6.73762 0.39841 3.83606 0.884848C2.77602 1.06256 1.93183 1.87636 1.71928 2.93154C0.745572 7.76554 0.692444 12.7398 1.56268 17.5935L1.91699 19.5696C2.02624 20.179 2.76908 20.4225 3.21789 19.9961L7.49455 15.9333C7.90477 15.5436 8.54841 15.5436 8.95864 15.9333L13.2353 19.9961C13.6841 20.4225 14.4269 20.179 14.5362 19.5696L14.8905 17.5935C15.7607 12.7398 15.7076 7.76554 14.7339 2.93154C14.5214 1.87636 13.6772 1.06256 12.6171 0.884848Z"
                      fill="#71C90C"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card3 rounded-[30px] border border-[#F4F4F6] card-shadow max-w-[395px] pb-[18px] cursor-pointer">
          <div className=" ">
            <img src="/assets/images/card3.png" className="rounded-t-[30px]" />
          </div>
          <div className="px-[32px]">
            <h2 className="font-poppins text-xs leading-[13px] text-[#DAA31A] px-2 py-[3px] bg-[#F7EDD0] rounded-[6px] w-[65px] text-center mt-[10px]">
              Healthy
            </h2>
            <h2 className="font-poppins font-semibold md:text-[18px] md:leading-[30px] xl:text-[25px] xl:leading-[42px]">
              The Chicken King
            </h2>
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-between items-center w-[55%]">
                <p className="text-[#8E97A6] font-manrope md:text-xs xl:text-[19px] xl:leading-[25px]">24min •</p>
                <svg
                  width={18}
                  height={19}
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9993 17.687C13.7033 18.6197 15.2019 17.4893 14.876 15.511L14.2909 11.9589L16.7696 9.44334C18.1482 8.04428 17.5786 6.21108 15.6708 5.92245L12.2453 5.40421L10.7209 2.18842C9.86699 0.387088 8.01299 0.367713 7.1575 2.17244L5.62554 5.40421L2.19999 5.92245C0.294844 6.21067 -0.279337 8.0423 1.10119 9.44334L3.57994 11.9589L2.99479 15.511C2.66935 17.4865 4.16507 18.621 5.87149 17.687L8.9354 16.01L11.9993 17.687Z"
                    fill="#71C90C"
                  />
                </svg>
                <p className="font-manrope text-lg leading-[25px] text-[#8E97A6]">
                  4.8
                </p>
              </div>
              <div className="">
                <div className="w-[40px] h-[40px] rounded-full bg-[#DBD9EE] flex justify-center items-center">
                  <svg
                    width={16}
                    height={21}
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6171 0.884848C9.71556 0.39841 6.73762 0.39841 3.83606 0.884848C2.77602 1.06256 1.93183 1.87636 1.71928 2.93154C0.745572 7.76554 0.692444 12.7398 1.56268 17.5935L1.91699 19.5696C2.02624 20.179 2.76908 20.4225 3.21789 19.9961L7.49455 15.9333C7.90477 15.5436 8.54841 15.5436 8.95864 15.9333L13.2353 19.9961C13.6841 20.4225 14.4269 20.179 14.5362 19.5696L14.8905 17.5935C15.7607 12.7398 15.7076 7.76554 14.7339 2.93154C14.5214 1.87636 13.6772 1.06256 12.6171 0.884848Z"
                      fill="#71C90C"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div role="button" className="flex items-center justify-end space-x-5 pt-[65px]">
        <p className="font-poppins font-medium text-xl leading-[45px] text-[#ACADB9]">
          View All{" "}
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
            stroke="#ACADB9"
            strokeWidth="2.25773"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.4561 5.64453L22.3581 13.5466L14.4561 21.4487"
            stroke="#ACADB9"
            strokeWidth="2.25773"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default TopRestaurants;
