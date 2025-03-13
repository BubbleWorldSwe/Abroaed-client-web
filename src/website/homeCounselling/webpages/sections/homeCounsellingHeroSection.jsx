/* eslint-disable react/prop-types */

const HomeCounsellingHeroSection = ({ img, header, text }) => {
    return (
        <div className="font-rethink">
            <section
                className="relative h-[75vh] bg-cover bg-center "
                style={{
                    backgroundImage: `url(${img})`,
                    opacity: '1'
                }}
            >
                <div
                    className="absolute inset-0 bg-black opacity-30"
                    style={{ mixBlendMode: "multiply" }}
                ></div>
                <div className="absolute -bottom-4 left-6  p-6 rounded-lg shadow-lg max-w-2xl">
                    <h1 className="mb-2 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-6xl">
                        {header}
                    </h1>

                    <p className="">
                        {text}
                        <br />
                    </p>
                </div>
            </section>
        </div>)
}

export default HomeCounsellingHeroSection