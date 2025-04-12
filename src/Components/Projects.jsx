import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import projectImage1 from '../assets/Projects/DesktopCleaner.png';
import projectImage2 from '../assets/Projects/WebC.png';
import projectImage3 from '../assets/Projects/Amazon_Clone.png';

const iconvariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 1.5, ease: "easeOut" }
    }
};

const Projects = ({ isDarkMode }) => {
    const projects = [
        {
            name: "Desktop Cleaner",
            image: projectImage1,
            description: "An automated tool that organizes files on your desktop by categorizing them into folders.",
            technologies: ["Python", "Tkinter", "OS Module"],
            repo: "https://github.com/WHTEGOD/DesktopCleaner"
        },
        {
            name: "Universal Web Crawler",
            image: projectImage2,
            description: "A powerful web crawler that can scrape and index information from multiple websites.",
            technologies: ["Python", "BeautifulSoup", "Scrapy"],
            repo: "https://github.com/WHTEGOD/WebCrawler"
        },
        {
            name: "Amazon.com Clone",
            image: projectImage3,
            description: "A fully functional Amazon e-commerce clone with product listings, cart, and checkout system.",
            technologies: ["HTML","CSS","JavaScript"],
            repo: "https://github.com/WHTEGOD/AmazonClone"
        },
    ];

    return (
        <motion.div 
            id="projects" 
            className={`p-5 min-h-screen flex flex-col justify-center transition-all duration-500 ${
                isDarkMode ? "text-white" : "text-black"
            }`}
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
        >
            <motion.h1 
                className="text-5xl font-extrabold text-center mb-12"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                My Projects
            </motion.h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={`relative overflow-hidden rounded-lg p-4 transition-all duration-500 ${
                            isDarkMode 
                                ? "bg-black border border-stone-700 shadow-lg backdrop-blur-lg" 
                                : "bg-white border border-gray-300 shadow-md"
                        }`}
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true }}
                    >
                        <motion.div 
                            className="relative w-full h-0 pb-[66.66%] mb-6"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                            />
                        </motion.div>
                        <motion.div 
                            className="flex items-center gap-2 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                            <p className="text-xl font-bold">{project.name}</p>
                            <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                <FaGithub className={`text-xl transition ${
                                    isDarkMode ? "text-stone-400 hover:text-white" : "text-gray-700 hover:text-black"
                                }`} />
                            </a>
                        </motion.div>
                        <motion.p 
                            className={`mb-4 transition-all ${
                                isDarkMode ? "text-stone-400" : "text-gray-700"
                            }`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            {project.description}
                        </motion.p>
                        <motion.div 
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            {project.technologies.map((tech, i) => (
                                <span 
                                    key={i} 
                                    className={`px-2 py-1 text-sm rounded-lg transition-all ${
                                        isDarkMode ? "bg-stone-900 text-stone-300" : "bg-gray-200 text-gray-900"
                                    }`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;
