/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import vector from "../../../assets/kpiVector.png";

const HomeKpiMatrixCard = ({
  imgSrc,
  name,
  role,
  description,
  socialLinks,
}) => (
  <div className="w-full h-[20rem] relative bg-black rounded-lg overflow-hidden flex flex-col justify-between items-start p-6">
    <img
      className="absolute right-0 top-0 h-full object-contain z-0"
      src={vector}
      alt="Decorative vector"
    />
    <h1
      className="text-5xl lg:text-5xl font-bold bg-clip-text text-transparent z-10"
      style={{
        backgroundImage:
          "linear-gradient(91.57deg, #FFFFFF 0%, rgba(255, 255, 255, 0.3) 100%)",
      }}
    >
      KPI Metric
    </h1>
    <p className="text-[#D4D4D8] lg:mb-2 sm:text-md  mt-2">
      lorem ispum dolor sit amet
    </p>
  </div>
);

export default HomeKpiMatrixCard;
