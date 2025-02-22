import image from "../../../../assets/dark.png";

function LanguagePrepHero({ languagePrepsDetails }) {
  return (
    <div className="font-rethink">
      <section
        className="relative h-[75vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute bottom-8 left-11 p-6 rounded-lg shadow-lg max-w-2xl">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-6xl">
            {languagePrepsDetails?.productName}
          </h1>
        </div>
      </section>
    </div>
  );
}

export default LanguagePrepHero;
