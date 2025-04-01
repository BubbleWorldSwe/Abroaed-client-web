import { useSelector } from "react-redux";
import BlogCard from "./blogCard";
import Slider from "react-slick";

const Blogs = () => {
  const { allBlogs } = useSelector((state) => state.blogs);

  let settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
  };

  return (
    allBlogs.length > 0 && (
      <section className=" dark:bg-gray-900 relative py-16 mx-auto">
        <div className="px-5 md:px-12 mx-auto max-w-screen-2xl relative z-10">
          {/* <div className="flex flex-col items-start justify-center mb-5 md:mb-10"> */}
          <p className="font-semibold text-[#52525B] text-base dark:text-gray-400">
            The Latest
          </p>
          <h2
            className={`text-[24px] md:text-[45px]  font-extrabold text-gray-primary dark:text-white`}
          >
            ABROAED Updates
          </h2>
        </div>
        <div className="overflow-x-auto py-6">
          <Slider {...settings}  >
            {allBlogs.map((article, idx) => (
              <div key={idx} className="px-3 py-1 ">
                <BlogCard article={article} />
              </div>
            ))}
          </Slider>
        </div>
        {/* </div> */}
      </section>
    )
  );
};

export default Blogs;
