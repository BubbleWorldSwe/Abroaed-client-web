// import { Bell, Bookmark, Settings } from "lucide-react";

import { IMAGES } from "../constants/images";

const AdminNav = () => {
  return (
    <nav className="bg-white w-full border-b border-gray-300 px-10 py-3 flex items-center justify-between drop-shadow-md">
      <img src={IMAGES.logoBlack} alt="Logo" className="h-8 w-10" />
      <div className="flex items-center space-x-5">
        {/* <div className="flex-1 mx-4 max-w-md">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full px-4 border border-gray-300 rounded-lg pl-9 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <svg
                            className="absolute left-3 top-3 h-4 w-4 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0a8.5 8.5 0 1 0-1.5 1.5L21 21z" />
                        </svg>
                    </div>
                </div> */}
        {/* <button className="text-gray-500 hover:text-gray-700">
                    <Bell />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                    <Settings />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                    <Bookmark />
                </button> */}
        <button className="text-gray-500 hover:text-gray-700">
          <img
            className="w-10 object-cover h-10 rounded-full border-2 border-gray-300"
            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
            alt="Rounded avatar"
          />
        </button>
      </div>
    </nav>
  );
};

export default AdminNav;
