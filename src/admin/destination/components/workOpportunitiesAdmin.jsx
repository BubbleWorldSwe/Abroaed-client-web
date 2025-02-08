import { useSelector } from "react-redux";

const WorkOpportunitiesAdmin = ({}) => {
  const details = useSelector(
    (state) => state.destinations.selectedDestination
  );
  return (
    <div className="   bg-white  py-0  dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center  gap-3 ">
        <h2 className="mb-2 font-semibold ">Part-time options for students</h2>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {details?.workOpportunities?.partTimeStudents || "No details available"}
      </p>
      <h2 className="mb-2 mt-3 font-semibold ">
        Post degree popular work opportunities
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {details?.workOpportunities?.postDegreeOpportunity ||
          "No details available"}
      </p>
    </div>
  );
};

export default WorkOpportunitiesAdmin;
