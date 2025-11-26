import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import ServiceDetails from "../pages/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },

        {
            path:'/services',
            element:<Services></Services>
        },

        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Register></Register>
        },
        {
            path:'/profile',
            element:<PrivateRouter><Profile></Profile></PrivateRouter>
        },
        {
            path: '/details/:id',
            element: <ServiceDetails></ServiceDetails>
        }
    ]
  },
]);

export default router;