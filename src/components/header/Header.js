import React from "react";

const Header = () => {
  return (
    <div className="max-w-[1440px] mx-auto container flex justify-between items-center border-b border-[#CBCBCB] xl:px-10 md:px-6 px-4">
      <div className="logo-and-headerMenu flex justify-between items-center md:max-w-[60%] w-full">
        <div className="logo w-full max-w-full md:max-w-[40%]">
          <img src="/assets/images/logo.png" className="w-[150px] h-[150px]" />
        </div>
        <div className="hamburger-menu md:hidden">
          <svg
            width={34}
            height={25}
            viewBox="0 0 34 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.25 1H32.75H1.25Z" fill="#918F8F" />
            <path
              d="M1.25 1H32.75"
              stroke="#282828"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path d="M1.25 12.1631H32.75H1.25Z" fill="#918F8F" />
            <path
              d="M1.25 12.1631H32.75"
              stroke="#282828"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path d="M1.25 23.3252H32.75H1.25Z" fill="#918F8F" />
            <path
              d="M1.25 23.3252H32.75"
              stroke="#282828"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="header-menu w-full items-center hidden md:flex max-w-[60%]">
          <ul className=" font-inter text-lg font-medium text-[#606060] w-full flex justify-between items-center">
            <li>
              <a>Menu</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="login-Signup w-full hidden md:flex justify-between items-center max-w-[190px]">
        <a className="font-inter font-bold text-lg text-[#606060]">Login</a>
        <button className="px-[26px] py-[18px] font-inter font-bold text-lg bg-[#79CC19] rounded-[18px] text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
