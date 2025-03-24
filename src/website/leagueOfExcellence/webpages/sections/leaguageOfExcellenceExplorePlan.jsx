import { Check } from "lucide-react";
import { plans } from "../../data";
import { useState } from "react";
import FeatureLOEModal from "../../modals/featureLOEModal";

const LeaguageOfExcellenceExplorePlan = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleCloseAddModal = () => {
        setOpenModal(false);
    };

    const handleOpenAddModal = () => {
        setOpenModal(true);
    };
    return (
        <>
            <FeatureLOEModal
                isOpen={openModal}
                onClose={handleCloseAddModal}
            />
            <div className="relative z-10 py-5">
                <section className="dark:bg-gray-900 relative px-12 mx-auto">
                    <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 py-14">
                        <h2 className="text-3xl font-bold mb-4">Explore Plans</h2>
                        <hr className="" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative p-6 py-10 border bg-white rounded-[12px] shadow-md w-full md:w-1/3 border-[#D4D4D8] "
                                }`}
                            >
                                {plan.recommended && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-full">
                                        RECOMMENDED
                                    </div>
                                )}

                                <h3 className="text-4xl font-extrabold mb-2 text-[#71717A] text-center " >{plan.name}</h3>
                                <p className="text-gray-500 text-base mb-3 text-center ">lorem ipsum dolor sit amet</p>
                                <p className="text-2xl text-center font-bold ">{plan.price}</p>

                                <button
                                    className={`w-full mt-4 py-4 rounded-full text-[18px] font-semibold 
                                     hover:text-white border border-gray-500
                                    hover:bg-black  
                                    `}
                                >
                                    {plan.buttonText}
                                </button>

                                <div className="mt-6">
                                    <h4 className="text-[18px] font-semibold text-gray-700">
                                        Features you’ll love
                                    </h4>
                                    <ul className="mt-2 space-y-2">
                                        {Array(5)
                                            .fill("lorem ipsum dolor sit amet")
                                            .map((feature, i) => (
                                                <li key={i} className="flex text-base items-center gap-2 text-gray-600">
                                                    <Check size={16} className="text-green-500" />
                                                    {feature}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-10">
                        <button
                            className={`bg-yellow-primary hover:bg-yellow-300 text-xl text-[#432205] px-6 py-3  font-semibold rounded-lg`}
                            onClick={handleOpenAddModal}
                        >
                            See full feature comparison
                        </button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default LeaguageOfExcellenceExplorePlan