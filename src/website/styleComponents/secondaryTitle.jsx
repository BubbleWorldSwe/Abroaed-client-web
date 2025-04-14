/* eslint-disable react/prop-types */

const SecondaryTitle = ({ children, text, className = "", style = {} }) => {
    return (
        <h3 className={`text-[20px] md:text-[32px] font-bold text-gray-primary dark:text-white ${className}`} style={style}>
            {text || children}
        </h3>
    );
};

export default SecondaryTitle;


