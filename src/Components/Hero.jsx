import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const MotionDiv = motion.div;

function Image() {
    const images = ["/bg_image1.jpg", "/bg_image2.jpg", "/bg_image3.jpg", "/bg_image4.jpg", "/bg_image5.jpg"];
    const [imageIndex, setImage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        let intervalId = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setImage(imageIndex + 1 < images.length ? imageIndex + 1 : 0);
                setIsTransitioning(false);
            }, 1000);
        }, 8000);
        return () => clearInterval(intervalId);
    });

    return (
        <img src={"/bg_image" + (imageIndex + 1).toString() + ".jpg"}  className={`w-full h-auto rounded-3xl transition-opacity duration-1000 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`} alt="Background"></img>
    )
}

const Hero = () =>  {
    return (
        <div className="text-white">
            <div className="max-w-[calc(100vw - 40px)] mt-[-96px] w-full h-screen mx-auto px-6 md:flex md:flex-row items-center">
                <MotionDiv
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                    className="md:w-1/2"
                >
                    <div className="text-left mx-[70px] mt-[150px]">
                        <h1 className="md:text-3xl sm:text-xl text-lg font-bold md:py-6">
                           Take care of Earth !
                        </h1>
                        <p className="md:text-3xl sm:text-2xl text-lg mx-[25px]">
                            An App to see wildfire around the world.
                        </p>
                        <button
                            className="bg-lineColor w-[200px] rounded-md font-extrabold my-6 py-3 text-textColor mx-[50px]">
                            <Link to="/service">Get Started</Link>
                        </button>
                    </div>
                </MotionDiv>
                <MotionDiv
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                    className="md:w-1/2"
                >
                    <Image />
                </MotionDiv>
            </div>
        </div>
    );
}

export default Hero;