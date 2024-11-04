import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";


function Navbar({ darkMode, toggleDarkMode, toggleSidebar }) {
  return (
    <div className="static top-0 z-50 w-full bg-dark_dark border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleSidebar}
            >
              <HiOutlineMenuAlt2 className="text-2xl" />
            </button>
            <Link to={'/'}  className="flex ms-2 md:me-24">
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
    </div>
  );
}

export default Navbar;
