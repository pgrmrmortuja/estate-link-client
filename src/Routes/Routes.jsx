import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/Home/HomeLayout";
import ErrorPage from "../Shared/ErrorPage";
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import AddProperty from "../Dashboard/Dashboard/Agent/AddProperty";
import MyAddedProperties from "../Dashboard/Dashboard/Agent/MyAddedProperties";
import UpdateProperty from "../Dashboard/Dashboard/Agent/UpdateProperty";
import ManageProperties from "../Dashboard/Dashboard/Admin/ManageProperties";
import AllProperties from "../Pages/AllProperties";
import Details from "../Pages/Details";
import Wishlist from "../Dashboard/Dashboard/User/Wishlist";
import MyReview from "../Dashboard/Dashboard/User/MyReview";
import MakeOffer from "../Dashboard/Dashboard/User/MakeOffer";
import PropertyBought from "../Dashboard/Dashboard/User/PropertyBought";
import RequestedProperties from "../Dashboard/Dashboard/Agent/RequestedProperties";
import ManageReviews from "../Dashboard/Dashboard/Admin/ManageReviews";
import ManageUsers from "../Dashboard/Dashboard/Admin/ManageUsers";
import AdvertiseProperties from "../Dashboard/Dashboard/Admin/AdvertiseProperties";
import Payment from "../Dashboard/Dashboard/User/Payment";
import SoldProperties from "../Dashboard/Dashboard/Agent/SoldProperties";
import DashboardLayout from "../Dashboard/Dashboard/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AgentRoute from "./AgentRoute";
import UserRoute from "./UserRoute";
import AdminProfile from "../Dashboard/Dashboard/Admin/AdminProfile";
import AgentProfile from "../Dashboard/Dashboard/Agent/AgentProfile";
import UserProfile from "../Dashboard/Dashboard/User/UserProfile";
import AdDetails from "../Pages/AdDetails";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>,
            },
            {
                path: '/allProperties',
                element: <PrivateRoute><AllProperties></AllProperties></PrivateRoute> ,
            },
            {
                path: '/propertyDetails/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute> ,
                
            },
            // {
            //     path: '/details/:id',
            //     element: <PrivateRoute><AdDetails></AdDetails></PrivateRoute> ,
            //     loader: ({ params }) => fetch(`http://localhost:5000/ad-details/${params.id}`),
            // },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            //Admin
            {
                path: 'manageProperties',
                element: <AdminRoute><ManageProperties></ManageProperties></AdminRoute> ,
            },
            {
                path: 'admin-profile',
                element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute> ,
            },
            {
                path: 'manageUsers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute> ,
            },
            {
                path: 'manageReviews',
                element: <AdminRoute><ManageReviews></ManageReviews></AdminRoute> ,
            },
            {
                path: 'advertise',
                element: <AdminRoute><AdvertiseProperties></AdvertiseProperties></AdminRoute> ,
            },

            //Agent
            {
                path: 'agent-profile',
                element: <AgentRoute><AgentProfile></AgentProfile></AgentRoute> ,
            },
            {
                path: 'addProperty',
                element: <AgentRoute><AddProperty></AddProperty></AgentRoute> ,
            },
            {
                path: 'MyAddedProperties',
                element: <AgentRoute><MyAddedProperties></MyAddedProperties></AgentRoute> ,
            },
            {
                path: 'updateProperty/:id',
                element: <AgentRoute><UpdateProperty></UpdateProperty></AgentRoute> ,
                // loader: ({ params }) => fetch(`http://localhost:5000/property-id/${params.id}`),
            },
            {
                path: 'soldProperties',
                element: <AgentRoute><SoldProperties></SoldProperties></AgentRoute>, 
            },
            {
                path: 'requestedProperties',
                element: <AgentRoute><RequestedProperties></RequestedProperties></AgentRoute> ,
            },

            //User
            {
                path: 'user-profile',
                element: <UserRoute><UserProfile></UserProfile></UserRoute> ,
            },
            {
                path: 'wishlist',
                element: <UserRoute><Wishlist></Wishlist></UserRoute> ,
            },
            {
                path: 'myReview',
                element: <UserRoute><MyReview></MyReview></UserRoute>,
            },
            {
                path: 'propertyBought',
                element: <UserRoute><PropertyBought></PropertyBought></UserRoute> ,
            },
            {
                path: 'makeOffer/:id',
                element: <UserRoute><MakeOffer></MakeOffer></UserRoute>,
                // loader: ({ params }) => fetch(`http://localhost:5000/wishlist-id/${params.id}`),
            },
            {
                path: 'payment/:id',
                element: <UserRoute><Payment></Payment></UserRoute>,
                // loader: ({ params }) => fetch(`http://localhost:5000/user-offers-id/${params.id}`),
            },
            
        ]

    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);
