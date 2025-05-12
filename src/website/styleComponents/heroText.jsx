/* eslint-disable react/prop-types */
import { MotionComponent } from "../comman/components/motionComponent";

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
      <div className="absolute top-1/2  px-4 flex flex-row items-center justify-start max-w-5xl">
        <MotionComponent>
          <div className="text-white px-1 lg:px-8">{children}</div>
        </MotionComponent>
      </div>
    </section>
  );
};

export default HeroTextComponent;
