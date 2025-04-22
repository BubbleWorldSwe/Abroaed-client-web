/* eslint-disable react/prop-types */
import { useRef } from "react";
import PrimaryBodyText from "../../styleComponents/primaryBodyText";
import SecondaryTitle from "../../styleComponents/secondaryTitle";
import { useClickOutside } from "../customHooks/useOutSideModalClose";
const TestimonialModal = ({ isOpen, item, onClose }) => {
    const modalRef = useRef();

    useClickOutside(modalRef, onClose, isOpen)

    return (
        <>
            {isOpen && (
                <div className="fixed px-6 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div ref={modalRef} className="bg-white max-h-[80vh] overflow-y-auto font-rethink dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-3xl z-50 relative">
                        <button
                            className="absolute  w-12 h-12 top-2 right-2 text-gray-600  text-3xl"
                            onClick={onClose}
                        >
                            &times;
                        </button>

                        <div className="grid grid-cols-1  md:grid-cols-2 pt-8 pb-2 gap-8">

                            <div className="">
                                <img
                                    src={item.img}
                                    alt="Accommodation"
                                    className="h-52 bg-purple-800 w-full bg object-cover rounded-lg"
                                />
                                <h3 className="text-lg mt-2 font-semibold mb-1">{item?.name}</h3>
                                <p>{item.university}</p>
                                <p  >
                                    {item?.country}
                                </p>
                            </div>
                            {/* Testimonial */}
                            <div>
                                <SecondaryTitle style={{ fontSize: '22px' }}>
                                    {item.course}
                                </SecondaryTitle>
                                <PrimaryBodyText className="italic mt-2">{item?.testimonial}</PrimaryBodyText>

                            </div>
                        </div>
                    </div>


                </div>
            )}
        </>

    )
}

export default TestimonialModal