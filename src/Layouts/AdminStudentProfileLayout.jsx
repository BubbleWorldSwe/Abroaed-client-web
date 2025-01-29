import StudentAssignTeam from "../pages/AdminStudentProfile/StudentAssignTeam";
import StudentPersonDetails from "../pages/AdminStudentProfile/StudentPersonDetails";
import StudentProfile from "../pages/AdminStudentProfile/StudentProfile";


const AdminStudentProfileLayout = () => {


    return (
        <>
            <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col ">
                <section className=" p-3 px-5 flex flex-col gap-4 sm:py-5 flex-grow">
                    <StudentProfile />
                    <StudentPersonDetails />
                    <StudentAssignTeam />
                </section>
            </div>
        </>
    )
}

export default AdminStudentProfileLayout;