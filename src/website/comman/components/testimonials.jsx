/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import play_circle from "../../../assets/play_circle.png";
import testimonialImg from "../../../assets/testimonialImg.png";

const Testimonials = () => {
  const TestimonialsCard = ({ article }) => {
    return (
      <div className="max-w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="relative h-[300px]">
          <a href="#">
            <img
              className="object-cover w-full h-full rounded-t-lg"
              src={testimonialImg}
              alt=""
            />
          </a>
          {/* <div className="absolute bottom-3 left-2 z-0 text-white bg-slate-800 bg-opacity-40  flex justify-center  gap-2 p-2">
            <img
              className="rounded-lg max-w-full "
              src={play_circle}
              alt="Counselling session"
            />
            <p className="opacity-95 ">Watch History</p>
          </div> */}
        </div>
        <div className="flex p-3 items-center space-x-4">
          <img
            className="w-14 h-14 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
            alt="Jese Leos avatar"
          />
          <div className="font-medium dark:text-white">
            <div className="text-lg font-body">Jese Leos</div>
            <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              Aug 15, 2021 · 16 min read
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className=" dark:bg-gray-900 relative z-20 px-10 mx-auto">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-8 lg:px-3">
        <div className=" max-w-screen-sm text-start mb-4 lg:mb-16 ">
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            100+ Success Stories
          </p>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Lorem Ipsum, Dolor Sit
          </h2>
        </div>
        <div className="grid  gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <TestimonialsCard />
          <TestimonialsCard />
          <TestimonialsCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
