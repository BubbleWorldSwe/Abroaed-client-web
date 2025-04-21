/* eslint-disable react/prop-types */

const FaqsQuestionText = ({ children, text = "", className = "", style = {} }) => {
    return (
        <span className={`whitespace-normal text-[18px] md:text-[20px] font-medium text-gray-primary ${className}`} style={style}>
            {text || children}
        </span>
    );
};

export default FaqsQuestionText;
