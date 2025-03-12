import dark from "../../../../assets/dark.png"


const AbroaedPlusHero = () => {
    return (
        <section
            className="relative h-[80vh]  bg-cover flex  bg-center"
            style={{
                backgroundImage: `url(${dark})`,
                opacity: "1",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30 z-0"></div>
            <div className="absolute bottom-2  py-10  flex flex-col  justify-start  mx-auto px-12">
                <h1 className="mb-2  text-[57px] font-extrabold  text-[#F4F4F5] md:text-5xl xl:text-6xl ">
                    ABROAED <sup>+</sup>
                </h1>
                <p className="font-light mb-3 text-white md:text-lg opacity-90 xl:text-xl">
                    Your complete study abroad companion.
                </p>
                <button className="bg-[#FDDA24] mt-7 text-lg text-[#432205] hover:bg-yellow-300  py-2 rounded-lg font-semibold">
                    Start Your Journey Today
                </button>
            </div>
        </section>
    )
}

export default AbroaedPlusHero