import studentColImg from "../../../assets/studentColImg.png";
import studentcolFrame from "../../../assets/studentcolFrame.png";
import squareacademiccapbold from "../../../assets/squareacademiccapbold.png";
import fluent_person from "../../../assets/fluent_person.png";
import Book from "../../../assets/Book.png";

const StudentPreferenceCollegeCard = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative">
        <img
          className="rounded-t-lg max-w-xl h-40 object-cover"
          src={studentColImg}
          alt={"pic"}
        />
        <div className="absolute w-24 h-24  -bottom-16  left-5">
          <img src={studentcolFrame} alt="add_img_pic" />
        </div>
      </div>
      <div className="p-5 mt-5">
        <div className="flex justify-between">
          <h5 className=" text-xl whitespace-nowrap font-semibold tracking-tight text-gray-900 dark:text-white">
            University of Glassgow
          </h5>
        </div>
        <p className="text-gray-500 mb-2">United Kingdom</p>
        <div className="mb-2  flex flex-col justify-between text-center ">
          <div className="flex gap-2 ">
            <img
              className="rounded-t-lg  object-contain"
              src={squareacademiccapbold}
              alt={"academic-img"}
            />

            <p className="font-medium  text-gray-500 dark:text-gray-400 py-1">
              World Ranking: 95
            </p>
          </div>
          <div className="flex gap-2 ">
            <img
              className="rounded-t-lg  object-contain"
              src={fluent_person}
              alt={"fluent_person"}
            />

            <p className="font-medium  text-gray-500 dark:text-gray-400 py-1">
              Total Students: 6500{" "}
            </p>
          </div>
          <div className="flex gap-2 ">
            <img
              className="rounded-t-lg  object-contain"
              src={Book}
              alt={"Book"}
            />
            <p className="font-medium  text-gray-500 dark:text-gray-400 py-1">
              Courses Available: 40{" "}
            </p>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="py-2.5 w-full px-5 me-2 mb-2 text font-medium text-gray-700 focus:outline-none bg-white rounded-lg border border-gray-700 hover:bg-gray-100 hover:text-green-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            View Detials
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentPreferenceCollegeCard;
