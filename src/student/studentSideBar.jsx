import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    CreditCard,
    File,
    FileText,
    House,
    Users,
} from "lucide-react";
import { motion } from "framer-motion";

const StudentSideBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setIsOpen(screenWidth > 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <motion.div animate={{ width: isOpen ? 220 : 60 }} >
            <div className="shadow-md h-full w-[250px] bg-[#fff] p-4">
                <ul className="space-y-1">
                    <li
                        onClick={() => navigate("/student/home")}
                        className={`flex items-center px-4 py-3 rounded-md cursor-pointer ${isActive("/student/home") ? "text-black font-bold" : "text-gray-400"
                            } hover:bg-gray-100 transition`}
                    >
                        <House className="w-5 h-5" />
                        <span className="ml-3">Home</span>
                    </li>

                    <li
                        onClick={() => navigate("/student/profile")}
                        className={`flex items-center px-4 py-3 rounded-md cursor-pointer ${isActive("/student/profile") ? "text-black font-bold" : "text-gray-400"
                            } hover:bg-gray-100 transition`}
                    >
                        <Users className="w-5 h-5" />
                        <span className="ml-3">Profile</span>
                    </li>

                    <li
                        onClick={() => navigate("/student/application")}
                        className={`flex items-center px-4 py-3 rounded-md cursor-pointer ${isActive("/student/application") ? "text-black font-bold" : "text-gray-400"
                            } hover:bg-gray-100 transition`}
                    >
                        <FileText className="w-5 h-5" />
                        <span className="ml-3">Applications</span>
                    </li>

                    <li
                        onClick={() => navigate("/student/documents")}
                        className={`flex items-center px-4 py-3 rounded-md cursor-pointer ${isActive("/student/documents") ? "text-black font-bold" : "text-gray-400"
                            } hover:bg-gray-100 transition`}
                    >
                        <File className="w-5 h-5" />
                        <span className="ml-3">Documents</span>
                    </li>

                    <li
                        onClick={() => navigate("/student/transactions")}
                        className={`flex items-center px-4 py-3 rounded-md cursor-pointer ${isActive("/student/transactions") ? "text-black font-bold" : "text-gray-400"
                            } hover:bg-gray-100 transition`}
                    >
                        <CreditCard className="w-5 h-5" />
                        <span className="ml-3">Transactions</span>
                    </li>
                </ul>
            </div>
        </motion.div>
    );
}

export default StudentSideBar