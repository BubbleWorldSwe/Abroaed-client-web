import { IMAGES } from "../../constants/images";

export default function AbroaedInfo() {
  return (
    <div className="md:flex justify-center hidden   items-center py-6 px-4 bg-gray-primary lg:py-0 sm:px-0">
      <div className="max-w-md xl:max-w-xl">
        <img className="h-20 w-20 mb-5" src={IMAGES.logo} alt="logo" />
        <h1 className="mb-4 text-3xl font-extrabold capitalize tracking-tight leading-none text-white xl:text-5xl">
          Explore the world’s leading study abroad platform
        </h1>
      </div>
    </div>
  );
}
