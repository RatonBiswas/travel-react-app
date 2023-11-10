import { AiOutlineTwitter, AiOutlineGoogle } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoPinterestAlt } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <div>
      <div className="md:flex justify-between bg-[#f2f2f0] py-1  border-b px-4 sm:px-10 lg:px-20 hidden font-jost overflow-hidden">
        <div className="flex items-center">
          <Link to="tel:+8801627346464">
            <h3 className="mr-1"> (000)999-898-999 </h3>
          </Link>
          <Link to="mailto:wanderwoman.bd@gmail.com">
            <p className="text-sm">
              | info@trisog.com
            </p>
          </Link>
        </div>
        <div className="flex items-end gap-5">
          {/* Icons added from React icons  */}
          <div className="flex justify-center items-center gap-5">
            <AiOutlineTwitter className="text-xl hover:text-orange-400 duration-300 ease-in-out hover:cursor-pointer" />
            <BiLogoLinkedin className="text-xl hover:text-orange-400 duration-300 ease-in-out hover:cursor-pointer" />
            <AiOutlineGoogle className="text-xl hover:text-orange-400 duration-300 ease-in-out hover:cursor-pointer" />
            <BiLogoPinterestAlt className="text-xl hover:text-orange-400 duration-300 ease-in-out hover:cursor-pointer" />
          </div>
          <div className="flex items-center gap-1">
            <h3 >EUR</h3>
            <RiArrowDropDownLine className="text-xl hover:text-orange-400 duration-300 ease-in-out hover:cursor-pointer"></RiArrowDropDownLine>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
