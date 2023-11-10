import styles from "./BrowseByCategory.module.css";

import { GiModernCity, GiBackpack, GiHiking } from "react-icons/gi";
import { TbBeach, TbSailboat } from "react-icons/tb";
import { MdFastfood } from "react-icons/md";

import camera from "../../assets/BrowseByCategory/camera.png";

const BrowseByCategory = () => {
  return (
    <div className="py-[80px] relative mb-12 mx-4">
      <h2
        className={`${styles.browseCategory} text-center text-2xl text-sky-800 mb-4`}
      >
        Browse By Category
      </h2>

      <h2 className="text-center text-4xl font-bold mb-16">Pick A Tour Type</h2>

      <img
        src={camera}
        className="w-[100px] absolute top-[100px] right-[100px] lg:right-[200px] xl:right-[300px] 2xl:right-[400px]"
        alt=""
      />

      <div className="flex flex-wrap justify-center items-center gap-28">
        <div className="flex flex-col rounded mb-2 items-center transition ease-in-out delay-160 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300">
          <h2 className="text-3xl bg-yellow-400 p-4 rounded-full mb-2">
            <GiModernCity />
          </h2>
          <h2 className="text-xl font-bold">City Tours</h2>
          <h2 className="font-medium text-lg text-gray-500">10 Tours+</h2>
        </div>

        <div className="flex flex-col items-center rounded mb-2 transition ease-in-out delay-160 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300">
          <h2 className="text-3xl bg-yellow-400 p-4 rounded-full mb-2">
            <TbBeach />
          </h2>
          <h2 className="text-xl font-bold">Beaches</h2>
          <h2 className="font-medium text-lg text-gray-500">10 Tours+</h2>
        </div>

        <div className="flex flex-col rounded mb-2 items-center transition ease-in-out delay-160 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300">
          <h2 className="text-3xl bg-yellow-400 p-4 rounded-full mb-2">
            <TbSailboat />
          </h2>
          <h2 className="text-xl font-bold">Boat Tours</h2>
          <h2 className="font-medium text-lg text-gray-500">10 Tours+</h2>
        </div>

        <div className="flex flex-col rounded mb-2 items-center transition ease-in-out delay-160 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300">
          <h2 className="text-3xl bg-yellow-400 p-4 rounded-full mb-2">
            <GiBackpack />
          </h2>
          <h2 className="text-xl font-bold">Adventure</h2>
          <h2 className="font-medium text-lg text-gray-500">10 Tours+</h2>
        </div>

        <div className="flex flex-col rounded mb-2 items-center transition ease-in-out delay-160 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300">
          <h2 className="text-3xl bg-yellow-400 p-4 rounded-full mb-2">
            <MdFastfood />
          </h2>
          <h2 className="text-xl font-bold">Food</h2>
          <h2 className="font-medium text-lg text-gray-500">10 Tours+</h2>
        </div>

        <div className="flex flex-col items-center rounded mb-2 transition ease-in-out delay-160 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300">
          <h2 className="text-3xl bg-yellow-400 p-4 rounded-full mb-2">
            <GiHiking />
          </h2>
          <h2 className="text-xl font-bold">Hiking</h2>
          <h2 className="font-medium text-lg text-gray-500">10 Tours+</h2>
        </div>
      </div>
    </div>
  );
};

export default BrowseByCategory;
