import { useSelector } from "react-redux";
import StudentApplicationsList from "../components/studentApplicationsList";
import { formatStudentApplications } from "../../utils/helper";

const StudentApplications = () => {
  const { applications } = useSelector((state) => state?.studentProfile);

  const studentApplications = formatStudentApplications(applications || []);

  console.log(studentApplications);

  function getDataLengthByStatus(targetStatus) {
    const item = studentApplications.find((s) => s.status === targetStatus);
    return item ? item.data?.length || 0 : 0;
  }

  console.log(studentApplications);

  return (
    <div className="w-full bg-[#fff] font-rethink min-h-[90vh] px-5 py-10  scroll-smooth">
      <h2 className="text-2xl font-semibold mb-5">Applications</h2>

      <div className="grid mb-8 grid-cols-1 lg:grid-cols-4 gap-3">
        <div className="flex flex-col shadow-lg rounded-lg p-3 px-5">
          <label className="font-bold text-4xl text-[#EDBD05]">
            {applications?.length}
          </label>
          <span className="text-xl font-semibold">Applied</span>
        </div>
        <div className="flex flex-col shadow-lg rounded-lg p-3 px-5">
          <label className="font-bold text-4xl text-[#EDBD05]">
            {getDataLengthByStatus("verifying_documents")}
          </label>
          <span className="text-xl font-semibold">In-Progress</span>
        </div>
        <div className="flex flex-col shadow-lg rounded-lg p-3 px-5">
          <label className="font-bold text-4xl text-[#EDBD05]">
            {getDataLengthByStatus("offer_letter_received")}
          </label>
          <span className="text-xl font-semibold">Offer Received</span>
        </div>
        <div className="flex flex-col shadow-lg rounded-lg p-3 px-5">
          <label className="font-bold text-4xl text-[#EDBD05]">
            {getDataLengthByStatus("rejected")}
          </label>
          <span className="text-xl font-semibold">Rejected</span>
        </div>
      </div>
      {/* university details */}

      <div className="p-6 rounded-xl shadow-md">
        <div className="flex  gap-4 overflow-auto max-h-screen lg:max-w-[79vw] ">
          <StudentApplicationsList studentApplication={studentApplications} />
        </div>
      </div>

      <div className="my-5  bg-white dark:bg-gray-900 flex flex-col ">
        <div className="p-6 rounded-xl shadow-md">
          <h2 className="text-2xl py-2 font-semibold  mb-3">Comments</h2>

          <div className="flex-grow mt-1 overflow-auto bg-white dark:bg-gray-800  shadow rounded">
            <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3 min-w-[14rem]">
                    College
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[14rem]">
                    Course
                  </th>
                  <th scope="col" className="px-4 py-3 min-w-[10rem]">
                    Comment
                  </th>
                </tr>
              </thead>
              <tbody>
                {applications.length > 0 &&
                applications.some((app) => app.comments?.length > 0) ? (
                  applications.map((app, _) =>
                    app.comments.map((data, i) => (
                      <tr
                        key={`${app._id}-${i}`} // better unique key
                        className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {app?.college?.name || "-"}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {app?.courseName || "-"}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900">
                          {data?.message || "-"}
                        </td>
                      </tr>
                    ))
                  )
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="px-4 py-3 text-center text-gray-500"
                    >
                      No data exists
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentApplications;
