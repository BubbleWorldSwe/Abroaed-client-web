/* eslint-disable react/prop-types */
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react"
import BookCounsellingModal from "../modals/bookCounsellingModal"
import { useNavigate } from "react-router-dom"

const MobileMenuComponent = ({
    setIsOpenHambarger,
    isOpenHambarger,
    mobileMenuItem,
    toggleSubMenu,
    expanded,
    handleMouseEnter,
    handleMouseLeave,
    activeDropdown,

}) => {
    const navigate = useNavigate();

    return (
        <div className="">
            <button
                className="md:hidden p-2 basis-[0%]"
                onClick={() => setIsOpenHambarger(true)}
            >
                <Menu
                    size={24}
                />
            </button>
            {isOpenHambarger && (
                <div className="fixed  inset-0 z-50 bg-gray-primary text-white overflow-y-auto shadow-xl">
                    {/* Header */}
                    <div className="flex justify-between items-center p-4 border-b shadow-lg">
                        <h2 className="text-lg font-semibold">Menu</h2>
                        <button onClick={() => setIsOpenHambarger(false)}>
                            <X size={24} />
                        </button>
                    </div>

                    {/*mobile Menu Items */}
                    <ul className="space-y-1 px-4 py-2">
                        {mobileMenuItem.map(({ label, link, subItems, component: Component, data }, index) => (
                            <li key={index}>
                                <a href={link}>
                                    <button
                                        className="w-full  flex justify-between  py-2 text-[18px] font-normal  transition-all ease-in-out delay-150 "
                                        onClick={() => toggleSubMenu(label)}
                                    >
                                        {label}
                                        {subItems || Component ? (expanded === label ? <ChevronUp size={18} /> : <ChevronDown size={18} />) : ''}
                                    </button>
                                </a>
                                {expanded === label && subItems?.length > 0 && (
                                    <div className="">
                                        {subItems?.map(({ title, link }, index) => (
                                            <>
                                                <a key={index} href={link} >
                                                    <div className="hover:bg-blue-50 py-1 ">
                                                        {title}
                                                    </div>
                                                </a>
                                                {/* <hr className="bg-white " /> */}
                                            </>
                                        ))}
                                    </div>
                                )}
                                {expanded === label && Component && (
                                    < Component
                                        handleMouseEnter={handleMouseEnter}
                                        {...(data && Array.isArray(data)
                                            ? { menuItems: data.map(({ productName, _id }) => ({ title: productName, _id })) }
                                            : { ...data })}
                                        onClose={handleMouseLeave}
                                    />
                                )}
                            </li>
                        ))}

                    </ul>

                    <div className="relative flex flex-col  gap-4 py-4 justify-end  h-[35%] ">
                        <hr className="w-full  mb-4 bg-white " />
                        <div className="px-2 w-full mx-auto">
                            <button
                                onClick={() => navigate('/signIn')}
                                className={`px-4 py-3 border-2  whitespace-nowrap w-full bg-gray-primary  hover:bg-white font-semibold text-white hover:border-none text-lg rounded-full`}
                            >
                                Sign In
                            </button>
                        </div>
                        <div
                            className="w-full px-2 mx-auto"
                        >
                            <button
                                onClick={() => handleMouseEnter("bookMenu")}
                                className={`px-4 py-4   whitespace-nowrap w-full bg-yellow-primary text-gray-primary  hover:bg-white font-semibold  hover:border-none text-lg rounded-full`}
                            >
                                Book Now
                            </button>
                            {activeDropdown === "bookMenu" && (
                                <div className="relative">
                                    <BookCounsellingModal
                                        isOpen={activeDropdown === "bookMenu"}
                                        onClose={handleMouseLeave}

                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MobileMenuComponent