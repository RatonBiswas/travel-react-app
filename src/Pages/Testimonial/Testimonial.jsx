/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import { FaQuoteRight } from "react-icons//fa";
import styles from "./Testimonial.module.css";

import man1 from "../../assets/Testimonial/man1.jpg";
import man2 from "../../assets/Testimonial/man2.jpg";
import man3 from "../../assets/Testimonial/man3.webp";
import man4 from "../../assets/Testimonial/man4.jpg";
import woman1 from "../../assets/Testimonial/women1.jpg";
import woman2 from "../../assets/Testimonial/women2.jpg";
import woman3 from "../../assets/Testimonial/women3.jpg";
import woman4 from "../../assets/Testimonial/women3.jpg";

const Testimonial = () => {
  const reviews = [
    {
      review:
        "The UI designs he crafted are top-notch, and the design system he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app.",
      name: "Molie Rosa, Photographer",
    },
    {
      review:
        "Their work is way more professional than my expectation. Would suggest everyone to get service from them. They are just insane. I like the way they finished my project.",
      name: "Shahed Kapoor, Actor",
    },
    {
      review:
        "I have never thought that I would get a 5 star service like this from Wander Woman. It is just like a dream to me. Their team is just awesome and wholesome.",
      name: "Sakib Al Hasan, Cobbler",
    },
  ];
  return (
    <div className="mx-4 mb-8">
      <h2
        className={`${styles.testimonial} text-center text-2xl text-sky-800 mb-4`}
      >
        Testimonial
      </h2>

      <h2 className="text-center text-4xl font-bold mb-16">
        What Our Customers
        <br />
        Says About Us
      </h2>

      <div className="md:flex md:justify-center">
        <div className="max-w-[1000px] flex flex-col md:grid md:grid-cols-4 gap-6 lg:gap-10">
          <div className="flex md:flex-col justify-center">
            <div className="md:flex md:justify-center">
              <img
                src={man1}
                className="w-[80px] h-[80px] rounded-full object-cover"
                alt=""
              />
            </div>

            <div className="md:flex md:justify-start">
              <img
                src={woman1}
                className="w-[60px] h-[60px] rounded-full object-cover"
                alt=""
              />
            </div>

            <div className="md:flex md:justify-end">
              <img
                src={man2}
                className="w-[120px] h-[120px] rounded-full object-cover"
                alt=""
              />
            </div>

            <div className="md:flex md:justify-start">
              <img
                src={woman2}
                className="w-[100px] h-[100px] rounded-full object-cover"
                alt=""
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Pagination, Autoplay]}
              className={`${styles.mainDiv} mySwiper`}
            >
              {reviews?.map((review, i) => {
                return (
                  <SwiperSlide key={i} className="">
                    <div>
                      <FaQuoteRight className="w-full text-center text-4xl text-yellow-400 mb-10" />
                      <h2 className="text-center text-lg font-bold mb-4">
                        "{review?.review}"
                      </h2>

                      <h2 className="text-center font-medium text-gray-500">
                        -By {review?.name}
                      </h2>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="flex md:flex-col justify-center">
            <div className="md:flex md:justify-center">
              <img
                src={man3}
                className="w-[80px] h-[80px] rounded-full object-cover"
                alt=""
              />
            </div>

            <div className="md:flex md:justify-end">
              <img
                src={woman3}
                className="w-[60px] h-[60px] rounded-full object-cover"
                alt=""
              />
            </div>

            <div className="md:flex md:justify-start">
              <img
                src={man4}
                className="w-[120px] h-[120px] rounded-full object-cover"
                alt=""
              />
            </div>

            <div className="md:flex md:justify-end">
              <img
                src={woman4}
                className="w-[100px] h-[100px] rounded-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
