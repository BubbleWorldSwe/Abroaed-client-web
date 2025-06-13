import studentColImg from "../../../assets/studentColImg.png";
import studentcolFrame from "../../../assets/studentcolFrame.png";
import squareacademiccapbold from "../../../assets/squareacademiccapbold.png";
import fluent_person from "../../../assets/fluent_person.png";
import Book from "../../../assets/Book.png";
import { IMAGE_BASE_URL } from "../../../constants/baseUrl";
import { IMAGES } from "../../../constants/images";
import add_a_photo from "../../../assets/add_a_photo.png";

const StudentPreferenceCollegeCard = ({ college }) => {
  const coverImage = college?.typeId?.images?.find(
    (img) => img.type === "cover"
  );
  const logoImage = college?.typeId?.images?.find((img) => img.type === "logo");

  return (
    <div className="bg-white w-[250px] min-w-[250px] max-w-[250px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative">
        <img
          className="rounded-t-lg w-full h-36 object-cover"
          src={
            coverImage
              ? `${IMAGE_BASE_URL}/${coverImage?.ImageUrl}`
              : IMAGES.noCollege
          }
          alt="cover"
        />
        <div className="absolute w-16 h-16 -bottom-7 left-5 bg-white rounded-[5px] overflow-hidden shadow-md">
          {logoImage ? (
            <img
              src={`${IMAGE_BASE_URL}/${logoImage.ImageUrl}`}
              className="w-full h-full object-cover"
              alt="logo"
            />
          ) : (
            <img
              src={IMAGES.noLogo}
              className="w-full h-full object-cover"
              alt="no-logo"
            />
          )}
        </div>
      </div>

      <div className="p-5 mt-7">
        <div className="relative group w-full">
          <h5 className="text-[18px] line-clamp-1 font-semibold tracking-tight text-gray-900 dark:text-white">
            {college?.typeId?.name}
          </h5>

          <div className="absolute z-10 hidden w-max max-w-xs group-hover:block bg-black text-white text-sm rounded px-2 py-1 top-full mt-1">
            {college?.typeId?.name}
          </div>
        </div>
        <p className="text-gray-500 text-[13px] mb-3">
          {`${college?.typeId?.stateId?.name}, ${college?.typeId?.destinationId?.countryId?.name}`}
        </p>

        <div className="mb-4 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <img
              className="w-4 h-4 object-contain"
              src={squareacademiccapbold}
              alt="ranking"
            />
            <p className="text-gray-500 text-[14px] dark:text-gray-400">
              World Ranking: {college?.typeId?.ranking}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              className="w-4 h-4 object-contain"
              src={fluent_person}
              alt="students"
            />
            <p className="text-gray-500 text-[14px] dark:text-gray-400">
              Total Students: {college?.typeId?.totalStudents}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-4 h-4 object-contain" src={Book} alt="courses" />
            <p className="text-gray-500 text-[14px] dark:text-gray-400">
              Courses Available: {college?.typeId?.courses?.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPreferenceCollegeCard;
