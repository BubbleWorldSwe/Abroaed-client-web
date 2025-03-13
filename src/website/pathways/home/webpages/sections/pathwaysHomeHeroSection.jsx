
import pathwaysHome from "../../../../../assets/pathwaysHome.png";

function PathwaysHomeHero() {
    return (
        <div className="font-rethink">
            <section
                className="relative h-[75vh] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${pathwaysHome})`,
                }}
            >
                <div
                    className="absolute inset-0 bg-black opacity-10"
                    style={{ mixBlendMode: "multiply" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30 z-0"></div>

                {/* Text Content */}
                <div className="absolute bottom-6  pb-6  flex flex-col  justify-start  mx-auto px-12">
                    <h1 className="text-[57px]  font-extrabold  text-[#F4F4F5] ">
                        Pathways Program
                    </h1>
                    <p className="font-bold text-[#D4D4D8] text-[24px]">
                        Your Pathway to Academic Success and Global Opportunities
                    </p>
                </div>
            </section>
        </div>
    )
}

export default PathwaysHomeHero