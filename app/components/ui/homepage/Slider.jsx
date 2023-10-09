'use client'
import Logo from "../../Logo";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideImage1 from '../../../../public/divorce_appPhotos/slideImage1.jpg';
import slideImage2 from '../../../../public/divorce_appPhotos/slideImage2.jpg';
import slideImage3 from '../../../../public/divorce_appPhotos/slideImage3.jpg';

const Slider = () => {
    return (
        <div className="w-full  ">
            <Carousel autoPlay infiniteLoop showStatus={false}>
                <div style={{ backgroundImage: `url(/divorce_appPhotos/slideImage1.jpg)` }} className=" bg-center bg-cover bg-no-repeat  h-[1080px] ">
                    <div className="mb-20">
                        <h1>Convenient and affordable therapy with BetterHelp.</h1>
                        <div className="w-20">
                            <Logo width={1000} height={1000} />
                        </div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                            quasi esse eos voluptatum quo. Vel architecto veritatis,
                            voluptatum quasi dolorem odit rerum assumenda error, iste
                            quisquam tempore nobis voluptas in!
                        </p>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(/divorce_appPhotos/slideImage2.jpg)` }} className=" bg-center bg-cover bg-no-repeat  h-[1080px]">
                    <h1>Slide 2</h1>
                    <p>Content for slide 2.</p>
                </div>
                <div style={{ backgroundImage: `url(/divorce_appPhotos/slideImage3.jpg)` }} className=" bg-center bg-cover bg-no-repeat  h-[1080px]">
                    <h1>Slide 3</h1>
                    <p>Content for slide 3.</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;