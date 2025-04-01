import HomeBlogCard from "../../components/homeBlogCard";

const HomeBlogsSection = () => {
  return (
    <div>
      <section className=" dark:bg-gray-900 relative z-20 px-10 mx-auto">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-8 lg:px-6">
          <div className=" max-w-screen-sm text-start mb-4 lg:mb-16 ">
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Blog Updates
            </p>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              The Latest
            </h2>
          </div>
          <div className="grid  gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array(3)
              .fill()
              .map((_, index) => (
                <HomeBlogCard key={index} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBlogsSection;
