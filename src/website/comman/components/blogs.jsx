/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import BlogCard from "./blogCard";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Blogs = () => {
  const { allBlogs } = useSelector((state) => state.blogs);
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-10 left-1 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
    >
      <FaArrowLeft />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-10 right-1 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
    >
      <FaArrowRight />
    </button>
  );

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    allBlogs.length > 0 && (
      <section className=" dark:bg-gray-900 relative ">
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
        <div
          className="overflow-x-auto pt-8"
        >
          <Slider  {...settings}>
            {allBlogs.map((article, idx) => (
              <div
                key={idx}
                className="px-3 py-1 pb-4 transition-transform duration-300 hover:scale-[1.05]"
              >
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
