/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import pencil from '../../../assets/pencil.png'
import UpdateLeadAssignTeamModal from "../modals/updateLeadAssignTeamModal";

const LeadAssignTeam = () => {
    const [selected, setSelected] = useState({
        counsellor: null,
        associate: null,
        manager: null,
    });
    const [openModal, setOpenModal] = useState(false);
    const handleCloseAddModal = () => {
        setOpenModal(false);
    };
    const handleOpenAddModal = () => {
        setOpenModal(true);
    };
    // State for toggling dropdowns
    const [isDropdownOpen, setIsDropdownOpen] = useState({
        counsellor: false,
        associate: false,
        manager: false,
    });

    // Refs for detecting clicks outside the dropdowns
    const refs = {
        counsellor: useRef(null),
        associate: useRef(null),
        manager: useRef(null),
    };

    // Close dropdowns when clicking outside
    const handleClickOutside = (e) => {
        for (const key in refs) {
            if (refs[key] && !refs[key].current.contains(e.target)) {
                setIsDropdownOpen((prev) => ({ ...prev, [key]: false }));
            }
        }
    };

    // Add event listener for clicks outside
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Toggle dropdown visibility and close others
    const toggleDropdown = (dropdown) => {
        setIsDropdownOpen((prev) => ({
            ...prev,
            [dropdown]: !prev[dropdown],
        }));
        for (const key in isDropdownOpen) {
            if (key !== dropdown) {
                setIsDropdownOpen((prev) => ({ ...prev, [key]: false }));
            }
        }
    };
    const handleSelect = (dropdown, item) => {
        setSelected((prev) => ({ ...prev, [dropdown]: item }));
        setIsDropdownOpen((prev) => ({ ...prev, [dropdown]: false }));
    };


    return (
        <>
            <UpdateLeadAssignTeamModal
                isOpen={openModal}
                onClose={handleCloseAddModal}
            />

            <div className="w-full mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
                {/* Header with title and pencil icon button */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Assigned Team</h2>
                    <button
                        onClick={handleOpenAddModal}
                        className="group relative p-3 rounded-full transition-all duration-300 bg-white hover:bg-gray-200"
                    >
                        <img
                            src={pencil}
                            alt="pencil-img"
                            className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
                        />
                    </button>
                </div>
                {/* Grid container for team details */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {['Counsellor', 'Backend Associate', 'Backend Manager'].map((role) => (
                        <div className="flex flex-col" key={role} ref={refs[role]}>
                            <label className="font-semibold capitalize">{role.replace(/^\w/, (c) => c.toUpperCase())}</label>
                            <div className="relative">
                                <button
                                    className="w-full bg-white border-b rounded p-2 text-left flex items-center gap-2"
                                    onClick={() => toggleDropdown(role)}
                                >
                                    <img className="w-8 h-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1560011316-77f3185ec566?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvZmlsZSUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D" alt={selected[role]?.name || role} />
                                    <span>{selected[role] ? selected[role].name : `Select ${role.charAt(0).toUpperCase() + role.slice(1)}`}</span>
                                </button>
                                {/* Dropdown icon at the right of the button */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                                {isDropdownOpen[role] && (
                                    <div className="absolute w-full bg-white border-b  mt-1 rounded-lg shadow-lg">
                                        {['John Doe', 'Jane Smith', 'Alice Williams', 'Mike Brown', 'David Martinez', 'Laura Wilson'].map((name, idx) => (
                                            <button
                                                key={idx}
                                                className="w-full p-2 text-left flex items-center gap-2 hover:bg-gray-100"
                                                onClick={() => handleSelect(role, { name, img: `https://via.placeholder.com/40?text=${name.split(' ')[0]}` })}
                                            >
                                                <img className="w-10 h-10 object-cover rounded-full" src='https://images.unsplash.com/photo-1560011316-77f3185ec566?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvZmlsZSUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D' alt={name} />
                                                <span>{name}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}


export default LeadAssignTeam