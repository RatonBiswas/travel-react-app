import { Link, NavLink } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { GiCommercialAirplane } from "react-icons/gi";

const Navbar = () => {
  const activeLinks = ({ isActive }) => {
    return {
      color: isActive ? "#ea580c" : "",
    };
  };


  return (
    <div className="shadow-md w-full top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-white lg:mt-0 py-2 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Agbalumo] text-gray-800">
          <span className="text-3xl text-yellow-400 mr-1 pt-1">
            <GiCommercialAirplane></GiCommercialAirplane>
          </span>
          Trisog
        </div>
        <div className="col-span-2 flex justify-center items-center gap-10">
          <NavLink
            to="/"
            style={activeLinks}
            className="text-lg font-semibold hover:cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
          >
            Home
          </NavLink>

          <NavLink
            to="/tour"
            style={activeLinks}
            className="text-lg font-semibold hover:cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
          >
            Tour
          </NavLink>

          <NavLink
            to="/destination"
            style={activeLinks}
            className="text-lg font-semibold hover:cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
          >
            Destination
          </NavLink>

          <NavLink
            to="/blog"
            style={activeLinks}
            className="text-lg font-semibold hover:cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
          >
            Blog
          </NavLink>

          <NavLink
            to="/pages"
            style={activeLinks}
            className="text-lg font-semibold hover:cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
          >
            Pages
          </NavLink>

          <NavLink
            to="/contact"
            style={activeLinks}
            className="text-lg font-semibold hover:cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
          >
            Contact
          </NavLink>
        </div>
        <div className="flex items-center justify-end gap-4">
          <GrSearch className="text-2xl hover:cursor-pointer" />

          <Link
            to="/login"
            className="flex items-center gap-2 hover:text-orange-600 duration-300 ease-in-out"
          >
            <FiUser className="text-2xl" />
            <h2 className="text-lg font-semibold">Login / Signup</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
