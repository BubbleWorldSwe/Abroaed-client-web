import Slider from "react-slick";
import homeHero1 from "../../../../assets/homeHero1.png"
import homeHero2 from "../../../../assets/homeHero2.png"
import homeHero3 from "../../../../assets/homeHero3.png"
import homeHero4 from "../../../../assets/homeHero4.png"
const HomeSlidingImg = () => {
    let settings = {
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        pauseOnHover: true,

        centerMode: false,
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
        <section className="dark:bg-gray-900 relative py-4">
            <div className="overflow-x-auto">
                <Slider {...settings}>
                    {homeImges.map((image, index) => (
                        <div key={index} className="w-full ">
                            <div className="relative w-full h-[92vh]">
                                <img
                                    className="w-full h-full object-cover "
                                    src={image.imgUrl}
                                    alt={`Image ${index + 1}`}
                                // style={{ width: "100vw" }}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default HomeSlidingImg