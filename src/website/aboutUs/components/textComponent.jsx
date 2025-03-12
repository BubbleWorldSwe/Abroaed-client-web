/* eslint-disable react/prop-types */

const TextComponent = ({ text, heading }) => (
  <div>
    <h2 className="text-[32px]  font-bold mb-4">{heading}</h2>
    <p className="text-[#52525B] text-[18px]  font-normal">{text}</p>
  </div>
);

export default TextComponent;
