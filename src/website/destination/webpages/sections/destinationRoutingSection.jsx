import { destinatioRounting } from "../../data";
import { Link } from "react-scroll"
const DestinationRoutingSection = () => {
  return (
    <div>
      <section className="bg-white relative p-2 shadow-xl">
        <div className="flex justify-between max-w-screen-xl mx-auto items-center dark:bg-gray-800 sm:rounded-lg p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-5 relative">
          {destinatioRounting.map((path, index) => (
            <Link
              key={index}
              to={path.link}
              smooth={true}
              duration={500}
              offset={-120}
              className="relative cursor-pointer font-semibold text-gray-700 transition-colors hover:text-blue-700 after:content-[''] after:absolute after:left-0 after:-bottom-6 after:h-[2px] after:w-full after:bg-blue-700 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {path.sectionName}
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default DestinationRoutingSection;
