import Slider from "react-slick";
import homeHero1 from "../../../../assets/homeHero1.png"
import homeHero2 from "../../../../assets/homeHero2.png"
import homeHero3 from "../../../../assets/homeHero3.png"
import homeHero4 from "../../../../assets/homeHero4.png"
const HomeSlidingImg = () => {
    let settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,

        centerMode: true,
    };

    const homeImges = [
        {
            imgUrl: homeHero1,
        },
        {
            imgUrl: homeHero2,
        },
        {
            imgUrl: homeHero3,
        },
        {
            imgUrl: homeHero4,
        },
    ]

    return (
        <section className="dark:bg-gray-900 relative  py-1  ">
            <div className="overflow-x-auto pb-7">
                <Slider {...settings}  >
                    {homeImges?.map((service, index) => (
                        <div
                            key={index}
                            className="w-full  "

                        >
                            <div className="relative w-full h-full rounded-lg">
                                <img
                                    className="w-full h-full object-cover rounded-lg"
                                    src={service.imgUrl}
                                    alt={`Service ${index + 1}`}
                                />
                                {/* <div className="absolute inset-0 bg-black rounded-lg opacity-65"></div>{" "} */}

                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </section >
    )
}

export default HomeSlidingImg