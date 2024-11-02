import { CiSearch } from "react-icons/ci";
import { NavLink, useLocation } from "react-router-dom";
import Fruits from "./Fruits";

const items = ["Curi", "Kurti", "Payel","Juta","Jama","Lehenga"]


const Header = () => {

  return (
    <div className="pt-20 px-2 md:hidden dark:text-white dark:bg-dark_dark">
      <div className="flex items-center">
        <h1 className="text-4xl font-semibold flex-1">
          Daily Beauty <br /> Items
        </h1>
        <div className="">
          <CiSearch className="text-5xl" />
        </div>
      </div>

      <div className="mt-3 flex gap-3 items-center overflow-x-scroll ">
        {items.map((item, index) => (
          <NavLink to={`/${item}`} key={index}>
            <h1 className="bg-white text-black rounded-xl font-medium px-3 py-1 shadow-2xl border-b-2">
              {item}
            </h1>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        ))}
      </div>

      <Fruits/>
      

      
    </div>
  );
};

export default Header;
