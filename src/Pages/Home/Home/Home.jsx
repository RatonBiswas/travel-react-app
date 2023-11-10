import Contact from "../Contact/Contact";
// import Footer from "../Footer/Footer";
// import Navbar from "../Navbar/Navbar";
// import Topbar from "../Topbar/Topbar";
import BrowseByCategory from "../../BrowseByCategory/BrowseByCategory";
import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";
import Destination from "../../Destination/Destination";
import FeaturedTours from "../../Tours/FeaturedTours";
import OurTrustedPartners from "../../OurTrustedPartners/OurTrustedPartners";
import Testimonial from "../../Testimonial/Testimonial";
import WhyWeAreBest from "../../WhyWeAreBest/WhyWeAreBest";
import LatestTravelGuide from "../../LatestTravelGuide/LatestTravelGuide";
import ExploreAdventure from "../../Adventure/ExploreAdventure";

const Home = () => {
  return (
    <div>
      {/* <Topbar></Topbar>
            <Navbar></Navbar> */}
      <ExploreAdventure />
      <BrowseByCategory />
      <WhyChooseUs />
      <Destination />
      <FeaturedTours />
      <WhyWeAreBest />
      <Testimonial />
      <Contact />
      <OurTrustedPartners />
      <LatestTravelGuide />
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
