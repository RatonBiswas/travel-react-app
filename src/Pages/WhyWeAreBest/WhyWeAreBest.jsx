import styles from "./WhyWeAreBest.module.css";

import circle from "../../assets/WhyWeAreBest/circle.png";
import travel from "../../assets/WhyWeAreBest/travel111.jpg";

const WhyWeAreBest = () => {
  return (
    <div className="mx-1 lg:mx-0.5 bg-[#e8dfdf3d] mb-8 mt-1 p-20">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 xl:gap-80">
        <div className="flex justify-center sm:min-w-[400px]">
          <div>
            <h2 className={`${styles.weAreBest} text-2xl text-sky-800 mb-4`}>
              Why We Are Best
            </h2>

            <h2 className="text-4xl font-bold mb-10">Keep Things Flexible</h2>

            <div className="flex mb-20">
              <h2 className="border-2 border-sky-800 text-sky-800 text-lg font-semibold rounded-xl py-4 px-8 hover:bg-sky-800 hover:border-transparent hover:text-white duration-300 ease-in-out hover:cursor-pointer">
                Contact Us
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="relative flex flex-col gap-3">
                <img
                  src={circle}
                  className="absolute top-0 w-[40px] z-30"
                  alt=""
                />
                <h2
                  className={`${styles.weAreBest} text-3xl font-semibold z-40`}
                >
                  120+
                </h2>
                <h2 className="text-gray-500 font-medium">Total Destination</h2>
              </div>

              <div className="relative flex flex-col gap-3">
                <img
                  src={circle}
                  className="absolute top-0 w-[40px] z-30"
                  alt=""
                />
                <h2
                  className={`${styles.weAreBest} text-3xl font-semibold z-40`}
                >
                  12k+
                </h2>
                <h2 className="text-gray-500 font-medium">Total Travelers</h2>
              </div>

              <div className="relative flex flex-col gap-3">
                <img
                  src={circle}
                  className="absolute top-0 w-[40px] z-30"
                  alt=""
                />
                <h2
                  className={`${styles.weAreBest} text-3xl font-semibold z-40`}
                >
                  500+
                </h2>
                <h2 className="text-gray-500 font-medium">Travel Packages</h2>
              </div>

              <div className="relative flex flex-col gap-3">
                <img
                  src={circle}
                  className="absolute top-0 w-[40px] z-30"
                  alt=""
                />
                <h2
                  className={`${styles.weAreBest} text-3xl font-semibold z-40`}
                >
                  7k+
                </h2>
                <h2 className="text-gray-500 font-medium">Positive Reviews</h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={travel} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyWeAreBest;
