import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home/Home";
import SignUp from "../Pages/Signup/SignUp";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
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
import MyEnrolledClasses from "../Pages/DashBoard/Payment/MyEnrolledClasses";
import InstructorRoute from "./InstructorRoute";
import Instructors from "../Pages/Components/Instructors/Instructors";
import PaymentHistory from "../Pages/DashBoard/Payment/PaymentHistory";
import StudentRoute from "./StudentRoute";
import Readmore from "../Pages/Readmore/Readmore";


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
          path:"/readmore",
          element:<Readmore/>
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
          element:<StudentRoute><SelectedClasses/></StudentRoute>
         },
         {
          path:"payment/:id",
          element:<StudentRoute><Payment/></StudentRoute>
         },
         {
          path:"paymenthistory",
          element:<StudentRoute><PaymentHistory/></StudentRoute>
         },
         {
          path:"addClass",
          element:<InstructorRoute><AddClass/></InstructorRoute>
         },
         {
          path:"myClasses",
          element:<InstructorRoute><MyClasses/></InstructorRoute>
         },
         {
          path:"myenrolledclasses",
          element:<StudentRoute><MyEnrolledClasses/></StudentRoute>
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