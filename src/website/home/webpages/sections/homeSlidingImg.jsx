/* eslint-disable react-hooks/exhaustive-deps */
import homeHero1 from "../../../../assets/homeHero1.png";
import homeHero2 from "../../../../assets/homeHero2.png";
import homeHero3 from "../../../../assets/homeHero3.png";
import homeHero4 from "../../../../assets/homeHero4.png";
import homeHero1Mobile from "../../../../assets/homeHero1Mobile.png";
import homeHero2Mobile from "../../../../assets/homeHero2Mobile.png";
import homeHero3Mobile from "../../../../assets/homeHero3Mobile.png";
import homeHero4Mobile from "../../../../assets/homeHero4Mobile.png";
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from "react";
import PrevArrow from "../../../comman/components/prevArrow";
import NextArrow from "../../../comman/components/nextArrow";
import Slider from "react-slick";

const HomeSlidingImg = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [countImg, setCountImg] = useState(0);
    const [isHover, setIsHover] = useState(false);
    useEffect(() => {
        if (!isHover) {
            const interval = setInterval(() => {
                handleNextImage();
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [countImg, isHover]);

    const handleNextImage = () => {
        setCountImg((prev) => (prev + 1) % homeImages.length);
    };

    const handlePrevImage = () => {
        setCountImg((prev) => (prev - 1 + homeImages.length) % homeImages.length);
    };

    const handleDotClick = (index) => {
        if (index !== countImg) {
            setCountImg(index);
        }
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
    const settings = {
        dots: true,
        infinite: true,
        pauseOnHover: true,
        nextArrow: <NextArrow right="right-0" />,
        prevArrow: <PrevArrow left="left-0" />,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        customPaging: i => (
            <div className={`rounded-full w-3 h-3 transition-all duration-300 
        ${i === currentSlide ? 'bg-yellow-primary w-4' : 'bg-gray-500 '}`}
            />
        ),
        appendDots: dots => (
            <div>
                <ul className="flex justify-center mt-4">{dots}</ul>
            </div>
        ),
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const homeImages = isMobile ? homeImagesMobile : homeImagesLarge;

    return (
        <section className="dark:bg-gray-900 relative py-4">
            <div className=" md:block hidden overflow-x-auto">
                <div className="relative w-full h-[92vh] "
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <img
                        key={countImg}
                        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out`}
                        src={homeImages[countImg].imgUrl}
                        alt={`Image ${countImg + 1}`}
                    />

                    <NextArrow right="right-0" onClick={handleNextImage} />
                    <PrevArrow left="left-0" onClick={handlePrevImage} />
                    {/* Dots */}
                    <div className="absolute right-5 bottom-5 flex   gap-2">
                        {homeImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-3 w-3 rounded-full ${index === countImg ? 'bg-yellow-primary w-4 ' : 'bg-gray-500'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="md:hidden block overflow-visible">
                <Slider {...settings}>
                    {homeImages.map((data, i) => (
                        <div key={i} className="relative w-full h-[92vh] "
                        >
                            <img
                                className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out`}
                                src={data.imgUrl}
                                alt={`Image ${data.imgUrl + 1}`}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default HomeSlidingImg