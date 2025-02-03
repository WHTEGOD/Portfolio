import React from "react";

// Example image imports (adjust the paths based on your project structure)
import projectImage1 from '../assets/Projects/DesktopCleaner.png';
import projectImage2 from '../assets/Projects/WebC.png';
import projectImage3 from '../assets/Projects/Amazon_Clone.png';


const Projects = () => {
    const projects = [
        {
            name: "Desktop Cleaner",
            image: projectImage1,
        },
        {
            name: "Universal Web Crawler",
            image: projectImage2,
        },
        {
            name: "Amazon.com Clone",
            image: projectImage3,
        },
       

        
        

        
        
    ];

    return (   
        <div id="projects" className="p-5 mi</div>n-h-screen flex flex-col justify-center" >
            <h1 id="Projects" className="text-5xl font-extrabold text-center mb-12 text-white">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (    
                    <div
                        key={index}
                        className="relative cursor-pointer overflow-hidden rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                        {/* Card Container with background color */}
                        <div className="relative bg-white/30 p-4 rounded-lg shadow-lg">
                            {/* Fixed height container with aspect ratio of 3:2 */}
                            <div className="relative w-full h-0 pb-[66.66%]">
                                {/* Project Image with 3:2 aspect ratio */}
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg mb-4"
                                />
                            </div>
                        </div>
                        {/* Project Name displayed under the card */}
                        <p className="mt-4 text-center text-xl font-bold text-white">{project.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
