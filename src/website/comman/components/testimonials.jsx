import TestimonialsCard from "./testimonialsCard";

const Testimonials = () => {
  const videos = ["Ez8F0nW6S-w", "4wSL3KHSAns", "S_xwQNHOuSI"];
  return (
    <section className=" dark:bg-gray-900 relative  px-10 mx-auto">
      <div className="py-14 px-4 mx-auto max-w-screen-2xl  lg:px-3">
        <div className=" max-w-screen-sm text-start mb-4 lg:mb-10 ">
          <p className="font-semibold text-[#52525B] text-base dark:text-gray-400">
            100+ Success Stories
          </p>
          <h2
            className={`mb-5 text-[45px]  font-extrabold text-gray-primary dark:text-white`}
          >
            Read Our Success Stories
          </h2>
        </div>
        <div className="grid  gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((data, i) => (
            <TestimonialsCard key={i} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
