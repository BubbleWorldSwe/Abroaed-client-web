import { Outlet } from "react-router-dom"
import NavStudent from "./studentNav"
import StudentSideBar from "./studentSideBar"


const StudentLayout = () => {
    return (
        <div className="bg-gray-200 font-rethink relative dark:bg-gray-900 antialiased h-screen">
            <NavStudent />
            <div className="flex h-[90vh]">
                {/* Sidebar */}
                <StudentSideBar />
                {/* Main Content */}
                <main className="bg-gray-200 dark:bg-gray-900 h-full  w-full flex flex-col">
                    <div className="flex-grow  overflow-scroll">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>)
}

export default StudentLayout