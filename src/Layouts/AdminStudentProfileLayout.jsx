import StudentApplication from "../pages/AdminStudentProfile/StudentApplication";
import StudentAssignTeam from "../pages/AdminStudentProfile/StudentAssignTeam";
import StudentDocumentLibrary from "../pages/AdminStudentProfile/StudentDocumentLibrary";
import StudentPersonDetails from "../pages/AdminStudentProfile/StudentPersonDetails";
import StudentProfile from "../pages/AdminStudentProfile/StudentProfile";
import StudentSavedPreference from "../pages/AdminStudentProfile/StudentSavedPreference";


const AdminStudentProfileLayout = () => {


    return (
        <>
            <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col ">
                <section className="max-w-6xl  p-3 px-5 flex flex-col gap-4 sm:py-5 flex-grow">
                    <StudentProfile />
                    <StudentPersonDetails />
                    <StudentAssignTeam />
                    <StudentDocumentLibrary />
                    <StudentSavedPreference />
                    <StudentApplication />
                </section>
            </div>
        </>
    )
}

export default AdminStudentProfileLayout;