import React from 'react'
import { assets } from '../../assets/assets';

const Banner = () => {
  return (
    <>
      <div className="w-full h-40 sm:h-56 md:h-96 rounded-md relative">
        <video className='w-full h-full object-cover rounded-md' src={assets.bannerVedio} autoPlay loop muted />
        <div className='absolute w-[100%] h-[100%] top-0 flex flex-col items-center justify-end'>
          <p className='font-bold text-sky-800 text-2xl'>Beauty Of Charulota.</p>
        </div>

      </div>
    </>
  );
}

export default Banner
