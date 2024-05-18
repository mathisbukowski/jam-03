import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[calc(100vw - 40px)] mt-[-96px] w-full h-screen mx-auto px-6 md:flex md:flex-row items-center">
                <div className="md:w-1/2">
                    <div className="text-left mx-[70px] mt-[150px]">
                        <h1 className="md:text-3xl sm:text-xl text-lg font-bold md:py-6">
                            Take care of Earth !
                        </h1>
                        <p className="md:text-3xl sm:text-2xl text-lg mx-[25px]">
                            An App to see wildfire around the world.
                        </p>
                        <button className="bg-lineColor w-[200px] rounded-md font-extrabold my-6 py-3 text-textColor mx-[50px]">
                            <Link to="/service">Get Started</Link>
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-end mr-10">
                    <motion.img
                        src={"/bg_image1.jpg"}
                        alt={"HERO"}
                        className={"rounded-3xl"}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
