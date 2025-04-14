/* eslint-disable react/prop-types */

const FaqsAnswerText = ({ children, text = "", className = "", style = {} }) => {
    return (
        <p className={`mb-2 text-gray-primary font-normal text-base whitespace-pre-wrap ${className}`} style={style}>
            {children || text}
        </p>
    );
};

export default FaqsAnswerText;
