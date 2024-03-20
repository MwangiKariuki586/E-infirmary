import "./App.css";
import Categories from "./components/Categories";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Search from "./components/Search";
import Loading from "./components/Loading";

function App() {
  const Mainlayout = () => {
    return (
      <div className="">
        <Navbar />
        <Outlet />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },

        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/loading",
          element: <Loading />,
        },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
