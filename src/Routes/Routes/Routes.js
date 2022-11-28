
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import AllProducts from '../../Pages/AllProduct/AllProducts';
import Blog from '../../Pages/Blog/Blog';
import AddProduct from '../../Pages/Dashboard/AddProduct/AddProduct';
import AllAdmins from '../../Pages/Dashboard/AllAdmins/AllAdmins';
import AllBuyers from '../../Pages/Dashboard/AllBuyers/AllBuyers';
import AllSellers from '../../Pages/Dashboard/AllSellers/AllSellers';
import MyBuyers from '../../Pages/Dashboard/MyBuyers/MyBuyers';
import MyOrder from '../../Pages/Dashboard/MyOrder/MyOrder';
import MyProducts from '../../Pages/Dashboard/MyProducts/MyProducts';
import ReportedItems from '../../Pages/Dashboard/ReportedItems/ReportedItems';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import ErrorPage from '../../Pages/Shared/ErrorPage/ErrorPage';
import Welcome from '../../Pages/Shared/Welcome/Welcome';
import SignUp from '../../Pages/SignUp/SignUp';
import AdminRoutes from '../AdminRoutes/AdminRoutes';
import BuyerRoutes from '../BuyerRoutes/BuyerRoutes';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import SellerRoutes from '../SellerRoutes/SellerRoutes';

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/categories/:id',
                element: <PrivateRoutes><AllProducts></AllProducts></PrivateRoutes> ,
                loader: ({ params }) => fetch(`https://bbookss-server.vercel.app/category/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard',
                element: <PrivateRoutes><Welcome></Welcome></PrivateRoutes>
            },
            {
                path:'myorders',
                element: <BuyerRoutes><MyOrder></MyOrder></BuyerRoutes>
            },
            {
                path:'addproduct',
                element: <SellerRoutes><AddProduct></AddProduct></SellerRoutes>
            },
            {
                path:'myproducts',
                element: <SellerRoutes><MyProducts></MyProducts></SellerRoutes>
            },
            {
                path:'mybuyers',
                element: <SellerRoutes><MyBuyers></MyBuyers></SellerRoutes>
            },
            {
                path:'alladmins',
                element: <AdminRoutes><AllAdmins></AllAdmins></AdminRoutes>
            },
            {
                path:'allsellers',
                element:<AdminRoutes> <AllSellers></AllSellers></AdminRoutes>
            },
            {
                path:'allbuyers',
                element: <AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
            },
            {
                path:'reporteditems',
                element: <AdminRoutes><ReportedItems></ReportedItems></AdminRoutes>
            },
        ]
    },
    {
        path:'/*',
        element:<ErrorPage></ErrorPage>
    }
])



export default router;