import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/authProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate()
  console.log(navigate);

  const navLink = (
    <>
      <li>
        {" "}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-black bg-blue-gray-50 font-extrabold border-b-8 border-[#E76F51] "
              : ""
          }
        >
          {" "}
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-black bg-blue-gray-50 font-extrabold border-b-8 border-[#E76F51] hover:font-bold "
              : ""
          }
        >
          {" "}
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bookedEvent"
          className={({ isActive }) =>
            isActive
              ? "text-black bg-blue-gray-50 font-extrabold border-b-8 border-[#E76F51] hover:font-bold "
              : ""
          }
        >
          Booked Event
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/recentwork"
          className={({ isActive }) =>
            isActive
              ? "text-black bg-blue-gray-50 font-extrabold border-b-8 border-[#E76F51] hover:font-bold "
              : ""
          }
        >
          Recent Work
        </NavLink>
      </li>
    {
      user?   <li>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive
            ? "text-black bg-blue-gray-50 font-extrabold border-b-8 border-[#E76F51] hover:font-bold "
            : ""
        }
      >
        Profile
      </NavLink>
    </li>
    : ''
    }
   
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
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
              className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <img
            className="w-1/2"
            src="https://i.ibb.co/vhTkhmH/Eve-Fever-3-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-4">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="flex flex-col items-center">
              <div className="w-9 rounded-full">
                <img className="rounded-full" src={user.photoURL} alt="" />
              </div>
              <h2 className="mr-2">{user.displayName}</h2>
            </div>
          ) : (
            ""
          )}

          {user?.email ? (
            <div>
              <Link to={"login"}>
                {" "}
                <button onClick={logOut}>Log Out</button>
              </Link>
            </div>
          ) : (
            <Link to={"login"}>Log In</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
