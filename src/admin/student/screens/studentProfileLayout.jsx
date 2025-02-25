import DocumentLibrary from "../components/documentLibrary";
import StudentAdditionalDetails from "../components/studentAdditionalDetails";
// import StudentAdditionalServices from "../components/studentAdditionalServices";
import StudentApplication from "../components/studentApplication";
import StudentAssignTeam from "../components/studentAssignTeam";
// import StudentDocumentLibrary from "../components/studentDocumentLibrary";
import StudentPersonalDetails from "../components/studentPersonDetails";
import StudentProfile from "../components/studentProfile";
import StudentSavedPreference from "../components/studentSavedPreference";
import StudentTransaction from "../components/studentTransaction";
import StudentLangPrep from "../tables/studentLangPrepTable";


const StudentProfileLayout = () => {
    return (
        <>
            <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col ">
                <section className="max-w-7xl  p-3 px-5 flex flex-col gap-4 sm:py-5 flex-grow">
                    <StudentProfile />
                    <StudentPersonalDetails />
                    <StudentAdditionalDetails />
                    <StudentAssignTeam />
                    <DocumentLibrary />
                    {/* <StudentDocumentLibrary /> */}
                    <StudentSavedPreference />
                    <StudentApplication />
                    <StudentLangPrep />
                    <StudentTransaction />
                    {/* <StudentAdditionalServices /> */}
                </section>
            </div>
        </>
    )
}

export default StudentProfileLayout;