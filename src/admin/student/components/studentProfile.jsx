import { Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
import { IMAGES } from "../../../constants/images";

const StudentProfile = () => {
  const studentProfile = useSelector(
    (state) => state?.students?.selectedStudent
  );
  const { isWriteAccess } = useSelector((state) => state.auth);

  return (
    <div className="flex justify-between ">
      <div className="flex items-center gap-4">
        <img
          className="w-16 object-cover h-16 rounded-full bg-slate-300 border-2 ml-3"
          src={IMAGES.user}
        />
        <div className=" dark:text-white">
          <div className=" text-center px-2  max-w-min text-sm bg-[#F3F4F6]">
            Premium
          </div>
          <div className="text-[#111928] text-3xl font-bold">{`${studentProfile?.user?.firstName} ${studentProfile?.user?.lastName}`}</div>
          <div className=" text-[#6B7280] text-xl dark:text-gray-400">
            {studentProfile?.user?.address}
          </div>
        </div>
      </div>
      {isWriteAccess &
      (
        <div className="my-auto ">
          <button className="flex items-center gap-2 bg-[#C80E41] text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none">
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentProfile;
