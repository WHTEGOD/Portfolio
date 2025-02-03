import React from "react";
import { SiMongodb, SiHtml5, SiPython, SiMysql, SiExpress, SiJavascript, SiTailwindcss } from "react-icons/si";
import { TbBrandReact, TbBrandNodejs, TbBrandCss3 } from "react-icons/tb";
import { motion } from "framer-motion";

const iconvariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const Technologies = () => {       
    return (
            <div id="technologies">
                <div id="technologies" className="mt-12 mb-12 p-5 text-center">
                    <motion.h1
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1.5 }}
                        className="text-6xl font-bold mb-12 text-white relative group inline-block">
                        Technologies
                        <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-white transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </motion.h1>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.5 }}
                        className="p-4 flex flex-wrap justify-center gap-8">
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={iconvariants(2)}
                            className="flex justify-center items-center m-2 cursor-pointer transform transition-all hover:scale-110 hover:rotate-6 hover:shadow-xl">
                            <SiMongodb className="text-8xl text-green-500" />
                        </motion.div>

                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={iconvariants(3)}
                            className="flex justify-center items-center m-2 cursor-pointer transform transition-all hover:scale-110 hover:rotate-6 hover:shadow-xl">
                            <TbBrandReact className="text-8xl text-blue-500" />
                        </motion.div>

                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={iconvariants(5)}
                            className="flex justify-center items-center m-2 cursor-pointer transform transition-all hover:scale-110 hover:rotate-6 hover:shadow-xl">
                            <TbBrandNodejs className="text-8xl text-green-500" />
                        </motion.div>

                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={iconvariants(3)}
                            className="flex justify-center items-center m-2 cursor-pointer transform transition-all hover:scale-110 hover:rotate-6 hover:shadow-xl">
                            <TbBrandCss3 className="text-8xl text-blue-500" />
                        </motion.div>

                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={iconvariants(6)}
                            className="flex justify-center items-center m-2 cursor-pointer transform transition-all hover:scale-110 hover:rotate-6 hover:shadow-xl">
                            <SiHtml5 className="text-8xl text-orange-500" />
                        </motion.div>

                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={iconvariants(9)}
                            className="flex justify-center items-center m-2 cursor-pointer transform transition-all hover:scale-110 hover:rotate-6 hover:shadow-xl">
                            <SiPython className="text-8xl text-yellow-500" />
                        </motion.div>

                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={iconvariants(7)}
                            className="flex justify-center items-center m-2 cursor-pointer transform transition-all hover:scale-110 hover:rotate-6 hover:shadow-xl">
                            <SiMysql className="text-8xl text-blue-500" />
                        </motion.div>

                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={iconvariants(5)}
                            className="flex justify-center items-center m-2 cursor-pointer transform transition-all hover:scale-110 hover:rotate-6 hover:shadow-xl">
                            <SiExpress className="text-8xl text-gray-500" />
                        </motion.div>

                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={iconvariants(7)}
                            className="flex justify-center items-center m-2 cursor-pointer transform transition-all hover:scale-110 hover:rotate-6 hover:shadow-xl">
                            <SiJavascript className="text-8xl text-yellow-500" />
                        </motion.div>

                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={iconvariants(4)}
                            className="flex justify-center items-center m-2 cursor-pointer transform transition-all hover:scale-110 hover:rotate-6 hover:shadow-xl">
                            <SiTailwindcss className="text-8xl text-blue-500" />
                        </motion.div>
                    </motion.div>
                </div>
             </div>
    );
};

export default Technologies;
