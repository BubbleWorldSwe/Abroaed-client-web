/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import vector from "../../../assets/kpiVector.png";

const HomeKpiMatrixCard = ({
  cardName,
  name,
  role,
  description,
  socialLinks,
}) => (
  <div className="w-full h-[12rem] relative bg-black rounded-lg overflow-hidden flex flex-col justify-center items-center p-6">
    <img
      className="absolute right-0 top-0 h-full object-contain z-0"
      src={vector}
      alt="Decorative vector"
    />
    <h1
      className="text-4xl font-bold bg-clip-text text-transparent z-10 flex justify-center items-center w-full text-center"
      style={{
        backgroundImage:
          "linear-gradient(91.57deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%)",
      }}
    >
      {cardName}
    </h1>
  </div>
);

export default HomeKpiMatrixCard;
