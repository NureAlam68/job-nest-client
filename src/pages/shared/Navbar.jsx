
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from "../../assets/job.svg"
import  "./Navbar.css"



const Navbar = () => {
   const {user, logOut} = useContext(AuthContext);

    const links = <>
        <li className="hover:text-blue-600"><NavLink to="/">Home</NavLink></li>
        <li className="hover:text-blue-600"><NavLink to="/allVisas">All visas</NavLink></li>
        <li className="hover:text-blue-600"><NavLink to="/addVisa">Add Visa</NavLink></li>
        <li className="hover:text-blue-600"><NavLink to="/myAddedVisas">My added visas</NavLink></li>
        <li className="hover:text-blue-600"><NavLink to="/myVisaApplications">My Visa applications</NavLink></li>
        
    </>

  return (
    <div className="py-4 md:p-6 lg:p-10">
        <div className="navbar lg:gap-2 md:px-10 lg:px-5 xl:px-10 rounded-[16px] py-2 md:py-3 bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-[20px] md:text-[28px] lg:text-[32px] font-bold flex items-center gap-1"><img className="h-10" src={logo} alt="" /><span>JobNest</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal lg:text-sm xl:text-base font-medium space-x-5 xl:space-x-8">
         {links}
        </ul>
      </div>
      <div className="navbar-end">
      {
        user ? <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><Link>Logout</Link></li>
        </ul>
      </div> : <>
      <Link to="/login" className="px-4 py-1 md:py-2 md:px-[22px] rounded-[10px] border bg-[#3C65F5] text-white font-bold ml-3">Login</Link>
      <Link to="/register" className="px-4 py-1 md:py-2 md:px-[22px] rounded-[10px] border bg-[#3C65F5] text-white font-bold ml-3">Register</Link>
      </>
      }
  </div>
    </div>
    </div>
  );
};

export default Navbar;
