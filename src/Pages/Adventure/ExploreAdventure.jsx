import styles from "./ExploreAdventure.module.css";

import plane from "../../assets/ExploreAdventure/plane.png";

import explore1 from "../../assets/ExploreAdventure/travel8.jpeg";
import explore2 from "../../assets/ExploreAdventure/travel3.jpg";

const ExploreAdventure = () => {
  return (
    <div className="relative bg-blue-900 pt-20 px-4 sm:px-6">
      <img
        src={plane}
        className="absolute bottom-0 left-0 w-[200px] md:w-[300px] opacity-30"
        alt=""
      />
      <img
        src={plane}
        className="absolute top-0 right-0 w-[200px] md:w-[300px] rotate-180 opacity-30"
        alt=""
      />

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 xl:gap-16 2xl:gap-24">
        <div className="">
          <h2 className={`${styles.travel} text-3xl text-yellow-400 mb-4`}>
            Explore The
          </h2>

          <h2 className="text-white text-5xl font-bold mb-2">
            Travel &<br />
            Adventures
          </h2>

          <h2 className="text-white text-lg">
            Find awesome hotel, tour, car and activities all over the world
          </h2>
        </div>

        <div className="flex gap-6 z-40">
          <img
            src={explore1}
            className="w-[120px] sm:w-[200px] lg:w-[150px] xl:w-[300px] h-[180px] sm:h-[300px] object-cover"
            alt=""
          />
          <img
            src={explore2}
            className="w-[180px] sm:w-[250px] lg:w-[200px] xl:w-[350px] h-[300px] sm:h-[400px] xl:h-[500px] object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreAdventure;
