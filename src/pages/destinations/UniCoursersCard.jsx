import image from "../../assets/dark.png";
import vectorleftNose from "../../assets/vectorleftNose.png"; // Add your blob image here.
import locationIcon from "../../assets/locationIcon.png"
const universities = [
  {
    name: "Harvard University",
    location: "Cambridge, MA, USA",
    fees: "$50,000/year",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus",
    imgUrl: image,
  },
  {
    name: "Stanford University",
    location: "Stanford, CA, USA",
    fees: "$55,000/year",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus",
    imgUrl: image,
  },
  {
    name: "MIT",
    location: "Cambridge, MA, USA",
    fees: "$52,000/year",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus",
    imgUrl: image,
  },
  {
    name: "University of Oxford",
    location: "Oxford, UK",
    fees: "£30,000/year",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus",
    imgUrl: image,
  },
];

const courses = [
  {
    courseName: "Computer Science",
    domain: "Engineering",
    program: "Undergraduate",
    duration: "4 Years",
    fees: "$40,000/year",
    intake: "Fall 2024",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus",
  },
  {
    courseName: "Business Administration",
    domain: "Management",
    program: "Postgraduate",
    duration: "2 Years",
    fees: "$30,000/year",
    intake: "Spring 2024",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere.",
  },
  {
    courseName: "Mechanical Engineering",
    domain: "Engineering",
    program: "Undergraduate",
    duration: "4 Years",
    fees: "$35,000/year",
    intake: "Fall 2024",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus",
  },
  {
    courseName: "Data Science",
    domain: "IT",
    program: "Postgraduate",
    duration: "2 Years",
    fees: "$45,000/year",
    intake: "Fall 2024",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus",
  },
];

function UniCoursersCard() {
  return (
    <div className="relative">
      {/* Blob Background */}
      <div
        className="absolute right-0 top-20 h-full w-1/2 bg-cover bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${vectorleftNose})`,
        }}
      ></div>
<div className=" px-4 py-10 flex flex-col gap-6 mx-auto max-w-screen-2xl mt-5">
{/* Content */}
<div className="relative z-10">
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
          Top Universities
        </h2>
        <div className="my-4 border-t border-gray-300"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-10">
          {universities.map((item, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={item.imgUrl}
                  alt={item.name}
                />
              </a>
              <div className="p-5">
              <div className="flex justify-between">
                  <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                  <div>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
                    </svg>

                  </div>
                </div>
                <div className="mb-2  flex justify-between text-center ">
                  <div className="flex gap-2 justify-between">
                  <img
                  className="rounded-t-lg  object-contain"
                  src={locationIcon}
                  alt={item.name}
                />

                  <p className="font-bold  text-gray-500 dark:text-gray-400 py-1">

                    {item.location}
                  </p>
                  </div>
                  <div className="font-bold text-gray-500">
                    Private
                  </div>
                </div>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
                <div >
                  <button type="button" data-modal-target="default-modal" data-modal-toggle="default-modal" className="py-2.5 w-full px-5 me-2 mb-2 text font-medium text-gray-700 focus:outline-none bg-white rounded-lg border border-gray-700 hover:bg-gray-100 hover:text-green-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Enquire Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-10">
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
          Popular Courses
        </h2>
        <div className="my-4 border-t border-gray-300"></div>
        <p className="font-light text-gray-700 text-lg ">
        With world-class universities, experienced faculties, and multiple opportunities in different fields, the UK is a top choice among international students. Know all the popular study abroad courses of UK universities so you can make the best of your career choice
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-5 dark:bg-gray-800 dark:border-gray-700"
            >
               <div className="flex justify-between">
                  <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {course.courseName}
                  </h5>
                  <div>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
                    </svg>

                  </div>
                </div>
             
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
               <strong>Domain:</strong>  {course.domain}
              </p>
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
              <strong>Program:</strong> {course.program}
              </p>
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
              <strong>Duration:</strong>  {course.duration}
              </p>
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
              <strong>Fees :</strong> {course.fees}
              </p>
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
              <strong>Intake:</strong>  {course.intake}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {course.description}
              </p>
              <div >
                  <button type="button" data-modal-target="default-modal" data-modal-toggle="default-modal" className="py-2.5 w-full px-5 me-2 mb-2 text font-medium text-gray-700 focus:outline-none bg-white rounded-lg border border-gray-700 hover:bg-gray-100 hover:text-green-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Enquire Now</button>
                </div>
            </div>
          ))}
        </div>
      </div>

</div>
      
    </div>
  );
}

export default UniCoursersCard;