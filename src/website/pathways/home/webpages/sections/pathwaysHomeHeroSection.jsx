
import image from "../../../../../assets/dark.png";

function PathwaysHomeHero() {
    return (
        <div className="font-rethink">
            <section
                className="relative h-[75vh] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                {/* Text Content */}
                <div className="absolute bottom-8 left-8 p-6 rounded-lg shadow-lg max-w-2xl">
                    <h1 className="mb-4 text-4xl text-white font-extrabold tracking-tight leading-none  md:text-5xl xl:text-6xl">
                        Pathways Program
                    </h1>
                    <p className="font-light text-white md:text-lg xl:text-xl">
                        Your Pathway to Academic Success and Global Opportunities

                        <br />
                        <a
                            className="font-medium text-primary-600 hover:underline"
                            href="#"
                        >
                            Twitter
                        </a>{" "}
                        or our{" "}
                        <a
                            className="font-medium text-primary-600 hover:underline"
                            href=""
                        >
                            blog
                        </a>{" "}
                        for the latest updates.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default PathwaysHomeHero