
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
        <div className="absolute bottom-1 left-8  p-5 rounded-lg shadow-lg max-w-2xl">
          <h1 className="mb-4  font-extrabold tracking-tight leading-none text-white text-5xl ">
            Smart Financial Planning for Your Study Abroad Success
          </h1>

        </div>
      </section>
    </div>
  );
}

export default FinanceHeroSection;
