/* eslint-disable react/prop-types */

const HeroTextComponent = ({ children, img }) => {
  return (
    <section
      className="relative  h-[100vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`,

      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-20"
        style={{ mixBlendMode: "multiply" }}
      ></div>

      {/* Text Content */}
      <div className="absolute top-1/2 md:top-1/3 px-4 flex flex-row items-center justify-start max-w-5xl">
        <div className="text-white px-1 lg:px-8">{children}</div>
      </div>
    </section>
  );
};

export default HeroTextComponent;
