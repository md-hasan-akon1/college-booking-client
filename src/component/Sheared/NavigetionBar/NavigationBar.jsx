import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Authprovider";


const NavigationBar = () => {
    const { user,logOut } = useContext(AuthContext)
    console.log(user?.photoURL)
    const navItems = <>
        <NavLink to='/' className="mx-2 font-semibold hover:bg-slate-400 p-2 rounded-lg">Home</NavLink>
        <NavLink to='/admission' className="mx-2 font-semibold hover:bg-slate-400 p-2 rounded-lg">Admission</NavLink>
        <NavLink to='/collagepage' className="mx-2 font-semibold hover:bg-slate-400 p-2 rounded-lg">Collage</NavLink>
        <NavLink to='/mycollege' className="mx-2 font-semibold hover:bg-slate-400 p-2 rounded-lg">My Collage</NavLink>

    </>
    const handelLogOut = () => {
        logOut()
    }
    return (
        <div className="bg-[#ff00d0]  sticky top-0 z-30 w-full ">
            <div className=" ">
                <div className="navbar lg:w-[1280px] mx-auto ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    navItems
                                }
                            </ul>
                        </div>
                        <input type="text" placeholder="Search" className="input input-bordered  md:w-auto" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navItems
                            }
                        </ul>
                    </div>
                    <div className="flex w-full  justify-end">
                        <div className=" ">
                            {
                                user ? <div className="flex gap-2">
                                    <div className="dropdown dropdown-end">
                                    <img tabIndex={0} className="w-12 rounded-full  " src={user?.photoURL} alt="" />
                                    
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li>{user?.displayName}</li>
                                            <li><a>View profile</a></li>
                                        </ul>
                                    </div>

                                    
                                    <button onClick={handelLogOut} className="btn btn-primary">LogOut</button>

                                </div> : <div className="flex gap-2">
                                    <Link className="btn btn-primary" to='registration'>SingIn</Link>
                                    <Link className="btn btn-primary" to='LogIn'>LogIn</Link>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;