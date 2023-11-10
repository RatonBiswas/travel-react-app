import { AiFillStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import hungary from "../../assets/Tours/hungary.jpg";
import UK from "../../assets/Tours/UK.jpg";
import australia from "../../assets/Tours//australia.webp";
import oman from "../../assets/Tours/oman.jpg";
import plane1 from "../../assets/Tours/plane.png";

import styles from "./FeaturedTours.module.css"; //Always remember to keep the CSS file below all swiper import, or the code won't work

const FeaturedTours = () => {
  const featuredPlaces = [
    {
      img: hungary,
      place: "Budapest, Hungary",
      title: "Wonders of the West Coast & Kimberley",
      ratings: "4.8",
      reviews: "15",
      days: "7",
      price: "520",
    },
    {
      img: UK,
      place: "Greater London, UK",
      title: "Windsor Castle and Bath from London",
      ratings: "4.8",
      reviews: "15",
      days: "7",
      price: "350",
    },
    {
      img: australia,
      place: "Australia",
      title: "Enchanting Great Barrier Reef, Aquatic Wonderland",
      ratings: "4.8",
      reviews: "15",
      days: "7",
      price: "450",
    },
    {
      img: oman,
      place: "Oman",
      title: "Ancient Heritage and Desert Adventures",
      ratings: "4.8",
      reviews: "15",
      days: "7",
      price: "599",
    },
    {
      img: australia,
      place: "Australia",
      title: "Enchanting Great Barrier Reef, Aquatic Wonderland",
      ratings: "4.8",
      reviews: "15",
      days: "7",
      price: "450",
    },
  ];
  return (
    <div className="py-20 mb-1" style={{
      background: `url(${plane1})`,
  }}>
      <h2 className={`${styles.featured} text-black text-center text-2xl mb-4`}>
        Tours
      </h2>

      <h2 className="text-center text-black text-4xl font-bold mb-16">
        Featured Tours
      </h2>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className={`${styles.mainDiv} mySwiper`}
      >
        {featuredPlaces?.map((places, i) => {
          return (
            <SwiperSlide key={i} className="bg-white ">
              <div className="relative  ">
                <div className="absolute top-5 right-5 hover:cursor-pointer rounded-full border-transparent bg-white hover:bg-red-500 hover:text-white duration-300 ease-in-out p-3">
                  <BsFillHeartFill className="text-lg" />
                </div>
                <img
                  src={places?.img}
                  className="w-full h-[250px] object-cover mb-2"
                  alt=""
                />

                <div className="p-5">
                  <h2 className="text-gray-500 text-lg font-medium mb-4">
                    {places?.place}
                  </h2>

                  <h2 className={`${styles.textFlow} text-2xl font-bold mb-4`}>
                    {places?.title}
                  </h2>

                  <div className="flex justify-between items-center gap-2 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 rounded-md bg-yellow-400 p-1">
                        <AiFillStar />
                        <h2 className="font-medium">{places?.ratings}</h2>
                      </div>

                      <h2 className="text-gray-500 font-medium">
                        {places?.reviews} reviews
                      </h2>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-1">
                      <BiTimeFive className="text-gray-500 text-xl" />
                      <h2 className="text-gray-500 font-medium">
                        {places?.days} days
                      </h2>
                    </div>
                  </div>

                  <div className="flex justify-between items-center gap-2">
                    <h2 className="font-semibold">Starting from</h2>
                    <h2 className={`${styles.featured} text-2xl font-semibold`}>
                      ${places?.price}
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FeaturedTours;
