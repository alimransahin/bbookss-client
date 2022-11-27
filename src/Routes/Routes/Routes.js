
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
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
                element:<Welcome></Welcome>
            },
            {
                path:'myorders',
                element:<MyOrder></MyOrder>
            },
            {
                path:'addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'myproducts',
                element:<MyProducts></MyProducts>
            },
            {
                path:'mybuyers',
                element:<MyBuyers></MyBuyers>
            },
            {
                path:'alladmins',
                element:<AllAdmins></AllAdmins>
            },
            {
                path:'allsellers',
                element:<AllSellers></AllSellers>
            },
            {
                path:'allbuyers',
                element:<AllBuyers></AllBuyers>
            },
            {
                path:'reporteditems',
                element:<ReportedItems></ReportedItems>
            },
        ]
    },
    {
        path:'/*',
        element:<ErrorPage></ErrorPage>
    }
])



export default router;