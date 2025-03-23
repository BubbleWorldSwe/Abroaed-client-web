import leaguageHero from "../../../../assets/leaguageHero.png"

const LeaguageOfExcellenceHero = () => {
    return (
        <section
            className="relative h-[80vh]  bg-cover flex  bg-center"
            style={{
                backgroundImage: `url(${leaguageHero})`,
                opacity: "1",
            }}
        >
            <div
                className="absolute inset-0 bg-black opacity-5"
                style={{ mixBlendMode: "multiply" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-10 z-0"></div>
            <div className="absolute bottom-2   pb-6  flex flex-col  justify-start  mx-auto px-12">
                <h1 className="mb-2  text-4xl font-extrabold  text-white md:text-5xl xl:text-6xl ">
                    League of Excellence
                </h1>
                <p className="font-light text-white md:text-lg xl:text-xl">
                    Access global elite education at top-tier universities with personalized guidance
                </p>
            </div>
        </section>
    )
}

export default LeaguageOfExcellenceHero