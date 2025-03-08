import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart2,
  BookUser,
  Home,
  User,
  Users,
  Landmark,
  School,
  MapPinned,
  Compass,
} from "lucide-react";
import { motion } from "framer-motion";

function CollapsableSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const isActive = (path) => window.location.pathname.startsWith(path);

  const menuItems = [
    { path: "/admin/dashboard", label: "Home", icon: Home },
    { path: "/admin/teams", label: "Teams", icon: Users },
    { path: "/admin/leads", label: "Leads", icon: BarChart2 },
    { path: "/admin/students", label: "Enrolled Students", icon: User },
    { path: "/admin/transaction", label: "Transactions", icon: Landmark },
    { path: "/admin/testPrep", label: "Test Prep", icon: BookUser },
    { path: "/admin/langPrep", label: "Language Prep", icon: BookUser },
    { path: "/admin/colleges", label: "Colleges", icon: School },
    { path: "/admin/destinations", label: "Destinations", icon: MapPinned },
    { path: "/admin/accommodation", label: "Accommodation", icon: Compass },
  ];

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsOpen(screenWidth > 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div animate={{ width: isOpen ? 220 : 60 }} className="h-full">
      <aside className="h-[90vh] py-5 w-fit bg-white flex flex-col p-2">
        <nav className="flex flex-col gap-2">
          {menuItems.map(({ path, label, icon: Icon }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex items-center px-4 py-3 rounded-md cursor-pointer font-semibold transition ${
                isActive(path) ? "text-black" : "text-[#A1A1AA]"
              } hover:text-black`}
            >
              <Icon className="w-5 h-5" />
              {isOpen && (
                <span className="ml-3 whitespace-nowrap">{label}</span>
              )}
            </button>
          ))}
        </nav>
      </aside>
    </motion.div>
  );
}

export default CollapsableSidebar;
