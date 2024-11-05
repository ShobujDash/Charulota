import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import AllProducts from "../components/home/AllProducts";

const ProductByCategory = () => {
  const { category } = useParams();

  const [search, setSearch] = useState(false);

  return (
    <div className="dark:bg-dark_light dark:text-white px-2">
      <div className="py-4 flex items-center justify-between">
        <Link
          to={"/"}
          className=" bg-white flex items-center px-3 py-2 ml-2 rounded-xl shadow-lg border-gray-200 border-4"
        >
          <img className="w-6 h-6" src={assets.leftArrow} alt="" />
        </Link>
        <h1 className="capitalize text-4xl text-blue-600 dark:text-white">
          {category}
        </h1>

        <div
          onClick={() => setSearch(!search)}
          className=" bg-white flex items-center px-3.5 py-2.5 mr-2 rounded-xl shadow-lg border-4 border-gray-200"
        >
          <img className="w-6 h-6" src={assets.search} alt="" />
        </div>
      </div>

      {search && (
        <div className="flex items-center justify-evenly gap-2 py-2">
          <input
            placeholder="Search"
            className="outline outline-gray-400 px-2 py-2 w-full rounded-lg text-2xl dark:text-black focus:outline-blue-500 "
            type="text"
          />
          <div
            className="px-2 dark:text-white
          "
          >
            <FaSearch className="text-2xl" />
          </div>
        </div>
      )}

      <AllProducts></AllProducts>
    </div>
  );
};

export default ProductByCategory;
