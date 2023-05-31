import React from "react";

const Purchase = () => {
  return (
    <div className="mx-auto container max-w-[1440px] flex flex-col md:flex-row justify-between mt-[100px] border-b border-[#CBCBCB] pb-[30px] xl:px-10 md:px-6 px-4">
      <div className="max-w-full md:max-w-[50%] relative">
        <div className="">
          <h2 className="font-poppins font-bold text-[30px] leading-[34px] md:text-[36px] md:leading-[41px] xl:text-[50px] xl:leading-[58px] max-w-[520px]">
            Control <span className="text-[#71C90C]">Purchases</span> Via
            Dashboard
          </h2>
        </div>
        <div className="flex flex-col w-full space-y-3 xl:space-y-6 justify-between items-start ">
          <div className="card1 bg-white px-[18px] mt-6 card-shadow rounded-xl flex justify-between items-end py-[10px] min-w-[75%] md:min-w-[245px] xl:min-w-[345px]">
            <div className="flex justify-between items-center">
              <div className="items-end flex">
                <img src="/assets/images/FoodPurchase.png" />
              </div>
              <div>
                <h2 className="font-poppins font-semibold md:text-[13px] md:leading-[18px] xl:text-[20px] xl:leading-[26px] text-[#323142]">
                  Chicken Hell
                </h2>
                <p className="font-poppins font-medium text-sm text-[#323142] pt-1">
                  On The Way
                </p>
              </div>
            </div>
            <div className="text-[#ACADB9] max-w-[51px] font-poppins font-medium text-xs leading-[18px] text-end tracking-[140%]">
              3:09 PM
            </div>
          </div>
          <div className="card2 bg-white px-[18px] rounded-xl flex justify-between items-end py-[10px] min-w-[75%] md:min-w-[250px] xl:min-w-[345px]">
            <div className="flex justify-between items-center">
              <div className="items-end flex">
                <img src="/assets/images/FoodPurchase.png" />
              </div>
              <div>
                <h2 className="font-poppins font-semibold md:text-[13px] md:leading-[18px] xl:text-[20px] xl:leading-[26px] text-[#323142]">
                  Swe Dish
                </h2>
                <p className="font-poppins font-medium text-sm text-[#323142] pt-1">
                  Delivered
                </p>
              </div>
            </div>
            <div className="text-[#ACADB9] max-w-[51px] font-poppins font-medium text-xs leading-[18px] text-end tracking-[140%]">
              Yesterday
            </div>
          </div>
          <div className="card3 bg-white px-[18px] rounded-xl flex justify-between items-end py-[10px] min-w-[75%] md:min-w-[245px] xl:min-w-[345px]">
            <div className="flex justify-between items-center">
              <div className="items-end flex">
                <img src="/assets/images/FoodPurchase.png" />
              </div>
              <div>
                <h2 className="font-poppins font-semibold md:text-[13px] md:leading-[18px] xl:text-[20px] xl:leading-[26px] text-[#323142]">
                  FIsh Hell Veg
                </h2>
                <p className="font-poppins font-medium text-sm text-[#F1534E] pt-1">
                  Cancelled
                </p>
              </div>
            </div>
            <div className="text-[#ACADB9] max-w-[51px] font-poppins font-medium text-xs leading-[18px] text-end tracking-[140%]">
              Yesterday
            </div>
          </div>
        </div>
        <div>
          <svg
            width={56}
            height={101}
            viewBox="0 0 39 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[380px] right-10 md:hidden"
          >
            <path
              d="M4.96429 0.661362C4.51321 0.500025 4.01674 0.734912 3.85541 1.18599C3.69407 1.63708 3.92896 2.13354 4.38004 2.29488L4.96429 0.661362ZM25.2567 23.7072L26.1171 23.5966L25.2567 23.7072ZM10.1877 48.9993L10.2057 48.1321L10.1877 48.9993ZM1.0939 41.0324L1.96062 40.9974L1.0939 41.0324ZM8.12398 33.055L8.39512 33.8789L8.12398 33.055ZM30.5216 55.5207L31.3862 55.4503L30.5216 55.5207ZM15.0807 78.5088L15.056 77.6417L15.0807 78.5088ZM8.06486 72.7333L8.91134 72.5438L8.06486 72.7333ZM37.1786 90.4497L36.3162 90.356L37.1786 90.4497ZM23.7953 110.666L22.9565 110.445C22.8759 110.751 22.9683 111.076 23.1977 111.294C23.4271 111.512 23.7571 111.588 24.0586 111.492L23.7953 110.666ZM26.6715 103.151C26.7935 102.688 26.5168 102.213 26.0536 102.091C25.5903 101.969 25.1158 102.246 24.9938 102.709L26.6715 103.151ZM32.0623 108.942C32.5188 108.797 32.7709 108.309 32.6255 107.853C32.4801 107.396 31.9922 107.144 31.5357 107.289L32.0623 108.942ZM4.67216 1.47812C4.38004 2.29488 4.37983 2.29481 4.37969 2.29475C4.37973 2.29477 4.37966 2.29474 4.37975 2.29478C4.37994 2.29485 4.3804 2.29501 4.38115 2.29528C4.38264 2.29582 4.38524 2.29676 4.38894 2.2981C4.39633 2.3008 4.40811 2.30511 4.42414 2.31105C4.4562 2.32293 4.50525 2.34131 4.57022 2.36628C4.70019 2.41622 4.89379 2.49244 5.14249 2.5955C5.64001 2.80166 6.35729 3.11488 7.22615 3.53945C8.96562 4.38945 11.3034 5.68123 13.699 7.44734C18.507 10.992 23.4387 16.3632 24.3964 23.8177L26.1171 23.5966C25.0729 15.4684 19.7123 9.72516 14.7285 6.05094C12.2281 4.20762 9.79516 2.86389 7.98782 1.98074C7.08328 1.53874 6.33315 1.21097 5.80661 0.992788C5.54328 0.88367 5.33569 0.801883 5.19247 0.746855C5.12085 0.719337 5.06532 0.698501 5.02693 0.684278C5.00774 0.677166 4.99283 0.671708 4.98235 0.667892C4.97711 0.665983 4.97297 0.664486 4.96995 0.663398C4.96845 0.662855 4.96722 0.662414 4.96628 0.662073C4.9658 0.661903 4.96531 0.661726 4.96507 0.661642C4.96465 0.66149 4.96429 0.661362 4.67216 1.47812ZM24.3964 23.8177C25.1443 29.6393 23.8978 35.8261 21.2738 40.5089C18.643 45.2036 14.7362 48.2262 10.2057 48.1321L10.1697 49.8665C15.5854 49.9791 19.9844 46.3586 22.7872 41.357C25.5967 36.3434 26.9116 29.7808 26.1171 23.5966L24.3964 23.8177ZM10.2057 48.1321C8.87798 48.1045 6.82399 47.4953 5.0843 46.2608C3.36113 45.0379 2.05305 43.2833 1.96062 40.9974L0.227181 41.0675C0.347799 44.0507 2.06874 46.2481 4.08028 47.6756C6.0753 49.0913 8.4617 49.8311 10.1697 49.8665L10.2057 48.1321ZM1.96062 40.9974C1.87323 38.8358 2.76951 37.3157 4.0352 36.1964C5.32923 35.052 7.00541 34.3362 8.39512 33.8789L7.85284 32.231C6.37974 32.7158 4.44112 33.5215 2.88594 34.8968C1.30243 36.2971 0.115075 38.2947 0.227181 41.0675L1.96062 40.9974ZM8.39512 33.8789C13.9347 32.056 18.9372 34.3128 22.7674 38.6846C26.6109 43.0714 29.1601 49.4894 29.6571 55.5912L31.3862 55.4503C30.8622 49.017 28.1859 42.2365 24.0723 37.5414C19.9456 32.8312 14.2597 30.1227 7.85284 32.231L8.39512 33.8789ZM29.6571 55.5912C30.0833 60.8245 28.9539 66.3091 26.4405 70.4949C23.9376 74.6633 20.1008 77.498 15.056 77.6417L15.1054 79.3759C20.8708 79.2117 25.1935 75.9418 27.9279 71.3879C30.6519 66.8514 31.8378 60.9958 31.3862 55.4503L29.6571 55.5912ZM15.056 77.6417C13.4738 77.6868 12.1493 77.2686 11.1285 76.4501C10.1058 75.63 9.31561 74.3498 8.91134 72.5438L7.21838 72.9228C7.69063 75.0324 8.65427 76.6899 10.0432 77.8036C11.4342 78.9189 13.1793 79.4307 15.1054 79.3759L15.056 77.6417ZM8.91134 72.5438C8.54165 70.8924 8.91266 69.576 9.75031 68.4797C10.6143 67.3489 12.0097 66.4117 13.7338 65.6644L13.0439 64.0726C11.1801 64.8804 9.48638 65.9676 8.37177 67.4264C7.23084 68.9197 6.7338 70.7582 7.21838 72.9228L8.91134 72.5438ZM13.7338 65.6644C19.508 63.1617 25.3993 66.1529 29.8382 71.5904C34.2665 77.0149 36.9465 84.5528 36.3162 90.356L38.0409 90.5433C38.7333 84.168 35.8257 76.1815 31.1821 70.4933C26.5492 64.818 19.8842 61.1079 13.0439 64.0726L13.7338 65.6644ZM36.3162 90.356C35.827 94.8607 32.6343 99.7434 29.4313 103.587C27.8467 105.488 26.2923 107.097 25.1337 108.231C24.5549 108.798 24.076 109.244 23.7429 109.548C23.5764 109.701 23.4464 109.817 23.3587 109.895C23.3149 109.933 23.2817 109.963 23.2597 109.982C23.2487 109.991 23.2406 109.999 23.2353 110.003C23.2327 110.005 23.2308 110.007 23.2297 110.008C23.2291 110.008 23.2287 110.009 23.2285 110.009C23.2284 110.009 23.2284 110.009 23.2284 110.009C23.2284 110.009 23.2285 110.009 23.7953 110.666C24.3621 111.322 24.3623 111.322 24.3625 111.322C24.3627 111.322 24.3629 111.322 24.3632 111.321C24.3638 111.321 24.3645 111.32 24.3654 111.319C24.3673 111.318 24.3698 111.316 24.3732 111.313C24.3798 111.307 24.3894 111.299 24.4018 111.288C24.4266 111.266 24.4628 111.234 24.5097 111.193C24.6033 111.11 24.7396 110.988 24.9127 110.83C25.2588 110.514 25.7524 110.053 26.3471 109.471C27.5357 108.308 29.1325 106.655 30.764 104.698C33.9931 100.823 37.492 95.5974 38.0409 90.5433L36.3162 90.356ZM24.6341 110.887L26.6715 103.151L24.9938 102.709L22.9565 110.445L24.6341 110.887ZM24.0586 111.492L32.0623 108.942L31.5357 107.289L23.532 109.839L24.0586 111.492Z"
              fill="#71C90C"
            />
          </svg>
        </div>
      </div>
      <div className="mt-9 max-w-full md:max-w-[50%] w-full px-[37px] py-[45px] z-10 relative">
        <div className="absolute opacity-20 w-[80%] h-[80%] lg:w-[466px] lg:h-[359px] -z-10 bottom-[-50px] right-10 md:bottom-3 md:right-5 lg:right-28 filter-black"/>
        <div className="bg-white rounded-[25px] pb-8">
          <div className="flex justify-between max-w-full px-[40px] pt-[32px]">
            <h2 className="Purchases text-[20px] leading-[27px] lg:text-[28px] lg:leading-[135px] font-extrabold">
              Purchases
            </h2>
            <select className="text-[13px] leading-[20px] lg:text-[18px] lg:leading-[150%] font-manrope font-semibold">
              <option>This Month</option>
            </select>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white rounded-[18px] p-[25px] w-full ">
              <div className="flex justify-between items-center w-full">
                <div className="flex space-x-3">
                  <div className=" w-[50px] h-[50px] bg-[#F4F0FF] rounded-full flex justify-center items-center">
                    <svg
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <path
                        d="M13.3519 2.77494L13.3205 2.84823L10.284 9.89494H7.2999C6.5879 9.89494 5.90732 10.0415 5.28955 10.3033L7.1219 5.92659L7.16379 5.82188L7.23708 5.65435C7.25802 5.59153 7.27896 5.52871 7.31037 5.47635C8.68202 2.30376 10.2317 1.58129 13.3519 2.77494Z"
                        stroke="#71C90C"
                        strokeWidth="1.57059"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.9957 10.1043C18.5245 9.95773 18.0219 9.8949 17.5194 9.8949H10.2842L13.3206 2.8482L13.3521 2.7749C13.5091 2.82726 13.6557 2.90055 13.8128 2.96337L16.1268 3.93714C17.4147 4.47114 18.3151 5.02608 18.8596 5.6962C18.9643 5.82184 19.0481 5.93702 19.1214 6.07314C19.2156 6.21973 19.2889 6.36631 19.3308 6.52337C19.3727 6.61761 19.4041 6.71184 19.425 6.79561C19.7077 7.67514 19.5402 8.75361 18.9957 10.1043Z"
                        stroke="#71C90C"
                        strokeWidth="1.57059"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.6308 15.0052V17.0469C22.6308 17.2563 22.6203 17.4657 22.6098 17.6752C22.4109 21.3294 20.3691 23.1722 16.495 23.1722H8.32793C8.07664 23.1722 7.82534 23.1513 7.58452 23.1199C4.25487 22.9 2.47487 21.12 2.25499 17.7903C2.22358 17.5495 2.20264 17.2982 2.20264 17.0469V15.0052C2.20264 12.9006 3.48005 11.0892 5.30193 10.3039C5.93017 10.0421 6.60028 9.89551 7.31228 9.89551H17.5316C18.0446 9.89551 18.5472 9.9688 19.0079 10.1049C21.0916 10.7436 22.6308 12.6912 22.6308 15.0052Z"
                        stroke="#71C90C"
                        strokeWidth="1.57059"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.12208 5.92676L5.28972 10.3035C3.46784 11.0888 2.19043 12.9002 2.19043 15.0048V11.9369C2.19043 8.96323 4.30549 6.4817 7.12208 5.92676Z"
                        stroke="#71C90C"
                        strokeWidth="1.57059"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.6272 11.9358V15.0036C22.6272 12.7001 21.0985 10.7421 19.0044 10.1139C19.5489 8.7527 19.7059 7.6847 19.4442 6.7947C19.4232 6.70046 19.3918 6.60623 19.3499 6.52246C21.2975 7.52764 22.6272 9.59034 22.6272 11.9358Z"
                        stroke="#71C90C"
                        strokeWidth="1.57059"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <h2 className="font-manrope font-extrabold text-[13px] lg:text-[18px] leading-[150%]">
                      Expense
                    </h2>
                    <p className="font-manrope font-medium text-[11px] lg:text-[15px] leading-[150%] text-[#A0AEC0] tracking-[0.628235px]">
                      Increased By 10%
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-manrope font-extrabold text-[15px] leading-[150%] lg:text-[21px] lg:leading-[32px] text-[#1A202C] ">
                    $409.00
                  </p>
                </div>
              </div>
              <svg
                
                height={10}
                viewBox="0 0 409 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-[20px] w-full"
              >
                <rect
                  opacity="0.2"
                  x="0.531738"
                  y="0.476562"
                  width="408.353"
                  height="9.42353"
                  rx="4.71176"
                  fill="#6C5FBC"
                />
                <rect
                  x="0.531738"
                  y="0.476562"
                  width="296.841"
                  height="9.42353"
                  rx="4.71176"
                  fill="#71C90C"
                />
              </svg>
            </div>
            <div className="bg-white rounded-[18px] p-[25px] w-full ">
              <div className="flex justify-between items-center w-full">
                <div className="flex space-x-3">
                  <div className=" w-[50px] h-[50px] bg-[#F4F0FF] rounded-full flex justify-center items-center">
                    <svg
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <path
                        d="M13.3519 2.77494L13.3205 2.84823L10.284 9.89494H7.2999C6.5879 9.89494 5.90732 10.0415 5.28955 10.3033L7.1219 5.92659L7.16379 5.82188L7.23708 5.65435C7.25802 5.59153 7.27896 5.52871 7.31037 5.47635C8.68202 2.30376 10.2317 1.58129 13.3519 2.77494Z"
                        stroke="#71C90C"
                        strokeWidth="1.57059"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.9957 10.1043C18.5245 9.95773 18.0219 9.8949 17.5194 9.8949H10.2842L13.3206 2.8482L13.3521 2.7749C13.5091 2.82726 13.6557 2.90055 13.8128 2.96337L16.1268 3.93714C17.4147 4.47114 18.3151 5.02608 18.8596 5.6962C18.9643 5.82184 19.0481 5.93702 19.1214 6.07314C19.2156 6.21973 19.2889 6.36631 19.3308 6.52337C19.3727 6.61761 19.4041 6.71184 19.425 6.79561C19.7077 7.67514 19.5402 8.75361 18.9957 10.1043Z"
                        stroke="#71C90C"
                        strokeWidth="1.57059"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.6308 15.0052V17.0469C22.6308 17.2563 22.6203 17.4657 22.6098 17.6752C22.4109 21.3294 20.3691 23.1722 16.495 23.1722H8.32793C8.07664 23.1722 7.82534 23.1513 7.58452 23.1199C4.25487 22.9 2.47487 21.12 2.25499 17.7903C2.22358 17.5495 2.20264 17.2982 2.20264 17.0469V15.0052C2.20264 12.9006 3.48005 11.0892 5.30193 10.3039C5.93017 10.0421 6.60028 9.89551 7.31228 9.89551H17.5316C18.0446 9.89551 18.5472 9.9688 19.0079 10.1049C21.0916 10.7436 22.6308 12.6912 22.6308 15.0052Z"
                        stroke="#71C90C"
                        strokeWidth="1.57059"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.12208 5.92676L5.28972 10.3035C3.46784 11.0888 2.19043 12.9002 2.19043 15.0048V11.9369C2.19043 8.96323 4.30549 6.4817 7.12208 5.92676Z"
                        stroke="#71C90C"
                        strokeWidth="1.57059"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.6272 11.9358V15.0036C22.6272 12.7001 21.0985 10.7421 19.0044 10.1139C19.5489 8.7527 19.7059 7.6847 19.4442 6.7947C19.4232 6.70046 19.3918 6.60623 19.3499 6.52246C21.2975 7.52764 22.6272 9.59034 22.6272 11.9358Z"
                        stroke="#71C90C"
                        strokeWidth="1.57059"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <h2 className="font-manrope font-extrabold text-[13px] lg:text-[18px] leading-[150%]">
                      Vocher Usage
                    </h2>
                    <p className="font-manrope font-medium text-[11px] lg:text-[15px] leading-[150%] text-[#A0AEC0] tracking-[0.628235px]">
                      Increased By 5%
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-manrope font-extrabold text-[15px] leading-[150%] lg:text-[21px] lg:leading-[32px] text-[#1A202C] ">
                    $45.78
                  </p>
                </div>
              </div>
              <svg
                height={10}
                viewBox="0 0 409 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-[20px] w-full "
              >
                <rect
                  opacity="0.2"
                  x="0.531738"
                  y="0.535156"
                  width="408.353"
                  height="9.42353"
                  rx="4.71176"
                  fill="#FBAD18"
                />
                <rect
                  x="0.531738"
                  y="0.535156"
                  width="245.012"
                  height="9.42353"
                  rx="4.71176"
                  fill="#FBAD18"
                />
              </svg>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Purchase;
