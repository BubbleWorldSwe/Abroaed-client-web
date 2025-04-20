/* eslint-disable react/prop-types */

const ImageComponent = ({ imgFirst, imgUrl }) => (
    <div className={`flex ${imgFirst ? "justify-start" : "justify-end"}  w-full h-full`}>
        <img
            src={imgUrl}
            alt="Night Scene"
            className="w-full  object-contain rounded-lg"
        />
    </div>
);

export default ImageComponent;