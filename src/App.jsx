import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import WhyWeAreBest from "./Pages/WhyWeAreBest/WhyWeAreBest";
import Destination from "./Pages/Destination/Destination";
import FeaturedTours from "./Pages/Tours/FeaturedTours";
import Main from "./components/Main";
import Testimonial from "./Pages/Testimonial/Testimonial";
import LatestTravelGuide from "./Pages/LatestTravelGuide/LatestTravelGuide";
import Contact from "./Pages/Home/Contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tour",
        element: <FeaturedTours />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/blog",
        element: <Testimonial />,
      },
      {
        path: "/pages",
        element: <LatestTravelGuide />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  ]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
