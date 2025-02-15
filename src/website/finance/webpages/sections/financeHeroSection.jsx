
import image from "../../../../assets/dark.png";

function FinanceHeroSection() {
  return (
    <div className="font-rethink">
      <section
        className="relative h-[75vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Text Content */}
        <div className="absolute bottom-8 left-8  p-6 rounded-lg shadow-lg max-w-2xl">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-6xl">
            Nurture & Finance your Abroad Dream
          </h1>

        </div>
      </section>
    </div>
  );
}

export default FinanceHeroSection;
