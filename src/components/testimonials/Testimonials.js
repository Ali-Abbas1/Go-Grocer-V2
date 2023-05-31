// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
const Testimonials = () => {
  return (
    <div className="mx-auto container max-w-[1440px] mt-[116px] xl:px-10 md:px-6 px-4">
      <div>
        <h2 className="font-poppins font-semibold text-[45px] leading-[25px] text-center text-[#71C90C]">
          Customers <span className="text-[#323142]">Say</span>
        </h2>
      </div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
        slidesPerView={2.5}
        spaceBetween={30}
        pagination={{
          type: "progressbar",
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mt-28 min-h-[550px] md:min-h-[400px]"
      >
        <div className=" flex justify-between items-start overflow-x-hidden w-full gap-[32px] ">
          <SwiperSlide className="">
            <div className=" bg-white rounded-[20px] py-[24px] xl:py-[38px] px-[18px] xl:px-[32px] relative">
              <div className="w-[442px] h-[269px] blur-effect absolute top-[60px] left-[40px] -z-10" />
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-5">
                    <img
                      src="/assets/images/profile-pic.png"
                      className="w-[71px] h-[71px]"
                    />
                    <div className="">
                      <h2 className="font-poppins font-medium md:text-sm xl:text-xl xl:leading-[31px]">
                        Alexander R.
                      </h2>
                      <p className="font-quicksand font-medium text-xs xl:text-base leading-[26px]">
                        01 Year With Us{" "}
                      </p>
                    </div>
                  </div>
                  <div>
                    <svg
                      width={59}
                      height={45}
                      viewBox="0 0 59 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M36.797 44.2511C33.6916 38.2474 32.139 31.7262 32.139 24.6874C32.139 17.5452 34.0281 11.645 37.8062 6.98701C41.5844 2.32901 47.4586 0 55.429 0V9.78182C52.6342 9.78182 50.5898 10.4029 49.2959 11.645C48.002 12.8872 47.3551 15.2679 47.3551 18.7873V20.34H58.6896V44.2511H36.797ZM4.65799 44.2513C1.55267 38.2476 0 31.7264 0 24.6877C0 17.5454 1.88908 11.6452 5.66723 6.98723C9.44538 2.32923 15.3196 0.000219731 23.29 0.000219731V9.78204C20.4952 9.78204 18.4508 10.4031 17.157 11.6452C15.8631 12.8874 15.2161 15.2681 15.2161 18.7875V20.3402H26.5506V44.2513H4.65799Z"
                        fill="#DADADA"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-poppins italic md:text-xs xl:text-lg leading-[26px] mt-8">
                    “ Online invoice payment helps companies save time, are
                    faster and save maximum effort for the clients and save
                    maximum effort. Online invoice payment helps companies save
                    time ”
                  </p>
                </div>
                <div className="mt-[39px]">
                  <img src="/assets/images/Stars.png" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white rounded-[20px] py-[24px] xl:py-[38px] px-[18px] xl:px-[32px] relative">
              <div className="w-[442px] h-[198px] blur-effect absolute top-[60px] left-[200px] -z-10" />
              <div>
                <p className="font-poppins italic md:text-xs xl:text-lg leading-[26px] mt-8 ">
                  “ Online invoice payment helps companies save time, are faster
                  and save maximum effort for the clients and save maximum
                  effort. Online invoice payment helps companies save time ”
                </p>
              </div>
              <div className="mt-[39px]">
                <img src="/assets/images/Stars.png" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white rounded-[20px] py-[24px] xl:py-[38px] px-[18px] xl:px-[32px] relative">
              <div className="w-[442px] h-[198px] blur-effect absolute top-[100px] left-[40px] -z-10" />
              <div>
                <p className="font-poppins italic md:text-xs xl:text-lg leading-[26px] mt-8 max-w-[442px] ">
                  “ Online invoice payment helps companies save time, are faster
                  and save maximum effort for the clients and save maximum
                  effort. Online invoice payment helps companies save time ”
                </p>
              </div>
              <div className="mt-[39px]">
                <img src="/assets/images/Stars.png" />
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      {/* Discount Banner */}
      <div className="">
        <div className="bg-[#71C90C] rounded-[30px] md:px-[66px] flex pt-[61px] pb-[140px] lg:pb-[61px] flex-col justify-center relative z-0 items-center lg:items-left ">
          <h2 className="font-poppins font-extrabold text-[41px] leading-[62px] md:text-[70px] md:leading-[105px] text-white max-w-[350px]">
            GET 50%
          </h2>
          <form className="w-full md:w-auto px-4">
            <div className="max-w-full md:max-w-[450px] flex relative mt-2">
              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                className="w-full max-w-full md:max-w-[440px] pl-[21px] rounded-[14px] font-poppins font-normal text-base tracking-[0.03em] capitalize placeholder:text-[#878787] py-[21px] outline-none "
              />
              <button
                type="submit"
                className="py-[15px] px-[25px] rounded-[11px] font-poppins font-medium text-sm leading-[22px] tracking-[0.03em] uppercase text-[#F7F8FA] bg-[#71C90C] absolute right-4 top-2"
              >
                Subscribe
              </button>
            </div>
          </form>
          <img
            src="/assets/images/food-image.png"
            className="w-[170px] h-[170px] md:w-auto md:h-auto absolute top-[220px] md:top-[270px] lg:top-24 lg:right-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
