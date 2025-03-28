/* eslint-disable react/prop-types */
const PrimaryBodyText = ({ children, text, className = "", style = {} }) => {
    return (
        <p className={`text-[#52525B] text-[18px] font-medium ${className}`} style={style}>
            {text || children}
        </p>
    );
};

export default PrimaryBodyText;
