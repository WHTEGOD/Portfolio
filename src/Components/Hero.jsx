import React, { useEffect, useState, useRef } from "react";
import Profile from "../assets/Profile.png";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, staggerChildren: 0.5 } }
};

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const Hero = ({ isDarkMode }) => {
    const [text, setText] = useState("Pulkit Tiwari");
    const nameRef = useRef(null);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const originalText = "Pulkit Tiwari";

    // Randomize text effect
    useEffect(() => {
        let interval = null;

        const randomizeText = () => {
            let iteration = 0;
            clearInterval(interval);

            interval = setInterval(() => {
                setText(() => {
                    return originalText
                        .split("")
                        .map((char, index) => {
                            if (index < iteration) {
                                return originalText[index]; // Gradually fix letters
                            }
                            return letters[Math.floor(Math.random() * 26)]; // Random letters
                        })
                        .join("");
                });

                iteration += 1;

                // Gradually slow down the animation
                if (iteration > originalText.length) {
                    clearInterval(interval);
                }
            }, 20 + iteration * 5); // Increment delay for smoother finish
        };

        const handleMouseOver = () => {
            randomizeText();
        };

        const handleMouseOut = () => {
            clearInterval(interval);
            setText(originalText); // Reset to original text
        };

        const nameElement = nameRef.current;
        nameElement.addEventListener("mouseover", handleMouseOver);
        nameElement.addEventListener("mouseout", handleMouseOut);

        return () => {
            nameElement.removeEventListener("mouseover", handleMouseOver);
            nameElement.removeEventListener("mouseout", handleMouseOut);
            clearInterval(interval);
        };
    }, []);

    return (
        <div id="Hero" className="mt-12 mb-12 px-6 lg:px-12">
            <div id="intro" className="pb-4 lg:mb-36">
                <div className="flex flex-wrap lg:flex-nowrap items-center">
                    {/* Profile Picture - Adjusted Positioning */}
                    <div className="w-full lg:w-3/4 flex justify-center lg:justify-start">
                        <motion.img
                            src={Profile}
                            alt="Profile Picture"
                            className="rounded-lg shadow-lg w-3/4 lg:w-1/2"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full lg:w-2/3">
                        <div className="text-4xl lg:text-6xl font-bold">
                            <h1
                                ref={nameRef}
                                className={`${isDarkMode ? "text-white" : "text-black"}`}
                                style={{ display: "inline-block" }}
                            >
                                {text}
                            </h1>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={containerVariants}
                            viewport={{ once: true }}
                        >
                            <div className="text-2xl lg:text-4xl font-semibold">
                                <motion.span
                                    variants={childVariants}
                                    className={`bg-gradient-to-r ${
                                        isDarkMode
                                            ? "from-stone-300 to-stone-600"
                                            : "from-black to-gray-700"
                                    } bg-clip-text text-3xl tracking-tight text-transparent`}
                                >
                                    I'm a Full Stack Developer 
                                </motion.span>
                            </div>
                            <div className="text-lg lg:text-xl font-light">
                                <motion.p
                                    variants={childVariants}
                                    className={`${isDarkMode ? "text-stone-300" : "text-gray-700"}`}
                                >
                                    I'm a Full Stack Developer based in India. I have a passion for web development and love to create new things.
                                </motion.p>
                                <motion.p
                                    variants={childVariants}
                                    className={`${isDarkMode ? "text-stone-300" : "text-gray-700"} mt-2`}
                                >
                                    I am also passionate about Cybersecurity, constantly learning and implementing best practices to ensure the security and integrity of web applications.
                                </motion.p>
                            </div>
                            <div className="mt-4">
                                <motion.a
                                    variants={childVariants}
                                    href="/assets/Projects/Pulkit_Tiwari_Resume.pdf"
                                    download="Pulkit_Tiwari_Resume.pdf"
                                    className={`px-4 py-2 font-semibold rounded-md transition-all ${
                                        isDarkMode
                                            ? "bg-stone-300 text-black hover:bg-stone-400"
                                            : "bg-black text-white hover:bg-gray-800"
                                    }`}
                                >
                                    Download Resume
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
