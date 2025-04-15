/* eslint-disable react/prop-types */

const SectionComponent = ({ children }) => {
    return (
        // <div className="md:max-w-screen-2xl px-8 mx-auto w-full lg:px-12">
        <div className="md:max-w-screen-2xl px-2 md:px-6 mx-auto w-full ">
            {children}
        </div>
    )
}

export default SectionComponent