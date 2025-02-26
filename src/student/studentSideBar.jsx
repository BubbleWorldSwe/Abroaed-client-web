import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
    CreditCard,
    File,
    FileText,
    House,
    Users,
} from "lucide-react";
import { motion } from "framer-motion";
import SidebarItem from "./sidebarItem";

const StudentSideBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();

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
    const menuItems = [
        { path: "/student/home", label: "Home", icon: House },
        { path: "/student/profile", label: "Profile", icon: Users },
        { path: "/student/application", label: "Applications", icon: FileText },
        { path: "/student/documents", label: "Documents", icon: File },
        { path: "/student/transactions", label: "Transactions", icon: CreditCard },
    ];
    return (
        <motion.div animate={{ width: isOpen ? 220 : 60 }} >
            <aside className="h-[90vh]  py-5 w-full bg-white flex flex-col p-2">
                <nav className="flex flex-col gap-2">
                    {menuItems.map(({ path, label, icon: Icon }) => (
                        <SidebarItem key={path} path={path} label={label} Icon={Icon} isActive={isActive} />
                    ))}
                </nav>
            </aside>
        </motion.div>
    );
}

export default StudentSideBar