import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home/Home";
import SignUp from "../Pages/Signup/SignUp";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Instructors from "../Pages/Components/Instructors/Instructors";
import ClassesCart from "../Pages/ClassessCart/ClassesCart";
import DashBoard from "../Layout/DashBoard";

 export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
          {
          path:"/",
          element:<Home/>
        },
        {
          path:"/instructors",
          element:<Instructors/>
        },
        {
          path:"/classes",
          element:<ClassesCart/>
        },
        {
          path:"signUp",
          element:<SignUp/>
        },
        {
          path:"/login",
          element:<Login/>
        }
      ]
    },
    {
      path:"dashboard",
      element:<DashBoard/>
    }
  ])