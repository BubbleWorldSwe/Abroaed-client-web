/* eslint-disable react/prop-types */

const HeroTextComponent = ({ children, img }) => {
    return (
        <section
            className="relative h-[100vh] bg-cover bg-center "
            style={{
                backgroundImage: `url(${img})`,
                opacity: '1'
            }}
        >
            {/* Text Content */}
            <div
                className="absolute inset-0 bg-black opacity-30"
                style={{ mixBlendMode: "multiply" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30 z-0"></div>
            <div className="absolute top-1/2 md:top-1/3 flex flex-col items-end justify-start  mx-auto px-4 lg:flex-row ">
                <div className="text-start   text-white lg:w-2/3 px-1 lg:px-8">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default HeroTextComponent