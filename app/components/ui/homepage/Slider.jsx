'use client'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
    return (
        <div className="w-full pt-60">
            <Carousel autoPlay infiniteLoop showStatus={false}>
                <div style={{ backgroundImage: `url(/divorce_appPhotos/slideImage111.jpg)` }} className=" bg-center bg-cover bg-no-repeat  h-[480px] ">
                    <div className="mb-20">
                        <h1 className="text-2xl pt-40">Convenient and affordable therapy with BetterHelp.</h1>
                        <div className="w-20">
                        </div>
                        <p>
                           
                        </p>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(/divorce_appPhotos/slideImage2.jpg)` }} className=" bg-center bg-cover bg-no-repeat  h-[480px]">
                </div>
                <div style={{ backgroundImage: `url(/divorce_appPhotos/slideImage3.jpg)` }} className=" bg-center bg-cover bg-no-repeat  h-[480px]">
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;