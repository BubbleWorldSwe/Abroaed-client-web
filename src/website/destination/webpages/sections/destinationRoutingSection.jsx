import { destinatioRounting } from "../../data";
import { Link } from "react-scroll"
const DestinationRoutingSection = () => {
  return (
    <div>
      <section className="bg-white relative p-2 shadow-xl  ">
        <div className="flex justify-between max-w-screen-xl mx-auto items-center dark:bg-gray-800 sm:rounded-lg  p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-5">
          {destinatioRounting.map((path, index) => (
            <Link key={index} to={path.link} smooth={true} duration={500} offset={-80} className="cursor-pointer">
              {path.sectionName}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DestinationRoutingSection;
