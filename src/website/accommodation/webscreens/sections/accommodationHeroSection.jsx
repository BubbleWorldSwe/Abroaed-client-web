/* eslint-disable react/prop-types */
import image from "../../../../assets/dark.png";

function AccommodationHeroSection({ selectedCountry }) {
  console.log(selectedCountry);
  return (
    <div className="font-rethink">
      <section
        className="relative h-[75vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-30"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30 z-0"></div>

        {/* Text Content */}
        <div className="absolute bottom-6  py-6   flex flex-col  justify-start  mx-auto px-12">
          <h1 className="text-[57px]  font-extrabold  text-[#F4F4F5] ">
            Accomodations
            {/* {selectedCountry?._id === "all"
              ? 
              `Accomodations`
              : `Accomodations in ${selectedCountry?.countryId?.name}`} */}
          </h1>
          <p className="font-bold text-[#D4D4D8] text-[22px] max-w-xl">
            With Abroaed, scouting the perfect accommodation abroad has never been easier
            <br />
          </p>
          {/*   <p className="font-light text-white md:text-lg xl:text-xl">
            Irure do commodo voluptate excepteur est qui tempor officia. Cillum
            occaecat sint occaecat consequat in fugiat dolor. Voluptate ea
            dolore duis amet Lorem.
            <br />
            <a
              className="font-medium text-primary-600 hover:underline"
              href="#"
            >
              Twitter
            </a>{" "}
            or our{" "}
            <a className="font-medium text-primary-600 hover:underline" href="">
              blog
            </a>{" "}
            for the latest updates.
          </p> */}
        </div>
      </section>
    </div>
  );
}

export default AccommodationHeroSection;
