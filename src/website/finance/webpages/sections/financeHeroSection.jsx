
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
        <div className="absolute bottom-3  max-w-4xl  flex flex-col  justify-start  mx-auto px-12">
          <h3 className="text-[57px] leading-tight   font-extrabold  text-[#F4F4F5] ">
            Smart Financial Planning for Your Study Abroaed Success
          </h3>
        </div>
      </section>
    </div>
  );
}

export default FinanceHeroSection;
