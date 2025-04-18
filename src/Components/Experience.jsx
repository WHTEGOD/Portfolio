import React from "react";

const Experience = ({ isDarkMode }) => {
    const experiences = [
        {
            year: "Sep 2024 - Present",
            role: "Public Relation Core",
            company: "UPES-CSA",
            description: `As a PR Core Team Member at CSA, I have organized and managed events, enhancing communication and leadership skills.
             I built strong industry connections through networking and effective event coordination.
             My role involved executing PR strategies to expand outreach and engagement.
             This experience strengthened my ability to manage communications and collaborate with diverse teams.`,
            technologies: ["Communications", "Leadership", "Teamwork", "Networking"],
        },
        {
            year: "Sep 2024 - Apr 2025",
            role: "Technical Core",
            company: "UPES-Hypervision",
            description: `As a Technical Core Team Member at Hypervision, I contributed to projects, improving problem-solving and analytical skills.
             I managed data analysis, optimized workflows, and collaborated on event execution.
             This role enhanced my technical expertise and teamwork in a structured environment.
             It also refined my project management and innovation capabilities.`,
            technologies: ["JavaScript", "React.js", "Node.js", "RESTful APIs"],
        },
    ];

    return (
        <div id="experience" className="mt-12 mb-12 px-4 sm:px-6 lg:px-12 transition-all duration-500">
            <h2 className={`text-3xl my-16 font-bold text-center transition-all ${
                isDarkMode ? "text-white" : "text-black"
            }`}>
                Experience
            </h2>
            <div className="space-y-12">
                {experiences.map((experience, index) => (
                    <div key={index} className="flex flex-col lg:flex-row lg:justify-center lg:items-start gap-4">
                        <div className="w-full lg:w-1/4 text-center lg:text-left">
                            <p className={`text-sm transition-all ${
                                isDarkMode ? "text-stone-400" : "text-gray-700"
                            }`}>
                                {experience.year}
                            </p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h3 className={`text-lg font-semibold mb-2 transition-all ${
                                isDarkMode ? "text-white" : "text-black"
                            }`}>
                                {experience.role} - 
                                <span className={`ml-1 text-sm transition-all ${
                                    isDarkMode ? "text-stone-500" : "text-gray-700"
                                }`}>
                                    {experience.company}
                                </span>
                            </h3>
                            <p className={`text-sm mb-4 transition-all ${
                                isDarkMode ? "text-stone-300" : "text-gray-700"
                            }`}>
                                {experience.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {experience.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className={`rounded px-2 py-1 text-xs font-medium transition-all ${
                                            isDarkMode ? "bg-stone-900 text-stone-300" : "bg-gray-200 text-gray-900"
                                        }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
