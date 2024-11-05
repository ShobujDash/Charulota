import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { assets } from "../../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";import { IoIosLogOut } from "react-icons/io";
import { PiTextAaFill } from "react-icons/pi";


function Navbar({ darkMode, toggleDarkMode, toggleSidebar }) {

  const navigate = useNavigate();

  // const { token, setToken, userData } = useContext(AppContext);

  const [showMenu, setShowMenu] = useState(false);


  const logout = async () => {
    
    navigate('/')
    setShowMenu(false)
  }

  return (
    <div className="static top-0 z-50 w-full bg-dark_dark border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setShowMenu(!showMenu)}
            >
              <HiOutlineMenuAlt2 className="text-2xl" />
            </button>
            <Link to={"/"} className="flex ms-2 md:me-24">
              <img
                src={assets.logo}
                className="w-10 rounded-full mr-3"
                alt=""
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white dark:text-white">
                Charulota
              </span>
            </Link>
          </div>
          <button
            className=" dark:bg-slate-50 text-white dark:text-slate-700 rounded-full p-2"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>

      {/* ----------Mobile Menu---------- */}
      <div
        className={`${
          showMenu ? "fixed h-screen w-2/3" : "h-0 w-0"
        } md:hidden left-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all duration-300`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <img className="w-3/6" src={assets.logo} alt="" />
          <RxCross2
            className="w-7 mx-3 text-3xl my-2"
            onClick={() => setShowMenu(false)}
          />
        </div>
        <div className="h-[75%] flex flex-col justify-between">
          <ul className="flex flex-col items-center gap-2 mt-2 px-5 text-lg font-medium">
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/login"
              className="w-full"
            >
              <button className="w-full text-center px-2 py-2 rounded-lg bg-blue-700 text-white text-2xl">
                Login
              </button>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <li className="py-1">HOME</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/gallery">
              <li className="py-1">Gallery</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <li className="py-1">ABOUT</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/message">
              <li className="py-1">CONTACT</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
          </ul>

          <div className=" mx-auto" onClick={logout}>
            <div className="flex items-center">
              <button className="text-4xl font-semibold  py-2 px-4 text-green-900">
                Logout
              </button>
              <IoIosLogOut className="text-4xl text-blue-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
