import "./App.css";
import { Button } from "@/components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
function App() {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <>
      <RouterProvider router={approuter} />
    </>
  );
}

export default App;
