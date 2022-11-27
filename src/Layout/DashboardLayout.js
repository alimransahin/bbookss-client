import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nabvar from '../Pages/Shared/Nabvar/Nabvar';

const DashboardLayout = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard/myorders">My Orders</Link></li>
                        <li><Link to="/dashboard/addproduct">Add A Products</Link></li>
                        <li><Link to="/dashboard/myproducts">My Products</Link></li>
                        <li><Link to="/dashboard/mybuyers">My Buyers</Link></li>
                        <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                        <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                        <li><Link to="/dashboard/reporteditems">Repoted Items</Link></li>
                        <li><Link to="/dashboard/alladmins">All Admins</Link></li>
                        {/* {
                            isAdmin && <>
                                
                            </>
                        } */}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;