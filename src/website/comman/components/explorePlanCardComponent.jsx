/* eslint-disable react/prop-types */

const ExplorePlanCardComponent = ({
    plans,

}) => {
    return (
        <>
            {plans.map((plan, index) => (
                <div
                    key={index}
                    className={`relative px-6  hover:scale-[1.01] transition-all duration-300 ease-in-out py-10 border  bg-[#3a3a3f] text-white  rounded-[12px] shadow-md w-full md:w-1/3 border-[#D4D4D8] "
                                          }`}
                >
                    {plan.recommended && (
                        <div className="absolute  top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-full">
                            RECOMMENDED
                        </div>
                    )}
                    {/* <div className="w-full  px-2 mx-auto bg-yellow-primary"> */}
                    <div className="text-[32px]  bg-[#26262A] bg-opacity-80 mb-2   rounded-xl   md:text-[42px]  font-medium    text-center ">
                        {plan.name}
                    </div>
                    {/* </div> */}
                    <p className="text-[18px]  md:text-[24px] text-center font-normal  " >
                        {plan.price} <spna className="text-[14px]">(Inc. of GST)</spna>
                    </p>
                    <div className="mt-4  bg-[#26262A] bg-opacity-80 rounded-xl p-2">
                        <p className=" text-[14px]  text-center font-normal ">{plan.title}</p>

                        <h4 className="text-[18px]  md:text-[25px] font-medium">
                            Features you’ll love
                        </h4>
                        <ul className="mt-1 space-y-1 list-disc px-5 ">
                            {plan.features?.map((feature, i) => (
                                <li
                                    key={i}
                                    className="text-[12px] md:text-sm list-item items-center font-normal gap-1 text-white"
                                >
                                    {/* <Check size={16} /> */}
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="absolute bottom-2 left-6">
                        <p>* T&C apply </p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ExplorePlanCardComponent