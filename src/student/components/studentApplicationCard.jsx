import studentColImg from "../../assets/studentColImg.png";
import studentcolFrame from "../../assets/studentcolFrame.png";
import { IMAGE_BASE_URL } from "../../constants/baseUrl";
import { IMAGES } from "../../constants/images";

const StudentApplicationCard = ({ data }) => {
  const coverImage = data?.college?.images?.find(
    (img) => img.type === "cover" && !img.isDeleted
  )?.ImageUrl;

  const logoImage = data?.college?.images?.find(
    (img) => img.type === "logo" && !img.isDeleted
  )?.ImageUrl;

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow relative">
      <div className="relative">
        <img
          className="rounded-t-lg w-full max-w-xl h-36 object-cover"
          src={
            coverImage ? `${IMAGE_BASE_URL}/${coverImage}` : IMAGES.noCollege
          }
          alt="pic"
        />
        <div className="absolute w-16 h-16 -bottom-5 left-4 bg-white rounded-[5px] overflow-hidden shadow-md">
          <img
            src={logoImage ? `${IMAGE_BASE_URL}/${logoImage}` : IMAGES.noLogo}
            alt="add_img_pic"
            className="h-20 w-20 rounded-sm"
          />
        </div>
      </div>
      <div className="p-4 mt-5">
        <div className="flex justify-between items-center">
          <div className="relative group w-full">
            <h5 className="text-[18px] line-clamp-1 font-semibold tracking-tight text-gray-900 dark:text-white">
              {data?.college?.name || "----"}
            </h5>

            <div className="absolute z-10 hidden w-max max-w-xs group-hover:block bg-black text-white text-sm rounded px-2 py-1 top-full mt-1">
              {data?.college?.name}
            </div>
          </div>
        </div>

        <p className="text-gray-500 mt-1 text-[14px]">{data?.intake}</p>
        <p className="text-gray-500 mt-1 text-[14px]">{data?.courseName}</p>
      </div>
    </div>
  );
};

export default StudentApplicationCard;
