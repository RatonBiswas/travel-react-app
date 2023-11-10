import Footer from "../Pages/Home/Footer/Footer";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Topbar from "../Pages/Home/Topbar/Topbar";
import { Outlet } from "react-router";

const Main = () => {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;