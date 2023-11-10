import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import BrowseByCategory from "../../BrowseByCategory/BrowseByCategory";
import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";
import Destination from "../../Destination/Destination";
import FeaturedTours from "../../Tours/FeaturedTours";
import OurTrustedPartners from "../../OurTrustedPartners/OurTrustedPartners";
import Testimonial from "../../Testimonial/Testimonial";
import WhyWeAreBest from "../../WhyWeAreBest/WhyWeAreBest";
import LatestTravelGuide from "../../LatestTravelGuide/LatestTravelGuide";


const Home = () => {
    return (
        <div>
            <Topbar></Topbar>
            <Navbar></Navbar>
            <BrowseByCategory></BrowseByCategory>
            <WhyChooseUs></WhyChooseUs>
            <Destination></Destination>
            <FeaturedTours></FeaturedTours>
            <WhyWeAreBest></WhyWeAreBest>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <OurTrustedPartners></OurTrustedPartners>
            <LatestTravelGuide></LatestTravelGuide>
            <Footer></Footer>
        </div>
    );
};

export default Home;