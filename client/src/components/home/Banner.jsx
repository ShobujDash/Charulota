import { assets } from "../../assets/assets";

const Banner = () => {
  return (
    <>
      <div></div>
      <div className="w-full h-40 sm:h-56 md:h-96 rounded-md">
        <video
          className="w-full h-full object-cover rounded-md"
          src={assets.bannerVedio}
          autoPlay
          loop
          muted
        />
      </div>
    </>
  );
};

export default Banner;
