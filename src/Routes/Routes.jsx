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
import SelectedClasses from "../Pages/DashBoard/SelectedClasses";
import AddClass from "../Pages/DashBoard/InstructorDashboard/AddClass";
import ManageClasses from "../Pages/DashBoard/Admin/ManageClasses";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../Pages/DashBoard/Admin/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import MyClasses from "../Pages/DashBoard/InstructorDashboard/MyClasses";
import Payment from "../Pages/DashBoard/Payment/Payment";


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
      path:"/dashboard",
      element: <PrivateRoute><DashBoard/></PrivateRoute>,
      children:[
        {
          path:"selectedClass",
          element:<SelectedClasses/>
         },
         {
          path:"payment",
          element:<Payment/>
         },
         {
          path:"addClass",
          element:<AddClass/>
         },
         {
          path:"myClasses",
          element:<MyClasses/>
         },
         {
          path:"manageClass",
          element:<AdminRoute><ManageClasses/></AdminRoute>
         },
         {
          path:"manageUsers",
          element:<AdminRoute><ManageUsers/></AdminRoute>
         },
         ]
      
    }
  ])