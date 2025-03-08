import { Check } from "lucide-react";
import { plans } from "../../data";

const LeaguageOfExcellenceExplorePlan = () => {
    return (
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
                            className={`relative p-6 border bg-white rounded-lg shadow-md w-full md:w-1/3 border-[#D4D4D8] "
                                }`}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-full">
                                    RECOMMENDED
                                </div>
                            )}

                            <h3 className="text-4xl font-extrabold mb-2 text-[#71717A] text-center " >{plan.name}</h3>
                            <p className="text-gray-500 text-sm mb-3 text-center ">lorem ipsum dolor sit amet</p>
                            <p className="text-2xl text-center font-bold ">{plan.price}</p>

                            <button
                                className={`w-full mt-4 py-2 rounded-full font-semibold 
                                     hover:text-white border border-gray-500
                                    hover:bg-black  
                                    `}
                            >
                                {plan.buttonText}
                            </button>

                            <div className="mt-6">
                                <h4 className="text-md font-semibold text-gray-700">
                                    Features you’ll love
                                </h4>
                                <ul className="mt-2 space-y-2">
                                    {Array(5)
                                        .fill("lorem ipsum dolor sit amet")
                                        .map((feature, i) => (
                                            <li key={i} className="flex text-sm items-center gap-2 text-gray-600">
                                                <Check size={16} className="text-green-500" />
                                                {feature}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <button className="bg-[#FDDA24] text-xl text-[#432205] px-6 py-2 rounded-sm font-semibold">
                        See full feature comparison
                    </button>
                </div>
            </section>
        </div>)
}

export default LeaguageOfExcellenceExplorePlan