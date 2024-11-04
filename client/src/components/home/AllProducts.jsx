import React from 'react'
import { assets } from '../../assets/assets';


const AllProducts
 = () => {
  return (
    <div className="mt-4">

      <h1 className='text-2xl font-semibold mb-4'>All Products  </h1>

      <div className="grid grid-cols-2 gap-x-2 gap-y-4 mb-24">
        <div className="shadow-lg">
          <div>
            <img
              src={assets.curi1}
              className="w-full h-44 border-b border-b-gray-500 shadow-lg rounded-md mb-1"
              alt=""
            />
          </div>
          <p className="font-bold text-xl">Nice Payel</p>
          <p className="text-gray-300 font-semibold">Aweseome</p>
          <div className="flex items-center justify-between px-2 pb-2">
            <p>$200 </p>
            <p className="text-2xl bg-red-500 text-white font-bold px-2 rounded-full">
              +
            </p>
          </div>
        </div>

        <div className="shadow-lg">
          <div>
            <img
              src={assets.curi2}
              className="w-full h-44 border-b border-b-gray-500 shadow-lg rounded-md mb-1"
              alt=""
            />
          </div>
          <p className="font-bold text-xl">Nice Payel</p>
          <p className="text-gray-300 font-semibold">Aweseome</p>
          <div className="flex items-center justify-between px-2">
            <p>$200 </p>
            <p className="text-2xl bg-red-500 text-white font-bold px-2 rounded-full">
              +
            </p>
          </div>
        </div>
        <div className="shadow-lg">
          <div>
            <img
              src={assets.curi3}
              className="w-full h-44 border-b border-b-gray-500 shadow-lg rounded-md mb-1"
              alt=""
            />
          </div>
          <p className="font-bold text-xl">Nice Payel</p>
          <p className="text-gray-300 font-semibold">Aweseome</p>
          <div className="flex items-center justify-between px-2">
            <p>$200 </p>
            <p className="text-2xl bg-red-500 text-white font-bold px-2 rounded-full">
              +
            </p>
          </div>
        </div>
        <div className="shadow-lg">
          <div>
            <img
              src={assets.curi4}
              className="w-full h-44 border-b border-b-gray-500 shadow-lg rounded-md mb-1"
              alt=""
            />
          </div>
          <p className="font-bold text-xl">Nice Payel</p>
          <p className="text-gray-300 font-semibold">Aweseome</p>
          <div className="flex items-center justify-between px-2">
            <p>$200 </p>
            <p className="text-2xl bg-red-500 text-white font-bold px-2 rounded-full">
              +
            </p>
          </div>
        </div>
        <div className="shadow-lg">
          <div>
            <img
              src={assets.curi1}
              className="w-full h-44 border-b border-b-gray-500 shadow-lg rounded-md mb-1"
              alt=""
            />
          </div>
          <p className="font-bold text-xl">Nice Payel</p>
          <p className="text-gray-300 font-semibold">Aweseome</p>
          <div className="flex items-center justify-between px-2">
            <p>$200 </p>
            <p className="text-2xl bg-red-500 text-white font-bold px-2 rounded-full">
              +
            </p>
          </div>
        </div>
        <div className="shadow-lg">
          <div>
            <img
              src={assets.curi1}
              className="w-full h-44 border-b border-b-gray-500 shadow-lg rounded-md mb-1"
              alt=""
            />
          </div>
          <p className="font-bold text-xl">Nice Payel</p>
          <p className="text-gray-300 font-semibold">Aweseome</p>
          <div className="flex items-center justify-between px-2">
            <p>$200 </p>
            <p className="text-2xl bg-red-500 text-white font-bold px-2 rounded-full">
              +
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts
;
