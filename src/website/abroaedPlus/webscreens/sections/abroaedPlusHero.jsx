import leaguageHero from "../../../../assets/leaguageHero.png"


const AbroaedPlusHero = () => {
    return (
        <section
            className="relative h-[100vh]  bg-cover flex  bg-center"
            style={{
                backgroundImage: `url(${leaguageHero})`,
                opacity: "1",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30 z-0"></div>
            <div className="absolute  top-1/3 flex flex-col items-end justify-start  mx-auto px-4 lg:flex-row ">
                <div className="text-start   text-white lg:w-2/3 px-1 lg:px-8">
                    <h1 className="mb-3 text-[57px]  font-extrabold  leading-none text-white md:text-[75px]">
                        ABROAED <sup>+</sup>
                    </h1>
                    <p className="text-[32px] font-semibold opacity-90    text-white">
                        From home counselling to post-arrival support – We’re with you, even on the other side!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AbroaedPlusHero