/* eslint-disable react/prop-types */

import dark from '../../../../../assets/dark.png'
import vectorOutlinedRightFlat from "../../../../../assets/vectorOutlinedRightFlat.png"
import { cardDetails } from '../../data';

const Cards = ({ header = "", text = "" }) => {
    return (
        <div className="relative">
            <div className="w-full relative bg-white flex-shrink-0 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                    <div className="flex justify-between">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight leading-tight  text-[#27272A] dark:text-white">
                            {header}
                        </h5>
                    </div>
                    <p className="mb-3 font-semibold text-[#27272A] text-[18px] dark:text-gray-400">
                        {text}
                    </p>
                </div>

                <div className="absolute right-0 top-0 bottom-0 overflow-hidden z-0">
                    <img
                        className="rounded-lg w-full h-full object-contain"
                        src={vectorOutlinedRightFlat}
                        alt="Counselling session"
                    />
                </div>
            </div>
        </div>
    );

}

const PathwaysProgramOverview = () => {
    return (
        <div className="relative px-10 mx-auto">
            <div className=" px-4  flex flex-col gap-6 mx-auto max-w-screen-2xl  mt-5">
                {/* Content */}
                <div className="relative z-10">
                    <div className=''>
                        <h2 className="mb-2 text-[45px]  font-extrabold text-[#27272A] dark:text-white">
                            Program Overview
                        </h2>
                        <p className='mb-10 text-[#27272A] font-normal text-sm'>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui. Nam arcu libero, blandit vel ipsum sagittis, lacinia tincidunt quam. Donec volutpat sodales tincidunt. Praesent pharetra nisi placerat diam fringilla, ac fermentum erat commodo. Quisque semper arcu sit amet auctor consequat. Mauris diam urna, dignissim sed metus eu, congue porttitor nisi. Nulla facilisi.                           </p>
                    </div>
                    <section className='py-5'>
                        <div className="flex mb-5 flex-col md:flex-row items-start justify-between space-y-5 md:space-y-0 md:space-x-10">
                            <div className="w-full md:w-2/3">
                                <h3 className="mb-4 text-[32px]  font-bold text-[#27272A] dark:text-white">
                                    University Name
                                </h3>
                                <p className="text-[#27272A] font-normal text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui.
                                </p>
                            </div>
                            {/* Image Section */}
                            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                                <img src={dark} alt="University" className="w-full max-w-xs md:max-w-full object-contain" />
                            </div>
                        </div>
                        <div className="grid  grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
                            {cardDetails.map((item, index) => (
                                <Cards header={item.key} text={item.value} key={index} />
                            ))}
                        </div>
                    </section>
                    <section className='py-10'>
                        <div className="flex mb-5 flex-col md:flex-row items-start justify-between space-y-5 md:space-y-0 md:space-x-10">
                            <div className="w-full md:w-2/3">
                                <h3 className="mb-4 text-[32px]  font-bold text-[#27272A] dark:text-white">
                                    University Name
                                </h3>
                                <p className="text-[#27272A] font-normal text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui.
                                </p>
                            </div>

                            {/* Image Section */}
                            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                                <img src={dark} alt="University" className="w-full max-w-xs md:max-w-full object-contain" />
                            </div>
                        </div>
                        <div className="grid  grid-cols-1 lg:grid-cols-3 gap-5 ">
                            {cardDetails.map((item, index) => (
                                <Cards header={item.key} text={item.value} key={index} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default PathwaysProgramOverview;