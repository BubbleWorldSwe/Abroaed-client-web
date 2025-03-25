
import financeHero from "../../../../assets/financeHero.png";

function FinanceHeroSection() {
  return (
    <div className="font-rethink">
      <section
        className="relative h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${financeHero})`,
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30 z-0"></div>

        {/* Text Content */}
        <div className="absolute bottom-3  max-w-4xl pb-6  flex flex-col  justify-start  mx-auto px-12">
          <h3 className="text-[57px] leading-tight   font-extrabold  text-[#F4F4F5] ">
            Smart Financial Planning for Your Study ABROAED Success
          </h3>
        </div>
      </section>
    </div>
  );
}

export default FinanceHeroSection;
