/* eslint-disable react/prop-types */
import languageHero from "../../../../assets/languageHero.png";

function LanguagePrepHero({ languagePrepsDetails }) {
  return (
    <div className="">
      <section
        className="relative h-[75vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${languageHero})`,
        }}
      >
        <div className="absolute bottom-3 py-6  max-w-4xl  flex flex-col  justify-start  mx-auto px-12">
          <h1 className="text-[57px]  font-extrabold leading-tight  text-[#F4F4F5] ">
            {languagePrepsDetails?.productName}
          </h1>
        </div>
      </section>
    </div>
  );
}

export default LanguagePrepHero;
