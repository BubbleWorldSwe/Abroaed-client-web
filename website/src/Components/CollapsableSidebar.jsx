import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Sidebar } from 'flowbite-react';
import { HiUser } from 'react-icons/hi';
import {
  AlertCircle,
  AlertTriangle,
  Handshake,
  Receipt,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  BarChart2Icon,
  HouseIcon,
  Users2Icon,
  NotebookPenIcon,
  BookUserIcon
} from 'lucide-react';
import { motion } from 'framer-motion';
import ClipLoader from 'react-spinners/ClipLoader';

function CollapsableSidebar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsOpen(screenWidth > 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = () => setOpenDropdown(!openDropdown);
  const isActive = (path) => location.pathname === path;
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <motion.div animate={{ width: isOpen ? 220 : 60 }} className="h-full">
      <Sidebar aria-label="Sidebar">
        <div className="h-full flex flex-col justify-between">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                onClick={() => navigate('/analytics')}
                className={`transition-colors duration-300 flex items-center ${
                  isOpen ? 'justify-start' : 'justify-center'
                } hover:bg-primary-700 ${isActive('/analytics') ? 'bg-primary-500' : ''} ${
                  isOpen ? 'max-w-[200px] h-12' : 'max-w-[40px] h-12'
                }`}
              >
                {isOpen ? (
                  <span className="flex flex-row items-center justify-start gap-2">
                    <BarChart2Icon className="w-5 h-5" />
                    <span>Analytics</span>
                  </span>
                ) : (
                  <span className="flex justify-center items-center w-full">
                    <BarChart2Icon className="w-5 h-5" />
                  </span>
                )}
              </Sidebar.Item>
            </Sidebar.ItemGroup>

            <Sidebar.ItemGroup>
              <Sidebar.Item
                onClick={() => navigate('/newbooking')}
                className={`transition-colors duration-300 flex items-center ${
                  isOpen ? 'justify-start' : 'justify-center'
                } hover:bg-primary-700 ${isActive('/newbooking') ? 'bg-primary-500' : ''} ${
                  isOpen ? 'max-w-[200px] h-12' : 'max-w-[40px] h-12'
                }`}
              >
                {isOpen ? (
                  <span className="flex flex-row items-center justify-start gap-2">
                    <NotebookPenIcon className="w-5 h-5" />
                    <span>New Booking</span>
                  </span>
                ) : (
                  <span className="flex justify-center items-center w-full">
                    <NotebookPenIcon className="w-5 h-5" />
                  </span>
                )}
              </Sidebar.Item>

              <Sidebar.Item
                onClick={() => navigate('/bookings')}
                className={`transition-colors duration-300 flex items-center ${
                  isOpen ? 'justify-start' : 'justify-center'
                } hover:bg-primary-700 ${
                  isActive('/bookings') ||
                  isActive('/editbooking') ||
                  /^\/editbooking\/[^\/]+/.test(window.location.pathname)
                    ? 'bg-primary-500'
                    : ''
                } ${isOpen ? 'max-w-[200px] h-12' : 'max-w-[40px] h-12'}`}
              >
                {isOpen ? (
                  <span className="flex flex-row items-center justify-start gap-2">
                    <BookUserIcon className="w-5 h-5" />
                    <span>Booking Orders</span>
                  </span>
                ) : (
                  <span className="flex justify-center items-center w-full">
                    <BookUserIcon className="w-5 h-5" />
                  </span>
                )}
              </Sidebar.Item>

              <Sidebar.Item
                onClick={() => navigate('/invoices')}
                className={`transition-colors duration-300 flex items-center ${
                  isOpen ? 'justify-start' : 'justify-center'
                } hover:bg-primary-700 ${isActive('/invoices') ? 'bg-primary-500' : ''} ${
                  isOpen ? 'max-w-[200px] h-12' : 'max-w-[40px] h-12'
                }`}
              >
                {isOpen ? (
                  <span className="flex flex-row items-center justify-start gap-2">
                    <Receipt className="w-5 h-5" />
                    <span>Invoices</span>
                  </span>
                ) : (
                  <span className="flex justify-center items-center w-full">
                    <Receipt className="w-5 h-5" />
                  </span>
                )}
              </Sidebar.Item>

              <Sidebar.Item
                onClick={() => navigate('/customers')}
                className={`transition-colors duration-300 flex items-center ${
                  isOpen ? 'justify-start' : 'justify-center'
                } hover:bg-primary-700 ${isActive('/customers') ? 'bg-primary-500' : ''} ${
                  isOpen ? 'max-w-[200px] h-12' : 'max-w-[40px] h-12'
                }`}
              >
                {isOpen ? (
                  <span className="flex flex-row items-center justify-start gap-2">
                    <HiUser className="w-5 h-5" />
                    <span>Customers</span>
                  </span>
                ) : (
                  <span className="flex justify-center items-center w-full">
                    <HiUser className="w-5 h-5" />
                  </span>
                )}
              </Sidebar.Item>
            </Sidebar.ItemGroup>

            <Sidebar.ItemGroup>
              <Sidebar.Item
                onClick={() => navigate('/upcomingTrials')}
                className={`transition-colors duration-300 flex items-center ${
                  isOpen ? 'justify-start' : 'justify-center'
                } hover:bg-primary-700 ${isActive('/upcomingTrials') ? 'bg-primary-500' : ''} ${
                  isOpen ? 'max-w-[200px] h-12' : 'max-w-[40px] h-12'
                }`}
              >
                {isOpen ? (
                  <span className="flex flex-row items-center justify-start gap-2">
                    <AlertCircle className="w-5 h-5" />
                    <span>Upcoming Trials</span>
                  </span>
                ) : (
                  <span className="flex justify-center items-center w-full">
                    <AlertCircle className="w-5 h-5" />
                  </span>
                )}
              </Sidebar.Item>

              <Sidebar.Item
                onClick={() => navigate('/upcomingDeliveries')}
                className={`transition-colors duration-300 flex items-center ${
                  isOpen ? 'justify-start' : 'justify-center'
                } hover:bg-primary-700 ${isActive('/upcomingDeliveries') ? 'bg-primary-500' : ''} ${
                  isOpen ? 'max-w-[200px] h-12' : 'max-w-[40px] h-12'
                }`}
              >
                {isOpen ? (
                  <span className="flex flex-row items-center justify-start gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span>Upcoming Deliveries</span>
                  </span>
                ) : (
                  <span className="flex justify-center items-center w-full">
                    <AlertTriangle className="w-5 h-5" />
                  </span>
                )}
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                onClick={() => navigate('/stores')}
                className={`transition-colors duration-300 flex items-center ${
                  isOpen ? 'justify-start' : 'justify-center'
                } hover:bg-primary-700 ${isActive('/stores') ? 'bg-primary-500' : ''} ${
                  isOpen ? 'max-w-[200px] h-12' : 'max-w-[40px] h-12'
                }`}
              >
                {isOpen ? (
                  <span className="flex flex-row items-center justify-start gap-2">
                    <HouseIcon className="w-5 h-5" />
                    <span>Stores</span>
                  </span>
                ) : (
                  <span className="flex justify-center items-center w-full">
                    <HouseIcon className="w-5 h-5" />
                  </span>
                )}
              </Sidebar.Item>

              <Sidebar.Item
                onClick={() => navigate('/staff')}
                className={`transition-colors duration-300 flex items-center ${
                  isOpen ? 'justify-start' : 'justify-center'
                } hover:bg-primary-700 ${isActive('/staff') ? 'bg-primary-500' : ''} ${
                  isOpen ? 'max-w-[200px] h-12' : 'max-w-[40px] h-12'
                }`}
              >
                {isOpen ? (
                  <span className="flex flex-row items-center justify-start gap-2">
                    <Users2Icon className="w-5 h-5" />
                    <span>Staff</span>
                  </span>
                ) : (
                  <span className="flex justify-center items-center w-full">
                    <Users2Icon className="w-5 h-5" />
                  </span>
                )}
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>

          <div className="p-2 mt-4 flex items-center">
            <img
              src="https://th.bing.com/th/id/OIP.lkVN1WDlcV2jQCq-9LT7-wHaIJ?rs=1&pid=ImgDetMain"
              className="mr-3 w-8 h-8 rounded-full"
              alt="User avatar"
            />
            {isOpen && (
              <div className="text-left flex flex-col">
                <div className="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">User</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Admin</div>
              </div>
            )}
          </div>
        </div>
      </Sidebar>
    </motion.div>
  );
}

export default CollapsableSidebar;
