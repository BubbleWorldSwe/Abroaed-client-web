/* eslint-disable react/prop-types */
const SectionMainHeader = ({ children, text, className = "", style = {} }) => {
    return (
        <h2 className={`text-[28px] md:text-[42px] font-extrabold text-gray-primary  ${className}`} style={style}>
            {children || text}
        </h2>
    );
};

export default SectionMainHeader;

