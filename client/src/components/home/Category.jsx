import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Category = () => {
  return (
    <div className="w-full  sm:hidden relative my-2">

      <h1 className="text-2xl py-2 mb-2">Category</h1>

      <div className="flex flex-row gap-2 overflow-x-scroll">
        <Link to={`/product/curi`} className="min-w-16 flex flex-col gap-3 items-center">
          <div className="bg-blue-300 px-2 py-3 rounded-xl">
            <img className="w-12 h-12" src={assets.banglesIcon} alt="" />
          </div>
          <p>Curi</p>
        </Link>
        <Link to={`/product/payel`} className="min-w-16 flex flex-col gap-3 items-center">
          <div className="bg-sky-300 px-2 py-3 rounded-xl">
            <img className="w-12 h-12" src={assets.ankletIcon} alt="" />
          </div>
          <p>Payle</p>
        </Link>
        <Link to={`/product/chain`}  className="min-w-16 flex flex-col gap-3 items-center">
          <div className="bg-blue-300 px-2 py-3 rounded-xl">
            <img className="w-12 h-12" src={assets.necklessIcon} alt="" />
          </div>
          <p>Chain</p>
        </Link>
        <Link to={`/product/saree`}  className="min-w-16 flex flex-col gap-3 items-center">
          <div className="bg-red-300 px-2 py-3 rounded-xl">
            <img className="w-12 h-12" src={assets.saree} alt="" />
          </div>
          <p>Saree</p>
        </Link>
        <Link to={`/product/ring`}  className="min-w-16 flex flex-col gap-3 items-center">
          <div className="bg-yellow-200 px-2 py-3 rounded-xl">
            <img className="w-12 h-12" src={assets.ring} alt="" />
          </div>
          <p>Ring</p>
        </Link>
        <Link to={`/product/panjabi`}  className="min-w-16 flex flex-col gap-3 items-center">
          <div className="bg-gray-300 px-2 py-3 rounded-xl">
            <img className="w-12 h-12" src={assets.panjabi} alt="" />
          </div>
          <p>Panjabi</p>
        </Link>
        <Link to={`/product/jama`}  className="min-w-16 flex flex-col gap-3 items-center">
          <div className="bg-amber-500 px-2 py-3 rounded-xl">
            <img className="w-12 h-12" src={assets.jama} alt="" />
          </div>
          <p>Jama</p>
        </Link>
        <Link to={`/product/canvas`}  className="min-w-16 flex flex-col gap-3 items-center">
          <div className="bg-teal-400 px-2 py-3 rounded-xl">
            <img className="w-12 h-12" src={assets.canvas} alt="" />
          </div>
          <p>Canvas</p>
        </Link>

      </div>
    </div>
  );
};

export default Category;
