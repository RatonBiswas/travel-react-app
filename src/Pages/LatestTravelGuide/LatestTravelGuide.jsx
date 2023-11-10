/* eslint-disable react/jsx-key */
import styles from "./LatestTravelGuide.module.css";

import update1 from "../../assets/LatestTravelUpdates/travel1.jpg";
import update2 from "../../assets/LatestTravelUpdates/travel2.jpg";
import update3 from "../../assets/LatestTravelUpdates/travel9.jpg";
import update4 from "../../assets/LatestTravelUpdates/travel4.jpeg";

import travel1 from "../../assets/LatestTravelUpdates/travel5.jpg";
import travel2 from "../../assets/LatestTravelUpdates/travel6.jpg";
import travel3 from "../../assets/LatestTravelUpdates/travel10.jpg";
import travel4 from "../../assets/LatestTravelUpdates/travel8.jpeg";
import travel5 from "../../assets/LatestTravelUpdates/travel3.jpg";

import boat from "../../assets/LatestTravelUpdates/boat.png";

const LatestTravelGuide = () => {
  const travels = [
    {
      id:1,
      img: update1,
      date: "July 13, 2023",
      who: "Admin",
      title: "The Impact of Covid-19 on travel & tourism industry",
    },
    {
      id:2,
      img: update2,
      date: "Aug 20, 2023",
      who: "Moderator",
      title: "Best way to arrange for tour in this dry season",
    },
    {
      id:3,
      img: update3,
      date: "Sept 13, 2023",
      who: "Admin",
      title: "Who is demanding to be a master?",
    },
    {
      id:4,
      img: update4,
      date: "Nov 05, 2023",
      who: "Editor",
      title: "Tour: Blessing or Curse for youth?",
    },
  ];
  return (
    <div className="relative mx-4 mb-[200px]">
      <img
        src={boat}
        className="absolute top-[20px] left-[50px] w-[100px] opacity-40"
        alt=""
      />
      <h2
        className={`${styles.travelGuide} text-center text-2xl text-sky-800 mb-4`}
      >
        Updates
      </h2>

      <h2 className="text-center text-4xl font-bold mb-20">
        Latest Travel Updates
      </h2>

      <div className="flex justify-center mb-32">
        <div className="max-w-[1400px] grid grid-cols-1 xl:grid-cols-2 gap-16">
          {travels?.map((travel) => (
            <div key={travel.id} className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={travel?.img}
                className="w-[350px] 2xl:w-[400px]"
                alt=''
                
              />

              <div>
                <div className="flex flex-wrap items-center gap-4 2xl:gap-6 mb-4">
                  <h2 className="text-gray-500 font-medium">{travel?.date}</h2>
                  <h2 className="text-gray-500 font-medium">• {travel?.who}</h2>
                </div>

                <h2 className="text-xl font-bold">{travel?.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
        <hr className="mx-16 mt-16 " />
      <div className="flex flex-wrap justify-center items-center gap-8 mx-16 mt-16">
        <div
          className={`${styles.rotateText} flex items-center justify-center gap-2`}
        >
          <h2 className="text-lg font-semibold">@trisog</h2>
        </div>

        <img
          src={travel1}
          className="w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] object-cover"
          alt=""
        />
        <img
          src={travel2}
          className="w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] object-cover"
          alt=""
        />
        <img
          src={travel3}
          className="w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] object-cover"
          alt=""
        />
        <img
          src={travel4}
          className="w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] object-cover"
          alt=""
        />
        <img
          src={travel5}
          className="w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default LatestTravelGuide;
