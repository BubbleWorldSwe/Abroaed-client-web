import dark from "../../../../assets/dark.png"

const LeaguageOfExcellenceHero = () => {
    return (
        <section
            className="relative h-[80vh]  bg-cover flex  bg-center"
            style={{
                backgroundImage: `url(${dark})`,
                opacity: "1",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30 z-0"></div>
            <div className="absolute bottom-2    flex flex-col  justify-start  mx-auto px-12">
                <h1 className="mb-2  text-4xl font-extrabold  text-white md:text-5xl xl:text-6xl ">
                    League of Excellence
                </h1>
                <p className="font-light text-white md:text-lg xl:text-xl">
                    One Liner
                </p>
            </div>
        </section>
    )
}

export default LeaguageOfExcellenceHero