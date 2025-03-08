/* eslint-disable react/prop-types */
import { cardDetails } from "../../../pathways/program/data"
import vectorOutlinedRightFlat from "../../../../assets/vectorOutlinedRightFlat.png"

const Cards = ({ header = "" }) => {
    return (
        <div className="w-full relative bg-white flex-shrink-0 h-28 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
                <div className="flex justify-between">
                    <h5 className="mb-2 text-[22px] font-semibold  text-[#27272A] dark:text-white">
                        {header}
                    </h5>
                </div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 overflow-hidden z-0">
                <img
                    className="rounded-lg w-full h-full object-contain"
                    src={vectorOutlinedRightFlat}
                    alt="Counselling session"
                />
            </div>
        </div>

    );

}



const AbroaedPlusWhyChoose = () => {


    return (
        <div >
            <section className="dark:bg-gray-900 relative px-12 mx-auto">
                <div className=" mx-auto max-w-screen-2xl py-8">
                    <h2 className="text-3xl font-bold mb-4">Why Choose ABROAED<sup>+</sup>?</h2>
                    <p className="font-normal mb-4 text-[#27272A] text-sm  dark:text-gray-400">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui. Nam arcu libero, blandit vel ipsum sagittis, lacinia tincidunt quam. Donec volutpat sodales tincidunt. Praesent pharetra nisi placerat diam fringilla, ac fermentum erat commodo. Quisque semper arcu sit amet auctor consequat. Mauris diam urna, dignissim sed metus eu, congue porttitor nisi. Nulla facilisi.
                    </p>
                    <div className="grid  grid-cols-1 lg:grid-cols-3 gap-5 mb-5 mt-10">
                        {cardDetails.map((item, index) => (
                            <Cards header={item.key} text={item.value} key={index} />
                        ))}
                    </div>

                </div>
            </section>
        </div>
    )
}

export default AbroaedPlusWhyChoose