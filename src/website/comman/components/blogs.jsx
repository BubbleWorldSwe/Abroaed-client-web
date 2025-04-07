import { useSelector } from "react-redux";
import BlogCard from "./blogCard";
import Slider from "react-slick";
import { useRef } from "react";

const Blogs = () => {
  const { allBlogs } = useSelector((state) => state.blogs);
  // const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: true,
    centerMode: true,
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
          className="overflow-x-auto py-10"
        >
          <Slider ref={sliderRef} {...settings}>
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
