/* eslint-disable react/prop-types */
import Slider from "react-slick";
import homeHero1 from "../../../../assets/homeHero1.png";
import homeHero2 from "../../../../assets/homeHero2.png";
import homeHero3 from "../../../../assets/homeHero3.png";
import homeHero4 from "../../../../assets/homeHero4.png";
import homeHero1Mobile from "../../../../assets/homeHero1Mobile.png";
import homeHero2Mobile from "../../../../assets/homeHero2Mobile.png";
import homeHero3Mobile from "../../../../assets/homeHero3Mobile.png";
import homeHero4Mobile from "../../../../assets/homeHero4Mobile.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';

const HomeSlidingImg = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const PrevArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute z-10 left-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
        >
            <FaArrowLeft />
        </button>
    );

    const NextArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute z-10 right-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
        >
            <FaArrowRight />
        </button>
    );
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const homeImagesLarge = [
        { imgUrl: homeHero1 },
        { imgUrl: homeHero2 },
        { imgUrl: homeHero3 },
        { imgUrl: homeHero4 },
    ];

    const homeImagesMobile = [
        { imgUrl: homeHero1Mobile },
        { imgUrl: homeHero2Mobile },
        { imgUrl: homeHero3Mobile },
        { imgUrl: homeHero4Mobile },
    ];


    const homeImages = isMobile ? homeImagesMobile : homeImagesLarge;


    return (
        <section className="dark:bg-gray-900 relative py-4">
            {/* <div className="overflow-x-auto pb-8 max-w-screen-2xl px-10"> */}
            <div className="overflow-x-auto">
                <Slider {...settings}>
                    {homeImages.map((image, index) => (
                        // <div key={index} className="w-full px-5 ">
                        <div key={index} className="w-full px-5 ">
                            <div className="relative w-full h-[92vh]">
                                <img
                                    className="w-full h-full sm:object-cover md:object-cover "
                                    src={image.imgUrl}
                                    alt={`Image ${index + 1}`}
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