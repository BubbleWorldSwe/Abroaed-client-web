import LeadAdditionInfo from "../components/leadAdditionInfo"
import LeadAssignTeam from "../components/leadAssignTeam"
import LeadDocumentLibrary from "../components/leadDocumentLibrary"
import LeadPersonalDetails from "../components/leadPersonalDetails"
import LeadProfile from "../components/leadProfile"
import LeadSavePreference from "../components/leadSavePreference"
import LeadScheduleAppointment from "../components/leadScheduleAppointment"

const LeadProfileLayout = () => {
    return (
        <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col ">
            <section className="max-w-7xl  p-3 px-5 flex flex-col gap-4 sm:py-5 flex-grow">
                <LeadProfile />
                <LeadPersonalDetails />
                <LeadAdditionInfo />
                <LeadAssignTeam />
                <LeadScheduleAppointment />
                <LeadDocumentLibrary />
                <LeadSavePreference />
            </section>
        </div>
    )
}

export default LeadProfileLayout