/* eslint-disable react/prop-types */
import image from "../../../../assets/dark.png";

function LanguagePrepHero({ languagePrepsDetails }) {
  return (
    <div className="">
      <section
        className="relative h-[75vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute bottom-3  max-w-4xl  flex flex-col  justify-start  mx-auto px-12">
          <h1 className="text-[57px]  font-extrabold leading-tight  text-[#F4F4F5] ">
            {languagePrepsDetails?.productName}
          </h1>
        </div>
      </section>
    </div>
  );
}

export default LanguagePrepHero;
