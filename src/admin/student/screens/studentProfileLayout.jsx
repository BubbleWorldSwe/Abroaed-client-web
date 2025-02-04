import StudentApplication from "../components/studentApplication";
import StudentAssignTeam from "../components/studentAssignTeam";
import StudentDocumentLibrary from "../components/studentDocumentLibrary";
import StudentPersonDetails from "../components/studentPersonDetails";
import StudentProfile from "../components/studentProfile";
import StudentSavedPreference from "../components/StudentSavedPreference";


const StudentProfileLayout = () => {
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

export default StudentProfileLayout;