
import { Link, NavLink } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";




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
        <div className="navbar lg:gap-2 md:px-10 lg:px-5 xl:px-10 rounded-[16px] py-2 md:py-3 bg-white dark:bg-slate-800">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 dark:text-[#0096c7]"
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
        <Link to="/" className="text-[20px] md:text-[28px] lg:text-[32px] font-bold flex items-center gap-1 dark:text-[#0096c7]"><FaGlobe  className="text-[#0096c7]"/><span className="">GlobePass</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal lg:text-sm xl:text-base font-medium space-x-5 xl:space-x-8 dark:text-[#0096c7]">
         {links}
        </ul>
      </div>
      <div className="navbar-end">
     <div className="mr-4">
     </div>
        {
          user ?  <img className="h-11 w-11 border border-blue-600 rounded-full object-cover object-center" src={user?.photoURL} alt="" /> : <Link to="/login" className="px-4 py-1 md:py-2 md:px-[22px] rounded-[10px] border border-blue-600 bg-black text-blue-500 font-bold ml-3">Login</Link>
        }
        {
          user ? <Link to="/" onClick={logOut} className="px-4 py-1 md:py-2 md:px-[22px] rounded-[10px] border border-blue-600 bg-black text-blue-500 font-bold ml-3">Log Out</Link> : <Link to="/register" className="px-4 py-1 md:py-2 md:px-[22px] rounded-[10px] border border-blue-600 bg-black text-blue-500 font-bold ml-3">Register</Link>
        }
      </div>
    </div>
    </div>
  );
};

export default Navbar;
