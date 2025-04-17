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
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from "react";

const HomeSlidingImg = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [countImg, setCountImg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextImage();
        }, 2000);

        return () => clearInterval(interval);
    }, [countImg]);

    const handleNextImage = () => {
        setTimeout(() => {
            setCountImg((prev) => (prev + 1) % homeImages.length);

        }, 2000);
    };

    const handleDotClick = (index) => {
        if (index !== countImg) {
            setTimeout(() => {
                setCountImg(index);
            }, 2000);
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


    const homeImages = isMobile ? homeImagesMobile : homeImagesLarge;

    return (
        <section className="dark:bg-gray-900 relative py-4">
            <div className="overflow-x-auto">
                <div className="relative w-full h-[92vh] overflow-hidden">
                    <img
                        key={countImg} // helps trigger fade animation
                        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out`}
                        src={homeImages[countImg].imgUrl}
                        alt={`Image ${countImg + 1}`}
                    />

                    {/* Dots */}
                    <div className="absolute right-5 bottom-5 flex  gap-2">
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
        </section>
    )
}

export default HomeSlidingImg