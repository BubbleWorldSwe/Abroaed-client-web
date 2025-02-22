import check_circle from "../../../../assets/check_circle.png";

const DestinationAdmissionRequirementSection = ({ destinationDetails }) => {
  return (
    <div className="relative z-10">
      <section className=" dark:bg-gray-900 relative px-10 mx-auto">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols lg:py-16 lg:px-6">
          <div className="font  text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Admission Requirements
            </h2>
            <p className=" text-black ">
              Here are the major requirements to study in the{" "}
              {destinationDetails?.countryId?.name}, which you need to ensure
              while applying to a {destinationDetails?.countryId?.name}{" "}
              university:{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  ">
            {/* Top Row: 3 Cards */}
            {destinationDetails?.admissionRequirements?.map((data, index) => (
              <div key={index} className="flex items-center space-x-4 p-2">
                <div className="flex space-x-8 justify-between">
                  <img
                    className=" object-contain"
                    src={check_circle}
                    alt={""}
                  />

                  <p className="  text-gray-900 dark:text-gray-400 py-1">
                    {data.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationAdmissionRequirementSection;
