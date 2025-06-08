import { Outlet } from "react-router-dom"
import NavStudent from "./studentNav"
import StudentSideBar from "./studentSideBar"


const StudentLayout = () => {
    return (
        <div className="min-h-screen h-[100vh] w-full bg-gray-200 font-rethink dark:bg-gray-900 antialiased flex flex-col">
            <NavStudent />
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <StudentSideBar className="h-full" />
                {/* Main Content */}
                <main className="flex-1 overflow-auto bg-gray-200 dark:bg-gray-900">
                    <Outlet />
                </main >
            </div>
        </div >
    )
}

export default StudentLayout