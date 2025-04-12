import { useState } from "react";

const AboutMe = ({ isDarkMode }) => {
    const [selectedRole, setSelectedRole] = useState("anyone");

    const content = {
        anyone: "Hello there, I’m a second-year student passionate about creating innovative and crazy designs in my projects.",
        recruiters: "I’m a second-year student with a knack for creative problem-solving and a portfolio of unique design projects.",
        designDirectors: "I specialize in experimenting with bold and unconventional designs that push boundaries.",
        productDesigners: "I love crafting user experiences that are both functional and visually striking, inspired by my academic journey.",
        productManagers: "I enjoy collaborating with teams to bring imaginative ideas to life through design and development.",
        engineers: "I work closely with developers to ensure my designs are both creative and technically feasible."
    };

    return (
        <div className={`p-6 text-center transition-all duration-500 ${isDarkMode ? "text-white" : "text-black"}`}>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                {Object.keys(content).map((role) => (
                    <button
                        key={role}
                        onClick={() => setSelectedRole(role)}
                        className={`px-4 py-2 rounded-lg transition-all border ${
                            selectedRole === role 
                                ? (isDarkMode ? "border-white text-white" : "border-black text-black") 
                                : (isDarkMode ? "border-gray-500 text-gray-300" : "border-gray-300 text-black")
                        }`}
                    >
                        {role.charAt(0).toUpperCase() + role.slice(1)}
                    </button>
                ))}
            </div>

            {/* Dynamic Content */}
            <p className="text-2xl font-semibold transition-all">{content[selectedRole]}</p>
        </div>
    );
};

export default AboutMe;
