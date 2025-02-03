import { Trash2 } from "lucide-react";

const StudentProfile = () => {
    return (
        <div className="font-rethink">
            <div className="flex justify-between ">
                <div className="flex items-center gap-4">
                    <img className="w-20 object-cover h-20 rounded-full" src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=" alt="" />
                    <div className=" dark:text-white">
                        <div className=" text-center px-2  max-w-min text-sm bg-[#F3F4F6]">Premium </div>
                        <div className="text-[#111928] text-3xl font-bold">Jese Leos</div>
                        <div className=" text-[#6B7280] text-xl dark:text-gray-400">India</div>
                    </div>
                </div>
                <div className="my-auto ">
                    <button className="flex items-center gap-2 bg-[#C80E41] text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none">
                        <Trash2 className="w-4 h-4" />
                        <span >Delete</span>
                    </button>

                </div>

            </div>

        </div>
    )
}

export default StudentProfile;