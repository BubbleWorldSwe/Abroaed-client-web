/* eslint-disable react/prop-types */

const FaqsQuestionText = ({ children, text = "", className = "", style = {} }) => {
    return (
        <span className={`whitespace-normal text-[20px] md:text-[24px] font-medium text-gray-primary ${className}`} style={style}>
            {text || children}
        </span>
    );
};

export default FaqsQuestionText;
