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

const Technologies = ({ isDarkMode }) => {       
    return (
            <div id="technologies">
                <div id="technologies" className="mt-12 mb-12 p-5 text-center transition-all duration-500">
                    <motion.h1
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1.5 }}
                        className={`text-6xl font-bold mb-12 relative group inline-block transition-all ${
                            isDarkMode ? "text-white" : "text-black"
                        }`}
                    >
                        Technologies
                        <span className={`absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-1/4 h-1 transition-all duration-300 group-hover:w-full rounded-full ${
                            isDarkMode ? "bg-white" : "bg-black"
                        }`}></span>
                    </motion.h1>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.5 }}
                        className="p-4 flex flex-wrap justify-center gap-8"
                    >
                        {[ 
                            { component: SiMongodb, color: "text-green-500", duration: 2 },
                            { component: TbBrandReact, color: "text-blue-500", duration: 3 },
                            { component: TbBrandNodejs, color: "text-green-500", duration: 5 },
                            { component: TbBrandCss3, color: "text-blue-500", duration: 3 },
                            { component: SiHtml5, color: "text-orange-500", duration: 6 },
                            { component: SiPython, color: "text-yellow-500", duration: 9 },
                            { component: SiMysql, color: "text-blue-500", duration: 7 },
                            { component: SiExpress, color: "text-gray-500", duration: 5 },
                            { component: SiJavascript, color: "text-yellow-500", duration: 7 },
                            { component: SiTailwindcss, color: "text-blue-500", duration: 4 }
                        ].map(({ component: Icon, color, duration }, index) => (
                            <motion.div
                                key={index}
                                initial="initial"
                                animate="animate"
                                variants={iconvariants(duration)}
                                className={`flex justify-center items-center m-2 cursor-pointer transform transition-all hover:scale-110 hover:rotate-6 ${
                                    isDarkMode ? "hover:shadow-white" : "hover:shadow-black"
                                }`}
                            >
                                <Icon className={`text-8xl ${color}`} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
             </div>
    );
};

export default Technologies;
