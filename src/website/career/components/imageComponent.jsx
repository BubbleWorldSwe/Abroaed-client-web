/* eslint-disable react/prop-types */

const ImageComponent = ({ imgFirst, imgUrl }) => (
    <div className={`flex ${imgFirst ? "justify-start" : "justify-end"} `}>
        <img
            src={imgUrl}
            alt="Night Scene"
            className="w-4/5 rounded-lg shadow-lg"
        />
    </div>
);

export default ImageComponent;