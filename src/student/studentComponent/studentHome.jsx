import { SquareUserRound } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CheckboxField } from "../../commons/components/inputFields/checkboxField";
import { formatDate, formatStudentApplications } from "../../utils/helper";
import StudentApplicationsList from "../components/studentApplicationsList";
import StudentPreferenceDetails from "../components/studentPreferencesDetails";
import { IMAGES } from "../../constants/images";
import ActivityLoader from "../../commons/components/loader/activityLoader";
import {
  deleteSavedPreferenceRequest,
  fetchSavedPreferencesRequest,
} from "../../redux/actions/savedPreferencesActions";
import { toast } from "react-toastify";
import { setDeleteSavedPreference } from "../../api/savedPreferencesApi";
import { fetchStudentSavedPreferencesRequest } from "../../redux/actions/studentProfileActions";

const StudentHome = () => {
  const { studentToken, studentId } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state?.studentProfile);
  const { applications, studentProfile, prepsBatches, savedPreferences } =
    useSelector((state) => state.studentProfile);

  const dispatch = useDispatch();

  const removeFromSavedPreferences = async (id) => {
    try {
      const data = await setDeleteSavedPreference(id);

      if (data.status === 200) {
        dispatch(fetchStudentSavedPreferencesRequest(studentId));
        toast.success("Successfully Removed from Saved Prefrences");
      } else {
        toast.error(data?.message || "Something Went Wrong...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const studentApplications = formatStudentApplications(applications || []);

  function getCounsellor() {
    const counsellor = studentProfile?.assignTeamMembers.find(
      (member) => member?.roleId?.roleName === "Counsellor"
    );
    return counsellor || null;
  }

  const counsellor = getCounsellor();

  const navigate = useNavigate();

  useEffect(() => {
    if (!studentToken && !studentId) {
      navigate("/home");
    }
  }, [studentToken, studentId, navigate]);

  return (
    <>
      <div className="w-full bg-[#fff] min-h-[90vh] px-5 py-10 ">
        <h1 className="text-3xl font-bold">My Dashboard</h1>
        <div className="bg-white mb-10 p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-10">
            <div className="flex justify-center">
              <img
                className="w-14 object-cover h-15 rounded-full bg-slate-300 border-2"
                src={IMAGES.user}
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">
                  {`${studentProfile?.user?.firstName} ${studentProfile?.user?.lastName}`}
                </h2>
                <p className="text-gray-600">
                  +91 {`${studentProfile?.user?.mobile}`}
                </p>
              </div>
            </div>
            <div className="flex flex-col  gap-3">
              {counsellor && (
                <div className="p-4 flex gap-3 text-center border border-gray-200 rounded-lg ">
                  <SquareUserRound className="w-10 h-10" />
                  <div className="flex flex-col gap-1 text-start">
                    <p className="text-sm whitespace-nowrap  font-semibold">
                      Counsellor:{" "}
                      {`${counsellor?.firstName} ${counsellor?.lastName}`}
                    </p>
                    <p className="text-xs whitespace-nowrap text-gray-600">
                      Next Counselling on 17/02
                    </p>
                  </div>
                </div>
              )}
              <div className="p-4 flex gap-3 text-center border border-gray-200 rounded-lg">
                <SquareUserRound className="w-10 h-10" />
                <div className="flex flex-col gap-1 text-start">
                  <p className="text-sm font-semibold">Total Applications</p>
                  <p className="text-xs text-gray-600">
                    {applications?.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* save Preferences */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-semibold">Saved Preferences</h2>
            {/*    <a href="#" className="text-blue-500 text-sm">
            View all &gt;
          </a> */}
          </div>
          <div className="mt-2  bg-white p-6 rounded-xl shadow-md">
            <StudentPreferenceDetails
              removeFromSavedPreferences={removeFromSavedPreferences}
            />
          </div>
        </div>
        {/* my applications */}
        {
          //applications?.length > 0 &&

          <div className="mb-10">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">My Applications</h2>
              {/*  <a href="#" className="text-blue-500 text-sm">
              View all &gt;
            </a> */}
            </div>
            <div className="p-6 rounded-xl shadow-md">
              <div className="flex  gap-4 overflow-auto max-h-screen lg:max-w-[79vw] ">
                <StudentApplicationsList
                  studentApplication={studentApplications}
                />
              </div>
            </div>
          </div>
        }
        {/* recent view college */}
        {/*  <div className="bg-white p-4 rounded-lg border mb-6">
        <h2 className="text-2xl py-2 font-semibold border-b-2 border-gray-200  mb-3">
          Recently Viewed Colleges
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-3">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <RecentlyViewCollegeCard key={index} />
          ))}
        </div>
      </div> */}
        {/* Recently Viewed Courses */}
        {/*   <div className=" p-4 rounded-lg border mb-6">
        <h2 className="text-2xl py-2 font-semibold border-b-2 border-gray-200  mb-3">
          Recently Viewed Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((_, index) => (
            <RecentlyViewCourseCard key={index} />
          ))}
        </div>
      </div> */}
        {/* Language/Test Preps */}
        {prepsBatches?.length > 0 && (
          <div className=" font-rethink bg-white dark:bg-gray-900 flex flex-col ">
            <div className="flex py-2 flex-col  mx-auto w-full bg-white dark:bg-gray-800 relative  sm:rounded-lg">
              <h2 className="text-2xl py-2 font-semibold  mb-3">
                Language/ Test Preps
              </h2>
              <div className="flex-grow mt-1 overflow-auto bg-white dark:bg-gray-800  shadow rounded">
                <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="p-4"></th>
                      <th scope="col" className="px-4 py-3 min-w-[14rem]">
                        Type
                      </th>
                      <th scope="col" className="px-4 py-3 min-w-[10rem]">
                        Name
                      </th>
                      <th scope="col" className="px-4 py-3 min-w-[7rem]">
                        Batch Name{" "}
                      </th>

                      <th scope="col" className="px-4 py-3 min-w-[7rem]">
                        Mode
                      </th>
                      <th scope="col" className="px-4 py-3 min-w-[7rem]">
                        Batch Duration
                      </th>
                      <th scope="col" className="px-4 py-3 min-w-[7rem]">
                        Enrollment Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {prepsBatches?.map((batch, index) => (
                      <tr
                        key={index}
                        className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <td className="px-4 py-3 w-4">
                          <CheckboxField
                            onClick={(e) => e.stopPropagation()}
                            id={`checkbox-table-${index}`}
                            htmlFor={`checkbox-table-${index}`}
                          />
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                          {batch?.type == "test_prep"
                            ? "Test Prep"
                            : "Language Prep"}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {batch?.name}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {batch?.batchName}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {batch?.mode}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {batch?.duration} Months
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {formatDate(batch?.createdAt)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-gray-500 text-sm py-2 text-center mt-2">
                  Showing {prepsBatches?.length} results
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <ActivityLoader loading={loading} />
    </>
  );
};

export default StudentHome;
