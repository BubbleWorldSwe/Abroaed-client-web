/* eslint-disable react/prop-types */

const TextComponent = ({ text, heading }) => (
    <div>
        <h2 className="text-3xl font-bold mb-4">{heading}</h2>
        <p className="text-gray-700">{text}</p>
    </div>
);

export default TextComponent