/* eslint-disable react/prop-types */

const ImageComponent = ({ imgFirst, imgUrl }) => (
    <div className={`flex ${imgFirst ? "justify-start" : "justify-end"} h-[90%] `}>
        <img
            src={imgUrl}
            alt="Night Scene"
            className="w-full  rounded-lg"
        />
    </div>
);

export default ImageComponent;