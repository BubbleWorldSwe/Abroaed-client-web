import studentcolFrame from "../../assets/studentcolFrame.png";
import squareacademiccapbold from "../../assets/squareacademiccapbold.png";
import fluent_person from "../../assets/fluent_person.png";
import Book from "../../assets/Book.png";
import { IMAGE_BASE_URL } from "../../constants/baseUrl";
import { IMAGES } from "../../constants/images";

const StudentPreferenceCollegeCard = ({ college }) => {
  const coverImage = college?.typeId?.images?.find(
    (img) => img.type === "cover"
  );

  const logoImage = college?.typeId?.images?.find((img) => img.type === "logo");

  return (
    <div className="bg-white w-80 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative">
        <img
          className="rounded-t-lg w-full h-40 object-cover"
          src={
            coverImage
              ? `${IMAGE_BASE_URL}/${coverImage?.ImageUrl}`
              : IMAGES.noImage
          }
          alt="cover"
        />
        <div className="absolute w-20 h-20 -bottom-7 left-5 bg-white rounded-[5px] overflow-hidden shadow-md">
          {logoImage ? (
            <img
              src={`${IMAGE_BASE_URL}/${logoImage.ImageUrl}`}
              className="w-full h-full object-contain"
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
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white whitespace-nowrap">
          {college?.typeId?.name}
        </h5>
        <p className="text-gray-500 mb-2">
          {`${college?.typeId?.stateId?.name}, ${college?.typeId?.destinationId?.countryId?.name}`}
        </p>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <img
              className="w-5 h-5 object-contain"
              src={squareacademiccapbold}
              alt="ranking"
            />
            <p className="text-gray-500 dark:text-gray-400">
              World Ranking: {college?.typeId?.ranking}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              className="w-5 h-5 object-contain"
              src={fluent_person}
              alt="students"
            />
            <p className="text-gray-500 dark:text-gray-400">
              Total Students: {college?.typeId?.totalStudents}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-5 h-5 object-contain" src={Book} alt="courses" />
            <p className="text-gray-500 dark:text-gray-400">
              Courses Available: {college?.typeId?.courses?.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPreferenceCollegeCard;
