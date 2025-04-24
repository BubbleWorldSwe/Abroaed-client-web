/* eslint-disable react/prop-types */
import BackgroundLayer from "../../home/components/backgroundLayer"
import ServiceContent from "../../home/components/serviceContent"
import NextArrow from "./nextArrow"
import PrevArrow from "./prevArrow"

const ServiceCardComponents = ({
    serviceData,
    countImg,
    handleNextImage,
    handlePrevImage,
    right,
    left
}) => {
    return (
        <div className="overflow-x-auto ">
            <div className="w-full px-4  h-[32rem] relative rounded-lg">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <BackgroundLayer />
                    <img
                        className="w-full h-full object-cover rounded-lg"
                        src={serviceData[countImg]?.imgUrl}
                        alt={`Service ${countImg + 1}`}
                    />
                    <ServiceContent data={serviceData[countImg]} />
                </div>
                <NextArrow right={right} onClick={handleNextImage} />
                <PrevArrow left={left} onClick={handlePrevImage} />
            </div>
        </div>
    )
}

export default ServiceCardComponents