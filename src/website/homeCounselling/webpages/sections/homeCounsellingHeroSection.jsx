/* eslint-disable react/prop-types */

const HomeCounsellingHeroSection = ({ img, header, text }) => {
    return (
        <div className="font-rethink">
            <section
                className="relative h-[100vh] bg-cover bg-center "
                style={{
                    backgroundImage: `url(${img})`,
                    opacity: '1'
                }}
            >
                <div
                    className="absolute inset-0 bg-black opacity-30"
                    style={{ mixBlendMode: "multiply" }}
                ></div>
                <div className="absolute bottom-3 left-1 md:left-6   p-6 rounded-lg shadow-lg max-w-[43rem] ">
                    <h1 className="mb-2 text-3xl font-extrabold tracking-tight leading-none max-w-2xl text-white md:text-5xl xl:text-6xl">
                        {header}
                    </h1>

                    <div className="">
                        {text}
                    </div>
                </div>
            </section>
        </div>)
}

export default HomeCounsellingHeroSection