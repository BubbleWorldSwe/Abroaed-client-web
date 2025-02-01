// import pencil from "../../assets/pencil.png"
import pencil from "../../../assets/pencil.png";

const ImmigrationDetailsAdmin = ({ details }) => {
  return (
    <div className="   bg-white  py-0  dark:border-gray-700 dark:bg-gray-800">
      {/* About Section */}

      {details?.immigrations?.map((data, i) => (
        <div key={i}>
          <div className="flex items-center  gap-3 ">
            <h2 className="mb-2 font-semibold ">{data.visaName} | Visa Type</h2>
            <img src={pencil} alt="edit Icon " className="w-4 h-4 mb-2" />
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {data.description || "No details available"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ImmigrationDetailsAdmin;
