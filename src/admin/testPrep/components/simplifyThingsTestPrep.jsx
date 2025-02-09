import { useSelector } from "react-redux";
import { simplifyThings } from "../data";

const SimplifyThings = () => {
  const testPrepDetails = useSelector(
    (state) => state.testPreps.selectedTestPrep
  );

  return (
    <div className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        {testPrepDetails?.simplifyThings || "No details available"}
      </p>
    </div>
  );
};

export default SimplifyThings;
