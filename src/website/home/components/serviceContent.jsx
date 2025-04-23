/* eslint-disable react/prop-types */

const ServiceContent = ({ data }) => (
    <div className="absolute  md:top-[10%] inset-0 flex flex-col justify-end px-2 py-4 p md:p-6 z-10">
        <div className="overflow-y-auto flex flex-col gap-4  px-2 md:px-5">
            <h1 className="text-[28px] leading-tight md:text-[42px] text-white font-medium">
                {data?.text1}
            </h1>
            <p className="text-gray-200 leading-6 md:leading-8 text-justify font-normal lg:mb-2 text-base md:text-[20px]">
                {data?.text2}
            </p>
        </div>
    </div>
);

export default ServiceContent