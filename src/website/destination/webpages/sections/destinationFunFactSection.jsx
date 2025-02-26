/* eslint-disable react/prop-types */
import DestinationFunFactCard from "../../components/destinationFunFactCard";

const DestinationFunFactSection = ({ items, destinationDetails }) => {
  const list = [
    {
      title: "Capital",
      value: destinationDetails?.capitalId?.name,
      icon: "🌎",
    },
    {
      title: "Intr. Students",
      value: destinationDetails?.internationalStudent,
      // value: destinationDetails?.totalPopulation,
      icon: "🎓",
    },
    { title: "Language", value: destinationDetails?.language, icon: "𝗘𝗡╸" },

    { title: "Currency", value: destinationDetails?.currency, icon: "💵" },
    { title: "Dialing Code", value: destinationDetails?.dialcode, icon: "📞" },
  ];

  return (
    <div className="relative z-10">
      <section className=" py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-2xl px-4 2xl:px-0">
          <div className="flex items-center justify-center text-center">
            <p className="text-3xl font-semibold text-gray-900 dark:text-white">
              Fun Facts
            </p>
          </div>
          <div className="mt-6 space-y-6">
            <div className="flex flex-col md:flex-row  justify-center flex-wrap gap-5 ">
              {list?.map((item, idx) => (
                <DestinationFunFactCard
                  icon={item.icon}
                  title={item.title}
                  desc={item.value}
                  key={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationFunFactSection;
