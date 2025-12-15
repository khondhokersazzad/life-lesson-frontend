import {
  createBrowserRouter,
  
} from "react-router";
import HomePageLayout from "../layout/HomePageLayout";
import Home from "../pages/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Forget from "../pages/Forget";
import DashBoardLayout from "../layout/DashBoardLayout";
import DashBoard from "../pages/dashboard/DashBoard";
import AddRequest from "../pages/addRequest/AddRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout></HomePageLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
    ]
    
  },

  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children:[
      {
        path: "/dashboard/",
        element: <DashBoard></DashBoard>
      },

      {
        path: "/dashboard/add-request",
        element: <AddRequest></AddRequest>
      },
    ]
    
  },

  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forget/:userEmail",
        element: <Forget></Forget>,
      },
    ],
  },

]);

export default router;
