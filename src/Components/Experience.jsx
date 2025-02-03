import React from "react";

const Experience = () => {
    const experiences = [
        {
            year: "2024 - Present",
            role: "Public Relation Core",
            company: "UPES-CSA",
            description: `As a PR Core Team Member at CSA, I have organized and managed events, enhancing communication and leadership skills.
             I built strong industry connections through networking and effective event coordination.
             My role involved executing PR strategies to expand outreach and engagement.
             This experience strengthened my ability to manage communications and collaborate with diverse teams.`,
            technologies: ["Communications", "Leadership", "Teamwork", "Networking "],
        },
        {
            year: "2024 - Present",
            role: "Technical Core ",
            company: "UPES-Hypervision",
            description: `As a Technical Core Team Member at Hypervision, I contributed to projects, improving problem-solving and analytical skills.
             I managed data analysis, optimized workflows, and collaborated on event execution.
             This role enhanced my technical expertise and teamwork in a structured environment.
             It also refined my project management and innovation capabilities.`,
            technologies: ["JavaScript", "React.js", "Node.js", "RESTful APIs"],
        },
    ];

    return (
        <div id="experience" className="mt-12 mb-12 px-6 lg:px-12 text-white">
            <h2 id = "experience" className="text-3xl my-20 font-bold mb-8 text-center">Experience</h2>
            <div className="space-y-8">
                {experiences.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb-2 font-semibold">
                                {experience.role} - <span className="text-sm text-stone-500">{experience.company}</span>
                            </h3>
                            <p className="mb-4 text-stone-400">{experience.description}</p>
                            <div>
                                {experience.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
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
