import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import WhyWeAreBest from "./Pages/WhyWeAreBest/WhyWeAreBest";
import Destination from "./Pages/Destination/Destination";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/tour",
        element: <Destination />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/blog",
        element: <Destination />,
      },
      {
        path: "/pages",
        element: <Destination />,
      },
      {
        path: "/contact",
        element: <Destination />,
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
