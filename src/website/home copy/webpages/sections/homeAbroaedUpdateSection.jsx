import HomeAbroaedUpdateCard from "../../components/homeAbroaedUpdateCard";
import { articles } from "../../data";

const HomeAbroaedUpdateSection = () => {
  return (
    <section className=" dark:bg-gray-900 relative px-10 mx-auto">
      <div className="py-8 px-4 mx-auto  max-w-screen-2xl lg:py-24 dark:bg-gray-800 antialiased  relative z-20">
        <div className="flex flex-col items-start justify-center ">
          <h2 className="text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            Latest Updates
          </h2>
          <p>Laborum amet veniam proident non officia ullamco ullamco quis.</p>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto max-w-screen-2xl">
          {articles.map((article, idx) => (
            <HomeAbroaedUpdateCard article={article} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAbroaedUpdateSection;
