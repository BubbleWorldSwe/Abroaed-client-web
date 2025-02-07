import vector from "../../../../assets/kpiVector.png";


const PathwaysProgramKpiMatrixCard = () => (
    <div className="w-full h-[20rem] relative bg-black rounded-lg overflow-hidden flex flex-col justify-between items-start p-6">
        <img
            className="absolute right-0 top-0 h-full object-contain z-0"
            src={vector}
            alt="Decorative vector"
        />
        <h1
            className="text-5xl lg:text-5xl font-bold bg-clip-text text-transparent z-10"
            style={{
                backgroundImage: "linear-gradient(91.57deg, #FFFFFF 0%, rgba(255, 255, 255, 0.3) 100%)",
            }}
        >
            KPI Metric
        </h1>
        <p className="text-gray-100 lg:mb-2 sm:text-lg z-10 mt-2">Explore</p>
    </div>
);

export default PathwaysProgramKpiMatrixCard