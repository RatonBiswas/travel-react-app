import backgroundImage from "../../../assets/3.png";
import { MdPlayCircleOutline, MdOutlineParagliding } from "react-icons/md";
// import { MdPlayCircleOutline } from "react-icons/md";
import { FaTree, FaUmbrellaBeach } from "react-icons/fa";
import { GiLevelFourAdvanced } from "react-icons/gi";

const Contact = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row lg:flex-row justify-evenly"
        style={{
          background: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="my-60">
          <h3 className="font-bold text-yellow-300 font-[Agbalumo] my-2">
            <MdPlayCircleOutline className="text-5xl text-yellow-400 mb-10" />
            Are you ready to travel?
          </h3>
          <h1 className="text-white text-3xl font-bold mb-2">
            Tevily Is a World Leading <br /> Online Tour Booking <br />{" "}
            Platform.
          </h1>
          <button className="px-2 py-1 bg-transparent rounded-md border border-white text-white">
            Contact Us
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 my-60">
          <div className="bg-white h-32 w-32 flex flex-col justify-center items-center mb-10 mr-10">
            <div className="bg-yellow-300 rounded-full w-10 h-10 flex justify-center items-center mb-1">
              <FaTree></FaTree>
            </div>
            <h2 className="font-bold text-center">
              Wildlife <br /> Tours
            </h2>
          </div>
          <div className="bg-white h-32 w-32 flex flex-col justify-center items-center">
            <div className="bg-yellow-300 rounded-full w-10 h-10 flex justify-center items-center mb-1">
              <MdOutlineParagliding></MdOutlineParagliding>
            </div>
            <h2 className="font-bold text-center">
              Paragliding <br /> Tours
            </h2>
          </div>
          <div className="bg-white h-32 w-32 flex flex-col justify-center items-center">
            <div className="bg-yellow-300 rounded-full w-10 h-10 flex justify-center items-center mb-1">
              <GiLevelFourAdvanced></GiLevelFourAdvanced>
            </div>
            <h2 className="font-bold text-center">
              Adventure <br /> Tours
            </h2>
          </div>
          <div className="bg-white h-32 w-32 flex flex-col justify-center items-center">
            <div className="bg-yellow-300 rounded-full w-10 h-10 flex justify-center items-center mb-1">
              <FaUmbrellaBeach></FaUmbrellaBeach>
            </div>
            <h2 className="font-bold text-center">
              Beaches <br /> Tours
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
