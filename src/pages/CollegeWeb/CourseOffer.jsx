// import CourseCard from "../../Components/CourseCard";



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
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus",
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
  {
    courseName: "Data Science",
    domain: "IT",
    program: "Postgraduate",
    duration: "2 Years",
    fees: "$45,000/year",
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
  {
    courseName: "Data Science",
    domain: "IT",
    program: "Postgraduate",
    duration: "2 Years",
    fees: "$45,000/year",
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

const CourseOffer = () => {
  return (
    <div className="relative">
      {/* Blob Background */}
      <section className="px-10 mx-auto">

        <div className=" px-4  flex flex-col gap-6 mx-auto max-w-screen-2xl mt-5">
          {/* Content */}

          <div className="relative z-10 mt-10">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              Course Offerings
            </h2>
            <div className="my-4 border-t border-gray-300"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
              {courses.map((course, index) => (
                //  <CourseCard course={course} key={index} />
                <hi key={index}>hi </hi>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default CourseOffer