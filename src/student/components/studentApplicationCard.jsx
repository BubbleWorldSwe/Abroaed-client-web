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
          className="rounded-t-lg w-full max-w-xl h-40 object-cover"
          src={
            coverImage ? `${IMAGE_BASE_URL}/${coverImage}` : IMAGES.noCollege
          }
          alt="pic"
        />
        <div className="absolute w-20 h-20 -bottom-9 left-5 object-contain shadow-sm">
          <img
            src={logoImage ? `${IMAGE_BASE_URL}/${logoImage}` : IMAGES.noLogo}
            alt="add_img_pic"
            className="h-20 w-20 rounded-sm"
          />
        </div>
      </div>
      <div className="p-5 mt-5">
        <div className="flex justify-between items-center">
          <h5 className="text-[19px] font-semibold text-gray-900 line-clamp-1">
            {data?.college?.name || "----"}
          </h5>
        </div>

        <p className="text-gray-500 mt-2">{data?.intake}</p>
        <p className="text-gray-500 mb-2">{data?.courseName}</p>
      </div>
    </div>
  );
};

export default StudentApplicationCard;
