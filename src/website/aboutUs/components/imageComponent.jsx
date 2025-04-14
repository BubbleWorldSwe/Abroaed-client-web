/* eslint-disable react/prop-types */

const ImageComponent = ({ imgFirst, imgUrl }) => (
    <div className={`flex ${imgFirst ? "justify-start" : "justify-end"}  w-[22rem] md:w-full h-[90%] `}>
        <img
            src={imgUrl}
            alt="Night Scene"
            className="w-full  object-cover rounded-lg"
        />
    </div>
);

export default ImageComponent;