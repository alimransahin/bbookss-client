import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Loading from '../Pages/Shared/Loading/Loading';
import Nabvar from '../Pages/Shared/Nabvar/Nabvar';

const DashboardLayout = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(`https://bbookss-server.vercel.app/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUsers(data[0]);
                console.log(data[0])
                setLoading(false);
            })
    }, [setUsers, setLoading, user])
    console.log();
    if (loading){
        return <Loading></Loading>
    }
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
                    <ul className="menu p-4 w-80 text-base-content bg-slate-200">
                        {
                            users?.userType === 'buyer' && <li><Link to="/dashboard/myorders">My Orders</Link></li>
                        }
                        {
                            users?.userType === 'seller' && <>
                                <li><Link to="/dashboard/addproduct">Add A Products</Link></li>
                                <li><Link to="/dashboard/myproducts">My Products</Link></li>
                                <li><Link to="/dashboard/mybuyers">My Buyers</Link></li>
                            </>
                        }
                        {
                            users?.userType === 'admin' && <>
                                <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/reporteditems">Repoted Items</Link></li>
                                <li><Link to="/dashboard/alladmins">All Admins</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;