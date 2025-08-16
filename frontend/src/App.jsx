import "./App.css";
import { Button } from "@/components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Doctor from "../pages/Doctor";
import Browse from "../pages/Browse";
function App() {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
     {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/doctor",
      element:<Doctor/>,
    },
     {
      path: "/Browse",
      element:<Browse/>,
    },
  ]);
  return (
    <>
      <RouterProvider router={approuter} />
    </>
  );
}

export default App;
