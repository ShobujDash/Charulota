import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import Banner from "./Banner";

import Category from "./Category";
import AllProducts from "./AllProducts";

const items = ["Curi", "Kurti", "Payel", "Juta", "Jama", "Lehenga"];

const Header = () => {
  return (
    <div className=" px-2 py-2 dark:text-white dark:bg-dark_dark">
      <Banner />
      <Category/>
      <AllProducts />
    </div>
  );
};

export default Header;
