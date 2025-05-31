import { useEffect, useState } from "react";
import pencil from "../../assets/pencil.png";
import { additionalServiceDetails, additionalServiceTabColors } from "../data";
import AdditionalServicesCard from "../components/additionalServicesCard";
import StudentProfileEditModal from "../modals/studentProfileEditModal";
import { getStudentDetailsById } from "../../api/studentsApi";
import { useDispatch, useSelector } from "react-redux";
import { editStudentProfileRequest } from "../../redux/actions/studentProfileActions";
import StudentAdditionInfoModal from "../modals/studentAdditionInfoModal";
import { IMAGES } from "../../constants/images";
import ActivityLoader from "../../commons/components/loader/activityLoader";

const StudentProfile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State to manage Add modal open/close
  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const [addInfoModal, setAddInfoModal] = useState(null);

  const { studentProfile, loading } = useSelector(
    (state) => state.studentProfile
  );

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  async function onUpdateStudent(data, userId) {
    try {
      dispatch(editStudentProfileRequest(userId, data, studentProfile?._id));
      handleCloseAddModal();
      setAddInfoModal(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <StudentProfileEditModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        onUpdate={onUpdateStudent}
        userId={studentProfile?.user?._id}
        filledData={{
          firstName: studentProfile?.user?.firstName,
          lastName: studentProfile?.user?.lastName,
          email: studentProfile?.user?.email,
          mobile: studentProfile?.user?.mobile,
          address: studentProfile?.user?.address || "",
        }}
      />

      <StudentAdditionInfoModal
        isOpen={addInfoModal}
        onClose={() => setAddInfoModal(false)}
        onUpdate={onUpdateStudent}
        userId={studentProfile?.user?._id}
        leadId={studentProfile?._id}
        filledData={{
          highestEducation: studentProfile?.user?.userDetail?.highestEducation,
          preferredDestination:
            studentProfile?.user?.userDetail?.preferredDestination?._id,
          applyingFor: studentProfile?.user?.userDetail?.applyingFor,
          targetYear: studentProfile?.user?.userDetail?.targetYear,
        }}
      />
      <div className="w-full bg-[#fff] font-rethink min-h-[90vh] px-5 py-10 scroll-smooth">
        <div className="flex mb-8 justify-between ">
          <div className="flex items-center gap-4">
            <img
              className="w-16 object-cover h-16 rounded-full bg-slate-300 border-2 ml-5"
              src={IMAGES.user}
            />
            <div className=" dark:text-white">
              <div className=" text-center px-2  max-w-min text-sm  bg-[#F3F4F6]">
                Premium{" "}
              </div>
              <div className="text-[#111928] text-3xl font-bold">
                {" "}
                {`${studentProfile?.user?.firstName} ${studentProfile?.user?.lastName}`}
              </div>
              {/* <div className=" text-[#6B7280] text-xl dark:text-gray-400 font-semibold">
                Level Applying For
              </div> */}
            </div>
          </div>
        </div>
        {/* personal information */}
        <div className="w-full mx-auto mb-8   p-5 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-2xl font-bold  text-gray-primary`}>
              Personal Information
            </h2>
            <button onClick={handleOpenAddModal}>
              <img src={pencil} alt="pencil-img" className="w-6 h-6" />
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="font-semibold tracking-tight text-[#111928]">
                Full Name
              </label>
              <span className="text-[#6B7280] tracking-tight">
                {`${studentProfile?.user?.firstName} ${studentProfile?.user?.lastName}`}
              </span>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold tracking-tight text-[#111928]">
                Phone Number
              </label>
              <span className="text-[#6B7280] tracking-tight">
                {studentProfile?.user?.mobile}
              </span>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold tracking-tight text-[#111928]">
                Email
              </label>
              <span className="text-[#6B7280] tracking-tight">
                {studentProfile?.user?.email}
              </span>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold tracking-tight text-[#111928]">
                Location
              </label>
              <span className="text-[#6B7280] tracking-tight">
                {studentProfile?.user?.address || "--"}
              </span>
            </div>
          </div>
        </div>
        {/* addition information */}
        <div className="w-full mx-auto mb-8   p-5 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-2xl font-bold  text-gray-primary`}>
              Additional Information
            </h2>
            <button onClick={() => setAddInfoModal(!addInfoModal)}>
              <img src={pencil} alt="pencil-img" className="w-6 h-6" />
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="font-semibold tracking-tight text-[#111928]">
                Highest Educational Qualification
              </label>
              <span className="text-[#6B7280] tracking-tight">
                {studentProfile?.user?.userDetail?.highestEducation || "--"}
              </span>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold tracking-tight text-[#111928]">
                Preferred Destination
              </label>
              <span className="text-[#6B7280] tracking-tight">
                {studentProfile?.user?.userDetail?.preferredDestination
                  ?.countryId?.name || "--"}
              </span>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold tracking-tight text-[#111928]">
                Applying For
              </label>
              <span className="text-[#6B7280] tracking-tight">
                {studentProfile?.user?.userDetail?.applyingFor || "--"}
              </span>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold tracking-tight text-[#111928]">
                Target Year
              </label>
              <span className="text-[#6B7280] tracking-tight">
                {studentProfile?.user?.userDetail?.targetYear || "--"}
              </span>
            </div>
          </div>
        </div>
        {/* Assign Team */}
        <div className="w-full mx-auto mb-8   p-5 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-2xl font-bold  text-gray-primary`}>
              Assigned Team
            </h2>
          </div>
          <div className="grid mt-10  grid-cols-1 lg:grid-cols-2 gap-4">
            {studentProfile?.assignTeamMembers?.map((data, key) => (
              <div className="flex items-center gap-4" key={key}>
                <img
                  className="w-16 object-cover h-16 rounded-full bg-slate-300 border-2 ml-5"
                  src={IMAGES.user}
                />
                <div className=" dark:text-white">
                  <div className="text-sm ">{data?.roleId?.roleName}</div>
                  <div className="text-[#111928] text-base font-semibold">
                    {`${data?.firstName} ${data?.lastName}`}
                  </div>
                  <div className=" text-[#6B7280] text-sm dark:text-gray-400">
                    +91 {data?.mobile}
                  </div>
                  <div className=" text-[#6B7280] text-sm dark:text-gray-400">
                    {data?.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Additional service */}
        {/*   <div className="w-full mx-auto mb-8   p-5 bg-white rounded-lg shadow-lg ">
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-2xl font-bold  text-gray-primary`}>
              Additional Services
            </h2>
          </div>
          <div className="flex justify-between  gap-4 overflow-auto max-h-screen overflow-y-auto">
            {additionalServiceDetails.map((tab, index) => {
              return (
                <div className="flex flex-col gap-4 w-full" key={index}>
                  <div>
                    <button
                      className={`inline-block py-4 w-full text-sm text-start font-semibold border-b-2 border-[#D4D4D8] rounded-t-lg ${
                        activeTab === index
                          ? "text-black  border-b-4 border-blue-500"
                          : "text-gray-500 dark:text-gray-400 font-semibold hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      }`}
                      onClick={() => handleTabClick(index)}
                      role="tab"
                      aria-controls={`styled-${tab?.tabName
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      aria-selected={activeTab === index}
                    >
                      <span
                        className={`px-3 py-1 rounded-full ${
                          additionalServiceTabColors[tab.tabName] ||
                          "bg-gray-300"
                        } `}
                      >
                        {tab.tabName}
                      </span>
                    </button>
                  </div>
                  <div className="flex flex-col gap-5">
                    {tab.cardDetails.map((card, idx) => (
                      <AdditionalServicesCard service={card} key={idx} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
      <ActivityLoader loading={loading} />
    </>
  );
};

export default StudentProfile;
