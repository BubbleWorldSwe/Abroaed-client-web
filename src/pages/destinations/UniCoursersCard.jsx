import image from "../../assets/dark.png";
import blobImage from "../../assets/Vector.png"; // Add your blob image here.

const universities = [
  {
    name: "Harvard University",
    location: "Cambridge, MA, USA",
    fees: "$50,000/year",
    description: "One of the most prestigious universities offering world-class education.",
    imgUrl: image,
  },
  {
    name: "Stanford University",
    location: "Stanford, CA, USA",
    fees: "$55,000/year",
    description: "Known for its strong emphasis on entrepreneurship and innovation.",
    imgUrl: image,
  },
  {
    name: "MIT",
    location: "Cambridge, MA, USA",
    fees: "$52,000/year",
    description: "A leader in engineering and technology education worldwide.",
    imgUrl: image,
  },
  {
    name: "University of Oxford",
    location: "Oxford, UK",
    fees: "£30,000/year",
    description: "One of the oldest and most renowned universities globally.",
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
    description: "A comprehensive program focused on modern computing technologies and practices.",
  },
  {
    courseName: "Business Administration",
    domain: "Management",
    program: "Postgraduate",
    duration: "2 Years",
    fees: "$30,000/year",
    intake: "Spring 2024",
    description: "Learn the fundamentals of management and entrepreneurship.",
  },
  {
    courseName: "Mechanical Engineering",
    domain: "Engineering",
    program: "Undergraduate",
    duration: "4 Years",
    fees: "$35,000/year",
    intake: "Fall 2024",
    description: "Explore the principles of mechanics and energy for innovative solutions.",
  },
  {
    courseName: "Data Science",
    domain: "IT",
    program: "Postgraduate",
    duration: "2 Years",
    fees: "$45,000/year",
    intake: "Fall 2024",
    description: "A program designed to master data analysis and machine learning techniques.",
  },
];

function UniCoursersCard() {
  return (
    <div className="relative">
      {/* Blob Background */}
      <div
        className="absolute right-0 top-0 h-full w-1/2 bg-cover bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${blobImage})`,
        }}
      ></div>
<div className=" p-4 flex flex-col gap-6 mx-auto max-w-screen-2xl">
{/* Content */}
<div className="relative z-10">
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
          Top Universities
        </h2>
        <div className="my-4 border-t border-gray-300"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
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
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                </a>
                <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                  {item.location}
                </p>
                <p className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                  {item.fees}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-8">
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
          Popular Courses
        </h2>
        <div className="my-4 border-t border-gray-300"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-5 dark:bg-gray-800 dark:border-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                {course.courseName}
              </h5>
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                Domain: {course.domain}
              </p>
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                Program: {course.program}
              </p>
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                Duration: {course.duration}
              </p>
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                Fees: {course.fees}
              </p>
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                Intake: {course.intake}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {course.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

</div>
      
    </div>
  );
}

export default UniCoursersCard;