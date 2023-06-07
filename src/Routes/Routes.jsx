import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home/Home";
import Instructors from "../Pages/Home/Home/Instructors/Instructors";
import Classes from "../Pages/Home/Home/Classes/Classes";
import SignUp from "../Pages/Signup/SignUp";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
          element:<Classes/>
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
    }
  ])