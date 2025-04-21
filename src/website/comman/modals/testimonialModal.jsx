/* eslint-disable react/prop-types */
import PrimaryBodyText from "../../styleComponents/primaryBodyText";
import SecondaryTitle from "../../styleComponents/secondaryTitle";
const TestimonialModal = ({ isOpen, item, onClose }) => {


    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center  justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white max-h-[70vh]  overflow-y-auto  rounded-lg shadow-lg p-4 px-6 w-72 md:w-full max-w-3xl z-50 relative">
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