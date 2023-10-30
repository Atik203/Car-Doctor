import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/services`}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/blog`}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/contact`}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          Contact
        </NavLink>
      </li>
      {user?.email ? (
        <>
          <li>
            {" "}
            <button
              onClick={handleLogout}
              className="btn bg-red-500 text-center pt-4 text-white"
            >
              Log out
            </button>{" "}
          </li>
          <li>
            <NavLink
              to={`/bookings`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              My bookings
            </NavLink>
          </li>
        </>
      ) : (
        <li>
          <NavLink
            to={`/login`}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 underline" : ""
            }
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 mt-4 md:mt-6 mb-6 md:mb-8 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="">
          <img src={logo} className="w-20" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-medium text-lg menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex flex-col-reverse md:flex-row items-center gap-5">
          <div className="flex items-center gap-5">
            <div>
              <ShoppingBagOutlinedIcon
                sx={{ fontSize: 30 }}
              ></ShoppingBagOutlinedIcon>
            </div>
            <div>
              <SearchIcon sx={{ fontSize: 30 }}></SearchIcon>
            </div>
          </div>
          <div>
            <Link className="btn btn-outline border-red-500 border-2 text-red-500 hover:bg-red-500 hover:text-white hover:border-none">
              Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
