import { destinatioRounting } from "../../data";

const DestinationRoutingSection = () => {
  return (
    <div>
      <section className="bg-white relative p-2 shadow-xl  ">
        <div className="flex justify-between max-w-screen-xl mx-auto items-center dark:bg-gray-800 sm:rounded-lg  p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-5">
          {destinatioRounting.map((path, index) => (
            <button type="button" className="text-sm" key={index}>
              {path}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DestinationRoutingSection;
